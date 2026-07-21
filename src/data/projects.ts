export interface Project {
  slug: string;
  name: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "project-000",
    name: "Project 000",
    description: "Details for this project are coming soon.",
  },
  {
    slug: "project-001",
    name: "Project 001",
    description: "Details for this project are coming soon.",
  },
  {
    slug: "project-002",
    name: "Project 002",
    description: "Details for this project are coming soon.",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
