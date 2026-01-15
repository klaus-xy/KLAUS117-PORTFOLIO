"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

// ---------------- CUSTOM CURSOR COMPONENT ----------------------- //
// Follows mouse movements and animates smoothly using motion library
// Interacts with defined elements on the page [links, buttons, etc.]
// Disappears when cursor is out of viewport or on mobile.

const Cursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  console.log(`isMobile: ${isMobile}`);

  // Detect if client is using a mouse or touch pointer
  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)"); // Coarse -> touch devices. Fine -> mouse.

    const updateIsMobile = () => setIsMobile(media.matches); // Update isMobile based on media query match [if coarse pointer, then mobile = true]
    updateIsMobile(); // Set initial value

    media.addEventListener("change", updateIsMobile);
    return () => media.removeEventListener("change", updateIsMobile);
  }, []);

  // On first render or pointer-type change, add event listener to update mouse position on mouse move events
  useEffect(() => {
    if (isMobile) return; // Disable custom cursor on mobile devices

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY }); // Update state with current mouse coordinates whenever mouse-move event is fired
      // console.log(`Mouse Position: (${e.clientX}, ${e.clientY})`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null; // Do not render custom cursor on mobile devices

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        body {
          cursor: none;
        }
      `}</style>
      {/* Cursor Container */}
      <motion.div
        className="fixed z-50 pointer-events-none top-0 left-0"
        style={{ mixBlendMode: "difference" }}
      >
        {/* Inner circle -> Main Cusor Pointer */}
        <motion.div
          className="absolute w-3 h-3 border-2  bg-terminal-green rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2  "
          animate={{
            x: mousePosition.x - 0,
            y: mousePosition.y - 0,
          }}
          transition={{
            type: "linear",
            // stiffness: 300,
            // damping: 10,
            // mass: 0.1,
            // ease: "easeOut",
            duration: 0.01,
          }}
        ></motion.div>

        {/* Outer circle */}
        <motion.div
          className="w-12 h-12 border-2 border-foreground rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2  "
          animate={{
            x: mousePosition.x - 0,
            y: mousePosition.y - 0,
          }}
          transition={
            {
              // type: "spring",
              // stiffness: 300,
              // damping: 10,
              // mass: 0.1,
              // ease: "easeOut",
              // duration: 5,
            }
          }
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Cursor;
