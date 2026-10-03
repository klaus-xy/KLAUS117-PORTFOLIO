"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { ProjectImage } from "@/data/all-projects";

const imageVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.5 },
  },
};

interface GalleryCarouselProps {
  images: ProjectImage[];
  alt: string;
}

const GalleryCarousel = ({ images, alt }: GalleryCarouselProps) => {
  return (
    <Carousel orientation="horizontal" opts={{ align: "start" }}>
      <CarouselContent className="h-[70vh]">
        {images.map((image) => (
          <CarouselItem key={image.src}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.6 }}
              className="flex h-full flex-col gap-4"
            >
              <motion.div
                variants={imageVariants}
                className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-muted"
              >
                <Image
                  src={image.src}
                  alt={alt}
                  fill
                  className="object-cover aspect-video h-[20vh]"
                />
              </motion.div>
              {image.description && (
                <motion.p
                  variants={textVariants}
                  className="shrink-0 font-helvetica-neue text-xs text-muted-foreground"
                >
                  {image.description}
                </motion.p>
              )}
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default GalleryCarousel;
