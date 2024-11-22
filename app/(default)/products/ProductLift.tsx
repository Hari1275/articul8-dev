'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { BsFillSquareFill, BsCheckLg } from 'react-icons/bs';
import '../../../styles/globals.css';
import lineFrame1 from '../../../public/images/lineFrame1.svg';
import lineFrame2 from '../../../public/images/lineFrame2.svg';
import smallLineFrame1 from '../../../public/images/lineFrameSmall1.svg';
import smallLineFrame2 from '../../../public/images/lineFrameSmall2.svg';
import ProductModal from '../../../components/ProductPageModal';
import Modal from '../../../components/Modal';

interface Point {
  id: number;
  Title: string;
}

interface KeyFeature {
  id: number;
  Title: string;
  Points: Point[];
}

interface BasicDetail {
  id: number;
  Title: string;
  SubTitle: string;
  FreeAccessContent: string | null;
  IsFreeAccess: boolean;
}

interface ProductLiftingCard {
  id: number;
  KeyFeatureTitle: string | null;
  BasicDetail: BasicDetail;
  KeyFeatures: KeyFeature[];
}

interface ProductLiftProps {
  productLiftData: {
    MainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
      SuffixTitle: string;
    };
    ProductLiftingCards: ProductLiftingCard[];
  };
}

