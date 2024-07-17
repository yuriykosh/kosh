"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useInView, motion } from "framer-motion";

const CommentSection = () => {
  const pathname = usePathname();

  let sectionBG = pathname === "/studio" ? "bg-white" : "bg-blue";
  let sectionTextColor = pathname === "/studio" ? "text-blue" : "";
  let polygonBG = pathname === "/studio" ? "bg-blue" : "bg-white";

  // const body = useRef(null);

  // const isInView = useInView(body, { once: true, margin: "-75%" });

  // const animation = {
  //   initial: { y: "100%" },

  //   enter: (i) => ({
  //     y: "0",
  //     transition: {
  //       duration: 0.75,
  //       ease: [0.33, 1, 0.68, 1],
  //       delay: 0.075 * i,
  //     },
  //   }),
  // };

  return (
    <section
      className={`flex flex-col w-full gap-32 2xl:gap-52 ${sectionBG} ${sectionTextColor}`}
    >
      <div className="flex flex-col p-5 text-[2.125rem] xl:text-[3.313rem] leading-none">
        <div
          // ref={body}
          className="overflow-hidden "
        >
          <motion.p
          // variants={animation}
          // initial="initial"
          // animate={isInView ? "enter" : ""}
          >
            OVER YEARS OF EXPERIENCE IN THE DESIGN INDUSTRY CRAFTING PRODUCTS
            AND DESIGN WORK FOR CLIENTS OF ALL SIZES.
          </motion.p>
        </div>
      </div>
      <div className="flex justify-end p-5">
        <div className={`w-16 h-16 ${polygonBG} polygon xl:w-20 xl:h-20`}></div>
      </div>
    </section>
  );
};
export default CommentSection;
