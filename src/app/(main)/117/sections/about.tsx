import React from "react";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import { Quote } from "lucide-react";
import { ScrollText } from "@/components/scroll-text";

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="space-y-24 text-xl font-eurostile text-muted-foreground text-center">
        {/* <h3 className="font-bold text-9xl">WELCOME TO MY WORLD</h3> */}
        {/* <span>- VIPER, VALORANT</span> */}
        {/* <ScrollText text="WELCOME TO MY WORLD" /> */}
        <ScrollText
          text="  I don't just build software. I build experiences. Some happen in the
          browser. Some happen inside a game engine. Some exist somewhere
          between code, design and storytelling. I'm fascinated by systems—the
          invisible rules that make everything feel alive."
          className="text-xl"
        />
        <ScrollText
          text=" I love to explore the intersection of technology and creativity. I
          believe that the best experiences are created when we combine the
          power of code with the art of design. Whether it's a game, a website,
          or an app, I strive to create experiences that are not only functional
          but also beautiful and engaging."
          className="text-xl"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-48 text-2xl font-eurostile text-terminal-green">
        <Quote className="w-10 h-10" />
        <h2>DO WHAT YOU LOVE</h2>
        <h2>LOVE WHAT YOU DO</h2>
      </div>
    </SectionWrapper>
  );
};

export default About;
