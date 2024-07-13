"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavList from "./navigation/NavList";
import DotAccent from "../assets/DotAccent";
import closeIconBlue from "/public/close-blue.svg";
import closeIconWhite from "/public/close-white.svg";

const Header = () => {
  const container = useRef();
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="fixed z-10 flex flex-row justify-between w-full h-20 border-white border-y bg-blue">
      <div className="flex">
        <div
          onClick={toggleMenu}
          className={`${
            isActive
              ? " -translate-x-12"
              : "flex flex-col items-center justify-center"
          }  h-full gap-2 px-5 border-r border-white lg:hidden`}
        >
          <ul className="flex gap-[22px]">
            <li className="w-2.5 h-2.5 border border-white rounded-full"></li>
            <li className="w-2.5 h-2.5 border border-white rounded-full"></li>
          </ul>
          <ul className="flex gap-[22px]">
            <li className="w-2.5 h-2.5 border border-white rounded-full"></li>
            <li className="w-2.5 h-2.5 border border-white rounded-full"></li>
          </ul>
        </div>
        <Link
          className="items-center justify-center hidden pl-5 sm:flex"
          href={"/"}
        >
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="KOSH Studio short logo"
          />
        </Link>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden lg:flex lg:justify-end lg:w-[522px] xl:w-[650px] 2xl:w-[730px]">
        <NavList />
      </nav>

      <Link
        className="flex items-center justify-center gap-2.5 w-[129px] md:w-[207px] lg:hidden border-l border-white bg-white text-blue px-5 underline underline-offset-4"
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
          <Image src={closeIconBlue} width={42} height={28} />
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
