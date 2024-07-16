"use client";

import { useRef } from "react";

import { useInView, motion } from "framer-motion";

const CommentSection = () => {
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
    <section className="flex flex-col w-full gap-32 py-5 2xl:gap-52 bg-blue">
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
        <div className="w-16 h-16 bg-white polygon xl:w-20 xl:h-20"></div>
      </div>
    </section>
  );
};
export default CommentSection;
