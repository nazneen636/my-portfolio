"use client";
import React from "react";
import hanckok1 from "../../../public/projects/hanckok1.png";
import finsweet1 from "../../../public/projects/cart2.png";
import agency1 from "../../../public/projects/agency1.png";
import blog1 from "../../../public/projects/blog1.png";
import qwery1 from "../../../public/projects/qwery1.png";
import Image from "next/image";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "@/app/layer/ProjectItem";
import dynamic from "next/dynamic";
import Container from "@/app/layer/Container";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Item = [
  {
    image: hanckok1,
    title: "CSS",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/elcectronics-ecommerce",
    liveLink: "https://techstore-ecommerce.vercel.app/",
  },
  {
    image: finsweet1,
    title: "CSS",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/elcectronics-ecommerce",
    liveLink: "https://techstore-ecommerce.vercel.app/",
  },
  {
    image: agency1,
    title: "CSS",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/Oribi-ecommerce",
    liveLink: "",
  },
  {
    image: blog1,
    title: "CSS",
    description:
      "This e-commerce platform, built using React, Redux, and Tailwind CSS, provides a seamless shopping experience with an intuitive user interface.",
    github: "https://github.com/nazneen636/Oribi-ecommerce",
    liveLink: "",
  },
  {
    image: qwery1,
    title: "CSS",
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
        // background: "white",
        // opacity: "50",
        // position: "absolute",
        // right: "44%",
        // top: "110%",
        // width: "50px",
        // height: "50px",
        // borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <BsArrowRight className="text-2xl text-black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-white opacity-80  hover:opacity-100 hover:bg-[#E8C83E] transition-all duration-300 absolute rounded-full w-12 h-12 top-[105%] left-[44%]"
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background: "white",
        // position: "absolute",
        // left: "44%",
        // top: "110%",
        // width: "50px",
        // height: "50px",
        // borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <BsArrowLeft className="text-black text-2xl" />
    </div>
  );
}

const Css = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    // <div className="grid grid-cols-3">
    // </div>
    <div className="">
      <Container>
        <Slider {...settings}>
          {Item.map((item, index) => (
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
        </Slider>
      </Container>
    </div>
  );
};

export default Css;
