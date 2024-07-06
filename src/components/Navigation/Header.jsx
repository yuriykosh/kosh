"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full h-20 border-b border-white bg-blue">
      <div className="flex flex-col items-center justify-center h-full gap-2 px-5 border-r border-white ">
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
        className="flex items-center justify-center gap-2.5 w-[129px] border-l border-white bg-white text-blue px-5 text-sm underline underline-offset-4 font-satoshi"
        href={""}
      >
        <div className="w-2 h-2 rounded-full bg-magenta "></div>
        Let&quot;s talk
      </Link>
    </header>
  );
};

export default Header;
