"use client";

import { Fragment, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { Info } from "lucide-react";
import type { ProjectShowcaseItem } from "@/data/all-projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const dialogImageVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const dialogWordsVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } },
};

const dialogWordVariants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface GalleryImageProps {
  image: ProjectShowcaseItem & { image: string };
  alt: string;
}

const GalleryImage = ({ image, alt }: GalleryImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  // Only "in view" while the card overlaps a narrow band around the
  // vertical center of the screen, so this toggles once on entering
  // center and once on leaving, rather than tracking scroll continuously.
  const isCentered = useInView(ref, { margin: "-25% 0px -80% 0px" });
  const hasDetails = Boolean(image.description);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        ref={ref}
        role={hasDetails ? "button" : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        data-cursor-text={hasDetails ? "View Details" : undefined}
        onClick={() => hasDetails && setOpen(true)}
        onKeyDown={(e) => {
          if (hasDetails && e.key === "Enter") setOpen(true);
        }}
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
            <Image src={image.image} alt={alt} fill className="object-cover" />
          </motion.div>
        </motion.div>
        {hasDetails && (
          <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 border rounded-full bg-background/30 px-2.5 py-1 text-[0.55rem] text-muted-foreground backdrop-blur-sm sm:hidden">
            <Info className="size-3" />
            View details
          </span>
        )}
      </div>

      {hasDetails && (
        <DialogContent className="content-start duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-h-[60vh] sm:h-[90vh] w-[90%] overflow-y-auto border-terminal-green bg-background/80 p-5 backdrop-blur-md sm:max-w-6xl sm:p-8">
          <DialogTitle className="font-eurostile">{alt}</DialogTitle>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { staggerChildren: 0.25, delayChildren: 0.1 },
              },
            }}
            className="flex flex-col gap-4"
          >
            <motion.div
              variants={dialogImageVariants}
              className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-xl"
            >
              <Image
                src={image.image}
                alt={alt}
                fill
                className="object-cover"
              />
            </motion.div>
            <DialogDescription className="font-helvetica-neue font-normal tracking-wider text-[0.7rem] text-muted-foreground sm:text-sm">
              <motion.span variants={dialogWordsVariants} className="block">
                {image.description?.split(" ").map((word, i) => (
                  <Fragment key={i}>
                    <motion.span
                      variants={dialogWordVariants}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>{" "}
                  </Fragment>
                ))}
              </motion.span>
            </DialogDescription>
          </motion.div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default GalleryImage;
