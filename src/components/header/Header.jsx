"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavList from "./navigation/NavList";
import DotAccent from "../assets/DotAccent";
import logoWhite from "/public/logo.svg";
import logoBlue from "/public/logo--blue.svg";
import closeIconBlue from "/public/close-blue.svg";
import closeIconWhite from "/public/close-white.svg";
import WaffleMenu from "../assets/WaffleMenu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const container = useRef();

  // logo logic
  let logo = pathname === "/studio" ? logoBlue : logoWhite;

  // toggle mobile menu
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`fixed z-10 flex flex-row justify-between w-full h-20 ${
        pathname === "/studio"
          ? "border-blue bg-white"
          : "border-white  bg-blue"
      } border-y transition-all duration-300`}
    >
      <div className="flex">
        <WaffleMenu
          onClick={toggleMenu}
          isActive={isActive}
          pathname={pathname}
        />
        <Link
          className="items-center justify-center hidden pl-5 sm:flex"
          href={"/"}
        >
          <Image
            src={logo}
            width={40}
            height={40}
            quality={100}
            alt="KOSH Studio short logo"
            className="transition-all duration-300"
          />
        </Link>
      </div>

      {/* DESKTOP NAVIGATION */}
      {/* <nav className="hidden lg:flex lg:justify-end lg:w-[522px] xl:w-[650px] 2xl:w-[730px]">
        <NavList pathname={pathname} />
      </nav> */}
      <nav className="hidden lg:flex lg:justify-end lg:w-6/12">
        <NavList pathname={pathname} />
      </nav>

      <Link
        className={`flex items-center justify-center gap-2.5 w-[129px] md:w-[207px] lg:hidden border-l  px-5 underline underline-offset-4 ${
          pathname === "/studio"
            ? " bg-blue"
            : "border-l border-white bg-white text-blue"
        } transition-all duration-300`}
        href={""}
      >
        <DotAccent />
        Let&#39;s talk
      </Link>

      {/* --- SIDE NAVIGATION --- */}
      <div
        className={`${
          isActive ? "fixed " : "hidden -translate-x-full"
        } transition-all w-screen mt-[78px] bg-white screen-height text-blue`}
      >
        <div
          onClick={toggleMenu}
          className="absolute left-0 flex flex-col items-center justify-center p-5 pb-[18px] bg-white border-r -top-20 border-blue lg:hidden"
        >
          <Image
            src={closeIconBlue}
            width={42}
            height={28}
            alt="Button to close mobile menu"
          />
        </div>
        <nav>
          <div className="p-5 border-y border-blue">Menu:</div>
          <ul className="flex flex-col gap-8 p-5 ">
            <li>
              <Link
                href={"/"}
                onClick={toggleMenu}
                className="flex gap-2 align-center text-[5.625rem] text-transparent text-stroke--blue leading-none tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-blue before:w-10 before:h-10 before:my-auto"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/#services"}
                onClick={toggleMenu}
                className="flex gap-2 align-center text-[5.625rem] leading-none tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-blue before:w-10 before:h-10 before:my-auto"
              >
                Work<sup className="text-sm -tracking-tight">(03...)</sup>
              </Link>
            </li>
            <li>
              <Link
                href={"/studio"}
                onClick={toggleMenu}
                className="flex gap-2 align-center text-[5.625rem] leading-none tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-blue before:w-10 before:h-10 before:my-auto"
              >
                Studio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
