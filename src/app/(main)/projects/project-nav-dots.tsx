"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { AllProjects } from "@/data/all-projects";
import { cn } from "@/lib/utils";

interface Props {
  currentSlug: string;
}

const ProjectNavDots = ({ currentSlug }: Props) => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full border border-terminal-green/30 bg-background/70 px-4 py-3 backdrop-blur-sm">
        {AllProjects.map((project) => {
          const isActive = project.slug === currentSlug;
          const isHovered = project.slug === hoveredSlug;

          return (
            <div
              key={project.slug}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredSlug(project.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute bottom-full mb-3 w-40 overflow-hidden rounded-xl border border-terminal-green/30 bg-background shadow-lg"
                  >
                    <Link href={`/projects/${project.slug}`} className="block">
                      <div className="relative aspect-video bg-muted">
                        {project.trailerUrl ? (
                          <video
                            src={project.trailerUrl}
                            className="h-full w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center px-2 text-center font-departure-mono text-[10px] text-muted-foreground">
                            {project.name}
                          </div>
                        )}
                      </div>
                      <div className="truncate px-2 py-1.5 font-departure-mono text-[10px] tracking-wide text-terminal-green uppercase">
                        {project.name}
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href={`/projects/${project.slug}`}
                aria-label={project.name}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  isActive
                    ? "scale-125 bg-terminal-green"
                    : "bg-muted-foreground/50 hover:bg-terminal-green/70",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectNavDots;
