import React from "react";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import { Quote } from "lucide-react";
import { ScrollText } from "@/components/scroll-text";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      wrapperClassName="flex flex-col justify-center items-center gap-4 "
    >
      <div className="font-eurostile text-muted-foreground text-center relative bottom-32">
        {/* <h3 className="font-bold text-9xl">WELCOME TO MY WORLD</h3> */}
        {/* <span>- VIPER, VALORANT</span> */}
        {/* <ScrollText text="WELCOME TO MY WORLD" /> */}
        <ScrollText
          text=" Somewhere between code, creativity and interactive storytelling, I build experiences."
          className="text-6xl"
        />
        {/* <ScrollText
          text=" I love to explore the intersection of technology and creativity. I
          believe that the best experiences are created when we combine the
          power of code with the art of design. Whether it's a game, a website,
          or an app, I strive to create experiences that are not only functional
          but also beautiful and engaging."
          className="text-xl"
        /> */}
      </div>

      {/* <div className="min-h-[50vh] flex flex-col justify-center items-center gap-4  text-2xl font-eurostile text-terminal-green">
        <Quote className="w-10 h-10" />
        <h2>DO WHAT YOU LOVE</h2>
        <h2>LOVE WHAT YOU DO</h2>
      </div> */}
    </SectionWrapper>
  );
};

export default About;
