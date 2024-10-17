'use client';

import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import React from 'react';

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className='flex items-center justify-center w-4 h-6 sm:w-6 sm:h-6'>
    <Image
      src={isOpen ? '/images/icons/minus.svg' : '/images/icons/plus.svg'}
      alt={isOpen ? 'minus' : 'plus'}
      width={16}
      height={16}
      className='w-3 h-3 sm:w-4 sm:h-4'
    />
  </div>
);

const PlatformArchitecture = () => {
  const items = [
    {
      icon: '/images/icons/data.svg',
      title: 'Autonomous Decisions & Actions',
      description:
        'Autonomously Manage A System Of Models (LLMs, Non-LLMs, And Customer Models), Optimizing Resources To Deliver Tangible Outcomes With Accuracy And Precision',
    },
    {
      icon: '/images/icons/embedding.svg',
      title: 'Automated Data Intelligence',
      description: '',
    },
    {
      icon: '/images/icons/whisper, api.svg',
      title: 'Growing Library Of Specialized Models',
      description: '',
    },
    {
      icon: '/images/icons/sticker.svg',
      title: 'Observability, Traceability & Auditability At Every Step',
      description: '',
    },
    {
      icon: '/images/icons/write, brief.svg',
      title: 'Deploy Anywhere Securely',
      description: '',
    },
  ];

  return (
    <section className='sm:pt-32 pt-8 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-white'>
      <div className='container mx-auto'>
        <h2 className='font-space-grotesk text-[26px] sm:text-6xl font-bold sm:mb-16 mb-8 leading-tight text-center sm:text-left'>
          Articul8 platform makes the
          <br className='sm:hidden' />
          <span className='text-[#FF00C7] font-bold'>
            {' '}
            impossible possible.
          </span>
        </h2>
        <div className='flex flex-col lg:flex-row items-start justify-between gap-12'>
          <div className='w-full lg:w-1/2'>
            <div className='space-y-2'>
              {items.map((item, index) => (
                <Disclosure key={index} defaultOpen={index === 0}>
                  {({ open }) => (
                    <div
                      className={`bg-[#F6F6FF] rounded-lg overflow-hidden ${
                        open ? 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]' : ''
                      }`}
                    >
                      <Disclosure.Button className='flex items-start w-full text-left py-4 px-4 focus:outline-none'>
                        <div className='mr-4 w-8 h-8 flex-shrink-0 mt-[2px]'>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={32}
                            height={32}
                          />
                        </div>
                        <p className='font-space-grotesk sm:font-proxima-nova flex-grow font-[600] text-[14px] sm:text-[24px] leading-[18px] sm:leading-[28px] pr-2'>
                          {item.title}
                        </p>
                        <div className='mt-[2px]'>
                          <ToggleIcon isOpen={open} />
                        </div>
                      </Disclosure.Button>
                      {item.description && (
                        <Disclosure.Panel className='font-space-grotesk sm:font-proxima-nova px-4 pt-2 sm:pt-0 pb-4 text-[12px] sm:text-[18px] font-[400] leading-[15px] sm:leading-[21px] text-[#000] ml-12'>
                          {item.description}
                        </Disclosure.Panel>
                      )}
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
            <a
              href='#'
              className='inline-flex items-center mt-8 text-[#112FFF] hover:underline font-semibold'
            >
              <span className='font-space-grotesk text-[18px] sm:text-[24px] font-[700] leading-[23px] sm:leading-[30px] text-[#1130FF]'>
                Learn More
              </span>
              <Image
                src='/images/icons/arrow.svg'
                alt='Arrow right'
                width={13}
                height={13}
                className='ml-2'
              />
            </a>
          </div>
          <div className='w-full lg:w-1/2'>
            <Image
              src='/images/Condensed-Version.png'
              alt='Articul8 Platform Architecture'
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitecture;
