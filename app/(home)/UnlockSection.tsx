'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = React.memo<{
  card: {
    title: string;
    description: string;
    image: string;
    footerText: string;
    logo: string;
  };
  index: number;
  totalCards: number;
}>(({ card, index, totalCards }) => (
  <div
    className="card absolute bg-white rounded-lg shadow-lg p-4 w-[280px] h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-300"
    style={{
      zIndex: totalCards - index,
      transformStyle: 'preserve-3d',
    }}
    aria-label={`Card ${index + 1}: ${card.title}`}
  >
    <div className='card-content'>
      <h3 className='text-2xl font-bold mb-2'>{card.title}</h3>
      <p className='text-gray-700 text-xs mb-3'>{card.description}</p>
    </div>
    <div className='relative flex-grow'>
      <Image
        src={card.image}
        alt={card.title}
        layout="fill"
        objectFit="contain"
        className='card-image transition-all duration-300'
        priority
      />
    </div>
    <div className='mt-3 flex flex-row justify-between gap-2'>
      <p className='text-xs text-gray-600 mb-1'>{card.footerText}</p>
      <Image
        src={card.logo}
        alt="Logo"
        width={20}
        height={20}
        className='card-logo'
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
    const title = titleRef.current;

    if (section && cardsContainer && title) {
      const cards = cardsContainer.querySelectorAll('.card');

      gsap.set(title, { zIndex: 10, position: 'relative' });

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
          trigger: section,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        onComplete: () => setAnimationComplete(true),
      });

      tl.to(cards, {
        x: (i) => {
          const visibleCards = Math.min(cards.length, 3);
          const centerIndex = Math.floor((visibleCards - 1) / 2);
          const offset = (i - centerIndex) * 330;
          
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
      title: 'Improvement in Accuracy',
      description: 'With intelligent model selection and routing',
      image: '/images/card-image-1.svg',
      
      footerText: 'General Purpose GenAI Model',
      logo: '/images/logos/Isolation_Mode.svg',
    },
    {
      title: 'Improvement in Precision',
      description: 'Total Cost of Ownership (TCO) for Expert GenAI Application at Production scale',
      image: '/images/card-image-2.svg',
    
      
      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',

    },
    {
      title: 'Traceability',
      description: '% of decisions that you can trace',
      image: '/images/card-image-3.svg',
      
     
      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',

    },
    {
      title: 'Reduction',
      description: 'in number of complex human in the loop decisions',
      image: '/images/card-image-4.svg',
     
     
      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',

    },
    {
      title: '2x richer',
      description: 'semantic understanding your enterprise data',
      image: '/images/card-image-5.svg',
     
     
      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',

    },
    {
      title: 'Time to ROI',
      description: 'semantic understanding your enterprise data',
      image: '/images/card-image-6.svg',
    
      
      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',

    },
    {
      title: 'Reduction',
      description: 'in number of components needed to build an enterprise GenAI Application',
      image: '/images/card-image-7.svg',
     
     
      footerText: 'Built with PCS + General Purpose GenAI models',
      logo: '/images/logos/Isolation_Mode.svg',

    },
  ];

  const shouldEnableScroll = cardData.length > 3;

  return (
    <section
      ref={sectionRef}
      className='py-16 overflow-hidden relative'
      style={{ backgroundColor: '#F2F7FF' }}
    >
      <div className='container mx-auto px-4'>
      <h2
  ref={titleRef}
  className='text-4xl font-bold mb-10 text-center relative z-10'
>
  Unlock{' '}
  <span className='text-blue-600 inline-block align-middle'>
  <Image
                  src='/images/icons/open.svg'
                  alt='Open bracket'
                  width={20}
                  height={20}
                  className='mr-2'
                  priority
                />
  </span>
  <span className='text-pink-500 align-middle' > {currentWord}</span>
  <span className='text-blue-600 inline-block align-middle'>
  <Image
                  src='/images/icons/close.svg'
                  alt='Open bracket'
                  width={20}
                  height={20}
                  className='mr-2'
                  priority
                />
  </span>{' '}
  with
  <br />
  your data.
</h2>

        <div
          ref={cardsContainerRef}
          className={`relative h-[400px] ${
            animationComplete && shouldEnableScroll
              ? 'overflow-x-auto'
              : 'overflow-x-hidden'
          } hide-scrollbar`}
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
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UnlockSection;
