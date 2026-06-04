"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

// ---------------- CUSTOM CURSOR COMPONENT ----------------------- //
// Follows mouse movements and animates smoothly using motion library
// Interacts with defined elements on the page [links, buttons, etc.]
// Disappears when cursor is out of viewport or on mobile.
// Blends with background using mix-blend-mode for a cool effect amd easter egg reveals.
// ---------------- CUSTOM CURSOR COMPONENT ----------------------- //

const Cursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // console.log(`isMobile: ${isMobile}`);

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

    const handleMouseEnter = () => setIsVisible(true); // Show custom cursor when mouse enters viewport
    const handleMouseLeave = () => setIsVisible(false); // Hide custom cursor when mouse leaves viewport

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", () => {
      // Briefly scale cursor on mousedown for visual feedback
      setIsMouseDown(true);
    });
    document.addEventListener("mouseup", () => {
      // Reset mouse down state on mouse up for feedback after little delay.
      setTimeout(() => setIsMouseDown(false), 10);
    });

    // Handle hover state for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, select, [role="button"], [role="link"]',
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => setIsHovering(true));
      element.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      document.removeEventListener("mousedown", () => {
        setIsMouseDown(true);
      });
      document.removeEventListener("mouseup", () => {
        setIsMouseDown(false);
      });

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => setIsHovering(true));
        element.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, [isMobile]);

  if (isMobile) return null; // Do not render custom cursor on mobile devices

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        body {
          // cursor: none;
        }
      `}</style>
      {/* Cursor Container */}
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 pointer-events-none top-0 left-0"
        style={{ mixBlendMode: "difference" }}
      >
        {/* Inner circle -> Main Cusor Pointer */}
        <motion.div
          className={`absolute border-2  bg-terminal-green rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 `}
          animate={{
            x: mousePosition.x - 0,
            y: mousePosition.y - 0,
            width: isMouseDown ? 8 : isHovering ? 46 : 12,
            height: isMouseDown ? 8 : isHovering ? 46 : 14,
          }}
          transition={{
            type: "linear",
            duration: 0.01,

            width: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
            height: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
        ></motion.div>

        {/* Outer circle - The Follower*/}
        <motion.div
          className="w-12 h-12 border-2 border-foreground rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2  "
          animate={{
            x: mousePosition.x - 0,
            y: mousePosition.y - 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            // mass: 0.1,
            // ease: "easeOut",
            // duration: 5,
          }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Cursor;
