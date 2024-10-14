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

      // Animate text shrinking and fading
      tl.to(text, {
        scale: 1, // Shrink to normal size
        opacity: 0.8,
        ease: 'power2.out',
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className='h-screen flex flex-col items-center justify-center overflow-hidden bg-white'>
      <div ref={textRef} >
       <p className='text-[15vw] sm:text-[12vw] md:text-[10vw] font-bold text-[#112FFF] leading-none mb-4 text-center'>
       4x
        </p> 
     
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold py-2 sm:py-4 md:py-6 lg:py-6'>Faster Time to ROI</p>
    
      </div>
     
    </div>
  );
};

export default AnimatedText;
