import React from "react";
import SectionWrapper from "./section-wrapper";
import ProjectItem from "../../projects/project-item";
import { Button } from "@/components/ui/button";
import { AllProjects } from "@/data/all-projects";

const Projects = () => {
  return (
    <SectionWrapper id="contact" wrapperClassName=" ">
      <div className="flex justify-center items-center ">
        <h1 className="text-9xl">Pr</h1>
        <div className="w-32 h-24 mx-2 border-white border-4 bg-muted rounded-3xl overflow-hidden">
          {/* Mini Projects Trailer */}
          <video
            className="w-full h-full object-cover scale-200"
            src="/videos/trailer.mov"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <h1 className="text-9xl">jects</h1>
      </div>
      <p>Lets just say I've been busy.</p>
      {/* <h3 className="font-departure-mono absolute -z-10 -top-8  -right-0  text-[128px] sm:text-[150px] md:text-[180px] text-transparent [-webkit-text-stroke:1.5px_white]">
        01
      </h3> */}
      <div className="w-full min-h-[60vh] flex gap-4 my-10">
        <div className="w-2/3 aspect-square hidden md:flex border-2 rounded flex-1 relative">
          <div className="absolute w-full h-full -left-10 bg-amber-300">
            Project Preview
          </div>
        </div>
        <div className="w-full flex-1">
          <ul>
            {AllProjects.map((project) => (
              <ProjectItem key={project.slug} projectName={project.name} />
            ))}
          </ul>
        </div>
      </div>
      <Button className="before:bg-lime-500 before:h-10 before:w-10 ">
        See More Projects
      </Button>
      <h2>Game Dev</h2>
      <h2>Web Dev</h2>
      <h2>Side Quests</h2>
    </SectionWrapper>
  );
};

export default Projects;
