import Link from "next/link";
import Dot from "@/components/assets/Dot";
import NavItemActive from "./NavItemActive";

const NavItem = ({ url, text, pathname }) => {
  return (
    <>
      <li className="flex items-stretch justify-center w-full">
        {pathname === url ? (
          <NavItemActive
            className="transition-all duration-300"
            url={url}
            text={text}
          />
        ) : (
          <Link
            className={`flex justify-center items-center gap-2.5 w-full border-l px-5 group ${
              pathname !== "/" ? "text-blue border-blue" : "border-white"
            }  bg-transparent transition-all duration-300`}
            href={url}
          >
            <Dot
              color={`bg-transparent border 
                ${
                  pathname !== "/"
                    ? "border-blue group-hover:bg-blue "
                    : "border-white group-hover:bg-white"
                }
              transition-all`}
            />
            {text}
          </Link>
        )}
      </li>
    </>
  );
};
export default NavItem;
