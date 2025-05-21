"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
// import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

type MarqueeProps = {
  children?: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

const Marquee = ({ children, className, direction }: MarqueeProps) => {
  // Refs for the Marquee container and content
  const MarqueeContainerRef = useRef<HTMLDivElement>(null);
  const MarqueeContentRef = useRef<HTMLDivElement>(null);

  const [contentWidth, setContentWidth] = useState(0); // Content width state

  // Update Marquee width on mount and resize
  useEffect(() => {
    UpdateMarqueeWidth();

    // Add event listener to update width on resize
    addEventListener("resize", UpdateMarqueeWidth);

    // Clean up the event listener on unmount
    return () => {
      removeEventListener("resize", UpdateMarqueeWidth);
    };
  }, [children]);

  const UpdateMarqueeWidth = () => {
    // Check if the refs are defined
    const containerWidth = MarqueeContainerRef.current?.offsetWidth || 0;
    const contentWidth = MarqueeContentRef.current?.scrollWidth || 0;

    // Debug.
    console.log("containerWidth", containerWidth);
    console.log("contentWidth", contentWidth);

    // Set the content width state
    setContentWidth(contentWidth);
  };

  return (
    <div
      ref={MarqueeContainerRef}
      className={cn(
        "w-full min-h-12 flex justify-center items-center whitespace-nowrap overflow-hidden text-lg text-gren-500 bg-black border-green-500 border-y-2 absolute bottom-1/4",
        className
      )}
    >
      <motion.div
        animate={{
          x: direction == "right" ? [-contentWidth, 0] : [0, -contentWidth],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="w-full flex"
      >
        <div
          ref={MarqueeContentRef}
          className="min-w-full flex justify-evenly shrink-0  bg-pin-500"
        >
          {children}
        </div>
        <div className="min-w-full flex justify-evenly shrink-0  bg-pin-500">
          {children}
        </div>
      </motion.div>

      {/* <motion.ul
        animate={{ rotateY: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className=" w-20 h-20 bg-pink-400"
      /> */}
    </div>
  );
};

export default Marquee;
