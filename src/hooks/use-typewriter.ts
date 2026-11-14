"use client";

import { useEffect, useState } from "react";

/** A fixed delay in ms, or a `[min, max]` range to pick a random delay from each time. */
type Delay = number | [number, number];

const resolveDelay = (delay: Delay) =>
  Array.isArray(delay)
    ? Math.round(delay[0] + Math.random() * (delay[1] - delay[0]))
    : delay;

interface UseTypewriterProps {
  lines: string[];
  typingInterval: number;
  delayBetweenLines: number;
  replaceFunction?: (input: string) => string;
  /** Loop mode: type a line, hold it, backspace it, then move on to the next (wrapping round). */
  loop?: boolean;
  /** Loop mode only: ms per character while backspacing. */
  deleteInterval?: number;
  /** Loop mode only: ms to hold a finished line before backspacing it. Pass `[min, max]` for a random hold each time. */
  holdDuration?: Delay;
}

const useTypewriter = ({
  lines,
  typingInterval = 50,
  delayBetweenLines = 50,
  replaceFunction,
  loop = false,
  deleteInterval = 30,
  holdDuration = 1800,
}: UseTypewriterProps) => {
  const [currentLineIndex, setCurrentLine] = useState(0); // current line index
  const [currentText, setCurrentText] = useState(""); // updates current text for each line
  const [isLineComplete, setIsLineComplete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // loop mode only

  // Loop mode: type -> hold -> backspace -> next line, forever.
  useEffect(() => {
    if (!loop || lines.length === 0) return;
    const rawLine = lines[currentLineIndex] ?? "";
    const line = replaceFunction ? replaceFunction(rawLine) : rawLine;

    let timer: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (currentText.length < line.length) {
        timer = setTimeout(
          () => setCurrentText(line.slice(0, currentText.length + 1)),
          typingInterval,
        );
      } else {
        timer = setTimeout(
          () => setIsDeleting(true),
          resolveDelay(holdDuration),
        );
      }
    } else if (currentText.length > 0) {
      timer = setTimeout(
        () => setCurrentText((text) => text.slice(0, -1)),
        deleteInterval,
      );
    } else {
      timer = setTimeout(() => {
        setCurrentLine((index) => (index + 1) % lines.length);
        setIsDeleting(false);
      }, delayBetweenLines);
    }
    return () => clearTimeout(timer);
  }, [loop, lines, currentLineIndex, currentText, isDeleting]);

  // Updates current text.
  useEffect(() => {
    if (loop) return;
    // Get current modified line to type
    if (currentLineIndex < lines.length) {
      const lineToType = replaceFunction
        ? replaceFunction(lines[currentLineIndex])
        : lines[currentLineIndex];

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
    if (loop) return;
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
