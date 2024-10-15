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
          end: '+=100%',
          scrub: true,
          pin: true,
        }
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
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className='h-screen flex flex-col items-center justify-center overflow-hidden bg-white'>
      <div ref={textRef} className='flex flex-col items-center'>
        <p className='text-[20vw] sm:text-[18vw] md:text-[16vw] font-bold text-[#112FFF] leading-none mb-2'>
          4x
        </p> 
        <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold'>Faster Time to ROI</p>
      </div>
    </div>
  );
};

export default AnimatedText;
