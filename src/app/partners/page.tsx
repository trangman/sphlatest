import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Partners - Strategic Alliances | Siam Property Holdings",
  description: "Learn about SPH's strategic partnerships with Thailand Investor Network, Clear Blue Security Agents, and other trusted organizations providing secure investment solutions.",
  keywords: "SPH partners, Thailand Investor Network, Clear Blue Security Agents, strategic partnerships, real estate investment partners",
  openGraph: {
    title: "Our Partners - Strategic Alliances",
    description: "Learn about SPH's strategic partnerships providing secure investment solutions across Southeast Asia.",
    url: "https://siampropertyholdings.com/partners",
  },
  alternates: {
    canonical: "https://siampropertyholdings.com/partners",
  },
};

// Partner Card component
const PartnerCard = ({ 
  name, 
  role, 
  description, 
  website 
}: { 
  name: string; 
  role: string; 
  description: string; 
  website?: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="h-16 w-full bg-gray-200 rounded-md mb-6">
        {/* Logo placeholder */}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{name}</h3>
      <p className="text-blue-700 font-medium mb-4">{role}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      {website && (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          Visit Website
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default function Partners() {
  return (
    <div>
      <Hero 
        title="Our Partners" 
        subtitle="Working together to provide secure investment solutions"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              At Siam Property Holdings, we partner with established, reputable organizations to ensure the highest level of security and service for our members. Our strategic partnerships provide the foundation for our asset-backed guarantees and comprehensive investment solutions.
            </p>
          </div>
          
          {/* Key Partners Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Key Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PartnerCard 
                name="Thailand Investor Network (TIN)" 
                role="Local Partner in Thailand" 
                description="Our exclusive Thai partner who provides us and our investors with an 'Asset Backed Performance Guarantee' securing our investments in Thai Property."
                website="https://www.thailandinvestornetwork.com"
              />
              
              <PartnerCard 
                name="Clear Blue" 
                role="Security Agent in Thailand" 
                description="Operates under the Thai Business Security Act managing share pledges and mortgages over assets SPH invest in which are owned by our local partners."
                website="https://www.clearblue.th"
              />
              
              <PartnerCard 
                name="Venture Management" 
                role="Founding Member" 
                description="Committed capital and resources enabling us to offer exclusive and valuable member service."
                website="https://www.venturemanagement.my"
              />
              
              <PartnerCard 
                name="Nishimura and Asahi" 
                role="Legal Partner" 
                description="Providing legal opinions, contract drafting and ongoing advice which we rely on as part of the VM network partners."
                website="https://www.nishimura.com/en"
              />
              
              <PartnerCard 
                name="Labuan Financial Services Authority" 
                role="Regulatory Authority" 
                description="SPH is authorized and regulated by the LFSA, ensuring compliance with all applicable financial regulations."
                website="https://www.labuanfsa.gov.my"
              />
              
              <PartnerCard 
                name="Siam Venture Capital PCC" 
                role="Investment Partner" 
                description="Collaborates with SPH to create blockchain enabled assets such as property backed NFTs and security tokens."
              />
            </div>
          </div>
          
          {/* Partnership Approach */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Partnership Approach</h2>
            <p className="text-lg mb-4">
              Our partnerships are carefully selected to create a complete ecosystem that supports foreign investment in Southeast Asian property. Each partner plays a crucial role in our overall solution:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span><strong>Local Partners</strong> provide on-the-ground expertise and legally own land assets in which we invest</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span><strong>Security Agents</strong> manage asset-backed guarantees and ensure proper legal documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span><strong>Legal Partners</strong> provide comprehensive legal opinions and contract drafting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span><strong>Financial Partners</strong> enable financing solutions for property development and investment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span><strong>Technology Partners</strong> support our blockchain initiatives and digital solutions</span>
              </li>
            </ul>
            <p className="text-lg">
              This integrated approach creates a seamless experience for our members while providing unparalleled security for their investments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 