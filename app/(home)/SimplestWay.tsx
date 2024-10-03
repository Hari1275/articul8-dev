'use client';
import Image from 'next/image';
import AnimatedText from './AnimatedText';

const SimplestWay = () => {
  return (
    <section className="relative py-2 bg-[#F5F5F5]">
      <div className='relative h-[80px]'>
        <div className='absolute bottom-0 right-0'>
          <Image
            src='/images/vertical-lines.svg'
            alt='Decorative vertical lines'
            width={20}
            height={100}
            style={{ width: 'auto', height: '50%' }}
            priority
          />
        </div>
      </div>
      <div className='px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-[1.1] sm:leading-[1.05] flex flex-col gap-2 sm:gap-3 md:gap-4'>
          <span>The simplest way to build complex</span>
          <span>
            enterprise <span className='text-pink-500'>GenAI</span>{' '}
            applications
          </span>
          <span>using your expertise.</span>
        </h2>
      </div>
      <div className='relative h-[60px] sm:h-[80px] md:h-[100px] mt-8 sm:mt-12 md:mt-16'>
        <div className='absolute bottom-0 left-0'>
          <Image
            src='/images/vertical-lines-left.svg'
            alt='Decorative vertical lines'
            width={20}
            height={100}
            style={{ width: 'auto', height: '50%' }}
            priority
          />
        </div>
      </div>
      <AnimatedText />
    </section>
  );
};

export default SimplestWay;