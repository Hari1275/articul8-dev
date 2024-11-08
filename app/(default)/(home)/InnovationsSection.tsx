"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const InnovationItem = ({
  icon,
  selectedIcon,
  hoverIcon,
  title,
  isSelected = false,
  isHovered = false,
  hasActiveHover,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  icon: string;
  selectedIcon: string;
  hoverIcon: string;
  title: string;
  isSelected?: boolean;
  isHovered?: boolean;
  hasActiveHover?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const showBlueBackground = isHovered || (isSelected && !hasActiveHover);

  return (
    <div
      className={`flex items-center py-6 px-6 
        ${showBlueBackground ? "bg-[#1130FF]" : ""} 
        ${!showBlueBackground ? "border-b border-[#00000033]" : ""}
        cursor-pointer transition-all duration-300 rounded-sm`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={showBlueBackground ? selectedIcon : icon}
        alt={title}
        width={30}
        height={30}
        priority
        className="mr-4 transition-all duration-300"
      />
      <p
        className={`text-[30px] font-proxima-nova font-[700] xl:leading-[46.14px] sm:text-[22px] lg:text-[26px]
          ${showBlueBackground ? "text-white" : "text-black"}
          transition-all duration-300`}
      >
        {title}
      </p>
    </div>
  );
};

const ProductCard = ({
  icon,
  title,
  subTitle,
  description,
  isLast = false,
}: {
  icon: string;
  title: string;
  subTitle: string;
  description: string;
  isLast?: boolean;
}) => {
  return (
    <div
      className={`pb-6 mb-6 ${!isLast ? "border-b border-[#00000033]" : ""}`}
    >
      <div className="flex items-center mb-2">
        <Image
          src={icon}
          alt={title}
          width={18}
          height={18}
          className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] mr-3 md:mt-1"
          priority
        />
        <div>
          <p className="text-[18px] sm:text-[20px] sm:leading-[22px] font-proxima-nova font-[600] leading-[20px]  text-black">
            {title}
          </p>
        </div>
      </div>
      <p className="text[16px]  sm:text-[18px]   sm:leading-tight leading-tight font-proxima-nova font-[600]  text-[#1130FF] mt-1">
        {subTitle}
      </p>
      <p className="text-[14px] sm:text-[16px] sm:leading-tight pt-2 font-proxima-nova font-[400] leading-[18px] text-black">
        {description}
      </p>
    </div>
  );
};

