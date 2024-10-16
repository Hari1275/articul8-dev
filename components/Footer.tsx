import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white py-4 sm:py-8 border-t border-gray-200'>
      <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 '>
        {/* Mobile view */}
        <div className='sm:hidden flex flex-col items-center space-y-6'>
          <div className='flex-shrink-0'>
            <Image
              src='/images/footer-logo.svg'
              alt='Articul8 Logo'
              width={120}
              height={36}
              priority
            />
          </div>
          <div className='flex items-center space-x-6'>
            <a
              href='https://www.linkedin.com/company/articul8'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>LinkedIn</span>
              <Image
                src='/images/linkedin-logo.svg'
                alt='LinkedIn'
                width={24}
                height={24}
                priority
              />
            </a>
            <a
              href='https://twitter.com/articul8ai'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Twitter</span>
              <Image
                src='/images/twitter-logo.svg'
                alt='Twitter'
                width={24}
                height={24}
                priority
              />
            </a>
          </div>
          <div className='text-sm text-gray-500'>
            Copyright {currentYear}
          </div>
        </div>

        {/* Desktop view */}
        <div className='hidden sm:flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Image
              src='/images/footer-logo.svg'
              alt='Articul8 Logo'
              width={100}
              height={30}
              priority
            />
            <span className='text-sm text-gray-600'>
              &copy; Copyright {currentYear}
            </span>
          </div>
          <div className='flex items-center space-x-4'>
            <a
              href='https://twitter.com/articul8ai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/twitter-logo.svg'
                alt='Twitter'
                width={24}
                height={24}
                priority
              />
            </a>
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
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
