'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface GangsterData {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const gangsterData: GangsterData[] = [
  {
    id: 1,
    name: 'Zachary Jordan',
    role: 'Software Engineer',
    description:
      'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.',
    image: '/images/icons/about/gangster1.png',
  },
  {
    id: 1,
    name: 'Zachary Jordan',
    role: 'Software Engineer',
    description:
      'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.',
    image: '/images/icons/about/gangster1.png',
  },
  {
    id: 1,
    name: 'Zachary Jordan',
    role: 'Software Engineer',
    description:
      'I am a software engineer at Articul8. I am responsible for building out our product through maintaining, improving, and building out new services and infrastructure.',
    image: '/images/icons/about/gangster1.png',
  },
  // Add more gangster data here
];

const GangsterSlider: React.FC = () => {
  const [pausedSlide, setPausedSlide] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='w-full'>
      {gangsterData.map((gangster) => (
        <div key={gangster.id} className='px-2'>
          <div
            className={`relative w-full h-[300px] perspective-1000 cursor-pointer ${
              pausedSlide === gangster.id ? 'rotate-y-180' : ''
            }`}
            onMouseEnter={() => setPausedSlide(gangster.id)}
            onMouseLeave={() => setPausedSlide(null)}
          >
            <div className='absolute inset-0 w-full h-full backface-hidden transition-transform duration-600 bg-gray-100'>
              <div className='relative w-full h-full'>
                <Image
                  src={gangster.image}
                  alt={gangster.name}
                  fill
                  sizes='(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  style={{ objectFit: 'cover' }}
                  onError={(e) =>
                    console.error(`Error loading image: ${gangster.image}`, e)
                  }
                />
              </div>
            </div>
            <div className='absolute inset-0 w-full h-full backface-hidden transition-transform duration-600 bg-white p-5 flex flex-col justify-center rotate-y-180'>
              <h3 className='text-2xl font-bold mb-2'>{gangster.name}</h3>
              <p className='text-lg mb-2'>{gangster.role}</p>
              <p className='text-sm'>{gangster.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default GangsterSlider;
