'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['EXPERTISE', 'DATA', 'STRENGTH','VALUES','KNOWLEDGE'];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {
          setIsExpanded(true);
        }, 800);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className='relative sm:min-h-[80vh] flex items-center justify-center bg-[#FFFFFF] text-white overflow-hidden'>
      <div className='container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start h-full md:pt-[50px]'>
        <div className='text-left w-full  z-10 md:mb-8 lg:mb-0'>
          <h1 className='font-space-grotesk text-[#000000] text-[32px]  font-[700]  sm:py-8 pt-12 sm:text-[50px] md:text-[54px] lg:text-[64px] sm:leading-[76.8px] md:leading-[76.8px] lg:leading-[76.8px] text-center lg:text-left'>
            <span className='block'>ARTICUL8 YOUR</span>
            <span className='text-[#112FFF] mt-2 inline-flex items-center h-[1.2em] overflow-hidden'>
              <motion.div
                animate={{ width: isExpanded ? 'auto' : 'auto' }}
                transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                className='flex items-center'
              >
                <Image
                  src='/images/open-bracket.svg'
                  alt='Open bracket'
                  width={32}
                  height={32}
                  className='mr-1 w-[20px] sm:w-[30px] md:w-[32px] h-auto'
                  priority
                />
                <motion.div
                  animate={{ width: isExpanded ? 'auto' : '1px' }}
                  transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
                  className='overflow-hidden h-full'
                  style={{ minWidth: '1px' }}
                >
                  <AnimatePresence mode='wait' initial={false}>
                    <motion.span
                      key={currentIndex}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{
                        y: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                        opacity: { duration: 0.2, ease: 'easeInOut' },
                      }}
                      className='inline-block whitespace-nowrap px-1'
                      style={{ display: 'block', position: 'relative' }}
                    >
                      {words[currentIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
                <Image
                  src='/images/close-bracket.svg'
                  alt='Close bracket'
                  width={32}
                  height={32}
                  className='ml-1 w-[20px] sm:w-[30px] md:w-[32px] h-auto'
                  priority
                />
              </motion.div>
            </span>
          </h1>
          <p className='font-proxima-nova text-[#000000] sm:text-[24px] md:text-[24px] text-[16px] md:pb-2 sm:mt-0 font-[400] leading-[23.8px] sm:leading-[28.8px]  sm:font-[400] text-center lg:text-left'>
            The GenAI platform that simply works.
            <br />
            Bring order to chaos.
          </p>
        </div>
        <div className='w-full lg:w-[52%]  lg:absolute lg:right-0 lg:top-0 lg:bottom-0 hidden md:block'>
          <div className='relative w-full h-[378px] sm:h-[640px]  lg:h-full'>
            <Image
              src='/images/hero-cubes.svg'
              alt='Articul8 Cubes'
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              priority
              className='scale-100 lg:scale-100 lg:translate-x-[5%] lg:translate-y-[12%]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
