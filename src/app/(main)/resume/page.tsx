"use client";
import { useState } from "react";
import ScrambleText from "@/components/ui/scramble-text";
import { RESUME_URLS } from "@/data/resume";
import { Button } from "@/components/ui/button";
import {
  ArrowRightSquare,
  ArrowUpRight,
  ArrowUpRightFromSquareIcon,
} from "lucide-react";
import Link from "next/link";

const RESUMES = [
  { key: "webDev", label: "Web Dev", href: RESUME_URLS.webDev },
  { key: "gameDev", label: "Game Dev", href: RESUME_URLS.gameDev },
] as const;

const ResumePage = () => {
  const [selected, setSelected] = useState<(typeof RESUMES)[number]>(
    RESUMES[0],
  );

  return (
    <div className="container mx-auto px-6 py-26 lg:py-28">
      <h1 className="font-eurostile uppercase">
        <ScrambleText
          text="Resume"
          scrambleSpeed={100}
          revealSpeed={1.25}
          chars="117"
        />
      </h1>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-3 my-6 ">
          {RESUMES.map((resume) => (
            <Button
              key={resume.key}
              type="button"
              variant={selected.key === resume.key ? "default" : "outline"}
              aria-pressed={selected.key === resume.key}
              onClick={() => setSelected(resume)}
              className="font-eurostile text-sm"
            >
              {resume.label}
            </Button>
          ))}
        </div>
        <Link
          href={selected.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-departure-mono px-1 text-xs sm:text-sm uppercase tracking-wide text-muted-foreground hover:text-primary"
        >
          Open PDF in new tab
          <ArrowUpRightFromSquareIcon
            size={16}
            className="text-terminal-green"
          />
        </Link>
      </div>

      <iframe
        key={selected.key}
        src={selected.href}
        title={`${selected.label} resume`}
        className="mt-2 h-[70vh] w-full rounded-xl border-2  bg-background"
      />
    </div>
  );
};

export default ResumePage;
