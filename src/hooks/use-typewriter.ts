"use client";

import { useEffect, useState } from "react";

interface UseTypewriterProps {
  lines: string[];
  typingInterval: number;
  delayBetweenLines: number;
  replaceFunction?: (input: string) => string;
}

const useTypewriter = ({
  lines,
  typingInterval = 50,
  delayBetweenLines = 50,
  replaceFunction,
}: UseTypewriterProps) => {
  const [currentLineIndex, setCurrentLine] = useState(0); // current line index
  const [currentText, setCurrentText] = useState(""); // updates current text for each line
  const [isLineComplete, setIsLineComplete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Updates current text.
  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const lineToType = replaceFunction
        ? replaceFunction(lines[currentLineIndex])
        : lines[currentLineIndex]; // get current modified line to type

      if (currentText.length < lineToType.length) {
        const delay = setTimeout(() => {
          setCurrentText(lineToType.slice(0, currentText.length + 1)); // update current text
        }, typingInterval);
        return () => clearTimeout(delay);
      } else {
        setIsLineComplete(true);
      }
    }
    console.log("Line ", currentLineIndex, " is complete.");
  }, [currentText, currentLineIndex]);

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
      }, delayBetweenLines);

      return () => clearTimeout(delay);
    }
    console.log("New Line ", currentLineIndex, " is being typed.");
  }, [isLineComplete, currentLineIndex]);

  // RETURN PAYLOAD ////////
  return { currentLineIndex, currentText, isTypingComplete };
};

export default useTypewriter;
