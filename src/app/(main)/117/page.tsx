import LinkDos from "@/components/link-dos";
import Marquee from "@/components/marquee";
import { ArrowBigDownDash } from "lucide-react";

const bannerTexts = [
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
const page = () => {
  console.log("117 page");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 font-departureMono bg-black ">
      <div>
        <h1 className="text-xl text-green-500">|[ UNDER RECONSTRUCTION ]|</h1>
        <h3>Klaus is making rad changes</h3>
      </div>
      <div
        className="max-w-md max-h-28
       flex flex-col justify-start items-center flex-wrap gap-4"
      >
        <LinkDos href={"/117"} name={"Resume"} />
        <LinkDos href={"/117/about"} name={"Git Hub"} />
        <LinkDos href={"/117/projects"} name={"Dev Log"} />
        <LinkDos href={"/117/contact"} name={"Behance"} />
        <LinkDos href={"/117/contact"} name={"X"} />
        <LinkDos href={"/117/contact"} name={"Linked In"} />
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

      <div className={"w-full h-12 absolute bottom-[20%]"}>
        <Marquee
          className="rotae-12 text-md bg-black border-green-500 border-y-2"
          direction="right"
          speed={0}
        >
          {
            /* Map Contents here. */
            bannerTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2">
                  {/* <div className="w-2 h-full border-2 border-dotted border-lime-500 -skew-x-[30deg]"></div> */}
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
