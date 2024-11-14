'use client';
// import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

import { useState } from 'react';
import UnlockSectionHeader from './UnlockSectionHeader';
import Modal from '../../../components/Modal';

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
    <h3 className='font-proxima-nova text-[23px]  lg:text-[40px] font-[700] lg:leading-[50px] xl:leading-[50px] text-black  mb-3 xl:text-[32px]'>
      {title}
    </h3>
    <p className='font-proxima-nova xl:text-[20px] font-[400] text-[20px] text-black leading-tight'>
      {description}
    </p>
  </div>
);

const ConvertSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const words = useMemo(() => ['Success'], []);
  // const [currentWord, setCurrentWord] = useState(words[0]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isExpanded, setIsExpanded] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsExpanded(false);
  //     setTimeout(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  //       setCurrentWord(words[(currentIndex + 1) % words.length]);
  //       setTimeout(() => {
  //         setIsExpanded(true);
  //       }, 600);
  //     }, 400);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, words]);

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
      title: 'Avoid Lock-ins',
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
    <section className='sm:pt-16 pt-8 bg-gray-50 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6'>
        <h2 className='font-space-grotesk text-[26px] font-[700] leading-tight sm:text-[34px] sm:leading-[50px] md:text-[50px] lg:text-[54px]  lg:leading-[84px] text-[#060606] mb-12 sm:mb-16 text-center'>
          <span className='block'>
            Convert your GenAI chaos to{' '}
            <span className='text-[#FA05C3] inline-flex items-center justify-center'>
              <span className='inline-block transition-all duration-300 ease-in-out'>
                success
              </span>
            </span>{' '}
            <span className='hidden xl:block'>
             
            </span>
            with the Articul8 platform.
          </span>
        </h2>
        <div className='sm:mb-12 mb-12'>{renderFeatureCards()}</div>
      <UnlockSectionHeader />
    
        <div className='flex flex-col md:flex-row items-stretch bg-[#DCE0F3] rounded-t-lg overflow-hidden'>
          <div className='w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-end md:justify-center items-center md:items-start'>
            <h3 className='font-space-grotesk font-[700] text-[40px] sm:text-5xl md:text-[68px] text-center md:text-left leading-[51.04px] sm:mb-6 sm:leading-[108px]  lg:pl-8  xl:pl-16 2xl:pl-24 xl:leading-[80px]  xl:text-[64px]'>
              Stop
              <br className='' />
              Falling
              <br />
              Behind  
            </h3>
            {/* <button className='bg-[#1130FF] font-spaceGrotesk font-[700] text-[20px] leading-[25.52px] text-white py-4 px-[24px] rounded-[4px] hover:bg-blue-700 transition-colors  mt-4'>
              Start Articul8&apos;ing
            </button> */}
            {/* <Link
              href='https://redbaron.co.in/2024/articule-8-demo/a8-sign-up-for-a8-essential.html'
              target='_blank'
              className='text-[#1130FF] hover:underline font-semibold flex items-center'
            >
              <span className='font-space-grotesk text-[20px] font-[700] leading-[26.07px] text-[#1130FF]'>
                Start Articul8&apos;ing
              </span>
              <Image
                src='/images/icons/header-arrow.svg'
                alt='Arrow right'
                width={13}
                height={13}
                className='ml-2'
              />
            </Link> */}
             <button
        onClick={() => setIsModalOpen(true)}
        className='text-[#1130FF] hover:underline font-semibold flex items-center pt-2 lg:pl-8  xl:pl-16 2xl:pl-24'
      >
        <span className='font-space-grotesk text-[22px] font-[700] leading-[27.07px] text-[#1130FF]'>
          Start Articul8&apos;ing
        </span>
        <Image
          src='/images/icons/header-arrow.svg'
          alt='Arrow right'
          width={13}
          height={13}
          className='ml-2'
        />
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
          <div className='w-full md:w-3/5 relative min-h-[400px] md:min-h-[500px]  order-last'>
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
