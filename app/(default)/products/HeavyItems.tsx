"use client";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import React from "react";
import {
  BsFillCheckCircleFill,
  BsFillSquareFill,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import ProductModal from "../../../components/ProductPageModal";
import Modal from "../../../components/Modal";

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div>{isOpen ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}</div>
);

const HeavyItems = () => {
  const [openItem, setOpenItem] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const productItems = [
    {
      id: 1,
      title: "Smart Interfaces",
      items: [
        {
          title: "Ready-to-use WebUI",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [],
        },
        {
          title: "Application APIs",
          essential: false,
          enterprise: true,
          expert: true,
          subItems: [],
        },
        {
          title: "Data Connectors",
          essential: false,
          enterprise: true,
          expert: true,
          subItems: [],
        },
        {
          title: "Training/Fine-tuning APIs",
          essential: false,
          enterprise: false,
          expert: true,
          subItems: [],
        },
      ],
      darkColor: "#D7FFF5",
      lightColor: "#EFFFFB",
      borderColor: "#78ebcec9",
    },
    {
      id: 2,
      title: "Autonomous Decisions & Actions",
      items: [
        {
          title: "Autonomous Model Selection",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title: "Library of models (LLMs & non-LLMs)",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title: "BYOM - Bring your own model (LLMs & non-LLMs)",
              essential: false,
              enterprise: true,
              expert: true,
            },
          ],
        },
        {
          title: "Autonomous Model Orchestration",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title: "Customizable decisioning & actioning",
              essential: false,
              enterprise: true,
              expert: true,
            },
            {
              title: "Bring your own decision & action logic",
              essential: false,
              enterprise: true,
              expert: true,
            },
          ],
        },
        {
          title: "Context, Response, Model & System-wide Scoring",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title: "Customizable scoring",
              essential: false,
              enterprise: true,
              expert: true,
            },
          ],
        },

        {
          title: "KPI driven ModelMesh™ Optimization",
          essential: false,
          enterprise: true,
          expert: true,
          subItems: [],
        },

        {
          title: "Library of Specialized Models",
          essential: false,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title: "Extend A8 specialized models for your enterprise ",
              essential: false,
              enterprise: false,
              expert: true,
            },
            {
              title: "Automated training incorporating expert/human feedback",
              essential: false,
              enterprise: false,
              expert: true,
            },
          ],
        },
        {
          title: "Content Output",
          essential: false,
          enterprise: false,
          expert: false,
          subItems: [
            {
              title: "Templatized Report Generation",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title: "Response Export (PPTx, DOCx)",
              essential: true,
              enterprise: true,
              expert: true,
            },

            {
              title: "BYOT - Bring your own export template",
              essential: false,
              enterprise: false,
              expert: true,
            },
            {
              title: "Batch processing & scheduling",
              essential: false,
              enterprise: true,
              expert: true,
            },
            {
              title: "Output modalities (text, tables, charts)",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title: "Audit reports",
              essential: false,
              enterprise: true,
              expert: true,
            },
            {
              title: "Customizable audit reports",
              essential: false,
              enterprise: false,
              expert: true,
            },
          ],
        },
      ],
      darkColor: "#FFEED9",
      lightColor: "#FFF5E9",
      borderColor: "rgb(235 174 98 / 89%)",
    },
    {
      id: 3,
      title: "Automated Data Intelligence",
      items: [
        {
          title: "Data ingestion",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title: "Bring your own data",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title: "No data limits",
              essential: false,
              enterprise: true,
              expert: true,
            },

            {
              title: "Input modalities (text, images, tables, charts)",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title:
                "Input data format (TXT, PPTx, DOCx, PDFs, JSON, CSV, HTML, XML, OCR)",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title: "Streaming data ingestion & processing",
              essential: false,
              enterprise: false,
              expert: true,
            },
          ],
        },
        {
          title: "Data Perception (Relationships, Shape, Understanding)",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title:
                "Automated data labeling & processing for training/fine-tuning",
              essential: false,
              enterprise: false,
              expert: true,
            },
            {
              title: "Synthetic data generation for training/fine-tuning",
              essential: false,
              enterprise: false,
              expert: true,
            },
          ],
        },
        {
          title: "Data Graph Generation",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [],
        },
      ],
      darkColor: "#EBECFF",
      lightColor: "#F5F5FF",
      borderColor: "#abaff4e6",
    },

    {
      id: 4,
      title: "Flexible Infrastructure Orchestration",
      items: [
        {
          title: "",
          essential: true,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title: "Infrastructure selection & optimization",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
            {
              title: "Auto-scaling",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
            {
              title: "Multi-accelerator support",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
          ],
        },
      ],

      darkColor: "#FFE9F8",
      lightColor: "#FFF2FB",
      borderColor: "",
    },

    {
      id: 5,
      title: "Deployment and User Access",
      items: [
        {
          title: "",
          essential: true,
          enterprise: false,
          expert: false,
          subItems: [
            {
              title: "A8 hosted",
              essential: true,
              enterprise: false,
              expert: false,
              subItems: [],
            },
            {
              title: "Deployed on your cloud infrastructure",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
            {
              title: "Deployed on your on-premises infrastructure",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },

            {
              title: "Hybrid deployment (part cloud, part on-premises)",
              essential: false,
              enterprise: false,
              expert: true,
              subItems: [],
            },
            {
              title: "High concurrency & low latency",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
            {
              title: "Team collaboration",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },

            {
              title: "Admin dashboard",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
            {
              title: "Enterprise defined rate-limiting",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
            {
              title: "Customer defined Role Based Access Control (RBAC)",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },
          ],
        },
      ],
      darkColor: "#EBEAEA",
      lightColor: "#F7F7F7",
      borderColor: "#D4D4D4",
    },
  ];
  const item1 = {
    id: 1,
    title: "A8 Essential",
    subTitle:
      "The essential GenAI Experience with your data, delivering outcomes from  Day 1.",
    button: "Start Articul8’ing",
    buttonLink: "",
    accessContent: "Free 1-month access.",
  };
  const item2 = {
    id: 2,
    title: "A8 Enterprise",
    subTitle:
      "Build resilient enterprise GenAI applications and derive ROI within 6 weeks.",
    button: "Contact Sales",
    buttonLink: "",
    accessContent: "",
  };
  const item3 = {
    id: 3,
    title: "A8 Expert",
    subTitle:
      "Build expert-level GenAI applications that encode your enterprise domain expertise.",
    button: "Contact Sales",
    buttonLink: "",
    accessContent: "",
  };

  return (
    <>
      <div className="pt-8 lg:mt-0 w-full bg-white  pb-[60px] flex flex-col  justify-center items-center relative">
        {/* top */}

        <div className="container  mx-auto px-4 sm:px-6 flex flex-row justify-center items-center sticky top-[40px] md:top-[61px] lg:top-[60px] z-[10] bg-white">
          <div className="w-[60%]  lg:w-[42%]    flex items-center"></div>

          <div className="w-[40%]   lg:w-[58%] flex flex-row justify-between">
            {/* md:border-r-[1px] */}
            <div className="w-1/3  lg:w-[33%] lg:items-start  flex items-end lg:bg-[#F2F7FF] lg:rounded-t-[12px] ">
              <div className="flex justify-center items-center align-middle h-[185px] w-full     lg:hidden text-center  border-l-[1px] border-r-[1px] lg:border-r-[0px] border-t-[1px] pb-1 pt-3">
                <div
                  className="h-full flex flex-col items-center    whitespace-nowrap  text-transform  font-proxima-nova font-[700] text-[20px] lg:text-[28px]"
                  style={{ height: "max-content" }}
                >
                  A8 Essential
                </div>
              </div>

              <div className="hidden lg:flex flex-col justify-center items-center  lg:px-4 lg:py-5   py-4 gap-2">
                <h3 className="font-proxima-nova font-[700] text-[20px]  lg:text-[28px] lg:text-center lg:min-h-[70px]  xl:min-h-max  lg:leading-8">
                  {item1?.title}
                </h3>
                <span className="font-proxima-nova font-[400] text-[14px] lg:text-[18px] text-center mb-6 lg:mb-3  2xl:text-[18px] leading-tight  lg:min-h-[140px]  xl:min-h-max 2xl:min-h-max">
                  {item1?.subTitle}
                </span>

                <button
                  className="bg-[#0231FF] text-white py-[10px] px-4 rounded-[4px] font-proxima-nova font-[700] text-[12px] lg:text-[18px]"
                  onClick={() => setIsProductModalOpen(true)}
                >
                  {/* <Link href={item1?.buttonLink || "/"}>{item1?.button}</Link> */}
                  {item1?.button}
                </button>

                {item1?.accessContent !== "" && (
                  <div className=" text-center font-proxima-nova font-[700] text-[12px] lg:text-[18px]">
                    {item1.accessContent}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/3 lg:w-[33%]  flex items-end lg:items-start lg:bg-[#F2F7FF] lg:rounded-t-[12px]">
              <div className="flex justify-center items-center align-middle h-[185px] w-full     lg:hidden text-center lg:border-l-[1px] border-l-[0px]  lg:border-r-[0px] border-r-[1px]    border-t-[1px] pb-3 pt-3">
                <div
                  className="h-full flex flex-col items-center    whitespace-nowrap  text-transform  font-proxima-nova font-[700] text-[20px]  lg:text-[28px] pt-2"
                  style={{ height: "max-content" }}
                >
                  A8 Enterprise
                </div>
              </div>

              <div className="hidden lg:flex flex-col justify-center items-center lg:px-4  lg:py-5 py-4 gap-2">
                <h3 className="font-proxima-nova font-[700] text-[20px]  lg:text-[28px] lg:text-center lg:min-h-[70px]  xl:min-h-max  lg:leading-8">
                  {item2?.title}
                </h3>
                <span className="lg:mb-3 font-proxima-nova font-[400] text-[14px]  text-center mb-6 lg:text-[18px]  2xl:text-[18px]  leading-tight lg:min-h-[140px]  xl:min-h-max 2xl:min-h-max ">
                  {item2?.subTitle}
                </span>

                <button
                  className="bg-[#0231FF] text-white py-[10px] px-4 rounded-[4px] font-proxima-nova font-[700] text-[12px] lg:text-[18px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  {/* <Link href={item2?.buttonLink || "/"}>{item2?.button}</Link> */}
                  {item2?.button}
                </button>

                {item2?.accessContent !== "" && (
                  <div className=" text-center font-proxima-nova font-[700] text-[12px] lg:text-[18px]">
                    {item2.accessContent}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/3 lg:w-[33%]  flex items-end lg:items-start lg:bg-[#F2F7FF] lg:rounded-t-[12px] ">
              <div className="flex justify-center items-center align-middle h-[185px] w-full     lg:hidden text-center border-r-[1px] lg:border-l-[1px] border-l-[0px] border-t-[1px] pt-9 pb-0">
                <div
                  className="h-full flex flex-col items-center    whitespace-nowrap  text-transform  font-proxima-nova font-[700] text-[20px] lg:text-[28px]"
                  style={{ height: "max-content" }}
                >
                  A8 Expert
                </div>
              </div>

              <div className="hidden lg:flex flex-col justify-center items-center  lg:px-4 lg:py-5   py-4 gap-2">
                <h3 className="font-proxima-nova font-[700] text-[20px]  lg:text-[28px] lg:text-center lg:min-h-[70px]  xl:min-h-max  lg:leading-8">
                  {item3?.title}
                </h3>
                <span className="font-proxima-nova lg:mb-4 2xl:mb-3 font-[400] text-[14px]  text-center mb-6 lg:text-[18px]   2xl:text-[18px]  leading-tight lg:min-h-[140px]  xl:min-h-max 2xl:min-h-max ">
                  {item3?.subTitle}
                </span>

                <button
                  className="bg-[#0231FF] text-white py-[10px] px-4 rounded-[4px] font-proxima-nova font-[700] text-[12px] lg:text-[18px]"
                  onClick={() => setIsModalOpen(true)}
                >
                  {/* <Link href={item3?.buttonLink || "/"}>{item3?.button}</Link> */}

                  {item3?.button}
                </button>

                {item3?.accessContent !== "" && (
                  <div className=" text-center font-proxima-nova font-[700] text-[12px] lg:text-[18px]">
                    {item3.accessContent}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* card */}
        {/* <div className="w-[90%] md:w-[82%]"> */}
        <div className="container  mx-auto px-4 sm:px-6 z-0">
          {productItems.map((item, index) => (
            <Disclosure
              key={index}
              defaultOpen={
                index === 0 ||
                index === 1 ||
                index === 2 ||
                index === 3 ||
                index === 4
              }
            >
              {({ open }) => (
                <div
                  className="rounded-sm overflow-hidden"
                  style={{ backgroundColor: item.darkColor }}
                >
                  <Disclosure.Button
                    className="flex items-center w-full text-left py-3 sm:py-4 px-3 sm:px-4 focus:outline-none"
                    onClick={() => setOpenItem(open ? -1 : index)}
                  >
                    <p className="font-proxima-nova font-[700] lg:text-[20px] flex-grow   text-[18px]">
                      {item.title}
                    </p>
                    <ToggleIcon
                      isOpen={open || (index === openItem && !open)}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-1 text-xs sm:text-sm">
                    <div
                      className="w-full"
                      style={{ backgroundColor: item.lightColor }}
                    >
                      {item?.items &&
                        item.items?.length > 0 &&
                        item.items.map((main, i) => (
                          <div
                            key={main.title || i}
                            className="flex flex-col"
                            style={{ borderColor: item.borderColor }}
                          >
                            {/* title */}

                            <div className="">
                              <div className="flex flex-row justify-center ">
                                {/* right */}

                                {main.title !== "" && (
                                  <div
                                    className="w-[60%]  lg:w-[42%] border-b-[1px] flex items-center "
                                    style={{ borderColor: item.borderColor }}
                                  >
                                    {/* border-r-[1px] */}
                                    <div className="font-proxima-nova font-[700] w-full text-[14px] lg:text-[18px] lg:leading-5 py-3 pl-2 lg:pl-5 items-center text-start">
                                      {main.title}
                                    </div>
                                  </div>
                                )}

                                {main.title !== "" && (
                                  <div className="w-[40%]  lg:w-[58%] flex flex-row justify-between">
                                    <div
                                      className="w-1/3  border-l-[1px] border-r-[1px] border-b-[1px]"
                                      style={{ borderColor: item.borderColor }}
                                    >
                                      <div className="w-full flex justify-center  items-center align-middle py-3">
                                        {main.essential && (
                                          <BsFillCheckCircleFill
                                            color="blue"
                                            className="w-[20px] h-[20px]"
                                          />
                                        )}
                                      </div>
                                    </div>

                                    <div
                                      className="w-1/3  border-r-[1px] lg:border-r-[0px]   border-b-[1px]"
                                      style={{ borderColor: item.borderColor }}
                                    >
                                      <div className="w-full flex justify-center  items-center align-middle py-3">
                                        {main.enterprise && (
                                          <BsFillCheckCircleFill
                                            color="blue"
                                            className="w-[20px] h-[20px]"
                                          />
                                        )}
                                      </div>
                                    </div>

                                    <div
                                      className="w-1/3 border-b-[1px] lg:border-l-[1px] border-l-[0px] "
                                      style={{ borderColor: item.borderColor }}
                                    >
                                      <div className="w-full flex justify-center  items-center align-middle py-3">
                                        {main.expert && (
                                          <BsFillCheckCircleFill
                                            color="blue"
                                            className="w-[20px] h-[20px]"
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* <div
                                  className="w-[60%] lg:w-[40%] lg:w-[42%] border-b-[1px]   flex items-center border-r-[1px]"
                                  style={{ borderColor: item.borderColor }}

                                >
                                  <div className="font-proxima-nova font-[700]   w-full  text-[14px]  lg:text-[15px]   py-3 pl-2 lg:pl-5  items-center text-start">
                                    {main.title}
                                  </div>
                                </div> */}

                                {/* left */}
                              </div>
                            </div>

                            {main?.subItems &&
                              main.subItems?.length > 0 &&
                              main.subItems.map((subItem, i) => (
                                <div
                                  key={subItem.title || i}
                                  className="flex flex-col"
                                  style={{ borderColor: item.borderColor }}
                                >
                                  {/* title */}

                                  <div className="">
                                    <div className="flex flex-row justify-center ">
                                      {/* right */}
                                      <div
                                        className="w-[60%]  lg:w-[42%] border-b-[1px]    flex items-center "
                                        style={{
                                          borderColor: item.borderColor,
                                        }}
                                      >
                                        {/* border-r-[1px] */}
                                        <div className="w-full text-[16px]  py-3  pl-2 lg:pl-7 items-center">
                                          <div className="flex flex-row gap-1 justify-start align-middle items-center lg:align-top lg:items-top lg:justify-start">
                                            <div
                                              className="flex justify-center align-middle lg:justify-start lg:align-top p-1"
                                              style={{ height: "max-content" }}
                                            >
                                              <BsFillSquareFill
                                                color="blue"
                                                className="w-[6px] h-[6px]"
                                              />
                                            </div>
                                            <span className="font-proxima-nova font-[400] lg:text-[18px] 2xl:text-[17px]  text-[14px] leading-4 mr-1 lg:leading-5">
                                              {subItem.title}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      {/* left */}
                                      <div className="w-[40%]  lg:w-[58%] flex flex-row justify-between">
                                        <div
                                          className="w-1/3 border-r-[1px]  border-l-[1px] border-b-[1px]"
                                          style={{
                                            borderColor: item.borderColor,
                                          }}
                                        >
                                          <div className="w-full flex justify-center  items-center align-middle py-3">
                                            {subItem.essential && (
                                              <BsFillCheckCircleFill
                                                color="blue"
                                                className="w-[20px] h-[20px]"
                                              />
                                            )}
                                          </div>
                                        </div>

                                        <div
                                          className="w-1/3  border-r-[1px] lg:border-r-[0px] border-b-[1px]"
                                          style={{
                                            borderColor: item.borderColor,
                                          }}
                                        >
                                          <div className="w-full flex justify-center  items-center align-middle py-3">
                                            {subItem.enterprise && (
                                              <BsFillCheckCircleFill
                                                color="blue"
                                                className="w-[20px] h-[20px]"
                                              />
                                            )}
                                          </div>
                                        </div>

                                        <div
                                          className="w-1/3 lg:border-l-[1px] border-l-[0px] border-b-[1px]"
                                          style={{
                                            borderColor: item.borderColor,
                                          }}
                                        >
                                          <div className="w-full flex justify-center  items-center align-middle py-3">
                                            {subItem.expert && (
                                              <BsFillCheckCircleFill
                                                color="blue"
                                                className="w-[20px] h-[20px]"
                                              />
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        ))}
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
        {/* </div> */}

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <ProductModal
          isOpen={isProductModalOpen}
          onClose={() => setIsProductModalOpen(false)}
        />
      </div>
    </>
  );
};

export default HeavyItems;
