"use client";

import useScrambleText from "@/hooks/use-scramble-text";

interface ScrambleTextProps {
  text: string;
  className?: string;
  chars?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
  delay?: number;
  showInitialText?: boolean;
}

const ScrambleText = ({ text, className, ...options }: ScrambleTextProps) => {
  const { scrambledText } = useScrambleText({ text, ...options });

  return <span className={className}>{scrambledText}</span>;
};

export default ScrambleText;
