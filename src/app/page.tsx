'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative py-48 px-4 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto max-w-4xl text-center z-10">
          <h1 className="text-white text-5xl font-bold mb-8">The Trusted Bridge Between Real Estate and Wealth Management</h1>
          <p className="text-white text-xl leading-relaxed mb-8">
            Licensed in Labuan and active across Asia, Siam Property Holding (SPH) provides regulated trust, fiduciary, and real estate holding structures - creating secure, compliant, and financeable ownership solutions for cross-border investors.
          </p>
          <Link 
            href="/services"
            className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Explore Our Solutions
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              SPH enables investors, developers, and family offices to own, manage, and transfer real estate wealth securely - using trust-based structures that comply with Thai law and AMLA 2025, whilst delivering the same or better rights than freehold ownership.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Through partnerships with Thailand Investor Network (TIN) and Clear Blue Security Agents (CBSA), every client enjoys enforceable property rights, independent oversight, and seamless cross-border finance ability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">Core Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Real Estate Trusts</h3>
              <p className="text-gray-600">
                Holding, succession, and protection structures for high-value property portfolios across Thailand, Singapore, and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Asia-Focused Fiduciary Services</h3>
              <p className="text-gray-600">
                Onshore and offshore trusts, PTCs, and family governance solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Corporate & Developer Structures</h3>
              <p className="text-gray-600">
                Financeable, compliant vehicles that accelerate project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SPH Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why SPH</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              SPH sits at the intersection of real estate, trust law, and cross-border wealth management - offering a unique blend of compliance, control, and continuity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Our Edge Card */}
            <Card className="h-full flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">Our Edge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Regulated Trust Company (under application Labuan FSA)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Regional expertise in Thai and offshore real estate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Integrated with Better-than-Freehold™ platform</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Independent CBSA enforcement</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Transparent and AMLA-compliant</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/about">Discover Our Advantage</Link>
                </Button>
              </div>
            </Card>
            
            {/* Who We Serve Card */}
            <Card className="h-full flex flex-col">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">Who We Serve</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">High-net-worth individuals seeking Thai real estate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Families requiring succession planning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Investors needing compliant offshore structures</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Clients requiring Better-than-Freehold™ solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600">Those seeking transparent CBSA compliance</span>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/services">Explore Your Path</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Global Reach</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            With trust operations in Labuan, teams in Thailand and Singapore, and partnerships in the UK, Australia, and Asia, SPH bridges continents to deliver secure, compliant property ownership and wealth continuity.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
