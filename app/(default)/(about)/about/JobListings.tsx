'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './JobListings.module.css';

interface FilterOption {
  label: string;
  options: string[];
}

const filterOptions: FilterOption[] = [
  {
    label: 'Department',
    options: [
      'Applied Research',
      'Engineering',
      'Product',
      'Design',
      'Marketing',
    ],
  },
  {
    label: 'Location',
    options: ['Brazil', 'USA', 'Remote', 'India', 'Europe'],
  },
  {
    label: 'Employment Type',
    options: ['Full time', 'Part time', 'Contract', 'Internship'],
  },
];

export default function JobListings() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({});
  const [showAllJobs, setShowAllJobs] = useState(false);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const selectOption = (filterLabel: string, option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterLabel]: option,
    }));
    setActiveDropdown(null);
  };

  const jobListings = [
    'Applied AI Researcher (Brazil)',
    'Applied AI Researcher, MLOps (Brazil)',
    'Applied AI Researcher, Multimodal (Brazil)',
    // Add more jobs if needed for "View More" functionality
  ];

  const displayedJobs = showAllJobs ? jobListings : jobListings.slice(0, 3);

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header with inline badge */}
      <div className='flex items-center gap-2 mb-8'>
        <h1 className='font-space-grotesk text-[30px] leading-[45px] lg:text-[56px] lg:leading-[84px] font-bold'>
          Take a look at our open positions
        </h1>
        <div className='bg-[#00F4C5] px-2 py-1 rounded'>
          <span className='font-space-grotesk text-[14px] lg:text-[16px] font-bold'>
            15
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className='mb-8'>
        <p className='font-proxima-nova text-[16px] lg:text-[20px] font-semibold leading-[24.36px] mb-4'>
          Filters:
        </p>
        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-0'>
          {filterOptions.map((filter, index) => (
            <div
              key={filter.label}
              ref={(el: HTMLDivElement | null) => {
                dropdownRefs.current[index] = el;
              }}
              className='relative flex-1'
            >
              <button
                onClick={() => toggleDropdown(index)}
                className={`
                  w-full bg-[#F2F7FF] font-proxima-nova text-[16px] lg:text-[20px] font-normal leading-6 
                  flex items-center justify-between px-4 py-3 border border-gray-300
                  ${index === 0 ? 'md:rounded-l-md md:border-r-0' : ''} 
                  ${index === 1 ? 'md:border-r-0' : ''}
                  ${index === 2 ? 'md:rounded-r-md' : ''}
                  ${activeDropdown === index ? 'border-[#1130FF]' : ''}
                  rounded-md md:rounded-none
                `}
              >
                {selectedFilters[filter.label] || filter.label}
                <Image
                  src='/images/icons/about/dropdown.svg'
                  alt='Toggle dropdown'
                  width={12}
                  height={12}
                  className={`ml-2 transition-transform duration-200 ${
                    activeDropdown === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === index && (
                <div className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg'>
                  {filter.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectOption(filter.label, option)}
                      className='w-full px-4 py-2 text-left hover:bg-[#F2F7FF] font-proxima-nova text-[16px] lg:text-[20px]'
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Job Category */}
      <div className='mb-8'>
        <h2 className='font-space-grotesk text-[28px] lg:text-[40px] font-bold leading-[40px] mb-8'>
          Applied Research
        </h2>

        {/* Job Listings */}
        <div className='space-y-4'>
          {displayedJobs.map((title) => (
            <div
              key={title}
              className='p-6 bg-[#F2F7FF] rounded-lg shadow hover:shadow-md transition-shadow'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                  🤖
                </div>
                <div>
                  <h3 className='font-proxima-nova text-[20px] lg:text-[28px] font-normal leading-[42px]'>
                    {title}
                  </h3>
                  <p className='font-proxima-nova text-[16px] lg:text-[20px] font-normal leading-6 text-gray-600'>
                    Applied Research • Brazil • Remote • Full time
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className='flex justify-end'>
        <button
          onClick={() => setShowAllJobs(!showAllJobs)}
          className='font-space-grotesk text-[18px] lg:text-[24px] font-bold leading-[30.62px] text-[#1130FF] p-0 flex items-center gap-2 hover:underline'
        >
          {showAllJobs ? 'Show Less' : 'View More Jobs'}
          <Image
            src='/images/icons/about/more.svg'
            alt='Toggle view'
            width={18}
            height={18}
            className={`ml-2 transition-transform duration-200 ${
              showAllJobs ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
}
