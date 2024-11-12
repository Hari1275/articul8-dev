'use client';

import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ErrorBoundary from '../../../components/ErrorBoundary';

interface FeatureCard {
  id: number;
  Title: string;
  Content: string;
  Icon: {
    url: string;
    alternativeText: string;
  };
}

interface PlatformArchitectureProps {
  data: {
    MainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
    };
    FeatureCards: FeatureCard[];
    CtaButton: {
      Title: string;
      Herf: string;
    };
    Image: {
      url: string;
      alternativeText: string;
    };
  };
}

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className='flex items-center justify-center w-4 h-6 sm:w-6 sm:h-6'>
    <Image
      src={isOpen ? '/images/icons/minus.svg' : '/images/icons/plus.svg'}
      alt={isOpen ? 'minus' : 'plus'}
      width={16}
      height={16}
      className='w-3 h-3 sm:w-4 sm:h-4'
    />
  </div>
);

const PlatformArchitecture = ({ data }: PlatformArchitectureProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ErrorBoundary>
      <section className='sm:pt-12 pt-2 pb-16 px-4 bg-white'>
        <div className='container mx-auto px-4 sm:px-6'>
          <h2 className='font-space-grotesk text-[26px] sm:text-[36px] md:text-[50px] lg:text-[54px] lg:leading-[84px] font-bold sm:mb-20 py-8 leading-tight text-center lg:text-center'>
            {data?.MainTitle?.PrefixTitle || 'Articul8 platform makes the'}
            <br />
            <span className='text-[#FF00C7] font-bold'>
              {data?.MainTitle?.HighlightedTitle || 'impossible possible.'}
            </span>
          </h2>
          <div className='flex flex-col xl:flex-row items-center justify-between gap-12'>
            <div className='w-full xl:w-2/5'>
              <div className='space-y-2'>
                {data?.FeatureCards?.map((item, index) => (
                  <Disclosure key={index} as='div' className='mt-2'>
                    {({ open }) => (
                      <div
                        className={`bg-[#F6F6FF] rounded-lg overflow-hidden ${
                          open ? 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]' : ''
                        }`}
                      >
                        <Disclosure.Button
                          className='flex items-center w-full text-left py-4 px-4 focus:outline-none'
                          onClick={() => setOpenIndex(index)}
                        >
                          <div className='mr-4 w-8 h-8 flex-shrink-0'>
                            <Image
                              src={item.Icon.url}
                              alt={item.Icon.alternativeText || item.Title}
                              width={32}
                              height={32}
                            />
                          </div>
                          <p className='font-proxima-nova flex-grow font-[600] text-[14px] sm:text-[24px] leading-[18px] sm:leading-[28px] pr-2'>
                            {item.Title}
                          </p>
                          <div className='mt-[2px]'>
                            <ToggleIcon isOpen={openIndex === index} />
                          </div>
                        </Disclosure.Button>
                        <AnimatePresence initial={false}>
                          {item.Content && openIndex === index && (
                            <motion.div
                              initial='collapsed'
                              animate='open'
                              exit='collapsed'
                              variants={{
                                open: { opacity: 1, height: 'auto' },
                                collapsed: { opacity: 0, height: 0 },
                              }}
                              transition={{
                                duration: 0.3,
                                ease: [0.04, 0.62, 0.23, 0.98],
                              }}
                            >
                              <Disclosure.Panel static>
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  className='font-proxima-nova px-4 pt-0 sm:pt-0 pb-4 text-[12px] sm:text-[18px] font-[400] leading-[15px] sm:leading-[21px] text-[#000] ml-12'
                                >
                                  {item.Content}
                                </motion.p>
                              </Disclosure.Panel>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
              <Link
                href={data?.CtaButton?.Herf || '/products'}
                className='inline-flex items-center mt-8 text-[#112FFF] hover:underline font-semibold'
              >
                <span className='font-space-grotesk text-[18px] sm:text-[24px] font-[700] leading-[23px] sm:leading-[30px] text-[#1130FF]'>
                  {data?.CtaButton?.Title || 'Learn More'}
                </span>
                <Image
                  src='/images/icons/arrow.svg'
                  alt='Arrow right'
                  width={13}
                  height={13}
                  className='ml-2'
                />
              </Link>
            </div>
            <Link href='/products/#product-card' className='w-full xl:w-3/5' style={{ cursor: 'pointer' }}>
              <Image
                src={data?.Image?.url || '/images/Condensed-Version.png'}
                alt={data?.Image?.alternativeText || 'Articul8 Platform Architecture'}
                width={800}
                height={800}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </Link>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default PlatformArchitecture;
