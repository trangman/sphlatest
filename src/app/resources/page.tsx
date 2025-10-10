import Hero from '@/components/Hero';
import Link from 'next/link';

// Resource Card component
const ResourceCard = ({ title, description, link, icon }: { title: string; description: string; link: string; icon: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link 
        href={link} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default function Resources() {
  // Sample resource items
  const resources = [
    {
      title: "Guide to Thai Property Laws",
      description: "Understand the legal framework governing foreign investment in Thai property and how SPH navigates these regulations.",
      link: "#",
      icon: "📋"
    },
    {
      title: "Asset-Backed Guarantees Explained",
      description: "Learn how our asset-backed guarantee system works to protect your investments and provide security.",
      link: "#",
      icon: "🔐"
    },
    {
      title: "Benefits Comparison Guide",
      description: "Compare different investment approaches in Thailand and see how the SPH solution stacks up against alternatives.",
      link: "#",
      icon: "📊"
    },
    {
      title: "Investment Process Overview",
      description: "Step-by-step guide to investing through SPH, from initial contact to securing your investment.",
      link: "#",
      icon: "🔄"
    },
    {
      title: "Tax Planning for Property Investors",
      description: "Understand the tax implications of investing in Thai property and strategies for optimization.",
      link: "#",
      icon: "💰"
    },
    {
      title: "Blockchain in Property Investment",
      description: "Discover how SPH is leveraging blockchain technology to enhance security and tradability.",
      link: "#",
      icon: "🔗"
    }
  ];

  return (
    <div>
      <Hero 
        title="Resources" 
        subtitle="Educational materials and guides to help you understand our services"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              We've compiled a comprehensive set of resources to help you understand the complexities of foreign property investment in Southeast Asia and how our solutions address these challenges. Explore our guides, articles, and tools to make informed investment decisions.
            </p>
          </div>
          
          {/* Resource Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <ResourceCard 
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                icon={resource.icon}
              />
            ))}
          </div>
          
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
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Need more information?</h2>
            <p className="mb-6">
              Our team is available to answer any questions and provide personalized guidance for your investment needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 