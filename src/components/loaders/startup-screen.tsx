"use client";

//import { Progress } from "@/components/ui/progress";
import Spinner from "@/components/ui/spinner";
import TypingCursor from "@/components/ui/typing-cursor";

import { createStringReplacer } from "@/lib/text-replacer";
import useClock from "@/hooks/use-clock";
import useTypewriter from "@/hooks/use-typewriter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//import TerminalHeader from "@/components/layout/headers/TerminalHeader";
import TerminalFooter from "@/components/layout/footers/TerminalFooter";

const lines = [
  "I N I T I A L I Z I N G    >>>",
  "C:\\> SYSTEM32/CLOWN_ENGINE.DLL",
  "RAM OK.",
  "ROM OK.",
  "Primary Master:   [KL△US-117]",
  "Secondary Master: [△RCHANGEL-0x45]",
  "Location:         [Current Location]",
  "Date:             [Current Date]",
  "Time:             [Current Time]",
  " ",
  "Loading △OD-117.exe         >>>",
  "█ █ █ █ █ █ █ █ █ █ █ █ █ █ █ ",
];

const TYPING_INTERVAL = 30; // TYPING INTERVAL FOR EACH LINE
const DELAY_BETWEEN_LINES = 50; // DELAY BEFORE TYPING NEXT LINE

export default function StartupScreen() {
  const router = useRouter();
  const { formattedDate, formattedTime } = useClock();

  const stringReplacer = createStringReplacer({
    "Current Date": () => formattedDate.toUpperCase(),
    "Current Time": () => formattedTime,
    "Current Location": () => "EARTH-1A, KPLR-STN",
  });

  const { currentText, isTypingComplete, currentLineIndex } = useTypewriter({
    lines,
    typingInterval: TYPING_INTERVAL,
    delayBetweenLines: DELAY_BETWEEN_LINES,
    replaceFunction: stringReplacer,
  });

  /////  STATES  /////////////////////////////////////
  //const [currentTime, setCurrentTime] = useState(new Date());
  const [progress, setProgress] = useState(0);
  // const [location, setLocation] = useState("Access Denied.");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  // console.log("isloading", isLoading);
  // console.log("isLoadingComplete", isLoadingComplete);

  // //  Updates current time.
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  //   //
  //   return () => clearInterval(timer);
  // }, []);

  // // Updates current location.
  // useEffect(() => {}, []);

  //  Updates progress bar.
  useEffect(() => {
    if (isTypingComplete && progress < 100) {
      setIsLoading(true);
      setIsLoadingComplete(false);

      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return 117; // Set to 117 when complete still buggy.
          }
        });
      }, 25);

      return () => clearInterval(timer);
    } else {
      setIsLoading(false);
      setIsLoadingComplete(true);
    }
    console.log("isloading", isLoading);
    console.log("isLoadingComplete", isLoadingComplete);
  }, [isTypingComplete, progress, isLoading, isLoadingComplete]);

  useEffect(() => {
    if (isLoadingComplete && progress >= 100) {
      const timer = setTimeout(() => {
        router.push("/117");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoadingComplete, progress, router]);

  return (
    <div className="flex flex-col text-sm flex-1 justify-between items-start gap-4 p-4  text-terminal-orange font-departure-mono">
      <div>
        {/* HEADER */}
        {/* <TerminalHeader /> */}

        {/* CONTENTS */}
        <div className="w-full whitespace-pre py-3 px-1">
          {/* <span className="w-full bg-black">Contents</span> */}
          {/* MAP LINES TO TYPE HERE */}
          {lines.slice(0, currentLineIndex).map((line, index) => (
            <p key={index} className="leading-loose">
              {stringReplacer(line)}
            </p>
          ))}
          <p className="leading-loose">
            {currentText}
            {/* {!isTypingComplete && `${CURSOR}`} */}
            <TypingCursor blinkSpeed={50} />
          </p>
          {/* <Clock /> */}

          {/* PROGRESS BAR  Only show this once typing is complete*/}
          {isTypingComplete && (
            <div className="flex flex-col justify-start items-start gap-2 my-2 ">
              {/* <Progress value={progress} className="" /> */}
              <div className="flex justify-center items-center gap-2">
                <Spinner
                  spinnerChar={`${isLoading ? "∵" : "△"}`}
                  cycleTime={0.65}
                />
                <span>{progress}%</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* FOOTER  ○◌∫∵⊖⋱⋮⋰⨜⩶*/}
      <TerminalFooter />
    </div>
  );
}
