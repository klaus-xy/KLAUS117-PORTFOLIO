import { cn } from "@/lib/utils";

export interface LinkDosProps {
  href: string;
  name: string;
  className?: string;
  prefix?: string;
  suffix?: string;
  icon?: string;
}

const LinkDos = ({
  href,
  name = "Link",
  prefix = "[",
  suffix = "]",
  icon = "📁",
  className,
}: LinkDosProps) => {
  return (
    <a
      href={href}
      className={cn(
        "w-32 flex items-start justify-between gap-2 px-3 py-1 text-xs uppercase hover:bg-terminal-green hover:text-background hover:cursor-pointer",
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
