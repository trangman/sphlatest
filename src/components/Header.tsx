"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-900 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/sph-logo.png" 
              alt="Siam Property Holdings Logo" 
              width={180} 
              height={180} 
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-200 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-200 transition duration-200">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-blue-200 transition duration-200">
              Our Services
            </Link>
            <Link href="/faq" className="text-white hover:text-blue-200 transition duration-200">
              FAQs
            </Link>
            <Link href="/resources" className="text-white hover:text-blue-200 transition duration-200">
              Resources
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200 transition duration-200">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-200 transition duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-white hover:text-blue-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-white hover:text-blue-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link 
                href="/faq" 
                className="text-white hover:text-blue-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link 
                href="/resources" 
                className="text-white hover:text-blue-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-blue-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 