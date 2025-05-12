import { motion } from "motion/react";
import React from "react";

interface SpinnerProps {
  spinnerChar?: string;
  cycleTime?: number;
}
const Spinner = ({ spinnerChar = "△", cycleTime = 0.5 }: SpinnerProps) => {
  return (
    // <div className="animate-spin ani">
    //   <span className="text-xl">△</span>
    // </div>
    <motion.div
      className="text-xl h-4 w-4 flex justify-center items-center"
      animate={{
        rotate: [0, 360],
        // scaleY: [1, 0.2],
        transition: {
          ease: ["linear"],
          duration: cycleTime,
          repeat: Infinity,
        },
      }}
    >
      {spinnerChar}
    </motion.div>
  );
};

export default Spinner;
