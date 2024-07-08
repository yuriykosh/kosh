"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavList from "./navigation/NavList";
import DotAccent from "../assets/DotAccent";

const Header = () => {
  return (
    <header className="fixed z-10 flex flex-row justify-between w-full h-20 border-b border-white bg-blue">
      <div className="flex">
        <div className="flex flex-col items-center justify-center h-full gap-2 px-5 border-r border-white lg:hidden">
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
            alt="Picture of the author"
          />
        </Link>
      </div>

      <nav className="hidden lg:flex justify-end w-[522px] xl:w-[650px] 2xl:w-[730px]">
        <NavList />
      </nav>

      <Link
        className="flex items-center justify-center gap-2.5 w-[129px] lg:hidden border-l border-white bg-white text-blue px-5 underline underline-offset-4"
        href={""}
      >
        <DotAccent />
        Let&#39;s talk
      </Link>
    </header>
  );
};

export default Header;
