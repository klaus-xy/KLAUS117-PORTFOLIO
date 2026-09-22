"use client";
import Link from "next/link";
import { Project } from "@/data/all-projects";

interface Props {
  index: number;
  project: Project;
  isActive?: boolean;
  onHoverChange?: (project: Project | null) => void;
}

const ProjectItem = ({
  index,
  project,
  isActive = false,
  onHoverChange,
}: Props) => {
  return (
    <li
      onMouseEnter={() => onHoverChange?.(project)}
      className="group relative text-muted-foreground hover:text-primary"
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor-text="View Project"
        className="min-h-26 flex justify-between items-center text-2xl border-b-2 hover:border-primary px-4 py-6 transition"
      >
        {/* <span className="absolute -left-4 bottom-8 text-xs">00</span> */}
        <h4>{project.name}</h4>
        <span className="text-6xl font-eurostile text-transparent transition-[-webkit-text-stroke-color] duration-300 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:var(--muted-foreground)] group-hover:[-webkit-text-stroke-color:var(--primary)]">
          0{index}
        </span>
        {isActive && <div className="w-20 h-20 bg-primary lg:hidden "></div>}
      </Link>
    </li>
  );
};

export default ProjectItem;
