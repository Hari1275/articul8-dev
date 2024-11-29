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
        <div className="grid lg:grid-cols-2 items-center min-h-[250px] relative">
          <div className="order-1 lg:order-1 py-4 lg:pt-16 lg:pb-24 relative z-10">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="font-proxima-nova text-white text-center lg:text-left
                text-[28px] leading-[34px]
                sm:text-[28px] sm:leading-[34px]
                md:text-[32px] md:leading-[38.98px]
                font-bold mb-8 lg:pl-8 xl:pl-16 2xl:pl-24">
                Stop Falling Behind
              </h2>

              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#1130FF] hover:underline font-semibold 
                  flex items-center pt-2 lg:pl-8 xl:pl-16 2xl:pl-24
                  justify-center lg:justify-start w-full lg:w-auto"
              >
                <span className="font-space-grotesk text-[22px] font-[700] leading-[27.07px] text-[#FFF]">
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
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>

          <div className="order-2 lg:order-2 relative lg:absolute right-0 -bottom-0 lg:-bottom-12 
            w-full lg:w-auto flex justify-center lg:justify-center">
            <div className="relative w-[280px] h-[350px]
              sm:w-[400px] sm:h-[400px]
              md:w-[400px] md:h-[280px]
              transform translate-y-0 lg:-translate-y-12">
              <Image
                src='/images/case-study/growth.png'
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