import React from "react";
import SectionWrapper from "./section-wrapper";
import Core from "@/components/3d/core";

const Hero = () => {
  return (
    <SectionWrapper id="contact">
      <h1>HI. I'M KLAUS.</h1>
      <p>Welcome to my world.</p>
      <p className="italic text-xs my-4 text-muted-foreground">
        he's floating in space. scrolling down move him closer to the screen
        until he hits the screen. <br /> story telling starts.
      </p>
      <Core />
    </SectionWrapper>
  );
};

export default Hero;
