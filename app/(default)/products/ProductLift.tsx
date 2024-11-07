"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { BsFillSquareFill, BsCheckLg } from "react-icons/bs";
import "../../../styles/globals.css";
import Link from "next/link";

import lineFrame1 from "../../../public/images/lineFrame1.svg";
import lineFrame2 from "../../../public/images/lineFrame2.svg";

import smallLineFrame1 from "../../../public/images/lineFrameSmall1.svg";
import smallLineFrame2 from "../../../public/images/lineFrameSmall2.svg";

import ProductModal from "../../../components/ProductPageModal";
import Modal from "../../../components/Modal";

const Card = ({ item, onModalOpen }) => {
  return (
    <>
      <div className="w-full bg-[#F2F7FF] py-6 md:py-8 pl-3 pr-3 md:pl-6 md:pr-6 flex flex-col gap-10   productLiftCard rounded-[16px] border-2  md:border-none  transition-all ease-linear duration-400 md:hover:scale-y-[1.05] md:hover:-translate-y-1">
        {/* top */}
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start gap-y-5 md:min-h-[265px] xl:min-h-[240px] 2xl:min-h-[215px]">
          <h3 className="font-proxima-nova text-[28px] font-bold text-center md:text-start leading-none">
            {item?.title}
          </h3>
          <span className="font-proxima-nova text-[16px] md:text-[20px] font-[400] leading-tight text-center md:text-start">
            {item?.subTitle}
          </span>
          <div className="flex flex-col justify-center items-center md:items-start md:justify-start  gap-3 w-full">
            <button
              className="bg-[#0231FF] text-[#E6E9F5] py-[14px] px-6 rounded-[3px] font-proxima-nova text-[18px] md:text-[20px] font-[700] "
              onClick={() => onModalOpen(item.modalName)}
            >
              {/* <Link href={item?.buttonLink || "/"}>{item?.button}</Link> */}
              {item?.button}
            </button>
            {item?.accessContent !== "" && (
              <div className="font-proxima-nova text-[18px] font-[600]">
                {item.accessContent}
              </div>
            )}
          </div>
        </div>
        {/* middle */}
        {/* <div className="border-[1px] mt-2"></div> */}

        {/* bottom */}
        <div className="flex flex-col gap-5 border-t-[1px] border-[#E6E6E6] pt-6">
          <h3 className="font-proxima-nova text-[18px] md:text-[22px] font-[600] text-[blue] leading-tight">
            Key Features
          </h3>
          <div className="flex flex-col gap-2">
            {item?.featuresTitle !== "" && (
              <h3 className="font-proxima-nova text-[18px] md:text-[18px] leading-tight font-[600] md:pr-4 leading-5">
                {item?.featuresTitle}
              </h3>
            )}

            <div className="flex flex-col gap-y-[12px] pl-0">
              {item.features?.length > 0 &&
                item.features.map((feature, i) => (
                  <div
                    key={feature.title || i}
                    className="flex flex-row gap-3 font-proxima-nova text-[16px] md:text-[18px] font-[600] leading-tight"
                  >
                    <div
                      className="rounded-full bg-[#E8EDFB] flex justify-center align-middle p-1"
                      style={{ height: "max-content" }}
                    >
                      {/* <Image
                        src={mainPoint}
                        alt="Articul8 Logo"
                        width={12}
                        priority
                        height={12}
                      /> */}
                      <BsCheckLg color="blue" className="w-3 h-3" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] md:text-[18px] font-semibold leading-[20px]">
                        {feature?.title}
                      </span>

                      <div className="mt-1 flex flex-col gap-y-3">
                        {feature?.points &&
                          feature?.points?.length > 0 &&
                          feature?.points.map((point, i) => (
                            <div
                              key={feature.point || i}
                              className="flex flex-col gap-4"
                            >
                              <div className="flex flex-row text-start gap-2 ">
                                <div
                                  className=" flex justify-center align-middle p-1"
                                  style={{ height: "max-content" }}
                                >
                                  <BsFillSquareFill
                                    color="blue"
                                    className="w-2 h-2"
                                  />
                                </div>
                                <span className="font-proxima-nova text-[14px] md:text-[18px] font-[400] leading-tight  text-start">
                                  {point}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductLift = () => {
  const [tab, setTab] = useState("A8 Essential");
  const [activeModal, setActiveModal] = useState("");
  const handleModalOpen = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal("");

  const cardsArray = [
    {
      id: 1,
      title: "A8 Essential",
      subTitle:
        "The essential GenAI Experience with your data, delivering outcomes from  Day 1.",
      button: "Start Articul8’ing",
      buttonLink: "",
      accessContent: "Free 30-day access.",
      featuresTitle: "",
      modalName: "ProductModal",
      features: [
        {
          title: "ModelMesh™",
          points: [
            "Automated data intelligence",
            "Autonomous model selection",
            "Autonomous model orchestration",
            "Context, response, model & system-wide scoring",
          ],
        },
        {
          title: "Multimodal",
        },
        {
          title: "Ready to use Web-UI",
        },
        {
          title: "A8 Hosted",
        },
      ],
    },

    {
      id: 2,
      title: "A8 Enterprise",
      subTitle:
        "Build resilient enterprise GenAI applications and derive ROI within 6 weeks.",
      button: "Contact Sales",
      buttonLink: "",
      accessContent: "",
      featuresTitle: "Everything in A8 Essential at enterprise-scale and:",
      modalName: "OtherModal",
      features: [
        {
          title:
            "Deployed on the infrastructure of your choice, with auto-scaling",
        },
        {
          title: "Team collaboration",
        },
        {
          title: "Bring your own models",
        },
        {
          title: "Customizable decisions, actions scoring & content output",
        },
        {
          title: "KPI driven ModelMesh™ optimization",
        },
        {
          title: "Application APIs & data connectors",
        },
        {
          title: "Batch processing",
        },
      ],
    },
    {
      id: 3,
      title: "A8 Expert",
      subTitle:
        "Build expert-level GenAI applications that encode your enterprise domain expertise.",
      button: "Contact Sales",
      buttonLink: "",
      accessContent: "",
      featuresTitle: "Everything in A8 Enterprise and:",
      modalName: "OtherModal",

      features: [
        {
          title: "Training, fine-tuning APIs",
        },
        {
          title:
            "Automated data labeling, processing and generation for fine-tuning",
        },
        {
          title: "Ability to extend A8 specialized models for your enterprise",
        },
        {
          title: "Automated training incorporating expert / human feedback.",
        },
        {
          title: "Enterprise-specific content output",
        },
        {
          title: "Streaming data support",
        },
      ],
    },
  ];
  const [cardItem, setCardItem] = useState(cardsArray[0]);
  const tabFun = (tab, i) => {
    setTab(tab);
    setCardItem(cardsArray[i]);
  };

  return (
    <>
      <div className="w-full bg-[#F2F7FF]  md:bg-white pt-0 md:pt-10 pb-0 md:pb-0 flex flex-col md:gap-16 gap-8 justify-center items-center bg-[background: #ECEFF2]">
        {/* top patti */}

        <div className="w-full flex flex-row justify-end gap-20 md:gap-28 mb-5 md:mb-0">
          <div className="flex flex-row justify-end gap-0">
            <Image
              src={lineFrame1}
              alt="pink"
              priority
              height={60}
              className="rounded-sm object-cover w-full hidden md:flex"
            />
            <Image
              src={smallLineFrame1}
              alt="pink"
              priority
              height={20}
              className="rounded-sm object-cover w-full md:hidden flex"
            />
          </div>
        </div>

        {/* 
        <div className="w-full flex    mb-5 md:mb-0">
      
        </div> */}
        {/* top */}
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="font-space-grotesk lg:text-[46px] md:text-3xl text-3xl font-bold text-center">
            Our products do the <span className="  text-[#FA05C3]">heavy lifting</span> for you.


          </h3>
        </div>

        {/* tabs */}

        <div className="border-b-2 w-[90%] block md:hidden container mx-auto px-4 sm:px-6">
          <div className="flex flex-row justify-between">
            <span
              className="p-2  cursor-pointer font-proxima-nova font-[700] text-[16px]"
              style={{
                backgroundColor: tab === "A8 Essential" ? "white" : "",
                color: tab === "A8 Essential" ? "blue" : "",
              }}
              onClick={() => tabFun("A8 Essential", 0)}
            >
              A8 Essential
            </span>
            <span
              className="p-2  cursor-pointer font-proxima-nova font-[700] text-[16px]"
              style={{
                backgroundColor: tab === "A8 Enterprise" ? "white" : "",
                color: tab === "A8 Enterprise" ? "blue" : "",
              }}
              onClick={() => tabFun("A8 Enterprise", 1)}
            >
              A8 Enterprise
            </span>
            <span
              className="p-2  cursor-pointer font-proxima-nova font-[700] text-[16px]"
              style={{
                backgroundColor: tab === "A8 Expert" ? "white" : "",
                color: tab === "A8 Expert" ? "blue" : "",
              }}
              onClick={() => tabFun("A8 Expert", 2)}
            >
              A8 Expert
            </span>
          </div>
        </div>

        {/* bottom */}
        <div className="w-full flex justify-center items-center align-middle">
          {/* big screen */}
          <div className="hidden md:flex  w-[81%] md:gap-y-3  flex-row flex-wrap justify-between  rounded-md md:mt-3">
            {cardsArray.map((item, i) => (
              <div
                key={item?.id || i}
                className="lg:w-[32.9%] md:w-[49.4%] w-full  flex"
              >
                <Card item={item} onModalOpen={handleModalOpen} />
              </div>
            ))}
          </div>
          {/* small screen */}
          <div className="md:hidden w-[80%] flex flex-row flex-wrap justify-between  rounded-md">
            {/* {cardsArray.map((item, i) => ( */}
            <div className="lg:w-[32.9%] md:w-[49.4%] w-full  flex">
              <Card item={cardItem} onModalOpen={handleModalOpen} />
            </div>
            {/* ))} */}
          </div>
        </div>

        {/* bottom patti */}
        <div className="w-full flex flex-row justify-start gap-20 md:gap-28 mt-5 md:mt-0">
          <div className="flex flex-row gap-0">
            <Image
              src={lineFrame2}
              alt="pink"
              priority
              height={60}
              className="rounded-sm object-cover w-full hidden md:flex"
            />
            <Image
              src={smallLineFrame2}
              alt="pink"
              priority
              height={60}
              className="rounded-sm object-cover w-full md:hidden flex"
            />
          </div>
        </div>
        {activeModal === "ProductModal" && (
          <ProductModal isOpen onClose={closeModal} />
        )}
        {activeModal === "OtherModal" && <Modal isOpen onClose={closeModal} />}
      </div>
    </>
  );
};

export default ProductLift;
