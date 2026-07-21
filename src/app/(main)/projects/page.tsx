import React from "react";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <h2>All my works in one place</h2>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
