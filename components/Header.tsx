'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Modal from './Modal';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `text-black font-proxima-nova text-[22px] leading-[27.07px] font-[${isActive ? '700' : '400'
      }] hover:text-black transition duration-300 ${isActive ? 'text-gray-900' : ''
      }`;
  };


  const getLinkClassNameMobile = (href: string) => {
    const isActive = pathname === href;

    return `text-white font-proxima-nova text-[34px] font-[400] leading-[40px] px-8 py-2 hover:border-2 hover:border-[#4D6EFF] hover:rounded-md transition-all duration-300 ${isActive ? 'border-2 border-[#4D6EFF] rounded-md' : 'border-none  rounded-none'
      }`










  };




  return (
    <header className='fixed top-0 left-0 right-0 bg-white z-50'>
      {/* Desktop Header */}
      <div className='container mx-auto px-6 items-center justify-between hidden md:flex'>
        {/* Desktop content (left side) */}
        <div className='flex gap-4 items-center'>
          <Link href='/' className='flex items-center py-4'>
            <Image
              src='/images/logo.svg'
              alt='Articul8 Logo'
              width={130}
              height={30}
              priority
            />
          </Link>
          <nav className='flex gap-6  ml-4'>
            <Link href='/products' className={getLinkClassName('/products')}>
              Product
            </Link>
            <Link href='/about' className={getLinkClassName('/about')}>
              About Us
            </Link>
          </nav>
        </div>

        {/* "Start Articul8'ing" link */}
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[#1130FF] hover:underline font-semibold flex items-center"
          >
            <span className="font-space-grotesk text-[20px] font-[700] leading-[26.07px] text-[#1130FF]">
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
                href='/about'
                className={getLinkClassNameMobile('/about')}
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </nav>
          </div>
          {/* <div className='p-4'>
            <button className='font-space-grotesk text-[16px] w-full bg-white font-bold text-[#1130FF] px-6 py-3 rounded-md leading-[22.97px] hover:bg-gray-100 transition duration-300'>
              Start Articul8&apos;ing
            </button>
          </div> */}
          <div className="p-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-space-grotesk text-[16px] w-full bg-white font-bold text-[#1130FF] px-6 py-3 rounded-md leading-[22.97px] hover:bg-gray-100 transition duration-300 inline-block text-center"
            >
              Start Articul8&apos;ing
            </button>
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
