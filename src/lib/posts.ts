import fs from 'fs';
import path from 'path';

export interface PostFrontmatter {
  title: string;
  description: string;
  pubDate?: string;
  heroImage?: string;
  categories?: string;
  audience?: string;
  featured?: boolean;
  showOnSPH?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

/**
 * Extract content from MDX file (removes frontmatter)
 */
function extractContent(content: string): string {
  // Match frontmatter block: --- ... --- followed by optional whitespace/newlines
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n*/;
  return content.replace(frontmatterRegex, '').trim();
}

/**
 * Parse frontmatter from MDX file content
 */
function parseFrontmatter(content: string): PostFrontmatter {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { title: '', description: '' };
  }

  const frontmatterText = match[1];
  const frontmatter: any = {};

  // Parse YAML-like frontmatter
  frontmatterText.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse boolean values
      if (value === 'true') {
        frontmatter[key] = true;
      } else if (value === 'false') {
        frontmatter[key] = false;
      } else {
        frontmatter[key] = value;
      }
    }
  });

  return frontmatter as PostFrontmatter;
}

/**
 * Get all posts from the content/posts directory
 */
export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts: Post[] = [];

  fileNames.forEach((fileName) => {
    if (!fileName.endsWith('.mdx')) {
      return;
    }

    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const frontmatter = parseFrontmatter(fileContents);
    const content = extractContent(fileContents);
    
    // Create slug from filename (remove .mdx extension)
    const slug = fileName.replace(/\.mdx$/, '');

    posts.push({
      slug,
      frontmatter,
      content,
    });
  });

  return posts;
}

/**
 * Get posts that have showOnSPH: true
 */
export function getSPHPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.frontmatter.showOnSPH === true);
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}

