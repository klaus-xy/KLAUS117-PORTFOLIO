import Core from "@/components/3d/core";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import React from "react";

// This is the header that appears on all main pages. It contains the logo, interactive 3D persona and the menu icon..
const MainHeader = () => {
  return (
    <div className="sticky top-0 w-full flex justify-between items-center px-4 py-4 bg-amber-400  ">
      <h1>.117</h1>
      <div className="w-28 h-auto flex justify-center items-center rounded border">
        <Core />
      </div>

      <div>
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MainHeader;
