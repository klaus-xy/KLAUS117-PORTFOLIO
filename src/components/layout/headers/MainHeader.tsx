"use client";

import Core from "@/components/3d/core";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LucideMenu, MenuIcon } from "lucide-react";
import React, { useState } from "react";
import NavMenu from "../navigation/NavMenu";

// This is the header that appears on all main pages. It contains the logo, interactive 3D persona and the menu icon..
const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-4 py-0 z-[60]">
      <h1 className="opacity-0">.117</h1>
      <div className="absolute -top-2 w-50 flex justify-center items-center rounded overflow-visible">
        {/* <Core /> */}
      </div>

      <div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="p-2">
            {/* MENU ICON */}
            <div className="w-10 flex flex-col justify-center items-center gap-1.5">
              <div
                className={cn(
                  "w-full h-2 bg-primary rounded-2xl transition-transform duration-300 ease-in-out",
                  open && "rotate-45 translate-y-[7px]",
                )}
              ></div>
              <div
                className={cn(
                  "w-full flex justify-end gap-1 transition-transform duration-300 ease-in-out",
                  open && "-rotate-45 -translate-y-[7px]",
                )}
              >
                <div className="w-1/3 h-2 bg-terminal-green rounded-full"></div>
                <div className="w-2/3 h-2 bg-primary rounded-2xl"></div>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent
            showCloseButton={false}
            className="flex flex-row w-screen sm:max-w-none "
          >
            {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader> */}
            {/* PREVIEW */}
            <div className="w-1/2 gap-4 p-10 hidden sm:flex flex-col bg-pink-400">
              <p className=" w-1/3 absolute">
                3D VISUAL PREVIEW <br /> Hovering over each menu item initiates
                a different reaction/interaction
              </p>
              <Core lookSpeed={0.05} neutralY={0.15} />
            </div>
            <NavMenu />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MainHeader;
