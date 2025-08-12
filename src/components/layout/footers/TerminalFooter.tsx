import React from "react";

const TerminalFooter = () => {
  return (
    <footer className="w-full flex justify-end items-center py-4">
      <p className=" text-[10px] border-terminal-orange border p-1 shadow-md shadow-terminal-orange/25">
        {">_ CLOWN ENGINE [v1.0]"}
      </p>
    </footer>
  );
};

export default TerminalFooter;
