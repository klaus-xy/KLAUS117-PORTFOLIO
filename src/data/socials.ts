import type { ComponentType, SVGProps } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { BehanceIcon } from "@/components/icons/brand-icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface SocialLink {
  name: string;
  href: string;
  icon?: IconComponent;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ayobami-oyesiku", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/klaus-xy", icon: Github },
  { name: "Behance", href: "https://www.behance.net/ayobamioyesiku", icon: BehanceIcon },
  { name: "X", href: "https://x.com/0xKlaus117", icon: Twitter },
];
