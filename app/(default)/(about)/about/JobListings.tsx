'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import {
  fetchJobs,
  fetchDepartments,
  fetchLocations,
  getDepartmentName,
  getLocationName,
  getJobType,
} from '../../../../utils/jobsApi';

export default function JobListings() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const [jobsData, deptsData, locsData] = await Promise.all([
        fetchJobs(),
        fetchDepartments(),
        fetchLocations(),
      ]);
      setJobs(jobsData);
      setDepartments(deptsData);
      setLocations(locsData);
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
        setSelectedType(value);
        break;
    }
    setActiveDropdown(null);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment =
      !selectedDepartment || job.departmentId === selectedDepartment;
    const matchesLocation =
      !selectedLocation || job.locationId === selectedLocation;
    const matchesType = !selectedType || job.employmentType === selectedType;
    return matchesDepartment && matchesLocation && matchesType;
  });

  const displayedJobs = showAllJobs ? filteredJobs : filteredJobs.slice(0, 5);

  // Get unique departments from jobs
  const availableDepartments = React.useMemo(() => {
    const deptIds = Array.from(new Set(jobs.map((job) => job.departmentId)));
    return departments.filter((dept) => deptIds.includes(dept.id));
  }, [jobs, departments]);

  // Get unique locations from jobs
  const availableLocations = React.useMemo(() => {
    const locIds = Array.from(new Set(jobs.map((job) => job.locationId)));
    return locations.filter((loc) => locIds.includes(loc.id));
  }, [jobs, locations]);

  // Get unique employment types from jobs
  const availableTypes = React.useMemo(() => {
    return Array.from(
      new Set(jobs.map((job) => getJobType(job.employmentType)))
    );
  }, [jobs]);

  return (
    <section className='bg-white'>
      <div className='container mx-auto px-4 py-8 lg:px-8'>
        {/* Header with inline badge */}
        <div className='flex items-center gap-2 mb-12'>
          <h1 className='font-space-grotesk text-[56px] leading-[84px] font-[700] text-left'>
            Take a look at our open positions
          </h1>
          <span className='bg-[#00F4C5] px-2 py-1 rounded text-[16px] font-space-grotesk font-[700]'>
            15
          </span>
        </div>

        {/* Filters */}
        <div className='mb-12'>
          <p className='font-proxima-nova text-[20px] font-[600] leading-[24.36px] text-left mb-4'>
            Filters:
          </p>
          <div className='grid grid-cols-3 gap-0'>
            {/* Department Dropdown */}
            <div className='relative'>
              <button
                onClick={() => toggleDropdown(0)}
                className={`
                  w-full bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] text-left
                  flex items-center justify-between px-6 py-4
                  border-b border-r border-gray-200
                  rounded-l-lg
                `}
              >
                {selectedDepartment
                  ? getDepartmentName(departments, selectedDepartment)
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
                  {availableDepartments.map((dept) => (
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
                  w-full bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] text-left
                  flex items-center justify-between px-6 py-4
                  border-b border-r border-gray-200
                `}
              >
                {selectedLocation
                  ? getLocationName(locations, selectedLocation)
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
                  {availableLocations.map((loc) => (
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
                  w-full bg-[#F2F7FF] font-proxima-nova text-[20px] font-[400] leading-[24px] text-left
                  flex items-center justify-between px-6 py-4
                  border-b border-gray-200
                  rounded-r-lg
                `}
              >
                {selectedType || 'All Employment Types'}
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
                  {availableTypes.map((type) => (
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
        </div>

        {/* Job Category */}
        <div className='mb-12'>
          <h2 className='font-space-grotesk text-[40px] font-[700] leading-[40px] text-left mb-8'>
            Applied Research
          </h2>

          {/* Job Listings */}
          <div className='space-y-4'>
            {displayedJobs.map((job) => (
              <div key={job.id} className={`p-6 bg-[#F2F7FF]`}>
                <div className='flex items-start gap-6'>
                  <Image
                    src='/images/icons/about/job.svg'
                    alt='Job icon'
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className='font-proxima-nova text-[28px] font-[400] leading-[42px] text-left mb-2'>
                      {job.title}
                    </h3>
                    <p className='font-proxima-nova text-[20px] font-[400] leading-[24px] text-left text-gray-600'>
                      {`${getDepartmentName(departments, job.departmentId)} • 
                        ${getLocationName(locations, job.locationId)} • 
                        ${job.isRemote ? 'Remote' : ''} • 
                        ${getJobType(job.employmentType)}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        {filteredJobs.length > 5 && (
          <div className='flex justify-end'>
            <button
              onClick={() => setShowAllJobs(!showAllJobs)}
              className='font-space-grotesk text-[24px] font-[700] leading-[30.62px] text-[#1130FF] flex items-center gap-2 hover:underline'
            >
              {showAllJobs ? 'Show Less' : 'View More Jobs'}
              <Image
                src='/images/icons/about/more.svg'
                alt='Toggle view'
                width={24}
                height={24}
                className={`transition-transform duration-200 ${
                  showAllJobs ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
