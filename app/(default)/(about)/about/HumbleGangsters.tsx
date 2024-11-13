'use client';
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './HumbleGangsters.module.css';
import ErrorBoundary from '../../../../components/ErrorBoundary';

interface HumbleGangstersProps {
  data: {
    Content: string;
    MainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
    };
    HumbleGangsterCards: Array<{
      id: number;
      Name: string;
      Content: string;
      Image: {
        url: string;
        alternativeText: string;
      };
    }>;
    Images: Array<{
      id: number;
      url: string;
      alternativeText: string;
    }>;
  };
}

const HumbleGangsters = ({ data }: HumbleGangstersProps) => {
  // Simplified settings for first slider

  console.log('data', data?.Images);
  const firstSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Settings for second slider (image grid)
  const secondSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    
    <ErrorBoundary>
      <section className={styles.humbleGangsters}>
        <div className={styles.container}>
          <h2 className='font-space-grotesk text-[30px] leading-[45px] text-center font-[700] xl:text-[56px] xl:leading-[84px] lg:text-[50px] lg:leading-[75px] mb-8 md:mb-8'>
            {data?.MainTitle?.PrefixTitle || 'Meet some of our'} <br className='md:hidden' />{' '}
            <span className='text-[#FF00C7]'>{data?.MainTitle?.HighlightedTitle || '"humble gangsters"'}</span>
          </h2>
          <p className='px-4 font-proxima-nova text-[16px] sm:text-[20px] font-normal leading-[19.2px] sm:leading-[24px] text-black mb-8 md:mb-12 text-center'>
            {data?.Content}
          </p>

          {/* Desktop Sliders */}
          <div className={styles.desktopSliders}>
            {/* First Slider */}
            <div className={styles.sliderContainer}>
              <div className={`${styles.slider} ${styles.firstSlider}`}>
                {[...data?.HumbleGangsterCards, ...data?.HumbleGangsterCards, ...data?.HumbleGangsterCards].map((gangster, index) => (
                  <div key={`gangster-${index}`} className={styles.slide}>
                    <div className={styles.card}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={gangster.Image.url}
                          alt={gangster.Image.alternativeText || gangster.Name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 320px, (max-width: 1279px) 400px, 450px"
                          priority={index < 4}
                          className={styles.image}
                          quality={90}
                        />
                      </div>
                      <div className={styles.overlay}>
                        <p className={`${styles.description} font-proxima-nova text-left font-semibold text-[16px] leading-[24px] md:text-[16px] md:leading-[24px]`}>
                          {gangster.Content}
                        </p>
                        <div className={styles.personInfo}>
                          <h3 className={`${styles.name} font-proxima-nova text-left font-[700] text-[14.9px] leading-[18.9px] md:text-[14.9px] md:leading-[18.9px]`}>
                            {gangster.Name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Slider */}
            <div className={styles.sliderContainer}>
              <div className={`${styles.slider} ${styles.secondSlider}`}>
                {[...data?.Images, ...data?.Images, ...data?.Images].map((image, index) => (
                  <div key={`second-${index}`} className={styles.slide}>
                    <div className={styles.card}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={image.url}
                          alt={image.alternativeText || `Image ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 320px, (max-width: 1279px) 400px, 450px"
                          priority={index < 4}
                          className={styles.image}
                          quality={85}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Sliders */}
          <div className={styles.mobileSliders}>
            {/* First Mobile Slider */}
            <div className={styles.mobileSliderContainer}>
              <Slider {...firstSliderSettings}>
                {data?.HumbleGangsterCards.map((gangster, index) => (
                  <div key={index} className={styles.slideItem}>
                    <div className={styles.cardContent}>
                      <div className={styles.textContent}>
                        <p className={styles.description}>{gangster.Content}</p>
                        <h3 className={styles.name}>{gangster.Name}</h3>
                      </div>
                      <div className={styles.imageContainer}>
                        <Image
                          src={gangster.Image.url}
                          alt={gangster.Image.alternativeText || gangster.Name}
                          fill
                          className={styles.slideImage}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Second Mobile Slider */}
            <div className={styles.mobileSliderContainer}>
              <Slider {...secondSliderSettings}>
                {data?.Images.map((image, index) => (
                  <div key={index} className={styles.slideItem}>
                    <div className={styles.imageOnlyCard}>
                      <Image
                        src={image.url}
                        alt={image.alternativeText || `Image ${index + 1}`}
                        fill
                        className={styles.slideImage}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default HumbleGangsters;