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
      className={`min-h-26 flex justify-between items-center text-2xl border-y py-6`}
    >
      <h4>{projectName}</h4>
      {isHovered && <div className="w-20 h-20 bg-primary md:hidden "></div>}
    </li>
  );
};

export default ProjectItem;
