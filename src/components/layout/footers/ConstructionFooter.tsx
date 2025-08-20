import React from "react";

const ConstructionFooter = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center text-xs uppercase absolute bottom-0 left-0 right-0 p-4 font-departure-mono">
      <p>
        ETA: <span className="text-terminal-green">Summer 2026</span> | Last
        updt: <span className="text-terminal-green">Aug 2025</span>
      </p>
      <p className="text-xs text-gray-600">(C) 2025 Clown ware corporation</p>
    </footer>
  );
};

export default ConstructionFooter;
