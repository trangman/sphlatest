import Hero from '@/components/Hero';

export default function About() {
  return (
    <div>
      <Hero 
        title="About SPH" 
        subtitle="Your Trusted Partner in Southeast Asian Property Investment"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-8">
              SPH was founded with the objective of empowering investors and providing access to a centralized securitization and trading platform that can evolve into a blockchain enabled community. With trading of beneficial interests offshore in Labuan, we can provide enhanced Investor Protection and Finance.
            </p>

            <p className="text-lg mb-8">
              Asset Backed Guarantees are managed on behalf of SPH by local agents in each jurisdiction. In Thailand, we use Clear Blue (www.clearblue.th) who operate under the Thai Business Security Act managing share pledges and mortgages over assets SPH invest in which are owned by our local partners TIN.
            </p>

            <h2 className="text-3xl font-bold text-blue-900 mt-12 mb-6">Our Philosophy</h2>
            <p className="mb-6">
              At Siam Property Holdings, we believe that foreign investors should have access to the same level of security and legal protection as local investors. Our innovative platform brings together legal expertise, local partnerships, and financial innovation to create a secure investment environment.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Core Values</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Security</span> - We prioritize the protection of our investors' assets</li>
                <li><span className="font-semibold">Transparency</span> - Clear communication and open processes</li>
                <li><span className="font-semibold">Innovation</span> - Continuously improving our platform and services</li>
                <li><span className="font-semibold">Expertise</span> - Professional management with deep local knowledge</li>
                <li><span className="font-semibold">Integrity</span> - Ethical standards in all our dealings</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-blue-900 mt-12 mb-6">Our Approach</h2>
            <p className="mb-6">
              We've developed a comprehensive system that addresses the unique challenges of foreign investment in Thai property. By combining legal expertise, local partnerships, and innovative financial structures, we provide our members with a level of security previously unavailable to individual investors.
            </p>
            <p>
              Our "Trustee Platform" enables rights equivalent to freehold ownership while remaining compliant with local laws and regulations. This approach is supported by thorough legal documentation drafted by leading international lawyers and is recognized by financial institutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 