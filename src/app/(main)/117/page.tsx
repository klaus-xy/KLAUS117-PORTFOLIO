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
    "LETS WORK TOGETHER",
    ">>>",
    "LETS CREATE COOL SH*T",
    ">>>",
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
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <div className={"w-full h-20 container mx-auto mb-6"}>
        <Marquee
          className=" text-5xl font-helvetica-neue font-semibold bg-background border-terminal-green border-y-2 "
          direction="left"
          cycleTime={28}
        >
          {
            /* Map Contents here. /
            bannerTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2">
                                 </div>

                <span
               
                >
                  {text}
                </span>
              </div>
            ))
          }
        </Marquee>
      </div> */}
      {/* <MainFooter /> */}
    </div>
  );
};

export default page;
