import Hero from '@/components/Hero';
import Link from 'next/link';

// Service card component
const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-800">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
};

export default function Services() {
  const services = [
    {
      title: "Trustee Services",
      description: "Trusts provide a flexible alternative to corporations particularly where an asset trading platform is required. By using SPH to hold assets in trust investors can Pledge them as security for finance or trade them intra platform by a simple re-assignment.",
      icon: "🏛️"
    },
    {
      title: "Sophisticated Financial Solutions",
      description: "Various personalised structures can be enabled depending on your tax resident status and jurisdictional tax regulations that enable range tax mitigation and asset protection strategies.",
      icon: "💼"
    },
    {
      title: "Development Companies",
      description: "Offshore development companies located in Labuan can own rights to land through the SPH platform, apply for building permits and manage projects using local contractors, sale and management agents.",
      icon: "🏗️"
    },
    {
      title: "Seamless Asset Trading",
      description: "The SPH trust platform allows seamless asset trading, tax free in Labuan. Thai assets can therefore be acquired, funded, and sold with tax due only on repatriation of funds to Thai tax resident owners.",
      icon: "🔄"
    },
    {
      title: "Corporate Structuring",
      description: "SPH can establish and help manage development companies offshore in the Labuan low tax environment which also benefits from multiple double taxation treaties under the Malaysian flag.",
      icon: "📊"
    },
    {
      title: "Professional Management",
      description: "As trustees we provide professional and prudent management of assets based on the trust deed mandate you establish. Properly constructed Labuan Trusts provide multiple opportunities for asset protection.",
      icon: "👨‍💼"
    },
    {
      title: "Asset Backed Guarantees",
      description: "We create and manage guarantee from local corporations that own assets or act as custodians on our behalf.",
      icon: "🔐"
    },
    {
      title: "Democratisation of Solutions",
      description: "Our solutions are extremely sophisticated yet simple to use, and we make them available on a cost effective basis by sharing costs across multiple members.",
      icon: "👥"
    }
  ];

  return (
    <div>
      <Hero 
        title="Our Services" 
        subtitle="Professional solutions for secure property investment in Southeast Asia"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg mb-8">
              At SPH, we offer a comprehensive range of services designed to provide foreign investors with secure access to Southeast Asian property markets. Our solutions combine legal expertise, local partnerships, and innovative financial structures to create a secure investment environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          {/* Blockchain & Technology Section */}
          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Blockchain & Technology</h2>
            <p className="text-lg mb-6">
              SPH can also create blockchain enabled assets such as property backed NFT's and security Tokens (in association with Venture Management and Siam Venture Capital PCC).
            </p>
            <p className="text-lg">
              Our platform is designed to evolve into a blockchain enabled community, providing enhanced security, transparency, and trading capabilities for our members.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to secure your investments?</h2>
            <Link 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 