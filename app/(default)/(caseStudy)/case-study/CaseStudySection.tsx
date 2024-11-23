import Image from "next/image"
import Link from "next/link"

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Uptype: GenAI-Powered Cybersecurity Insights",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/case-study/case-study-1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Intel: Knowledge Discovery Knowledge Mining and Root Cause Analysis of Semiconductor Fab Incidents",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
    link: "#",
  },
  {
    id: 3,
    title: "B2B Global Financial Services Company: Research-Ready Use Case",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/case-study/case-study-1.png",
    link: "#",
  },
  {
    id: 4,
    title: "BCG: Knowledge Discovery & Enterprise Search Use Case",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/case-study/case-study-2.png",
    link: "#",
  }
]

export default function CaseStudySection() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-space-grotesk text-black
          text-[32px] leading-[48px] 
          sm:text-[44px] sm:leading-[66px]
          md:text-[56px] md:leading-[84px]
          font-bold">
          Case Studies
        </h2>
        <button className="flex items-center font-space-grotesk text-[#1130FF]
          text-[18px] leading-[23px]
          sm:text-[20px] sm:leading-[25.5px]
          md:text-[22px] md:leading-[28.07px]
          font-bold">
          Sort by
          <Image
            src="/images/case-study/icons/arrow-down.svg"
            alt="Arrow right"
            width={12}
            height={12}
            className="ml-2"
          />
        </button>
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((study) => (
          <div 
            key={study.id} 
            className={`bg-[#F9F9F9] ${study.image ? 'flex flex-col' : 'h-fit'}`}
          >
            {study.image ? (
              <>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover w-full"
                  />
                </div>
                <div className="py-8 px-4">
                  <h3 className="font-space-grotesk text-black
                    text-[18px] leading-[23px]
                    sm:text-[20px] sm:leading-[25.5px]
                    md:text-[22px] md:leading-[28.07px]
                    font-bold mb-1.5">
                    {study.title}
                  </h3>
                  <p className="font-proxima-nova text-black
                    text-[18px] leading-[22px]
                    sm:text-[20px] sm:leading-[24.36px]
                    md:text-[24px] md:leading-[29.23px]
                    font-normal mb-3">
                    {study.description}
                  </p>
                  <Link 
                    href={study.link}
                    className="inline-flex items-center font-space-grotesk
                    text-[16px] leading-[20px]
                    sm:text-[17px] sm:leading-[21.7px]
                    md:text-[18px] md:leading-[22.97px]
                    font-bold text-[#112FFF]"
                  >
                    Read More
                    <Image
                      src="/images/case-study/icons/arrow-right.svg"
                      alt="Arrow right"
                      width={9}
                      height={9}
                      className="ml-2"
                    />
                  </Link>
                </div>
              </>
            ) : (
              // Content-only card with same typography
              <div className="py-8 px-4">
                <h3 className="font-space-grotesk text-black
                  text-[18px] leading-[23px]
                  sm:text-[20px] sm:leading-[25.5px]
                  md:text-[22px] md:leading-[28.07px]
                  font-bold mb-1.5">
                  {study.title}
                </h3>
                <p className="font-proxima-nova text-black
                  text-[18px] leading-[22px]
                  sm:text-[20px] sm:leading-[24.36px]
                  md:text-[24px] md:leading-[29.23px]
                  font-normal mb-3">
                  {study.description}
                </p>
                <Link 
                  href={study.link}
                  className="inline-flex items-center font-space-grotesk
                  text-[16px] leading-[20px]
                  sm:text-[17px] sm:leading-[21.7px]
                  md:text-[18px] md:leading-[22.97px]
                  font-bold text-[#112FFF]"
                >
                  Read More
                  <Image
                    src="/images/case-study/icons/arrow-right.svg"
                    alt="Arrow right"
                    width={9}
                    height={9}
                    className="ml-2"
                  />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

