import TransitionLink from "@/components/transition-link";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/all-projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <TransitionLink href={`/projects/${project.slug}`} className="group block">
      <Card>
        <CardContent className="w-full max-h-[80dvh] flex aspect-square items-center justify-center p-6">
          <span className="text-7xl font-semibold">🔬</span>
        </CardContent>
      </Card>
      <div className="mt-2 flex items-center justify-between font-eurostile text-xs uppercase tracking-widest">
        <span className="transition-colors group-hover:text-terminal-green">
          {project.name}
        </span>
        {project.category && (
          <span className="text-terminal-green font-departure-mono">
            {project.category}
          </span>
        )}
      </div>
    </TransitionLink>
  );
};

export default ProjectCard;
