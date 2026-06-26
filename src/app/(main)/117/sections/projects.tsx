import React from "react";
import SectionWrapper from "./section-wrapper";
import ProjectItem from "./project-item";

const Projects = () => {
  return (
    <SectionWrapper id="contact" wrapperClassName="border border-lime-500 ">
      <h1>Projects</h1>
      <p>Lets just say I've been busy.</p>
      <h3 className="font-departure-mono absolute -z-10 -top-8  -right-0  text-[128px] sm:text-[150px] md:text-[180px] text-transparent [-webkit-text-stroke:1.5px_white]">
        001
      </h3>
      <div className="w-full flex gap-4 my-10">
        <div className="w-2/3 aspect-square hidden md:flex border-2 rounded flex-1">
          Project Preview
        </div>
        <div className="w-full flex-1">
          <ul>
            <ProjectItem projectName="Project 000" />
            <ProjectItem projectName="Project 001" />
            <ProjectItem projectName="Project 002" />
            <ProjectItem projectName="Project 003" />
            <ProjectItem projectName="Project 004" />
            <ProjectItem projectName="Project 005" />
          </ul>
        </div>
      </div>
      <h2>Game Dev</h2>
      <h2>Web Dev</h2>
      <h2>Side Quests</h2>
    </SectionWrapper>
  );
};

export default Projects;
