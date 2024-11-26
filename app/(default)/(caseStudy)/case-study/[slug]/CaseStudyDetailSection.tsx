'use client'

import Image from "next/image"
import React, { useState, useEffect, useRef } from 'react'

interface CaseStudyData {
  title: string;
  description: string;
  image: string;
  sections: {
    background: string;
    challenge: string;
    solution: string;
    outcomes: string;
  };
}

interface Props {
  data: CaseStudyData;
}

const statistics = [
  {
    value: "39%",
    label: "Uplift in work completion rate."
  },
  {
    value: "27%",
    label: "Enhancement in search relevance."
  },
  {
    value: "+46",
    label: "Point Net Promoter Score (NPS) increase."
  }
]

const contentSections = [
  {
    id: 'background',
    title: 'Background',
    content: `Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.Boston Consulting Group (BCG), a leading global management consulting firm, was looking to improve the productivity of their consulting staff. Specifically, their goal was to bring actionable insights from 50+ years of accumulated data and knowledge to their consultants' fingertips, thereby enabling them to focus on valuable analysis and developing better insights rather than spending time searching and locating information.
    
    `
  },
  {
    id: 'challenge',
    title: 'Challenge',
    content: `For BCG's consultants to deliver value in a timely manner to their clients, they were up against the significant challenge of making sense of an ever-growing digital repository accumulated over 50+ years dispersed across multiple data sources and involving multiple data formats. Every document was rich in text, graphs, and imagery and was hard to analyze quickly. Existing knowledge systems often forced consultants to use keyword-based searches, sometimes having to go page by page, and scanning entire documents from top to bottom. Consultants struggled to find the most relevant insights despite time-consuming search efforts.`
  },
  {
    id: 'solution',
    title: 'Solution',
    content: `Articul8 AI deployed a full-stack, production-grade enterprise GenAI platform in a few weeks that included a conversational system with contextual understanding, multimodal capabilities, and in-app document citation and exploration. The product was powered by a domain-specific multi-modal (image and text) large language model built on BCG's corpus of unstructured, mixed-mode knowledge data, and deployed within BCG's virtual private cloud (VPC) without any data leaving the enterprise perimeter.`
  },
  {
    id: 'outcomes',
    title: 'Outcomes',
    content: `Using the Articul8 GenAI platform, the customer processed decades of structured and unstructured data from a number of sources to develop a natural language based GenAI application for manufacturing equipment root cause analysis (RCA). This resulted in accelerated incident resolution, improved equipment uptime, reduced manufacturing downtime, reduced maintenance and repair costs & improving overall manufacturing efficiency.`
  }
]

export default function CaseStudyDetailSection({ data }: Props) {
  const [activeSection, setActiveSection] = useState('background')
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Scroll to section when menu item is clicked
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' })
  }

  // Create a callback ref function with proper type
  const setSectionRef = (id: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el
  }

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport

      // Find which section is currently in view
      let currentSectionId = contentSections[0].id;

      contentSections.forEach(section => {
        const element = sectionRefs.current[section.id];
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;

        if (scrollPosition >= absoluteTop) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-8 lg:py-12">
      {/* Hero Section - Full width background */}
      <div className="bg-[#F3F2F2]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 py-12 lg:py-24">
            {/* Content */}
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
            {/* Image */}
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

      {/* Dot Line - Attached directly to hero section */}
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
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 bg-[#F2F7FF] md:py-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {statistics.map((stat, index) => (
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
      <div className="container mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:mt-0">
          {/* Left Menu - Only visible on desktop */}
          <div className="hidden lg:block relative lg:sticky lg:top-24 lg:h-fit lg:pt-16">
            <nav className="flex flex-col space-y-3 px-4 relative">
              {/* Indicator Line */}
              {/* <div className="absolute left-0 w-[3px] bg-[#E6E6E6] h-full" /> */}
              
              {contentSections.map((section) => (
                <div key={section.id} className="relative">
                  {/* Active Section Indicator */}
                  {activeSection === section.id && (
                    <div className="absolute left-0 w-[3px] bg-[#112FFF] h-full 
                      transition-all duration-300" 
                    />
                  )}
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`relative text-left px-6 py-4 font-space-grotesk w-full
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

          {/* Right Content */}
          <div className="lg:px-12 lg:-mt-8">
            {contentSections.map((section, index) => (
              <div
                key={section.id}
                ref={setSectionRef(section.id)}
                className={`${
                  index === contentSections.length - 1 
                    ? 'pb-16 lg:pb-40' 
                    : 'mb-16 lg:mb-32'
                }`}
              >
                <h2 className="font-space-grotesk text-black
                  text-[28px] leading-[28px]
                  sm:text-[34px] sm:leading-[34px]
                  md:text-[40px] md:leading-[40px]
                  font-bold mb-8">
                  {section.title}
                </h2>
                <p className="font-proxima-nova text-[#666666]
                  text-[18px] leading-[22px]
                  sm:text-[20px] sm:leading-[24.36px]
                  md:text-[24px] md:leading-[29.23px]
                  font-normal">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 