'use client';
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import React from 'react';
import {
  BsFillCheckCircleFill,
  BsFillSquareFill,
  BsChevronDown,
  BsChevronUp,
} from 'react-icons/bs';
import ProductModal from '../../../components/ProductPageModal';
import Modal from '../../../components/Modal';

interface SubPointItem {
  id: number;
  Title: string;
  A8Essential: boolean;
  A8Enterprise: boolean;
  A8Expert: boolean;
}

interface SubPoint {
  id: number;
  Title: string | null;
  A8Essential: boolean;
  A8Enterprise: boolean;
  A8Expert: boolean;
  SubPointItems: SubPointItem[];
}

interface Point {
  id: number;
  Title: string;
  DarkColor: string | null;
  LightColor: string | null;
  BorderColor: string | null;
  SubPoints: SubPoint[];
}

interface PlanDetails {
  id: number;
  Title: string;
  SubTitle: string;
  FreeAccessContent: string | null;
  IsFreeAccess: boolean;
  CtaButton: {
    id: number;
    Title: string;
    Herf: string | null;
  };
}

interface ProductPlansProps {
  productPlansData: {
    A8Essential: PlanDetails;
    A8Enterprise: PlanDetails;
    A8Expert: PlanDetails;
    Points: Point[];
  };
}

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div>{isOpen ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}</div>
);

