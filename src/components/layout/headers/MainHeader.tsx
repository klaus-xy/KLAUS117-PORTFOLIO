"use client";

import Core from "@/components/3d/core";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import NavMenu from "../navigation/NavMenu";
import ScrambleText from "@/components/ui/scramble-text";
import Link from "next/link";
import { motion } from "motion/react";

// This is the header that appears on all main pages. It contains the logo, interactive 3D persona and the menu icon..
const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={headerRef}
      className={`fixed top-0 w-full flex justify-between items-center transition duration-400 ${open ? "bg-none" : "bg-background"} px-5 py-5 lg:px-10 lg:py-5 z-60`}
    >
      {/* LOGO */}
      <Link
        href="/117"
        className={cn(
          "flex justify-center items-end transition-opacity duration-500",
          open && "opacity-0 pointer-events-none",
        )}
      >
        <motion.div
          className="flex justify-center items-end"
          initial="rest"
          whileHover="hover"
        >
          {/* <h1 className="font-eurostile text-4xl">KLAUS</h1> */}
          <motion.div
            variants={{ rest: { width: 16 }, hover: { width: 20 } }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-3 rounded-full bg-terminal-green relative bottom-1"
          ></motion.div>
          <h1>
            <ScrambleText
              text="117"
              scrambleSpeed={100}
              chars="klaus"
              delay={1500}
              showInitialText={true}
              className="font-eurostile text-4xl"
            />
          </h1>
        </motion.div>
      </Link>

      <div className="absolute -top-2 w-50 flex justify-center items-center rounded overflow-visible">
        {/* <Core /> */}
      </div>

      <div>
        <Sheet open={open} onOpenChange={setOpen} modal={false}>
          <SheetTrigger className="p-2">
            {/* MENU ICON */}
            <div className="w-10 flex flex-col justify-center items-center gap-1.5">
              <div
                className={cn(
                  "w-full h-2 bg-primary rounded-2xl transition-transform duration-300 ease-in-out",
                  open && "rotate-45 translate-y-1.75",
                )}
              ></div>
              <div
                className={cn(
                  "w-full flex justify-end gap-1 transition-transform duration-300 ease-in-out",
                  open && "-rotate-45 -translate-y-1.75",
                )}
              >
                <div className="w-1/3 h-2 bg-terminal-green rounded-full"></div>
                <div className="w-2/3 h-2 bg-primary rounded-2xl"></div>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent
            showCloseButton={false}
            className="flex flex-row bg-background data-[side=right]:w-screen data-[side=right]:sm:max-w-none"
            onPointerDownOutside={(e) => {
              if (headerRef.current?.contains(e.target as Node)) {
                e.preventDefault();
              }
            }}
          >
            {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader> */}
            {/* PREVIEW */}
            <div className="w-1/2 gap-4 p-10 hidden sm:flex flex-col bg-lime-300">
              {/* <p className=" w-1/3 absolute">
                3D VISUAL PREVIEW <br /> Hovering over each menu item initiates
                a different reaction/interaction
              </p> */}
              <Core
                lookSpeed={0.035}
                neutralY={0.5}
                maxAngleX={Math.PI / 4.5}
                maxAngleY={Math.PI / 6}
              />
            </div>
            <NavMenu onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MainHeader;
