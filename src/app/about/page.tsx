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

            <div className="mb-16 max-w-4xl">
              <div className="mb-12">
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

          </div>
        </div>
      </section>
    </div>
  );
} 