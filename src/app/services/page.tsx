import Hero from '@/components/Hero';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Service card component
const ServiceCard = ({ title, subtitle, bullets, icon }: { title: string, subtitle: string, bullets: string[], icon: string }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-800">
          <span className="text-3xl">{icon}</span>
        </div>
        <CardTitle className="text-xl font-bold text-blue-900">{title}</CardTitle>
        <CardDescription className="text-gray-600 font-medium">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
};

export default function Services() {
  const services = [
    {
      title: "Real Estate Trust Solutions",
      subtitle: "Own, manage, and pass on real estate assets securely.",
      bullets: [
        "Holding structures for commercial & residential properties",
        "Real estate within private trusts (offshore)",
        "Succession planning for family-owned property portfolios",
        "Trust structuring for property developers and landlords",
        "Estate tax mitigation in real estate-rich jurisdictions"
      ],
      icon: "🏠"
    },
    {
      title: "Asia-Focused Trust & Fiduciary Services",
      subtitle: "Onshore and offshore structures tailored for Global families.",
      bullets: [
        "Trust setup in Labuan",
        "Private Trust Companies (PTCs) for family control",
        "Purpose & family trusts for legacy and philanthropy",
        "Trust restructuring for evolving regulations (e.g. CRS, FATCA)"
      ],
      icon: "🌏"
    },
    {
      title: "Wealth Structuring & Succession Planning",
      subtitle: "Long-term planning for generational wealth transfer.",
      bullets: [
        "Multi-jurisdictional estate planning",
        "Inheritance solutions for families with cross-border beneficiaries",
        "Asset protection from political, legal, or market risks",
        "Support for expatriates, global citizens, and international families"
      ],
      icon: "💼"
    },
    {
      title: "Corporate Structures for Real Estate Investment",
      subtitle: "Smart structures for efficient property ownership and transfer.",
      bullets: [
        "Offshore-onshore companies/SPVs for property holding",
        "Joint ventures & co-investment strategies",
        "Corporate governance, compliance & reporting",
        "Exit planning & capital gains optimisation"
      ],
      icon: "🧱"
    }
  ];

  return (
    <div>
      <Hero 
        title="Our Services" 
        subtitle="Professional solutions for secure property investment in Southeast Asia"
        variant="inner"
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
                subtitle={service.subtitle}
                bullets={service.bullets}
                icon={service.icon}
              />
            ))}
          </div>
          
          {/* Jurisdictions Section */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-6">Jurisdictions We Specialize In</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Asian Markets & Holding Jurisdictions:</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Thailand Real Estate Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Bangkok', 'Samui', 'Phuket', 'Krabi', 'Chon Buri', 'Chiang Mai'].map((city) => (
                        <Badge key={city} variant="secondary" className="text-sm">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Typical Trust Beneficiary Jurisdictions:</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Singapore', 'Hong Kong', 'Korea', 'Japan', 'UAE', 'UK', 'Australia', 'New Zealand', 'Europe', 'USA'].map((country) => (
                      <Badge key={country} variant="outline" className="text-sm">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-6 text-center">
                We help you select the most efficient ownership and usage rights structure based on your tax residency, property investment strategy and succession goals.
              </p>
            </CardContent>
          </Card>
          
          {/* Who We Serve Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Real estate investors and developers",
                "Family offices with multi-property portfolios", 
                "Asian business families with global assets",
                "Foreign investors in Asian property markets",
                "Expatriates with cross-border real estate holdings",
                "Legal and tax advisors seeking trust structuring for clients"
              ].map((client, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800">{client}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to secure your investments?</h2>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8">
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 