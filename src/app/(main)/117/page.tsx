"use client";

import LinkDos from "@/components/links/link-dos";
import MusicPlayer from "@/components/music-player";
import UnderConstruction from "@/components/under-construction";
import Hero from "./sections/hero";
import Projects from "./sections/featured-projects";
import Contact from "./sections/contact";
import MainFooter from "@/components/layout/footers/MainFooter";
import Marquee from "@/components/marquee";
import Image from "next/image";
import About from "./sections/about";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import CursorRevealZone from "@/components/eggs/cursor-reveal-zone";
import FeaturedProjects from "./sections/featured-projects";

// Landing Page Component
const page = () => {
  const bannerTexts = [
    "GAMES INDUSTRY.",
    "   ",
    "WEB 2.0.",
    "   ",
    "WEB 3.0.",
    "   ",
    "ARTIFICIAL INTELLIGENCE.",
    "   ",
    "FINTECH.",
    "   ",
    "EDUTECH.",
    "   ",
    "ENGINEERING.",
    "   ",
    "SIMULATION.",
    "   ",
  ];

  const cheatTexts = [
    "● ⬆️⬇️⬅️➡️ ●",
    "UP",
    "  ●  ",
    "UP",
    " ●  ",
    "DOWN",
    "  ● ",
    "DOWN",
    "  ● ",
    "LEFT",
    "  ● ",
    "RIGHT",
    "  ● ",
    "LEFT",
    "  ● ",
    "RIGHT",
    "  ● ",
    "UH...",
    "  ● ",
    "I FORGOT THE REST",
  ];
  // const bannerTexts = [
  //   "LETS WORK TOGETHER.",
  //   "   ",
  //   "LETS CREATE COOL SH*T.",
  //   "   ",
  //   "CHECK OUT AREA 59 STUDIO™.",
  //   "   ",
  //   "SEND ME A MESSAGE.",
  //   "   ",
  //   "SERIOUSLY FLOOD MY EMAIL.",
  //   "   ",
  //   "XD.",
  //   "   ",
  //   "OKAY BYE.",
  //   "   ",
  // ];
  console.log("[117] Landing Page");

  return (
    <div>
      {/* <MusicPlayer className=" top-0 right-0" /> */}

      {/* <div className=" inset-0 z-0">
        <Core />
      </div> */}

      {/* <UnderConstruction header="Under Reconstruction" /> */}

      <Hero />
      <About />
      <div className={"w-full h-32  mb-6"}>
        <Marquee
          className=" text-6xl  font-helvetica-neue font-semibold border-terminal-green border-y-4 "
          direction="left"
          cycleTime={28}
        >
          {
            // Map Contents here.
            bannerTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2"></div>

                <span>{text}</span>
              </div>
            ))
          }
        </Marquee>
      </div>
      <FeaturedProjects />
      {/* <CursorRevealZone /> */}
      <div className="min-h-[85vh] flex flex-col justify-center items-center gap-4  text-2xl font-eurostile text-terminal-green">
        <Quote className="w-10 h-10 text-primary" />
        <h2>DO WHAT YOU LOVE</h2>
        <h2>LOVE WHAT YOU DO</h2>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          className="text-primary"
        >
          - HOLLY TUCKER
        </motion.span>
      </div>
      {/* <Contact /> */}
      <div className={"w-full h-32  mb-6"}>
        <Marquee
          className=" text-6xl  font-helvetica-neue font-semibold border-terminal-green border-y-4 "
          direction="left"
          cycleTime={28}
        >
          {
            // Map Contents here.
            cheatTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2"></div>

                <span>{text}</span>
              </div>
            ))
          }
        </Marquee>
      </div>
      {/* <MainFooter /> */}
    </div>
  );
};

export default page;
