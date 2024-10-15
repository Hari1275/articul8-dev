'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from './AnimatedText';
import UnlockSectionHeader from './UnlockSectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Card = React.memo<{
  card: {
    title: string[];
    image: string;
  };
  index: number;
  totalCards: number;
}>(({ card, index, totalCards }) => (
  <div
    className="card rounded-2xl p-4 w-[280px] h-[340px] flex flex-col justify-between cursor-pointer transition-all duration-300"
    style={{
      zIndex: totalCards - index,
      transformStyle: 'preserve-3d',
      background: 'linear-gradient(to bottom right, #E8F1FF, #C1F0F4, #C2D3FD)',
    }}
    aria-label={`Card ${index + 1}: ${card.title.join(' ')}`}
  >
    <div className='card-content'>
      <h3 className='text-2xl font-bold leading-tight'>
        {card.title[0]}
        <br />
        {card.title[1]}
      </h3>
    </div>
    <div className='relative flex items-end justify-start h-32'>
      <Image
        src={card.image}
        alt={card.title.join(' ')}
        width={80}
        height={80}
        className='card-image transition-all duration-300'
        priority
      />
    </div>
  </div>
));

Card.displayName = 'Card';

const UnlockSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Define stackOffset at the component level
  const stackOffset = 5;

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
    const cardWidth = 280;
    const gap = 10;
    const visibleCards = 4;
    const totalWidth = visibleCards * (cardWidth + gap) - gap;

    // Initial stacked position
    gsap.set(cards, {
      x: (i) => i * stackOffset - ((cards.length - 1) * stackOffset) / 2,
      y: (i) => -i * stackOffset,
      rotationY: -5,
      scale: (i) => 1 - i * 0.05,
      opacity: (i) => 1 - i * 0.1,
      zIndex: (i) => cards.length - i,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainer,
        start: 'top center',
        end: 'center center',
        scrub: true,
        onUpdate: (self) => {
          setIsAnimationComplete(self.progress === 1);
        },
      },
    });

    tl.to(cards, {
      x: (i) => i * (cardWidth + gap),
      y: 0,
      rotationY: 0,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    });

  }, [prefersReducedMotion, stackOffset]);

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
      description: 'Total Cost of Ownership (TCO) for Expert GenAI Application at Production scale',
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
      title: ['Reduction', 'in number of components needed to build an enterprise GenAI Application'],
      description: 'in number of components needed to build an enterprise GenAI Application',
      image: '/images/card-image-7.svg',
     
     
      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',

    },
  ];

  const shouldEnableScroll = cardData.length > 3;

  const updateScrollButtons = useCallback(() => {
    if (cardsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardsContainerRef.current;
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
      cardsContainerRef.current.scrollBy({ left: -(280 + 10), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: 280 + 10, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white">
      <UnlockSectionHeader />
      <AnimatedText />
     
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className='py-20 overflow-hidden relative'
      >
        <div className='container mx-auto px-4 relative'>
          {isAnimationComplete && (
            <div className="absolute top-0 right-4 flex space-x-2 z-10">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  canScrollRight 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
          <br/>
          <div
            ref={cardsContainerRef}
            className={`relative ${isAnimationComplete ? 'overflow-x-auto' : 'overflow-hidden'}`}
            style={{ 
              width: '100%',
              height: '400px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div 
              className={`absolute top-1/2 ${isAnimationComplete ? 'left-0' : 'left-1/2'} transform ${isAnimationComplete ? '-translate-y-1/2' : '-translate-x-1/2 -translate-y-1/2'}`}
              style={{ 
                width: `${cardData.length * (280 + 10)}px`,
                height: '340px',
              }}
            >
              {cardData.map((card, index) => (
                <div 
                  key={index} 
                  className={`absolute top-1/2 transform -translate-y-1/2 ${isAnimationComplete ? '' : 'left-1/2 -translate-x-1/2'}`}
                  style={{ 
                    width: '280px',
                    height: '340px',
                    zIndex: isAnimationComplete ? 1 : cardData.length - index,
                    left: isAnimationComplete ? `${index * (280 + 10)}px` : undefined,
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
      <style jsx global>{`
        .card {
          transition: all 0.5s ease;
          will-change: transform, opacity, scale;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UnlockSection;
