'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import {
  fetchAllData,
  getDepartmentName,
  getLocationName,
  getJobType,
  getUniqueEmploymentTypes,
  formatLocationDisplay,
} from '../../../../utils/jobsApi';

export default function JobListings() {
  const [data, setData] = useState<{
    jobs: any[];
    departments: any[];
    locations: any[];
  }>({
    jobs: [],
    departments: [],
    locations: [],
  });
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchAllData();
        setData(result);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const selectOption = (filterType: string, value: string) => {
    switch (filterType) {
      case 'Department':
        setSelectedDepartment(value);
        break;
      case 'Location':
        setSelectedLocation(value);
        break;
      case 'Type':
        setSelectedType(
          value === 'Full time'
            ? 'FullTime'
            : value === 'Part time'
            ? 'PartTime'
            : value
        );
        break;
    }
    setActiveDropdown(null);
  };

  const filteredJobs = data.jobs.filter((job) => {
    const matchesDepartment =
      !selectedDepartment || job.departmentId === selectedDepartment;
    const matchesLocation =
      !selectedLocation || job.locationId === selectedLocation;
    const matchesType =
      !selectedType ||
      (selectedType === 'FullTime' && job.employmentType === 'FullTime') ||
      (selectedType === 'PartTime' && job.employmentType === 'PartTime');
    return matchesDepartment && matchesLocation && matchesType;
  });

  const displayedJobs = showAllJobs ? filteredJobs : filteredJobs.slice(0, 5);

  // Get total number of jobs
  const totalJobs = data.jobs.length;

  // Get unique employment types from active jobs
  const availableEmploymentTypes = React.useMemo(
    () => getUniqueEmploymentTypes(data.jobs),
    [data.jobs]
  );

  // Add function to handle job card click
  const handleJobClick = (jobPostingIds: string[]) => {
    if (jobPostingIds && jobPostingIds.length > 0) {
      // Open the first job posting ID in a new tab
      window.open(
        `https://jobs.ashbyhq.com/articul8/${jobPostingIds[0]}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  if (isLoading) {
    return (
      <div className='min-h-[600px] flex items-center justify-center'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='w-16 h-16 border-4 border-[#1130FF] border-t-transparent rounded-full'
        />
      </div>
    );
  }

  return (
    <section className='bg-white'>
      <div className='container mx-auto px-4 py-8 lg:px-6'>
        {/* Header with inline badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8 lg:mb-12'
        >
          <div className='sm:flex sm:items-center sm:gap-2'>
            <h1 className='font-space-grotesk !text-[30px] !leading-[45px] sm:!text-[40px] sm:!leading-[60px] lg:!text-[56px] lg:!leading-[84px] font-[700] text-left'>
              Take a look at our open positions{' '}
              <span className='inline-block sm:hidden bg-[#00F4C5] px-2  rounded text-[14px] font-space-grotesk font-[700]'>
                {totalJobs}
              </span>
            </h1>
            <span className='hidden sm:inline-block bg-[#00F4C5] px-2 py-1 rounded sm:text-[15px] lg:text-[40px] font-space-grotesk font-[700] xl:-mt-4'>
              {totalJobs}
            </span>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='mb-8 lg:mb-12'
        >
          <p className='font-proxima-nova text-[16px] sm:text-[18px] lg:text-[20px] font-[600] leading-[24.36px] text-left mb-4'>
            Filters:
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0'>
            {/* Department Dropdown */}
            <div className='relative'>
              <button
                onClick={() => toggleDropdown(0)}
                className={`
                  w-full bg-[#F2F7FF] font-proxima-nova text-[16px] sm:text-[18px] lg:text-[20px] font-[400] leading-[24px] text-left
                  flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4
                  border-b border-r border-gray-200
                  rounded-lg sm:rounded-none sm:rounded-l-lg
                `}
              >
                {selectedDepartment
                  ? getDepartmentName(data.departments, selectedDepartment)
                  : 'All Departments'}
                <Image
                  src='/images/icons/about/dropdown.svg'
                  alt='Toggle dropdown'
                  width={24}
                  height={24}
                  className={`transition-transform duration-200 ${
                    activeDropdown === 0 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 0 && (
                <div className='absolute z-10 w-full mt-1 bg-white border-b border-r border-gray-200 shadow-lg'>
                  <button
                    onClick={() => selectOption('Department', '')}
                    className='w-full px-6 py-4 text-left hover:bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] border-b border-gray-200'
                  >
                    All Departments
                  </button>
                  {data.departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => selectOption('Department', dept.id)}
                      className='w-full px-6 py-4 text-left hover:bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] border-b border-gray-200 last:border-b-0'
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Dropdown */}
            <div className='relative'>
              <button
                onClick={() => toggleDropdown(1)}
                className={`
                  w-full bg-[#F2F7FF] font-proxima-nova text-[16px] sm:text-[18px] lg:text-[20px] font-[400] leading-[24px] text-left
                  flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4
                  border-b border-r border-gray-200
                  rounded-lg sm:rounded-none
                `}
              >
                {selectedLocation
                  ? getLocationName(data.locations, selectedLocation)
                  : 'All Locations'}
                <Image
                  src='/images/icons/about/dropdown.svg'
                  alt='Toggle dropdown'
                  width={24}
                  height={24}
                  className={`transition-transform duration-200 ${
                    activeDropdown === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 1 && (
                <div className='absolute z-10 w-full mt-1 bg-white border-b border-r border-gray-200 shadow-lg'>
                  <button
                    onClick={() => selectOption('Location', '')}
                    className='w-full px-6 py-4 text-left hover:bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] border-b border-gray-200'
                  >
                    All Locations
                  </button>
                  {data.locations
                    .filter((loc) => !loc.isArchived)
                    .map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => selectOption('Location', loc.id)}
                        className='w-full px-6 py-4 text-left hover:bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] border-b border-gray-200 last:border-b-0'
                      >
                        {loc.name}
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* Employment Type Dropdown */}
            <div className='relative'>
              <button
                onClick={() => toggleDropdown(2)}
                className={`
                  w-full bg-[#F2F7FF] font-proxima-nova text-[16px] sm:text-[18px] lg:text-[20px] font-[400] leading-[24px] text-left
                  flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4
                  border-b border-gray-200
                  rounded-lg sm:rounded-none sm:rounded-r-lg
                `}
              >
                {selectedType
                  ? selectedType === 'FullTime'
                    ? 'Full time'
                    : selectedType === 'PartTime'
                    ? 'Part time'
                    : selectedType
                  : 'All Employment Types'}
                <Image
                  src='/images/icons/about/dropdown.svg'
                  alt='Toggle dropdown'
                  width={24}
                  height={24}
                  className={`transition-transform duration-200 ${
                    activeDropdown === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 2 && (
                <div className='absolute z-10 w-full mt-1 bg-white border-b border-r border-gray-200 shadow-lg'>
                  <button
                    onClick={() => selectOption('Type', '')}
                    className='w-full px-6 py-4 text-left hover:bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] border-b border-gray-200'
                  >
                    All Employment Types
                  </button>
                  {availableEmploymentTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => selectOption('Type', type)}
                      className='w-full px-6 py-4 text-left hover:bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] border-b border-gray-200 last:border-b-0'
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Job Category */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='show'
          className='mb-8 lg:mb-12'
        >
          <motion.p
            variants={itemVariants}
            className='font-space-grotesk !text-[30px] sm:!text-[35px] lg:!text-[40px] font-[700] !leading-[35px] sm:!leading-[40px] lg:!leading-[40px] text-left mb-6 lg:mb-8'
          >
            {selectedDepartment
              ? getDepartmentName(data.departments, selectedDepartment)
              : 'All Departments'}
          </motion.p>

          {/* Job Listings */}
          <div className='space-y-4'>
            {displayedJobs.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className={`p-4 sm:p-6 bg-[#F2F7FF] cursor-pointer rounded-lg`}
                onClick={() => handleJobClick(job.jobPostingIds)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleJobClick(job.jobPostingIds);
                  }
                }}
              >
                <div className='flex items-start gap-4 sm:gap-6'>
                  <Image
                    src='/images/icons/about/job.svg'
                    alt='Job icon'
                    width={40}
                    height={40}
                    className='w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[48px] lg:h-[48px]'
                  />
                  <div>
                    <h3 className='font-proxima-nova text-[20px] sm:text-[24px] lg:text-[28px] font-[400] leading-[30px] sm:leading-[36px] lg:leading-[42px] text-left mb-2'>
                      {job.title}
                    </h3>

                    <p className='font-proxima-nova text-[16px] sm:text-[18px] lg:text-[20px] font-[400] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-left'>
                      <span className='text-black'>• </span>
                      {[
                        <span key='department' className='text-black'>
                          {getDepartmentName(
                            data.departments,
                            job.departmentId
                          )}
                        </span>,
                        <span
                          key='location'
                          className='inline-flex items-center gap-1'
                        >
                          <span className='font-[300] text-[#1130FF]'>
                            {
                              formatLocationDisplay(
                                getLocationName(data.locations, job.locationId)
                              ).country
                            }
                          </span>
                          {formatLocationDisplay(
                            getLocationName(data.locations, job.locationId)
                          ).isRemote && (
                            <>
                              <span className='text-black font-bold'>.</span>
                              <span className='text-black font-bold'>
                                Remote
                              </span>
                            </>
                          )}
                        </span>,
                        <span
                          key='jobType'
                          className='font-[700] text-[#1130FF]'
                        >
                          {getJobType(job.employmentType)}
                        </span>,
                      ]
                        .filter(Boolean)
                        .map((item, index, array) => (
                          <React.Fragment key={index}>
                            {item}
                            {index < array.length - 1 ? (
                              <span className='text-gray-600'> • </span>
                            ) : (
                              ''
                            )}
                          </React.Fragment>
                        ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        {filteredJobs.length > 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='flex justify-end'
          >
            <motion.button
              onClick={() => setShowAllJobs(!showAllJobs)}
              className='font-space-grotesk text-[18px] sm:text-[20px] lg:text-[24px] font-[700] leading-[24px] sm:leading-[28px] lg:leading-[30.62px] text-[#1130FF] flex items-center gap-2'
            >
              {showAllJobs ? 'Show Less' : 'View More Jobs'}
              <Image
                src='/images/icons/about/more.svg'
                alt='Toggle view'
                width={20}
                height={20}
                className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] transition-transform duration-200 ${
                  showAllJobs ? 'rotate-180' : ''
                }`}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
