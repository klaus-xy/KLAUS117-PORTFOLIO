import { MenuIcon } from "lucide-react";
import React from "react";

const GlobalHeader = () => {
  return (
    <div className="container fixed w-full flex justify-between items-center py-4 border-2 ">
      <div>Logo</div>
      <div className="bg-lime-500 w-10 h-10"></div>
      <div>
        <MenuIcon />
      </div>
    </div>
  );
};

export default GlobalHeader;
