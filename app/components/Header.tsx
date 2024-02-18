"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

const Header: FC<Props> = ({ activeItem }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSideBar(false);
      }
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`w-full h-[80px] z-[80] ${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900  dark:to-black fixed top-0 left-0 border-b-[#ffffff1c] shadow-xl transition-all duration-500"
            : "border-b dark:border-[#ffffff1c] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-full flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
              >
                Learniverse
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              {/* only for mobile */}
              <div className=" 800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSideBar(true)}
                />
              </div>
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer dark:text-white text-black max-800px:hidden"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* mobile sidebar */}
        {openSideBar && (
          <div
            className="fixed w-full h-screen top-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0 dark:text-white text-black">
              <NavItems activeItem={activeItem} isMobile={true} />
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer dark:text-white text-black"
                onClick={() => setOpen(true)}
              />

              <p className="absolute bottom-2 right-6">
                Copyright &copy; 2024 Learniverse
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
