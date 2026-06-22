import LinkDos from "@/components/links/link-dos";
import MusicPlayer from "@/components/music-player";
import UnderConstruction from "@/components/under-construction";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import MainFooter from "@/components/layout/footers/MainFooter";
import Marquee from "@/components/marquee";
import Image from "next/image";

// Landing Page Component
const page = () => {
  const bannerTexts = [
    "CHECK OUT AREA 59 STUDIO™",
    ">>>",
    "SEND ME A MESSAGE",
    ">>>",
    "SERIOUSLY FLOOD MY EMAIL",
    ">>>",
    "XD",
    ">>>",
    "OKAY BYE",
    ">>>",
  ];
  console.log("[117] Landing Page");

  return (
    <div>
      {/* <MusicPlayer className=" top-0 right-0" /> */}

      {/* <div className=" inset-0 z-0">
        <Core />
      </div> */}

      {/* <UnderConstruction header="Under Reconstruction" /> */}

      <Hero />
      <Projects />
      <Contact />
      <div className={"w-full h-12 container mx-auto"}>
        <Marquee
          className=" text-md bg-background border-terminal-green border-y-2"
          direction="left"
          cycleTime={10}
        >
          {
            /* Map Contents here. */
            bannerTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2">
                  {/* <div className="w-2 h-full border-2 border-dotted border-lime-500 -skew-x-30"></div> */}
                </div>

                <span
                //key={index}
                >
                  {text}
                </span>
              </div>
            ))
          }
        </Marquee>
      </div>
      <MainFooter />
    </div>
  );
};

export default page;
