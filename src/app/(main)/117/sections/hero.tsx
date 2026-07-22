import React from "react";
import SectionWrapper from "./section-wrapper";
import Core from "@/components/3d/core";
import LinkDos from "@/components/links/link-dos";
import { motion } from "motion/react";
import Scroll from "@/components/scroll-ui";

const Hero = () => {
  return (
    <SectionWrapper id="home">
      {/* <h1>HI. I'M KLAUS.</h1> */}

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
      <div className="fixed bottom-10 right-0">
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
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-xs flex flex-col items-center gap-2 ">
        <Scroll />
        <span className="text-muted-foreground font-medium animate-pulse">
          Scroll down
        </span>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
