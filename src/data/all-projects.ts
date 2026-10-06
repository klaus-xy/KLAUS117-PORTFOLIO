import type { LucideIcon } from "lucide-react";
import { Globe, Github, Twitter, Gamepad2 } from "lucide-react";

export const PROJECT_CATEGORIES = [
  "Web Dev",
  "Game Dev",
  "Hardware",
  "3D Modeling",
  "Side Quests",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface ProjectLink {
  label?: string;
  url: string;
  icon?: LucideIcon;
}

export interface ProjectShowcaseItem {
  image?: string;
  video?: string;
  description?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  trailerUrl?: string;
  category?: ProjectCategory;
  industry?: "Video Games" | "Fintech" | "Web3 ";
  role?: string;
  date?: string;
  techStack?: string[];
  links?: ProjectLink[];
  showcase?: ProjectShowcaseItem[];
}

export const AllProjects: Project[] = [
  {
    slug: "area-59-studio",
    name: "AREA 59™ Studio",
    description:
      "Area 59™ is an independent game development studio creating bold, immersive, and experimental interactive experiences right in the heart of Lagos, Nigeria.",
    trailerUrl: "/videos/project-trailers/area-59-trailer.mp4",
    category: "Web Dev",
    industry: "Video Games",
    role: "Creative Lead",
    date: "2025",
    links: [
      {
        label: "Website",
        url: "https://area59-studio.vercel.app",
        icon: Globe,
      },
      // {
      //   label: "Github",
      //   url: "https://github.com/klaus-xy/area59-studio",
      //   icon: Github,
      // },
      {
        label: "X",
        url: "https://twitter.com/Area59Studio",
        icon: Twitter,
      },
      // {
      //   label: "Demo",
      //   url: "https://twitter.com/Area59Studio",
      //   icon: Gamepad2,
      // },
    ],
    showcase: [
      {
        image: "/images/projects/area59/hero.png",
        // description:
        //   "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/about.png",
        // description:
        //   "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/projects.png",
        // description:
        //   "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/join.png",
        // description:
        //   "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Replace this text with the real description for each slide once the copy is ready.",
      },
      // {
      //   src: "/images/projects/area59/4.png",
      //   // description:
      //   //   "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Replace this text with the real description for each slide once the copy is ready.",
      // },
    ],
  },
  // FINSWICH
  {
    slug: "finswich",
    name: "FINSWICH",
    description:
      "FinSwich is a fintech dashboard for managing a white-label financial product. Operators can switch between apps, review accounts, cards, and customers, track billing, run campaigns, and configure modules from one place. Built with Next.js and connected to the FinSwich API gateway, with session and app context handled across every dashboard section.",
    trailerUrl: "/videos/project-trailers/finswich-trailer.mp4",
    category: "Web Dev",
    role: "Frontend Engineer",
    date: "2025",
    links: [
      {
        label: "Website",
        url: "https://ops.finswich.com/",
        icon: Globe,
      },
      // {
      //   label: "Github",
      //   url: "https://github.com/klaus-xy/area59-studio",
      //   icon: Github,
      // },
      // {
      //   label: "X",
      //   url: "https://twitter.com/Area59Studio",
      //   icon: Twitter,
      // },
    ],
    showcase: [
      { image: "/images/projects/finswich/finswich-login.png" },
      { image: "/images/projects/finswich/login.png" },
      { image: "/images/projects/finswich/dashboard.png" },
      { image: "/images/projects/finswich/services.png" },
      { image: "/images/projects/finswich/service-status.png" },
      { image: "/images/projects/finswich/transactions.png" },
      { image: "/images/projects/finswich/wallet.png" },
    ],
  },

  // SIDEQUESTS .INC
  // {
  //   slug: "side-quests",
  //   name: "Side Quests™",
  //   description: "Details for this project are coming soon.",
  //   trailerUrl: "/videos/project-trailers/sidequest-trailer.mp4",
  //   category: "Side Quests",
  //   role: "Frontend Engineer",
  //   date: "2025",
  //   links: [
  //     {
  //       label: "Website",
  //       url: "https://area59studio.com/",
  //       icon: Globe,
  //     },
  //     {
  //       label: "Github",
  //       url: "https://github.com/klaus-xy/area59-studio",
  //       icon: Github,
  //     },
  //     {
  //       label: "X",
  //       url: "https://twitter.com/Area59Studio",
  //       icon: Twitter,
  //     },
  //   ],
  //   images: [
  //     {
  //       src: "/images/projects/area59/1.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //     {
  //       src: "/images/projects/area59/2.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //     {
  //       src: "/images/projects/area59/3.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //     {
  //       src: "/images/projects/area59/4.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //   ],
  // },
  {
    slug: "walkman-117",
    name: "WALKMAN  : :  117",
    description: "Details for this project are coming soon.",
    trailerUrl: "/videos/project-trailers/walkman-trailer.mp4",
    category: "Side Quests",
    role: "Designer & Frontend Developer",
    date: "2025",
    links: [
      {
        label: "Website",
        url: "https://area59studio.com/",
        icon: Globe,
      },
      {
        label: "Github",
        url: "https://github.com/klaus-xy/area59-studio",
        icon: Github,
      },
      {
        label: "X",
        url: "https://twitter.com/Area59Studio",
        icon: Twitter,
      },
    ],
    showcase: [
      {
        image: "/images/projects/area59/1.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/2.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/3.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/4.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
    ],
  },
  {
    slug: "project-ovr-drv",
    name: "Project OVR // DRV™",
    description: "Details for this project are coming soon.",
    trailerUrl: "/videos/project-trailers/racing-realms.mp4",
    category: "Game Dev",
    role: "Gameplay Programmer",
    date: "2025",
    links: [
      {
        label: "Website",
        url: "https://area59studio.com/",
        icon: Globe,
      },
      {
        label: "Github",
        url: "https://github.com/klaus-xy/area59-studio",
        icon: Github,
      },
      {
        label: "X",
        url: "https://twitter.com/Area59Studio",
        icon: Twitter,
      },
    ],
    showcase: [
      { video: "/videos/project-trailers/racing-realms.mp4" },
      {
        image: "/images/projects/area59/1.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/2.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/3.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/4.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
    ],
  },
  {
    slug: "chrono-mancers",
    name: "CHRONO MANCERS",
    description: "A retrofuturistic twin stick shooter.",
    trailerUrl: "/videos/project-trailers/chronomancers-trailer.mp4",
    category: "Game Dev",
    role: "Game Developer",
    date: "2025",
    links: [
      {
        label: "Visit",
        url: "https://area59studio.com/",
        icon: Globe,
      },
      {
        label: "Demo",
        url: "https://twitter.com/Area59Studio",
        icon: Gamepad2,
      },

      {
        label: "Github",
        url: "https://github.com/klaus-xy/area59-studio",
        icon: Github,
      },
      {
        label: "X",
        url: "https://twitter.com/Area59Studio",
        icon: Twitter,
      },
    ],
    showcase: [
      {
        image: "/images/projects/area59/1.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/2.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/3.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
      {
        image: "/images/projects/area59/4.png",
        description:
          "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  AllProjects.find((project) => project.slug === slug);
