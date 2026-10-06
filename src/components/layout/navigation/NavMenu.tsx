"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ScrambleText from "@/components/ui/scramble-text";
import { SOCIAL_LINKS } from "@/data/socials";
import { RESUME_URLS } from "@/data/resume";
import { LucideFileText } from "lucide-react";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface NavItemProps {
  name: string;
  href?: string;
  active?: boolean;
}

const NAVITEMS: NavItemProps[] = [
  { name: "HOME", href: "/117", active: true },
  { name: "ABOUT", href: "#about", active: true },
  { name: "PROJECTS", href: "/projects", active: true },
  { name: "CONTACT", href: "#contact", active: true },
  { name: "ARCADIA", active: false },
]; // ["HOME", "ABOUT", "PROJECTS", "CONTACT", "ARCADIA"];


interface NavMenuProps {
  onNavigate?: () => void;
}

const NavMenu = ({ onNavigate }: NavMenuProps) => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [viewing, setViewing] = useState<{ label: string; href: string } | null>(null);

  return (
    <nav className="w-full font-eurostile">
      <ul className="space-y-5 lg:space-y-5 text-4xl sm:text-5xl 2xl:text-7xl font-black py-24 px-8 lg:px-18 lg:py-32">
        {NAVITEMS.map((item, index) => {
          const label = (
            <span className="hover:tracking-tighter transition-all duration-400 ease-in-out">
              <ScrambleText
                text={item.name}
                scrambleSpeed={50}
                revealSpeed={2}
                chars="KLAUS117"
              />{" "}
              {!item.active && (
                <Badge className="absolute text-[0.5rem] text-muted-foreground bg-transparent border border-terminal-green font-helvetica-neue font-medium tracking-wide">
                  Coming Soon
                </Badge>
              )}
            </span>
          );

          return (
            // hover:text-terminal-green hover:tracking-widest transition-all duration-500 ease-in-out relative
            <li
              key={index}
              className={`nav-item  hover:cursor-pointer ${item.active ? "text-primary" : "text-muted"}`}
            >
              {item.href ? (
                <Link href={item.href} onClick={onNavigate}>
                  {label}
                </Link>
              ) : (
                label
              )}
            </li>
          );
        })}
      </ul>
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
        }}
        className="w-full flex justify-center items-center gap-6   py-54 font-helvetica-neue text-sm tracking-wide text-muted-foreground uppercase"
      >
        <li className="relative hover:text-primary transition-colors">
          <button
            type="button"
            aria-label="Resumes"
            aria-expanded={resumeOpen}
            onClick={() => setResumeOpen((open) => !open)}
            className="flex items-center"
          >
            <LucideFileText className="size-6 sm:size-8" />
          </button>
          {resumeOpen && (
            <div className="absolute bottom-full left-1/2 mb-4 flex -translate-x-1/2 flex-col gap-2 border-2 border-terminal-green bg-background p-3 whitespace-nowrap text-sm">
              {[
                { label: "Web Dev Resume", href: RESUME_URLS.webDev },
                { label: "Game Dev Resume", href: RESUME_URLS.gameDev },
              ].map((resume) => (
                <button
                  key={resume.label}
                  type="button"
                  onClick={() => {
                    setResumeOpen(false);
                    setViewing(resume);
                  }}
                  className="text-left hover:text-primary transition-colors"
                >
                  {resume.label}
                </button>
              ))}
            </div>
          )}
        </li>
        {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
          <motion.li
            key={name}
            variants={{
              hidden: { opacity: 0, y: 12, scale: 0.8 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="hover:text-primary transition-colors"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex items-center"
            >
              {Icon ? (
                <Icon className="size-6 sm:size-8" />
              ) : (
                <span className="flex size-6 items-center justify-center rounded-full border-2 border-current text-[0.6rem] font-bold sm:size-8 sm:text-xs">
                  Bē
                </span>
              )}
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <Dialog open={viewing !== null} onOpenChange={(open) => !open && setViewing(null)}>
        <DialogContent className="h-[85vh] w-[95vw] max-w-5xl p-2 sm:p-4">
          <DialogTitle className="sr-only">{viewing?.label}</DialogTitle>
          {viewing && (
            <iframe
              src={viewing.href}
              title={viewing.label}
              className="h-full w-full rounded-xl bg-background"
            />
          )}
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default NavMenu;
