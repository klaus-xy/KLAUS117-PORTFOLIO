"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCursor } from "@/providers/cursor-provider";

// ---------------- CUSTOM CURSOR COMPONENT ----------------------- //
// Follows mouse movements and animates smoothly using motion library
// Interacts with defined elements on the page [links, buttons, etc.]
// Disappears when cursor is out of viewport or on mobile.
// Blends with background using mix-blend-mode for a cool effect amd easter egg reveals.
// State is shared via CursorProvider so other components (e.g. cursor-reveal
// easter eggs) can read the exact same position/size this cursor renders at.
// ---------------- CUSTOM CURSOR COMPONENT ----------------------- //

const Cursor = () => {
  const {
    isMobile,
    isVisible,
    isHovering,
    cursorLabel,
    isMouseDown,
    mousePosition,
  } = useCursor();

  if (isMobile) return null; // Do not render custom cursor on mobile devices

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        body {
          // cursor: none;
        }
      `}</style>

      {/* CURSOR CONTAINER */}
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed z-9999 pointer-events-none top-0 left-0"
        style={{ mixBlendMode: "difference" }}
      >
        {/* Inner circle -> Main Cusor Pointer */}
        <motion.div
          className={`absolute border-2  bg-terminal-green rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 `}
          animate={{
            x: mousePosition.x - 0,
            y: mousePosition.y - 0,
            width: isMouseDown ? 8 : cursorLabel ? 90 : isHovering ? 58 : 12,
            height: isMouseDown ? 8 : cursorLabel ? 90 : isHovering ? 58 : 14,
          }}
          transition={{
            type: "linear",
            duration: 0.1,

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
          className="flex items-center justify-center border-2 border-foreground rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
          animate={{
            x: mousePosition.x - 0,
            y: mousePosition.y - 0,
            width: isMouseDown ? 50 : cursorLabel ? 110 : isHovering ? 60 : 46,
            height: isMouseDown ? 50 : cursorLabel ? 110 : isHovering ? 60 : 46,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            // mass: 0.1,
            // ease: "easeOut",
            // duration: 5,
          }}
        >
          <AnimatePresence>
            {cursorLabel && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-[11px] uppercase text-center px-2 text-foreground"
              >
                {cursorLabel}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Cursor;
