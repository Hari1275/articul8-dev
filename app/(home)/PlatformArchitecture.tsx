'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import React from 'react';

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex items-center justify-center">
    <Image 
      src={isOpen ? '/images/icons/plus.svg' : '/images/icons/minus.svg'} 
      alt={isOpen ? 'plus' : 'minus'} 
      width={16} 
      height={16} 
      className='w-4 h-4 sm:w-6 sm:h-6'
    />
  </div>
);

const PlatformArchitecture = () => {
  const [openItem, setOpenItem] = useState(0);

  const items = [
    {
      icon: './images/icons/data.svg',
      title: 'Autonomous Decisions & Actions',
      description:
        'Autonomously manage a system of models (LLMs, non-LLMs, and customer models), optimizing resources to deliver tangible outcomes with accuracy and precision',
    },
    {
      icon: './images/icons/embedding.svg',
      title: 'Automated Data Intelligence',
      description: '',
    },
    {
      icon: './images/icons/model.svg',
      title: 'Growing Library Of Specialized Models',
      description: '',
    },
    {
      icon: './images/icons/agent.svg',
      title: 'Observability, Traceability & Auditability At Every Step',
      description: '',
    },
    {
      icon: './images/icons/data.svg',
      title: 'Deploy Anywhere Securely',
      description: '',
    },
  ];

  return (
    <section className='sm:pt-32 pt-8 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-white'>
      <div className='container mx-auto'>
        <h2 className='font-space-grotesk text-[26px] sm:text-6xl font-bold sm:mb-16 mb-8 leading-tight text-center sm:text-left'>
          Articul8 platform makes the
          <br className="sm:hidden" />
          <span className='text-[#FF00C7] font-bold'>impossible possible.</span>
        </h2>
        <div className='flex flex-col lg:flex-row items-start justify-between gap-12'>
          <div className='w-full lg:w-1/2'>
            <div className='space-y-2 '>
              {items.map((item, index) => (
                <Disclosure key={index} defaultOpen={index === 0}>
                  {({ open }) => (
                    <div className={`bg-[#F6F6FF] rounded-lg overflow-hidden ${open ? 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]' : ''}`}>
                      <Disclosure.Button
                        className='flex items-center w-full text-left py-4 px-4 focus:outline-none'
                        onClick={() => setOpenItem(open ? -1 : index)}
                      >
                        <div className='mr-4 w-8 h-8'>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={32}
                            height={32}
                          />
                        </div>
                        <p className='font-space-grotesk sm:font-proxima-nova flex-grow font-[600] sm:text-[24px] sm:leading-[28px] text-[19px] sm:text-lg'>
                          {item.title}
                        </p>
                        <ToggleIcon isOpen={open} />
                      </Disclosure.Button>
                      {item.description && (
                        <Disclosure.Panel className='sm:font-proxima-nova  font-space-grotesk  px-4 pt-2 pb-4 text-[16px] sm:text-[20px] font-[400] leading-[20.42px] sm:leading-[21px] sm:text-sm text-[#000] ml-12'>
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
              <span className="font-space-grotesk text-[24px] font-[700] leading-[30px] text-[#1130FF]">Learn More</span>
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
