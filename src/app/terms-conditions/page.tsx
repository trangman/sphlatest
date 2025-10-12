import Hero from '@/components/Hero';

export default function TermsConditions() {
  return (
    <div>
      <Hero 
        title="Terms and Conditions" 
        subtitle="Please read our terms carefully"
        variant="inner"
      />
      
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg">
              This terms and conditions page is currently under development. Please check back soon for our complete terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
