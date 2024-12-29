"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const lines = [
  //"I N I T I A L I Z I N G . . .",
  "I N I T I A L I Z I N G . . .",
  "RAM OK.",
  "ROM OK.",
  "Detecting Primary master: klaus_117",
  "Detecting Secondary master: archangel-069",
  "Location: [Current Location]",
  "Time: [Current Time]",
  "",
  "Loading AOD Program: 100%",
];

const TYPING_SPEED = 100; // TYPING SPEED FOR EACH LINE
const DELAY_BETWEEN_LINES = 50; // DELAY BEFORE TYPING NEXT LINE
const CURSOR = "△"; // CURSOR FOR TYPING

export default function Home() {
  const [currentLineIndex, setCurrentLine] = useState(0); // current line index
  const [currentText, setCurrentText] = useState(""); // updates current text for each line
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLineComplete, setIsLineComplete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  //console.log("Current Line Index: ", currentLineIndex);

  // Updates current text.
  useEffect(() => {
    if (currentLineIndex < lines.length) {
      let lineToType = lines[currentLineIndex];

      if (currentText.length < lineToType.length) {
        const delay = setTimeout(() => {
          setCurrentText(lineToType.slice(0, currentText.length + 1) + CURSOR);
        }, TYPING_SPEED);
        return () => clearTimeout(delay);
      } else if (!isLineComplete) {
        setIsLineComplete(true);
      }
    }
    console.log("Typing Complete: Line ", currentLineIndex);
  }, [currentText, currentLineIndex, isLineComplete]);

  // Updates current line.
  useEffect(() => {
    if (isLineComplete) {
      const delay = setTimeout(() => {
        setCurrentLine((prevLineIndex) => prevLineIndex + 1);
        setCurrentText("");
        setIsLineComplete(false);
      }, DELAY_BETWEEN_LINES);

      return () => clearTimeout(delay);
    }
  }, [currentLineIndex, isLineComplete]);

  //  Updates current time.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    //
    return () => clearInterval(timer);
  }, []);

  //  Updates progress bar.
  useEffect(() => {
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
  }, [progress]);

  return (
    <div className="h-screen flex flex-col justify-between items-start p-7 bg-slate-900 font-mono">
      <div className="">
        {/* MAP LINES TO TYPE HERE */}
        {lines.slice(0, currentLineIndex).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <p>{currentText}</p>

        <p>{currentTime.toLocaleTimeString()}</p>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-10/12 h-auto flex flex-col justify-start items-end gap-2">
        <Progress value={progress} />
        <span>{progress}%</span>
      </div>
    </div>
  );
}
