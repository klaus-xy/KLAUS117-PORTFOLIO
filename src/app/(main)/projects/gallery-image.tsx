"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Only "in view" while the card overlaps a narrow band around the
  // vertical center of the screen, so this toggles once on entering
  // center and once on leaving, rather than tracking scroll continuously.
  const isCentered = useInView(ref, { margin: "-25% 0px -80% 0px" });

  return (
    <div
      ref={ref}
      className="relative aspect-video overflow-hidden rounded-2xl bg-muted"
    >
      {/* Scroll-into-center-view scale */}
      <motion.div
        animate={{ scale: isCentered ? 1.08 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* Hover scale, composes with the scroll scale above */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GalleryImage;
