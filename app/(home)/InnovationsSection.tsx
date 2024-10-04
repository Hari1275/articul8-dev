'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const InnovationItem = ({
  icon,
  selectedIcon,
  title,
  isSelected = false,
  onClick,
}: {
  icon: string;
  selectedIcon: string;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
}) => (
  <div
    className={`flex items-center py-6 px-6 ${
      isSelected ? 'bg-[#1130FF] rounded-sm' : 'border-b border-gray-200'
    } cursor-pointer transition-all duration-300 `}
    onClick={onClick}
  >
    <Image
      src={isSelected ? selectedIcon : icon}
      alt={title}
      width={24}
      height={24}
      priority
      className={`mr-4 ${isSelected ? '' : ''}`}
    />
    <p
      className={`text-lg font-medium ${
        isSelected ? 'text-white font-bold' : 'text-gray-800'
      }`}
    >
      {title}
    </p>
  </div>
);

const ProductCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className='border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0'>
    <div className='flex items-center mb-4'>
      <Image
        src={icon}
        alt={title}
        width={24}
        height={24}
        className='mr-3'
        priority
      />
      <p className='text-xl font-semibold text-gray-800'>{title}</p>
    </div>
    <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
  </div>
);

const innovationData = [
  {
    icon: '/images/icons/data.svg',
    title: 'Data',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/data.svg',
       
        title: 'TruData',
        description:
          'Sift is a powerful tool that creates high-quality datasets for AI model training, resulting in more accurate and efficient AI solutions.',
      },
      {
        icon: '/images/icons/data.svg',
        title: 'DataPrep',
        description:
          'Streamline your data preparation process with our advanced DataPrep tool, ensuring your AI models have the best input possible.',
      },
      {
        icon: '/images/icons/data.svg',
        title: 'DataInsights',
        description:
          'Gain valuable insights from your data with our DataInsights tool, uncovering hidden patterns and trends.',
      },
    ],
  },
  {
    icon: '/images/icons/embedding.svg',
    title: 'Embedding and Recovery',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/embedding.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/embedding.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/embedding.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/model.svg',
    title: 'Advancing Existing Models Architecture',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/model.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/model.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/model.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/agent.svg',
    title: 'New Models and System Architecture ',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/agent.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/library.svg',
    title: 'A8 Library of Domain & Task',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/library.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/library.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/library.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/scoring.svg',
    title: 'Autonomous Multi-Agent Decisions & Actions',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/scoring.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/scoring.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/scoring.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
  {
    icon: '/images/icons/system.svg',
    title: 'Scoring and  Evaluation',
    selectedIcon:'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/system.svg',
        title: 'Retrain',
        description:
          'Retrain is a toolkit for creating specialized datasets that evaluate and enhance AI models.',
      },
      {
        icon: '/images/icons/system.svg',
        title: 'EmbedMaster',
        description:
          'Create powerful embeddings for your AI models with EmbedMaster, improving performance across various tasks.',
      },
      {
        icon: '/images/icons/system.svg',
        title: 'RecoveryTool',
        description:
          'Recover and reconstruct data with our advanced RecoveryTool, ensuring data integrity and completeness.',
      },
    ],
  },
];

const InnovationsSection = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleInnovationClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedInnovation(index);
      setIsTransitioning(false);
    }, 300); 
  };

  return (
    <section className='py-20 px-4 bg-[#F2F7FF]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-16 text-center leading-tight'>
          <span className='block mb-2'>
            There are{' '}
            <span className='text-pink-500'>groundbreaking innovations</span>
          </span>
          <span className='block'>behind the magic.</span>
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-10'>
          <div className='space-y-2'>
            {innovationData.map((item, index) => (
              <InnovationItem
                key={index}
                icon={item.icon}
                selectedIcon={item.selectedIcon}
                title={item.title}
                isSelected={index === selectedInnovation}
                onClick={() => handleInnovationClick(index)}
              />
            ))}
          </div>
          <div className='h-[500px] overflow-y-auto relative'>
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {innovationData[selectedInnovation].products.map(
                (product, index) => (
                  <ProductCard
                    key={index}
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;
