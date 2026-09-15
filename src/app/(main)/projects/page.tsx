"use client";
import { useState } from "react";
import ProjectCard from "./project-card";
import CategoryFilter, { CategoryOption } from "./category-filter";
import { AllProjects } from "@/data/all-projects";
import ScrambleText from "@/components/ui/scramble-text";

const ProjectsPage = () => {
  const [selected, setSelected] = useState<CategoryOption>("All");

  const filteredProjects =
    selected === "All"
      ? AllProjects
      : AllProjects.filter((project) => project.category === selected);

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="font-eurostile text-6xl uppercase">
        <ScrambleText
          text="Projects"
          scrambleSpeed={100}
          revealSpeed={1.25}
          chars="117"
        />
      </h1>
      <h2 className="font-departure-mono text-sm text-muted-foreground uppercase tracking-widest">
        All my works in one place
      </h2>

      <div className="mt-8 mb-12">
        <CategoryFilter selected={selected} onSelect={setSelected} />
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="font-departure-mono text-sm text-muted-foreground uppercase">
          //:: No projects in this category yet.
        </p>
      )}
    </div>
  );
};

export default ProjectsPage;
