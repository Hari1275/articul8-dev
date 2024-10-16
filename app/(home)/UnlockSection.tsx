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
  });

  useEffect(() => {
    const updateValues = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setValues({ cardWidth: 240, gap: 10, visibleCards: 1 });
      } else if (window.innerWidth < 1024) {
        // Tablet
        setValues({ cardWidth: 250, gap: 10, visibleCards: 3 });
      } else {
        // Desktop
        setValues({ cardWidth: 300, gap: 78, visibleCards: 5 });
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
}>(({ card, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const image = cardElement.querySelector('.card-image') as HTMLElement;
    const content = cardElement.querySelector('.card-content') as HTMLElement;

    const hoverAnimation = gsap.timeline({ paused: true });
    hoverAnimation
      .to(cardElement, {
        y: -10,
        scale: 1.05,
        boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
        duration: 0.3,
      })
      .to(image, { scale: 1.1, duration: 0.3 }, 0)
      .to(content, { y: -5, duration: 0.3 }, 0);

    const playAnimation = () => hoverAnimation.play();
    const reverseAnimation = () => hoverAnimation.reverse();

    cardElement.addEventListener('mouseenter', playAnimation);
    cardElement.addEventListener('mouseleave', reverseAnimation);

    return () => {
      cardElement.removeEventListener('mouseenter', playAnimation);
      cardElement.removeEventListener('mouseleave', reverseAnimation);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className='card rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-500'
      style={{
        width: '100%',
        height: '100%',
        zIndex: totalCards - index,
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(to bottom right, #E8F1FF, #C1F0F4, #C2D3FD)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        backfaceVisibility: 'hidden', // Prevent text from showing through when rotated
      }}
      aria-label={`Card ${index + 1}: ${card.title.join(' ')}`}
    >
      <div className='card-content flex-grow'>
        <h3 className='sm:text-sm md:text-base lg:text-lg font-bold leading-tight mb-2'>
          {card.title[0]}
          <br />
          {card.title[1]}
        </h3>
      </div>
      <div className='relative flex items-end justify-start h-16 sm:h-20 md:h-24'>
        <Image
          src={card.image}
          alt={card.title.join(' ')}
          width={100}
          height={100}
          className='card-image transition-all duration-300'
          priority
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
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const { cardWidth, gap, visibleCards } = useResponsiveValues();
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

    // Initial stacked position (unchanged)
    gsap.set(cards, {
      x: (i) => i * stackOffset * 3 - ((cards.length - 1) * stackOffset * 1.5),
      y: (i) => -i * stackOffset * 3,
      rotationY: -1,
      rotationX: 1,
      scale: (i) => 1 - i * 0.005,
      opacity: 1,
      zIndex: (i) => cards.length - i,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainer,
        start: 'top center',
        end: 'center center',
        once: true,
        onEnter: () => {
          tl.play();
          setIsAnimationComplete(true);
        },
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
        each: 0.02, // Reduced from 0.03 to make the stagger effect faster
        from: 'start',
      },
      ease: 'power2.out', // Changed from 'power2.inOut' for a snappier animation
      duration: 0.5, // Reduced from 1 to make the overall animation faster
    });

    // Pause the timeline initially
    tl.pause();

  }, [prefersReducedMotion, cardWidth, gap, visibleCards, stackOffset]);

  useEffect(() => {
    animateCards();
  }, [animateCards]);

  const cardData = [
    {
      title: ['Improved', 'Accuracy'],
      image: '/images/card-image-1.svg',

      footerText: 'General Purpose GenAI Model',
      logo: '/images/logos/Isolation_Mode.svg',
    },
    {
      title: ['Improved', 'Precision'],
      description:
        'Total Cost of Ownership (TCO) for Expert GenAI Application at Production scale',
      image: '/images/card-image-2.svg',

      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',
    },
    {
      title: ['100%', 'Traceability'],
      description: '% of decisions that you can trace',
      image: '/images/card-image-3.svg',

      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',
    },
    {
      title: ['Reduction', 'in number of complex human in the loop decisions'],
      description: 'in number of complex human in the loop decisions',
      image: '/images/card-image-4.svg',

      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',
    },
    {
      title: ['2x richer', 'semantic understanding your enterprise data'],
      description: 'semantic understanding your enterprise data',
      image: '/images/card-image-5.svg',

      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',
    },
    {
      title: ['Time to ROI', 'semantic understanding your enterprise data'],
      description: 'semantic understanding your enterprise data',
      image: '/images/card-image-6.svg',

      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',
    },
    {
      title: [
        'Reduction',
        'in number of components needed to build an enterprise GenAI Application',
      ],
      description:
        'in number of components needed to build an enterprise GenAI Application',
      image: '/images/card-image-7.svg',

      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',
    },
  ];

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
    <section className='bg-white relative pt-12 pb-12'>
      {' '}
      {/* Added padding-top */}
      <UnlockSectionHeader />
      <AnimatedText />
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className='overflow-visible relative'
      >
        <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative'>
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
              height: `${cardWidth * 1.2 + 60}px`,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              style={{
                width: `${cardData.length * (cardWidth + gap) - gap}px`,
                height: `${cardWidth * 1.2 + 60}px`,
              }}
            >
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardWidth * 1.2}px`,
                    transition: 'all 0.5s ease',
                  }}
                >
                  <Card
                    card={card}
                    index={index}
                    totalCards={cardData.length}
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
