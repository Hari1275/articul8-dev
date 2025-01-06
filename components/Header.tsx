'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useRouter } from 'next/router';
import CTAForm from './Modal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  // Add scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || 
      (href === '/case-studies' && pathname?.startsWith('/case-studies/'));
    return `text-black font-proxima-nova text-[22px] leading-[27.07px] font-[${
      isActive ? '700' : '400'
    }] hover:text-black transition duration-300 ${
      isActive ? 'text-gray-900' : ''
    }`;
  };

  const getLinkClassNameMobile = (href: string) => {
    const isActive = pathname === href || 
      (href === '/case-studies' && pathname?.startsWith('/case-studies/'));

    return `text-white font-proxima-nova text-[34px] font-[400] leading-[40px] px-8 py-2 hover:border-2 hover:border-[#4D6EFF] hover:rounded-md transition-all duration-300 ${
      isActive
        ? 'border-2 border-[#4D6EFF] rounded-md'
        : 'border-none  rounded-none'
    }`;
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
      {/* Desktop Header - Updated border color and opacity */}
      <div className='container mx-auto hidden md:flex'>
        <div className={`
          w-full mx-6 my-4 
          backdrop-blur-[8px] 
          bg-white/95
          rounded-[12px]
          px-6 py-6 
          flex items-center justify-between
          transition-all duration-300
          ${!isScrolled ? 'border border-gray-200/90' : 'border-transparent'}
        `}>
          {/* Logo (left side) */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/images/logo.svg'
              alt='Articul8 Logo'
              width={130}
              height={30}
              priority
            />
          </Link>

          {/* Navigation and CTA (right side) */}
          <div className='flex items-center gap-20'>
            <nav className='flex gap-16'>
              <Link href='/products' className={getLinkClassName('/products')}>
                Product
              </Link>
              <Link href='/case-studies' className={getLinkClassName('/case-studies')}>
                Case Studies
              </Link>
              {/* Company Dropdown with matching Glassmorphism */}
              <div 
                className='relative group'
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center gap-2 ${getLinkClassName('/company')}`}
                >
                  Company
                  <svg 
                    width="20"
                    height="16"
                    viewBox="0 0 12 8" 
                    fill="none" 
                    className={`transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path 
                      d="M1 1.5L6 6.5L11 1.5" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu - With slightly more blur effect */}
                <div 
                  className={`
                    absolute top-[calc(100%+2.0rem)]
                    left-[60%] transform -translate-x-1/2
                    backdrop-blur-[8px]
                    bg-white/95
                    border border-gray-200/20
                    rounded-sm
                    w-[280px]
                    py-4
                    z-50
                    transition-all duration-200
                    shadow-sm
                    ${isCompanyDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}
                  `}
                >
                  <Link 
                    href="/about" 
                    className="block px-8 py-2 text-[22px] text-black font-proxima-nova hover:bg-white/50 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/linkedIn-feed" 
                    className="block px-8 py-2 text-[22px] text-black font-proxima-nova hover:bg-white/50 transition-colors duration-200"
                  >
                    News
                  </Link>
                  {/* <Link 
                    href="/careers" 
                    className="block px-4 py-2 text-[18px] text-black font-proxima-nova hover:bg-white/50 transition-colors duration-200"
                  >
                    Careers
                  </Link> */}
                </div>
              </div>
            </nav>

            {/* "Start Articul8'ing" link */}
            <button
              onClick={() => setIsOpen(true)}
              className='text-[#1130FF] hover:underline font-semibold flex items-center'
            >
              <span className='font-space-grotesk text-[22px] font-[700] leading-[27.07px] text-[#1130FF]'>
                Start Articul8&apos;ing
              </span>
              <Image
                src='/images/icons/header-arrow.svg'
                alt='Arrow right'
                width={13}
                height={13}
                className='ml-2'
              />
            </button>
          </div>
        </div>
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
                className={getLinkClassNameMobile('/')}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href='/products'
                onClick={toggleMenu}
                className={getLinkClassNameMobile('/products')}
              >
                Product
              </Link>
              <Link
                href='/case-studies'
                className={getLinkClassNameMobile('/case-studies')}
                onClick={toggleMenu}
              >
                Case Studies
              </Link>
              {/* Company Section with Dropdown */}
              <div className='flex flex-col items-center'>
                <button 
                  className={`text-white font-proxima-nova text-[34px] font-[400] leading-[40px] px-8 py-2 flex items-center gap-2 hover:border-2 hover:border-[#4D6EFF] hover:rounded-md transition-all duration-300`}
                  onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                >
                  Company
                  <svg 
                    width="16" 
                    height="10" 
                    viewBox="0 0 12 8" 
                    fill="none" 
                    className={`transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2"/>
                  </svg>
                </button>
                {isCompanyDropdownOpen && (
                  <div className='flex flex-col items-center mt-4 space-y-4'>
                    <Link
                      href="/about"
                      className="text-white font-proxima-nova text-[28px] font-[400] hover:text-[#4D6EFF] transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/linkedIn-feed"
                      className="text-white font-proxima-nova text-[28px] font-[400] hover:text-[#4D6EFF] transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      News
                    </Link>
                    {/* <Link
                      href="/careers"
                      className="text-white font-proxima-nova text-[28px] font-[400] hover:text-[#4D6EFF] transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Careers
                    </Link> */}
                  </div>
                )}
              </div>
            </nav>
          </div>
          {/* <div className='p-4'>
            <button className='font-space-grotesk text-[16px] w-full bg-white font-bold text-[#1130FF] px-6 py-3 rounded-md leading-[22.97px] hover:bg-gray-100 transition duration-300'>
              Start Articul8&apos;ing
            </button>
          </div> */}
          <div className='p-4'>
            <button
              onClick={() => setIsOpen(true)}
              className='font-space-grotesk text-[16px] w-full bg-white font-bold text-[#1130FF] px-6 py-3 rounded-md leading-[22.97px] hover:bg-gray-100 transition duration-300 inline-block text-center'
            >
              Start Articul8&apos;ing
            </button>
          </div>
        </div>
      )}
      <CTAForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
