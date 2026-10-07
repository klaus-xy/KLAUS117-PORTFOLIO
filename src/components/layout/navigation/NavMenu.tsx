"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ScrambleText from "@/components/ui/scramble-text";
import { SOCIAL_LINKS } from "@/data/socials";
import { LucideFileText } from "lucide-react";
import { motion } from "motion/react";

interface NavItemProps {
  name: string;
  href?: string;
  active?: boolean;
}

const NAVITEMS: NavItemProps[] = [
  { name: "HOME", href: "/117#home", active: true },
  { name: "ABOUT", href: "/117#about", active: true },
  { name: "PROJECTS", href: "/117#projects", active: true },
  { name: "CONTACT", href: "/117#contact", active: true },
  { name: "ARCADIA", active: false },
]; // ["HOME", "ABOUT", "PROJECTS", "CONTACT", "ARCADIA"];

interface NavMenuProps {
  onNavigate?: () => void;
}

const NavMenu = ({ onNavigate }: NavMenuProps) => {
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

      {/*      {/* NAV FOOTER */}
      <div className="w-full flex flex-col items-center justify-start gap-10 py-24  border-muted">
        {/* SOCIAL LINKS */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
          }}
          className="w-full flex justify-center items-center gap-6 font-helvetica-neue text-sm tracking-wide text-muted-foreground uppercase"
        >
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
                {Icon && <Icon className="size-6 sm:size-8" />}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* RESUME */}
        <div className="flex justify-center items-center text-muted-foreground hover:text-primary transition-colors">
          <Link
            href="/resume"
            onClick={onNavigate}
            className="flex items-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.4,
              }}
              className="flex"
            >
              <LucideFileText className="size-4 sm:size-8" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.55,
              }}
              className="ml-2 text-xs sm:text-base underline"
            >
              Resume
            </motion.span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
