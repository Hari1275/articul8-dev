'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const InnovationItem = ({
  icon,
  title,
  isSelected = false,
  onClick,
}: {
  icon: string;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
}) => (
  <div
    className={`flex items-center py-4 px-4 ${
      isSelected ? 'bg-blue-600 rounded-lg' : 'border-b border-gray-200'
    } cursor-pointer transition-all duration-300`}
    onClick={onClick}
  >
    <Image
      src={icon}
      alt={title}
      width={24}
      height={24}
      priority
      className={`mr-4 ${isSelected ? 'filter brightness-0 invert' : ''}`}
    />
    <h3
      className={`text-lg font-medium ${
        isSelected ? 'text-white' : 'text-gray-800'
      }`}
    >
      {title}
    </h3>
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
      <h3 className='text-xl font-semibold text-gray-800'>{title}</h3>
    </div>
    <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>
  </div>
);

const innovationData = [
  {
    icon: '/images/icons/data.svg',
    title: 'Data',
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

  return (
    <section className='py-20 px-4 bg-[#F8FAFC]'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-16 text-center leading-tight'>
          <span className='block mb-2'>
            There are{' '}
            <span className='text-pink-500'>groundbreaking innovations</span>
          </span>
          <span className='block'>behind the magic.</span>
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='space-y-2'>
            {innovationData.map((item, index) => (
              <InnovationItem
                key={index}
                icon={item.icon}
                title={item.title}
                isSelected={index === selectedInnovation}
                onClick={() => setSelectedInnovation(index)}
              />
            ))}
          </div>
          <div>
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
    </section>
  );
};

export default InnovationsSection;
