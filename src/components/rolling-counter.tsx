"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const STRIP = Array.from({ length: 30 }, (_, i) => i % 10);
const STRIP_LENGTH = STRIP.length;
const ROLL = { type: "spring", stiffness: 300, damping: 20, mass: 1 } as const;
const SNAP = { duration: 0 } as const;

const RollingDigit = ({
  value,
  direction,
}: {
  value: number;
  direction: 1 | -1;
}) => {
  const [target, setTarget] = useState(value + 10);
  const [snap, setSnap] = useState(false);

  useEffect(() => {
    setSnap(false);
    setTarget((current) => {
      const steps =
        direction === 1
          ? (value - (current % 10) + 10) % 10
          : -(((current % 10) - value + 10) % 10);
      return current + steps;
    });
  }, [value, direction]);

  const handleComplete = () => {
    if (target >= 10 && target < 20) return;
    setSnap(true);
    setTarget(target < 10 ? target + 10 : target - 10);
  };

  return (
    <span className="relative inline-block h-[1em] overflow-hidden text-center">
      <motion.span
        className="flex flex-col"
        initial={false}
        animate={{ y: `${-(target / STRIP_LENGTH) * 100}%` }}
        transition={snap ? SNAP : ROLL}
        onAnimationComplete={handleComplete}
      >
        {STRIP.map((digit, i) => (
          <span key={i} className="block h-[1em]">
            {digit}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const RollingCounter = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const [prevValue, setPrevValue] = useState(value);
  const [direction, setDirection] = useState<1 | -1>(1);

  if (value !== prevValue) {
    setPrevValue(value);
    setDirection(value < prevValue ? -1 : 1);
  }

  const digits = String(value).padStart(2, "0").split("").map(Number);

  return (
    <span className={cn("inline-flex leading-none tabular-nums", className)}>
      {digits.map((digit, i) => (
        <RollingDigit key={i} value={digit} direction={direction} />
      ))}
    </span>
  );
};

export default RollingCounter;
