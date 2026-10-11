"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CursorContextValue {
  mousePosition: { x: number; y: number };
  isMobile: boolean;
  isVisible: boolean;
  isHovering: boolean;
  cursorLabel: string | null;
  isMouseDown: boolean;
  /** Diameter, in px, of the cursor's outer "follower" circle in its current state. */
  cursorSize: number;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export const useCursor = () => {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return ctx;
};

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");

    const updateIsMobile = () => setIsMobile(media.matches);
    updateIsMobile();

    media.addEventListener("change", updateIsMobile);
    return () => media.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setTimeout(() => setIsMouseDown(false), 10);

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

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleElementMouseHover);
    document.addEventListener("mouseout", handleElementMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleElementMouseHover);
      document.removeEventListener("mouseout", handleElementMouseOut);
    };
  }, [isMobile]);

  const cursorSize = isMouseDown ? 50 : cursorLabel ? 110 : isHovering ? 60 : 46;

  return (
    <CursorContext.Provider
      value={{
        mousePosition,
        isMobile,
        isVisible,
        isHovering,
        cursorLabel,
        isMouseDown,
        cursorSize,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
