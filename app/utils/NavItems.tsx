import Link from "next/link";
import React, { FC, useState } from "react";

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden 800px:flex gap-4">
        {navLinks &&
          navLinks.map((link, index) => (
            <Link href={link.url} key={index}>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                } text-[17px] px-6 font-Poppins font-[400]`}
              >
                {link.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="800px:hidden mt-5">
          <div className="w-full text-center">
            <Link href={"/"} passHref>
              <span className="text-[20px] font-Poppins font-[500] text-black dark:text-white">
                Learniverse
              </span>
            </Link>
          </div>
          {navLinks &&
            navLinks.map((link, index) => (
              <Link href={link.url} key={index} passHref>
                <span
                  className={`${
                    activeItem === index
                      ? "dark:text-[#37a39a] text-[crimson]"
                      : "dark:text-white text-black"
                  } text-[17px] px-6 py-3 block font-Poppins font-[400]`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
