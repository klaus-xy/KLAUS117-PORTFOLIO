"use client";

import { motion } from "motion/react";

const ScrollIndicator = () => {
  return (
    // SCROLL INDICATOR
    //  Outer
    <div className="w-5 sm:w-7 h-11 flex justify-center items-start border-2 sm:border-3 border-terminal-green rounded-xl">
      {/* Inner */}
      <motion.div
        initial={{ y: 0, height: 12 }}
        animate={{
          // fall + stretch, then squash on impact (top caves down while
          // the bottom stays planted), then rebound back up to rest
          y: [0, 9, 21, 16, 0],
          height: [12, 20, 10, 15, 12],
        }}
        transition={{
          type: "tween",
          duration: 1.25,
          times: [0, 0.4, 0.55, 0.75, 1],
          ease: ["easeIn", "easeOut", "easeOut", "easeInOut"],
          repeat: Infinity,
          repeatDelay: 0.95,
        }}
        className="w-full bg-primary rounded-full m-1 border border-terminal-green/50"
      ></motion.div>
    </div>
  );
};

export default ScrollIndicator;
