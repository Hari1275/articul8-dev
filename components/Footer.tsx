import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-white py-4 border-t border-gray-200'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0'>
          {/* Logo */}
          <div className='flex-shrink-0 order-1 sm:order-1'>
            <Image
              src='/images/footer-logo.svg'
              alt='Articul8 Logo'
              width={100}
              height={30}
            />
          </div>

          {/* Copyright */}
          <div className='text-sm text-gray-600 order-3 sm:order-2'>
            &copy; Copyright 2025
          </div>

          {/* Links */}
          <div className='space-x-4 order-2 sm:order-3'>
            <Link
              href='/privacy-policy'
              className='text-sm text-gray-600 hover:text-blue-600'
            >
              Privacy Policy
            </Link>
            <Link
              href='/contact-us'
              className='text-sm text-gray-600 hover:text-blue-600'
            >
              Contact Us
            </Link>
          </div>

          {/* LinkedIn logo */}
          <div className='flex-shrink-0 order-4 sm:order-4'>
            <a
              href='https://www.linkedin.com/company/articul8'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/linkedin-logo.svg'
                alt='LinkedIn'
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
