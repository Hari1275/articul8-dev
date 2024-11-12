import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ErrorBoundary from './ErrorBoundary';

interface FooterProps {
  data: {
    CopyRightTitle: string;
    Logo: {
      Herf: string;
      Logo: {
        url: string;
        alternativeText: string;
      };
    };
    NavLinks: Array<{
      id: number;
      Label: string;
      Herf: string;
    }>;
    SocialNavLinks: Array<{
      id: number;
      Label: string | null;
      Herf: string;
      Icon: {
        url: string;
        alternativeText: string;
      };
    }>;
  };
}

const Footer = ({ data }: FooterProps) => {
  return (
    <ErrorBoundary>
      <footer className='bg-white py-4 sm:py-8 border-t border-gray-200'>
        <div className='container mx-auto px-6'>
          {/* Mobile view */}
          <div className='sm:hidden flex flex-col space-y-6'>
            {/* Top row: Logo and social icons */}
            <div className='flex justify-between items-center'>
              <div className='flex-shrink-0'>
                <Link href={data?.Logo?.Herf || '/'}>
                  <Image
                    src={data?.Logo?.Logo?.url || '/images/footer.svg'}
                    alt={data?.Logo?.Logo?.alternativeText || 'Articul8 Logo'}
                    width={120}
                    height={36}
                    priority
                  />
                </Link>
              </div>
              <div className='flex items-center gap-4'>
                {data?.SocialNavLinks?.map((social) => (
                  <a
                    key={social.id}
                    href={social.Herf}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <Image
                      src={social.Icon.url}
                      alt={social.Icon.alternativeText || social.Label || 'Social Icon'}
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom row: Privacy, Support, Copyright */}
            <div className='flex flex-col items-center space-y-4'>
              <div className='flex items-center gap-6'>
                {data?.NavLinks?.map((link) => (
                  <Link
                    key={link.id}
                    href={link.Herf}
                    className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-center text-black hover:underline'
                  >
                    {link.Label}
                  </Link>
                ))}
              </div>
              <div className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-[#000000] text-center'>
                {data?.CopyRightTitle || '©2024 Articul8, Inc. - All Rights Reserved'}
              </div>
            </div>
          </div>

          {/* Desktop view */}
          <div className='hidden sm:flex items-center justify-between'>
            <div className='flex items-center gap-8'>
              <Link href={data?.Logo?.Herf || '/'}>
                <Image
                  src={data?.Logo?.Logo?.url || '/images/footer.svg'}
                  alt={data?.Logo?.Logo?.alternativeText || 'Articul8 Logo'}
                  width={100}
                  height={30}
                  priority
                />
              </Link>
              <div className='flex items-center gap-6'>
                {data?.NavLinks?.map((link) => (
                  <Link
                    key={link.id}
                    href={link.Herf}
                    className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-center text-black hover:underline'
                  >
                    {link.Label}
                  </Link>
                ))}
              </div>
            </div>
            <div className='flex items-center'>
              <span className='font-proxima-nova font-[400] text-[14px] leading-[17.05px] text-[#000000] mr-8 text-center'>
                {data?.CopyRightTitle || '©2024 Articul8, Inc. - All Rights Reserved'}
              </span>
              <div className='flex items-center gap-4'>
                {data?.SocialNavLinks?.map((social) => (
                  <a
                    key={social.id}
                    href={social.Herf}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={social.Icon.url}
                      alt={social.Icon.alternativeText || social.Label || 'Social Icon'}
                      width={24}
                      height={24}
                      priority
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ErrorBoundary>
  );
};

export default Footer;
