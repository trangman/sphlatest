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
      title: "Real Estate Trust Solutions",
      description: "Own, manage, and pass on real estate assets securely. Holding structures for commercial & residential properties, real estate within private trusts (offshore), succession planning for family-owned property portfolios, trust structuring for property developers and landlords, estate tax mitigation in real estate-rich jurisdictions.",
      icon: "🏠"
    },
    {
      title: "Asia-Focused Trust & Fiduciary Services",
      description: "Onshore and offshore structures tailored for Global families. Trust setup in Labuan, Private Trust Companies (PTCs) for family control, Purpose & family trusts for legacy and philanthropy, Trust restructuring for evolving regulations (e.g. CRS, FATCA).",
      icon: "🌏"
    },
    {
      title: "Wealth Structuring & Succession Planning",
      description: "Long-term planning for generational wealth transfer. Multi-jurisdictional estate planning, Inheritance solutions for families with cross-border beneficiaries, Asset protection from political, legal, or market risks, Support for expatriates, global citizens, and international families.",
      icon: "💼"
    },
    {
      title: "Corporate Structures for Real Estate Investment",
      description: "Smart structures for efficient property ownership and transfer. Offshore-onshore companies/SPVs for property holding, Joint ventures & co-investment strategies, Corporate governance, compliance & reporting, Exit planning & capital gains optimisation.",
      icon: "🧱"
    }
  ];

  return (
    <div>
      <Hero 
        title="Our Services" 
        subtitle="Professional solutions for secure property investment in Southeast Asia"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Clients benefit from a 'Better than Freehold™ ("BtF") wrapper' in terms of our project management for international real estate developers. We ensure operating structures and protections are as close as possible to executing a deal in their home jurisdiction no matter where clients are in the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          {/* Jurisdictions Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Jurisdictions We Specialize In</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Asian Markets & Holding Jurisdictions:</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Thailand Real Estate Focus Areas:</h4>
                  <p className="text-gray-600">Bangkok, Samui, Phuket, Krabi, Chon Buri, Chiang Mai</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Typical Trust Beneficiary Jurisdictions:</h3>
                <p className="text-gray-600">
                  Singapore, Hong Kong, Korea, Japan, UAE, UK, Australia, New Zealand, Europe, USA
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 mt-6 text-center">
              We help you select the most efficient ownership and usage rights structure based on your tax residency, property investment strategy and succession goals.
            </p>
          </div>
          
          {/* Who We Serve Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Real estate investors and developers</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Family offices with multi-property portfolios</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Asian business families with global assets</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Foreign investors in Asian property markets</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Expatriates with cross-border real estate holdings</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Legal and tax advisors seeking trust structuring for clients</h3>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to secure your investments?</h2>
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