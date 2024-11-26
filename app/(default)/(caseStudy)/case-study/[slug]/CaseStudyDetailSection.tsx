'use client'

import Image from "next/image"
import React, { useState } from 'react'

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
      <div className="container mx-auto px-0 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:mt-12">
          {/* Left Menu - Sticky only on desktop */}
          <div className="relative lg:sticky lg:top-24 lg:h-fit">
            <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-4 lg:space-x-0 space-y-0 lg:space-y-3 pb-4 lg:pb-0">
              {contentSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`whitespace-nowrap lg:whitespace-normal text-left px-4 py-3 font-space-grotesk
                    text-[18px] leading-[27px]
                    sm:text-[20px] sm:leading-[30px]
                    md:text-[24px] md:leading-[36px]
                    font-medium transition-colors duration-200
                    ${activeSection === section.id 
                      ? 'bg-[#F3F2F2] text-[#112FFF]' 
                      : 'text-black hover:bg-gray-50'
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            {contentSections.map((section) => (
              <div
                key={section.id}
                className={`${activeSection === section.id ? 'block' : 'hidden'}`}
              >
                <h2 className="font-space-grotesk text-black
                  text-[28px] leading-[28px]
                  sm:text-[34px] sm:leading-[34px]
                  md:text-[40px] md:leading-[40px]
                  font-bold mb-6">
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