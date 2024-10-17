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
      isSelected ? 'bg-[#1130FF] rounded-sm' : 'border-b border-[#00000033]'
    } cursor-pointer transition-all duration-300 `}
    onClick={onClick}
  >
    <Image
      src={isSelected ? selectedIcon : icon}
      alt={title}
      width={26}
      height={26}
      priority
      className={`mr-4 ${isSelected ? '' : ''}`}
    />
    <p
      className={` text-[19px] font-proxima-nova font-[700] leading-[23.14px] sm:text-lg font-medium ${
        isSelected ? 'text-white font-[700]' : 'text-black'
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
  <div className='border-b border-[#00000033] pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0'>
    <div className='flex items-center mb-4'>
      <Image
        src={icon}
        alt={title}
        width={26}
        height={26}
        className='mr-3'
        priority
      />
      <p className='text-[23px] font-proxima-nova font-[600] leading-[23px] sm:text-xl font-semibold text-black'>{title}</p>
    </div>
    <p className='text-[16px] font-proxima-nova font-[400] leading-[19.49px]    sm:text-sm text-black leading-relaxed'>{description}</p>
  </div>
);

const innovationData = [
  {
    icon: '/images/icons/data.svg',
    title: 'Data Intelligence',
    selectedIcon: 'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/data.svg',
        title: 'DataSculptr (formerly Antelope)',
        subTitle: 'Create highly curated datasets for building multimodal and domain-specific AI models.',
        description: 'DataSculptr is a comprehensive suite of tools for data ingestion, annotation, curation, processing, and management. It enables efficient creation of high-quality datasets for pre-training, fine-tuning, and alignment of multimodal and domain-specific AI models.',
      },
      {
        icon: '/images/icons/data.svg',
        title: 'DataCraftr (formerly Socatic)',
        subTitle: 'Create datasets for improving the performance of knowledge discovery and domain-specific models.',
        description: 'DataCraftr is a customizable tool suite for crafting curated datasets to evaluate and enhance the performance of knowledge discovery and domain-specific AI models. It enables users to set criteria for guiding data collection and curation which results in comprehensive datasets that improve model accuracy while reducing biases and errors.',
      },
      {
        icon: '/images/icons/data.svg',
        title: 'DataWeavr (Formerly Spider Web)',
        subTitle: 'Identify shape, hidden patterns and relationships in very large, multi-modal datasets',
        description: 'DataWeavr is a cutting-edge tool suite for analyzing and representing relationships in complex, multimodal, large-scale datasets. It uncovers hidden patterns and non-linear relationships by utilizing advanced topological analysis, clustering, graph modeling, data visualization, and dimensionality reduction techniques.',
      },
    ],
  },
  {
    icon: '/images/icons/embedding.svg',
    title: 'Embedding and Recovery',
    selectedIcon: 'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/embedding.svg',
        title: 'TruEmbedr (formerly RedFox)',
        subTitle: 'A family of high-performance embedding models for complex context analysis.',
        description: 'TruEmbedr is a family of advanced text and image embedding models that leverages transformer-based architecture, self-supervised learning, and large-scale training data. It enables accurate discovery of meaningful relationships in large, unstructured and noisy datasets, even in the presence of errors and outliers.',
      },
      {
        icon: '/images/icons/embedding.svg',
        title: 'HyprRnkr (formerly TimberWolf)',
        subTitle: 'A family of high-performance reranker models for multi-context relevance analysis.',
        description: 'HyprRnkr is a family of leading-edge reranker models that leverages neural network architectures and Bayesian methods to measure the contextual relevance of content. These models enhance speed, accuracy and reliability of ambiguous and nuanced searches by understanding context, intent, and semantic relationships.',
      },
    ],
  },
  {
    icon: '/images/icons/model.svg',
    title: 'Model and System Architecture',
    selectedIcon: 'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/model.svg',
        title: 'Polyvrs (formerly Black Panther)',
        subTitle: 'A family of multimodal and multilingual models.',
        description: 'Polyvrs is a family of high-performance multimodal, multilingual models, developed using large-scale data, advanced architecture, and optimized training. Available in various sizes, they excel at complex tasks requiring strong reasoning and multi-data type understanding.',
      },
      {
        icon: '/images/icons/model.svg',
        title: 'OptiMoE (formerly Bengal Tiger)',
        subTitle: 'A family of price-performant mixture-of-experts models.',
        description: 'OptiMoE is a family of proprietary multimodal mixture of experts (MoE) models designed for advanced cognitive tasks, beyond basic pattern recognition or text generation. Using gating mechanisms, selective expert activation, sparse architecture, and proprietary optimizations, they achieve the benefits of large parameter models with a smaller computational footprint than traditional MoEs.',
      },
      {
        icon: '/images/icons/model.svg',
        title: 'MoRE',
        subTitle: 'Novel model architecture that integrates multiple domain specific experts.',
        description: 'MoRE (Mixture of Real Experts) is Articul8\'s proprietary architecture that leverages advanced probabilistic methods for modeling uncertainty in routing. Unlike traditional MoE architectures, MoRE integrates multiple domain-specific models, into a single, highly performant model that adapts to a wide range of tasks and domains, without extensive retraining or fine-tuning.',
      },
    ],
  },
  {
    icon: '/images/icons/agent.svg',
    title: 'Autonomous Decisions and Actions',
    selectedIcon: 'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/agent.svg',
        title: 'ModelMesh™ (formerly Kongfuzi)',
        subTitle: 'An intelligent, highly scalable engine for autonomous decisions & actions',
        description: 'ModelMesh™ is Articul8\'s proprietary & game-changing technology with the intelligence to autonomously select and orchestrate the right set of data and models through a highly scalable network of decision and action nodes, without predefined orchestration or rules. ModelMesh enables high precision and accuracy for complex tasks through a highly parallelizable series of decision and actions by incorporating autonomous data validation, context evaluation model selection, orchestration, our scoring and guardrails. It also enables simultaneous optimization of multiple KPIs, while significantly reducing the number of human-in-the-loop decisions.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'Orchestr8r (formerly Villa Lobos)',
        subTitle: 'An automated workflow orchestrator for large-scale deployments.',
        description: 'Orchestr8r is a proprietary, automated workflow orchestrator built for high-demand workloads with exceptional accuracy and reliability. It is the orchestration backbone behind ModelMesh™. A result of muti-year research and development, this orchestrator enables highly concurrent, scalable, and reproducible workflows for petabyte-scale data processing, building complex analytics pipelines and to deploy a wide range of AI/ML models at scale.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'Decyzn (formerly Valkyrie)',
        subTitle: 'Empowering precision in autonomous decisions.',
        description: 'Decyzn is Articul8\'s family of proprietary decision support nodes and is a key technology enabling ModelMesh™. These autonomous nodes utilize machine learning, probabilistic methods, and advanced software to enable precise, automated decision-making for complex tasks. Decyzn allows ModelMesh™ to autonomously adapt workflows, select tools, detect issues and choose actions.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'Aczn (formerly Satori)',
        subTitle: 'Autonomous actions for complex data analysis and analytics.',
        description: 'Aczn is a family of ModelMesh action nodes that performs complex analyses, calculations and predictions on large multi-modal datasets with full traceability. It is capable of a wide range of advanced modeling and analytics, spanning from machine learning to cutting-edge probabilistic methods and reduced-order modeling.',
      },
      {
        icon: '/images/icons/agent.svg',
        title: 'Apex (formerly Everest)',
        subTitle: 'Precision for autonomous systems with global optimization.',
        description: 'Apex is Articul8\'s global optimization framework that efficiently explores and solves vast solution spaces with precision, scaling from small models to complex systems. It utilizes advanced algorithms, including deterministic methods, stochastic optimization, genetic algorithms, and particle swarm optimization, along with proprietary topology optimization techniques.',
      },
    ],
  },
  {
    icon: '/images/icons/scoring.svg',
    title: 'Scoring and Evaluation',
    selectedIcon: 'images/icons/selected.svg',
    products: [
      {
        icon: '/images/icons/scoring.svg',
        title: 'Evalu8r (formerly Clawseau / LLMIQ)',
        subTitle: 'Framework for evaluating performance, reliability and trustworthiness of complex GenAI systems.',
        description: 'Evalu8r is a cutting-edge evaluation framework designed to comprehensively assess performance, reliability, and trustworthiness of complex enterprise GenAI systems. It offers a standardized testing and validation using a proprietary modular evaluation framework, evaluation metrics, and an analytics engine. Evalu8r includes curated datasets and supports user-defined evaluation tasks. It is designed to evaluate complex inputs, data multi-modality, domain-specific knowledge and expertise, contextual understanding, explainability, robustness, and safety.',
      },
    ],
  },
];

const InnovationsSection = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);

  const handleInnovationClick = (index: number) => {
    setSelectedInnovation(index);
  };

  return (
    <section className='sm:pt-20 pt-6 sm:py-20 px-4 bg-[#F2F7FF]'>
      <div className='container mx-auto px-4'>
        <h2 className='hidden sm:block font-space-grotesk text-[26px] sm:text-[56px] font-bold mb-16  sm:leading-[84px] text-center leading-tight'>
          <span className='block mb-2'>
            There are{' '}
            <span className='text-[#FF00C7]'>groundbreaking innovations</span>
          </span>
          <span className='block'>behind the magic.</span>
        </h2>

        <h2 className='sm:hidden font-space-grotesk text-[26px] font-[700] mb-16 text-center leading-[38px]'>
          There are{' '}
          <span className='text-[#FF00C7] inline'>groundbreaking innovations</span>{' '}
          behind the magic.
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 sm:px-10'>
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
          <div className='h-[500px] overflow-y-auto'>
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
