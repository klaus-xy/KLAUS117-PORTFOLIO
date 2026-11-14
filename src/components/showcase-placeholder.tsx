"use client";

import { useReducedMotion } from "motion/react";
import TypingCursor from "@/components/ui/typing-cursor";
import useTypewriter from "@/hooks/use-typewriter";

const DEFAULT_MESSAGES = ["LOADING CACHE", "STAND BY"];

interface ShowcasePlaceholderProps {
  /** Terminal lines to type out in turn. Keep each under ~26 characters so they fit on a phone. */
  messages?: string[];
  /** CSS colour for the whole terminal (prompt, text, cursor). Defaults to the site's terminal green prompt on muted text. */
  accent?: string;
}

const ShowcasePlaceholder = ({
  messages = DEFAULT_MESSAGES,
  accent,
}: ShowcasePlaceholderProps) => {
  const reduceMotion = useReducedMotion();
  const { currentText } = useTypewriter({
    lines: messages,
    typingInterval: 100,
    delayBetweenLines: 450,
    loop: true,
    deleteInterval: 30,
    holdDuration: [400, 1800],
  });

  return (
    <div className="col-span-full flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-black">
      <p
        className="flex items-center gap-2 font-departure-mono text-sm tracking-widest text-muted-foreground sm:text-base"
        style={accent ? { color: accent } : undefined}
        aria-label={messages[0]}
      >
        <span className={accent ? undefined : "text-terminal-green"}>
          {">"}
        </span>
        <span aria-hidden="true">
          {reduceMotion ? messages[0] : currentText}
        </span>
        {!reduceMotion && (
          <TypingCursor
            className={accent ? undefined : "text-terminal-green"}
          />
        )}
      </p>
    </div>
  );
};

export default ShowcasePlaceholder;
