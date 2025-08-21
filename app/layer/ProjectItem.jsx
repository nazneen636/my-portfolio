import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGithubAlt } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const ProjectItem = ({
  className,
  alt,
  src,
  title,
  description,
  github,
  liveLink,
}) => {
  return (
    <div className="w-full">
      <div
        className={`card border border-[#1C3C3D] rounded-br-2xl rounded-bl-2xl overflow-hidden ${className}`}
      >
        <div className="relative p-4 bg-black">
          <Image src={src} alt={alt} className="h-[350px]" />
          <Link
            href={liveLink}
            className="absolute w-full h-full bg-[#000000af] left-0 top-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-300 transition-all"
          >
            <div className="w-20 h-20 rounded-full bg-yellow flex items-center justify-center">
              <MdArrowOutward className="text-4xl text-black" />
            </div>
          </Link>
        </div>
        <div className="p-8 flex flex-col gap-8">
          <div className="flex gap-12 items-center">
            <h2 className="text-yellow text-3xl flex gap-6 items-center">
              {title}
              <FaArrowRightLong className="mt-1" />
            </h2>
          </div>
          <p className="text-white opacity-60 text-base leading-[160%]">
            {description}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href={github}
              className="group hover:border-[#1C3C3D] hover:bg-transparent hover:text-yellow duration-300 transition-all border border-transparent py-4 px-10 rounded-lg text-black text-xl font-semibold bg-white flex gap-8 items-center"
            >
              GitHub Link
              <FaGithubAlt className="text-black text-3xl group-hover:text-yellow duration-300 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
