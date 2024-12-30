"use client";

import { Progress } from "@/components/ui/progress";
import TypingCursor from "@/components/ui/typing-cursor";
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
  const [currentLineIndex, setCurrentLine] = useState(0); // current line index
  const [currentText, setCurrentText] = useState(""); // updates current text for each line
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLineComplete, setIsLineComplete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  //const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Replaces placeholders with actual values.
  const replacePlaceholders = (line: string) => {
    let newLine = line;

    // Replace "[Current Time]" placeholder with current time.
    if (newLine.includes("[Current Time]")) {
      newLine = newLine.replace(
        "[Current Time]",
        currentTime.toLocaleTimeString()
      );
    }

    // Replace "[Current Location]" placeholder with current location.
    if (newLine.includes("[Current Location]")) {
      newLine = newLine.replace("[Current Location]", "Earth");
    }

    return newLine;
  };

  // Updates current text.
  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const lineToType = replacePlaceholders(lines[currentLineIndex]); // get current modified line to type

      if (currentText.length < lineToType.length) {
        const delay = setTimeout(() => {
          setCurrentText(lineToType.slice(0, currentText.length + 1)); // update current text
        }, TYPING_SPEED);
        return () => clearTimeout(delay);
      } else {
        setIsLineComplete(true);
      }
    }
    console.log("Line ", currentLineIndex, " is complete.");
  }, [currentText, currentLineIndex, currentTime]);

  // Updates current line.
  useEffect(() => {
    if (isLineComplete) {
      const delay = setTimeout(() => {
        if (currentLineIndex < lines.length - 1) {
          setCurrentLine((prevLineIndex) => prevLineIndex + 1); // increment line index
          setCurrentText(""); // reset current text
          setIsLineComplete(false); // reset line completion status
        } else {
          setIsTypingComplete(true);
          console.log("Typing is complete.");
        }
      }, DELAY_BETWEEN_LINES);

      return () => clearTimeout(delay);
    }
    console.log("New Line ", currentLineIndex, " is being typed.");
  }, [isLineComplete, currentLineIndex]);

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
          <p key={index}>{replacePlaceholders(line)}</p>
        ))}
        <p>
          {currentText}
          {/* {!isTypingComplete && `${CURSOR}`} */}
          <TypingCursor />
        </p>
      </div>

      {/* PROGRESS BAR */}
      {isTypingComplete && (
        <div className="w-3/6 min-w-96 h-auto flex flex-col justify-start items-end gap-2">
          <Progress value={progress} />
          <span>{progress}%</span>
        </div>
      )}
    </div>
  );
}
