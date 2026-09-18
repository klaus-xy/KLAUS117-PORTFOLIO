import Link from "next/link";
import { notFound } from "next/navigation";
import { AllProjects, getProjectBySlug } from "@/data/all-projects";
import ProjectHeroVideo from "@/components/project-hero-video";

import { ArrowBigLeftIcon, ArrowBigRightIcon, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProjectInfo from "../project-info";

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
  const prevProject = AllProjects[(currentIndex - 1) % AllProjects.length];

  return (
    <div>
      {/* HERO/SHOWCASE*/}
      <div className="relative w-full h-[85vh] overflow-hidden rounded-b-4xl border-4 border-b-primary bg-muted">
        {project.trailerUrl && <ProjectHeroVideo src={project.trailerUrl} />}

        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 p-8 md:p-16">
          <div>
            {/* <span className="font-departure-mono text-xs text-terminal-green tracking-widest">
              //:: {project.slug}
            </span> */}
            <h1 className="font-eurostile text-6xl md:text-8xl leading-none">
              {project.name}
            </h1>
          </div>

          {/* META: role / tech stack / links */}

          <div className="-ml-3 flex flex-wrap gap-2">
            {project.links?.length ? (
              project.links.map((link, i) => (
                <Link
                  key={i}
                  href="https://area59-studio.vercel.app/"
                  target="_blank"
                  className="flex jsustify-center items-center gap-2 px-3 py-1 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase"
                >
                  <Globe />
                  <span>Visit</span>
                </Link>
              ))
            ) : (
              <span className="flex items-start gap-2 px-3 py-1 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase">
                {">_ "}Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <section className="w-[90%] py-16 md:py-24">
        <div className="mx-auto w-full px-6">
          <div className="flex items-center pb-6">
            <h2 className="text-4xl">{project.name}</h2>
          </div>
          <Separator className="data-horizontal:h-1" />

          <div className=" flex mx-2 gap-2">
            {project.links?.length ? (
              project.links.map((link, i) => (
                <Link
                  key={i}
                  href="https://area59-studio.vercel.app/"
                  target="_blank"
                  className="flex jsustify-center items-center border-r-2 gap-2 px-3 py-3 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase"
                >
                  <Globe size={18} />
                  <span>Visit</span>
                </Link>
              ))
            ) : (
              <span className="flex items-start gap-2 px-3 py-1 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase">
                {">_ "}Coming Soon
              </span>
            )}
          </div>
          <Separator className="data-horizontal:h-1" />

          <div className="container mx-auto my-8 ">
            {/* QUICK PROJECT BREAKDOWN */}
            <div className="flex flex-col mt-10">
              <ProjectInfo label="Category" info={project.category as string} />
              <ProjectInfo label="Role" info={project.role as string} />
              <ProjectInfo label="Year" info={project.date as string} />
            </div>

            {/* PROJECT DESCRIPTION */}
            <p className="font-helvetica-neue text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <div className="min-h-96">
        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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
        </div> */}
      </div>

      {/* UP NEXT */}
      <div>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group relative block h-[40vh] w-full overflow-hidden border-t-4 border-terminal-green"
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
            {/* NAVIGATION */}
            <div className="w-full flex justify-between items-center px-8">
              <div className="flex items-center gap-2">
                <ArrowBigLeftIcon />
                <span className="font-eurostile text-xs tracking-widest text-terminal-green uppercase">
                  Previous Project
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-eurostile text-xs tracking-widest text-terminal-green uppercase">
                  Next Project
                </span>
                <ArrowBigRightIcon />
              </div>
            </div>

            <h2 className="font-eurostile text-5xl leading-none md:text-7xl">
              {nextProject.name}
            </h2>
          </div>
        </Link>
      </div>
      {/* <ProjectNavDots currentSlug={project.slug} /> */}
    </div>
  );
};

export default ProjectPage;
