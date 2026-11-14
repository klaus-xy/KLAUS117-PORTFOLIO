"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import LoadingDots from "@/components/ui/loading-dots";
import useVideoReady from "@/hooks/use-video-ready";
import { usePageTransition } from "@/providers/transition-provider";

export interface Carousel3DItem {
  slug: string;
  name: string;
  trailerUrl?: string;
  href?: string;
}

interface Carousel3DProps {
  items: Carousel3DItem[];
  /** Width of each card — make this close to the viewport/container width for a wide, immersive card. */
  cardWidth?: number;
  cardHeight?: number;
  /** Extra width (px) added around the card so neighbouring cards peek in at the edges. */
  peek?: number;
  className?: string;
  onActiveChange?: (item: Carousel3DItem, index: number) => void;
}

const AUTO_ROTATE_SPEED = 8; // degrees per second
const RESUME_DELAY = 2200; // ms before auto-rotate resumes after interaction

const Carousel3DCard = ({
  item,
  active,
}: {
  item: Carousel3DItem;
  active: boolean;
}) => {
  const video = useVideoReady();

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden rounded-2xl border bg-muted transition-[opacity,filter] duration-300",
        active
          ? "border-terminal-green opacity-100"
          : "border-muted/30 opacity-50 brightness-50",
      )}
    >
      {item.trailerUrl ? (
        <>
          <video
            ref={video.ref}
            src={item.trailerUrl}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={video.onCanPlay}
            onCanPlay={video.onCanPlay}
          />
          {!video.ready && (
            <div className="absolute inset-0 flex items-center justify-center text-terminal-green">
              <LoadingDots />
            </div>
          )}
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
          {item.name}
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 pt-12">
        <span className="font-eurostile text-lg text-primary">
          {item.name}
        </span>
      </div>
    </div>
  );
};

const Carousel3D = ({
  items,
  cardWidth = 820,
  cardHeight = 460,
  peek = 70,
  className,
  onActiveChange,
}: Carousel3DProps) => {
  const { navigate } = usePageTransition();
  const count = items.length;
  const segmentAngle = 360 / count;
  const radius = Math.round(cardWidth / 2 / Math.tan(Math.PI / count));
  // A generous perspective relative to the radius keeps the size falloff
  // gentle (closer to orthographic) so the curve reads cleanly rather than
  // fisheye-distorting the side cards.
  const perspective = Math.round(radius * 3);

  const rotateY = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragState = useRef({ startX: 0, startRotation: 0, dragged: false });
  const autoRotate = useRef(true);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Continuous auto-rotation loop.
  useEffect(() => {
    let frameId: number;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (autoRotate.current) {
        rotateY.set(rotateY.get() - AUTO_ROTATE_SPEED * dt);
      }
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [rotateY]);

  // Track which card currently faces the camera.
  useEffect(() => {
    const unsubscribe = rotateY.on("change", (v) => {
      const normalized = ((-v % 360) + 360) % 360;
      const index = Math.round(normalized / segmentAngle) % count;
      setActiveIndex((prev) => {
        if (prev !== index) onActiveChange?.(items[index], index);
        return index;
      });
    });
    return unsubscribe;
  }, [rotateY, segmentAngle, count, items, onActiveChange]);

  const pauseThenResume = () => {
    autoRotate.current = false;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      autoRotate.current = true;
    }, RESUME_DELAY);
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    autoRotate.current = false;
    dragState.current = {
      startX: e.clientX,
      startRotation: rotateY.get(),
      dragged: false,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.dragged = true;
    rotateY.set(dragState.current.startRotation + dx * 0.3);
  };

  const handlePointerUp = () => {
    pauseThenResume();
  };

  const focusCard = (index: number) => {
    if (dragState.current.dragged) return;

    if (index === activeIndex) {
      const href = items[index]?.href;
      if (href) navigate(href);
      return;
    }

    pauseThenResume();
    const target = -index * segmentAngle;
    animate(rotateY, target, { type: "spring", stiffness: 120, damping: 20 });
  };

  return (
    <div
      className={cn(
        "relative mx-auto select-none touch-none overflow-hidden",
        className,
      )}
      style={{ width: cardWidth + peek * 2, perspective }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <motion.div
        className="relative mx-auto"
        style={{
          width: cardWidth,
          height: cardHeight,
          transformStyle: "preserve-3d",
          rotateY,
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.slug}
            className="absolute inset-0 cursor-pointer"
            style={{
              // Negative translateZ pushes each card into the scene around
              // the viewer, facing inward — like standing inside a curved
              // screen — instead of the convex "outside looking in" bulge.
              transform: `rotateY(${i * segmentAngle}deg) translateZ(-${radius}px)`,
              backfaceVisibility: "hidden",
            }}
            data-cursor-text={
              i === activeIndex && item.href ? "View Project" : undefined
            }
            onClick={() => focusCard(i)}
          >
            <Carousel3DCard item={item} active={i === activeIndex} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel3D;
