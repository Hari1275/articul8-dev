'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const UnlockSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const container = containerRef.current;

    if (section && cards && container) {
      const cardElements = cards.querySelectorAll('.card');

      // Reset any previous animations
      gsap.set(cardElements, { clearProps: 'all' });

      // Initial state: all cards stacked
      gsap.set(cardElements, {
        x: 0,
        opacity: 0.5,
        scale: 0.8,
      });

      if (isMobile) {
        // Mobile animation
        gsap.to(cardElements, {
          x: (index) => `${index * 100}%`,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });
      } else {
        // Desktop animation
        gsap.to(cardElements, {
          x: (index) => `${(index - 1.5) * 110}%`,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
        });

        // Desktop hover effects
        cardElements.forEach((card) => {
          const content = card.querySelector('.card-content');
          const image = card.querySelector('.card-image');
          const hoverTl = gsap.timeline({ paused: true });

          hoverTl
            .to(card, {
              y: -20,
              scale: 1.05,
              rotationY: 5,
              boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
              backgroundColor: '#f0f8ff',
              duration: 0.3,
            })
            .to(content, { y: -10, opacity: 0, duration: 0.2 }, 0)
            .to(image, { scale: 1.2, rotation: 10, duration: 0.3 }, 0)
            .to(content, { y: 0, opacity: 1, duration: 0.2 }, 0.2);

          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());

          // Mouse move effect for 3D rotation
          card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            gsap.to(card, {
              rotationY: ((x - centerX) / centerX) * 10,
              rotationX: -((y - centerY) / centerY) * 10,
              duration: 0.5,
              ease: 'power2.out',
            });

            gsap.to(image, {
              rotationY: ((x - centerX) / centerX) * 15,
              rotationX: -((y - centerY) / centerY) * 15,
              duration: 0.5,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              rotationY: 0,
              rotationX: 0,
              y: 0,
              scale: 1,
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              backgroundColor: 'white',
              duration: 0.3,
            });
            gsap.to(image, {
              rotationY: 0,
              rotationX: 0,
              scale: 1,
              rotation: 0,
              duration: 0.3,
            });
          });
        });
      }
    }
  }, [isMobile]);

  return (
    <section ref={sectionRef} className='py-20 bg-gray-100 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-12 text-center'>
          Unlock <span className='text-blue-600'>[</span>
          <span className='text-pink-500'>New revenue</span>
          <span className='text-blue-600'>]</span> with
          <br />
          your data.
        </h2>

        <div ref={containerRef} className='overflow-hidden'>
          <div ref={cardsRef} className='relative h-[400px] md:h-[600px]'>
            {[
              'Multiple chains, one wallet. No more switching.',
              'Seamlessly access the largest NFT marketplaces.',
              'Showcase your NFT collection.',
              'Monitor activity with transaction history notifications.',
            ].map((text, index) => (
              <div
                key={index}
                className='card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-[80vw] h-[350px] md:w-80 md:h-96 flex flex-col justify-between cursor-pointer transition-all duration-300'
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className='card-content'>
                  <p className='text-lg font-medium'>{text}</p>
                </div>
                <div
                  className='relative h-48 w-full overflow-hidden rounded-md'
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* <Image
                    src={`/images/card-image-${index + 1}.svg`}
                    alt={`Card image ${index + 1}`}
                    layout='fill'
                    objectFit='cover'
                    className='card-image transition-all duration-300'
                  /> */}
                  <Image
                    src={`/images/card-image-${index + 1}.svg`}
                    alt={`Card image ${index + 1}`}
                    width={0}
                    height={150}
                    style={{ width: 'auto', height: '100%' }}
                    className='card-image transition-all duration-300'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
