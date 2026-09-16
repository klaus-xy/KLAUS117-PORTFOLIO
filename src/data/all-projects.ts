import React from "react";

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
  icon?: React.ReactNode;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  trailerUrl?: string;
  category?: ProjectCategory;
  role?: string;
  date?: string;
  techStack?: string[];
  links?: ProjectLink[];
  images?: string[];
}

export const AllProjects: Project[] = [
  {
    slug: "project-000",
    name: "AREA 59™ Studio",
    description:
      "Area 59™ is an independent game development studio creating bold, immersive, and experimental interactive experiences. A team of game developers based in Lagos, Nigeria, passionate about storytelling, gameplay-driven design, and creative exploration across genres, styles, and ideas.",
    trailerUrl: "/videos/project-trailers/project-zero-trailer.mov",
    category: "Web Dev",
    role: "Creative Lead",
    date: "2025",
    links: [
      {
        label: "Website",
        url: "https://area59studio.com/",
        icon: "/icons/website.svg",
      },
    ],
    images: [
      "/images/projects/area59/area59-1.jpg",
      "/images/projects/area59/area59-2.jpg",
      "/images/projects/area59/area59-3.jpg",
      "/images/projects/area59/area59-4.jpg",
      "/images/projects/area59/area59-5.jpg",
      "/images/projects/area59/area59-6.jpg",
    ],
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
