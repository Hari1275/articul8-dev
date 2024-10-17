'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='relative bg-white'>
      {/* Top horizontal line */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gray-200'></div>

      {/* Desktop Header */}
      <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24  flex items-center justify-between hidden md:flex'>
        {/* Desktop content (unchanged) */}
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
          <div className='h-16 w-px bg-gray-300 mx-6'></div>
          <nav className='flex space-x-6'>
            <Link
              href='/about'
              className='text-black font-proxima-nova leading-[21.92px] text-[16px] font-[400] hover:text-black transition duration-300'
            >
              About us
            </Link>
            <Link
              href='/product'
              className='text-black font-proxima-nova text-[16px] leading-[21.92px] font-[400] hover:text-black transition duration-300'
            >
              Product
            </Link>
          </nav>
        </div>
        <button className='font-space-grotesk bg-[#1130FF] text-white px-6 py-4 rounded-[4px] text-[16px] leading-[22.97px] font-[700] hover:bg-blue-700 transition duration-300'>
          Start Articul8&apos;ing
        </button>
      </div>

      {/* Mobile Header */}
      <div className='flex items-center justify-between px-4 py-2 md:hidden'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo.svg'
            alt='Articul8 Logo'
            width={100}
            height={24}
            priority
          />
        </Link>
        <button onClick={toggleMenu} className='text-black focus:outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-[#1130FF] z-50 flex flex-col md:hidden'>
          <div className='flex-grow flex flex-col items-center justify-center'>
            <button
              onClick={toggleMenu}
              className='absolute top-4 right-4 text-white'
            >
              <svg
                className='w-7 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <nav className='flex flex-col items-center space-y-6'>
              <Link
                href='/'
                className='text-white font-proxima-nova text-[34px] font-[400] leading-[40px] px-8 py-2 border-2 border-[#4D6EFF] rounded-md'
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-white font-proxima-nova text-[34px] font-[400] leading-[40px] px-8 py-2 hover:border-2 hover:border-[#4D6EFF] hover:rounded-md transition-all duration-300'
                onClick={toggleMenu}
              >
                About us
              </Link>
              <Link
                href='/product'
                className='text-white font-proxima-nova text-[34px] font-[400] leading-[40px] px-8 py-2 hover:border-2 hover:border-[#4D6EFF] hover:rounded-md transition-all duration-300'
                onClick={toggleMenu}
              >
                Product
              </Link>
            </nav>
          </div>
          <div className='p-4'>
            <button className='font-space-grotesk text-[16px] w-full bg-white font-bold text-[#1130FF] px-6 py-3 rounded-md leading-[22.97px] hover:bg-gray-100 transition duration-300'>
              Start Articul8&apos;ing
            </button>
          </div>
        </div>
      )}

      {/* Bottom horizontal line */}
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gray-200'></div>
    </header>
  );
};

export default Header;
