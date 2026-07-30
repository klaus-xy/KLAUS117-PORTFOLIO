import React from "react";
import SectionWrapper from "../../../../components/layout/section-wrapper";
import ProjectItem from "../../projects/project-item";
import { Button } from "@/components/ui/button";
import { AllProjects } from "@/data/all-projects";
import MiniTrailer from "@/components/mini-trailer";

const Projects = () => {
  return (
    <SectionWrapper id="contact" wrapperClassName=" " className="max-w-none">
      {/* HEADER */}
      <div className="container mx-auto">
        <div className="flex justify-start items-center">
          <h1 className="text-9xl">FEATURE </h1>
          <MiniTrailer className="rounded-l-none" />
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="text-9xl">Pr</h1>
          <MiniTrailer />
          <h1 className="text-9xl">jects</h1>
        </div>

        {/* <p>Lets just say I've been busy.</p> */}
        {/* <h3 className="font-departure-mono absolute -z-10 -top-8  -right-0  text-[128px] sm:text-[150px] md:text-[180px] text-transparent [-webkit-text-stroke:1.5px_white]">
        01
      </h3> */}
        <div className="w-full flex justify-start items-center gap-4 text-terminal-green font-bold">
          <h2>Game Dev</h2>
          <h2>Web Dev</h2>
          <h2>Side Quests</h2>
        </div>
      </div>
      {/* FEATURED PROJECTS CONTAINER */}
      <div className="w-full min-h-[50vh] flex gap-4 my-10">
        {/* PROJECT PREVIEW */}
        <div className="w-2/3 max-h-180 aspect-square hidden lg:flex border-2 rounded flex-1 relative rounded-r-2xl bg-amber-300">
          <div className="place-content-center text-center w-full text-3xl font-medium font-eurostile">
            //:: Project Preview
          </div>
        </div>
        <div className="w-full flex-1 px-4">
          <ul>
            {AllProjects.map((project) => (
              <ProjectItem key={project.slug} projectName={project.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-end items-center relative lg:-top-10">
        <Button
          className="before:bg-lime-500 before:h-14 before:w-12 "
          size={"lg"}
        >
          See More Projects
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
