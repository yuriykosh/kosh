const Dot = ({ color }) => {
  return (
    <>
      <div
        className={`w-2 h-2 rounded-full ${
          color === undefined ? "bg-white" : color
        }`}
      ></div>
    </>
  );
};
export default Dot;
