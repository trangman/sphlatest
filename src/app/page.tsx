'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    investmentInterest: 'Property Investment'
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        investmentInterest: 'Property Investment'
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit form'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
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
          <h1 className="text-white text-5xl font-bold mb-8">SPH – Coming Soon</h1>
          <p className="text-white text-xl leading-relaxed">
            Our platform provides a Legal Solution for Foreign Investors in Thai property with Asset Backed Guarantees, professional stewardship and bespoke financing solutions for owners and developers.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-xl">
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register Your Interest</h2>
            
            {status.success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your interest! We'll be in touch soon.
              </div>
            )}
            
            {status.error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                  disabled={status.loading}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                  disabled={status.loading}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  disabled={status.loading}
                />
              </div>
              <div>
                <label htmlFor="investmentInterest" className="block text-sm font-medium text-gray-700 mb-1">Investment Interest</label>
                <select
                  id="investmentInterest"
                  name="investmentInterest"
                  value={formData.investmentInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  required
                  disabled={status.loading}
                >
                  <option value="Property Investment">Property Investment</option>
                  <option value="Development">Development</option>
                  <option value="Joint Venture">Joint Venture</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status.loading}
                >
                  {status.loading ? 'Submitting...' : 'Register Interest'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
