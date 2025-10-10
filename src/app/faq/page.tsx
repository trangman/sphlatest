import Hero from '@/components/Hero';
import React from 'react';

// FAQ Item component with toggleable content
const FaqItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer p-4 bg-white hover:bg-gray-50">
          <span className="text-base md:text-lg font-semibold text-blue-900 pr-2">{question}</span>
          <span className="transition group-open:rotate-180 flex-shrink-0">
            <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm md:text-base">{answer}</div>
      </details>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "Are SPH regulated?",
      answer: (
        <p>
          Yes, we are authorized and regulated by the Labuan Financial Services Authority "LFSA" (<a href="https://www.labuanfsa.gov.my" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.labuanfsa.gov.my</a>).
        </p>
      ),
    },
    {
      question: "Are my contracts and documents safe? How are they held?",
      answer: (
        <p>
          Yes. In Labuan, we keep a copy of all records. Land title papers and other legal documents are held by our Security Agents in safe custody in Thailand.
        </p>
      ),
    },
    {
      question: "How does SPH provide security for foreign investors?",
      answer: (
        <p>
          SPH offers a legal route for its members to achieve security over investments by working with our exclusive local partner who own and manage land assets in which we invest. Our investment rights are secured by asset backed guarantees from our partner TIN in our favor and passed onto our members.
        </p>
      ),
    },
    {
      question: "What is an 'Asset Backed Performance Guarantee'?",
      answer: (
        <p>
          An Asset Backed Performance Guarantee is a legal mechanism that secures our investments in Thai property. These guarantees are managed on behalf of SPH by local agents in Thailand who operate under the Thai Business Security Act, managing share pledges and mortgages over assets SPH invest in.
        </p>
      ),
    },
    {
      question: "Can foreigners own land in Thailand?",
      answer: (
        <p>
          In Thailand and other local jurisdictions, it is generally illegal for foreign investors to own or control land assets. This is where SPH provides value - we create a legal structure that provides equivalent rights to freehold ownership while remaining compliant with local laws.
        </p>
      ),
    },
    {
      question: "How does the SPH solution compare to a 30-year lease?",
      answer: (
        <p>
          The SPH solution provides numerous advantages over a traditional 30-year lease, including secure tenure for life, rights to capital gains, finance options, guaranteed succession rights, tax optimization, and protection from both Thai and personal insolvency. Our benefits comparison table shows a detailed comparison.
        </p>
      ),
    },
    {
      question: "Can I use SPH services for financing property development?",
      answer: (
        <p>
          Yes. Our platform enables developers and investors to secure finance or refinance for property projects. Offshore development companies located in Labuan can own rights to land through the SPH platform, apply for building permits, and manage projects using local contractors.
        </p>
      ),
    },
    {
      question: "How does SPH protect investors from fraud?",
      answer: (
        <p>
          Our solution is supported by comprehensive legal opinions and contract sets drafted by leading international lawyers. We provide transparent and professional stewardship of investments, secured with "Asset Backed Guarantees" ensuring contractual performance and protection from fraud.
        </p>
      ),
    },
    {
      question: "What is the cost of SPH services?",
      answer: (
        <p>
          We make sophisticated solutions available on a cost-effective and accessible basis by sharing the costs across multiple members. This enables us to provide a million-dollar solution for a few hundred dollars in membership fees. Contact us for specific pricing details for your situation.
        </p>
      ),
    },
    {
      question: "Who are your partners in Thailand?",
      answer: (
        <p>
          In Thailand, we work exclusively with Thailand Investor Network (TIN) who provide us and our investors with an "Asset Backed Performance Guarantee." Asset Backed Guarantees are managed by Clear Blue (www.clearblue.th) who operate under the Thai Business Security Act.
        </p>
      ),
    }
  ];

  return (
    <div>
      <Hero 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about SPH and our services"
      />
      
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 md:mb-12">
            <p className="text-base md:text-lg mb-8">
              Find answers to the most common questions about Siam Property Holdings and our services. If you can't find the information you're looking for, please don't hesitate to <a href="/contact" className="text-blue-600 hover:underline">contact us</a>.
            </p>
          </div>
          
          <div className="mb-8 md:mb-12">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Still have questions?</h2>
            <p className="text-sm md:text-base mb-4 md:mb-6">Our team is here to help you with any questions you may have about investing in Southeast Asian property.</p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-2 md:px-6 text-sm md:text-base rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 