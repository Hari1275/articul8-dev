'use client';
import Image from 'next/image';
import '../../../styles/globals.css';
import Modal from '../../../components/Modal';
import { useState } from 'react';

const LinkedInFeedHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flocklerEmbed = `
<script src="https://plugins.flockler.com/embed/193af58a69e0f0eeaa6fd27ac871ddd5/193afaca8380d895fabfb5aec14f70b0" async></script>
<div id="flockler-embed-193afaca8380d895fabfb5aec14f70b0"></div>

  `;

  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className='bg-[#F3F2F2] lg:py-16 py-4'>
          <div className='container mx-auto'>
            <div className='flex flex-col-reverse lg:flex-row items-center gap-8 px-4 pt-8 lg:pt-16'>
              {/* Content Container */}
              <div className='flex-1 min-w-0'>
                {' '}
                {/* Replace w-full lg:w-1/2 */}
                <h1
                  className='font-space-grotesk font-bold 
                !text-[32px] !leading-[40px] 
                sm:!text-[48px] sm:!leading-[60px] 
                lg:!text-[64px] lg:!leading-[81.66px]
                mb-4 !capitalize'
                >
                  LATEST NEWS
                </h1>
                <p
                  className='font-proxima-nova 
                text-[16px] leading-[19px] 
                sm:text-[20px] sm:leading-[24px] 
                lg:text-[24px] lg:leading-[29.23px]
                text-black mb-6 lg:mb-8'
                >
                  Catch up on the latest news, stories and updates about
                  Articul8 AI
                </p>
              </div>

              {/* Image Container */}
              <div className='flex-1 min-w-0 flex items-center justify-center'>
                {' '}
                {/* Replace w-full lg:w-1/2 */}
                <div className='relative w-full'>
                  <Image
                    src='/images/linkedIn/linkedin-hero.png'
                    alt='News Hero'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-[300px]'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Feed Section */}

      <section className='bg-white'>
        {/* <div className='flex justify-between items-baseline   container mx-auto px-4 lg:px-6 '>
          <h2
            className='font-space-grotesk text-black text-center sm:text-left
              text-[32px] leading-[48px]
              sm:text-[44px] sm:leading-[66px]
              md:text-[56px] md:leading-[84px]
              font-bold'
          >
            Latest News
          </h2>
        </div> */}
        <div
          className='container mx-auto py-12 px-4 lg:pt-16 lg:px-6'
          dangerouslySetInnerHTML={{ __html: flocklerEmbed }}
        />
      </section>
      <section className=' relative'>
        <div className='container mx-auto px-4 sm:px-6'>
          <div className='bg-[#112FFF] grid lg:grid-cols-2 items-center min-h-[250px] relative'>
            <div className='order-1 lg:order-1 py-4 lg:pt-16 lg:pb-16 relative z-10'>
              <div className='flex flex-col items-center lg:items-start'>
                <h2
                  className='font-proxima-nova text-white text-center lg:text-left
                text-[28px] leading-[34px]
                sm:text-[28px] sm:leading-[34px]
                md:text-[32px] md:leading-[38.98px]
                font-bold mb-8 lg:pl-8 xl:pl-16 2xl:pl-24'
                >
                  Stop Falling Behind
                </h2>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className='text-[#1130FF] hover:underline font-semibold 
                  flex items-center pt-2 lg:pl-8 xl:pl-16 2xl:pl-24
                  justify-center lg:justify-start w-full lg:w-auto'
                >
                  <span className='font-space-grotesk text-[22px] font-[700] leading-[27.07px] text-[#FFF]'>
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

              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>

            <div
              className='order-2 lg:order-2 relative lg:absolute lg:right-14 right-0 -bottom-0 lg:-bottom-12 
            w-full lg:w-auto flex justify-center lg:justify-center'
            >
              <div
                className='relative w-[280px] h-[250px]
              sm:w-[400px] sm:h-[400px]
              md:w-[400px] md:h-[280px]
              transform translate-y-0 lg:-translate-y-12 '
              >
                <Image
                  src='/images/linkedIn/linkedIn-growth.png'
                  alt='3D Arrow'
                  fill
                  className='object-contain object-bottom'
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
