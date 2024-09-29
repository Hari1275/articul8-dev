'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className='relative bg-white'>
      {/* Top horizontal line */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gray-200'></div>

      <div className='container mx-auto px-6 flex items-center'>
        {/* Logo section */}
        <div className='flex items-center'>
          <Link href='/' className='flex items-center py-4'>
            <Image
              src='/images/logo.svg'
              alt='Articul8 Logo'
              width={130}
              height={30}
              priority
            />
          </Link>
          {/* Vertical separator */}
          <div className='h-6 w-px bg-gray-300 mx-6'></div>
        </div>

        {/* Product link */}
        <nav className='flex-grow'>
          <Link
            href='/'
            className='text-black-500 text-sm font-bold hover:text-black transition duration-300'
          >
            Product
          </Link>
        </nav>

        {/* Try Articul8 button */}
        <button className='bg-blue-600 text-white px-6 py-4 text-sm font-medium hover:bg-blue-700 transition duration-300'>
          Try Articul8
        </button>
      </div>

      {/* Bottom horizontal line */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gray-200'></div>
    </header>
  );
};

export default Header;
