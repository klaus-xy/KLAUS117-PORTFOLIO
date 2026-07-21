"use client";

import { motion } from "motion/react";

const Scroll = () => {
  return (
    // SCROLL INDICATOR
    //  Outer
    <div className="w-7 h-11 flex justify-center items-start border-3 border-terminal-green rounded-2xl">
      {/* Inner */}
      <motion.div
        initial={{ y: 0, height: 12 }}
        animate={{ y: 10, height: 19 }}
        transition={{
          type: "spring",
          // stiffness: 200,
          // damping: 15,
          // bounce: 0.25,
          repeat: Infinity,
          duration: 1,
          repeatDelay: 0.5,
          repeatType: "reverse",
        }}
        className="w-full bg-primary rounded-full m-1 border border-terminal-green/50"
      ></motion.div>
    </div>
  );
};

export default Scroll;
