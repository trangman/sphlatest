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
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <p className="text-gray-700 mb-6">
            Siam Property Holdings Standard Terms and Conditions of Engagement relate to Legal Services provided by us and unless otherwise agreed in writing (and together with our Engagement letter), contain our entire agreement for rendering professional services and are applicable to all types of entities (e.g. companies, LLPs, charities, friendly societies, academies, pension schemes, etc).
          </p>

          <p className="text-gray-700 mb-6">
            Any such terms and conditions are provided to clients that are onboarded and include our standard Terms & Conditions, Trust Agreement and/or any other legal contracts that may be issued by SPH to a client under engagement and are not published on this website in standard template form.
          </p>

          <p className="text-gray-700 mb-6">
            To request a copy of any of our Terms, please contact us at info@siampropertyholdings.com.
          </p>

          <p className="text-gray-700 mb-6">
            Furthermore, we will not be responsible for any losses, penalties, surcharges, interest, or tax liabilities arising from the supply by you or others of incorrect or incomplete information, or your or others' failure to supply any appropriate information or your failure to act on our advice or respond promptly to communications from us or the tax or other authorities.
          </p>

          <p className="text-gray-700 mb-8">
            Much of the advice that we give is time critical and as a result, should a delay occur between the giving of our advice and any decision by you to act upon it, we recommend that in the first instance you check with us to enquire as to whether our advice is still current before acting upon it.
          </p>
        </div>
      </section>
    </div>
  );
}
