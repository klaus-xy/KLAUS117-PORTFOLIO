import { cn } from "@/lib/utils";

export interface LinkDosProps {
  href: string;
  name: string;
  className?: string;
  openInNewTab?: boolean;
  variant?: "default" | "inactive";
  prefix?: string;
  suffix?: string;
  icon?: string;
}
const variants = {
  default:
    "text-foreground hover:bg-terminal-green hover:text-background hover:cursor-pointer",
  inactive: "text-muted hover:cursor-not-allowed",
};

const LinkDos = ({
  href,
  name = "Link",
  openInNewTab = true,
  variant = "default",
  prefix = "[",
  suffix = "]",
  icon = "📁",
  className,
}: LinkDosProps) => {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={cn(
        "w-32 flex items-start justify-between gap-2 px-3 py-1 text-xs uppercase",
        variants[variant],
        className
      )}
    >
      <span>
        {">_ "}
        {/* {prefix && <span className="">{prefix}</span>} */}
        {/* {`[${icon}]`} */}
        {name}
        {/* {suffix && <span className="">{suffix}</span>} */}
      </span>
      {/* /<span>{"[📁]"}</span> */}
    </a>
  );
};

export default LinkDos;
