import Link from "next/link";
import NavItem from "./NavItem";
import DotAccent from "@/components/assets/DotAccent";

const NavList = () => {
  return (
    <>
      <ul className="flex justify-center w-full">
        <NavItem url={"/work"} text="Work"></NavItem>
        <NavItem url={"/studio"} text="Studio"></NavItem>
        <li className="flex items-stretch justify-center w-full">
          <Link
            className="flex items-center justify-center gap-2.5 w-full border-l border-white bg-white text-blue px-5 underline"
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
