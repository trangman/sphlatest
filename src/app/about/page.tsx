import Hero from '@/components/Hero';

export default function About() {
  return (
    <div>
      <Hero 
        title="About Us" 
        variant="inner"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We are a boutique wealth management and fiduciary firm focused on the intersection of real estate investment and trust structuring across S.E. Asia. From Thailand and Singapore to the UK and beyond, we provide high-net-worth individuals, property developers, buyers & investors and family offices with tailored structures to invest, protect, grow, and transfer real estate wealth with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
                <p className="text-gray-600">
                  To simplify complex real estate and wealth holdings across borders through compliant, tax-efficient, and future-ready trust structures.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Edge in Asia & Real Estate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-600">Deep understanding of S.E. Asian real estate markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-600">Expertise in cross-border structuring involving real estate in Thailand for Australian, Asian and European HNW's and single dwelling property investors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-600">Local presence and regional team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-600">Proven experience managing real estate within trust structures</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Global Reach</h3>
              <p className="text-gray-600 mb-6">
                With trust operations in Labuan, teams in Thailand and Singapore, and partnerships in the UK, Australia, and Asia, SPH bridges continents to deliver secure, compliant property ownership and wealth continuity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Asian Markets & Holding Jurisdictions:</h4>
                  <div className="space-y-2">
                    <div>
                      <h5 className="font-medium text-gray-700">Thailand Real Estate Focus Areas:</h5>
                      <p className="text-sm text-gray-600">Bangkok, Samui, Phuket, Krabi, Chon Buri, Chiang Mai</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Typical Trust Beneficiary Jurisdictions:</h4>
                  <p className="text-sm text-gray-600">
                    Singapore, Hong Kong, Korea, Japan, UAE, UK, Australia, New Zealand, Europe, USA
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 mt-6 text-sm">
                We help you select the most efficient ownership and usage rights structure based on your tax residency, property investment strategy and succession goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 