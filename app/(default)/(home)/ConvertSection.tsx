'use client';
import Image from 'next/image';
import { useState } from 'react';
import UnlockSectionHeader from './UnlockSectionHeader';
import Modal from '../../../components/Modal';
import ErrorBoundary from '../../../components/ErrorBoundary';

interface FeatureCardProps {
  Icon: {
    url: string;
    alternativeText: string;
  };
  Title: string;
  Content: string;
}

interface ConvertSectionProps {
  data: {
    GenAiChaosSection: {
      MainTitle: {
        PrefixTitle: string;
        HighlightedTitle: string;
        SuffixTitle: string;
      };
      Cards: FeatureCardProps[];
    };
    LastSection: {
      PrefixTItle: string;
      DynamicWords: string;
      SuffixTitle: string;
      MainTitle: string;
      Image: {
        url: string;
        alternativeText: string;
      };
      CtaButton: {
        Title: string;
        Herf: string | null;
      };
    };
  };
}

const FeatureCard = ({ Icon, Title, Content }: FeatureCardProps) => (
  <div className='bg-[#F9FAFB] rounded-lg p-6 shadow-sm border border-[#EAECF0]'>
    <div className='mb-4'>
      <Image
        src={Icon?.url}
        alt={Icon?.alternativeText || Title}
        width={40}
        height={40}
        className='w-10 h-10'
        priority
      />
    </div>
    <h3 className='font-proxima-nova text-[23px] xl:text-[40px] lg:text-[40px] font-[700] lg:leading-[50px] xl:leading-[50px] text-black mb-3'>
      {Title}
    </h3>
    <p className='font-proxima-nova font-[400] text-[20px] text-black leading-tight'>
      {Content}
    </p>
  </div>
);

const ConvertSection = ({ data }: ConvertSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderFeatureCards = (): JSX.Element[] => {
    const rows: JSX.Element[] = [];
    const cards = data?.GenAiChaosSection?.Cards || [];
    
    for (let i = 0; i < cards.length; i += 3) {
      const rowCards = cards.slice(i, i + 3);
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
      <ErrorBoundary>
      <section className='sm:pt-16 pt-8 bg-gray-50 overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6'>
          <h2 className='font-space-grotesk text-[26px] font-[700] leading-tight sm:text-[34px] sm:leading-[50px] md:text-[50px] lg:text-[54px] lg:leading-[84px] text-[#060606] mb-12 sm:mb-16 text-center'>
            <span className='block'>
              {data?.GenAiChaosSection?.MainTitle?.PrefixTitle || 'Convert your GenAI chaos to'}{' '}
              <span className='text-[#FA05C3] inline-flex items-center justify-center'>
                <span className='inline-block transition-all duration-300 ease-in-out'>
                  {data?.GenAiChaosSection?.MainTitle?.HighlightedTitle || 'success'}
                </span>
              </span>{' '}
              <span className='hidden xl:block'></span>
              {data?.GenAiChaosSection?.MainTitle?.SuffixTitle || 'with the Articul8 platform.'}
            </span>
          </h2>
          <div className='sm:mb-12 mb-12'>{renderFeatureCards()}</div>
          <UnlockSectionHeader data={data.LastSection} />

          <div className='flex flex-col md:flex-row items-stretch bg-[#DCE0F3] rounded-t-lg overflow-hidden'>
            <div className='w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-end md:justify-center items-center md:items-start'>
              <h3 className='font-space-grotesk font-[700] text-[40px] sm:text-5xl md:text-[68px] text-center md:text-left leading-[51.04px] sm:mb-6 sm:leading-[108px] lg:pl-8 xl:pl-16 2xl:pl-24'>
                {data?.LastSection?.MainTitle || 'Stop\nFalling\nBehind'}
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className='text-[#1130FF] hover:underline font-semibold flex items-center pt-2 lg:pl-8 xl:pl-16 2xl:pl-24'
              >
                <span className='font-space-grotesk text-[22px] font-[700] leading-[27.07px] text-[#1130FF]'>
                  {data?.LastSection?.CtaButton?.Title || "Start Articul8'ing"}
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
            <div className='w-full md:w-3/5 relative min-h-[400px] md:min-h-[500px] order-last'>
              <Image
                src={data?.LastSection?.Image?.url || '/images/abstract-shapes.png'}
                alt={data?.LastSection?.Image?.alternativeText || 'Abstract shapes with hand interaction'}
                layout='fill'
                objectFit='cover'
                priority
              />
            </div>
          </div>
        </div>
      </section>
     </ErrorBoundary>
  );
};

export default ConvertSection;
