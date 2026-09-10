import { notFound } from "next/navigation";
import { AllProjects, getProjectBySlug } from "@/data/all-projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return AllProjects.map((project) => ({ slug: project.slug }));
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* HERO */}
      <div className="relative w-full h-screen overflow-hidden bg-muted">
        {project.trailerUrl && (
          <video
            src={project.trailerUrl}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <span className="font-departure-mono text-xs text-terminal-green tracking-widest">
            //:: {project.slug}
          </span>
          <h1 className="font-eurostile text-6xl md:text-8xl leading-none">
            {project.name}
          </h1>
        </div>
      </div>

      {/* DETAILS */}
      <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-helvetica-neue text-lg text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
