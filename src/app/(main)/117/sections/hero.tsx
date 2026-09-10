import React from "react";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import Core from "@/components/3d/core";
import LinkDos from "@/components/links/link-dos";
import { motion } from "motion/react";
import Scroll from "@/components/scroll-ui";
import AstroKlaus from "@/components/3d/astro-klaus";
import TerminalBuddy from "@/components/terminal-buddy";
import ScrambleText from "@/components/ui/scramble-text";

const Hero = () => {
  return (
    <SectionWrapper id="home" wrapperClassName="">
      <div className="min-h-[90vh] flex flex-col justify-start items-center relative overflow-hidden ">
        <div className="w-full h-full absolute right-0 -z-10">
          <AstroKlaus />
          {/* <Core neutralY={0.5} /> */}
        </div>
        <div className="flex flex-col justify-center flex-1 ">
          {/* <span className="absolute top-80 text-xs font-departure-mono text-muted-foreground">
            morphs into KLAUS117 ⬅
          </span> */}
          <h1 className="text-7xl font-eurostile">KLAUS</h1>
          {/* <h1 className="text-9xl font-eurostile">
            {" "}
            <ScrambleText
              text="Klaus "
              chars=""
              revealSpeed={5}
              // className="text-terminal-green"
            />
          </h1> */}

          <div className="flex justify-start items-center gap-2 tracking-widest text-sm font-eurostile">
            {/* <h2 className="text-terminal-green">SOFTWARE ENGINEER::</h2> */}
            {/* <ScrambleText
              text="SOFTWARE ENGINEER"
              chars="|:"
              revealSpeed={2}
              className="text-terminal-green ml-2"
            /> */}

            {/* <span>Gameplay Programmer</span>
            <span>Frontend Engineer</span> */}
            {/* <span className="absolute right-0 text-xs text-muted">
              ⬅ morphs into different sub-disciplines
            </span> */}
          </div>
        </div>
      </div>

      {/* <p>Welcome to my world.</p>
      <h2>SOFTWARE ENGINEER</h2>
      <p> Leaning on a porshe 911. Get in. Lets go for a ride</p> */}
      {/* <p className="italic text-xs my-4 text-muted-foreground">
        he's floating in space. scrolling down move him closer to the screen
        until he hits the screen. <br /> story telling starts.
      </p> */}
      {/* <div className=" h-[500px] w-fullborder border-lime-500">
        <Core />
      </div> */}
      {/* SOCIALS */}
      {/* <div className="fixed bottom-10 right-0">
        <TerminalBuddy className="absolute -top-9 left-1/2 -translate-x-1/2" />
        <LinkDos
          href={"files/117 Resume.zip"}
          name={"Resume"}
          openInNewTab={false}
        />
        <LinkDos href={"https://github.com/klaus-xy"} name={"Git Hub"} />
        <LinkDos
          href={"https://www.linkedin.com/in/ayobami-oyesiku"}
          name={"Linked In"}
        />
      </div> */}

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs flex flex-col items-center gap-2 ">
        <Scroll />
        {/* <span className="text-muted-foreground font-medium animate-pulse">
          Scroll down
        </span> */}
      </div>
    </SectionWrapper>
  );
};

export default Hero;
