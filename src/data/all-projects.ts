export interface Project {
  slug: string;
  name: string;
  description: string;
  trailerUrl?: string;
}

export const AllProjects: Project[] = [
  {
    slug: "project-000",
    name: "AREA 59™ Studio",
    description: "Details for this project are coming soon.",
  },
  {
    slug: "project-001",
    name: "Side Quest™ .inc",
    description: "Details for this project are coming soon.",
  },
  {
    slug: "project-005",
    name: "WALKMAN  : :  117",
    description: "Details for this project are coming soon.",
    trailerUrl: "/videos/project-trailers/walkman-trailer.mp4",
  },
  {
    slug: "project-002",
    name: "Project OVR // DRV™",
    description: "Details for this project are coming soon.",
  },
  {
    slug: "project-003",
    name: "LEARNERKIA",
    description: "Details for this project are coming soon.",
  },
  {
    slug: "project-004",
    name: "CHRONOMANCERS",
    description: "Details for this project are coming soon.",
  },
];

export const getProjectBySlug = (slug: string) =>
  AllProjects.find((project) => project.slug === slug);
