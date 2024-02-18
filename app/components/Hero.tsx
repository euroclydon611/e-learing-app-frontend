import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-center pt-[70px] 1000px:pt-[0] z-10">
        <div className="absolute top-[100px] 1000px:top-[unset] 1100px:h-[400px] 1100px:w-[400px] 1500px:h-[500px] 1500px:w-[500px] h-[50vh] w-[50vh] hero_animation hero_animation rounded-full">
          <Image
            src={require("../../public/images/hero-image1.png")}
            alt="hero-image"
            className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-10"
          />
        </div>
      </div>
      <div className="1000px:w-[60%] 1000px:text-left flex flex-col items-center 1000px:mt-[0px] text-center  mt-[370px]">
        <h2 className="dark:text-white text-[#000000c7] text-[38px] py-2 w-full 1100px:text-[50px] 1000px:leading-[65px] font-Josefin font-[600] 1100px:!w-[78%]">
          Elevate Your Online Learning Experience Now
        </h2>
        <br />
        <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1100px:!w-[78%]">
          Discover your ideal course from our library of 40k+ online courses,
          joined by a vibrant community of over 500k registered students.
        </p>
        <br />
        <br />
        <div className="1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[18px] font-[400] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] h-[50px] cursor-pointer right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
            <BiSearch size={30} className="dark:text-white text-black" />
          </div>
        </div>
        <br />
        <div className="1100px:w-[78%] w-[90%] flex items-center">
          <Image
            src={require("../../public/images/img-1.jpg")}
            alt="client-image"
            className="rounded-full w-[50px] h-[50px] object-cover border-2"
          />
          <Image
            src={require("../../public/images/img-1.jpg")}
            alt="client-image"
            className="rounded-full w-[50px] h-[50px] object-cover border-2 -ml-[20px]"
          />
          <Image
            src={require("../../public/images/img-1.jpg")}
            alt="client-image"
            className="rounded-full w-[50px] h-[50px] object-cover border-2 -ml-[20px]"
          />
          <Image
            src={require("../../public/images/img-1.jpg")}
            alt="client-image"
            className="rounded-full w-[50px] h-[50px] object-cover border-2 -ml-[20px]"
          />
          <p className=" font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
            500k+ People already trusted us.
            <Link
              href={"/courses"}
              className="dark:text-[#46e256] text-[crimson]"
            >
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
