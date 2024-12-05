'use client'
import Image from 'next/image';
import '../../../styles/globals.css';
import Modal from '../../../components/Modal';
import { useState } from 'react';

const LinkedInFeedHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flocklerEmbed = `
    <script src="https://static.elfsight.com/platform/platform.js" async></script>
    <div class="elfsight-app-c7b04981-ad60-4649-b003-e9c0bb31d72d" data-elfsight-app-lazy></div>
  `;

  return (
    <div>
      {/* Hero Section */}
      <section >
        <div className='bg-[#F3F2F2] lg:py-24 py-4'>
        <div className='container mx-auto'>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 px-4 py-8 lg:py-16">
            {/* Content Container */}
            <div className="w-full lg:w-1/2">
              <h1 className="font-spaceGrotesk font-bold 
                text-4xl leading-[50px] md:text-5xl md:leading-[65px] lg:text-[64px] lg:leading-[81.66px]
                mb-4">
                NEWS
              </h1>
              <p className="font-proximaNova 
                text-lg leading-[22px] md:text-xl md:leading-[26px] lg:text-[24px] lg:leading-[29.23px]
                text-gray-500 mb-6 lg:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
             
              <div className="relative w-full">
              <Image
                src="/images/linkedIn/linkedIn.png"
                  alt="News Hero"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                priority
              />
            </div>
            </div>
          </div>
        </div>

        </div>
      </section>

      {/* LinkedIn Feed Section */}

      <section className="bg-white">
      <div className="flex justify-between items-baseline mb-2 md:mb-4 container mx-auto px-4 lg:px-6">
        <h2 className="font-space-grotesk text-black
          text-[32px] leading-[48px]
          sm:text-[44px] sm:leading-[66px]
          md:text-[56px] md:leading-[84px]
          font-bold">
        Latest News
        </h2>
        {/* <button className="flex items-center font-space-grotesk text-[#1130FF]
          text-[18px] leading-[23px]
          sm:text-[20px] sm:leading-[25.5px]
          md:text-[22px] md:leading-[28.07px]
          font-bold">
          Sort by
          <Image
            src="/images/case-study/icons/arrow-down.svg"
            alt="Sort"
            width={12}
            height={12}
            className="ml-2"
          />
        </button> */}
      </div>
        <div className="container mx-auto py-12 px-4 lg:py-20 lg:px-6" dangerouslySetInnerHTML={{ __html: flocklerEmbed }} />
      </section>
      <section className="bg-[#112FFF] relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center min-h-[250px] relative">
          <div className="order-1 lg:order-1 py-4 lg:pt-16 lg:pb-16 relative z-10">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="font-proxima-nova text-white text-center lg:text-left
                text-[28px] leading-[34px]
                sm:text-[28px] sm:leading-[34px]
                md:text-[32px] md:leading-[38.98px]
                font-bold mb-8 lg:pl-8 xl:pl-16 2xl:pl-24">
                Stop Falling Behind
              </h2>

              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#1130FF] hover:underline font-semibold 
                  flex items-center pt-2 lg:pl-8 xl:pl-16 2xl:pl-24
                  justify-center lg:justify-start w-full lg:w-auto"
              >
                <span className="font-space-grotesk text-[22px] font-[700] leading-[27.07px] text-[#FFF]">
                Start Articul8&apos;ing
                </span>
                <Image
                  src='/images/case-study/icons/arrow.svg'
                  alt='Arrow'
                  width={13}
                  height={13}
                  className='ml-2'
                />
              </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>

          <div className="order-2 lg:order-2 relative lg:absolute right-0 -bottom-0 lg:-bottom-12 
            w-full lg:w-auto flex justify-center lg:justify-center">
            <div className="relative w-[280px] h-[250px]
              sm:w-[400px] sm:h-[400px]
              md:w-[400px] md:h-[280px]
              transform translate-y-0 lg:-translate-y-12">
              <Image
                src='/images/linkedIn/linkedIn-growth.png'
                alt="3D Arrow"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInFeedHero;
  