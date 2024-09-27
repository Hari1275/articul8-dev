'use client'
import React, { useState, useEffect } from 'react';

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
    <section className="relative h-screen overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-container"
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 flex items-center h-full px-4 md:px-8 lg:px-16">
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-4">
            <span className="block">ARTICUL8</span>
            <span className="block whitespace-nowrap">
              YOUR{' '}
              <span className="text-blue-600 inline-flex items-center">
                <img src="/images/open-bracket.svg" alt="Open bracket" className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-16 mr-2" />
                <span className="inline-block">
                  {currentWord}
                </span>
                <img src="/images/close-bracket.svg" alt="Close bracket" className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-16 ml-2" />
              </span>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-2xl">
            The GenAI platform that simply works. <br />
            Bring order to chaos.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Try Articul8
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
