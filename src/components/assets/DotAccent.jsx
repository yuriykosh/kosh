const DotAccent = () => {
  return (
    <>
      <div className="relative flex w-2 h-2">
        <div className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-magenta"></div>
        <div className="relative inline-flex w-2 h-2 rounded-full bg-magenta"></div>
      </div>
    </>
  );
};
export default DotAccent;
