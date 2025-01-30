import React from "react";

interface TypingCursorProps {
  cursorChar?: string;
  blinkSpeed?: number;
}
const TypingCursor = ({
  cursorChar = "█",
  blinkSpeed = 500,
}: TypingCursorProps) => {
  return <span>{cursorChar}</span>;
};

export default TypingCursor;
