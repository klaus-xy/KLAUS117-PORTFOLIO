"use client";

import { useRef } from "react";
import { useCursor } from "@/providers/cursor-provider";

const EGG_TEXT = "KLAUS117";

const CursorRevealZone = () => {
  const zoneRef = useRef<HTMLDivElement>(null);
  const { mousePosition, cursorSize } = useCursor();

  const rect = zoneRef.current?.getBoundingClientRect();
  const localX = rect ? mousePosition.x - rect.left : -9999;
  const localY = rect ? mousePosition.y - rect.top : -9999;
  const radius = cursorSize / 2;

  const maskImage = `radial-gradient(circle at ${localX}px ${localY}px, black ${radius * 0.7}px, transparent ${radius}px)`;

  return (
    <div
      ref={zoneRef}
      role="button"
      tabIndex={0}
      className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden border-y border-terminal-green/20 bg-background"
    >
      <span className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 font-departure-mono text-xs tracking-widest text-muted-foreground uppercase">
        //:: hover to reveal
      </span>

      <div
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 font-departure-mono text-sm text-terminal-green select-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      >
        {Array.from({ length: 14 }).map((_, row) => (
          <div key={row} className="flex gap-4 tracking-widest whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, col) => (
              <span key={col}>{EGG_TEXT}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursorRevealZone;