const AccordionItem = ({
  icon,
  hoverIcon,
  title,
  isOpen,
  onClick,
  children,
}: {
  icon: string;
  hoverIcon: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${isOpen ? "bg-[#1130FF]" : ""}`}>
      <div
        className={`flex items-center justify-between py-4 px-4 cursor-pointer ${
          isOpen ? "text-white" : ""
        }`}
        onClick={onClick}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          <Image
            src={isOpen ? hoverIcon : isHovered ? hoverIcon : icon}
            alt={title}
            width={24}
            height={24}
            priority
            className="mr-3"
          />
          <p className="text-[18px] font-proxima-nova font-[700] leading-[22px]">
            {title}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"/images/icons/arrowdown.svg"}
            alt={isOpen ? "Close" : "Open"}
            width={14}
            height={14}
          />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-white p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const innovationData = [
  {
    icon: "/images/icons/data-intelligence.svg",
    title: "Data Intelligence",
    selectedIcon: "/images/icons/data-intelligence-selected.svg",
    hoverIcon: "/images/icons/data-intelligence-hover.svg",
    products: [
      {
        icon: "/images/icons/data-sculptor.svg",
        hoverIcon: "/images/icons/data-sculptor-hover.svg",
        selectedIcon: "/images/icons/data-sculptor-selected.svg",
        title: "DataSculptr™",
        subTitle:
          "Create highly curated datasets for building multimodal and domain-specific AI models.",
        description:
          "DataSculptr™ is a comprehensive suite of tools for data ingestion, annotation, curation, processing, and management. It enables efficient creation of high-quality datasets for pre-training, fine-tuning, and alignment of multimodal and domain-specific AI models.",
      },
      {
        icon: "/images/icons/data-craft.svg",
        hoverIcon: "/images/icons/data-craft-hover.svg",
        selectedIcon: "/images/icons/data-craft-selected.svg",
        title: "DataCraftr™",
        subTitle:
          "Create datasets for improving the performance of knowledge discovery and domain-specific models.",
        description:
          "DataCraftr™ is a customizable tool suite for crafting curated datasets to evaluate and enhance the performance of knowledge discovery and domain-specific AI models. It enables users to set criteria for guiding data collection and curation which results in comprehensive datasets that improve model accuracy while reducing biases and errors.",
      },
      {
        icon: "/images/icons/data-weavr.svg",
        hoverIcon: "/images/icons/data-weavr-hover.svg",
        selectedIcon: "/images/icons/data-weavr-selected.svg",
        title: "DataRel8r™",
        subTitle:
          "Identify shape, hidden patterns and relationships in very large, multi-modal datasets.",
        description:
          "DataRel8r™ is a cutting-edge tool suite for analyzing and representing relationships in complex, multimodal, large-scale datasets. It uncovers hidden patterns and non-linear relationships by utilizing advanced topological analysis, clustering, graph modeling, data visualization, and dimensionality reduction techniques.",
      },
    ],
  },
  {
    icon: "/images/icons/embedding-and-recovery.svg",
    title: "Embedding and Recovery",
    selectedIcon: "/images/icons/embedding-and-recovery-selected.svg",
    hoverIcon: "/images/icons/embedding-and-recovery-hover.svg",
    products: [
      {
        icon: "/images/icons/tru-embedr.svg",
        hoverIcon: "/images/icons/tru-embedr-hover.svg",
        selectedIcon: "/images/icons/tru-embedr-selected.svg",
        title: "TruEmbedr™",
        subTitle:
          "A family of high-performance embedding models for complex context analysis.",
        description:
          "TruEmbedr™ is a family of advanced text and image embedding models that leverages transformer-based architecture, self-supervised learning, and large-scale training data. It enables accurate discovery of meaningful relationships in large, unstructured and noisy datasets, even in the presence of errors and outliers.",
      },
      {
        icon: "/images/icons/hypr-rnkr.svg",
        hoverIcon: "/images/icons/hypr-rnkr-hover.svg",
        selectedIcon: "/images/icons/hypr-rnkr-selected.svg",
        title: "HyprRnkr™",
        subTitle:
          "A family of high-performance reranker models for multi-context relevance analysis.",
        description:
          "HyprRnkr™ is a family of leading-edge reranker models that leverages neural network architectures and Bayesian methods to measure the contextual relevance of content. These models enhance speed, accuracy and reliability of ambiguous and nuanced searches by understanding context, intent, and semantic relationships.",
      },
    ],
  },
  {
    icon: "/images/icons/modelmesh.svg",
    title: "Model and System Architecture",
    selectedIcon: "/images/icons/modelmesh-selected.svg",
    hoverIcon: "/images/icons/modelmesh-hover.svg",
    products: [
      {
        icon: "/images/icons/polyvrs.svg",
        hoverIcon: "/images/icons/polyvrs-hover.svg",
        selectedIcon: "/images/icons/polyvrs-selected.svg",
        title: "Polyvrs™",
        subTitle: "A family of multimodal and multilingual models.",
        description:
          "Polyvrs™ is a family of high-performance multimodal, multilingual models, developed using large-scale data, advanced architecture, and optimized training. Available in various sizes, they excel at complex tasks requiring strong reasoning and multi-data type understanding.",
      },
      {
        icon: "/images/icons/optimoe.svg",
        hoverIcon: "/images/icons/optimoe-hover.svg",
        selectedIcon: "/images/icons/optimoe-selected.svg",
        title: "OptiMoE™",
        subTitle: "A family of price-performant mixture-of-experts models.",
        description:
          "OptiMoE™ is a family of proprietary multimodal mixture of experts (MoE) models designed for advanced cognitive tasks, beyond basic pattern recognition or text generation. Using gating mechanisms, selective expert activation, sparse architecture, and proprietary optimizations, they achieve the benefits of large parameter models with a smaller computational footprint than traditional MoEs.",
      },
      {
        icon: "/images/icons/more.svg",
        hoverIcon: "/images/icons/more-hover.svg",
        selectedIcon: "/images/icons/more-selected.svg",
        title: "MREx™",
        subTitle:
          "Novel model architecture that integrates multiple domain specific experts.",
        description:
          "MREx™ (Mixture of Real Experts) is Articul8's proprietary architecture that leverages advanced probabilistic methods for modeling uncertainty in routing. Unlike traditional MoE architectures, MREx™ integrates multiple domain-specific models, into a single, highly performant model that adapts to a wide range of tasks and domains, without extensive retraining or fine-tuning.",
      },
    ],
  },
  {
    icon: "/images/icons/Autonomous-decisions-actions.svg",
    title: "Autonomous Decisions and Actions",
    selectedIcon: "/images/icons/autonomous-decisions-actions-selected.svg",
    hoverIcon: "/images/icons/autonomous-decisions-actions-hover.svg",
    products: [
      {
        icon: "/images/icons/modelmesh-1.svg",
        hoverIcon: "/images/icons/modelmesh-hover-1.svg",
        selectedIcon: "/images/icons/modelmesh-selected-1.svg",
        title: "ModelMesh™",
        subTitle:
          "An intelligent, highly scalable engine for autonomous decisions & actions.",
        description:
          "ModelMesh™ is Articul8's proprietary & game-changing technology with the intelligence to autonomously select and orchestrate the right set of data and models through a highly scalable network of decision and action nodes, without predefined orchestration or rules. ModelMesh enables high precision and accuracy for complex tasks through a highly parallelizable series of decision and actions by incorporating autonomous data validation, context evaluation model selection, orchestration, our scoring and guardrails. It also enables simultaneous optimization of multiple KPIs, while significantly reducing the number of human-in-the-loop decisions.",
      },
      {
        icon: "/images/icons/orchestr8r.svg",
        hoverIcon: "/images/icons/orchestr8r-hover.svg",
        selectedIcon: "/images/icons/orchestr8r-selected.svg",
        title: "Orchestr8r",
        subTitle:
          "An automated workflow orchestrator for large-scale deployments.",
        description:
          "Orchestr8r is a proprietary, automated workflow orchestrator built for high-demand workloads with exceptional accuracy and reliability. It is the orchestration backbone behind ModelMesh™. A result of muti-year research and development, this orchestrator enables highly concurrent, scalable, and reproducible workflows for petabyte-scale data processing, building complex analytics pipelines and to deploy a wide range of AI/ML models at scale.",
      },
      {
        icon: "/images/icons/decyzn.svg",
        hoverIcon: "/images/icons/decyzn-hover.svg",
        selectedIcon: "/images/icons/decyzn-selected.svg",
        title: "Decyzn™",
        subTitle: "Empowering precision in autonomous decisions.",
        description:
          "Decyzn™ is Articul8's family of proprietary decision support nodes and is a key technology enabling ModelMesh™. These autonomous nodes utilize machine learning, probabilistic methods, and advanced software to enable precise, automated decision-making for complex tasks. Decyzn™ allows ModelMesh™ to autonomously adapt workflows, select tools, detect issues and choose actions.",
      },
      {
        icon: "/images/icons/aczn.svg",
        hoverIcon: "/images/icons/aczn-hover.svg",
        selectedIcon: "/images/icons/aczn-selected.svg",
        title: "Aczn™",
        subTitle: "Autonomous actions for complex data analysis and analytics.",
        description:
          "Aczn™ is a family of ModelMesh action nodes that performs complex analyses, calculations and predictions on large multi-modal datasets with full traceability. It is capable of a wide range of advanced modeling and analytics, spanning from machine learning to cutting-edge probabilistic methods and reduced-order modeling.",
      },
      {
        icon: "/images/icons/apex.svg",
        hoverIcon: "/images/icons/apex-hover.svg",
        selectedIcon: "/images/icons/apex-selected.svg",
        title: "PanaSolv™",
        subTitle: "Precision for autonomous systems with global optimization.",
        description:
          "PanaSolv™ is Articul8's global optimization framework that efficiently explores and solves vast solution spaces with precision, scaling from small models to complex systems. It utilizes advanced algorithms, including deterministic methods, stochastic optimization, genetic algorithms, and particle swarm optimization, along with proprietary topology optimization techniques.",
      },
    ],
  },
  {
    icon: "/images/icons/scoring.svg",
    title: "Scoring and Evaluation",
    selectedIcon: "/images/icons/scoring-selected.svg",
    hoverIcon: "/images/icons/scoring-hover.svg",
    products: [
      {
        icon: "/images/icons/Evalu8r.svg",
        hoverIcon: "/images/icons/Evalu8r-hover.svg",
        selectedIcon: "/images/icons/Evalu8r-selected.svg",
        title: "LLM-IQ™",
        subTitle:
          "Framework for evaluating performance, reliability and trustworthiness of complex GenAI systems.",
        description:
          "LLM-IQ™ is a cutting-edge evaluation framework designed to comprehensively assess performance, reliability, and trustworthiness of complex enterprise GenAI systems. It offers a standardized testing and validation using a proprietary modular evaluation framework, evaluation metrics, and an analytics engine. LLM-IQ™  includes curated datasets and supports user-defined evaluation tasks. It is designed to evaluate complex inputs, data multi-modality, domain-specific knowledge and expertise, contextual understanding, explainability, robustness, and safety.",
      },
    ],
  },
  {
    icon: "/images/icons/Library.svg",
    title: "Articul8 Library of Specialized Models",
    selectedIcon: "/images/icons/Library-selected.svg",
    hoverIcon: "/images/icons/Library-hover.svg",
    products: [
      {
        icon: "/images/icons/savant.svg",
        hoverIcon: "/images/icons/savant-hover.svg",
        selectedIcon: "/images/icons/savant-selected.svg",
        title: "Xpertis™",
        subTitle: "Elevating GenAI proficiency with domain-specific LLMs.",
        description:
          "Xpertis™ is a family of Articul8 developed domain-specific large language models (LLMs) that are trained on extensive datasets tailored for specific industries. These models capture and codify nuanced expertise, making them significantly more proficient than general-purpose LLMs in producing accurate, relevant results for domain-specific tasks. By leveraging Xpertis' domain-specific foundation, enterprises can accelerate the development of their enterprise-specific models and avoid the challenges that come with fine-tuning general-purpose models.",
      },
      {
        icon: "/images/icons/acutask.svg",
        hoverIcon: "/images/icons/acutask-hover.svg",
        selectedIcon: "/images/icons/acutask-selected.svg",
        title: "AcuTask™",
        subTitle:
          "Task-specific multimodal models for autonomous decisioning and actioning.",
        description:
          "AcuTask™ is a family of multimodal LLMs that have been highly optimized for specific tasks. AcuTask™ powers many nodes within ModelMesh™ and delivers exceptional accuracy, efficiency, and reliability while balancing performance and cost. These models are rigorously tested and validated using Evalu8r, our proprietary evaluation framework.",
      },
      {
        icon: "/images/icons/bayesiQ.svg",
        hoverIcon: "/images/icons/bayesiQ-hover.svg",
        selectedIcon: "/images/icons/bayesiQ-selected.svg",
        title: "BayesiQ™",
        subTitle:
          "Bayesian and Probabilistic graph models for autonomous systems.",
        description:
          "BayesiQ™ is a suite of Bayesian and probabilistic graph models optimized for complex multi-model systems, enabling autonomous decisions and actions. Utilizing advanced sampling methods, temporal models, variational inference, and Markov chains, BayesiQ™ achieves exceptional computational efficiency and scalability through distributed computing and optimized computational workflows.",
      },
    ],
  },
];

const InnovationsSection = () => {
  const [selectedInnovation, setSelectedInnovation] = useState(0);
  const [hoveredInnovation, setHoveredInnovation] = useState<number | null>(
    null
  );
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const handleInnovationClick = (index: number) => {
    setSelectedInnovation(index);
    setHoveredInnovation(null);
  };

  const handleInnovationHover = (index: number) => {
    setHoveredInnovation(index);
    setSelectedInnovation(index);
  };

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const displayedInnovation =
    hoveredInnovation !== null ? hoveredInnovation : selectedInnovation;

  return (
    <section className="sm:py-16 py-8 bg-[#F2F7FF]">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="hidden xl:block font-space-grotesk text-[26px] sm:text-[54px] font-bold mb-16 sm:leading-[84px] text-center leading-tight">
          <span className="block mb-2">
            There are{" "}
            <span className="text-[#FF00C7]">groundbreaking innovations</span>
          </span>
          <span className="block">behind the magic.</span>
        </h2>

        <h2 className="xl:hidden font-space-grotesk text-[26px] lg:text-[54px]  lg:leading-[84px] lg:mb-16 font-[700] mb-8 text-center leading-[38px]">
          There are{" "}
          <span className="text-[#FF00C7] inline">
            groundbreaking innovations
          </span>{" "}
          behind the magic.
        </h2>

        {/* Desktop view */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-10 gap-12 sm:px-0">
          <div className="lg:col-span-4">
            {innovationData.map((item, index) => (
              <InnovationItem
                key={index}
                icon={item.icon || ""}
                selectedIcon={item.selectedIcon || ""}
                hoverIcon={item.hoverIcon || ""}
                title={item.title}
                isSelected={index === selectedInnovation}
                isHovered={index === hoveredInnovation}
                hasActiveHover={hoveredInnovation !== null}
                onClick={() => handleInnovationClick(index)}
                onMouseEnter={() => handleInnovationHover(index)}
                onMouseLeave={() => {}}
              />
            ))}
          </div>
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayedInnovation}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {innovationData[displayedInnovation].products.map(
                  (product, index) => (
                    <ProductCard
                      key={index}
                      icon={product.icon}
                      title={product.title}
                      subTitle={product.subTitle}
                      description={product.description}
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden">
          {innovationData.map((item, index) => (
            <AccordionItem
              key={index}
              icon={item.icon ?? ""}
              hoverIcon={item.hoverIcon ?? ""}
              title={item.title}
              isOpen={openAccordion === index}
              onClick={() => handleAccordionClick(index)}
            >
              {item.products.map((product, productIndex) => (
                <ProductCard
                  key={productIndex}
                  icon={product.icon}
                  title={product.title}
                  subTitle={product.subTitle}
                  description={product.description}
                  isLast={productIndex === item.products.length - 1}
                />
              ))}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;