const Card = ({ item, onModalOpen }: { item: ProductLiftingCard; onModalOpen: (modalName: string) => void }) => {
  return (
    <div className='w-full bg-[#F2F7FF] py-6 md:py-8 pl-3 pr-3 md:pl-6 md:pr-6 flex flex-col gap-6 productLiftCard rounded-[16px] border-2 md:border-none transition-all ease-linear duration-400 md:hover:scale-y-[1.05] md:hover:-translate-y-1'>
      <div className='flex flex-col justify-center items-center md:items-start md:justify-start gap-y-5 xl:min-h-[275px] md:min-h-[290px] lg:min-h-[312px] 2xl:min-h-[260px]'>
        <h3 className='font-proxima-nova text-[28px] font-bold text-center md:text-start leading-none'>
          {item.BasicDetail.Title}
        </h3>
        <span className='font-proxima-nova text-[16px] md:text-[22px] md:pr-[14px] xl:pr-0 lg:pr-[14px] xl:text-[20px] font-[400] leading-tight text-center md:text-start md:min-h-[120px] lg:min-h-[136px] xl:min-h-max 2xl:min-h-[78px]'>
          {item.BasicDetail.SubTitle}
        </span>
        <div className='flex flex-col justify-center items-center md:items-start md:justify-start gap-3 w-full'>
          <button
            className='bg-[#0231FF] text-[#E6E9F5] py-[14px] px-6 rounded-[3px] font-proxima-nova text-[18px] md:text-[20px] font-[700]'
            onClick={() => onModalOpen(item.BasicDetail.IsFreeAccess ? 'OtherModal' : 'ProductModal')}
          >
            {item.BasicDetail.IsFreeAccess ? 'Start Articul8\'ing' : 'Contact Sales'}
          </button>
          {item.BasicDetail.FreeAccessContent && (
            <div className='font-proxima-nova text-[18px] font-[600]'>
              {item.BasicDetail.FreeAccessContent}
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-5 border-t-[1px] border-[#E6E6E6] pt-2'>
        <h3 className='font-proxima-nova text-[18px] md:text-[22px] font-[600] text-[blue] leading-tight'>
          Key Features
        </h3>
        <div className='flex flex-col gap-2'>
          {item.KeyFeatureTitle && (
            <h3 className='font-proxima-nova text-[18px] md:text-[18px] font-[600] md:pr-4 leading-5'>
              {item.KeyFeatureTitle}
            </h3>
          )}

          <div className='flex flex-col gap-y-[12px] pl-0'>
            {item.KeyFeatures.map((feature) => (
              <div
                key={feature.id}
                className='flex flex-row gap-3 font-proxima-nova text-[16px] md:text-[18px] font-[600] leading-tight'
              >
                <div className='rounded-full bg-[#E8EDFB] flex justify-center align-middle p-1' style={{ height: 'max-content' }}>
                  <BsCheckLg color='blue' className='w-3 h-3' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[16px] md:text-[18px] font-semibold leading-[20px]'>
                    {feature.Title}
                  </span>

                  {feature.Points && feature.Points.length > 0 && (
                    <div className='mt-1 flex flex-col gap-y-3'>
                      {feature.Points.map((point) => (
                        <div key={point.id} className='flex flex-col gap-4'>
                          <div className='flex flex-row text-start gap-2'>
                            <div className='flex justify-center align-middle p-1' style={{ height: 'max-content' }}>
                              <BsFillSquareFill color='blue' className='w-2 h-2' />
                            </div>
                            <span className='font-proxima-nova text-[14px] md:text-[18px] font-[400] leading-tight text-start'>
                              {point.Title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductLift = ({ productLiftData }: ProductLiftProps) => {
  const [tab, setTab] = useState(productLiftData.ProductLiftingCards[0].BasicDetail.Title);
  const [activeModal, setActiveModal] = useState('');
  const handleModalOpen = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal('');

  const [cardItem, setCardItem] = useState(productLiftData.ProductLiftingCards[0]);

  const tabFun = (tabName: string, index: number) => {
    setTab(tabName);
    setCardItem(productLiftData.ProductLiftingCards[index]);
  };

  return (
    <div className='w-full bg-[#F2F7FF] md:bg-white pt-0 md:pt-10 pb-0 md:pb-0 flex flex-col md:gap-16 gap-8 justify-center items-center bg-[background: #ECEFF2]'>
      <div className='w-full flex flex-row justify-end gap-20 md:gap-28 mb-5 md:mb-0'>
        <div className='flex flex-row justify-end gap-0'>
          <Image
            src={lineFrame1}
            alt='decorative line'
            priority
            height={60}
            className='rounded-sm object-cover w-full hidden md:flex'
          />
          <Image
            src={smallLineFrame1}
            alt='decorative line'
            priority
            height={20}
            className='rounded-sm object-cover w-full md:hidden flex'
          />
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6'>
        <h3 
          className='font-space-grotesk lg:text-[46px] md:text-3xl text-3xl font-bold text-center'
          style={{paddingTop: '0px !important'}}
        >
          {productLiftData.MainTitle.PrefixTitle}
          <span className='text-[#FA05C3]'>{productLiftData.MainTitle.HighlightedTitle}</span>
          {productLiftData.MainTitle.SuffixTitle}
        </h3>
      </div>

      <div className='border-b-2 w-[90%] block md:hidden container mx-auto px-4 sm:px-6'>
        <div className='flex flex-row justify-between'>
          {productLiftData.ProductLiftingCards.map((card, index) => (
            <span
              key={card.id}
              className='p-2 cursor-pointer font-proxima-nova font-[700] text-[16px]'
              style={{
                backgroundColor: tab === card.BasicDetail.Title ? 'white' : '',
                color: tab === card.BasicDetail.Title ? 'blue' : '',
              }}
              onClick={() => tabFun(card.BasicDetail.Title, index)}
            >
              {card.BasicDetail.Title}
            </span>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-center items-center align-middle'>
        <div className='hidden md:flex w-[81%] md:gap-y-3 flex-row flex-wrap justify-between rounded-md md:mt-3'>
          {productLiftData.ProductLiftingCards.map((item) => (
            <div key={item.id} className='lg:w-[32.9%] md:w-[49.4%] w-full flex'>
              <Card item={item} onModalOpen={handleModalOpen} />
            </div>
          ))}
        </div>

        <div className='md:hidden w-[80%] flex flex-row flex-wrap justify-between rounded-md'>
          <div className='lg:w-[32.9%] md:w-[49.4%] w-full flex'>
            <Card item={cardItem} onModalOpen={handleModalOpen} />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-row justify-start gap-20 md:gap-28 mt-5 md:mt-0'>
        <div className='flex flex-row gap-0'>
          <Image
            src={lineFrame2}
            alt='decorative line'
            priority
            height={60}
            className='rounded-sm object-cover w-full hidden md:flex'
          />
          <Image
            src={smallLineFrame2}
            alt='decorative line'
            priority
            height={60}
            className='rounded-sm object-cover w-full md:hidden flex'
          />
        </div>
      </div>

      {activeModal === 'ProductModal' && <ProductModal isOpen onClose={closeModal} />}
      {activeModal === 'OtherModal' && <Modal isOpen onClose={closeModal} />}
    </div>
  );
};

export default ProductLift;
