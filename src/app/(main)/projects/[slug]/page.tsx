import Link from "next/link";
import { notFound } from "next/navigation";
import { AllProjects, getProjectBySlug } from "@/data/all-projects";
import ProjectHeroVideo from "@/components/project-hero-video";

import { ArrowRightFromLine, Globe, Link2, Quote } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProjectInfo from "../project-info";
import GalleryImage from "../gallery-image";

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
    <div className="overflow-hidden">
      {/* HERO/SHOWCASE*/}
      <div className="relative w-full h-[80vh] sm:h-[80vh] overflow-hidden rounded-b-[2rem] border-5 sm:border-6 border-b-primary bg-muted">
        {project.trailerUrl && <ProjectHeroVideo src={project.trailerUrl} />}

        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 p-6 sm:p-8 md:px-12">
          <div>
            {/* <span className="font-departure-mono text-xs text-terminal-green tracking-widest">
              //:: {project.slug}
            </span> */}
            {/* <h1 className="font-eurostile text-6xl md:text-8xl leading-none">
              {project.name}
            </h1> */}
          </div>

          {/* META: role / tech stack / links */}

          <div className=" w-max flex flex-wrap gap-4 bg-background/50 backdrop-blur-md px-5 py-3 rounded-full border">
            {project.links?.length ? (
              project.links.map((link, index) => {
                const Icon = link.icon ?? Link2;
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="text-muted-foreground"
                  >
                    <Icon className="size-5" />
                    {/* <span>{link.label}</span> */}
                  </Link>
                );
              })
            ) : (
              <span className="flex items-start gap-2 px-3 py-1 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase">
                {">_ "}Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <section className="w-[100%] py-10 px-4 sm:px-8 md:py-10">
        <div className="mx-auto w-full ">
          <div className="flex items-start min-h-[10vh]">
            <h2 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl">
              {project.name}
            </h2>
          </div>
          {/* <Separator className="data-horizontal:h-1" /> */}

          <div className="w-full flex mx-0.5 sm:mx-2 my-2 gap-2">
            {project.links?.length ? (
              project.links.map((link, index) => {
                const Icon = link.icon ?? Globe;
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="flex jsustify-center items-center border-r-2 gap-2 pr-3 py-1 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase"
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </Link>
                );
              })
            ) : (
              <span className="flex items-start gap-2 px-3 py-1 font-departure-mono text-xs whitespace-nowrap text-muted-foreground uppercase">
                {">_ "}Coming Soon
              </span>
            )}
          </div>
          {/* <Separator className="data-horizontal:h-1" /> */}

          <div className="xl:max-w-11/12 my-8 sm:px-8">
            {/* QUICK PROJECT BREAKDOWN */}
            <div className="flex flex-col">
              <ProjectInfo label="Category" info={project.category as string} />
              <ProjectInfo label="Role" info={project.role as string} />
              {/* <div className="flex justify-between  ">
                <ProjectInfo
                  label="Industry"
                  info={project.industry as string}
                />
              </div> */}
              <ProjectInfo
                label="Year"
                info={project.date as string}
                className=""
              />
            </div>

            {/* PROJECT DESCRIPTION */}
            <p className="font-helvetica-neue tracking-wide sm:text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="min-h-96 px-2 sm:px-10 ">
        <h2 className="flex justify-center text-3xl sm:text-4xl lg:text-5xl my-10 sm:my-24 mb-8">
          SHOWCASE
        </h2>
        <div className="space-y-4 sm:space-y-6 container mx-auto">
          {project.images?.length ? (
            project.images.map((src) => (
              <GalleryImage key={src} src={src} alt={project.name} />
            ))
          ) : (
            <div className="col-span-full flex aspect-video items-center justify-center rounded-2xl bg-muted">
              <span className="font-departure-mono text-sm text-muted-foreground">
                🚧 Gallery :: Coming Soon
              </span>
            </div>
          )}
        </div>
      </section>
      {/* OPTIONAL PROJECT TESTIMONIALS */}
      <section className="my-8 space-y-3 text-center px-2">
        <Quote />
        <p className="text-xs text-muted-foreground">
          Klaus single handedly brought this project to live, while delivering
          at crazy speed. What a guy!
        </p>
        <span className="text-terminal-green">- Avis</span>
      </section>
      {/* UP NEXT SECTION */}

      <Link
        href={`/projects/${nextProject.slug}`}
        className="group relative flex justify-center items-center h-[35vh] w-full text-muted-foreground/50 hover:text-primary overflow-hidden rounded-t-2xl border-5 border-t-primary border-b-0 mt-12"
      >
        {nextProject.trailerUrl ? (
          <video
            src={nextProject.trailerUrl}
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-30"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="absolute inset-0 bg-background" />
        )}
        {/* <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-background/20" /> */}
        <div className="relative flex w-full h-full flex-col items-center justify-center gap-10 px-4 pb-16 text-center">
          {/* NAVIGATION */}
          <div className="w-full flex justify-end items-center px-8 ">
            <div className="group flex items-center gap-2  p-4 ">
              <span className="text-lg font-eurostile tracking-widest uppercase">
                Next Project
              </span>
              <div className="transition-transform duration-800 group-hover:translate-x-4">
                <ArrowRightFromLine size={28} className="stroke-3" />
              </div>
            </div>
          </div>

          <h2 className="font-eurostile text-primary text-4xl sm:text-5xl md:text-7xl">
            {nextProject.name}
          </h2>
        </div>
      </Link>

      {/* <ProjectNavDots currentSlug={project.slug} /> */}
    </div>
  );
};

export default ProjectPage;
