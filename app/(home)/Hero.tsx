'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['EXPERTISE', 'VALUE', 'GREATNESS'];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {
          setIsExpanded(true);
        }, 100); // Small delay before expanding
      }, 400); // Wait for brackets to close
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative h-screen min-h-[500px] flex items-center justify-center bg-[#112FFF] text-white overflow-hidden'>
  <div className='container mx-auto px-4 flex items-center justify-between h-full'>
    <div className='text-left max-w-2xl'>
    <h1 className='font-bold mb-4 text-5xl md:text-6xl lg:text-7xl'>
        <span className='block leading-tight'>ARTICUL8 YOUR</span>
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
              className='mr-1'
              sizes="(max-width: 640px) 20px, (max-width: 768px) 25px, 30px"
              priority
            />
            <motion.div
              animate={{ width: isExpanded ? 'auto' : '1px' }}
              transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
              className='overflow-hidden h-full'
              style={{ minWidth: '1px' }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={currentIndex}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ 
                    y: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                    opacity: { duration: 0.2, ease: 'easeInOut' }
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
              className='ml-1'
              sizes="(max-width: 640px) 20px, (max-width: 768px) 25px, 30px"
              priority
            />
          </motion.div>
        </span>
      </h1>
      <p className='text-xl md:text-2xl mt-6 font-medium'>
        The GenAI platform that simply works.
        <br />
        Bring order to chaos.
      </p>
    </div>
        
    <div className='hidden md:block w-1/2 align-right'>
      <Image
        src='/images/hero-cubes.svg'
        alt='Articul8 Cubes'
        width={300}
        height={300}
        className='w-full h-auto object-contain align-right'
        sizes="(max-width: 768px) 100vw, 50vw"
        // style={{
        //   width: '100%',
        //   height: 'auto'
        // }}
        priority
      />
    </div>
  </div>
</section>
  );
};

export default Hero;
