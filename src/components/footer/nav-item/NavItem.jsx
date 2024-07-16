import Link from "next/link";

const NavItem = ({ children }) => {
  let lowercaseChildren = `/${children.toLowerCase()}`;

  return (
    <>
      <Link
        href={lowercaseChildren}
        className="
        flex gap-2 align-center text-[5.625rem] lg:text-[10rem] leading-[75%] tracking-[-0.169rem] hover:gap-5
        transition-all duration-300
        before:block before:mr-3 before:border before:rounded-full before:border-white before:w-10 before:h-10 before:my-auto hover:before:bg-magenta hover:before:border-transparent
        before:transition-colors before:duration-300
        "
      >
        {children}
      </Link>
    </>
  );
};
export default NavItem;
