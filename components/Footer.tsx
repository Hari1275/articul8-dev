import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white py-4 sm:py-8 border-t border-gray-200'>
      <div className='container mx-auto px-6'>
        {/* Mobile view */}
        <div className='sm:hidden flex flex-col space-y-6'>
          {/* Top row: Logo and social icons */}
          <div className='flex justify-between items-center'>
            <div className='flex-shrink-0'>
              <Image
                src='/images/footer-logo.svg'
                alt='Articul8 Logo'
                width={120}
                height={36}
                priority
              />
            </div>
            <div className='flex items-center gap-4'>
              <a
                href='https://twitter.com/articul8ai'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-gray-500'
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
                className='text-gray-400 hover:text-gray-500'
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

          {/* Bottom row: Privacy, Support, Copyright */}
          <div className='flex flex-col items-center space-y-4'>
            <div className='flex items-center gap-6'>
              <a
                href="https://www.articul8.ai/privacy"
                target='_blank'
                rel='noopener noreferrer'
                className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-center text-black hover:underline'
              >
                Privacy
              </a>
             {/*  <a
                href="https://www.articul8.ai/support"
                target='_blank'
                rel='noopener noreferrer'
                className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-center text-black hover:underline'
              >
                Support
              </a>
               */}
            </div>
            <div className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-[#000000] text-center'>
              ©{currentYear} Articul8, Inc. - All Rights Reserved
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className='hidden sm:flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Image
              src='/images/footer-logo.svg'
              alt='Articul8 Logo'
              width={100}
              height={30}
              priority
            />
            <div className='flex items-center gap-6'>
              <a
                href="https://www.articul8.ai/privacy"
                target='_blank'
                rel='noopener noreferrer'
                className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-center text-black hover:underline'
              >
                Privacy
              </a>
             {/*  <a
                href="https://www.articul8.ai/support"
                target='_blank'
                rel='noopener noreferrer'
                className='font-proxima-nova font-[400] text-[14px] leading-[17.05px]  text-center  text-black hover:underline'
              >
                Support
              </a>
              */}
            </div>
          </div>
          <div className='flex items-center'>
            <span className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-[#000000] mr-8  text-center'>
              ©{currentYear} Articul8, Inc. - All Rights Reserved
            </span>
            <div className='flex items-center gap-4'>
              <a
                href='https://x.com/Articul8_AI'
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
                href='https://www.linkedin.com/company/articul8-ai/'
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
      </div>
    </footer>
  );
};

export default Footer;
