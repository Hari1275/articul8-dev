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
    <section className='relative h-screen flex items-center justify-center bg-[#112FFF] text-white overflow-hidden'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <div className='text-left max-w-2xl'>
          <h1 className='font-bold mb-4 text-5xl md:text-6xl lg:text-6xl'>
            <span className='block leading-tight'>ARTICUL8 YOUR</span>
            <span className='text-[#00F4C5] mt-2 inline-flex items-center h-[1.2em] overflow-hidden'>
              <Image
                src='/images/open-bracket.svg'
                alt='Open bracket'
                width={25}
                height={25}
                className='mr-1'
                sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 25px"
                priority
              />
              <span className='inline-block min-w-[0.1em]'>{currentWord}</span>
              <Image
                src='/images/close-bracket.svg'
                alt='Close bracket'
                width={25}
                height={25}
                className='ml-1'
                sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 25px"
                priority
              />
            </span>
          </h1>
          <p className='text-xl md:text-2xl mt-6 font-medium'>
            The GenAI platform that simply works.
            <br />
            Bring order to chaos.
          </p>
        </div>
        
        <div className='hidden md:block w-1/2'>
          <Image
            src='/images/banner.png'
            alt='3D Cubes'
            width={500}
            height={500}
            className='w-full h-auto object-contain'
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              width: '100%',
              height: 'auto'
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
