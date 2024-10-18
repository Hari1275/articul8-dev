'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (section && text) {
      // Initial state: large text
      gsap.set(text, {
        scale: 10,
        opacity: 0,
      });

      // Create a timeline for the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Animate text shrinking and fading in, then increase size slightly
      tl.to(text, {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        duration: 0.8,
      }).to(text, {
        scale: 1.2,
        duration: 0.2,
      });

      // Additional animation for mobile devices
      if (window.innerWidth <= 768) {
        tl.to(text, {
          scale: 1.2,
          duration: 0.2,
          ease: 'power1.inOut',
        }).to(text, {
          scale: 8,
          duration: 0.2,
          ease: 'power1.inOut',
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className='h-[55vh] sm:h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-white'
    >
      <div ref={textRef} className='flex flex-col items-center'>
        <p className='font-proxima-nova font-bold text-[20vw] sm:text-[315.66px] text-[#112FFF] leading-none mb-2'>
          4x
        </p>
        <p className='font-space-grotesk font-bold text-[5vw] sm:text-[93.95px] text-black leading-tight text-center whitespace-nowrap'>
          Faster Time to ROI
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
