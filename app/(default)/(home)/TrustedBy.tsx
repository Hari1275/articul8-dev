'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ErrorBoundary from '../../../components/ErrorBoundary';

interface TrustedByProps {
  data: {
    GlobalEnterprisesSection: {
      Title: string;
      Enterprises: Array<{
        url: string;
        alternativeText: string;
        width: number;
        height: number;
      }>;
    };
  };
}

const TrustedBy = ({ data }: TrustedByProps) => {
  const enterprises = data?.GlobalEnterprisesSection?.Enterprises || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: enterprises.length || 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: false,
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
    <ErrorBoundary>
      <section className='bg-white pt-4 pb-2'>
        <div className='container mx-auto px-4 sm:px-6'>
          <h2 className='font-proxima-nova font-[600] text-[14px] leading-[14px] sm:text-[24px] sm:leading-[29.23px] text-[#737373] sm:text-[#000000] text-center mb-6 sm:mb-8'>
            {data?.GlobalEnterprisesSection?.Title || 'Trusted by leading global enterprises'}
          </h2>
          <div className="trusted-by-slider">
            <Slider {...settings}>
              {enterprises.map((enterprise, index) => (
                <div key={index} className='flex justify-center items-center px-2'>
                  <Image
                    src={enterprise.url}
                    alt={enterprise.alternativeText || `Enterprise ${index + 1}`}
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
    </ErrorBoundary>
  );
};

export default TrustedBy;
