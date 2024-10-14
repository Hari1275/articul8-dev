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
    className="card absolute rounded-2xl p-4 w-[280px] h-[340px] flex flex-col justify-between cursor-pointer transition-all duration-300"
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
const words = ['New revenue', ];

const UnlockSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const typeEffect = () => {
      const current = words[currentIndex];
      if (isDeleting) {
        setCurrentWord(current.substring(0, currentWord.length - 1));
      } else {
        setCurrentWord(current.substring(0, currentWord.length + 1));
      }

      if (!isDeleting && currentWord === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentWord, currentIndex, isDeleting]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const animateCards = useCallback(() => {
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (section && cardsContainer) {
      const cards = cardsContainer.querySelectorAll('.card');

      gsap.set(cards, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.8,
        rotationY: -45,
        zIndex: (i) => cards.length - i,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainer,
          start: 'top bottom-=100',
          end: 'bottom center',
          // scrub: 1,
        },
        onComplete: () => setAnimationComplete(true),
      });

      tl.to(cards, {
        x: (i) => {
          const centerIndex = Math.floor((cards.length - 1) / 2);
          const offset = (i - centerIndex) * 330; // 330px is the card width + gap
          return `${offset}px`;
        },
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        stagger: 0.1,
        ease: 'power3.out',
        duration: 1,
      });

      cards.forEach((card) => {
        const image = card.querySelector('.card-image');
        const content = card.querySelector('.card-content');

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -20,
            scale: 1.05,
            boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
            duration: 0.3,
          });
          gsap.to(image, { scale: 1.1, duration: 0.3 });
          gsap.to(content, { y: -10, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            duration: 0.3,
          });
          gsap.to(image, { scale: 1, duration: 0.3 });
          gsap.to(content, { y: 0, duration: 0.3 });
        });
      });
    }
  }, [prefersReducedMotion]);

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
      cardsContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white">
      <UnlockSectionHeader />
      <AnimatedText />
     
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className='py-5 overflow-hidden relative'
      >
        <div className='container mx-auto px-4 relative'>
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
          <br/>
          <div
            ref={cardsContainerRef}
            className='relative h-[400px] overflow-x-auto hide-scrollbar py-16'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className='flex justify-center items-center h-full'>
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  index={index}
                  totalCards={cardData.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UnlockSection;
