"use client";

import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="mb-4 inline-block">
                <Image 
                  src="/images/sph-logo.png" 
                  alt="SPH Logo" 
                  width={120} 
                  height={80} 
                  className="mx-auto md:mx-0"
                />
              </Link>
              
              
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <p className="mb-2 text-sm text-white">Email: info@siampropertyholdings.com</p>
            <p className="mb-2 text-sm text-white">Phone: +60 (0) 15 4600 0087</p>
            <p className="mb-2 text-sm text-white">Labuan Office: Unit 3A-2, Level 3A, Labuan Times Square, Jalan Merdeka, 87000 W.P Labuan, Malaysia</p>
            <p className="mb-2 text-sm text-white">Business Hours: Monday-Friday, 9 AM-5 PM (ICT)</p>
            <p className="text-xs italic mt-1 text-gray-300">*Please note Labuan is 1 hour ahead of Thailand</p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white mb-4 md:mb-0">&copy; {new Date().getFullYear()} Siam Property Holdings. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-white hover:text-blue-200 transition duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="text-sm text-white hover:text-blue-200 transition duration-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 