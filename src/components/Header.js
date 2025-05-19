'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="PRM Logo" 
            width={60} 
            height={60}
            className="mr-3"
          />
          <span className="text-xl font-serif font-bold text-primary">People's Reform Movement</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-secondary transition">About</Link>
          <Link href="/manifesto" className="hover:text-secondary transition">Manifesto</Link>
          <Link href="/leadership" className="hover:text-secondary transition">Leadership</Link>
          <Link href="/events" className="hover:text-secondary transition">Events</Link>
          <Link href="/news" className="hover:text-secondary transition">News</Link>
          <Link href="/contact" className="hover:text-secondary transition">Contact</Link>
        </nav>
        
        <Link href="/join" className="hidden md:block btn-primary">
          Join Us
        </Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu (hidden by default) */}
      <div className="md:hidden bg-white py-2 px-4 shadow-lg hidden">
        {/* Mobile menu items would go here */}
      </div>
    </header>
  );
};

export default Header;