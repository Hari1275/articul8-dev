'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const words = ['EXPERTISE', 'VALUE', 'GREATNESS'];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const current = words[currentIndex];
      if (isDeleting) {
        setCurrentWord(current.substring(0, currentWord.length - 1));
      } else {
        setCurrentWord(current.substring(0, currentWord.length + 1));
      }

      if (!isDeleting && currentWord === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentWord, currentIndex, isDeleting]);

  return (
    <section className='relative h-screen md:min-h-[600px]  min-h-[400px] bg-[#112FFF] text-white'>
      
      <div className='relative z-20 flex flex-col items-start justify-center h-full px-4 md:px-8 lg:px-16'>
     
        <div className='text-left max-w-3xl'>
          <h1 className='font-bold mb-4 text-4xl md:text-5xl lg:text-5xl'>
            <span className='block leading-[3.5rem]'>ARTICUL8</span>
            <span className='block leading-[2.5rem] pt-6'>
              YOUR{' '}
              <span className='text-[#00F4C5] inline-flex items-center'>
              <Image
    src='/images/open-bracket.svg'
    alt='Open bracket'
    width={25}
    height={25}
    className='mr-1'
    sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 25px"
    // style={{
    //   width: 'auto',
    //   height: 'auto'
    // }}
    priority
  />
  {currentWord}
  <Image
    src='/images/close-bracket.svg'
    alt='Close bracket'
    width={25}
    height={25}
    className='ml-1'
    sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 25px"
    // style={{
    //   width: 'auto',
    //   height: 'auto'
    // }}
    priority
  />
              </span>
            </span>
          </h1>
          <p className='text-lg  sm:text-xl md:text-2xl mb-8 max-w-2xl pt-6 font-medium'>
            The GenAI platform that simply works.
            <br />
            Bring order to chaos.
          </p>
        </div>
        
      </div>
     

      <div className='absolute bottom-[-55px] left-0 w-full  zIndex-[99] h-auto'>
      <Image
                src='/images/hero-banner.svg'
                alt="hero-banner"
                width={200}
                height={20}
                objectPosition='bottom right'
                className='w-full '
        priority
      />
          </div>

    </section>
  );
};

export default Hero;