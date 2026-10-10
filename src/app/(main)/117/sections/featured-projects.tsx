"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import ProjectItem from "../../projects/project-item";
import { Button } from "@/components/ui/button";
import { AllProjects, PROJECT_CATEGORIES, Project } from "@/data/all-projects";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import RollingCounter from "@/components/rolling-counter";
import MiniTrailer from "@/components/mini-trailer";
import { ArrowUpRight, LucideArrowUpRightFromSquare } from "lucide-react";
import TransitionLink from "@/components/transition-link";
import Marquee from "@/components/marquee";
import Spinner from "@/components/ui/spinner";
import { BRAND_ICONS } from "@/components/icons/brand-icons";

const CATEGORY_PRIORITY = ["Game Dev", "Web Dev"] as const;
const FEATURED_TABS = [
  "All",
  ...CATEGORY_PRIORITY,
  ...PROJECT_CATEGORIES.filter(
    (category) => !(CATEGORY_PRIORITY as readonly string[]).includes(category),
  ),
].filter(
  (tab) =>
    tab === "All" || AllProjects.some((project) => project.category === tab),
);

const getTabProjects = (tab: string) =>
  tab === "All"
    ? AllProjects
    : AllProjects.filter((project) => project.category === tab);

const bannerTech = [
  "Unreal Engine",
  "Unity",
  "C++",
  "C#",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "shadcn/ui",
];
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [videoErrored, setVideoErrored] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [tabIndex, setTabIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const isListInView = useInView(listRef, { amount: 0.25 });

  useEffect(() => {
    setVideoErrored(false);
    setVideoReady(false);
  }, [hoveredProject?.slug]);

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setTabIndex(carouselApi.selectedScrollSnap());
    onSelect();
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const showVideo = Boolean(hoveredProject?.trailerUrl) && !videoErrored;

  return (
    <SectionWrapper
      id="projects"
      wrapperClassName=" "
      className="max-w-none px-0 sm:px-0 lg:px-0 2xl:px-0"
    >
      {/* HEADER */}
      <div className="mb-24 sm:px-4 tracking-tight bg-transparent">
        <div className="flex justify-center sm:justify-center items-center">
          <h1 className="text-[50px] sm:text-6xl lg:text-9xl">FEATURE </h1>
          <MiniTrailer
            className="rounded-l-none sm:rounded-l-none w-24 h-16 sm:w-32 sm:h-24"
            url="/videos/project-showcases/racing-realms/racing-realms.mp4"
          />
          {/* <span>⬅animate in</span> */}
          {/* Could have a character pushing the words into place */}
        </div>
        <div className="flex justify-center items-center">
          {/* <span>animate in ➡️</span> */}
          <h1 className="text-[50px] sm:text-6xl lg:text-9xl">Pr</h1>
          <MiniTrailer className="w-24 h-16 sm:w-32 sm:h-24" />
          <h1 className="text-[50px] sm:text-6xl lg:text-9xl">jects</h1>
        </div>

        {/* <p>Lets just say I've been busy.</p> */}
        {/* <h3 className="font-departure-mono absolute -z-10 -top-8  -right-0  text-[128px] sm:text-[150px] md:text-[180px] text-transparent [-webkit-text-stroke:1.5px_white]">
        01
      </h3> */}
        <div className="w-screen -z-10">
          <Marquee
            className="w-[120%] h-16 sm:h-32 mb-6 text-3xl sm:text-6xl rotate-15 relative top-14 -left-20 -z-10 font-helvetica-neue font-semibold bg-background border-terminal-green border-y-4 "
            direction="right"
            cycleTime={40}
          >
            {bannerTech.map((tech, index) => {
              const Icon = BRAND_ICONS[tech];
              return (
                <div key={index} className="flex items-center gap-4 mx-6">
                  {Icon && <Icon className="size-8 sm:size-12 shrink-0" />}
                  <span>{tech.toUpperCase()}</span>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>

      {/* FEATURED PROJECTS CONTAINER */}
      <div
        className="w-full min-h-[50vh] flex gap-4 my-10"
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* FEATURED PROJECT PREVIEW */}
        <div className="lg:w-2/3 max-h-200 mt-10 z-10 hidden lg:flex relative rounded-r-[2rem] bg-background border border-muted/30  overflow-hidden">
          <AnimatePresence mode="wait">
            {showVideo && hoveredProject?.trailerUrl ? (
              <motion.div
                key={hoveredProject.trailerUrl}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <motion.video
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{
                    opacity: videoReady ? 1 : 0,
                    scale: videoReady ? 1 : 1.04,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  src={hoveredProject.trailerUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={() => setVideoReady(true)}
                  onError={() => setVideoErrored(true)}
                />
                {!videoReady && !videoErrored && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center text-terminal-green"
                  >
                    <Spinner />
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={hoveredProject?.slug ?? "idle"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full flex items-center justify-center text-center text-muted-foreground px-6 text-3xl font-medium font-eurostile"
              >
                {hoveredProject ? hoveredProject.name : "Project :: Preview"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* FEATURED PROJECT LIST */}
        <div className="w-full lg:w-2/3 2xl:w-1/2 px-2 sm:px-6 bg-background pt-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0,
              margin: "0px 0px 0% 0px",
            }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0 }}
            className="text-primary text-right tracking-widest font-eurostile px-2 pb-4 border-b-3 border-terminal-green "
          >
            <h2 className="text-6xl sm:text-6xl ">
              <RollingCounter
                value={getTabProjects(FEATURED_TABS[tabIndex]).length}
              />
            </h2>
            <div className="flex justify-between items-center px-2">
              {/* FILTER */}
              <div className="flex gap-2">
                {FEATURED_TABS.map((tab, i) => (
                  <motion.button
                    key={tab}
                    type="button"
                    aria-label={`Show ${tab} projects`}
                    aria-pressed={i === tabIndex}
                    onClick={() => carouselApi?.scrollTo(i)}
                    initial={false}
                    animate={{ width: i === tabIndex ? 24 : 16 }}
                    transition={{ type: "spring", stiffness: 220, damping: 22 }}
                    className={cn(
                      "h-2 rounded-2xl transition-colors duration-300",
                      i === tabIndex ? "bg-teal-300" : "bg-accent",
                    )}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {FEATURED_TABS[tabIndex]}
              </span>
            </div>
          </motion.div>
          <div ref={listRef}>
            <Carousel setApi={setCarouselApi} opts={{ align: "start" }}>
              <CarouselContent
                className="ml-0"
                viewportClassName="!overflow-visible"
              >
                {FEATURED_TABS.map((tab, tabI) => {
                  const projects = getTabProjects(tab);
                  return (
                    <CarouselItem key={tab} className="pl-0">
                      <div className="max-h-107.5 sm:max-h-122.5 overflow-x-hidden overflow-y-auto scrollbar-hidden">
                        <motion.ul
                          variants={listVariants}
                          initial="hidden"
                          animate={
                            isListInView && tabI === tabIndex
                              ? "show"
                              : "hidden"
                          }
                        >
                          {projects.map((project, i) => (
                            <ProjectItem
                              key={project.slug}
                              index={i + 1}
                              project={project}
                              isActive={hoveredProject?.slug === project.slug}
                              onHoverChange={setHoveredProject}
                            />
                          ))}
                        </motion.ul>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-full flex justify-end items-center mt-10 sm:py-20 sm:pr-4 ">
            <TransitionLink href={"/projects"}>
              <Button
                className="text-primary sm:text-xl border  hover:border-primary font-eurostile tracking-wider px-3 py-0 sm:py-7 sm:px-5 bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
                size={"lg"}
                variant={"outline"}
              >
                View All
                <LucideArrowUpRightFromSquare size={24} className="ml-2" />
              </Button>
            </TransitionLink>
          </div>
        </div>
        {/* <div className="w-2/3 h-[50vh] bg-amber-300"></div> */}
        {/* <div className="w-full h-[50vh] bg-red-300"></div> */}
      </div>
    </SectionWrapper>
  );
};

export default FeaturedProjects;
