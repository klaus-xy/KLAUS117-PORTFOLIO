import { Badge } from "@/components/ui/badge";

interface NavItemProps {
  name: string;
  active?: boolean;
}

const NAVITEMS: NavItemProps[] = [
  { name: "HOME", active: true },
  { name: "ABOUT", active: true },
  { name: "PROJECTS", active: true },
  { name: "CONTACT", active: true },
  { name: "ARCADIA", active: false },
]; // ["HOME", "ABOUT", "PROJECTS", "CONTACT", "ARCADIA"];

const NavMenu = () => {
  return (
    <nav>
      <ul className="space-y-4 text-5xl font-black">
        {NAVITEMS.map((item, index) => (
          <li key={index} className="nav-item hover:cursor-pointer ">
            {item.name}{" "}
            {!item.active && (
              <Badge className="absolute font-bold">Coming Soon</Badge>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
