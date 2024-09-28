"use client";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavList from "./navigation/NavList";
import DotAccent from "../assets/DotAccent";
import logoWhite from "/public/logo.svg";
import logoBlue from "/public/logo--blue.svg";
import WaffleMenu from "../assets/WaffleMenu";
import SideNav from "./navigation/SideNav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const container = useRef();

  // logo logic
  let logo =
    pathname === "/studio" || pathname === "/work" ? logoBlue : logoWhite;

  // toggle mobile menu
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`fixed z-10 flex flex-row justify-between w-full h-20 ${
        pathname !== "/" ? "border-blue bg-white" : "border-white  bg-blue"
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
      <nav className="hidden lg:flex lg:justify-end lg:w-6/12">
        <NavList pathname={pathname} />
      </nav>

      <Link
        className={`flex items-center justify-center gap-2.5 w-[129px] md:w-[207px] lg:hidden border-l  px-5 underline underline-offset-4 ${
          pathname !== "/"
            ? "bg-blue"
            : "border-l border-white bg-white text-blue"
        } transition-all duration-300`}
        href={"#footer"}
      >
        <DotAccent />
        Let&#39;s talk
      </Link>

      {/* --- SIDE NAVIGATION --- */}
      <SideNav
        isActive={isActive}
        toggleMenu={toggleMenu}
        pathname={pathname}
      />
    </header>
  );
};

export default Header;
