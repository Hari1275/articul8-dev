'use client'

import Image from "next/image"
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { throttle } from 'lodash'

interface CaseStudyData {
  title: string;
  description: string;
  image: string;
  logo?: string;
  sections: {
    background: string;
    challenge: string;
    solution: {
      content: string;
      videoUrl?: string;
    };
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
  const contentSections = React.useMemo(() => 
    Object.keys(data.sections).map(key => ({
      id: key,
      title: key.charAt(0).toUpperCase() + key.slice(1)
    })), [data.sections]
  );

  const [activeSection, setActiveSection] = useState(contentSections[0].id)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const isManualScrolling = useRef(false)
  const scrollEndTimeout = useRef<NodeJS.Timeout>()

  const handleScroll = useCallback(
    throttle(() => {
      if (isManualScrolling.current) {
        const currentScrollPos = window.scrollY;
        setTimeout(() => {
          if (currentScrollPos === window.scrollY) {
            isManualScrolling.current = false;
          }
        }, 50);
        return;
      }

      const scrollPosition = window.scrollY + 150;
      let newActiveSection = contentSections[0].id;
      let minDistance = Infinity;

      contentSections.forEach(section => {
        const element = sectionRefs.current[section.id];
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - 150);

        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = section.id;
        }
      });

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    }, 100),
    [contentSections, activeSection]
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (!element) return;

    if (scrollEndTimeout.current) {
      clearTimeout(scrollEndTimeout.current);
    }

    isManualScrolling.current = true;
    setActiveSection(sectionId);

    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    scrollEndTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    const handleWheel = () => {
      if (isManualScrolling.current) {
        isManualScrolling.current = false;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      if (scrollEndTimeout.current) {
        clearTimeout(scrollEndTimeout.current);
      }
      handleScroll.cancel();
    };
  }, [handleScroll]);

  const imageProps = {
    loading: "lazy" as const,
    sizes: "(max-width: 768px) 100vw, 50vw",
  };

  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el
  }

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

    if (sectionId === 'solution') {
      return (
        <div className="space-y-6">
          <p className="font-proxima-nova text-black
            text-[18px] leading-[22px]
            sm:text-[20px] sm:leading-[24px]
            md:text-[24px] md:leading-[29px]">
            {data.sections.solution.content}
          </p>
          
          {data.sections.solution.videoUrl && (
            <div className="relative aspect-video w-full mt-8">
              <video
                className="w-full rounded-lg"
                autoPlay
           muted
                loop
                playsInline
                poster="/images/case-study/video-thumbnail.png"
              >
                <source src={data.sections.solution.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
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
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className="py-8 lg:py-12">
        {/* Hero Section */}
        <div className="bg-[#FFF]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 py-12 lg:py-24">
              <div className="w-full">
                {data.logo && (
                  <Image
                    src={data.logo}
                    alt={data.title}
                    width={80}
                    height={80}
                    priority
                  />
                )}
                <h1 className="font-space-grotesk text-black 
                  text-[32px] leading-[41px] 
                  2xl:!text-[48px] 2xl:!leading-[61.25px] 
                  xl:!text-[40px] xl:!leading-[51.25px] 
                  uppercase font-bold mb-6">
                  {data.title}
                </h1>
                <p className="font-proxima-nova text-[#000]
                  text-[16px] leading-[19.5px]
                  lg:text-[24px] lg:leading-[29.23px]
                  font-normal">
                  {data.description}
                </p>
              </div>
              <div className="w-full relative">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover rounded-lg"
                    {...imageProps}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Line */}
        <div className="container mx-auto px-4 sm:px-6 w-full h-[2px] lg:h-[5px] flex justify-start">
          <Image
            src='/images/case-study/dot-line.png'
            alt='Dotted line separator'
            width={1920}
            height={1}
            className="w-[85%] sm:w-[80%] md:w-[75%]"
          />
        </div>

        {/* Statistics Section */}
        {data.statistics.length > 0 ? (
          <div className="container mx-auto px-4 sm:px-4 pt-12 pb-0 md:py-16 lg:py-16">
            <div className="container mx-auto px-4 sm:px-12 bg-[#F2F7FF] md:py-12 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
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
        ) : <div className="pt-12 pb-0 md:py-12 lg:py-12"></div>}  

        {/* Content Section with Left Menu */}
        <div className="container mx-auto px-4 lg:px-0 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:mt-0">
            {/* Left Menu - Reduced spacing between menu items */}
            <div className="hidden lg:block relative lg:sticky lg:top-24 lg:h-fit lg:pt-12">
              <nav className="flex flex-col space-y-1 px-4 relative">
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
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`relative text-left px-6 py-2 font-space-grotesk w-full
                        text-[24px] leading-[36px]
                        font-medium transition-colors duration-200
                        ${activeSection === section.id 
                          ? 'text-[#112FFF]' 
                          : 'text-black hover:text-[#112FFF]'
                        }`}
                    >
                      {section.title}
                    </button>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Content - Reduced spacing between sections */}
            <div className="lg:px-12 lg:-mt-8">
              {contentSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  ref={setSectionRef(section.id)}
                  className={index === contentSections.length - 1 ? 'pb-0 lg:pb-2' : 'mb-0 lg:mb-2'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-space-grotesk text-black
                    text-[28px] leading-[28px]
                    sm:text-[34px] sm:leading-[34px]
                    md:text-[40px] md:leading-[40px]
                    font-bold mb-3 lg:mb-6">
                    {section.title}
                  </h2>
                  {renderSectionContent(section.id)}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Suspense>
  )
} 