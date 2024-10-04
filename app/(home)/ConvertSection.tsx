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
  <div className='bg-[#F8FAFC] rounded-lg p-6 shadow-sm'>
    <Image
      src={icon}
      alt={title}
      width={24}
      height={24}
      className='mb-4'
      priority
    />
    <h3 className='text-xl font-bold mb-2'>{title}</h3>
    <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
  </div>
);

const ConvertSection = () => {
  const words = ['Success'];
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
  const features = [
    {
      icon: '/images/icons/scale.svg',
      title: 'Scale Effortlessly',
      description:
        'Enterprise-scale readiness to handle large data volumes, with high concurrency and low latency.',
    },
    {
      icon: '/images/icons/resilient.svg',
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
      icon: '/images/icons/transparency.svg',
      title: 'Get Transparency',
      description:
        'Native support for interactivity, explainability, traceability, auditability and reproducibility.',
    },
    {
      icon: '/images/icons/lock.svg',
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
    <section className='pt-20 bg-white overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
          <span className='block leading-tight mb-2'>
            Convert your GenAI chaos to
          </span>
          <span className='block leading-tight mb-2'>
            <span className='text-[#FA05C3] inline-flex items-center'>
              <Image
                src='/images/icons/section-open.svg'
                alt='Open bracket'
                width={25}
                height={25}
                className='mr-1'
                sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 25px"
                priority
              />
              {currentWord}
              <Image
                src='/images/icons/section-closed.svg'
                alt='Close bracket'
                width={25}
                height={25}
                className='ml-1'
                sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 25px"
                priority
              />
            </span>{' '}
            with
          </span>
          <span className='block leading-tight'>the Articul8 platform</span>
        </h2>
        <div className='mb-20'>{renderFeatureCards()}</div>
        <div className='flex flex-col md:flex-row items-stretch bg-[#F0F4F8] rounded-lg overflow-hidden'>
          <div className='w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center'>
            <h3 className='text-6xl font-bold mb-6 leading-tight'>
              Stop
              <br />
              Falling
              <br />
              Behind
            </h3>
            <button className='bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg self-start mt-4'>
              Start Articul8&apos;ing
            </button>
          </div>
          <div className='w-full md:w-1/2 relative min-h-[400px]'>
            <Image
              src='/images/abstract-shapes.png'
              alt='Abstract shapes'
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
