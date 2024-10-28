import React from "react";
import icon from "../../public/images/product10.png";
import proEnterpriseicon1 from "../../public/images/proEnterpriseicon1.svg";
import proEnterpriseicon2 from "../../public/images/proEnterpriseicon2.svg";
import proEnterpriseicon3 from "../../public/images/proEnterpriseicon3.svg";
import proEnterpriseicon4 from "../../public/images/proEnterpriseicon4.svg";
import proEnterpriseicon5 from "../../public/images/proEnterpriseicon5.svg";
import proEnterpriseicon6 from "../../public/images/proEnterpriseicon6.svg";

import aws from "../../public/images/aws.svg";
import intel from "../../public/images/intel.svg";
import amd from "../../public/images/amd.svg";
import nvidia from "../../public/images/nvidia.svg";

import Image from "next/image";

const Card = ({ item }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 md:gap-4 justify-center md:justify-start items-center md:items-start align-top bg-[background: #ECEFF2]">
        <Image
          src={item.image}
          alt="product hero"
          priority
          width={38}
          height={27}
          className="object-cover"
        />

        <h3 className="text-[19px]  md:text-[22px] font-semibold text-center md:text-start leading-tight font-proxima-nova">
          {item.title}
        </h3>
        <span className="text-[16px] font-[400]  md:text-[18px]   text-center md:text-start font-proxima-nova leading-6">
          {item.content}
        </span>
        {item?.environments && item.environments?.length > 0 && (
          <div className="text-[16px] md:text-[18px] font-[400]  flex-row gap-1 flex">
            <span>Environments:</span>

            <div className="flex flex-row flex-wrap gap-x-1">
              {item.environments.map((env, i) => (
                <div key={env.id || i} className="flex flex-row gap-1">
                  {env.title && env.title !== "" && <span>{env.title}</span>}
                  {env.icon && env.icon !== null && (
                    <Image
                      src={env.icon}
                      alt="environment image"
                      priority
                      width={60}
                      height={60}
                    />
                  )}

                  {i !== item.environments.length - 1 && <span>|</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {item?.supportedAccelerators &&
          item.supportedAccelerators?.length > 0 && (
            <div className="text-[16px] md:text-[18px] font-[400]  flex-row gap-1 flex">
              <span>Supported GPU accelerators:</span>

              <div className="flex flex-row flex-wrap gap-x-2">
                {item.supportedAccelerators.map((acc, i) => (
                  // <div  className="flex flex-row gap-1">
                  <Image
                    key={i}
                    src={acc}
                    alt="Supported accelerator image"
                    priority
                    width={30}
                    height={30}
                  />
                  // </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </>
  );
};

const Enterprise = () => {
  const arr = [
    {
      id: 1,
      title: "Autonomous Decisions & Actions",
      content:
        "Autonomously manage a system of models (LLMs, non-LLMs, and customer models), optimizing resources to deliver tangible outcomes with accuracy and precision.",
      image: proEnterpriseicon1,
      environments: [],
      supportedAccelerators: [],
      order: 1,
    },
    {
      id: 2,
      title: "Automated Data Intelligence",
      content:
        "Get richer semantic understanding and uncover hidden relationships in your data within minutes.",
      image: proEnterpriseicon2,
      environments: [],
      supportedAccelerators: [],
      order: 4,
    },
    {
      id: 3,
      title: "Growing Library of Specialized Models",
      content:
        "Obtain improved precision and relevance with industry knowledge encoded into Articul8's library of domain-specific models and Task-specific models.",
      image: proEnterpriseicon3,
      environments: [],
      supportedAccelerators: [],
      order: 2,
    },
    {
      id: 4,
      title: "Observability, Traceability & Auditability at Every Step",
      content:
        "Get full visibility into decisions and actions, revealing the underlying logic and metrics in every step, delivering assurance in generated outcomes.",
      image: proEnterpriseicon4,
      environments: [],
      supportedAccelerators: [],
      order: 5,
    },
    {
      id: 5,
      title: "Deploy Anywhere Securely",
      content:
        "Deploy the Articul8 platform with your data in your security perimeter. Articul8 is agnostic to hosting infrastructure and accelerators, offering flexibility.",
      image: proEnterpriseicon5,
      environments: [
        {
          id: 1,
          title: "Cloud",
          icon: aws,
        },
        {
          id: 2,
          title: "On-prem",
          icon: null,
        },
        {
          id: 3,
          title: "Hybrid",
          icon: null,
        },
        {
          id: 4,
          title: "Air-gapped",
          icon: null,
        },
      ],

      supportedAccelerators: [nvidia, intel, amd],
      order: 3,
    },
    {
      id: 6,
      title: "Engineered for Regulated Industries",
      content:
        "Our products are built ground-up to meet the highest standards of compliance, data security, privacy and performance for regulated industries such as Finance, Healthcare and Government.",
      image: proEnterpriseicon6,
      environments: [],
      supportedAccelerators: [],
      order: 6,
    },
  ];

  return (
    <>
      <div className="w-full bg-white pt-16 pb-10   flex justify-center items-center bg-[background: #ECEFF2]">
        <div className="container mx-auto px-4 sm:px-6  flex flex-col justify-center items-center gap-4 md:gap-10">
          {/* top */}
          <div className="w-full md:w-[85%] flex flex-col justify-center align-middle">
            <h2 className=" font-space-grotesk  text-[28px] lg:text-[50px] md:text-3xl font-bold  text-center leading-[36px] md:leading-10 lg:leading-[4rem]">
              Articul8 AI – the enterprise Generative AI (GenAI) platform that
              just works.
            </h2>
            {/* <h2 className="lg:md:text-[50px] md:text-3xl sm:text-2xl font-bold text-center">
            AI (GenAI) platform that works.
            </h2> */}
          </div>
          {/* middle */}
          <div className="w-full flex justify-center">
            <Image
              src={icon}
              alt="product hero"
              className="mb-4"
              style={{ width: "100%" }}
            />
          </div>
          {/* bottom */}
          <div className="w-full flex justify-center">
            <div className="w-[80%] flex flex-row flex-wrap justify-between gap-y-6 ">
              {arr.map(
                (item, i) => (
                  // i !== arr.length - 1 ? (
                  <div
                    key={item?.id || i}
                    className={`md:w-[48%] md:order-none order-${item.order}`}
                  >
                    <Card item={item} />
                  </div>
                )
                // style={{ order: item.order }}
                // ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprise;
