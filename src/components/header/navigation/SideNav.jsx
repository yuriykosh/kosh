import Link from "next/link";
import Image from "next/image";

import closeIconBlue from "/public/close-blue.svg";
import closeIconWhite from "/public/close-white.svg";

function SideNav({ isActive, toggleMenu, pathname }) {
  return (
    <div
      className={`${
        isActive ? "fixed translate-x-0" : "absolute -translate-x-full"
      } transition-all duration-300 w-screen mt-[78px] bg-white screen-height text-blue`}
    >
      <div
        onClick={toggleMenu}
        className="absolute left-0 flex flex-col items-center justify-center p-5 pb-[18px] bg-white border-r -top-20 border-blue cursor-pointer lg:hidden"
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
              className={`flex gap-2 align-center text-[5.625rem] ${
                pathname === "/" ? "text-transparent text-stroke--blue" : ""
              }  leading-none tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-blue before:w-10 before:h-10 before:my-auto`}
            >
              Home
            </Link>{" "}
            {/* {pathname === "/" && <NavItemActive url={"/"}>Home</NavItemActive>}
            {pathname === "/studio" && <NavItem url={"/"}>Home</NavItem>} */}
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
              className={`flex gap-2 align-center text-[5.625rem] ${
                pathname === "/studio"
                  ? "text-transparent text-stroke--blue"
                  : ""
              } leading-none tracking-[-0.169rem] before:block before:mr-3 before:border before:rounded-full before:border-blue before:w-10 before:h-10 before:my-auto`}
            >
              Studio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default SideNav;
