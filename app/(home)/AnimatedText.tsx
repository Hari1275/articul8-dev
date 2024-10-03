'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (section && text) {
      const lines = text.children;

      // Set initial state for all lines
      gsap.set(lines, {
        color: '#CCCCCC', // Light gray color
        backgroundImage: 'linear-gradient(to right, #000, #000)', // Black color for fill
        backgroundSize: '0% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
      });

      // Create a timeline for sequential animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          toggleActions: 'play none none reverse',
        }
      });

      // Animate each line sequentially
      Array.from(lines).forEach((line, index) => {
        tl.to(line, {
          backgroundSize: '100% 100%',
          color: 'transparent',
          duration: 0.5,
          ease: 'power1.inOut',
        }, index * 0.3);
      });

      // Ensure all lines are filled when scrolling past the section
      tl.to({}, { duration: 0.5 });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className='px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20'>
      <h2 ref={textRef} className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-[1.1] sm:leading-[1.05] flex flex-col gap-2 sm:gap-3 md:gap-4'>
        <span>Our platform simplifies</span>
        <span>enterprise-wide implementation,</span>
        <span>bringing order to the chaos and</span>
        <span>allowing you to harness the full</span>
        <span>potential of Gen AI.</span>
      </h2>
    </div>
  );
};

export default AnimatedText;