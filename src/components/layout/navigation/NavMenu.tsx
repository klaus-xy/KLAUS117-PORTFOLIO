import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ScrambleText from "@/components/ui/scramble-text";

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
  return (
    <nav className="font-eurostile">
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
    </nav>
  );
};

export default NavMenu;
