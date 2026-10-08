"use client";
import Link from "next/link";
import { Project, ProjectCategory } from "@/data/all-projects";
import { motion } from "motion/react";
import {
  Code2,
  Gamepad2,
  Cpu,
  Box,
  Sparkles,
  type LucideIcon,
  Laptop2,
  Globe,
  Wand,
} from "lucide-react";

const CATEGORY_ICONS: Record<ProjectCategory, LucideIcon> = {
  "Web Dev": Globe,
  "Game Dev": Gamepad2,
  // Hardware: Cpu,
  // "3D Modeling": Box,
  "Side Quests": Wand,
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

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
    <motion.li
      variants={itemVariants}
      onMouseEnter={() => onHoverChange?.(project)}
      className="group relative sm:text-muted-foreground hover:text-primary"
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor-text="View Project"
        className="flex justify-between items-center text-2xl sm:text-3xl 2xl:text-2xl border-b-2 border-primary px-2 sm:px-4 py-7 sm:py-8 transition"
      >
        {/* <span className="absolute -left-4 bottom-8 text-xs">00</span> */}
        <div className="flex justify-between items-center gap-3">
          <h4 className="text-xl sm:text-2xl z-10">{project.name}</h4>
          {project.category &&
            (() => {
              const CategoryIcon = CATEGORY_ICONS[project.category];
              return (
                <span className="mt-1 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-helvetica-neue z-10">
                  <CategoryIcon className="size-4.5 sm:size-5 stroke-2" />
                  <span className="hidden sm:inline">{project.category}</span>
                </span>
              );
            })()}
        </div>
        <span className="absolute -right-5 sm:top-1/2 sm:-translate-y-1/2 text-6xl lg:text-6xl font-eurostile text-transparent transition-[-webkit-text-stroke-color] duration-300 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:var(--muted)] group-hover:[-webkit-text-stroke-color:var(--primary)]">
          0{index}
        </span>
        {/* {isActive && <div className="w-20 h-20 bg-primary lg:hidden "></div>} */}
      </Link>
    </motion.li>
  );
};

export default ProjectItem;
