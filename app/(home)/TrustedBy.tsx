'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const companies = [
  'aws',
  'NIQ',
  'franklin-templeton',
  'intel',
  'bcg',
  'ctc',
  'uptycs',
  'aiaa',
];

const TrustedBy = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Increased speed for smoother movement
    slidesToShow: companies.length, // Show all companies at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous movement
    arrows: false,
    cssEase: 'linear', // Use linear easing for smooth scrolling
    pauseOnHover: false, // Prevent pausing on hover
  };

  return (
    <section className='bg-white pt-4 pb-2'>
      <div className='container mx-auto px-4 sm:px-6'>
        <h2 className='font-proxima-nova font-[600] text-[14px] leading-[14px] sm:text-[24px] sm:leading-[29.23px] text-[#737373] sm:text-[#000000] text-center mb-6 sm:mb-8'>
          Trusted by leading global enterprises
        </h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className='flex justify-center items-center px-2'>
              <Image
                src={`/images/logos/${company}-logo.svg`}
                alt={company}
                width={100}
                height={40}
                objectFit='contain'
                className='h-6 sm:h-8 w-auto'
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustedBy;
