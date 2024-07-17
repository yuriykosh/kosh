const WaffleMenu = ({ onClick, isActive, pathname }) => {
  let borderColor = pathname === "/studio" ? "border-blue" : "border-white";

  return (
    <>
      <div
        onClick={onClick}
        className={`${
          isActive
            ? " -translate-x-12"
            : "flex flex-col items-center justify-center"
        }  h-full gap-2 px-5 border-r ${borderColor} lg:hidden`}
      >
        <ul className="flex gap-[22px]">
          <WaffleMenuDot borderColor={borderColor} />
          <WaffleMenuDot borderColor={borderColor} />
        </ul>
        <ul className="flex gap-[22px]">
          <WaffleMenuDot borderColor={borderColor} />
          <WaffleMenuDot borderColor={borderColor} />
        </ul>
      </div>
    </>
  );
};
export default WaffleMenu;

export const WaffleMenuDot = ({ borderColor }) => {
  return (
    <>
      <li className={`w-2.5 h-2.5 border ${borderColor} rounded-full`}></li>
    </>
  );
};
