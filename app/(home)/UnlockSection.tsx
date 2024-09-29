'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = React.memo<{
  card: { color: string; title: string; description: string; image: string };
  index: number;
  totalCards: number;
}>(({ card, index, totalCards }) => (
  <div
    className={`card absolute ${card.color} rounded-lg shadow-lg p-8 w-[320px] h-[450px] flex flex-col justify-between cursor-pointer transition-all duration-300`}
    style={{
      zIndex: totalCards - index,
      transformStyle: 'preserve-3d',
    }}
    aria-label={`Card ${index + 1}: ${card.title}`}
  >
    <div className='card-content'>
      <h3 className='text-2xl font-bold mb-3'>{card.title}</h3>
      <p className='text-gray-700 text-lg'>{card.description}</p>
    </div>
    <div className='relative h-60 w-full overflow-hidden rounded-md'>
      <Image
        src={card.image}
        alt={card.title}
        width={0}
        height={100}
        style={{ width: 'auto', height: '100%' }}
        className='card-image transition-all duration-300'
        loading='lazy'
      />
    </div>
  </div>
));

Card.displayName = 'Card';

const UnlockSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
        x: (i, target) => {
          const visibleCards = Math.min(cards.length, 3);
          const centerIndex = Math.floor((visibleCards - 1) / 2);
          const offset = (i - centerIndex) * 400;
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
      description: 'With intelligent model selection and routing.',
      image: '/images/card-image-1.svg',
      color: 'bg-purple-200',
    },
    {
      title: 'Improvement in Accuracy',
      description: 'All in one place.',
      image: '/images/card-image-2.svg',
      color: 'bg-indigo-200',
    },
    {
      title: 'Improvement in Accuracy',
      description: 'Display your digital assets.',
      image: '/images/card-image-3.svg',
      color: 'bg-pink-200',
    },
    {
      title: 'Improvement in Accuracy',
      description: 'Transaction history notifications.',
      image: '/images/card-image-4.svg',
      color: 'bg-yellow-200',
    },
  ];

  const shouldEnableScroll = cardData.length > 3;

  return (
    <section
      ref={sectionRef}
      className='py-20 overflow-hidden relative'
      style={{ backgroundColor: '#F2F7FF' }}
    >
      <div className='container mx-auto px-4'>
        <h2
          ref={titleRef}
          className='text-5xl font-bold mb-12 text-center relative z-10'
        >
          Unlock <span className='text-blue-600'>[</span>
          <span className='text-pink-500'>New revenue</span>
          <span className='text-blue-600'>]</span> with
          <br />
          your data.
        </h2>

        <div
          ref={cardsContainerRef}
          className={`relative h-[500px] ${
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
