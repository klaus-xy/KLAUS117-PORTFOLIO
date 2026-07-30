"use client";
import React, { useState } from "react";
import ProjectCard from "./project-card";

interface Props {
  projectName?: string;
}
const ProjectItem = ({ projectName = "Project 000" }: Props) => {
  const [isHovered, setIsHovered] = useState(true);
  return (
    <li
      data-cursor-text="View Project"
      className={`min-h-26 flex justify-between items-center text-2xl border-y px-4 py-6 relative`}
    >
      {/* <span className="absolute -left-4 bottom-8 text-xs">00</span> */}
      <h4>{projectName}</h4>
      {isHovered && <div className="w-20 h-20 bg-primary lg:hidden "></div>}
    </li>
  );
};

export default ProjectItem;
