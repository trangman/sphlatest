import Hero from '@/components/Hero';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getSPHPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: "Resources & Insights - Real Estate Investment Guides | Siam Property Holdings",
  description: "Comprehensive resources and insights for foreign property investment in Southeast Asia. Guides on Thai real estate, trust structures, and Better-than-Freehold™ solutions.",
  keywords: "real estate investment guides, Thai property resources, Southeast Asia property insights, trust structure guides, Better than Freehold resources",
  openGraph: {
    title: "Resources & Insights - Real Estate Investment Guides",
    description: "Comprehensive resources and insights for foreign property investment in Southeast Asia.",
    url: "https://siampropertyholdings.com/resources",
  },
  alternates: {
    canonical: "http://betterthenfreehold.com/resources",
  },
};

// Resource Card component
const ResourceCard = ({ title, description, link, heroImage }: { title: string; description: string; link: string; heroImage?: string }) => {
  return (
    <Link href={link} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden h-full cursor-pointer">
        {heroImage && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={heroImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="inline-flex items-center text-blue-600 hover:text-blue-800">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Resources() {
  // Get posts with showOnSPH: true from content folder
  const sphPosts = getSPHPosts();
  
  // Convert posts to resource format
  const resources = sphPosts.map((post) => ({
    slug: post.slug,
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    link: `/resources/${post.slug}`,
    heroImage: post.frontmatter.heroImage
  }));

  return (
    <div>
      <Hero 
        title="Insights & Articles" 
        subtitle="Real Estate & Trust Planning"
        variant="inner"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              We've compiled a comprehensive set of resources to help you understand the complexities of foreign property investment in Southeast Asia and how our solutions address these challenges. Explore our guides, articles, and tools to make informed investment decisions.
            </p>
          </div>
          
          {/* Resource Cards */}
          {resources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {resources.map((resource) => (
                <ResourceCard 
                  key={resource.slug}
                  title={resource.title}
                  description={resource.description}
                  link={resource.link}
                  heroImage={resource.heroImage}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 mb-16">
              <p className="text-lg text-gray-600">
                Resources are coming soon. Check back later for updates.
              </p>
            </div>
          )}
          
          {/* Blog Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Latest News & Updates</h2>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <p className="text-lg mb-6">
                Our blog is coming soon! Subscribe to our newsletter to receive updates on Thai property market insights, regulatory changes, and investment opportunities.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Learn More?</h2>
            <p className="mb-6">
              Our team is available to answer any questions and provide personalized guidance for your investment needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 