"use client";
import { Project } from "@/data/all-projects";

interface Props {
  project: Project;
  isActive?: boolean;
  onHoverChange?: (project: Project | null) => void;
}

const ProjectItem = ({ project, isActive = false, onHoverChange }: Props) => {
  return (
    <li
      data-cursor-text="View Project"
      onMouseEnter={() => onHoverChange?.(project)}
      onMouseLeave={() => onHoverChange?.(null)}
      className={`min-h-26 flex justify-between items-center text-2xl border-y px-4 py-6 relative`}
    >
      {/* <span className="absolute -left-4 bottom-8 text-xs">00</span> */}
      <h4>{project.name}</h4>
      {isActive && <div className="w-20 h-20 bg-primary lg:hidden "></div>}
    </li>
  );
};

export default ProjectItem;
