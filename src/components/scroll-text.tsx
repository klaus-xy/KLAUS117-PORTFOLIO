"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollTextProps {
  text: string;
  className?: string;
  startOffset?: string;
  endOffset?: string;
}

interface CharProps {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}

interface WordProps {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}

//:::: THE CHAR COMPONENT :::://
// This component takes in a character and animates its opacity based on the scroll position of the component relative to the viewport.
function Char({ char, progress, range }: CharProps) {
  // Map the scroll progress to an opacity value as the progress goes from range[0] to range[1]
  const opacity = useTransform(progress, [range[0], range[1]], [0.15, 1]);
  const smoothOpacity = useSpring(opacity, {
    stiffness: 200,
    damping: 20,
  });
  return <motion.span style={{ opacity: opacity }}>{char}</motion.span>;
}

//:::: THE WORD COMPONENT :::://
// This component takes in a word and splits it into characters, rendering each character using the Char component.
// The range prop determines when each character should start and finish its animation based on the scroll progress.
function Word({ word, progress, range }: WordProps) {
  const chars = word.split(""); // Split the word into individual characters
  const step = (range[1] - range[0]) / chars.length; // Calculate the step size for each character
  // For example, if the range is [0.2, 0.4] and there are 4 characters, each character gets a
  // range of 0.05 (0.2 to 0.25 for char 1, 0.25 to 0.3 for char 2, etc.)

  return (
    <span className="inline-block mr-[0.3em]">
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          progress={progress}
          range={[range[0] + i * step, range[0] + (i + 1) * step]}
          // For example, char 1 gets [0.2, 0.25], char 2 gets [0.25, 0.3], etc.
        />
      ))}
    </span>
  );
}

//:::: THE MAIN SCROLL-TEXT COMPONENT ::::://
//::: TEXTS -> WORDS -> CHARACTERS ::://

// This component takes in a text prop, splits it into words, and renders each word using the Word component.
// The scrollYProgress is passed down to each Word, which in turn passes it to each Char for individual character animation.
export function ScrollText({
  text,
  className,
  startOffset,
  endOffset,
}: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null); // Get a ref to the paragraph element to track its scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.55"],
  });

  const words = text.split(" "); // Split the input text into words to be rendered separately

  // useEffect(() => {
  //   return scrollYProgress.on("change", (v) => console.log(v));
  // }, []);

  return (
    <p ref={ref} className={cn(className)}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]} // Each word gets a range based on its position in the text, creating a staggered animation effect
        />
        // Each word gets an equal slice of that 0→1 range.
        // For a 10-word text, word 0 gets [0, 0.1], word 1 gets [0.1, 0.2], and so on.
      ))}
    </p>
  );
}
