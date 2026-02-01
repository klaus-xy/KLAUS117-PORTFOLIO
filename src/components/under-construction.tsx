import { ReactNode } from "react";
import Marquee from "./marquee";

interface LayoutProps {
  header?: string;
  subheader?: string;
  children: ReactNode;
}
// BANNER 1 CONTENT
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

// BANNER 2 CONTENT
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
const UnderConstruction = ({
  header = "Under Construction",
  subheader = "Klaus is making rad changes",
  children,
}: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 font-departure-mono relative ">
      <div className="relative -top-32 space-y-6">
        {/* MAIN TEXT */}
        <div className="">
          <h2 className="text-lg text-terminal-green uppercase tracking-widest ">
            |[ {header} ]|
          </h2>
          <h3>{subheader}</h3>
        </div>
        {/* LINKS AND STUFFS */}
        <div className="w-full max-w-[400px] h-24 flex flex-col justify-between items-center flex-wrap gap-2 bg-emerald-95">
          {children}
        </div>
      </div>

      {/* MARQUEE 1 */}
      <div className={"w-full h-12 absolute bottom-[30%]"}>
        <Marquee
          className="rotate-12 text-md bg-background border-terminal-green border-y-2"
          direction="right"
          cycleTime={10}
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
      {/* MARQUEE 2 */}
      <div className={"w-full h-12 absolute bottom-[30%]"}>
        <Marquee
          className="-rotate-12 text-md bg-background border-terminal-green border-y-2"
          direction="left"
          cycleTime={10}
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

export default UnderConstruction;
