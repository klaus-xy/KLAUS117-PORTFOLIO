import Marquee from "@/components/marquee";
import { ArrowBigDownDash } from "lucide-react";

const bannerTexts = [
  "CONSTRUCTION ZONE",
  "KEEP-OFF!",
  "CLOWN WARE CORPORATION",
  "CAUTION!",
  "FALLING DIVS!",
];
const page = () => {
  console.log("117 page");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center gap-6 font-departureMono ">
      <div>
        <h1 className="text-xl text-green-500">|[ UNDER RECONSTRUCTION ]|</h1>
        <h3>Klaus is making rad changes</h3>
      </div>

      <div className="text-zinc-500 underline flex justify-center hover:text-zinc-200 cursor-pointer">
        <ArrowBigDownDash />
        <a href={"files/117 Resume.zip"} download>
          {" "}
          Dowload Resume
        </a>
      </div>

      <div className={"w-full h-12 absolute bottom-[20%]"}>
        <Marquee
          className="rotate-12 text-lg bg-black border-green-500 border-y-2 border-dotted"
          direction="right"
          speed={10}
        >
          {
            /* Map Contents here. */
            bannerTexts.map((text, index) => (
              <p
                key={index}
                className="before:content-['//'] before:mx-4 after:content-['//'] after:mx-4 "
              >
                {text}
              </p>
            ))
          }
        </Marquee>
        <Marquee
          className="-rotate-12 text-lg bg-black border-green-500 border-y-2 border-dotted"
          speed={20}
        >
          {
            /* Map Contents here. */
            bannerTexts.map((text, index) => (
              <p
                key={index}
                className="before:content-['//'] before:mx-4 after:content-['//'] after:mx-4 "
              >
                {text}
              </p>
            ))
          }
        </Marquee>
      </div>

      <footer className="w-full flex justify-end absolute bottom-4 px-4 ">
        {/* <Image
          src="/images/CW-Corp.svg"
          alt="company logo"
          width={64}
          height={64}
          className="object-contain w-16 h-16 text-orange-400"
          //priority
        /> */}
        {/* <p className="mx-2">👾</p> */}
        {/* <p className="uppercase font-black text-xs font-geistMono italic  text-zinc-500 ">
          Clown Ware®
        </p> */}
      </footer>
    </div>
  );
};

export default page;
