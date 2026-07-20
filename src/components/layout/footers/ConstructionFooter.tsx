import React from "react";

const ConstructionFooter = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-2  uppercase absolute bottom-0 left-0 right-0 p-4 font-departure-mono">
      <p className="text-xs">
        ETA: <span className="text-terminal-green">Summr 2026</span> | Last
        updt: <span className="text-terminal-green">June 2026</span>
      </p>
      <p className="text-xs text-gray-600">(C) 2026 Clown ware corporation</p>
    </footer>
  );
};

export default ConstructionFooter;
