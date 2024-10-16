'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['EXPERTISE', 'VALUE', 'GREATNESS'];

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
        }, 100);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative sm:min-h-screen flex items-center justify-center bg-[#112FFF] text-white overflow-hidden'>
      <div className='container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center lg:items-start h-full'>
        <div className='text-left w-full  lg:pt-[10%] z-10 mb-8 lg:mb-0'>
          <h1 className='font-space-grotesk text-[32px]  font-bold sm:mb-4 py-8 sm:text-5xl md:text-5xl lg:text-6xl text-center lg:text-left'>
            <span className='block'>ARTICUL8 YOUR</span>
            <span className='text-[#00F4C5] mt-2 inline-flex items-center h-[1.2em] overflow-hidden'>
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
                      className='inline-block whitespace-nowrap'
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
                  className='mr-1 w-[20px] sm:w-[30px] md:w-[32px] h-auto'
                  priority
                />
              </motion.div>
            </span>
          </h1>
          <p className='font-proxima-nova text-sm sm:text-xl md:text-2xl sm:mt-6 font-medium text-center lg:text-left'>
            The GenAI platform that simply works.
            <br />
            Bring order to chaos.
          </p>
        </div>
        <div className='w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0'>
          <div className='relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-full'>
            <Image
              src='/images/hero-cubes.svg'
              alt='Articul8 Cubes'
              layout='fill'
              objectFit='contain'
              objectPosition='center'
              priority
              className='lg:scale-100 lg:translate-x-[10%] lg:translate-y-[5%]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
