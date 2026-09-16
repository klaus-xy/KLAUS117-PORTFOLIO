import ScrambleText from "@/components/ui/scramble-text";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/data/all-projects";
import React from "react";

interface Props {
  label: string;
  info: string;
}

const ProjectInfo = ({ label = "Label", info = "Info" }: Props) => {
  return (
    <div className="py-4">
      <h3 className="tracking-[0.8rem] text-terminal-green">{label}</h3>
      <h2 className=" ">
        {" "}
        <ScrambleText
          text={info}
          scrambleSpeed={60}
          revealSpeed={2.5}
          chars="PROJECTINFO117"
        />
      </h2>

      <Separator className="my-2 data-horizontal:h-0.5" />
    </div>
  );
};

export default ProjectInfo;
