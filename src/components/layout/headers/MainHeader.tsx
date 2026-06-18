import Core from "@/components/3d/core";
import { MenuIcon } from "lucide-react";
import React from "react";

// This is the header that appears on all main pages. It contains the logo, interactive 3D persona and the menu icon..
const MainHeader = () => {
  return (
    <div className="container fixed w-full flex justify-between items-center px-4 py-4  ">
      <div>.117</div>
      <div className="w-28 h-auto flex justify-center items-center rounded border">
        <Core />
      </div>

      <div>
        <MenuIcon />
      </div>
    </div>
  );
};

export default MainHeader;
