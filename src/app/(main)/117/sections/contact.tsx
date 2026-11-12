"use client";

import { LucideExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SOCIAL_LINKS } from "@/data/socials";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/marquee";

type Point = [number, number];

const round2 = (n: number) => Math.round(n * 100) / 100;
const fmt = ([x, y]: Point) => `${round2(x)} ${round2(y)}`;
const lerp = (a: Point, b: Point, t: number): Point => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
];
const along = (from: Point, to: Point, dist: number): Point => {
  const len = Math.hypot(to[0] - from[0], to[1] - from[1]) || 1;
  const d = Math.min(dist, len / 2);
  return lerp(from, to, d / len);
};

// Closed path of 8 cubic segments (4 edges + 4 rounded corners) around four
// vertices. Every shape is built the same way, so motion can interpolate
// between any two of them.
const roundedShape = (v: [Point, Point, Point, Point], radius: number) => {
  const k = 0.55;
  const starts = v.map((p, i) => along(p, v[(i + 1) % 4], radius));
  const ends = v.map((p, i) => along(v[(i + 1) % 4], p, radius));
  let d = `M${fmt(starts[0])}`;
  for (let i = 0; i < 4; i++) {
    const vertex = v[(i + 1) % 4];
    const nextStart = starts[(i + 1) % 4];
    d += ` C${fmt(lerp(starts[i], ends[i], 1 / 3))} ${fmt(lerp(starts[i], ends[i], 2 / 3))} ${fmt(ends[i])}`;
    d += ` C${fmt(lerp(ends[i], vertex, k))} ${fmt(lerp(nextStart, vertex, k))} ${fmt(nextStart)}`;
  }
  return `${d}Z`;
};

const DOT_SHAPES = {
  pill: roundedShape(
    [
      [0, 0],
      [48, 0],
      [48, 32],
      [0, 32],
    ],
    16,
  ),
  circle: roundedShape(
    [
      [8, 0],
      [40, 0],
      [40, 32],
      [8, 32],
    ],
    20,
  ),
  square: roundedShape(
    [
      [8, 0],
      [40, 0],
      [40, 32],
      [8, 32],
    ],
    7,
  ),
  diamond: roundedShape(
    [
      [24, 1],
      [41, 16],
      [24, 31],
      [7, 16],
    ],
    3,
  ),
  triangle: roundedShape(
    [
      [24, 1],
      [45, 30],
      [24, 30],
      [3, 30],
    ],
    3,
  ),
};
const DOT_CYCLE = [
  DOT_SHAPES.pill,
  DOT_SHAPES.circle,
  DOT_SHAPES.square,
  DOT_SHAPES.diamond,
  DOT_SHAPES.triangle,
];
// Hold each shape for 60% of its slot, then morph into the next one.
const DOT_KEYFRAMES = [...DOT_CYCLE.flatMap((s) => [s, s]), DOT_SHAPES.pill];
const DOT_TIMES = [
  ...DOT_CYCLE.flatMap((_, i) => [
    i / DOT_CYCLE.length,
    (i + 0.6) / DOT_CYCLE.length,
  ]),
  1,
];

const HEADING_LINES = ["Lets", "Make Ideas", "Reality"];

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const bannerTexts = [
    "LETS WORK TOGETHER.",
    "   ",
    "LETS MAKE IDEAS REALITY.",
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
      {/* Each line slides up from behind its own mask, staggered; the dot
          then drops in last as the full stop. Re-plays on re-entry. */}
      <motion.h1
        initial={reduceMotion ? false : "linesHidden"}
        whileInView="linesShow"
        viewport={{ once: false, amount: 0.5, margin: "0px 0px -10% 0px" }}
        variants={{
          linesHidden: {},
          linesShow: { transition: { staggerChildren: 0.12 } },
        }}
        className="w-max relative text-[clamp(2.5rem,13vw,3.75rem)] sm:text-6xl md:text-7xl lg:text-9xl "
      >
        {HEADING_LINES.map((line) => (
          <span
            key={line}
            className="block"
            // Clip without changing layout; the bottom is extended so
            // descenders (the "y" in Reality) aren't cut off.
            style={{ clipPath: "inset(0 -0.1em -0.22em -0.1em)" }}
          >
            <motion.span
              className="block"
              variants={{
                linesHidden: { y: "135%" },
                linesShow: {
                  y: "0%",
                  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3, margin: "0px 0px -10% 0px" }}
          variants={{
            hidden: { y: -70, opacity: 0, scaleX: 0.7, scaleY: 1.3 },
            show: {
              y: [-70, 0, -8, 0],
              scaleX: [0.7, 1.35, 0.92, 1],
              scaleY: [1.3, 0.55, 1.12, 1],
              opacity: [0, 1, 1, 1],
              transition: {
                duration: 0.85,
                times: [0, 0.45, 0.72, 1],
                ease: "easeOut",
                delay: 0.85,
              },
            },
          }}
          style={{ originY: 1 }}
          className="absolute bottom-2 -right-2 mx-2 w-9 h-6 sm:w-12 sm:h-8 md:w-[4.5rem] md:h-12 lg:w-24 lg:h-16"
        >
          <svg
            viewBox="0 0 48 32"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="h-full w-full overflow-visible fill-terminal-green"
          >
            <motion.path
              d={DOT_SHAPES.pill}
              animate={reduceMotion ? undefined : { d: DOT_KEYFRAMES }}
              transition={{
                duration: 10,
                times: DOT_TIMES,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1.6,
              }}
            />
          </svg>
        </motion.div>
      </motion.h1>
      {/* <p>
        Have questions or want to get in touch? We'd love to hear from you!
        Whether you're interested in collaborating, have feedback, or just want
        to say hello, feel free to reach out to me. xD 👀
      </p> */}

      {/* SOCIAL LINKS */}
      <div className="mt-16 mb-16 sm:mt-20 sm:mb-20 md:mt-28 md:mb-32 font-eurostile">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:tracking-wide hover:tracking-tighter transition-all duration-400 ease-in-out border-b-3 border-terminal-green py-4 hover:text-primary"
          >
            {social.name}
            <LucideExternalLink />
          </a>
        ))}
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
