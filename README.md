# Personal Portfolio

A modern personal portfolio website built with Next.js, showcasing interactive design elements including custom cursor interactions and background music, demonstrating advanced frontend engineering practices.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Core Features](#core-features)
- [Getting Started](#getting-started)
- [Development Guide](#development-guide)
- [Design Patterns & Best Practices](#design-patterns--best-practices)
- [Performance Considerations](#performance-considerations)
- [Future Enhancements](#future-enhancements)

---

## Project Overview

A personal portfolio built with **Next.js 16** and **React 19**, designed to showcase projects and skills with engaging, interactive design elements. The site features smooth animations, custom cursor interactions, and background music to create a memorable user experience.

### Key Features

- Custom animated cursor system with mouse tracking
- Background music player with autoplay handling
- Responsive design optimized for all devices
- Modern component library using shadcn/ui
- TypeScript for type safety and reliability

---

## Architecture

### High-Level Design

```
┌─────────────────────────────────────────────────────┐
│              Next.js Application Layer               │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │      Root Layout (app/layout.tsx)           │   │
│  │  - CustomCursor Component                   │   │
│  │  - MusicPlayer Component                    │   │
│  │  - Theme Provider                           │   │
│  └─────────────────────────────────────────────┘   │
│                      │                              │
│                      ▼                              │
│  ┌─────────────────────────────────────────────┐   │
│  │      Page Components (app/page.tsx)         │   │
│  │  - Main content and UI elements             │   │
│  │  - Interactive demonstrations               │   │
│  └─────────────────────────────────────────────┘   │
│                      │                              │
│                      ▼                              │
│  ┌─────────────────────────────────────────────┐   │
│  │   Shared Components (components/)           │   │
│  │  - UI Components (shadcn/ui)                │   │
│  │  - Custom Components (Cursor, Player)       │   │
│  │  - Providers & Utilities                    │   │
│  └─────────────────────────────────────────────┘   │
│                      │                              │
│                      ▼                              │
│  ┌─────────────────────────────────────────────┐   │
│  │   Styling & Animation Layer                 │   │
│  │  - Tailwind CSS v4                          │   │
│  │  - Framer Motion & Motion libraries         │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
Layout
├── CustomCursor (Global Interactive Element)
├── MusicPlayer (Global Audio Control)
├── ThemeProvider (Styling Context)
└── Page
    ├── Header Section
    ├── Interactive Elements Demo
    ├── Links Section
    └── Input Elements
```

---

## Project Structure

```
.
├── app/                              # Next.js App Router pages
│   ├── layout.tsx                   # Root layout with global providers
│   ├── page.tsx                     # Home page
│   ├── globals.css                  # Global styles & design tokens
│   └── favicon.ico
│
├── components/                       # Reusable React components
│   ├── custom-cursor.tsx            # Custom animated cursor
│   ├── music-player.tsx             # Background music player
│   └── ui/                          # shadcn/ui component library
│       ├── button.tsx               # Button component
│       ├── card.tsx                 # Card component
│       ├── input.tsx                # Input field component
│       └── ...                      # Growing library as project expands
│
├── hooks/                            # Custom React hooks
│   ├── use-mobile.ts                # Mobile device detection
│   ├── use-toast.ts                 # Toast notifications hook
│   └── ...
│
├── lib/                              # Utility functions & helpers
│   ├── utils.ts                     # Helper functions (cn, etc.)
│   └── ...
│
├── public/                           # Static assets
│   ├── audio/                       # Audio files
│   │   └── background-music.mp3    # Background soundtrack
│   └── ...
│
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS tokens & themes
└── ...                               # Other config files

```

### Directory Purposes

| Directory     | Purpose                     | Notes                           |
| ------------- | --------------------------- | ------------------------------- |
| `app/`        | Next.js App Router pages    | Server & client components      |
| `components/` | Reusable React components   | UI library + custom components  |
| `hooks/`      | Custom React hooks          | Shared stateful logic           |
| `lib/`        | Utility functions & helpers | Pure functions, no dependencies |
| `public/`     | Static assets               | Served directly by Next.js      |
| `styles/`     | CSS files                   | Global styles & design tokens   |

---

## Tech Stack

### Core Framework

- **Next.js 16** - React framework with App Router, SSR, and optimizations
- **React 19.2** - UI library with latest hooks and features
- **TypeScript 5** - Static typing for reliability

### Styling & Animation

- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion 12** - Advanced animation library
- **Motion** - Motion library for animations
- **tailwindcss-animate** - Animation utilities

### Component Library

- **shadcn/ui** - 25+ accessible, customizable UI components
- **Radix UI** - Headless UI primitives (underlying shadcn/ui)
- **lucide-react** - SVG icon library

### Forms & Validation

- **React Hook Form** - Lightweight form management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between Hook Form and Zod

### Additional Libraries

- **next-themes** - Theme management (light/dark mode)
- **sonner** - Toast notifications
- **recharts** - Chart library
- **date-fns** - Date utilities
- **embla-carousel-react** - Carousel component
- **react-resizable-panels** - Resizable layouts

---

## Core Features

### 1. **Custom Cursor Component** (`components/custom-cursor.tsx`)

A sophisticated animated cursor system with advanced motion tracking.

**Key Features:**

- Real-time mouse position tracking
- Linear interpolation (lerp) for trailing dot effect
- Spring physics for outer ring animation
- Mobile device detection (hidden on touch devices)
- Interactive element detection for scaling effects
- Window resize handling for responsive behavior

**Technical Highlights:**

```tsx
// Responsive position tracking
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
const [isMobile, setIsMobile] = useState(false)

// Lerp interpolation for smooth trailing
setDotPosition((prev) => ({
  x: prev.x + (mousePosition.x - prev.x) * 0.15,
  y: prev.y + (mousePosition.y - prev.y) * 0.15,
}))

// Spring-based animation for outer ring
animate={{
  x: mousePosition.x - 16,
  y: mousePosition.y - 16
}}
transition={{
  type: "spring",
  stiffness: 500,
  damping: 28
}}
```

**Performance Optimization:**

- Uses `requestAnimationFrame` for smooth 60fps motion
- Mobile detection with automatic component unmounting
- Efficient event listener cleanup

### 2. **Background Music Player** (`components/music-player.tsx`)

A user-friendly audio player with autoplay capabilities.

**Key Features:**

- Autoplay with browser policy handling
- Play/pause controls
- Volume adjustment with visual feedback
- Mute toggle
- Looping playback
- Responsive design with fixed positioning

**Technical Highlights:**

```tsx
// Browser autoplay policy handling
audio.muted = true;
audio
  .play()
  .then(() => {
    setTimeout(() => {
      audio.muted = false;
    }, 100);
  })
  .catch(() => console.log("Autoplay prevented"));
```

**Setup Instructions:**

1. Add your audio file to `/public/audio/background-music.mp3`
2. Update the `src` property in the component if using a different path

### 3. **Interactive Page Component** (`app/page.tsx`)

Demonstrates the custom cursor functionality with multiple interactive elements.

**Included Elements:**

- Heading and description
- Multiple styled buttons with different variants
- Interactive text links
- Input field for demonstration

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20 LTS)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add audio file:**
   - Create `/public/audio/` directory
   - Place your music file there as `background-music.mp3`
   - Or update the path in `components/music-player.tsx`

4. **Start development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## Development Guide

### Code Standards

#### Component Structure

```tsx
// Always start with client directive if needed
"use client"

import { imports }

// Props interface
interface ComponentProps {
  prop: type
}

// Component definition
export function Component({ prop }: ComponentProps) {
  // Logic
  return <div>...</div>
}

// Named export for consistency
export { Component }
```

#### Styling Approach

- Use Tailwind utility classes over arbitrary values
- Follow the spacing scale (p-4, m-2, etc.)
- Use semantic color tokens (bg-background, text-foreground)
- Prefer `gap` over `space-*` for flex/grid layouts

#### File Naming

- **Components:** PascalCase (e.g., `CustomCursor.tsx`)
- **Utilities:** camelCase (e.g., `useMediaQuery.ts`)
- **Styles:** descriptive names (e.g., `globals.css`)

### Adding New Features

#### 1. New UI Component

```bash
# Use shadcn/ui CLI
npx shadcn-ui@latest add [component-name]
```

#### 2. Custom Component

```tsx
// Create in components/ directory
// Follow existing patterns
// Use TypeScript for type safety
// Export as named export
```

#### 3. New Hook

```tsx
// Create in hooks/ directory
// Prefix with "use"
// Document usage with comments
```

### Testing Locally

- **Desktop:** Full custom cursor and music player
- **Mobile:** Open DevTools → Toggle device toolbar
- **Responsive:** Inspector or browser resize

---

## Design Patterns & Best Practices

### 1. **Separation of Concerns**

- **Components** are isolated and reusable
- **Styles** are separated from logic
- **Utilities** are pure functions
- **Hooks** encapsulate stateful logic

### 2. **Performance Optimization**

- Code splitting via Next.js App Router
- Component-level optimization with Framer Motion
- Efficient re-render prevention with proper dependencies
- RequestAnimationFrame for animation loops

### 3. **Accessibility**

- Semantic HTML elements
- ARIA labels on interactive elements
- Color contrast compliance
- Keyboard navigation support

### 4. **Type Safety**

- Full TypeScript coverage
- Interface definitions for props
- Strict null checking enabled

### 5. **Error Handling**

- Graceful fallbacks (e.g., cursor on desktop only)
- Browser API feature detection
- Console error logging with context

---

## Performance Considerations

### Current Optimizations

1. **Image & Asset Optimization**
   - Static assets served from `/public`
   - Audio file lazy-loaded only when needed

2. **Component Rendering**
   - Cursor component unmounts on mobile automatically
   - Music player uses `useRef` to avoid unnecessary re-renders
   - Proper dependency arrays in effects

3. **Animation Performance**
   - Framer Motion uses GPU acceleration
   - requestAnimationFrame for smooth 60fps motion
   - Transform and opacity animations (performant properties)

### Monitoring & Metrics

- **Lighthouse:** Target 90+ score for performance
- **Core Web Vitals:** Monitor LCP, FID, CLS
- **Bundle Size:** Keep under 100KB (gzipped)

### Future Optimization Opportunities

- Implement React Compiler for automatic optimization
- Add image optimization with Next.js Image component
- Consider code splitting for UI component library
- Implement font subsetting for faster loading

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers with touch support

---

## Future Enhancements

### Planned Features

1. **Enhanced Cursor System**
   - [ ] Cursor trail particle effects
   - [ ] Cursor color customization
   - [ ] Cursor size adjustments
   - [ ] Click feedback animations

2. **Music Player Improvements**
   - [ ] Playlist support
   - [ ] Seek bar control
   - [ ] Current time display
   - [ ] Music visualization

3. **Additional Components**
   - [ ] Dark/light theme switcher
   - [ ] Keyboard shortcuts guide
   - [ ] User preferences panel
   - [ ] Analytics integration

4. **Performance**
   - [ ] Service Worker for offline support
   - [ ] Progressive Web App (PWA) capabilities
   - [ ] Automated performance monitoring

### Technical Debt & Improvements

- [ ] Add unit tests (Jest + React Testing Library)
- [ ] Add E2E tests (Cypress or Playwright)
- [ ] Implement error boundaries
- [ ] Add Storybook for component documentation
- [ ] Setup CI/CD pipeline

---

## Configuration Files

### `next.config.mjs`

- Next.js configuration
- Compiler optimizations
- API routes setup

### `tailwind.config.ts`

- Design tokens
- Custom colors and spacing
- Plugin configuration

### `tsconfig.json`

- Compiler options
- Path aliases
- Strict mode enabled

### `package.json`

- Dependencies and versions
- NPM scripts
- Project metadata

---

## Troubleshooting

### Custom Cursor Issues

- **Not appearing on desktop?**
  - Check `isMobile` state (resize window to test detection)
  - Ensure `cursor: none` CSS is applied
  - Verify component is imported in layout

- **Laggy animations?**
  - Adjust spring animation settings (stiffness/damping)
  - Check browser DevTools for performance issues
  - Verify requestAnimationFrame is executing

### Music Player Issues

- **Autoplay not working?**
  - Browser autoplay policy requires user interaction
  - Try clicking play button manually
  - Check audio file path in component

- **Audio not found?**
  - Verify file exists at `/public/audio/background-music.mp3`
  - Check file format is supported (MP3, WAV, OGG)
  - Confirm path in component matches actual location

---

## Contributing Guidelines

When adding new features:

1. Follow existing code style and patterns
2. Ensure TypeScript types are complete
3. Test on both desktop and mobile
4. Update this README if adding major features
5. Keep components focused and single-purpose
6. Use semantic HTML and ARIA attributes

---

## License

This project is private and for educational/demonstration purposes.

---

## Contact & Support

For questions or issues, refer to the project documentation or contact the development team.

---

**Last Updated:** April 2026
**Version:** 0.1.0
**Status:** Active Development

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
