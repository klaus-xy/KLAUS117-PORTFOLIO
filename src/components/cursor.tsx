"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ---------------- CUSTOM CURSOR COMPONENT ----------------------- //
// Follows mouse movements and animates smoothly using motion library
// Interacts with defined elements on the page [links, buttons, etc.]
// Disappears when cursor is out of viewport or on mobile.
// Blends with background using mix-blend-mode for a cool effect amd easter egg reveals.
// ---------------- CUSTOM CURSOR COMPONENT ----------------------- //

const Cursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // console.log(`isMobile: ${isMobile}`);

  // Detect if client is using a mouse or touch pointer
  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)"); // Coarse == touch devices. Fine == mouse.

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

    // Handle hover state for interactive elements.
    // Uses event delegation (instead of querySelectorAll + per-element listeners)
    // so elements mounted after this effect runs (e.g. the nav Sheet's li items,
    // which only exist in the DOM once opened) still trigger the hover state.
    const interactiveSelector =
      'h1, h2, button, a, input, textarea, select, li, [role="button"], [role="link"]';
    const labelSelector = "[data-cursor-text]";

    const handleElementMouseHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const labelElement = target.closest<HTMLElement>(labelSelector);
      if (labelElement) {
        setCursorLabel(labelElement.dataset.cursorText ?? null);
      }

      if (target.closest(interactiveSelector)) {
        setIsHovering(true);
      }
    };

    const handleElementMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest(labelSelector)) {
        setCursorLabel(null);
      }

      if (target.closest(interactiveSelector)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleElementMouseHover);
    document.addEventListener("mouseout", handleElementMouseOut);

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

      document.removeEventListener("mouseover", handleElementMouseHover);
      document.removeEventListener("mouseout", handleElementMouseOut);
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
