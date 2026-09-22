"use client";

// THIS IS A HOOK THAT TAKES IN STRINGS OF TEXTS AN PRINTS IT WITH THE MORPHING/SCRAMBLE EFFECT.
import { useEffect, useState } from "react";

// Pool of "scamble" characters used to simulate the scramble effect
const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface UseScrambleTextProps {
  text: string;
  chars?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
  /** Milliseconds to wait before the scramble animation starts. */
  delay?: number;
  /** Show the final text before the delay/scramble starts, instead of nothing. Defaults to true. */
  showInitialText?: boolean;
}

const useScrambleText = ({
  text,
  chars = DEFAULT_CHARS,
  scrambleSpeed = 50,
  revealSpeed = 3,
  delay = 0,
  showInitialText = true,
}: UseScrambleTextProps) => {
  const [scrambledText, setScrambledText] = useState(
    showInitialText ? text : "",
  );
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    setIsComplete(false);
    setScrambledText(showInitialText ? text : "");

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame++;
        const revealedCount = Math.floor(frame / revealSpeed); // Tracks how many characters have been revealed.

        const nextDisplayText = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealedCount) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        setScrambledText(nextDisplayText);

        if (revealedCount >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, scrambleSpeed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, chars, scrambleSpeed, revealSpeed, delay, showInitialText]);

  return { scrambledText, isComplete };
};

export default useScrambleText;
