import Link from "next/link";
import NavItem from "./NavItem";
import DotAccent from "@/components/assets/DotAccent";

const NavList = ({ pathname }) => {
  return (
    <>
      <ul className="flex justify-center w-full">
        <NavItem url={"/work"} text="Work" pathname={pathname}></NavItem>
        <NavItem url={"/studio"} text="Studio" pathname={pathname}></NavItem>
        <li className="flex items-stretch justify-center w-full">
          <Link
            className={`flex items-center justify-center gap-2.5 w-full px-5 underline ${
              pathname !== "/"
                ? " bg-blue"
                : "border-l border-white bg-white text-blue"
            } transition-all duration-300`}
            href={""}
          >
            <DotAccent />
            Let&#39;s talk
          </Link>
        </li>
      </ul>
    </>
  );
};
export default NavList;
