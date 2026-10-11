"use client";

import React, { useEffect, useState } from "react";
import FooterList from "./footer-list";
import ScrambleText from "@/components/ui/scramble-text";

const NAMES = ["Klaus 117", "Ayobami"];
const SWAP_INTERVAL_MS = 5000;

const FooterItems = [
  {
    icon: "👩🏽‍💻",
    lists: [
      "Tailwind",
      "Typescript",
      "React.js",
      "Next.js",
      "Shadcn",
      "Motion+",
      "React Three-Fibre",
    ],
  },
  {
    icon: "🍵",
    lists: [
      "245 litres of coffee",
      "25 hrs of hair pulling",
      "multiple crashouts",
      "10 hours of sleep",
    ],
  },
  {
    icon: "🎶",
    lists: [
      "Prairies ::/ 347 Aidan",
      "DJ Twise ::/ Mixtape",
      "Klaus117 ::/ Playlist",
    ],
  },
  {
    icon: "🎮",
    lists: [
      "Valorant [23hrs]",
      "Hollow Knight [96 hrs]",
      "Silk Song",
      "Project ::/ Zero",
    ],
  },
  {
    icon: "🧑🏽‍🎤",
    lists: ["Jujustu Kaisen", "Solo Leveling", "Demon Slayer", "Misoku Tensei"],
  },
  {
    icon: "🎶",
    lists: ["", "", "", ""],
  },
];

const MainFooter = () => {
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setNameIndex((i) => (i + 1) % NAMES.length),
      SWAP_INTERVAL_MS,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full flex flex-col justify-center items-center uppercase font-mono p-2">
      <p className="text-[0.6rem]  sm:text-sm text-primary/80">
        Designed and Made with 💚
      </p>
      {/* <p>and</p> */}

      {/* Container for everything from tool to playlist listened to during dev to  */}
      {/* <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-24 justify-between p-4 mx-auto max-w-3xl">
        {FooterItems.map((item, index) => (
          <FooterList key={index} icon={item.icon} list={item.lists} />
        ))}
      </div> */}
      {/* <p>
        by :: <span className="text-terminal-green">Klaus 117</span>
      </p> */}

      <p className="text-[0.55rem] sm:text-sm text-muted-foreground/60">
        by ::{" "}
        <span className="inline-block min-w-[9.5ch] text-terminal-green text-center font-semi-bold tracking-wider">
          <ScrambleText
            text={NAMES[nameIndex]}
            scrambleSpeed={40}
            chars="!<>-_\\/[]—=+*^?#________"
          />
        </span>{" "}
        :: © 2026
      </p>
    </footer>
  );
};

export default MainFooter;
