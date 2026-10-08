import type { LucideIcon } from "lucide-react";
import { Globe, Github, Twitter, Gamepad2 } from "lucide-react";

export const PROJECT_CATEGORIES = [
  "Web Dev",
  "Game Dev",
  // "Hardware",
  // "3D Modeling",
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
  /** One or more paragraphs; each string renders as its own paragraph. */
  description: string[];
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
  // :::: FOODPALLY :::: //
  {
    slug: "foodpally",
    name: "FOODPALLY",
    description: [
      "FoodPally is a food delivery platform that connects customers with local restaurants. Users can browse menus, place orders, and track their deliveries in real-time.",
      "Built with Next.js and integrated with a custom API for order management and restaurant coordination.",
    ],
    trailerUrl: "/videos/project-showcases/foodpally/foodpally.mp4",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
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
      { video: "/videos/project-showcases/foodpally/foodpally-kitchen.mp4" },
      { image: "/images/projects/food-pally/overview.png" },
      { image: "/images/projects/food-pally/auth.png" },
    ],
  },

  // :::: FINSWICH :::: //
  {
    slug: "finswich",
    name: "FINSWICH",
    description: [
      "FinSwich is a fintech dashboard for managing a white-label financial product. Operators can switch between apps, review accounts, cards, and customers, track billing, run campaigns, and configure modules from one place.",
      "Built with Next.js and connected to the FinSwich API gateway, with session and app context handled across every dashboard section.",
    ],
    trailerUrl: "/videos/project-showcases/finswich/finswich-trailer.mp4",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
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
  // :::: AREA 59 STUDIO :::: //
  {
    slug: "area-59-studio",
    name: "AREA 59™ Studio",
    description: [
      "Area 59™ is an independent game development studio creating bold, immersive, and experimental interactive experiences right in the heart of Lagos, Nigeria.",
    ],
    trailerUrl: "/videos/project-showcases/area-59-studio/area-59-trailer.mp4",
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
  // :::: RACING REALMS :::: //
  {
    slug: "racing-realms",
    name: "RACING REALMS™",
    description: [
      "PROJECT RR is a racing game being developed in Unreal Engine 5, designed to capture the thrill of high-speed sim-arcade racing.",
      "It uses a Chaos Physics-based vehicle component, a vehicle controller built on the Enhanced Input System, wheel rigging with steering and suspension animation, a dedicated camera system, and nitro and drift mechanics modeled after real-world physics.",
      "The vehicle setup is data-driven through editable Excel-style data tables, with a designer-friendly registration system that auto-manages vehicle blueprints and stats. Tracks use a spline-based system with checkpoints, and the HUD/UI is built with UMG.",
    ],
    trailerUrl: "/videos/project-showcases/racing-realms/racing-realms.mp4",
    techStack: ["Unreal Engine", "C++", "Blueprints"],
    category: "Game Dev",
    role: "Gameplay Programmer",
    date: "2024",
    links: [
      // {
      //   label: "Website",
      //   url: "https://area59studio.com/",
      //   icon: Globe,
      // },
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
      {
        video:
          "/videos/project-showcases/racing-realms/suspension-wheel-system-demo.mp4",
        description:
          "Rigging and animation for wheels, steering, and suspension.",
      },
      {
        video: "/videos/project-showcases/racing-realms/handling-test.mp4",
        description: "Handling test for wheel friction and slip.",
      },
      {
        video:
          "/videos/project-showcases/racing-realms/drift-mechanic-test.mp4",
        description:
          "Drift mechanic test, showing the lateral slip graph implementation.",
      },
      {
        image: "/images/projects/racing-realms/1.png",
        description: "Vehicle controller built on the Enhanced Input System.",
      },
      {
        image: "/images/projects/racing-realms/2.png",
        description: "Spline-based track system with checkpoints.",
      },
      {
        image: "/images/projects/racing-realms/3.png",
        description:
          "Camera system designed to improve gameplay readability and framing.",
      },
      {
        image: "/images/projects/racing-realms/4.png",
        description: "Spline-based track system with checkpoints.",
      },
      {
        image: "/images/projects/racing-realms/5.png",
        description:
          "Nitro and drift mechanics, modeled after real-world physics.",
      },
      {
        image: "/images/projects/racing-realms/6.png",
        description: "Spline-based track system with checkpoints.",
      },
      {
        image: "/images/projects/racing-realms/7.png",
        description: "HUD/UI system built with UMG.",
      },
      {
        image: "/images/projects/racing-realms/8.png",
        description: "HUD/UI system built with UMG.",
      },
      {
        image: "/images/projects/racing-realms/9.png",
        description:
          "Data-driven vehicle system with a designer-friendly registration system that auto-manages vehicle blueprints and stats.",
      },
      {
        video: "/videos/project-showcases/racing-realms/sunset.mp4",
        description: "Chaos Physics-based vehicle component.",
      },
    ],
  },

  // :::: CHRONO MANCERS :::: //
  {
    slug: "chrono-mancers",
    name: "CHRONO MANCERS™",
    description: ["A retrofuturistic twin stick shooter."],
    trailerUrl:
      "/videos/project-showcases/chrono-mancers/chronomancers-gameplay.mp4",
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
        image: "/images/projects/chronomancers/gameplay-01.png",
        description: "Gameplay — slashing through an approaching wave.",
      },
      {
        image: "/images/projects/chronomancers/gameplay-02.png",
        description: "Gameplay — building a combo streak.",
      },
      {
        image: "/images/projects/chronomancers/run-end.png",
        description: "End-of-run explosion and score screen.",
      },
    ],
  },

  // :::: XOX :::: //
  {
    slug: "project-xox",
    name: "XOX",
    description: [
      "PROJECT XOX is a 3D top-down action shooter with fast-paced combat, procedural animations, and dynamic enemy encounters, blending DOOM, Hotline Miami, and Devil May Cry influences.",
      "Built with a custom character controller, an interaction system, a modular combat and weapon system, bullet time mechanics, a procedural weapon animation system, a dynamic camera system, and a HUD/UI built with Unity UI Toolkit.",
      "Currently in development.",
    ],
    techStack: ["Unity", "C#"],
    trailerUrl: "/videos/project-showcases/project-xox/long-weekend.mp4",
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
        video: "/videos/project-showcases/project-xox/before-after.mp4",
        description:
          "Custom Character Controller: Built using Unity's Input System, focused on responsive movement and precise player control in a top-down perspective.",
      },
      {
        video: "/videos/project-showcases/project-xox/final-result.mp4",
        description:
          "Interaction System: Handles weapon pickups, item usage, and contextual player-world interactions in real time.",
      },
      {
        video: "/videos/project-showcases/project-xox/long-weekend.mp4",
        description:
          "Modular Combat & Weapon System: Supports multiple weapon types (primary, secondary, melee) with flexible weapon management and responsive combat behavior.",
      },
      {
        video:
          "/videos/project-showcases/project-xox/smooth-ik-transition-1.mp4",
        description:
          "Procedural Weapon Animation System: Dynamically adjusts weapon handling and hand placement, reducing the need for manual animation setup and improving scalability across different weapons.",
      },
      {
        video: "/videos/project-showcases/project-xox/prototype-gameplay.mp4",
        description:
          "Bullet Time System: Implemented a time-scaling system to enhance combat pacing, player control, and moment-to-moment decision making.",
      },
      {
        image: "/images/projects/project-xox/procedural-weapon-ik.png",
        description:
          "HUD/UI System (Unity UI Toolkit): Provides clear feedback on player actions, weapon states, and gameplay flow.",
      },
      { image: "/images/projects/project-xox/screenshot-127.png" },
      { image: "/images/projects/project-xox/screenshot-63.png" },
    ],
  },
  // :::: PROJECT ASTRO :::: //
  {
    slug: "project-astro",
    name: "PROJECT ASTRO",
    description: [
      "PROJECT ASTRO is a wave-based procedural space shooter emphasizing replayability through dynamic enemy behaviors and adaptive wave generation, inspired by Chicken Invaders and Geometry Wars.",
      "It features a custom character controller built on Unity's Input System, an interaction system for weapon pickups and real-time world interaction, a modular weapon system supporting primary, secondary, and super weapons, a finite state machine (FSM) AI architecture where each enemy transitions independently between states, a procedural wave generation system driven by a custom weighted probability algorithm that scales difficulty over time, and a HUD/UI system built with Unity UI Toolkit.",
      "Currently in development.",
    ],
    category: "Game Dev",
    role: "Game Developer",
    date: "2025",
    techStack: ["Unity", "C#"],
    links: [],
    showcase: [
      {
        video:
          "/videos/project-showcases/project-astro/procedural-wave-generation.mp4",
        description:
          "Procedural wave generation system using a custom weighted probability algorithm that dynamically spawns enemies and scales difficulty over time.",
      },
      {
        image: "/images/projects/project-astro/1.png",
        description:
          "Custom character controller built using Unity's Input System, focused on responsive movement and tight player control.",
      },
      {
        image: "/images/projects/project-astro/2.png",
        description:
          "Interaction system handling weapon pickups, item usage, and real-time player interaction with the game world.",
      },
      {
        image: "/images/projects/project-astro/3.png",
        description:
          "Modular weapon system supporting primary, secondary, and super weapons with flexible weapon management and switching.",
      },
      {
        image: "/images/projects/project-astro/4.png",
        description:
          "Finite state machine (FSM) AI architecture, where each enemy operates independently and transitions between states to create varied and dynamic combat encounters.",
      },
      {
        image: "/images/projects/project-astro/5.png",
        description:
          "HUD/UI system, developed using Unity UI Toolkit, communicating gameplay states and combat information.",
      },
    ],
  },

  // :::: WALKMAN 117 :::: //
  {
    slug: "walkman-117",
    name: "WALKMAN  : :  117",
    description: ["Details for this project are coming soon."],
    trailerUrl: "/videos/project-showcases/walkman-117/walkman-trailer.mp4",
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

  // :::: PONG 117 :::: //
  {
    slug: "pong-117",
    name: "PONG 117",
    description: [
      "PONG 117 is a retro-inspired Pong clone, rebuilt from scratch with a custom game engine.",
      "It includes a double-buffered renderer for smooth graphics, an input handling system for responsive controls, collision detection for paddle-ball interactions, a custom audio engine for sound effects, and a game loop built for consistent performance. The window is re-sizeable, and it supports both 1v1 local multiplayer and an AI opponent mode.",
    ],
    techStack: ["C++", "WinAPI"],
    trailerUrl: "/videos/project-showcases/pong-117/gameplay.mp4",
    category: "Game Dev",
    role: "Game Engine Programmer",
    date: "2025",
    links: [
      {
        label: "Play",
        url: "https://klaus117.itch.io/pong117",
        icon: Gamepad2,
      },
    ],
    showcase: [
      {
        video: "/videos/project-showcases/pong-117/gameplay.mp4",
        description:
          "Double-buffered renderer and input handling in action, keeping paddle controls responsive.",
      },
      {
        image: "/images/projects/pong-117/screenshot-1.png",
        description:
          "Game Modes: 1v1 local multiplayer and AI opponent mode, selectable before each match.",
      },
      {
        image: "/images/projects/pong-117/screenshot-2.png",
        description: "Collision detection system for paddle-ball interactions.",
      },
      {
        image: "/images/projects/pong-117/screenshot-3.png",
        description:
          "Game UI, showing score, controls, and a restart prompt at the end of each match.",
      },
      {
        image: "/images/projects/pong-117/screenshot-4.png",
        description:
          "Game loop logic ensuring consistent performance, shown here via the in-game FPS and frame-time debug overlay.",
      },
    ],
  },

  // :::: PROJECT ::/ PHASE-SHIFT :::: //
  // Hidden for now — add real details before uncommenting and listing.
  // {
  //   slug: "phase-shift",
  //   name: "PROJECT ::/ PHASE-SHIFT",
  //   description: "Details for this project are coming soon.",
  //   category: "Game Dev",
  //   role: "Game Developer",
  //   date: "2025",
  //   links: [],
  //   showcase: [],
  // },

  // :::: PROJECT OVR // DRV :::: //
  // {
  //   slug: "project-ovr-drv",
  //   name: "Project OVR // DRV™",
  //   description: "Details for this project are coming soon.",
  //   trailerUrl: "/videos/project-trailers/racing-realms.mp4",
  //   category: "Game Dev",
  //   role: "Gameplay Programmer",
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
  //   showcase: [
  //     { video: "/videos/project-trailers/racing-realms.mp4" },
  //     {
  //       image: "/images/projects/area59/1.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //     {
  //       image: "/images/projects/area59/2.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //     {
  //       image: "/images/projects/area59/3.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //     {
  //       image: "/images/projects/area59/4.png",
  //       description:
  //         "This is placeholder copy for testing long-form text in the showcase dialog. It is meant to be long enough to wrap across several lines on both mobile and desktop, so the spacing, line height, and scroll behaviour can be checked. Good layouts keep the text comfortably readable, with a sensible measure and enough breathing room between the image and the paragraph. If the content runs past the available height, the dialog should scroll instead of pushing the close button off screen. Replace this text with the real description for each slide once the copy is ready.",
  //     },
  //   ],
  // },

  // :::: SIDEQUESTS .INC ::::
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
];

export const getProjectBySlug = (slug: string) =>
  AllProjects.find((project) => project.slug === slug);
