"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ErrorBoundary from "../../../components/ErrorBoundary";

interface Content {
  id: number;
  Title: string;
  SubTitle: string;
  Content: string;
  Icon: {
    url: string;
    alternativeText: string;
  };
}

interface InnovationCard {
  id: number;
  Title: string;
  Icon: {
    url: string;
    alternativeText: string;
  };
  HoverIcon: {
    url: string;
    alternativeText: string;
  };
  Contents: Content[];
}

interface InnovationsSectionProps {
  data: {
    MainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
      SuffixTitle: string;
    };
    InnovationCards: InnovationCard[];
  };
}

const InnovationItem = ({
  icon,
  hoverIcon,
  title,
  isSelected,
  isHovered,
  hasActiveHover,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  icon: string;
  hoverIcon: string;
  title: string;
  isSelected: boolean;
  isHovered: boolean;
  hasActiveHover: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const showBlueBackground = isHovered || (isSelected && !hasActiveHover);

  return (
    <div
      className={`flex items-center py-6 px-6 
        ${showBlueBackground ? "bg-[#112FFF]" : ""} 
        ${!showBlueBackground ? "border-b border-[#00000033]" : ""}
        cursor-pointer transition-all duration-300 rounded-sm`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={showBlueBackground ? hoverIcon : icon}
        alt={title}
        width={30}
        height={30}
        priority
        className="mr-4 transition-all duration-300"
      />
      <p
        className={`text-[30px] font-proxima-nova font-[700] xl:leading-[46.14px] sm:text-[22px] lg:text-[26px]
          ${showBlueBackground ? "text-white" : "text-black"}
          transition-all duration-300`}
      >
        {title}
      </p>
    </div>
  );
};

const ProductCard = ({
  icon,
  title,
  subTitle,
  description,
  isLast = false,
}: {
  icon: string;
  title: string;
  subTitle: string;
  description: string;
  isLast?: boolean;
}) => (
  <div className={`pb-6 mb-6 ${!isLast ? "border-b border-[#00000033]" : ""}`}>
    <div className="flex items-center mb-2">
      <Image
        src={icon}
        alt={title}
        width={18}
        height={18}
        className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mr-3 md:mt-1"
        priority
      />
      <div>
        <p className="text-[18px] sm:text-[20px] sm:leading-[22px] font-proxima-nova font-[600] leading-[20px] text-black">
          {title}
        </p>
      </div>
    </div>
    <p className="text-[16px] sm:text-[18px] sm:leading-tight leading-tight font-proxima-nova font-[600] text-[#1130FF] mt-1">
      {subTitle}
    </p>
    <p className="text-[14px] sm:text-[16px] sm:leading-tight pt-2 font-proxima-nova font-[400] leading-[18px] text-black">
      {description}
    </p>
  </div>
);

const AccordionItem = ({
  icon,
  hoverIcon,
  title,
  isOpen,
  onClick,
  children,
}: {
  icon: string;
  hoverIcon: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${isOpen ? "bg-[#112FFF]" : ""} mb-2`}>
      <div
        className={`flex items-center justify-between py-4 px-4 cursor-pointer ${
          isOpen ? "text-white" : ""
        }`}
        onClick={onClick}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          <Image
            src={isOpen ? hoverIcon : isHovered ? hoverIcon : icon}
            alt={title}
            width={24}
            height={24}
            priority
            className="mr-3"
          />
          <p className="text-[18px] font-proxima-nova font-[700] leading-[22px]">
            {title}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/images/icons/arrowdown.svg"}
            alt={isOpen ? "Close" : "Open"}
            width={14}
            height={14}
            className={isOpen ? "invert" : ""}
          />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-white p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InnovationsSection = ({ data }: InnovationsSectionProps) => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);
  const [hoveredInnovation, setHoveredInnovation] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleInnovationClick = (index: number) => {
    setSelectedInnovation(index);
    setHoveredInnovation(null);
  };

  const handleInnovationHover = (index: number) => {
    setHoveredInnovation(index);
    setSelectedInnovation(index);
  };

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const displayedInnovation = hoveredInnovation !== null ? hoveredInnovation : selectedInnovation;

  return (
    <ErrorBoundary>
      <section className="sm:py-16 py-8 bg-[#F6F6FF]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="hidden xl:block font-space-grotesk text-[26px] sm:text-[54px] font-bold mb-16 sm:leading-[84px] text-center leading-tight">
            <span className="block mb-2">
              {data.MainTitle.PrefixTitle}{" "}
              <span className="text-[#FF00C7]">{data.MainTitle.HighlightedTitle}</span>
            </span>
            <span className="block">{data.MainTitle.SuffixTitle}</span>
          </h2>

          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-10 gap-12 sm:px-0">
            <div className="lg:col-span-4">
              {data?.InnovationCards.map((item, index) => (
                <InnovationItem
                  key={index}
                  icon={item.Icon.url}
                  hoverIcon={item.HoverIcon.url}
                  title={item.Title}
                  isSelected={index === selectedInnovation}
                  isHovered={index === hoveredInnovation}
                  hasActiveHover={hoveredInnovation !== null}
                  onClick={() => handleInnovationClick(index)}
                  onMouseEnter={() => handleInnovationHover(index)}
                  onMouseLeave={() => setHoveredInnovation(null)}
                />
              ))}
            </div>
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={displayedInnovation}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {data?.InnovationCards[displayedInnovation].Contents.map(
                    (product, index) => (
                      <ProductCard
                        key={index}
                        icon={product.Icon?.url || ""}
                        title={product.Title}
                        subTitle={product.SubTitle}
                        description={product.Content}
                        isLast={index === data.InnovationCards[displayedInnovation].Contents.length - 1}
                      />
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile view */}
          <div className="lg:hidden">
            {data?.InnovationCards.map((item, index) => (
              <AccordionItem
                key={index}
                icon={item.Icon.url}
                hoverIcon={item.HoverIcon.url}
                title={item.Title}
                isOpen={openAccordion === index}
                onClick={() => handleAccordionClick(index)}
              >
                {item.Contents.map((product, productIndex) => (
                  <ProductCard
                    key={productIndex}
                    icon={product.Icon?.url || ""}
                    title={product.Title}
                    subTitle={product.SubTitle}
                    description={product.Content}
                    isLast={productIndex === item.Contents.length - 1}
                  />
                ))}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default InnovationsSection;
