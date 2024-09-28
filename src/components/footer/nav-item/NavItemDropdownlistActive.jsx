import Link from "next/link";

const NavItemDropdownlistActive = () => {
  return (
    <>
      <Link
        href={"/work"}
        className="
        flex gap-2 align-center text-[5.625rem] lg:text-[10rem] text-transparent text-stroke--white leading-[80%] tracking-[-0.169rem] 
              before:block before:mr-3 before:border before:rounded-full before:border-white before:w-10 before:h-10 before:my-auto
              pointer-events-none
        "
      >
        Work<sup className="text-sm -tracking-tight">(03...)</sup>
      </Link>
    </>
  );
};
export default NavItemDropdownlistActive;
