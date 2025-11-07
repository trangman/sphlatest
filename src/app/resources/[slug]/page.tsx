import Hero from '@/components/Hero';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import MarkdownContent from '@/components/MarkdownContent';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts
    .filter((post) => post.frontmatter.showOnSPH === true)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} | Siam Property Holdings`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.heroImage ? [post.frontmatter.heroImage] : [],
    },
    alternates: {
      canonical: `http://betterthenfreehold.com/${params.slug}`,
    },
  };
}

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.frontmatter.showOnSPH) {
    notFound();
  }

  return (
    <div>
      <Hero 
        title={post.frontmatter.title}
        subtitle={post.frontmatter.description}
        variant="inner"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Image */}
          {post.frontmatter.heroImage && (
            <div className="mb-8">
              <img 
                src={post.frontmatter.heroImage} 
                alt={post.frontmatter.title}
                className="w-full rounded-lg"
                style={{ height: 'auto' }}
              />
            </div>
          )}

          {/* Publication Date */}
          {post.frontmatter.pubDate && (
            <div className="text-sm text-gray-600 mb-8">
              Published: {new Date(post.frontmatter.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}

          {/* Content */}
          <article>
            <MarkdownContent content={post.content} />
          </article>

          {/* Attribution */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600 italic">
              Originally published on{' '}
              <a 
                href={`https://betterthanfreehold.com/${params.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Better-than-Freehold™
              </a>.
              {' '}Reproduced here with permission for educational and investor reference.{' '}
              Better-than-Freehold™ is a proprietary ownership structure developed by Venture Management Ltd.{' '}
              and delivered exclusively through Siam Property Holdings Ltd. (SPH).
            </p>
            <hr className="mt-6 border-gray-300" />
          </div>

          {/* Back to Resources */}
          <div className="mt-8 text-center">
            <Link 
              href="/resources"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

