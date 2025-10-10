"use client";

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-blue-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/sph-logo.png" 
            alt="Siam Property Holdings Logo" 
            width={180} 
            height={180} 
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header; 