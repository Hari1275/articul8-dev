'use client';
import React from 'react';
import Image from 'next/image';
import styles from './HumbleGangsters.module.css';

const gangsters = [
  {
    image: '/images/icons/about/slider/Randall Avenell.png',
    name: 'Randall Avenell',
    role: 'Security Engineer',
    description:
      'I continuously monitor systems and infrastructure for security risks, implement fixes, and ensure all system, application and infrastructure changes are documented and compliant with SOC 2. I maintain up-to-date security documentation and provide regular compliance reports to management and auditors.',
  },
  {
    image: '/images/icons/about/slider/Zachary Jordan.png',
    name: 'Zachary Jordan',
    role: 'Software Engineer',
    description:
      'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.',
  },
  {
    image: '/images/icons/about/slider/Parvathi Letha.png',
    name: 'Parvathi Letha',
    role: 'Technical Product Manager',
    description:
      'I am Technical Product Manager at Articul8 leading the development of horizontal features of the product. I will also be responsible from the product side for working with the engineering team on integrating the Articul8 product into AWS Bedrock as well as launching the product on other cloud platforms.',
  },
  {
    image: '/images/icons/about/slider/Florian Mandel.png',
    name: 'Florian Mandel',
    role: 'Technical Product Manager',
    description:
      'I am proud to be part of the Articul8 team as Technical Product Manager. Specifically, I support all things related to sourcing and ingesting the data we need to build great domain-specific models.',
  },
  {
    image: '/images/icons/about/slider/Mohanapriya Singaravelu.png',
    name: 'Mohanapriya Singaravelu',
    role: 'Software Engineer Intern',
    description:
      'I\'m a Software Engineer intern at Articul8. I\'ve been working on deploying the API documentation, Wiki on AWS and building CI/CD pipelines using Github Actions for the same.',
  },
  {
    image: '/images/icons/about/slider/Felipe Pavan.png',
    name: 'Felipe Henrique Wohnrath Pavan',
    role: 'Infrastructure Engineer',
    description:
      'I\'m an Infrastructure Engineer, maintaining and enhancing the underlying infrastructure of our product. In addition to my core responsibilities, I also contribute to various tasks related to automation, API development, and feature engineering.',
  },
  {
    image: '/images/icons/about/slider/Rob Carroll.png',
    name: 'Rob Carroll',
    role: 'Product Manager',
    description:
      'I am a Product Manager at Articul8 AI and work with our teams to drive a differentiated AI platform which helps enterprises leverage a combination of AI models and their proprietary data to solve their most challenging problems. Enterprises have a large volume of valuable data and we help them turn that data into a key differentiator in their market.',
  },
  {
    image: '/images/icons/about/slider/Renato Giorgiani.png',
    name: 'Renato Giorgiani do Nascimento',
    role: 'Head of Product Technology',
    description:
      'As the Head of Product Technology at Articul8, I lead the development and execution of our technology strategy, ensuring the seamless integration of innovative solutions into our products. I collaborate closely with cross-functional teams to drive product excellence and deliver cutting-edge technology that meets our customers\' needs.',
  },
  {
    image: '/images/icons/about/slider/Chethan Rao.png',
    name: 'Chethan Rao',
    role: 'Head of GTM',
    description:
      'I focus on GTM strategy and execution at Articul8 with a goal of helping our customers achieve their business outcomes and ROI at scale with enterprise GenAI.',
  },
];

const secondGangsters = [
  {
    image: '/images/icons/about/slider/1.png',
    alt: '1',
  },
  {
    image: '/images/icons/about/slider/2.png',
    alt: '2',
  },
  {
    image: '/images/icons/about/slider/3.png',
    alt: '3',
  },
  {
    image: '/images/icons/about/slider/4.png',
    alt: '4',
  },
  {
    image: '/images/icons/about/slider/5.png',
    alt: '5',
  },
  {
    image: '/images/icons/about/slider/6.png',
    alt: '6',
  },
  {
    image: '/images/icons/about/slider/7.png',
    alt: '7',
  },
  {
    image: '/images/icons/about/slider/8.png',
    alt: '8',
  },
  {
    image: '/images/icons/about/slider/9.png',
    alt: '9',
  },
   {
    image: '/images/icons/about/slider/10.png',
    alt: '10',
  },
   {
    image: '/images/icons/about/slider/11.png',
    alt: '11',
  },
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
   
        <h2 className='font-space-grotesk text-[30px] leading-[45px] text-center font-[700] md:text-[56px] md:leading-[84px] mb-8 md:mb-8 '>
        Meet some of our <br className="md:hidden"/> <span className='text-[#FF00C7]'>&#8220;humble gangsters&#8221;</span> 
        </h2>
        <p className='font-proxima-nova text-[16px] sm:text-[20px] font-normal leading-[19.2px] sm:leading-[24px] text-black mb-8 md:mb-12 text-center'>
          Describing ourselves as "humble gangsters" means we're a team of bold, confident innovators who take calculated risks while staying grounded and approachable. We bring a certain charm and edge to our work, tackling challenges with grit and resilience, without letting arrogance get in the way. We're savvy, resilient, and unconventional in our approach, yet we stay humble, earning respect through our actions, not attitude. We blend tenacity, resourcefulness, and integrity—qualities that make us relatable and effective, whether facing high-stakes situations or handling day-to-day challenges.
        </p>
        
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
            {[...gangsters, ...gangsters, ...gangsters, ...gangsters, ...gangsters, 
              ...gangsters, ...gangsters, ...gangsters, ...gangsters, ...gangsters,
              ...gangsters, ...gangsters, ...gangsters, ...gangsters, ...gangsters].map((gangster, index) => (
              <div key={`gangster-${index}`} className={styles.slide}>
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
                    <p className={`${styles.description} font-proxima-nova text-left font-semibold text-[16px] leading-[24px] md:text-[16px] md:leading-[24px]`}>
                      {gangster.description}
                    </p>
                    <div className={styles.personInfo}>
                      <h3 className={`${styles.name} font-proxima-nova text-left font-[700] text-[14.9px] leading-[18.9px] md:text-[14.9px] md:leading-[18.9px]`}>
                        {gangster.name}
                      </h3>
                      <p className={`${styles.role} font-proxima-nova text-left font-[400] text-[12.53px] leading-[17.9px] md:text-[12.53px] md:leading-[17.9px]`}>
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
            {[...secondGangsters, ...secondGangsters, ...secondGangsters, ...secondGangsters, ...secondGangsters,
              ...secondGangsters, ...secondGangsters, ...secondGangsters, ...secondGangsters, ...secondGangsters,
              ...secondGangsters, ...secondGangsters, ...secondGangsters, ...secondGangsters, ...secondGangsters].map((gangster, index) => (
              <div key={`second-${index}`} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={gangster.image}
                      alt={gangster.alt}
                      layout='fill'
                      objectFit='cover'
                      className={styles.image}
                    />
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
