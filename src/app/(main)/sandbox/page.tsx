"use client";

import PixelRipple from "@/components/pixel-ripple";
import Carousel3D from "@/components/carousel-3d";
import { AllProjects, PROJECT_CATEGORIES } from "@/data/all-projects";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const CAROUSEL_TABS = [
  "All",
  ...PROJECT_CATEGORIES.filter((category) =>
    AllProjects.some((project) => project.category === category),
  ),
];

const getTabItems = (tab: string) =>
  AllProjects.filter(
    (p) => p.trailerUrl && (tab === "All" || p.category === tab),
  ).map((p) => ({
    slug: p.slug,
    name: p.name,
    trailerUrl: p.trailerUrl,
    href: `/projects/${p.slug}`,
  }));

const page = () => {
  const [tab, setTab] = useState(CAROUSEL_TABS[0]);
  const items = getTabItems(tab);

  return (
    <div>
      <h1>SANDBOX</h1>
      <PixelRipple />

      <h2 className="mt-20 text-center">3D CAROUSEL TEST</h2>
      <div className="flex justify-center gap-2 py-6">
        {CAROUSEL_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              t === tab
                ? "border-terminal-green bg-terminal-green text-background"
                : "border-muted/40 text-muted-foreground hover:border-terminal-green",
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex min-h-[70vh] items-center justify-center bg-background">
        {items.length > 0 ? (
          <Carousel3D key={tab} items={items} />
        ) : (
          <p className="text-muted-foreground">No projects in this category.</p>
        )}
      </div>
    </div>
  );
};

export default page;
