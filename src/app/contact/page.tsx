'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';

export default function Contact() {
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
    <div>
      <Hero 
        title="Contact Us" 
        subtitle="Begin your journey toward secure, compliant, and financeable property ownership"
        variant="inner"
      />
      
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form - First on mobile for better UX */}
            <div className="md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Register Your Interest</h2>
              
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

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    required
                    disabled={status.loading}
                  >
                    <option value="Property Investment">Property Investment</option>
                    <option value="Development">Development</option>
                    <option value="Joint Venture">Joint Venture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 text-sm md:text-base rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status.loading}
                  >
                    {status.loading ? 'Submitting...' : 'Register Interest'}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information - Second on mobile */}
            <div className="md:order-1 mt-8 md:mt-0">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Get In Touch</h2>
              <p className="text-base md:text-lg mb-6 md:mb-8">
                Our team of investment professionals is ready to help you secure your property investments in Southeast Asia. Contact us today to discuss your investment needs.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-blue-900">Email</h3>
                    <p className="mt-1 text-sm md:text-base">info@siampropertyholdings.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-blue-900">Phone</h3>
                    <p className="mt-1 text-sm md:text-base">+60 (0) 15 4600 0087</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-blue-900">Address</h3>
                    <p className="mt-1 text-sm md:text-base">
                      Labuan Office<br />
                      Unit 3A-2, Level 3A,<br />
                      Labuan Times Square, Jalan Merdeka<br />
                      87000 W.P Labuan, Malaysia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-blue-900">Business Hours</h3>
                    <p className="mt-1 text-sm md:text-base">Monday-Friday, 9 AM-5 PM (ICT)</p>
                    <p className="text-xs italic mt-1">*Please note Labuan is 1 hour ahead of Thailand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 