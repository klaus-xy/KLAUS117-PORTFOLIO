"use client";

import { motion, useReducedMotion } from "motion/react";

interface HeroNamePlaceholderProps {
  name: string;
}

const letterVariants = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Stands in for a hero video: the project name, revealed letter by letter.
const HeroNamePlaceholder = ({ name }: HeroNamePlaceholderProps) => {
  const reduceMotion = useReducedMotion();
  const words = name.split(/\s+/).filter(Boolean);

  return (
    <motion.span
      aria-label={name}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
      }}
      className="font-eurostile text-center text-4xl uppercase leading-tight sm:text-6xl md:text-8xl"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} aria-hidden="true">
          <span className="inline-block whitespace-nowrap">
            {[...word].map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIndex < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
};

export default HeroNamePlaceholder;
