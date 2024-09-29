'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const words = ['EXPERTISE', 'VALUE', 'GREATNESS'];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    <section className='relative h-screen overflow-hidden'>
      {isClient && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          className='absolute inset-0 w-full h-full object-cover'
          style={{ top: '-50px', height: 'calc(100% + 100px)' }}
        >
          <source src='/images/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
      <div className='relative z-20 flex items-center justify-start h-full px-4 md:px-8 lg:px-16'>
        <div className='text-left max-w-3xl'>
          <h1
            className='font-bold mb-4'
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.2' }}
          >
            <span className='block mb-2'>ARTICUL8</span>
            <span className='block'>
              YOUR{' '}
              <span className='text-blue-600 inline-flex items-center'>
                <Image
                  src='/images/open-bracket.svg'
                  alt='Open bracket'
                  width={24}
                  height={24}
                  priority
                />
                <span className='inline-block'>{currentWord}</span>
                <Image
                  src='/images/close-bracket.svg'
                  alt='Close bracket'
                  width={24}
                  height={24}
                  priority
                />
              </span>
            </span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl'>
            The GenAI platform that simply works.{' '}
            <br className='hidden sm:inline' />
            Bring order to chaos.
          </p>
          <button className='bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-lg md:text-xl font-semibold hover:bg-blue-700 transition duration-300'>
            Try Articul8
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
