import Image from "next/image"
import Link from "next/link"

const HeroSection = () => (
  <section className="relative py-4 md:pt-24 md:pb-20">
    <div className="grid md:grid-cols-[40%_60%] gap-8 items-center md:py-12">
      {/* Left Column - Image (40%) */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/case-study/case-study-hero.png"
          alt="Intel Manufacturing"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Column - Content (60%) */}
      <div className="flex flex-col justify-center">
        <h1 className="font-space-grotesk text-black
          text-[32px] leading-[40px]
          md:text-[48px] md:leading-[61.25px]
          font-bold text-left">
          Intel: Manufacturing Root Cause Analysis
        </h1>
        <p className="font-proxima-nova text-black
          text-[18px] leading-[22px]
          md:text-[24px] md:leading-[29.23px]
          font-normal text-left my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link 
          href="#"
          className="font-space-grotesk text-[#112FFF]
            text-[16px] leading-[20px]
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
  </section>
)

export default HeroSection