'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from './AnimatedText';
import UnlockSectionHeader from './UnlockSectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const useResponsiveValues = () => {
  const [values, setValues] = useState({
    cardWidth: 280,
    gap: 10,
    visibleCards: 3,
    isMobile: false,
  });

  useEffect(() => {
    const updateValues = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setValues({ cardWidth: 250, gap: 10, visibleCards: 1, isMobile: true });
      } else if (window.innerWidth < 1024) {
        // Tablet
        setValues({
          cardWidth: 250,
          gap: 10,
          visibleCards: 3,
          isMobile: false,
        });
      } 
      else if (window.innerWidth < 1440) {
        // Desktop
        setValues({
          cardWidth: 280,
          gap: 70,
          visibleCards: 6,
          isMobile: false,
        });
      } 
      
      else {
        // Desktop
        setValues({
          cardWidth: 360,
          gap: 84,
          visibleCards: 6,
          isMobile: false,
        });
      }
    };

    updateValues();
    window.addEventListener('resize', updateValues);
    return () => window.removeEventListener('resize', updateValues);
  }, []);

  return values;
};

const Card = React.memo<{
  card: {
    title: string;
    image: string;
  };
  index: number;
  totalCards: number;
  isMobile: boolean;
}>(({ card, index, totalCards, isMobile }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return; // Skip hover animation for mobile

    const cardElement = cardRef.current;
    if (!cardElement) return;

    const hoverAnimation = gsap.timeline({ paused: true });
    // hoverAnimation removed (as in your original code)

    const playAnimation = () => hoverAnimation.play();
    const reverseAnimation = () => hoverAnimation.reverse();

    cardElement.addEventListener('mouseenter', playAnimation);
    cardElement.addEventListener('mouseleave', reverseAnimation);

    return () => {
      cardElement.removeEventListener('mouseenter', playAnimation);
      cardElement.removeEventListener('mouseleave', reverseAnimation);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div
        ref={cardRef}
        className='card rounded-xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden'
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, #E8F1FF, #C1F0F4)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
        aria-label={`Card ${index + 1}: ${card.title}`}
      >
        <div className='card-content flex-grow'>
          <h3 className='font-proxima-nova sm:text-[32px] sm:leading-[38px] font-[600] sm:font-[700] text-[16px] leading-tight text-left mb-2'>
            {card.title}
          </h3>
        </div>
        <div className='flex justify-start mt-auto'>
          <Image
            src={card.image}
            alt={card.title}
            width={50}
            height={50}
            className='card-image -mb-2'
            priority
          />
        </div>
      </div>
    );
  }

  // Existing card design for tablet and desktop
  return (
    <div
      ref={cardRef}
      className='card rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-500'
      style={{
        width: '100%',
        height: '100%',
        zIndex: totalCards - index,
        transformStyle: 'preserve-3d',
        background:
          'linear-gradient(to bottom right, #E8F1FF, #C1F0F4, #C2D3FD)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        backfaceVisibility: 'hidden',
      }}
      aria-label={`Card ${index + 1}: ${card.title}`}
    >
      <div className='card-content flex-grow'>
        <h3 className='sm:text-sm md:text-base lg:text-lg font-bold leading-tight mb-2'>
          {card.title}
        </h3>
      </div>
      <div className='relative flex items-end justify-start h-16 sm:h-20 md:h-24'>
        <Image
          src={card.image}
          alt={card.title}
          width={100}
          height={100}
          className='card-image transition-all duration-300'
          priority
          style={{  height: '100%' }}
        />
      </div>
    </div>
  );
});

Card.displayName = 'Card';

const UnlockSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { cardWidth, gap, visibleCards, isMobile } = useResponsiveValues();
  const stackOffset = 3;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const animateCards = useCallback(() => {
    if (prefersReducedMotion) return;

    const cardsContainer = cardsContainerRef.current;
    if (!cardsContainer) return;

    const cards = cardsContainer.querySelectorAll('.card');
    const totalWidth = visibleCards * cardWidth + (visibleCards - 1) * gap;

    // Reverse the order of cards for initial stacked position
    gsap.set(cards, {
      x: (i) => (cards.length - 1 - i) * stackOffset * 3 - (cards.length - 1) * stackOffset * 1.5,
      y: (i) => -(cards.length - 1 - i) * stackOffset * 3,
      rotationY: -1,
      rotationX: 1,
      scale: (i) => 1 - (cards.length - 1 - i) * 0.005,
      opacity: 1,
      zIndex: (i) => i + 1, // Reverse the z-index
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainer,
        start: 'top center',
        end: 'center center',
        once: true,
      },
    });

    tl.to(cards, {
      x: (i) => {
        const cardPosition = i * (cardWidth + gap);
        const offset = (cardsContainer.offsetWidth - totalWidth) / 2;
        return cardPosition + offset;
      },
      y: 0,
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
      stagger: {
        each: 0.01,
        from: 'end',
      },
      ease: 'power3.out',
      duration: 0.3,
    });

    tl.pause();
  }, [prefersReducedMotion, cardWidth, gap, visibleCards, stackOffset]);

  useEffect(() => {
    animateCards();
  }, [animateCards]);



const cardData = [
  {
    title: 'Improved Accuracy',
    image: '/images/icons/Accuracy.svg',
  },
  {
    title: 'Improved Precision',
    image: '/images/icons/Precision.svg',
  },
  {
    title: '100% Traceability',
    image: '/images/icons/Traceability.svg',
  },
  {
    title: 'Reduction in Complex Human-in-the-Loop Decisions',
    image: '/images/icons/Reduction in Complex Human-in-the-Loop Decisions.svg',
  },
  {
    title: 'Reduction in Components to Build Application',
    image: '/images/icons/Reduction in Components to Build Application.svg',
  },
  {
    title: 'Richer Semantic Understanding of Your Data',
    image: '/images/icons/Richer Semantic Understanding of Your Data.svg',
  },
];

// ... rest of the code ...

  const updateScrollButtons = useCallback(() => {
    if (cardsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        cardsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  }, []);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons(); // Initial check
    }
    return () => container?.removeEventListener('scroll', updateScrollButtons);
  }, [updateScrollButtons]);

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className='bg-white relative sm:pt-12 sm:pb-12'>
      {' '}
      {/* Added padding-top */}
      <UnlockSectionHeader />
      <AnimatedText />
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className='overflow-visible relative'
      >
        <div className='container mx-auto px-4 sm:px-6 relative'>
          {/* Moved arrows inside this container and adjusted positioning */}
          <div className='absolute -top-8 right-4 flex space-x-3 z-50'>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label='Scroll left'
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label='Scroll right'
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div
            ref={cardsContainerRef}
            className='relative overflow-x-auto pt-12'
            style={{
              width: '100%',
              height: isMobile
                ? `${cardWidth * 1.0}px`
                : `${cardWidth * 1.2 + 60}px`, // Increased height for mobile
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div
              className='absolute top-1/2 left-[20%] sm:left-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              style={{
                width: `${cardData.length * (cardWidth + gap) - gap}px`,
                height: isMobile
                  ? `${cardWidth * 0.9}px`
                  : `${cardWidth * 1.2 + 60}px`,
              }}
            >
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  style={{
                    width: `${cardWidth}px`,
                    height: isMobile
                      ? `${cardWidth * 0.9}px`
                      : `${cardWidth * 1.2}px`,
                    transition: 'all 0.5s ease',
                    zIndex: cardData.length - index, // Reverse the z-index
                  }}
                >
                  <Card
                    card={card}
                    index={index}
                    totalCards={cardData.length}
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          min-height: 100vh;
        }
      `}</style>
    </section>
  );
};

export default UnlockSection;
