import Dot from "@/components/assets/Dot";
import Link from "next/link";

const NavItem = ({ url, text, pathname }) => {
  return (
    <>
      <li className="flex items-stretch justify-center w-full">
        <Link
          className={`flex justify-center items-center gap-2.5  w-full border-l px-5 ${
            pathname === "/studio"
              ? "border-blue bg-white text-blue"
              : "border-white bg-blue"
          } ${
            pathname === "/studio" && url === "/studio" ? "" : ""
          } transition-all duration-300`}
          href={url}
        >
          <Dot
            color={
              pathname === "/studio"
                ? `${
                    url === "/studio"
                      ? "bg-transparent border border-blue"
                      : "bg-blue"
                  }`
                : "bg-white"
            }
          />
          {text}
        </Link>
      </li>
    </>
  );
};
export default NavItem;
