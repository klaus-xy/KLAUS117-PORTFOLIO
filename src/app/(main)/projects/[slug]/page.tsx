import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AllProjects, getProjectBySlug } from "@/data/all-projects";
import ProjectHeroVideo from "@/components/project-hero-video";
import LinkDos from "@/components/links/link-dos";
import { Badge } from "@/components/ui/badge";
import ProjectNavDots from "../project-nav-dots";

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

  const currentIndex = AllProjects.findIndex((p) => p.slug === project.slug);
  const nextProject = AllProjects[(currentIndex + 1) % AllProjects.length];

  return (
    <div>
      {/* HERO */}
      <div className="relative w-full h-[85vh] overflow-hidden rounded-b-4xl border-b-2 bg-muted">
        {project.trailerUrl && <ProjectHeroVideo src={project.trailerUrl} />}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />

        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 p-8 md:p-16">
          <div>
            <span className="font-departure-mono text-xs text-terminal-green tracking-widest">
              //:: {project.slug}
            </span>
            <h1 className="font-eurostile text-6xl md:text-8xl leading-none">
              {project.name}
            </h1>
          </div>

          {/* META: role / tech stack / links */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-departure-mono text-xs tracking-widest text-terminal-green uppercase">
              {project.role ?? "Role :: TBA"}
            </span>
            {project.techStack?.length ? (
              project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-terminal-green font-departure-mono text-terminal-green"
                >
                  {tech}
                </Badge>
              ))
            ) : (
              <Badge
                variant="outline"
                className="border-muted-foreground/40 font-departure-mono text-muted-foreground"
              >
                Tech Stack :: Coming Soon
              </Badge>
            )}
          </div>

          <div className="-ml-3 flex flex-wrap gap-2">
            {project.links?.length ? (
              project.links.map((link) => (
                <LinkDos key={link.url} href={link.url} name={link.label} />
              ))
            ) : (
              <span className="flex items-start gap-2 px-3 py-1 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase">
                {">_ "}Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="rounded-3xl border border-terminal-green/20 bg-muted/40 p-8 md:p-12">
          <div className="flex items-center gap-3 border-b border-terminal-green/20 pb-6">
            <span className="h-2 w-2 rounded-full bg-terminal-green" />
            <h2 className="font-eurostile text-3xl text-terminal-green uppercase md:text-4xl">
              {project.name}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr]">
            <dl className="flex flex-col gap-6 font-departure-mono text-sm">
              <div>
                <dt className="text-terminal-green uppercase tracking-widest">
                  Category
                </dt>
                <dd className="mt-1 text-foreground uppercase">
                  {project.category ?? "TBA"}
                </dd>
              </div>
              <div>
                <dt className="text-terminal-green uppercase tracking-widest">
                  Role
                </dt>
                <dd className="mt-1 text-foreground uppercase">
                  {project.role ?? "TBA"}
                </dd>
              </div>
              <div>
                <dt className="text-terminal-green uppercase tracking-widest">
                  Tech Stack
                </dt>
                <dd className="mt-1 text-foreground uppercase">
                  {project.techStack?.length
                    ? project.techStack.join(", ")
                    : "Coming Soon"}
                </dd>
              </div>
            </dl>

            <p className="font-helvetica-neue text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="container mx-auto max-w-5xl px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {project.images?.length ? (
            project.images.map((src) => (
              <div
                key={src}
                className="relative aspect-video overflow-hidden rounded-2xl bg-muted"
              >
                <Image
                  src={src}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full flex aspect-video items-center justify-center rounded-2xl bg-muted">
              <span className="font-departure-mono text-sm text-muted-foreground">
                🚧 Gallery :: Coming Soon
              </span>
            </div>
          )}
        </div>
      </div>

      {/* UP NEXT */}
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group relative block h-[50vh] w-full overflow-hidden border-t border-terminal-green/20"
      >
        {nextProject.trailerUrl ? (
          <video
            src={nextProject.trailerUrl}
            className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-80"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="absolute inset-0 bg-muted" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-background/20" />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 pb-16 text-center">
          <span className="font-departure-mono text-xs tracking-widest text-terminal-green uppercase">
            //:: Up Next
          </span>
          <h2 className="font-eurostile text-5xl leading-none md:text-7xl">
            {nextProject.name}
          </h2>
        </div>
      </Link>

      {/* <ProjectNavDots currentSlug={project.slug} /> */}
    </div>
  );
};

export default ProjectPage;
