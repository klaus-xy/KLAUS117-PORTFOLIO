import { motion } from "motion/react";
import React from "react";

interface TypingCursorProps {
  cursorChar?: string;
  blinkSpeed?: number;
}
const TypingCursor = ({
  cursorChar = "█",
  blinkSpeed = 500,
}: TypingCursorProps) => {
  return (
    <motion.span
      animate={{
        opacity: [1, 0],
        // scaleY: [1, 0.2],
        transition: {
          ease: ["easeIn", "easeOut"],
          duration: 0.25,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    >
      {cursorChar}
    </motion.span>
  );
};

export default TypingCursor;
