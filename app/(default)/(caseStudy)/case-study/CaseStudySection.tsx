import Image from "next/image"
import Link from "next/link"

// Update the interface to match the actual data structure
interface CaseStudyBasicDetail {
  Title: string;
  Content: string;
  Image: {
    url: string;
  };
  logo?: string;
}

interface CaseStudy {
  BasicDetail: CaseStudyBasicDetail;
  Background?: string;
  Challenge?: string;
  Solution?: {
    content: string;
    videoUrl?: string;
  };
  Outcomes?: Array<{
    Title: string;
    Content: string;
  }>;
  PercentageCards?: Array<{
    Percentage: string;
    Title: string;
  }>;
}

interface CaseStudySectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudySection({ caseStudies }: CaseStudySectionProps) {
  // Create a function to generate URL-friendly slugs
  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .trim();
  };

  return (
    <section className="pt-0 pb-8 md:pt-8 md:pb-12">
      <div className="flex justify-between items-baseline mb-8 md:mb-16">
        <h2 className="font-space-grotesk text-black
          text-[32px] leading-[48px]
          sm:text-[44px] sm:leading-[66px]
          md:text-[56px] md:leading-[84px]
          font-bold">
          Case Studies
        </h2>
        {/* <button className="flex items-center font-space-grotesk text-[#1130FF]
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
        </button> */}
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 md:gap-y-12 gap-y-4">
        {caseStudies.slice(1).map((study, index) => (
          <div key={index + 1} className="bg-[#F9F9F9]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={study.BasicDetail.Image.url}
                alt={study.BasicDetail.Title}
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
                {study.BasicDetail.Title}
              </h3>
              <p className="font-proxima-nova text-black
                text-[18px] leading-[22px]
                sm:text-[20px] sm:leading-[24.36px]
                md:text-[24px] md:leading-[29.23px]
                font-normal mb-6">
                {study.BasicDetail.Content}
              </p>
              <Link 
                href={`/case-study/${createSlug(study.BasicDetail.Title)}`}
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
                  className="ml-1 md:ml-1 w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

