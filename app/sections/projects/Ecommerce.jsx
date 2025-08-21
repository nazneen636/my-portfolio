"use client";
import React from "react";
import tech1 from "../../../public/projects/tech1.png";
import oribi1 from "../../../public/projects/oribi1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "@/app/layer/ProjectItem";
import Container from "@/app/layer/Container";
import { BsArrowRight } from "react-icons/bs";

const ecommerceItem = [
  {
    image: tech1,
    title: "E-commerce",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/elcectronics-ecommerce",
    liveLink: "https://techstore-ecommerce.vercel.app/",
  },
  {
    image: oribi1,
    title: "E-commerce",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/Oribi-ecommerce",
    liveLink: "",
  },
];

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="bg-white opacity-80  hover:opacity-100 hover:bg-[#E8C83E] transition-all duration-300 absolute rounded-full w-12 h-12 top-[105%] right-[44%]"
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <BsArrowRight className="text-2xl text-black" />
    </div>
  );
}

const Ecommerce = () => {
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-3">
          {ecommerceItem.map((item, index) => (
            <div key={index} className="px-5">
              <ProjectItem
                title={item.title}
                description={item.description}
                src={item.image}
                alt={item.title}
                github={item.github}
                liveLink={item.liveLink}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Ecommerce;
