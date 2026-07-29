"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const BLINK_INTERVAL_MS = 3200;
const BLINK_DURATION_MS = 150;

const TerminalBuddy = ({ className }: { className?: string }) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), BLINK_DURATION_MS);
    }, BLINK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none select-none flex flex-col items-center font-departure-mono text-terminal-green",
        className,
      )}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="text-sm leading-none"
      >
        {blink ? "(-_-)" : "(•_•)"}
      </motion.div>
      <motion.div
        animate={{ scaleX: [1, 0.55, 1], opacity: [0.35, 0.12, 0.35] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="mt-1 h-1 w-5 rounded-full bg-terminal-green blur-[1px]"
      />
    </div>
  );
};

export default TerminalBuddy;
