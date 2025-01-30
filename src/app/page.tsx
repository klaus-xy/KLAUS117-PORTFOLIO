"use client";

import { Progress } from "@/components/ui/progress";
import Spinner from "@/components/ui/spinner";
import TypingCursor from "@/components/ui/typing-cursor";
import useTypewriter from "@/hooks/use-typewriter";
import { createStringReplacer } from "@/lib/utils";
import { useEffect, useState } from "react";

const lines = [
  "I N I T I A L I Z I N G . . .",
  "RAM OK.",
  "ROM OK.",
  "Detecting Primary Master: KL△US-117",
  "Detecting Secondary Master: △RCHANGEL-069",
  "Location: [Current Location]",
  "Time: [Current Time]",
  "Loading AOD Program...",
];

const TYPING_SPEED = 50; // TYPING SPEED FOR EACH LINE
const DELAY_BETWEEN_LINES = 50; // DELAY BEFORE TYPING NEXT LINE

export default function Home() {
  const stringReplacer = createStringReplacer({
    "Current Time": () => currentTime.toLocaleTimeString(),
    "Current Location": () => "Earth",
  });

  const { currentText, isTypingComplete, currentLineIndex } = useTypewriter({
    lines,
    typingSpeed: TYPING_SPEED,
    delayBetweenLines: DELAY_BETWEEN_LINES,
    replaceFunction: stringReplacer,
  });

  /////  STATES  /////////////////////////////////////
  const [currentTime, setCurrentTime] = useState(new Date());
  const [progress, setProgress] = useState(0);

  //  Updates current time.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    //
    return () => clearInterval(timer);
  }, []);

  // Updates current location.
  useEffect(() => {}, []);

  //  Updates progress bar.
  useEffect(() => {
    if (isTypingComplete && progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return 100;
          }
        });
      }, 25);

      return () => clearInterval(timer);
    }
  }, [isTypingComplete, progress]);

  return (
    <div className="h-screen flex flex-col justify-between items-start p-7 bg-black text-green-500 font-mono">
      <div className="">
        {/* MAP LINES TO TYPE HERE */}
        {lines.slice(0, currentLineIndex).map((line, index) => (
          <p key={index}>{stringReplacer(line)}</p>
        ))}
        <p>
          {currentText}
          {/* {!isTypingComplete && `${CURSOR}`} */}
          <TypingCursor blinkSpeed={50} />
        </p>
      </div>

      {/* PROGRESS BAR */}
      {isTypingComplete && (
        <div className="w-3/6 min-w-96 h-auto flex flex-col justify-start items-start gap-2">
          <Progress value={progress} className="bg-green-500" />
          <div className="flex justify-center items-center gap-2">
            <Spinner />
            <span>{progress}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
