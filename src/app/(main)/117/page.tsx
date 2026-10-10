"use client";

import Hero from "./sections/hero";
import Contact from "./sections/contact";
import MainFooter from "@/components/layout/footers/MainFooter";
import Marquee from "@/components/marquee";
import { Quote } from "lucide-react";
import { motion } from "motion/react";
import CursorRevealZone from "@/components/eggs/cursor-reveal-zone";
import FeaturedProjects from "./sections/featured-projects";
import AboutSummary from "./sections/about-summary";

// Landing Page Component
const page = () => {
  const bannerTexts = [
    "GAMES INDUSTRY",
    "  ●  ",
    "WEB 2.0",
    "  ●  ",
    "WEB 3.0",
    "  ●  ",
    "ARTIFICIAL INTELLIGENCE",
    "  ●  ",
    "FINTECH",
    "  ●  ",
    "EDUTECH",
    "  ●  ",
    "ENGINEERING",
    "  ●  ",
    "SIMULATION",
    "  ●  ",
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
  const contactTexts = [
    "LETS WORK TOGETHER",
    "  ●  ",
    "LETS CREATE COOL SH*T",
    "  ●  ",
    "CHECK OUT AREA 59 STUDIO™",
    "  ●  ",
    "SEND ME A MESSAGE",
    "  ●  ",
    "SERIOUSLY FLOOD MY EMAIL",
    "  ●  ",
    "XD",
    "  ● ",
    "OKAY BYE",
    "  ● ",
  ];
  console.log("[117] Landing Page");

  return (
    <div className="overflow-clip">
      {/* <MusicPlayer className=" top-0 right-0" /> */}

      {/* <div className=" inset-0 z-0">
        <Core />
      </div> */}

      {/* <UnderConstruction header="Under Reconstruction" /> */}

      <Hero />
      <AboutSummary />
      <div className={"min-h-48 relative overflow-hidden bg-ambe-300"}>
        <Marquee
          className="w-full h-16 sm:h-32 mb-6 text-3xl sm:text-6xl bg-background font-helvetica-neue font-semibold border-terminal-green border-y-4 "
          direction="left"
          cycleTime={40}
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
        <Marquee
          className="w-full h-16 sm:h-32 mb-6 text-3xl sm:text-6xl -rotate-45 relative top-0 -right-[20%] z-50 font-helvetica-neue font-semibold bg-background border-terminal-green border-y-4 "
          direction="left"
          cycleTime={40}
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.4, delayChildren: 0.2 } },
        }}
        className="min-h-[85vh] flex flex-col justify-center items-center gap-4 text-xl sm:text-2xl font-eurostile text-terminal-green"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.6, rotate: -8 },
            show: {
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <Quote className="w-10 h-10 text-primary" />
        </motion.div>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          DO WHAT YOU LOVE.
        </motion.h2>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          LOVE WHAT YOU DO.
        </motion.h2>
        <motion.span
          variants={{
            hidden: { opacity: 0, x: -18 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut", delay: 1.5 },
            },
          }}
          className="text-primary text-base sm:text-lg"
        >
          - HOLLY TUCKER
        </motion.span>
      </motion.div>

      <div className={"w-[120%] mb-6 relative -left-4 "}>
        <Marquee
          className="w-full h-16 sm:h-32 mb-6 -rotate-12 text-3xl sm:text-6xl bg-background font-helvetica-neue font-semibold border-terminal-green border-y-4 "
          direction="left"
          cycleTime={40}
        >
          {
            // Map Contents here.
            contactTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2"></div>

                <span>{text}</span>
              </div>
            ))
          }
        </Marquee>
        <Marquee
          className="w-full h-16 sm:h-32 mb-6 rotate-14 text-3xl sm:text-6xl bg-background font-helvetica-neue font-semibold border-terminal-green border-y-4 "
          direction="right"
          cycleTime={40}
        >
          {
            // Map Contents here.
            contactTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2"></div>

                <span>{text}</span>
              </div>
            ))
          }
        </Marquee>
      </div>
      <Contact />
      <MainFooter />
    </div>
  );
};

export default page;
