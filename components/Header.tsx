'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="Articul8 Logo" width={120} height={40} />
        </Link>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}>
          <Link href="/" className="text-black text-lg" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="text-black text-lg" onClick={closeMenu}>About</Link>
          <Link href="/blog" className="text-black text-lg" onClick={closeMenu}>Blog</Link>
          <Link href="/contact-us" className="text-black text-lg" onClick={closeMenu}>Contact Us</Link>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300" onClick={closeMenu}>
            Try Articul8
          </button>
        </nav>
        <button 
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;