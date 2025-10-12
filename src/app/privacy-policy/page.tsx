import Hero from '@/components/Hero';

export default function PrivacyPolicy() {
  return (
    <div>
      <Hero 
        title="Privacy Policy" 
        subtitle="Your privacy is important to us"
        variant="inner"
      />
      
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg">
              This privacy policy page is currently under development. Please check back soon for our complete privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
