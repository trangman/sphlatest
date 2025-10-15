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
      question: "Can I hold income-generating real estate in a trust?",
      answer: (
        <p>
          Yes. Trusts are often used to hold rental properties, commercial buildings, or even large development projects, offering advantages in asset protection, income distribution, and succession planning.
        </p>
      ),
    },
    {
      question: "Is real estate held in trust protected from creditors?",
      answer: (
        <p>
          When structured correctly, real estate in a trust can be shielded from personal or business liabilities. However, timing and jurisdictional rules are critical.
        </p>
      ),
    },
    {
      question: "Can I use an offshore trust to hold real estate in Asia?",
      answer: (
        <p>
          Absolutely, provided the structure complies with local regulations and reporting obligations. For example, SPH has an exclusive commercial partnership with Thailand Investor Network ("TIN") that utilises the Better Than freehold™ ("BtF) Thai property acquisition platform to provide security and finance to foreign investors.
        </p>
      ),
    },
    {
      question: "What is the Better than Freehold™ solution?",
      answer: (
        <p>
          Better-than-Freehold™ (BtF) is a legally compliant, financeable, and risk-mitigated platform designed for foreign investment in Thai real estate. It eliminates the legal risks associated with freehold ownership, 30-year lease limitations, and illegal nominee companies. BtF also enables offshore financing, provides capital protection, and ensures secure, enforceable ownership rights.
        </p>
      ),
    }
  ];

  return (
    <div>
      <Hero 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions about SPH and our services"
        variant="inner"
      />
      
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 md:mb-12">
            <p className="text-base md:text-lg mb-8">
              Find answers to the most common questions about Siam Property Holdings and our services. If you can't find the information you're looking for, please don't hesitate to <a href="/contact" className="text-blue-600 hover:underline">Learn More</a>.
            </p>
          </div>
          
          <div className="mb-8 md:mb-12">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Ready to Learn More?</h2>
            <p className="text-sm md:text-base mb-4 md:mb-6">Our team is here to help you with any questions you may have about investing in Southeast Asian property.</p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-2 md:px-6 text-sm md:text-base rounded-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 