'use client';

import Image from 'next/image';
// import { useState, useEffect } from 'react';
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
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkIfMobile = () => {
  //     setIsMobile(window.innerWidth <= 767);
  //   };

  //   checkIfMobile();
  //   window.addEventListener('resize', checkIfMobile);

  //   return () => window.removeEventListener('resize', checkIfMobile);
  // }, []);

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
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <section className='bg-white pt-4 pb-2'>
      <div className='container mx-auto px-4 sm:px-6'>
        <h3 className='font-proxima-nova font-[600] text-[14px] leading-[14px] sm:text-[24px] sm:leading-[29.23px] text-[#737373] sm:text-[#000000] text-center mb-6 sm:mb-8 lg:text-[24px]'>
          Trusted by leading global enterprises
        </h3>
        <div className="trusted-by-slider">
          <Slider {...settings}>
            {companies.map((company, index) => (
              <div key={index} className='flex justify-center items-center px-2'>
                <Image
                  src={`/images/logos/${company}-logo.png`}
                  alt={company}
                  width={200}
                  height={80}
                  quality={100}
                  priority={index < 3}
                  className='h-6 sm:h-8 w-auto'
                  style={{
                    objectFit: 'contain',
                    maxWidth: '100%',
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
