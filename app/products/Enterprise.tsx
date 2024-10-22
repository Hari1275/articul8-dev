import React from "react";
import icon from "../../public/images/product2.svg";
import proEnterpriseicon1 from "../../public/images/proEnterpriseicon1.svg";
import proEnterpriseicon2 from "../../public/images/proEnterpriseicon2.svg";
import proEnterpriseicon3 from "../../public/images/proEnterpriseicon3.svg";
import proEnterpriseicon4 from "../../public/images/proEnterpriseicon4.svg";
import proEnterpriseicon5 from "../../public/images/proEnterpriseicon5.svg";

import Image from "next/image";

const Card = ({ item }) => {
  return (
    <>
      <div className="w-full   flex flex-col gap-3 md:gap-4 justify-center md:justify-start items-center md:items-start align-top bg-[background: #ECEFF2]">
        <Image
          src={item.image}
          alt="product hero"
          priority
          width={38}
          height={27}
        />

        <h3 className="text-[20px]  md:text-lg font-semibold text-center md:text-start leading-tight font-proxima-nova">
          {item.title}
        </h3>
        <span className="text-[16px] font-[400]  md:text-[18px]   text-center md:text-start font-proxima-nova leading-6">
          {item.content}
        </span>
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
    },
    {
      id: 2,
      title: "Automated Data Intelligence",
      content:
        "Get richer semantic understanding and uncover hidden relationships in your data within minutes.",
      image: proEnterpriseicon2,
    },
    {
      id: 3,
      title: "Growing Library of Specialized Models",
      content:
        "Obtain improved precision and relevance with industry knowledge encoded into Articul8's library of Domain-specific models and Task-specific models.",
      image: proEnterpriseicon3,
    },
    {
      id: 4,
      title: "Observability, Traceability & Auditability at Every Step",
      content:
        "Get full visibility into decisions and actions, revealing the underlying logic and metrics in every step, delivering assurance in generated outcomes.",
      image: proEnterpriseicon4,
    },
    {
      id: 5,
      title: "Deploy anywhere securely",
      content:
        "Deploy Articul8 platform with your data in your security perimeter. Articul8 is agnostic to hosting infrastructure and accelerators, offering flexibility across cloud, on-prem, and air-gapped environments.",
      image: proEnterpriseicon5,
    },
  ];

  return (
    <>
      <div className="w-full bg-white pt-10 pb-10   flex justify-center items-center bg-[background: #ECEFF2]">
        <div className="container mx-auto px-4 sm:px-6 w-[92%]  flex flex-col justify-center items-center gap-4 md:gap-10">
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
            <div className="w-[78%] flex flex-row flex-wrap justify-between gap-y-6">
              {arr.map((item, i) => (
                <div key={item?.id || i} className="md:w-[48%]">
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprise;