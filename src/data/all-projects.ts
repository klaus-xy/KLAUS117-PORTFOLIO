export const PROJECT_CATEGORIES = [
  "Web Dev",
  "Game Dev",
  "Hardware",
  "3D Modeling",
  "Side Quests",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  trailerUrl?: string;
  category?: ProjectCategory;
  role?: string;
  techStack?: string[];
  links?: ProjectLink[];
  images?: string[];
}

export const AllProjects: Project[] = [
  {
    slug: "project-000",
    name: "AREA 59™ Studio",
    description:
      "Area59™ is an independent game development studio creating bold, immersive, and experimental interactive experiences. ",
    trailerUrl: "/videos/project-trailers/project-zero-trailer.mov",
    category: "Game Dev",
  },
  {
    slug: "project-001",
    name: "Side Quest™ .inc",
    description: "Details for this project are coming soon.",
    trailerUrl: "/videos/project-trailers/sidequest-trailer.mp4",
    category: "Side Quests",
  },
  {
    slug: "project-005",
    name: "WALKMAN  : :  117",
    description: "Details for this project are coming soon.",
    trailerUrl: "/videos/project-trailers/walkman-trailer.mp4",
    category: "Hardware",
  },
  {
    slug: "project-002",
    name: "Project OVR // DRV™",
    description: "Details for this project are coming soon.",
    category: "Hardware",
  },
  {
    slug: "project-003",
    name: "FINSWICH DASHBOARD",
    description: "Making sense out of digital noise.",
    category: "Web Dev",
  },
  {
    slug: "project-004",
    name: "CHRONOMANCERS",
    description: "Details for this project are coming soon.",
    trailerUrl: "/videos/project-trailers/chronomancers-trailer.mp4",
    category: "Game Dev",
  },
];

export const getProjectBySlug = (slug: string) =>
  AllProjects.find((project) => project.slug === slug);
