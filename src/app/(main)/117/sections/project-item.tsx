import React from "react";

interface Props {
  projectName?: string;
}
const ProjectItem = ({ projectName = "Project 000" }: Props) => {
  return <li className=" text-2xl border-y py-6">{projectName}</li>;
};

export default ProjectItem;
