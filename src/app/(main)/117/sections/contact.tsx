import { LucideExternalLink } from "lucide-react";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/marquee";

const Contact = () => {
  const bannerTexts = [
    "LETS WORK TOGETHER.",
    "   ",
    "LETS CREATE COOL SH*T.",
    "   ",
    "CHECK OUT AREA 59 STUDIO™.",
    "   ",
    "SEND ME A MESSAGE.",
    "   ",
    "SERIOUSLY FLOOD MY EMAIL.",
    "   ",
    "XD.",
    "   ",
    "OKAY BYE.",
    "   ",
  ];
  return (
    <SectionWrapper id="contact" wrapperClassName="min-h-[90dvh] ">
      <h1 className="relative text-6xl sm:text-6xl md:text-7xl lg:text-9xl ">
        Lets Create <br />
        Cool Sh*t
        <div className="absolute bottom-2 -right-4 mx-2 w-6 h-4 sm:w-8 sm:h-5 md:w-12 md:h-8 bg-terminal-green rounded-full"></div>
      </h1>
      {/* <p>
        Have questions or want to get in touch? We'd love to hear from you!
        Whether you're interested in collaborating, have feedback, or just want
        to say hello, feel free to reach out to me. xD 👀
      </p> */}

      {/* SOCIAL LINKS */}
      <div className="mt-16 mb-16 sm:mt-20 sm:mb-20 md:mt-28 md:mb-32 font-eurostile">
        <div className="flex justify-between items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-3 border-terminal-green py-4 ">
          LinkedIn
          <LucideExternalLink />
        </div>
        <div className="flex justify-between items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-3 border-terminal-green py-4 ">
          GitHub
          <LucideExternalLink />
        </div>
        <div className="flex justify-between items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-3 border-terminal-green py-4 ">
          Behance
          <LucideExternalLink />
        </div>
        <div className="flex justify-between items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold border-b-3 border-terminal-green py-4 ">
          X
          <LucideExternalLink />
        </div>
      </div>

      {/* <div className="my-10">
        <Button
          size={"lg"}
          className="before:bg-lime-500 before:h-10 before:w-10 "
        >
          Send Pigeon
        </Button>
      </div> */}
      {/* <div className={"w-full h-32 absolute bottom-0 left-0 -z-10"}>
        <Marquee
          className=" text-6xl rotate-12 bg-accent font-helvetica-neue font-semibold border-terminal-green border-y-4 "
          direction="left"
          cycleTime={28}
        >
          {
            // Map Contents here.
            bannerTexts.map((text, index) => (
              <div key={index} className="flex">
                <div className="flex gap-2 mx-2"></div>

                <span>{text}</span>
              </div>
            ))
          }
        </Marquee>
      </div> */}
    </SectionWrapper>
  );
};

export default Contact;
