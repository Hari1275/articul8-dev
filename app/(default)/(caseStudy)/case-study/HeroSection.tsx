import Image from "next/image"
import Link from "next/link"
import { createSlug } from '../../../../utils/strapi';

interface HeroSectionProps {
  caseStudy: {
    Title: string;
    Content: string;
    Image: {
      url: string;
    };
  };
}

const HeroSection = ({ caseStudy }: HeroSectionProps) => (
  <section className="relative py-4 pb-6 md:pt-24 md:pb-12">
    <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center md:py-16">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={caseStudy.Image.url}
          alt={caseStudy.Title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="font-space-grotesk text-black
          text-[32px] leading-[40px]
          md:text-[48px] md:leading-[61.25px]
          font-bold text-left">
          {caseStudy.Title}
        </h1>
        <p className="font-proxima-nova text-black
          text-[18px] leading-[22px]
          md:text-[24px] md:leading-[29.23px]
          font-normal text-left my-6">
          {caseStudy.Content}
        </p>
        <Link 
          href={`/case-study/${createSlug(caseStudy.Title)}`}
          className="font-space-grotesk text-[#112FFF]
            text-[16px] leading-[20px]
            md:text-[18px] md:leading-[22.97px]
            font-bold flex items-center hover:text-blue-700"
        >
          Read More
          <Image
            src="/images/case-study/icons/arrow-right.svg"
            alt="Read more"
            width={16}
            height={16}
            className="ml-1 md:ml-1 w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
          />
        </Link>
      </div>
    </div>
  </section>
)

export default HeroSection