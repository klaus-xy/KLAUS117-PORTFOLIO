import LinkDos from "@/components/link-dos";
import Marquee from "@/components/marquee";
import { ArrowBigDownDash } from "lucide-react";

const banner1Texts = [
  "CONSTRUCTION ZONE",
  ">>>",
  "KEEP-OFF!",
  ">>>",
  "CLOWN WARE CORPORATION",
  ">>>",
  "CAUTION!",
  ">>>",
  "FALLING DIVS!",
  ">>>",
];

const banner2Texts = [
  "CONSTRUCTION ZONE",
  "<<<",
  "KEEP-OFF!",
  "<<<",
  "CLOWN WARE CORPORATION",
  "<<<",
  "CAUTION!",
  "<<<",
  "FALLING DIVS!",
  "<<<",
];
const page = () => {
  console.log("117 page");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 font-departure-mono relative ">
      <div className=" relative -top-32 space-y-6">
        {" "}
        {/* MAIN TEXT */}
        <div className="">
          <h2 className="text-lg text-terminal-green uppercase tracking-widest ">
            |[ UNDER RECONSTRUCTION ]|
          </h2>
          <h3>Klaus is making rad changes</h3>
        </div>
        {/* LINKS AND STUFFS */}
        <div className="w-full max-w-[400px] h-24 flex flex-col justify-between items-center flex-wrap gap-2 bg-emerald-95">
          <LinkDos href={"files/117 Resume.zip"} name={"Resume"} />
          <LinkDos href={"https://github.com/klaus-xy"} name={"Git Hub"} />
          <LinkDos
            href={""}
            name={"Dev Logs"}
            openInNewTab={false}
            variant="inactive"
          />
          <LinkDos
            href={"https://www.behance.net/ayobamioyesiku"}
            name={"Behance"}
          />
          <LinkDos href={"https://x.com/0xKlaus117"} name={"X"} />
          <LinkDos
            href={"https://www.linkedin.com/in/ayobami-oyesiku"}
            name={"Linked In"}
          />
        </div>
      </div>
      {/* <div className="text-zinc-500 underline flex justify-center  gap-16">
        <a href={"files/117 Resume.zip"} className="flex" download>
          <ArrowBigDownDash />
          Resume
        </a>

        <a href={"files/117 Resume.zip"} className="flex" download>
          <ArrowBigDownDash />
          Projects
        </a>
      </div> */}

      <div className={"w-full h-12 absolute bottom-[30%]"}>
        <Marquee
          className="rotate-12 text-md bg-background border-terminal-green border-y-2"
          direction="right"
          speed={10}
        >
          {
            /* Map Contents here. */
            banner1Texts.map((text, index) => (
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
      <div className={"w-full h-12 absolute bottom-[30%]"}>
        <Marquee
          className="-rotate-12 text-md bg-background border-terminal-green border-y-2"
          direction="left"
          speed={10}
        >
          {
            /* Map Contents here. */
            banner2Texts.map((text, index) => (
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
    </div>
  );
};

export default page;
