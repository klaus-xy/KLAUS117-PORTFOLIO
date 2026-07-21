import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card>
        <CardContent className="w-full max-h-[80dvh] flex aspect-square items-center justify-center p-6">
          <span className="text-7xl font-semibold">🚧</span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
