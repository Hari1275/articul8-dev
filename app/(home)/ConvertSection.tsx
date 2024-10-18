'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className='bg-[#F9FAFB] rounded-lg p-6 shadow-sm border border-[#EAECF0]'>
    <div className='mb-4'>
      <Image
        src={icon}
        alt={title}
        width={40}
        height={40}
        className='w-10 h-10'
        priority
      />
    </div>
    <h3 className='font-space-grotesk text-[23px] sm:text-[34px] font-[700] leading-[30px] sm:text-2xl text-black  mb-3'>
      {title}
    </h3>
    <p className='font-proxima-nova font-[400] text-[20px] text-black leading-[24px]'>
      {description}
    </p>
  </div>
);

const ConvertSection = () => {
  const words = ['Success'];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentWord(words[(currentIndex + 1) % words.length]);
        setTimeout(() => {
          setIsExpanded(true);
        }, 100);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, words]);

  const features = [
    {
      icon: '/images/icons/grow.svg',
      title: 'Scale Effortlessly',
      description:
        'Enterprise-scale readiness to handle large data volumes, with high concurrency and low latency.',
    },
    {
      icon: '/images/icons/whisper, api.svg',
      title: 'Stay Resilient',
      description:
        'Effortlessly adapt to continually changing datasets, including adapting to new context and use-cases.',
    },
    {
      icon: '/images/icons/ahead.svg',
      title: 'Stay Ahead',
      description:
        'Continuously evolve your applications with the latest models',
    },
    {
      icon: '/images/icons/grows.svg',
      title: 'Get Transparency',
      description:
        'Native support for interactivity, explainability, traceability, auditability and reproducibility.',
    },
    {
      icon: '/images/icons/edge.svg',
      title: 'Avoid lock-ins',
      description:
        'Retain flexibility by mitigating vendor lock-in for hardware and AI models.',
    },
  ];

  const renderFeatureCards = (): JSX.Element[] => {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < features.length; i += 3) {
      const rowCards = features.slice(i, i + 3);
      rows.push(
        <div
          key={i}
          className={`grid ${getGridClass(rowCards.length)} gap-6 mb-6`}
        >
          {rowCards.map((feature, index) => (
            <FeatureCard key={`${i}-${index}`} {...feature} />
          ))}
        </div>
      );
    }
    return rows;
  };

  const getGridClass = (count: number) => {
    switch (count) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-3';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <section className='sm:pt-20 pt-6 bg-gray-50 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6'>
        <h2 className='font-space-grotesk text-[26px] font-[700] leading-[45px] sm:text-4xl md:text-5xl text-[#060606] mb-16 text-center'>
          <span className='block leading-tight mb-2'>
            Convert your GenAI chaos to
          </span>
          <span className='block leading-tight mb-2'>
            <span className='text-[#FA05C3] inline-flex items-center'>
              <Image
                src='/images/icons/section-open.svg'
                alt='Open bracket'
                width={28}
                height={28}
                className='mr-1 w-4 h-4 sm:w-12 sm:h-12'
                sizes='(max-width: 640px) 15px, (max-width: 768px) 20px, 25px'
                priority
              />
              <span
                className={`transition-all duration-300 ${
                  isExpanded ? 'opacity-100 max-w-[300px]' : 'opacity-0 max-w-0'
                }`}
              >
                {currentWord}
              </span>
              <Image
                src='/images/icons/section-closed.svg'
                alt='Close bracket'
                width={28}
                height={28}
                className='ml-1 w-4 h-4 sm:w-12 sm:h-12'
                sizes='(max-width: 640px) 15px, (max-width: 768px) 20px, 25px'
                priority
              />
            </span>{' '}
            with
          </span>
          <span className='block leading-tight'>the Articul8 platform.</span>
        </h2>
        <div className='sm:mb-20 mb-12'>{renderFeatureCards()}</div>
        <div className='flex flex-col md:flex-row items-stretch bg-[#DCE0F3] rounded-t-lg overflow-hidden'>
          <div className='w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-end md:justify-center items-center md:items-start'>
            <h3 className='font-space-grotesk font-[700] text-[40px] sm:text-5xl md:text-[68px] text-center md:text-left leading-[51.04px] sm:mb-6 sm:leading-[108px]'>
              Stop
              <br className='hidden md:block' />
              Falling
              <br />
              Behind
            </h3>
            <button className='bg-[#1130FF] font-spaceGrotesk font-[700] text-[20px] leading-[25.52px] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg mt-4'>
              Start Articul8&apos;ing
            </button>
          </div>
          <div className='w-full md:w-3/5 relative min-h-[400px] md:min-h-[500px] order-first order-last'>
            <Image
              src='/images/abstract-shapes.png'
              alt='Abstract shapes with hand interaction'
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvertSection;
