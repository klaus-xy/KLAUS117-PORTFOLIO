"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import ProjectItem from "../../projects/project-item";
import { Button } from "@/components/ui/button";
import { AllProjects, Project } from "@/data/all-projects";
import MiniTrailer from "@/components/mini-trailer";

const MAX_FEATURED_PROJECTS = 5;

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [videoErrored, setVideoErrored] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    setVideoErrored(false);
    setVideoReady(false);
  }, [hoveredProject?.slug]);

  const showVideo = Boolean(hoveredProject?.trailerUrl) && !videoErrored;

  return (
    <SectionWrapper id="contact" wrapperClassName=" " className="max-w-none">
      {/* HEADER */}
      <div className="container mx-auto mb-24">
        <div className="flex justify-start items-center">
          <h1 className="text-9xl">FEATURE </h1>
          <MiniTrailer
            className="rounded-l-none"
            url="/videos/racing-realms.mp4"
          />
          {/* <span>⬅animate in</span> */}
          {/* Could have a character pushing the words into place */}
        </div>
        <div className="flex justify-center items-center">
          {/* <span>animate in ➡️</span> */}
          <h1 className="text-9xl">Pr</h1>
          <MiniTrailer />
          <h1 className="text-9xl">jects</h1>
        </div>

        {/* <p>Lets just say I've been busy.</p> */}
        {/* <h3 className="font-departure-mono absolute -z-10 -top-8  -right-0  text-[128px] sm:text-[150px] md:text-[180px] text-transparent [-webkit-text-stroke:1.5px_white]">
        01
      </h3> */}
        {/* <div className="w-full flex justify-start items-center gap-4 text-terminal-green font-bold font-departure-mono">
          <h2>Game Dev</h2>
          <h2>Web Dev</h2>
          <h2>Side Quests</h2>
        </div> */}
      </div>
      {/* FEATURED PROJECTS CONTAINER */}
      <div
        className="w-full min-h-[50vh] flex gap-4 my-10"
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* PROJECT PREVIEW */}
        <div className="w-1/3 max-h-170 aspect-square hidden lg:flex border-2 flex-1 relative rounded-r-[2rem] bg-muted overflow-hidden">
          <AnimatePresence mode="wait">
            {showVideo && hoveredProject?.trailerUrl ? (
              <motion.video
                key={hoveredProject.trailerUrl}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{
                  opacity: videoReady ? 1 : 0,
                  scale: videoReady ? 1 : 1.04,
                }}
                exit={{ opacity: 0, scale: 0.97 }}
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
            ) : (
              <motion.div
                key={hoveredProject?.slug ?? "idle"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center text-center px-6 text-3xl font-medium font-eurostile"
              >
                {hoveredProject ? hoveredProject.name : "Project :: Preview"}
                {/* <iframe
              frameBorder="0"
              src="https://itch.io/embed-upload/18623730?color=333333"
              allowFullScreen=""
              width="500"
              height="320"
            >
              <a href="https://klaus117.itch.io/chrono-mancer">
                Play CHRONOMANCERS on itch.io
              </a>
            </iframe> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full flex-1 px-4">
          <ul>
            {AllProjects.slice(0, MAX_FEATURED_PROJECTS).map((project, i) => (
              <ProjectItem
                key={project.slug}
                index={i + 1}
                project={project}
                isActive={hoveredProject?.slug === project.slug}
                onHoverChange={setHoveredProject}
              />
            ))}
          </ul>
          <div className="w-full flex justify-end items-center py-16 pr-8">
            <Button
              className="before:bg-lime-500 before:h-18  before:w-12 before:rounded font-eurostile text-2xl tracking-wide py-8 px-6"
              size={"lg"}
            >
              See All Projects
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
