import Dot from "@/components/assets/Dot";
import Link from "next/link";

const NavItem = ({ url, text }) => {
  return (
    <>
      <li className="flex items-stretch justify-center w-full">
        <Link
          className="flex justify-center items-center gap-2.5  w-full border-l border-white bg-blue px-5"
          href={`${url}`}
        >
          <Dot />
          {text}
        </Link>
      </li>
    </>
  );
};
export default NavItem;
