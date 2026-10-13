import type { ComponentType, SVGProps } from "react";
import { Globe, Github, Twitter, Gamepad2 } from "lucide-react";
import { DiscordIcon } from "@/components/icons/brand-icons";

type LinkIcon = ComponentType<SVGProps<SVGSVGElement>>;

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
  icon?: LinkIcon;
}

export interface ProjectShowcaseItem {
  image?: string;
  video?: string;
  description?: string;
  /** Renders a small "01 — Title" header above this item's description. */
  sectionIndex?: number;
  sectionTitle?: string;
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
  // :::: RACING REALMS :::: //
  {
    slug: "racing-realms",
    name: "RACING REALMS™",
    description: [
      "Racing Realms is a racing game built in Unreal Engine 5, balancing sim-inspired vehicle physics with arcade-style speed and responsiveness.",
      "It's built around Chaos Vehicles and Enhanced Input, with custom steering and suspension animation, a dedicated camera system, ABS and traction control, and physics-driven drift and nitro mechanics.",
      "Vehicles are data-driven through editable data tables and a registration system, tracks use spline-based paths with checkpoints, and the HUD/UI runs on UMG — all built to extend easily as new vehicles, tracks, and features are added.",
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
          "/videos/project-showcases/racing-realms/drift-mechanic-test.mp4",
        description:
          "Drift mechanic test visualizing the lateral slip graph that drives the drift physics, alongside nitro boost mechanics modeled after real-world vehicle physics.",
        sectionIndex: 1,
        sectionTitle: "Drift Mechanic",
      },
      {
        video: "/videos/project-showcases/racing-realms/handling-test.mp4",
        description:
          "Handling test tuning the Enhanced Input-based vehicle controller's wheel friction and slip — including ABS and traction control — to balance believable physics with arcade responsiveness.",
        sectionIndex: 2,
        sectionTitle: "Handling Test",
      },
      {
        video:
          "/videos/project-showcases/racing-realms/suspension-wheel-system-demo.mp4",
        description:
          "Wheel rigging with steering and suspension animation, reacting to speed and terrain.",
        sectionIndex: 3,
        sectionTitle: "Wheel Rigging",
      },
      {
        image: "/images/projects/racing-realms/2.png",
        description:
          "Spline-based track system defining the racing line and checkpoint placement.",
        sectionIndex: 4,
        sectionTitle: "Track System",
      },
      {
        image: "/images/projects/racing-realms/7.png",
        description:
          "In-game HUD built with UMG, surfacing speed, lap, and position information.",
        sectionIndex: 5,
        sectionTitle: "HUD System",
      },
      {
        video: "/videos/project-showcases/racing-realms/sunset.mp4",
        description: "Chaos Vehicles-based vehicle component in motion.",
        sectionIndex: 6,
        sectionTitle: "Level Design",
      },
    ],
  },

  // :::: CHRONO MANCERS :::: //
  {
    slug: "chrono-mancers",
    name: "CHRONO MANCERS™",
    description: [
      "Chronomancers is a 2D twin-stick roguelite shooter made with Unity. It draws inspiration from Geometry Wars' fast-paced combat, vibrant visuals, and intense enemy encounters.",
      "Blending a retro-futuristic aesthetic with time-themed mechanics, the project explores responsive shooting, dynamic visual effects, and increasingly challenging gameplay.",
    ],
    trailerUrl:
      "/videos/project-showcases/chrono-mancers/chronomancers-gameplay.mp4",
    techStack: ["Unity", "C#"],
    category: "Game Dev",
    role: "Game Developer",
    date: "2025",
    links: [
      {
        label: "Demo",
        url: "https://play.unity.com/en/games/78eacaac-762f-4db7-9cf5-ae242e5ae250/chronomancers",
        icon: Gamepad2,
      },
      {
        label: "Discord",
        url: "https://discord.com/invite/3jk5mV2Sy6",
        icon: DiscordIcon,
      },
    ],
    showcase: [
      {
        video:
          "/videos/project-showcases/chrono-mancers/chronomancers-gameplay.mp4",
        description:
          "Gameplay footage showcasing twin-stick combat, the reactive grid, and the time-based mechanics that drive each run.",
        sectionIndex: 1,
        sectionTitle: "Gameplay",
      },
      {
        image: "/images/projects/chronomancers/gameplay-01.png",
        description:
          "Twin-stick shooting and movement against an approaching enemy wave, with time-extension pickups tied to the game's time-based mechanics.",
        sectionIndex: 2,
        sectionTitle: "Twin-Stick Combat",
      },
      {
        video: "/videos/project-showcases/chrono-mancers/reactive-grid-c.mp4",
        description:
          "Quick demo of the reactive grid, which deforms and ripples via a spring-based system as nearby objects interact with it.",
        sectionIndex: 3,
        sectionTitle: "Reactive Grid",
      },
      {
        video:
          "/videos/project-showcases/chrono-mancers/reactive-grid-system-showcase.mp4",
        description:
          "In-depth look at the reactive grid system — procedural generation, spring-based deformation, and the combat glow and impact effects it drives.",
        sectionIndex: 4,
        sectionTitle: "Reactive Grid System",
      },
      {
        image: "/images/projects/chronomancers/gameplay-02.png",
        description:
          "Chaining hits into a combo streak that feeds into the high-score system.",
        sectionIndex: 5,
        sectionTitle: "Combo & Score System",
      },
      {
        image: "/images/projects/chronomancers/run-end.png",
        description:
          "End-of-run explosion as the clock runs out, triggering the save system to record the final score.",
        sectionIndex: 6,
        sectionTitle: "End-of-Run & Save System",
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
    ],
    techStack: ["Unity", "C#"],
    trailerUrl: "/videos/project-showcases/project-xox/long-weekend.mp4",
    category: "Game Dev",
    role: "Game Developer",
    date: "2025",
    links: [
      //       {
      //         label: "Visit",
      //         url: "https://area59studio.com/",
      //         icon: Globe,
      //       },
      //       {
      //         label: "Demo",
      //         url: "https://twitter.com/Area59Studio",
      //         icon: Gamepad2,
      //       },
      //       {
      //         label: "Github",
      //         url: "https://github.com/klaus-xy/area59-studio",
      //         icon: Github,
      //       },
      //       {
      //         label: "X",
      //         url: "https://twitter.com/Area59Studio",
      //         icon: Twitter,
      //       },
    ],
    showcase: [
      {
        video: "/videos/project-showcases/project-xox/prototype-gameplay.mp4",
        description:
          "General gameplay footage, showing the character controller, bullet time, the interaction system, dynamic camera, and weapon systems working together in combat.",
        sectionIndex: 1,
        sectionTitle: "Gameplay",
      },
      {
        video: "/videos/project-showcases/project-xox/final-result.mp4",
        description:
          "Full character animation working together with the weapon system and the procedural weapon animation system.",
        sectionIndex: 2,
        sectionTitle: "Character & Weapon Animation",
      },
      {
        video:
          "/videos/project-showcases/project-xox/smooth-ik-transition-1.mp4",
        description:
          "The Procedural Weapon Animation System Dynamically adjusts weapon handling and hand placement, reducing the need for manual animation setup and improving scalability across different weapons. Supports multiple weapon types (primary, secondary, melee) with flexible weapon management and responsive combat behavior.",
        sectionIndex: 3,
        sectionTitle: "Procedural Weapon Animation System",
      },
      {
        video: "/videos/project-showcases/project-xox/before-after.mp4",
        description:
          "A side-by-side comparison of the procedural animation system in action. The character's grip and hand placement adapt dynamically to the sword, creating more natural weapon handling without relying on a single fixed pose.",
        sectionIndex: 4,
        sectionTitle: "Procedural Weapon Animation",
      },
      { image: "/images/projects/project-xox/procedural-weapon-ik.png" },
      { image: "/images/projects/project-xox/screenshot-127.png" },
      {
        video: "/videos/project-showcases/project-xox/long-weekend.mp4",
      },
    ],
  },
  // :::: FOODPALLY :::: //
  {
    slug: "foodpally",
    name: "FOODPALLY",
    description: [
      "FoodPally is a food delivery platform connecting customers with local restaurants. Users can browse menus, place orders, and track deliveries in real time.",
      "Built with Next.js and a microservices-based backend, the platform integrates custom APIs to support order management and restaurant coordination.",
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
    date: "2026",
    links: [
      {
        label: "Website",
        url: "https://www.foodpally.com/",
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
      {
        image: "/images/projects/food-pally/auth.png",
        description:
          "Authentication flow for signing in and creating an account.",
        sectionIndex: 1,
        sectionTitle: "Authentication",
      },
      {
        video: "/videos/project-showcases/foodpally/foodpally-kitchen.mp4",
        description:
          "Kitchen-side view for restaurants managing incoming orders in real time.",
        sectionIndex: 2,
        sectionTitle: "Kitchen Management",
      },
      {
        image: "/images/projects/food-pally/overview.png",
        description:
          "Platform overview, where customers browse restaurants and menus.",
        sectionIndex: 3,
        sectionTitle: "Platform Overview",
      },
    ],
  },

  // :::: FINSWICH :::: //
  {
    slug: "finswich",
    name: "FINSWICH",
    description: [
      "FinSwich is a fintech dashboard for managing a white-label financial product. Operators can switch between apps, review accounts, cards, and customers, track billing, run campaigns, and configure modules from one place.",
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
    date: "2026",
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
      {
        image: "/images/projects/finswich/login.png",
        description:
          "Operator authentication flow, built with security practices like XSS and CSRF protection, secure session handling, and rate limiting.",
        sectionIndex: 1,
        sectionTitle: "Authentication Flow",
      },

      // {
      //   image: "/images/projects/finswich/login.png",
      //   description: "Alternate login state.",
      //   sectionIndex: 2,
      //   sectionTitle: "Alternate Login",
      // },

      {
        image: "/images/projects/finswich/dashboard.png",
        description:
          "The dashboard provides operators with a real-time read on business performance from transaction volume, active users, to product traffic, with live status monitoring for all the microservices.",
        sectionIndex: 2,
        sectionTitle: "Dashboard",
      },
      {
        image: "/images/projects/finswich/services.png",
        description:
          "Manage the availability of financial services, including transfers, utility payments, currency swaps, and crypto funding, with configurable pricing for each country.",
        sectionIndex: 3,
        sectionTitle: "Services",
      },
      {
        image: "/images/projects/finswich/wallet.png",
        description:
          "Manage global and country-specific settlement wallets, with visibility into balances and supported currencies, alongside swap and transfer actions for each market.",
        sectionIndex: 4,
        sectionTitle: "Wallet",
      },
      {
        image: "/images/projects/finswich/transactions.png",
        description:
          "Full pay-in and payout history across wallets and apps, with per-transaction references, fees, and settlement status.",
        sectionIndex: 5,
        sectionTitle: "Transactions",
      },

      {
        image: "/images/projects/finswich/virtual-cards.png",
        description:
          "Virtual card issuing and management, with a transaction log covering debits, refunds, and their status across cards.",
        sectionIndex: 6,
        sectionTitle: "Virtual Cards",
      },
      {
        image: "/images/projects/finswich/accounting.png",
        description:
          "Auto-computed financial statements. Includes income, balance sheet, and cash flow. Built from revenue, expenses, liabilities, and bank activity, with built-in balance-check warnings.",
        sectionIndex: 7,
        sectionTitle: "Accounting",
      },

      {
        image: "/images/projects/finswich/service-status.png",
        description:
          "Live monitoring for every micro-service the dashboard depends on, tracking latency, uptime, and downtime history per endpoint.",
        sectionIndex: 8,
        sectionTitle: "Service Status",
      },
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
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
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
        video: "/videos/project-showcases/area-59-studio/area-59-showcase.mp4",
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
  // :::: PROJECT ASTRO :::: //
  {
    slug: "project-astro",
    name: "PROJECT ASTRO",
    description: [
      "PROJECT ASTRO is a wave-based procedural space shooter emphasizing replayability through dynamic enemy behaviors and adaptive wave generation, inspired by Chicken Invaders and Geometry Wars.",
      "It features a custom character controller built on Unity's Input System, an interaction system for weapon pickups and real-time world interaction, a modular weapon system supporting primary, secondary, and super weapons, a finite state machine (FSM) AI architecture where each enemy transitions independently between states, a procedural wave generation system driven by a custom weighted probability algorithm that scales difficulty over time, and a HUD/UI system built with Unity UI Toolkit.",
    ],
    trailerUrl: "/videos/project-showcases/project-astro/trailer.mp4",
    category: "Game Dev",
    role: "Game Developer",
    date: "2023",
    techStack: ["Unity", "C#"],
    links: [],
    showcase: [
      {
        video:
          "/videos/project-showcases/project-astro/procedural-wave-generation.mp4",
        description:
          "Procedural wave generation system using a custom weighted probability algorithm that dynamically spawns enemies and scales difficulty over time.",
        sectionIndex: 1,
        sectionTitle: "Wave Generation",
      },
      {
        image: "/images/projects/project-astro/1.png",
        description:
          "Custom character controller built using Unity's Input System, focused on responsive movement and tight player control.",
        sectionIndex: 2,
        sectionTitle: "Character Controller",
      },
      {
        image: "/images/projects/project-astro/2.png",
        description:
          "Interaction system handling weapon pickups, item usage, and real-time player interaction with the game world.",
        sectionIndex: 3,
        sectionTitle: "Interaction System",
      },
      {
        image: "/images/projects/project-astro/3.png",
        description:
          "Modular weapon system supporting primary, secondary, and super weapons with flexible weapon management and switching.",
        sectionIndex: 4,
        sectionTitle: "Weapon System",
      },
      {
        image: "/images/projects/project-astro/4.png",
        description:
          "Finite state machine (FSM) AI architecture, where each enemy operates independently and transitions between states to create varied and dynamic combat encounters.",
        sectionIndex: 5,
        sectionTitle: "Enemy AI",
      },
      {
        image: "/images/projects/project-astro/5.png",
        description:
          "HUD/UI system, developed using Unity UI Toolkit, communicating gameplay states and combat information.",
        sectionIndex: 6,
        sectionTitle: "HUD/UI System",
      },
    ],
  },

  // :::: WALKMAN 117 :::: //
  {
    slug: "walkman-117",
    name: "WALKMAN  : :  117",
    description: ["Details for this project are coming soon."],
    trailerUrl: "/videos/project-showcases/walkman-117/walkman-trailer.mp4",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    category: "Side Quests",
    role: "Designer & Frontend Developer",
    date: "2026",
    links: [
      {
        label: "Website",
        url: "https://walkman-117.vercel.app/",
        icon: Globe,
      },
      {
        label: "Github",
        url: "https://github.com/klaus-xy/walkman.117",
        icon: Github,
      },
      // {
      //   label: "X",
      //   url: "https://twitter.com/Area59Studio",
      //   icon: Twitter,
      // },
    ],
    showcase: [
      {
        image: "/images/projects/walkman-117/loading-screen.png",
        // description:
        //   "A minimal boot screen that sets the retro-cassette tone before the player loads in.",
        sectionIndex: 1,
        sectionTitle: "Loading Screen",
      },
      {
        image: "/images/projects/walkman-117/player-ui.png",
        description:
          "A Neumorphic music player designed after a classic cassette deck, complete with spinning reels, a live EQ readout, and full playback controls.",
        sectionIndex: 2,
        sectionTitle: "Player UI",
      },
      {
        image: "/images/projects/walkman-117/playlist-view.png",
        description:
          "A playlist panel that slides up over the player, listing every track with its artist and runtime.",
        sectionIndex: 3,
        sectionTitle: "Playlist View",
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
    date: "2022",
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
          "Responsive paddle controls, ball physics, collision detection, and real-time scoring, Pong 117 recreates the simplicity of the original while demonstrating the underlying systems that bring it to life.",
        sectionIndex: 1,
        sectionTitle: "Gameplay",
      },
      {
        image: "/images/projects/pong-117/screenshot-1.png",
        description:
          "Game Modes: 1v1 local multiplayer and AI opponent mode, selectable before each match.",
        sectionIndex: 2,
        sectionTitle: "Game Modes",
      },
      {
        image: "/images/projects/pong-117/screenshot-2.png",
        description: "Collision detection system for paddle-ball interactions.",
        sectionIndex: 3,
        sectionTitle: "Collision Detection",
      },
      {
        image: "/images/projects/pong-117/screenshot-3.png",
        description:
          "Game UI, showing score, controls, and a restart prompt at the end of each match.",
        sectionIndex: 4,
        sectionTitle: "Game UI",
      },
      {
        image: "/images/projects/pong-117/screenshot-4.png",
        description:
          "Game loop logic ensuring consistent performance, shown here via the in-game FPS and frame-time debug overlay.",
        sectionIndex: 5,
        sectionTitle: "Game Loop & Performance",
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
