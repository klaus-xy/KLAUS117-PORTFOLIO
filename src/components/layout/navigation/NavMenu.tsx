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
    <nav className="">
      <ul className="space-y-5 text-5xl font-black py-24 px-8">
        {NAVITEMS.map((item, index) => {
          const label = (
            <>
              <ScrambleText
                text={item.name}
                scrambleSpeed={50}
                revealSpeed={2}
                chars="KLAUS117"
              />{" "}
              {!item.active && (
                <Badge className="absolute font-medium font-helvetica-neue">
                  Coming Soon
                </Badge>
              )}
            </>
          );

          return (
            // hover:text-terminal-green hover:tracking-widest transition-all duration-500 ease-in-out relative
            <li
              key={index}
              className={`nav-item hover:cursor-pointer ${item.active ? "text-primary" : "text-muted"}`}
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
