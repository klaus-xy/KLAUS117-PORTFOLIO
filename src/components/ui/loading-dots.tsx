import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LoadingDotsProps {
  className?: string;
}

const DOTS = [0, 1, 2];

const LoadingDots = ({ className }: LoadingDotsProps) => {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {DOTS.map((i) => (
        <motion.span
          key={i}
          className="size-2 rounded-full bg-current"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.7, 1, 0.7],
            transition: {
              duration: 0.9,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.15,
            },
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
