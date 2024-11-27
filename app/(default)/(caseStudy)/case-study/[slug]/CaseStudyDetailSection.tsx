'use client'

import Image from "next/image"
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CaseStudyData {
  title: string;
  description: string;
  image: string;
  sections: {
    background: string;
    challenge: string;
    solution: string;
    outcomes: Array<{
      title: string;
      content: string;
    }>;
  };
  statistics: Array<{
    value: string;
    label: string;
  }>;
}

interface Props {
  data: CaseStudyData;
}

export default function CaseStudyDetailSection({ data }: Props) {
  const contentSections = Object.keys(data.sections).map(key => ({
    id: key,
    title: key.charAt(0).toUpperCase() + key.slice(1)
  }));

  const [activeSection, setActiveSection] = useState(contentSections[0].id)
  const [isScrolling, setIsScrolling] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const scrollToSection = (sectionId: string) => {
    if (isScrolling) return; // Prevent multiple clicks while scrolling
    
    setIsScrolling(true);
    setActiveSection(sectionId);
    
    const element = sectionRefs.current[sectionId];
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust timing based on your needs
    }
  }

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el
  }

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (isScrolling) return; // Don't update active section while programmatically scrolling
      
      // Debounce scroll handler
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + 150;
        
        let newActiveSection = contentSections[0].id;
        let minDistance = Infinity;
        
        contentSections.forEach(section => {
          const element = sectionRefs.current[section.id];
          if (!element) return;
          
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 150); // Distance from target scroll position
          
          if (distance < minDistance) {
            minDistance = distance;
            newActiveSection = section.id;
          }
        });
        
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [contentSections, activeSection, isScrolling]);

  const renderSectionContent = (sectionId: string) => {
    if (sectionId === 'outcomes') {
      return (
        <div className="space-y-8">
          {data.sections.outcomes.map((outcome, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-2">
                <div className="w-[6px] h-[6px] rounded-full bg-black" />
              </div>
              <div className="flex-1">
                <p className="font-proxima-nova text-black
                  text-[18px] leading-[22px]
                  sm:text-[20px] sm:leading-[24px]
                  md:text-[24px] md:leading-[29px]">
                  <span className="font-bold">{outcome.title}:</span>
                  {' '}
                  {outcome.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    const content = data.sections[sectionId as keyof typeof data.sections];
    if (typeof content === 'string') {
      return (
        <p className="font-proxima-nova text-black
          text-[18px] leading-[22px]
          sm:text-[20px] sm:leading-[24px]
          md:text-[24px] md:leading-[29px]">
          {content}
        </p>
      );
    }

    return null;
  };

  return (
    <section className="py-8 lg:py-12">
      {/* Hero Section */}
      <div className="bg-[#F3F2F2]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 py-12 lg:py-24">
            <div className="p-6 lg:p-8">
              <h1 className="font-space-grotesk text-black
                text-[32px] leading-[41px]
                lg:text-[48px] lg:leading-[61.25px]
                uppercase font-bold mb-6">
                {data.title}
              </h1>
              <p className="font-proxima-nova text-[#666666]
                text-[16px] leading-[19.5px]
                lg:text-[24px] lg:leading-[29.23px]
                font-normal">
                {data.description}
              </p>
            </div>
            <div className="relative aspect-[16/9]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dot Line */}
      <div className="w-full h-[2px] lg:h-[5px] flex justify-start">
        <Image
          src='/images/case-study/dot-line.png'
          alt='Dotted line separator'
          width={1920}
          height={1}
          className="w-[85%] sm:w-[80%] md:w-[75%]"
        />
      </div>

      {/* Statistics Section */}
      <div className="pt-12 pb-0 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 bg-[#F2F7FF] md:py-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {data.statistics.map((stat, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg">
                <h3 className="font-proxima-nova text-[#FA05C3]
                  text-[40px] leading-[48px]
                  sm:text-[52px] sm:leading-[62.4px]
                  md:text-[64px] md:leading-[76.8px]
                  font-bold mb-3">
                  {stat.value}
                </h3>
                <p className="font-proxima-nova text-black
                  text-[18px] leading-[21.6px]
                  sm:text-[20px] sm:leading-[24px]
                  md:text-[24px] md:leading-[28.8px]
                  font-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section with Left Menu */}
      <div className="container mx-auto px-4 lg:px-0 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:mt-0">
          {/* Left Menu */}
          <div className="hidden lg:block relative lg:sticky lg:top-24 lg:h-fit lg:pt-16">
            <nav className="flex flex-col space-y-3 px-4 relative">
              {contentSections.map((section) => (
                <div key={section.id} className="relative">
                  <AnimatePresence>
                    {activeSection === section.id && (
                      <motion.div
                        className="absolute left-0 w-[3px] bg-[#112FFF] h-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                  <motion.button
                    onClick={() => scrollToSection(section.id)}
                    className={`relative text-left px-6 py-4 font-space-grotesk w-full
                      text-[24px] leading-[36px]
                      font-medium transition-colors duration-200
                      ${activeSection === section.id 
                        ? 'text-[#112FFF]' 
                        : 'text-black hover:text-[#112FFF]'
                      }`}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    disabled={isScrolling}
                  >
                    {section.title}
                  </motion.button>
                </div>
              ))}
            </nav>
          </div>

          {/* Right Content */}
          <div className="lg:px-12 lg:-mt-8">
            {contentSections.map((section, index) => (
              <motion.div
                key={section.id}
                ref={setSectionRef(section.id)}
                className={index === contentSections.length - 1 ? 'pb-2 lg:pb-20' : 'mb-4 lg:mb-16'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-space-grotesk text-black
                  text-[28px] leading-[28px]
                  sm:text-[34px] sm:leading-[34px]
                  md:text-[40px] md:leading-[40px]
                  font-bold mb-4 lg:mb-8">
                  {section.title}
                </h2>
                {renderSectionContent(section.id)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 