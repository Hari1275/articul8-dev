import Image from "next/image"
import React from 'react'

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

const contentSections = [
  {
    id: 'background',
    title: 'Background',
    content: `Chip manufacturing is a complex, dynamic process that requires constant monitoring, analysis, and optimization. The customer developed a manufacturing "incident assistant" using Articul8's GenAI platform to diagnose & resolve manufacturing problems & improve overall manufacturing process efficiency`
  },
  {
    id: 'challenge',
    title: 'Challenge',
    content: `Machine downtime in semiconductor fab costs millions of $s. Identifying issues during downtime is complicated, highly manual, and depends on the engineer/technician's work experience as well as the ability draw new insights from past historical data and multiple data sources and types (structured, unstructured data, time series data, etc.). The customer was looking for a GenAI powered solution to diagnose & resolve manufacturing problems & improve overall manufacturing process efficiency.`
  },
  {
    id: 'solution',
    title: 'Solution',
    content: `Using Articul8's GenAI platform, the customer ingested and analyzed structured and unstructured data from diverse sources, including historical data and real-time feeds from sensors and machinery, to empower manufacturing engineers with AI-powered insights. The solution enabled automated knowledge discovery, data-driven decisions forfeiture mode root cause analysis, reduction of manufacturing downtime, automated work order creation, and improving overall manufacturing process efficiency.`
  },
  {
    id: 'outcomes',
    title: 'Outcomes',
    content: `Using the Articul8 GenAI platform, the customer processed decades of structured and unstructured data from a number of sources (16M+ machine logs, 38K+ knowledge articles, 50K+ wiki pages) to develop a natural language based GenAI application for manufacturing equipment root cause analysis (RCA). This resulted in accelerated incident resolution, improved equipment uptime, reduced manufacturing downtime, reduced maintenance and repair costs & improving overall manufacturing efficiency.`
  }
]

export default function CaseStudyDetailSection({ data }: Props) {
  return (
    <section className="py-8 lg:py-12 lg:py-16">
      {/* Hero Section - Full width background */}
      <div className="bg-[#F3F2F2]">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 lg:py-24">
            {/* Image - Shows first on mobile */}
            <div className="relative aspect-[16/9] lg:order-2">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover brightness-75"
                priority
              />
            </div>
            {/* Content - Shows second on mobile */}
            <div className="p-6 lg:p-8 lg:order-1">
              <h1 className="font-space-grotesk text-black
                text-[32px] leading-[41px]
                sm:text-[40px] sm:leading-[51px]
                md:text-[44px] md:leading-[56px]
                lg:text-[48px] lg:leading-[61.25px]
                uppercase font-bold mb-3 md:mb-6">
                {data.title}
              </h1>
              <p className="font-proxima-nova text-[#666666]
                text-[16px] leading-[19.5px]
                sm:text-[18px] sm:leading-[22px]
                md:text-[20px] md:leading-[24px]
                lg:text-[24px] lg:leading-[29.23px]
                font-normal">
                {data.description}
              </p>
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

      {/* Rest of the component wrapped in container */}
      <div className="container mx-auto px-4 sm:px-6">
        {/* Content Sections */}
        <div className="space-y-0 lg:space-y-8 mt-0 lg:mt-16">
          {contentSections.map((section) => (
            <div key={section.id} className="relative">
              <h2 className="font-space-grotesk text-black
                text-[28px] leading-[42px]
                sm:text-[32px] sm:leading-[48px]
                md:text-[36px] md:leading-[54px]
                lg:text-[40px] lg:leading-[60px]
                font-bold mb-4 md:mb-6">
                {section.title}
              </h2>
              <p className="font-proxima-nova text-[#666666]
                text-[16px] leading-[19.5px]
                sm:text-[18px] sm:leading-[22px]
                md:text-[20px] md:leading-[24px]
                lg:text-[24px] lg:leading-[29.23px]
                font-normal">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 