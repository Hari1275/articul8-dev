"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

interface ImageData {
  url: string;
  alternativeText: string | null;
  formats?: {
    small: ImageFormat;
    medium: ImageFormat;
    large?: ImageFormat;
    thumbnail: ImageFormat;
  };
}

interface Environment {
  id: number;
  Title: string;
  Icon?: ImageData | null;
}

interface ProductWorkCard {
  id: number;
  Title: string;
  Content: string;
  Icon: ImageData;
  Environments: Environment[];
  SupportedGPUAccelerators?: ImageData[];
}

interface EnterpriseProps {
  productWorksData: {
    MainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
    };
    Image: ImageData;
    ProductWorkCards: ProductWorkCard[];
  };
}

const Card = ({ item }: { item: ProductWorkCard }) => {
  return (
    <div className="w-full flex flex-col gap-3 md:gap-4 justify-center md:justify-start items-center md:items-start align-top bg-[background: #ECEFF2]">
      {item.Icon && (
        <Image
          src={item.Icon.url}
          alt={item.Icon.alternativeText || "Card icon"}
          width={38}
          height={27}
          className="object-cover"
          priority
        />
      )}

      <h3 className="text-[19px] md:text-[28px] font-semibold text-center md:text-start leading-tight font-proxima-nova">
        {item.Title}
      </h3>
      <span className="text-[16px] font-[400] md:text-[20px] leading-tight text-center md:text-start font-proxima-nova leading-6">
        {item.Content}
      </span>
      
      {item.Environments && item.Environments.length > 0 && (
        <div className="text-[16px] md:text-[20px] font-[400] flex-row gap-1 flex">
          <span>Environments:</span>
          <div className="flex flex-row flex-wrap gap-x-1">
            {item.Environments.map((env, i) => (
              <div key={env.id} className="flex flex-row gap-1">
                {env.Title && <span>{env.Title}</span>}
                {env.Icon && (
                  <Image
                    src={env.Icon.url}
                    alt={env.Icon.alternativeText || "Environment icon"}
                    width={60}
                    height={60}
                  />
                )}
                {i !== item.Environments.length - 1 && <span>|</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.SupportedGPUAccelerators && item.SupportedGPUAccelerators.length > 0 && (
        <div className="text-[16px] md:text-[20px] font-[400] flex-row gap-1 flex">
          <span>Supported GPU accelerators:</span>
          <div className="flex flex-row flex-wrap gap-x-2">
            {item.SupportedGPUAccelerators.map((acc, i) => (
              <Image
                key={i}
                src={acc.url}
                alt={acc.alternativeText || "GPU accelerator"}
                width={30}
                height={30}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Enterprise = ({ productWorksData }: EnterpriseProps) => {
  const [sortedCards, setSortedCards] = useState(productWorksData.ProductWorkCards);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setSortedCards([...productWorksData.ProductWorkCards]);
      } else {
        setSortedCards(productWorksData.ProductWorkCards);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [productWorksData.ProductWorkCards]);

  return (
    <div className="w-full bg-white pt-8 md:pt-16 pb-10 flex justify-center items-center bg-[background: #ECEFF2]">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col justify-center items-center gap-4 md:gap-10">
        <div className="w-full md:w-[85%] flex flex-col justify-center align-middle" id="product-card">
          <h3 className="font-space-grotesk text-[28px] lg:text-[46px] md:text-3xl font-bold text-center leading-[36px] md:leading-10 lg:leading-[4rem]">
            {productWorksData.MainTitle.PrefixTitle}
            <span className="text-[#FA05C3]"> {productWorksData.MainTitle.HighlightedTitle}</span>
          </h3>
        </div>

        <div className="w-full flex justify-center">
          <Image
            src={productWorksData.Image.url}
            alt={productWorksData.Image.alternativeText || "Product illustration"}
            width={1000}
            height={500}
            className="mb-4 w-full"
          />
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[80%] flex flex-row flex-wrap justify-between gap-y-6">
            {sortedCards.map((item) => (
              <div key={item.id} className="md:w-[48%] w-full">
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
