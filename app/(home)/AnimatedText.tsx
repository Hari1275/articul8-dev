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
        opacity: 1,
      });

      // Create a timeline for the animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=80%', // Reduced from 100% to 80%
          scrub: true,
          pin: true,
        },
      });

      // Animate text shrinking and fading, then increase size slightly
      tl.to(text, {
        scale: 1, // Shrink to normal size
        opacity: 0.9,
        ease: 'power2.out',
        duration: 0.8,
      }).to(text, {
        scale: 1.2, // Increase size slightly
        duration: 0.2,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className='h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-white' // Reduced height from 80vh to 60vh
    >
      <div ref={textRef} className='flex flex-col items-center'>
        <p className='text-[18vw] sm:text-[16vw] md:text-[14vw] font-bold text-[#112FFF] leading-none mb-2'>
          4x
        </p>
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold'>
          Faster Time to ROI
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
