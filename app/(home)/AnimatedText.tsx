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
          start: 'top bottom', // Changed to start when the top of the section hits the bottom of the viewport
          end: 'bottom top', // Changed to end when the bottom of the section leaves the top of the viewport
          scrub: 0.5, // Removed scrub to allow the animation to play through
          pin: false, // Removed pin as we want the section to scroll normally
          // Added to ensure the animation only plays once
        },
      });

      // Animate text shrinking and fading in, then increase size slightly
      tl.to(text, {
        scale: 1, // Shrink to normal size
        opacity: 1,
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
      className='h-[55vh]  sm:h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-white'
    >
      <div ref={textRef} className='flex flex-col items-center'>
        <p className='font-proxima-nova font-[700] text-[20vw] sm:text-[315.66px] md:text-[315.66px] sm:leading-[315.66px]  text-[#112FFF]  sm:mb-2'>
          4x
        </p>
        <p className='font-space-grotesk font-[700] text-[40px]  leading-[51.04px] sm:text-[93.95px] md:text-[93.95px] lg:text-[93.95px] sm:leading[119.88px] text-center'>
          Faster Time to ROI
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
