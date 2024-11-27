'use client'

import Image from "next/image"
import Modal from "../../../../components/Modal";
import { useState } from "react";

interface LastSection {
  Title: string;
  Button: {
    Title: string;
    Herf: string;
  };
  Image: {
    url: string;
  };
}

interface StartArticulatingSectionProps {
  lastSection: LastSection;
}

export default function StartArticulatingSection({ lastSection }: StartArticulatingSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#000D36] relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center min-h-[200px] relative">
          <div className="order-2 lg:order-1 py-16 lg:py-16 relative z-10 text-center lg:text-left">
            <h2 className="font-proxima-nova text-white
              text-[24px] leading-[29px]
              sm:text-[28px] sm:leading-[34px]
              md:text-[32px] md:leading-[38.98px]
              font-bold mb-8">
              {lastSection.Title}
            </h2>

            <button
                onClick={() => setIsModalOpen(true)}
                className='text-[#1130FF] hover:underline font-semibold flex items-center pt-2 lg:pl-8 xl:pl-16 2xl:pl-24'
              >
                <span className='font-space-grotesk text-[22px] font-[700] leading-[27.07px] text-[#FFF]'>
                  {lastSection.Button.Title || "Start Articul8'ing"}
                </span>
                <Image
                  src='/images/case-study/icons/arrow.svg'
                  alt='Arrow'
                  width={13}
                  height={13}
                  className='ml-2'
                />
              </button>

              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            {/* <Link
              href={lastSection.Button.Herf}
              className="inline-flex items-center justify-center 
                bg-white rounded-[4px] px-6
                font-space-grotesk font-bold
                text-[16px] leading-[20px] h-[40px]
                sm:text-[18px] sm:leading-[23px] sm:h-[44px]
                md:text-[20px] md:leading-[25.52px] md:h-[48px]
                transition-colors text-[#1130FF]"
            >
              {lastSection.Button.Title}
            </Link> */}
          </div>

          <div className="order-1 lg:order-2 relative lg:absolute right-0 -bottom-10 lg:-bottom-28 
            w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[350px]
              sm:w-[400px] sm:h-[400px]
              md:w-[500px] md:h-[400px]
              transform translate-y-0 lg:-translate-y-12">
              <Image
                src={lastSection.Image.url}
                alt="3D Arrow"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 