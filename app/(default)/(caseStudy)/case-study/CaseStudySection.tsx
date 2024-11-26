import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "BCG: Knowledge Discovery & Enterprise Search",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/case-study/placeholder.png",
    slug: "bcg-knowledge-discovery",
  },
  {
    id: 2,
    title: "Major Financial Analytics Company: Financial Research Analyst Assistant",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/case-study/placeholder.png",
    slug: "financial-analytics",
  }
]

export default function CaseStudySection() {
  return (
    <section className="py-2 md:py-12">
      {/* Header */}
      <div className="flex justify-between items-baseline mb-8 md:mb-16">
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
            alt="Sort"
            width={12}
            height={12}
            className="ml-2"
          />
        </button>
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 gap-x-12 md:gap-y-12 gap-y-4">
        {caseStudies.map((study) => (
          <div key={study.id} className="bg-[#F9F9F9]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="font-space-grotesk text-black
                text-[18px] leading-[23px]
                sm:text-[20px] sm:leading-[25.5px]
                md:text-[22px] md:leading-[28.07px]
                font-bold mb-4">
                {study.title}
              </h3>
              <p className="font-proxima-nova text-black
                text-[18px] leading-[22px]
                sm:text-[20px] sm:leading-[24.36px]
                md:text-[24px] md:leading-[29.23px]
                font-normal mb-6">
                {study.description}
              </p>
              <Link 
                href={`/case-study/${study.slug}`}
                className="font-space-grotesk text-[#112FFF]
                  text-[16px] leading-[20px]
                  sm:text-[17px] sm:leading-[21.7px]
                  md:text-[18px] md:leading-[22.97px]
                  font-bold flex items-center hover:text-blue-700"
              >
                Read More
                <Image
                  src="/images/case-study/icons/arrow-right.svg"
                  alt="Read more"
                  width={12}
                  height={12}
                  className="ml-2"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

