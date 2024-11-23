import Image from "next/image"
import Link from "next/link"

const HeroSection = () => (
  <section className="relative py-4 sm:py-12 md:py-12">
    <div className="relative aspect-[16/9] w-full">
      <Image
        src="/images/case-study/case-study-hero.png"
        alt="Intel Manufacturing"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className="space-y-4 mt-6">
      <h1 className="font-space-grotesk text-black
        text-[32px] leading-[40px] sm:text-[40px] sm:leading-[51px] md:text-[48px] md:leading-[61.25px]
        font-bold text-center uppercase tracking-wide">
        Intel: Manufacturing<br />Root Cause Analysis
      </h1>
      <p className="font-proxima-nova text-black
        text-[18px] leading-[22px] sm:text-[20px] sm:leading-[24px] md:text-[24px] md:leading-[29.23px]
        font-normal max-w-2xl mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex justify-center">
        <Link 
          href="#"
          className="inline-flex items-center font-space-grotesk
          text-[16px] sm:text-[17px] md:text-[18px]
          leading-[20px] sm:leading-[21px] md:leading-[22.97px]
          font-bold text-[#112FFF] hover:text-blue-700"
        >
          Read More
          <Image
            src="/images/case-study/icons/arrow-right.svg"
            alt="Arrow right"
            width={9}
            height={9}
            className="ml-1"
          />
        </Link>
      </div>
    </div>
  </section>
)

export default HeroSection