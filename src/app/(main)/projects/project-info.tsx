"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ScrambleText from "@/components/ui/scramble-text";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  info: string;
  className?: string;
}

const ProjectInfo = ({ label = "Label", info = "Info", className }: Props) => {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className={cn(`w-full py-4`, className)}>
      <h3 className="tracking-[0.8rem] text-terminal-green">{label}</h3>
      <motion.h2
        viewport={{ once: false, amount: 0.8 }}
        onViewportEnter={() => setReplayKey((k) => k + 1)}
      >
        <ScrambleText
          key={replayKey}
          text={info}
          scrambleSpeed={60}
          revealSpeed={2.5}
          chars="PROJECTINFO117"
        />
      </motion.h2>

      <Separator className="my-2 data-horizontal:h-0.5 bg-primary" />
    </div>
  );
};

export default ProjectInfo;
