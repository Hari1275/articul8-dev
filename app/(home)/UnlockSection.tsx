'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from './AnimatedText';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import UnlockSectionHeader from './UnlockSectionHeader';
// import UnlockSectionHeader from './UnlockSectionHeader';

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
      // if (window.innerWidth < 427) {
      //   // Mobile
      //   setValues({ cardWidth: 250, gap: 10, visibleCards: 1, isMobile: true });
      // }
      console.log('window.innerWidth', window.innerWidth);
      if (window.innerWidth < 400) {
        setValues({ cardWidth: 280, gap: 10, visibleCards: 1, isMobile: true });
      } else if (window.innerWidth < 640) {
        // Mobile
        setValues({ cardWidth: 310, gap: 10, visibleCards: 1, isMobile: true });
      } else if (window.innerWidth < 1024) {
        // Tablet
        setValues({
          cardWidth: 250,
          gap: 10,
          visibleCards: 3,
          isMobile: false,
        });
      } else if (window.innerWidth < 1600) {
        // Desktop
        setValues({
          cardWidth: 313,
          gap: 50,
          visibleCards: 6,
          isMobile: false,
        });
      } else {
        // Desktop
        setValues({
          cardWidth: 330,
          gap: 60,
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
    title: string[];
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
        className='card rounded-2xl p-[30px] flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden'
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, #E8F1FF, #C1F0F4)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
        aria-label={`Card ${index + 1}: ${card.title.join(' ')}`}
      >
        <div className='card-content flex-grow'>
          <h3 className='font-proxima-nova text-[23px] leading-[27.6px] font-[600] text-left'>
            {card.title.map((line, i) => (
              <span key={i} className='block'>
                {line}
              </span>
            ))}
          </h3>
        </div>
        <div className='flex justify-start mt-auto'>
          <Image
            src={card.image}
            alt={`${card.title.join(' ')}`}
            width={80}
            height={80}
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
      className='card rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-500'
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
      aria-label={`Card ${index + 1}: ${card.title.join(' ')}`}
    >
      <div className='card-content flex-grow'>
        <h3 className='font-proxima-nova sm:text-[32px] sm:leading-[38.4px] font-[600] sm:font-[700] text-[16px] text-left mb-2'>
          {card.title.map((line, i) => (
            <span key={i} className='block'>
              {line}
            </span>
          ))}
        </h3>
      </div>
      <div className='relative flex items-end justify-start h-16 sm:h-20 md:h-24'>
        <Image
          src={card.image}
          alt={`${card.title.join(' ')}`}
          width={100}
          height={100}
          className='card-image transition-all duration-300'
          priority
          style={{ height: '100%' }}
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

    // Change the initial position to stack cards on the left side
    gsap.set(cards, {
      x: (i) => i * stackOffset * 3 - (cards.length - 1) * stackOffset * 1.5,
      y: (i) => -i * stackOffset * 3,
      rotationY: 1, // Change to positive value for left-side stacking
      rotationX: -1, // Change to negative value for left-side stacking
      scale: (i) => 1 - i * 0.005,
      opacity: 1,
      zIndex: (i) => cards.length - i, // Adjust z-index for proper stacking
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
        const containerWidth = cardsContainer.offsetWidth;
        console.log('cardsContainer.offsetWidth', containerWidth);
        console.log('totalWidth', totalWidth);

        let divisor;

        // if (containerWidth <= 427) {
        //   // Mobile screens
        //   divisor = 0;
        // }

        if (containerWidth >= 430) {
          // Mobile screens
          divisor = 0.2;
        }
        if (containerWidth <= 440) {
          // Mobile screens
          divisor = 0.9;
        } else if (containerWidth <= 640) {
          // Mobile screens
          divisor = 0.5;
        } else if (containerWidth <= 768) {
          // Small tablets
          divisor = 0.25;
        } else if (containerWidth <= 1024) {
          // Large tablets
          divisor = 4;
        } else if (containerWidth <= 1280) {
          // Small laptops
          divisor = 2;
        } else if (containerWidth <= 1440) {
          // Large laptops
          divisor = 2;
        } else if (containerWidth <= 1441) {
          // For screens up to 1441px, use the original centering logic
          divisor = 2;
        } else {
          // For larger screens, use a fixed left margin
          divisor = 1.4;
        }

        const offset = (containerWidth - totalWidth) / divisor;

        console.log('divisor', divisor);
        console.log('offset', offset);
        console.log('cardPosition', cardPosition);
        console.log('cardPosition + offset', cardPosition + offset);

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
        from: 'start', // Change to 'start' for left-to-right animation
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
      title: ['Improved', 'Accuracy'],
      image: '/images/icons/Accuracy.svg',
    },
    {
      title: ['Improved', 'Precision'],
      image: '/images/icons/Precision.svg',
    },
    {
      title: ['100%', 'Traceability'],
      image: '/images/icons/Traceability.svg',
    },
    {
      title: ['Reduction in', 'Complex Human-', 'in-the-Loop Decisions'],
      image:
        '/images/icons/Reduction in Complex Human-in-the-Loop Decisions.svg',
    },
    {
      title: ['Reduction in', 'Components to Build', 'Application'],
      image: '/images/icons/Reduction in Components to Build Application.svg',
    },
    {
      title: ['Richer Semantic', 'Understanding', 'of Your Data'],
      image: '/images/icons/Richer Semantic Understanding of Your Data.svg',
    },
  ];

  const updateScrollButtons = useCallback(() => {
    if (cardsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        cardsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // Added a small threshold
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
      {/* <UnlockSectionHeader /> */}
      <AnimatedText />
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className='overflow-visible relative'
      >
        <div className='container mx-auto px-4 sm:px-6 relative'>
          {/* Moved arrows inside this container and adjusted positioning */}
          <div className='absolute -top-8 right-4 flex space-x-3 z-999'>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label='Scroll left'
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
            className='relative overflow-x-auto pt-12 '
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
                  ? `${cardWidth * 0.8}px`
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
                      ? `${cardWidth * 0.8}px`
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
      <UnlockSectionHeader />
      <style jsx>{`
        section {
          min-height: 100vh;
        }
      `}</style>
    </section>
  );
};

export default UnlockSection;
