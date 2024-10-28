'use client';
import React from 'react';
import Image from 'next/image';
import styles from './HumbleGangsters.module.css';

const gangsters = [
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Zachary Jordan',
    role: 'Project Manager',
    description:
      'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Emily Chen',
    role: 'UX Designer',
    description:
      'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.​',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Michael Rodriguez',
    role: 'Full Stack Developer',
    description: 'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.​',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'Sarah Kim',
    role: 'Marketing Specialist',
    description: 'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.​',
  },
  {
    image: '/images/icons/about/gangster1.png',
    name: 'David Nguyen',
    role: 'Data Scientist',
    description: 'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.​',
  },
  // Add more gangsters as needed
];

export default function HumbleGangsters() {
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const secondSliderRef = React.useRef<HTMLDivElement>(null);

  // Only apply touch handling for mobile devices
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile || !isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className={styles.humbleGangsters}>
      <div className={`${styles.container} container mx-auto px-4 sm:px-6`}>
   
        <h2 className='font-space-grotesk text-[30px] leading-[45px] text-center font-[700] md:text-[56px] md:leading-[84px] mb-8 md:mb-16'>
          Some of our <br className="md:hidden"/> <span className='text-[#FF00C7]'>humble</span> gangsters
        </h2>
        
        {/* First Slider */}
        <div 
          className={styles.sliderContainer}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.slider}>
            {[...gangsters, ...gangsters].map((gangster, index) => (
              <div key={`first-${index}`} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={gangster.image}
                      alt={gangster.name}
                      layout='fill'
                      objectFit='cover'
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.overlay}>
                 
           <p className={`${styles.description} font-proxima-nova text-left font-semibold text-[16px] leading-[24px] md:text-[24px] md:leading-[36px]`}>
       {gangster.description}
       </p>

                    <div className={styles.personInfo}>
                   
<h3 className={`${styles.name} font-proxima-nova text-left font-[700] text-[14.9px] leading-[18.9px] md:text-[20px] md:leading-[24.36px]`}>
  {gangster.name}
</h3>


<p className={`${styles.role} font-proxima-nova text-left font-[400] text-[12.53px] leading-[17.9px] md:text-[14px] md:leading-[20px]`}>
  {gangster.role}
</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Slider */}
        <div 
          className={`${styles.sliderContainer} ${styles.secondSlider}`}
          ref={secondSliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className={`${styles.slider} ${styles.sliderSlow}`}>
            {[...gangsters, ...gangsters].map((gangster, index) => (
              <div key={`second-${index}`} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={gangster.image}
                      alt={gangster.name}
                      layout='fill'
                      objectFit='cover'
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.overlay}>
                 
           <p className={`${styles.description} font-proxima-nova text-left font-semibold text-[16px] leading-[24px] md:text-[24px] md:leading-[36px]`}>
       {gangster.description}
       </p>

                    <div className={styles.personInfo}>
                   
<h3 className={`${styles.name} font-proxima-nova text-left font-[700] text-[14.9px] leading-[18.9px] md:text-[20px] md:leading-[24.36px]`}>
  {gangster.name}
</h3>


<p className={`${styles.role} font-proxima-nova text-left font-[400] text-[12.53px] leading-[17.9px] md:text-[14px] md:leading-[20px]`}>
  {gangster.role}
</p>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
