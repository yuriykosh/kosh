import Link from "next/link";
import Dot from "@/components/assets/Dot";

const NavItemActive = ({ url, text }) => {
  return (
    <Link
      className={`flex justify-center items-center gap-2.5 w-full border-l px-5 group border-blue bg-transparent text-blue transition-all duration-300`}
      href={url}
    >
      <Dot color={"bg-blue border-none transition-all"} />
      {text}
    </Link>
  );
};
export default NavItemActive;
