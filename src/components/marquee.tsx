"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate } from "motion/react";
// import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

type MarqueeProps = {
  children?: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
};

const Marquee = ({
  children,
  className,
  speed = 10,
  direction,
}: MarqueeProps) => {
  // Refs for the Marquee container and content
  const MarqueeContainerRef = useRef<HTMLDivElement>(null);
  const MarqueeContentRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  const [containerWidth, setContainerWidth] = useState(0); // Content width state
  const [contentWidth, setContentWidth] = useState(0); // Content width state

  // Update Marquee widths
  const UpdateMarqueeWidth = () => {
    // Check if the refs are defined
    const containerWidth = MarqueeContainerRef.current?.offsetWidth || 0;
    const contentWidth = MarqueeContentRef.current?.scrollWidth || 0;

    // Set the content width state
    setContentWidth(contentWidth);
    setContainerWidth(containerWidth);
    // Debug.
    //]console.log("containerWidth", containerWidth);
    //console.log("contentWidth", contentWidth);
  };

  // Handle Marquee animation
  const HandleAnimation = async () => {
    console.log("Handling animation");
    await animate(
      scope.current,
      { x: direction == "right" ? [-contentWidth, 0] : [0, -contentWidth] },
      { duration: 1, ease: "linear" }
    );
    await animate(
      scope.current,
      { x: direction == "right" ? [-contentWidth, 0] : [0, -contentWidth] },
      { duration: speed, repeat: Infinity, repeatType: "loop", ease: "linear" }
    );
  };

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

  // Handle animation
  useEffect(() => {
    HandleAnimation();
    //console.log("EFFECTS!");
  }, [contentWidth, containerWidth]);

  return (
    <div
      ref={MarqueeContainerRef}
      className={cn(
        "w-full h-full flex justify-center items-center whitespace-nowrap overflow-hidden text-lg border-y-2",
        className
      )}
    >
      <motion.div ref={scope} className={"w-full flex"}>
        <div
          ref={MarqueeContentRef}
          className="min-w-full flex justify-evenly shrink-0"
        >
          {children}
        </div>

        {/* Duplicate for seamless animation effect */}
        <div className="min-w-full flex justify-evenly shrink-0">
          {children}
        </div>
      </motion.div>
      {/* <button
        className="bg-pink-300 p-2 my-4 rounded-xl"
        onClick={HandleAnimation}
      >
        Animate
      </button> */}
    </div>
  );
};

export default Marquee;
