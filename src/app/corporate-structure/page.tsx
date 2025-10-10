import Hero from '@/components/Hero';

// Board Member component
interface BoardMemberProps {
  name: string;
  title: string;
  description: string;
}

const BoardMember = ({ name, title, description }: BoardMemberProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{name}</h3>
      <p className="text-blue-800 font-medium mb-3">{title}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default function CorporateStructure() {
  return (
    <div>
      <Hero 
        title="Corporate Structure" 
        subtitle="Learn about our organization and leadership team"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          {/* Our Shareholders Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Shareholders</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg mb-4">
                As a company limited by guarantee, we have no shareholders. Venture Management (www.venturemanagement.my) was our founding member, committing capital and resources enabling us to offer exclusive and valuable member services.
              </p>
              <p className="text-lg">
                This structure allows us to focus entirely on providing value to our members without the pressure of delivering returns to shareholders, ensuring our interests are always aligned with those of our members.
              </p>
            </div>
          </div>
          
          {/* Our Board Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Board</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <BoardMember 
                name="Mr. Spencer Roberts" 
                title="Chairman" 
                description="With over 20 years of experience in international finance and property investment, Spencer leads our strategic vision and international partnerships."
              />
              <BoardMember 
                name="Local Labuan Executive" 
                title="CEO" 
                description="Our CEO brings extensive experience in the Labuan financial services sector, ensuring compliance with all regulatory requirements and overseeing day-to-day operations."
              />
              <BoardMember 
                name="Mr. Justin Wright" 
                title="Director" 
                description="Justin specializes in international tax planning and corporate structuring, helping our members optimize their investment strategies."
              />
              <BoardMember 
                name="James Sutherland" 
                title="CFO" 
                description="James oversees all financial operations, ensuring the security and transparency of our financial processes and reporting."
              />
            </div>
          </div>
          
          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Services</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Trust Creation and Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Company Formation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Corporate Structuring and Tax Planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Off-Market Distressed Asset Acquisition (with local partners)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Land and Property Acquisition for Co-investment (with local partners)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Financing via Exclusive Offshore Partnerships</span>
              </li>
            </ul>
          </div>
          
          {/* Partners and Advisors Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Partners, Advisors & Advisory Board</h2>
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-lg mb-4">
                <span className="font-semibold">Nishimura and Asahi</span> (<a href="https://www.nishimura.com/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.nishimura.com/en</a>) act for Siam Property Holdings Ltd and Venture Management Ltd providing legal opinions, contract drafting and ongoing advice which we rely on as part of the VM network partners.
              </p>
              <p className="text-lg">
                Our network of partners and advisors ensures that we have access to the best expertise in property law, investment, and finance across Southeast Asia, providing our members with comprehensive support for their investment needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 