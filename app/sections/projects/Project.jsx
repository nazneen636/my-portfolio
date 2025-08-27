"use client";
import React, { useState } from "react";
import Container from "../../layer/Container";
import SectionTitle from "../../layer/SectionTitle";
import Ecommerce from "./Ecommerce";
import Css from "./Css";
import JavaScript from "./JavaScript";
import SectionHeading from "@/app/layer/SectionHeading";
// import lib from "../../lib/lib";

const projectItem = [
  { title: "Show all" },
  { title: "CSS" },
  { title: "JavaScript" },
  { title: "Responsive Design" },
  { title: "E-commerce Website" },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("Show all"); // Track active tab

  const handleTabClick = (title) => {
    setActiveTab(title); // Update active tab
  };

  return (
    <div id="#projects">
      <Container className="pt-52 pb-5 text-white flex flex-col items-center justify-center gap-8">
        <SectionTitle titleText="Latest Works" />
        <SectionHeading>
          View My Latest <span className="text-yellow">Works</span>
        </SectionHeading>
        <ul className="flex gap-12 items-center justify-center">
          {projectItem?.map((item, index) => (
            <li key={index}>
              <div
                onClick={() => handleTabClick(item.title)}
                className={`text-white opacity-70 text-2xl hover:text-yellow relative after:absolute after:w-0 after:h-[3px] after:left-0 after:top-full after:bg-yellow hover:opacity-100 hover:after:w-1/2 transition-all duration-300 after:transition-all after:duration-300 ${
                  activeTab === item.title ? "text-yellow opacity-100" : ""
                }`}
              >
                {item.title}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          {activeTab === "E-commerce Website" && <Ecommerce />}
          {activeTab === "CSS" && <Css />}
          {activeTab === "JavaScript" && <JavaScript />}
        </div>
      </Container>
    </div>
  );
};

export default Project;
