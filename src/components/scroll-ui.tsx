"use client";

import { motion } from "motion/react";

const Scroll = () => {
  return (
    // SCROLL INDICATOR
    //  Outer
    <div className="w-7 h-11 flex justify-center items-start border-3 border-terminal-green rounded-xl">
      {/* Inner */}
      <motion.div
        initial={{ y: 0, height: 12 }}
        animate={{ y: 11, height: 19 }}
        transition={{
          type: "spring",
          // stiffness: 250,
          // damping: 12,
          // mass: 1,
          bounce: 0.5,
          repeat: Infinity,
          duration: 1,
          repeatDelay: 1,
          repeatType: "reverse",
        }}
        className="w-full bg-primary rounded-full m-1 border border-terminal-green/50"
      ></motion.div>
    </div>
  );
};

export default Scroll;
