import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon?: LucideIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ayobami-oyesiku", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/klaus-xy", icon: Github },
  { name: "Behance", href: "https://www.behance.net/ayobamioyesiku" },
  { name: "X", href: "https://x.com/0xKlaus117", icon: Twitter },
];
