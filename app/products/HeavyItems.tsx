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
import Link from "next/link";

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div>{isOpen ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}</div>
);

const HeavyItems = () => {
  const [openItem, setOpenItem] = useState(0);

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
          title: "Training/Finetuning APIs",
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
              title: "Library of models (LLMs & Non-LLMs)",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title: "BYOM - Bring your own model (LLMs & Non-LLMs)",
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
              expert: false,
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
          title: "Context, response, model & system-wide scoring",
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
          title: "KPI driven ModelMesh Optimization",
          essential: false,
          enterprise: true,
          expert: true,
          subItems: [],
        },

        {
          title: "Library of A8 Specialized Models (Domain & Task Specific)",
          essential: false,
          enterprise: true,
          expert: true,
          subItems: [
            {
              title: "Extend A8 Specialized Models for your Enterprise ",
              essential: false,
              enterprise: false,
              expert: true,
            },
            {
              title: "Automated training incorporating expert / human feedback",
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
              title: "BYOT – Bring your own export Template",
              essential: false,
              enterprise: false,
              expert: true,
            },
            {
              title: "Batch Processing & Scheduling",
              essential: false,
              enterprise: true,
              expert: true,
            },
            {
              title: "Output-Modalities (Text, Tables, Charts)",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title: "Audit Reports",
              essential: true,
              enterprise: false,
              expert: true,
            },
            {
              title: "Customizable Audit Reports",
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
              title: "Bring your own Data",
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
              title: "Input-Modalities (Text, Images, Tables, Charts)",
              essential: true,
              enterprise: true,
              expert: true,
            },
            {
              title:
                "Input Data Format ( TXT, PPTx, DOCx, PDFs, JSON, CSV, HTML, XML, OCR [FV1])",
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
                "Automated data labeling & processing for training/finetuning",
              essential: false,
              enterprise: false,
              expert: true,
            },
            {
              title: "Synthetic data generation for training/finetuning",
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
              title: "Infrastructure Selection & Optimization",
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
              title: "A8 Hosted",
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
              title: "Hybrid Deployment (Part cloud, part on-premises)",
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
              title: "Team Collaboration",
              essential: false,
              enterprise: true,
              expert: true,
              subItems: [],
            },

            {
              title: "Admin Dashboard",
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
    button: "Experience it Today",
    buttonLink: "",
    accessContent: "Free 30 day access.",
  };
  const item2 = {
    id: 2,
    title: "A8 Enterprise",
    subTitle:
      "Build resilient enterprise GenAI applications and derive ROI within 6 weeks. ",
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
      <div className="pt-8 md:mt-0 w-full bg-white  pb-10 flex flex-col  justify-center items-center relative">
        {/* top */}

        <div className="w-[90%] md:w-[82%] flex flex-row justify-center items-center sticky top-[0px] z-[100] bg-white">
          <div className="w-[60%] md:w-[40%] lg:w-[42%]    flex items-center"></div>

          <div className="w-[40%] border-r-[1px] border-l-[1px] border-t-[1px] md:w-[60%] lg:w-[58%] flex flex-row justify-between">
            <div className="w-1/3 md:items-start  flex items-end md:border-r-[1px]">
              <div className="flex justify-center items-center align-middle h-[185px] w-full     md:hidden text-center border-r-[1px] border-l-[1px] border-t-[1px] pb-1 pt-3">
                <div
                  className="h-full flex flex-col items-center    whitespace-nowrap  text-transform  font-proxima-nova font-[700] text-[20px]"
                  style={{ height: "max-content" }}
                >
                  A8 Essential
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center items-center md:px-1 lg:px-2 py-3 gap-2">
                <h3 className="font-proxima-nova font-[700] text-[20px] md:text-center">
                  {item1?.title}
                </h3>
                <span className="font-proxima-nova font-[400] text-[13px] text-center mb-6">
                  {item1?.subTitle}
                </span>

                <button className="bg-[#0231FF] text-white py-3 w-[90%] lg:[80%] rounded-sm font-proxima-nova font-[700] text-[14px]">
                  <Link href={item1?.buttonLink || "/"}>{item1?.button}</Link>
                </button>

                {item1?.accessContent !== "" && (
                  <div className=" text-center font-proxima-nova font-[600] text-[14px]">
                    {item1.accessContent}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/3  flex items-end md:items-start md:border-r-[1px]">
              <div className="flex justify-center items-center align-middle h-[185px] w-full     md:hidden text-center border-r-[1px] border-l-[1px] border-t-[1px] pb-3 pt-3">
                <div
                  className="h-full flex flex-col items-center    whitespace-nowrap  text-transform  font-proxima-nova font-[700] text-[20px] pt-2"
                  style={{ height: "max-content" }}
                >
                  A8 Enterprise
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center items-center md:px-1 lg:px-2 py-3 gap-2">
                <h3 className="font-proxima-nova font-[700] text-[20px] md:text-center">
                  {item2?.title}
                </h3>
                <span className="font-proxima-nova font-[400] text-[13px] text-center mb-6">
                  {item2?.subTitle}
                </span>

                <button className="bg-[#0231FF] text-white py-3 w-[90%] lg:[80%] rounded-sm font-proxima-nova font-[700] text-[14px]">
                  <Link href={item2?.buttonLink || "/"}>{item2?.button}</Link>
                </button>

                {item2?.accessContent !== "" && (
                  <div className=" text-center font-proxima-nova font-[600] text-[14px]">
                    {item2.accessContent}
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/3  flex items-end md:items-start ">
              <div className="flex justify-center items-center align-middle h-[185px] w-full     md:hidden text-center border-r-[1px] border-l-[1px] border-t-[1px] pt-9 pb-0">
                <div
                  className="h-full flex flex-col items-center    whitespace-nowrap  text-transform  font-proxima-nova font-[700] text-[20px]"
                  style={{ height: "max-content" }}
                >
                  A8 Expert
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center items-center md:px-1 lg:px-2 py-3 gap-2">
                <h3 className="font-proxima-nova font-[700] text-[20px] md:text-center">
                  {item3?.title}
                </h3>
                <span className="font-proxima-nova font-[400] text-[13px] text-center mb-6">
                  {item3?.subTitle}
                </span>

                <button className="bg-[#0231FF] text-white py-3 w-[90%] lg:[80%] rounded-sm font-proxima-nova font-[700] text-[14px]">
                  <Link href={item3?.buttonLink || "/"}>{item3?.button}</Link>
                </button>

                {item3?.accessContent !== "" && (
                  <div className=" text-center font-proxima-nova font-[600] text-[14px]">
                    {item3.accessContent}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* card */}
        {/* <div className="w-[90%] md:w-[82%]"> */}
        <div className="w-[90%] md:w-[82%] z-0">
          {productItems.map((item, index) => (
            <Disclosure key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <div
                  className="rounded-sm overflow-hidden"
                  style={{ backgroundColor: item.darkColor }}
                >
                  <Disclosure.Button
                    className="flex items-center w-full text-left py-3 sm:py-4 px-3 sm:px-4 focus:outline-none"
                    onClick={() => setOpenItem(open ? -1 : index)}
                  >
                    <p className="font-proxima-nova font-[700] md:text-[17px] flex-grow  text-base sm:text-lg">
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
                                    className="w-[60%] md:w-[40%] lg:w-[42%] border-b-[1px] flex items-center border-r-[1px]"
                                    style={{ borderColor: item.borderColor }}
                                  >
                                    <div className="font-proxima-nova font-[700] w-full text-[14px] md:text-[15px] py-3 pl-2 md:pl-5 items-center text-start">
                                      {main.title}
                                    </div>
                                  </div>
                                )}

                                {main.title !== "" && (
                                  <div className="w-[40%] md:w-[60%] lg:w-[58%] flex flex-row justify-between">
                                    <div
                                      className="w-1/3  border-r-[1px] border-b-[1px]"
                                      style={{ borderColor: item.borderColor }}
                                    >
                                      <div className="w-full flex justify-center  items-center align-middle py-3">
                                        {main.essential && (
                                          <BsFillCheckCircleFill
                                            color="blue"
                                            size={18}
                                          />
                                        )}
                                      </div>
                                    </div>

                                    <div
                                      className="w-1/3  border-r-[1px] border-b-[1px]"
                                      style={{ borderColor: item.borderColor }}
                                    >
                                      <div className="w-full flex justify-center  items-center align-middle py-3">
                                        {main.enterprise && (
                                          <BsFillCheckCircleFill
                                            color="blue"
                                            size={18}
                                          />
                                        )}
                                      </div>
                                    </div>

                                    <div
                                      className="w-1/3 border-b-[1px]"
                                      style={{ borderColor: item.borderColor }}
                                    >
                                      <div className="w-full flex justify-center  items-center align-middle py-3">
                                        {main.expert && (
                                          <BsFillCheckCircleFill
                                            color="blue"
                                            size={18}
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* <div
                                  className="w-[60%] md:w-[40%] lg:w-[42%] border-b-[1px]   flex items-center border-r-[1px]"
                                  style={{ borderColor: item.borderColor }}

                                >
                                  <div className="font-proxima-nova font-[700]   w-full  text-[14px]  md:text-[15px]   py-3 pl-2 md:pl-5  items-center text-start">
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
                                        className="w-[60%] md:w-[40%] lg:w-[42%] border-b-[1px]   flex items-center border-r-[1px]"
                                        style={{
                                          borderColor: item.borderColor,
                                        }}
                                      >
                                        <div className="w-full text-[16px]  py-3  pl-2 md:pl-7 items-center">
                                          <div className="flex flex-row gap-1 align-top items-center justify-start">
                                            <div
                                              className="rounded-full  flex justify-center align-middle p-1"
                                              style={{ height: "max-content" }}
                                            >
                                              <BsFillSquareFill
                                                color="blue"
                                                className="w-[5px] h-[5px]"
                                              />
                                            </div>
                                            <span className="font-proxima-nova font-[400] md:text-[15px]  text-[12px] ">
                                              {subItem.title}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      {/* left */}
                                      <div className="w-[40%] md:w-[60%] lg:w-[58%] flex flex-row justify-between">
                                        <div
                                          className="w-1/3  border-r-[1px] border-b-[1px]"
                                          style={{
                                            borderColor: item.borderColor,
                                          }}
                                        >
                                          <div className="w-full flex justify-center  items-center align-middle py-3">
                                            {subItem.essential && (
                                              <BsFillCheckCircleFill
                                                color="blue"
                                                size={18}
                                              />
                                            )}
                                          </div>
                                        </div>

                                        <div
                                          className="w-1/3  border-r-[1px] border-b-[1px]"
                                          style={{
                                            borderColor: item.borderColor,
                                          }}
                                        >
                                          <div className="w-full flex justify-center  items-center align-middle py-3">
                                            {subItem.enterprise && (
                                              <BsFillCheckCircleFill
                                                color="blue"
                                                size={18}
                                              />
                                            )}
                                          </div>
                                        </div>

                                        <div
                                          className="w-1/3 border-b-[1px]"
                                          style={{
                                            borderColor: item.borderColor,
                                          }}
                                        >
                                          <div className="w-full flex justify-center  items-center align-middle py-3">
                                            {subItem.expert && (
                                              <BsFillCheckCircleFill
                                                color="blue"
                                                size={18}
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
      </div>
    </>
  );
};

export default HeavyItems;
