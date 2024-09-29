'use client';
import React from 'react';
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
    <Image src={icon} alt='' width={24} height={24} className='mb-4' />
    <h3 className='text-xl font-bold mb-2'>{title}</h3>
    <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
  </div>
);

const ConvertSection = () => {
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
    <section className='py-20 bg-white overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
          <span className='block leading-tight mb-2'>
            Convert your GenAI chaos to
          </span>
          <span className='block leading-tight mb-2'>
            <span className='relative inline-block'>
              <span className='text-pink-500'>[Success]</span>
              <span className='absolute left-0 right-0 h-3 bg-blue-200 bottom-1 -z-10'></span>
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
              Start Articul8'ing
            </button>
          </div>
          <div className='w-full md:w-1/2 relative min-h-[400px]'>
            <Image
              src='/images/abstract-shapes.png'
              alt='Abstract shapes'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvertSection;