const HeavyItems = ({ productPlansData }: ProductPlansProps) => {
  const [openItem, setOpenItem] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const getDefaultColors = (index: number) => {
    const colorSets = [
      { 
        dark: '#D7FFF5',  // Smart Interfaces
        light: '#EFFFFB', 
        border: '#78ebcec9' 
      },
      { 
        dark: '#FFEED9',  // Autonomous Decisions & Actions
        light: '#FFF5E9', 
        border: 'rgb(235 174 98 / 89%)' 
      },
      { 
        dark: '#EBECFF',  // Automated Data Intelligence
        light: '#F5F5FF', 
        border: '#abaff4e6' 
      },
      { 
        dark: '#FFE9F8',  // Flexible Infrastructure Orchestration
        light: '#FFF2FB', 
        border: '' 
      },
      { 
        dark: '#EBEAEA',  // Deployment and User Access
        light: '#F7F7F7', 
        border: '#D4D4D4' 
      }
    ];
    return colorSets[index] || colorSets[0];
  };

  return (
    <div className='pt-12 lg:mt-0 w-full bg-white pb-[60px] flex flex-col justify-center items-center relative'>
      <div className='container mx-auto px-4 sm:px-6 flex flex-row justify-center items-center sticky top-[40px] md:top-[61px] lg:top-[60px] z-[10] bg-white'>
        <div className='w-[60%] lg:w-[42%] flex items-center'></div>

        <div className='w-[40%] lg:w-[58%] flex flex-row justify-between'>
          {/* A8 Essential */}
          <div className='w-1/3 lg:w-[33%] lg:items-start flex items-end lg:bg-[#F2F7FF] lg:rounded-t-[12px]'>
            <div className='flex justify-center items-center align-middle h-[185px] w-full lg:hidden text-center border-l-[1px] border-r-[1px] lg:border-r-[0px] border-t-[1px] pb-1 pt-3'>
              <div className='h-full flex flex-col items-center whitespace-nowrap text-transform font-proxima-nova font-[700] text-[20px] lg:text-[28px]' style={{ height: 'max-content' }}>
                {productPlansData.A8Essential.Title}
              </div>
            </div>

            <div className='hidden lg:flex flex-col justify-center items-center lg:px-4 lg:py-5 py-4 gap-2'>
              <h3 className='font-proxima-nova font-[700] text-[20px] lg:text-[28px] lg:text-center lg:min-h-[70px] xl:min-h-max lg:leading-8'>
                {productPlansData.A8Essential.Title}
              </h3>
              <span className='font-proxima-nova font-[400] text-[14px] lg:text-[18px] text-center mb-6 lg:mb-3 2xl:text-[18px] leading-tight lg:min-h-[140px] xl:min-h-max 2xl:min-h-max'>
                {productPlansData.A8Essential.SubTitle}
              </span>

              <button
                className='bg-[#0231FF] text-white py-[10px] px-4 rounded-[4px] font-proxima-nova font-[700] text-[12px] lg:text-[18px]'
                onClick={() => setIsModalOpen(true)}
              >
                {productPlansData.A8Essential.CtaButton.Title}
              </button>

              {productPlansData.A8Essential.FreeAccessContent && (
                <div className='text-center font-proxima-nova font-[700] text-[12px] lg:text-[18px]'>
                  {productPlansData.A8Essential.FreeAccessContent}
                </div>
              )}
            </div>
          </div>

          {/* A8 Enterprise */}
          <div className='w-1/3 lg:w-[33%] flex items-end lg:items-start lg:bg-[#F2F7FF] lg:rounded-t-[12px]'>
            <div className='flex justify-center items-center align-middle h-[185px] w-full lg:hidden text-center lg:border-l-[1px] border-l-[0px] lg:border-r-[0px] border-r-[1px] border-t-[1px] pb-3 pt-3'>
              <div className='h-full flex flex-col items-center whitespace-nowrap text-transform font-proxima-nova font-[700] text-[20px] lg:text-[28px] pt-2' style={{ height: 'max-content' }}>
                {productPlansData.A8Enterprise.Title}
              </div>
            </div>

            <div className='hidden lg:flex flex-col justify-center items-center lg:px-4 lg:py-5 py-4 gap-2'>
              <h3 className='font-proxima-nova font-[700] text-[20px] lg:text-[28px] lg:text-center lg:min-h-[70px] xl:min-h-max lg:leading-8'>
                {productPlansData.A8Enterprise.Title}
              </h3>
              <span className='font-proxima-nova font-[400] text-[14px] lg:mb-3 text-center mb-6 lg:text-[18px] 2xl:text-[18px] leading-tight lg:min-h-[140px] xl:min-h-max 2xl:min-h-max'>
                {productPlansData.A8Enterprise.SubTitle}
              </span>

              <button
                className='bg-[#0231FF] text-white py-[10px] px-4 rounded-[4px] font-proxima-nova font-[700] text-[12px] lg:text-[18px]'
                onClick={() => setIsProductModalOpen(true)}
              >
                {productPlansData.A8Enterprise.CtaButton.Title}
              </button>

              {productPlansData.A8Enterprise.FreeAccessContent && (
                <div className='text-center font-proxima-nova font-[700] text-[12px] lg:text-[18px]'>
                  {productPlansData.A8Enterprise.FreeAccessContent}
                </div>
              )}
            </div>
          </div>

          {/* A8 Expert */}
          <div className='w-1/3 lg:w-[33%] flex items-end lg:items-start lg:bg-[#F2F7FF] lg:rounded-t-[12px]'>
            <div className='flex justify-center items-center align-middle h-[185px] w-full lg:hidden text-center border-r-[1px] lg:border-l-[1px] border-l-[0px] border-t-[1px] pt-9 pb-0'>
              <div className='h-full flex flex-col items-center whitespace-nowrap text-transform font-proxima-nova font-[700] text-[20px] lg:text-[28px]' style={{ height: 'max-content' }}>
                {productPlansData.A8Expert.Title}
              </div>
            </div>

            <div className='hidden lg:flex flex-col justify-center items-center lg:px-4 lg:py-5 py-4 gap-2'>
              <h3 className='hidden md:block font-proxima-nova font-[700] text-[20px] lg:text-[28px] lg:text-center lg:min-h-[70px] xl:min-h-max lg:leading-8'>
                <span className='md:block xl:hidden'>
                  {productPlansData.A8Expert.Title.split(' ')[0]}
                </span>
                <span className='md:block xl:hidden'>
                  {productPlansData.A8Expert.Title.split(' ').slice(1).join(' ')}
                </span>
                <span className='hidden xl:block'>
                  {productPlansData.A8Expert.Title}
                </span>
              </h3>
              <span className='font-proxima-nova lg:mb-3 2xl:mb-3 font-[400] text-[14px] text-center mb-6 lg:text-[18px] 2xl:text-[18px] leading-tight lg:min-h-[140px] xl:min-h-max 2xl:min-h-max'>
                {productPlansData.A8Expert.SubTitle}
              </span>

              <button
                className='bg-[#0231FF] text-white py-[10px] px-4 rounded-[4px] font-proxima-nova font-[700] text-[12px] lg:text-[18px]'
                onClick={() => setIsProductModalOpen(true)}
              >
                {productPlansData.A8Expert.CtaButton.Title}
              </button>

              {productPlansData.A8Expert.FreeAccessContent && (
                <div className='text-center font-proxima-nova font-[700] text-[12px] lg:text-[18px]'>
                  {productPlansData.A8Expert.FreeAccessContent}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 z-0'>
        {productPlansData.Points.map((item, index) => (
          <Disclosure
            key={index}
            defaultOpen={index <= 4}
          >
            {({ open }) => (
              <div
                className='rounded-sm overflow-hidden'
                style={{ 
                  backgroundColor: item.DarkColor || getDefaultColors(index).dark 
                }}
              >
                <Disclosure.Button
                  className='flex items-center w-full text-left py-3 sm:py-4 px-3 sm:px-4 focus:outline-none'
                  onClick={() => setOpenItem(open ? -1 : index)}
                >
                  <p className='font-proxima-nova font-[700] lg:text-[20px] flex-grow text-[18px]'>
                    {item.Title}
                  </p>
                  <ToggleIcon isOpen={open || (index === openItem && !open)} />
                </Disclosure.Button>

                <Disclosure.Panel className='pt-1 text-xs sm:text-sm'>
                  <div
                    className='w-full'
                    style={{ 
                      backgroundColor: item.LightColor || getDefaultColors(index).light,
                    }}
                  >
                    {item.SubPoints.map((subPoint) => (
                      <div key={subPoint.id} className='flex flex-col'>
                        {subPoint.Title && (
                          <div className='flex flex-row justify-center'>
                            <div 
                              className='w-[60%] lg:w-[42%] border-b-[1px] flex items-center'
                              style={{ 
                                borderColor: item.BorderColor || getDefaultColors(index).border 
                              }}
                            >
                              <div className='font-proxima-nova font-[700] w-full text-[14px] lg:text-[18px] lg:leading-5 py-3 pl-2 lg:pl-5 items-center text-start'>
                                {subPoint.Title}
                              </div>
                            </div>

                            <div className='w-[40%] lg:w-[58%] flex flex-row justify-between'>
                              {/* A8Essential column */}
                              <div 
                                className='w-1/3 border-l-[1px] border-r-[1px] border-b-[1px]'
                                style={{ 
                                  borderColor: item.BorderColor || getDefaultColors(index).border 
                                }}
                              >
                                <div className='w-full flex justify-center items-center align-middle py-3'>
                                  {subPoint.A8Essential && (
                                    <BsFillCheckCircleFill color='blue' className='w-[20px] h-[20px]' />
                                  )}
                                </div>
                              </div>

                              {/* A8Enterprise column */}
                              <div 
                                className='w-1/3 border-r-[1px] lg:border-r-[0px] border-b-[1px]'
                                style={{ 
                                  borderColor: item.BorderColor || getDefaultColors(index).border 
                                }}
                              >
                                <div className='w-full flex justify-center items-center align-middle py-3'>
                                  {subPoint.A8Enterprise && (
                                    <BsFillCheckCircleFill color='blue' className='w-[20px] h-[20px]' />
                                  )}
                                </div>
                              </div>

                              {/* A8Expert column */}
                              <div 
                                className='w-1/3 lg:border-l-[1px] border-l-[0px] border-b-[1px]'
                                style={{ 
                                  borderColor: item.BorderColor || getDefaultColors(index).border 
                                }}
                              >
                                <div className='w-full flex justify-center items-center align-middle py-3'>
                                  {subPoint.A8Expert && (
                                    <BsFillCheckCircleFill color='blue' className='w-[20px] h-[20px]' />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* SubPointItems */}
                        {subPoint.SubPointItems.map((subItem) => (
                          <div key={subItem.id} className='flex flex-row justify-center'>
                            <div className='w-[60%] lg:w-[42%] border-b-[1px] flex items-center'
                                 style={{ borderColor: item.BorderColor || getDefaultColors(index).border }}>
                              <div className='w-full text-[16px] py-3 pl-2 lg:pl-7 items-center'>
                                <div className='flex flex-row gap-1 justify-start align-middle items-center lg:align-top lg:items-top lg:justify-start'>
                                  <div className='flex justify-center align-middle lg:justify-start lg:align-top p-1'
                                       style={{ height: 'max-content' }}>
                                    <BsFillSquareFill color='blue' className='w-[6px] h-[6px]' />
                                  </div>
                                  <span className='font-proxima-nova font-[400] lg:text-[18px] 2xl:text-[17px] text-[14px] leading-4 mr-1 lg:leading-5'>
                                    {subItem.Title}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='w-[40%] lg:w-[58%] flex flex-row justify-between'>
                              <div className='w-1/3 border-l-[1px] border-r-[1px] border-b-[1px]'
                                   style={{ borderColor: item.BorderColor || getDefaultColors(index).border }}>
                                <div className='w-full flex justify-center items-center align-middle py-3'>
                                  {subItem.A8Essential && (
                                    <BsFillCheckCircleFill color='blue' className='w-[20px] h-[20px]' />
                                  )}
                                </div>
                              </div>
                              <div className='w-1/3 border-r-[1px] lg:border-r-[0px] border-b-[1px]'
                                   style={{ borderColor: item.BorderColor || getDefaultColors(index).border }}>
                                <div className='w-full flex justify-center items-center align-middle py-3'>
                                  {subItem.A8Enterprise && (
                                    <BsFillCheckCircleFill color='blue' className='w-[20px] h-[20px]' />
                                  )}
                                </div>
                              </div>
                              <div className='w-1/3 lg:border-l-[1px] border-l-[0px] border-b-[1px]'
                                   style={{ borderColor: item.BorderColor || getDefaultColors(index).border }}>
                                <div className='w-full flex justify-center items-center align-middle py-3'>
                                  {subItem.A8Expert && (
                                    <BsFillCheckCircleFill color='blue' className='w-[20px] h-[20px]' />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ProductModal isOpen={isProductModalOpen} onClose={() => setIsProductModalOpen(false)} />
    </div>
  );
};

export default HeavyItems;
