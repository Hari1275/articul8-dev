'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import React from 'react';

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div>
    {isOpen ? (
      <Image src='/images/icons/minus.svg' alt='Minus' width={20} height={20} />
    ) : (
      <Image src='/images/icons/plus.svg' alt='Plus' width={20} height={20} />
    )}
  </div>
);

const PlatformArchitecture = () => {
  const [openItem, setOpenItem] = useState(0);

  const items = [
    {
      icon: './images/icons/data.svg',
      title: 'Autonomous multi-agent decisions and actions',
      description:
        'Autonomously manage a system of models (LLMs, non-LLMs, and customer models), optimizing resources to deliver tangible outcomes with accuracy and precision.',
    },
    {
      icon: './images/icons/embedding.svg',
      title: 'Autonomous data ingestion and understanding',
      description: 'Automatically process and comprehend various data sources.',
    },
    {
      icon: './images/icons/model.svg',
      title: 'Growing library of Domain Specific Models (DSMs)',
      description:
        'Expand your capabilities with our ever-growing collection of specialized models.',
    },
    {
      icon: './images/icons/agent.svg',
      title: 'Transparency and traceability at every step',
      description:
        'Maintain clear visibility and accountability throughout the entire process.',
    },
    {
      icon: './images/icons/data.svg',
      title: 'Deploy anywhere securely',
      description:
        'Flexible and secure deployment options for your specific needs.',
    },
  ];

  return (
    <section className='py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 bg-white'>
      <div className='container mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
          Articul8 platform makes the
        </h2>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-6 sm:mb-8'>
          impossible possible.
        </h2>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-10'>
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
            <div className='space-y-3 sm:space-y-4'>
              {items.map((item, index) => (
                <Disclosure key={index} defaultOpen={index === 0}>
                  {({ open }) => (
                    <div className='bg-[#F6F6FF] rounded-lg overflow-hidden'>
                      <Disclosure.Button
                        className='flex items-center w-full text-left py-3 sm:py-4 px-3 sm:px-4 focus:outline-none'
                        onClick={() => setOpenItem(open ? -1 : index)}
                      >
                        <div className='mr-3 sm:mr-4 w-6 h-6 sm:w-8 sm:h-8'>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={32}
                            height={32}
                          />
                        </div>
                        <p className='flex-grow font-medium text-base sm:text-lg'>
                          {item.title}
                        </p>
                        <ToggleIcon
                          isOpen={open || (index === openItem && !open)}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='px-3 sm:px-4 pt-2 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-600'>
                        {item.description}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
            <a
              href='#'
              className='inline-block mt-6 sm:mt-8 text-blue-600 hover:underline font-semibold'
            >
              Learn More <span className='text-pink-500'>→</span>
            </a>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center items-center'>
            <div className='relative w-full max-w-md lg:max-w-full'>
              <Image
                src='/images/architecture-diagram.svg'
                alt='Articul8 Platform Architecture'
                width={0}
                height={0}
                sizes='(max-width: 1023px) 100vw, 50vw'
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitecture;
