import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  caseStudy: {
    Title: string;
    Content: string;
    Image: {
      url: string;
    };
  };
}

const HeroSection = ({ caseStudy }: HeroSectionProps) => {
  // Create a function to generate URL-friendly slugs
  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .trim();
  };

  return (
    <section className="relative py-4 pb-6 md:pt-24 md:pb-12">
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center md:py-16">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={caseStudy.Image.url}
            alt={caseStudy.Title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="flex flex-col justify-center w-full pr-4 lg:pr-8">
          <h1 className="font-space-grotesk text-black
            text-[32px] leading-[40px]
            2xl:!text-[40px] 2xl:!leading-[51px]
            xl:!text-[48px] xl:!leading-[61.25px]
            font-bold text-left ">
            {caseStudy.Title}
          </h1>
          <p className="font-proxima-nova text-black
            text-[18px] leading-[22px]
            md:text-[20px] md:leading-[24px]
            lg:text-[24px] lg:leading-[29.23px]
            font-normal text-left my-6 ">
            {caseStudy.Content}
          </p>
          <Link 
            href={`/case-study/${createSlug(caseStudy.Title)}`}
            className="font-space-grotesk text-[#112FFF]
              text-[16px] leading-[20px]
              md:text-[18px] md:leading-[22.97px]
              font-bold flex items-center hover:text-blue-700 w-fit"
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
}

export default HeroSection