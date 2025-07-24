import { cn } from "@/lib/utils";

export interface LinkDosProps {
  href: string;
  name: string;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const LinkDos = ({
  href,
  name = "Link",
  prefix = "[",
  suffix = "]",
  className,
}: LinkDosProps) => {
  return (
    <div
      className={cn(
        " w-36  flex items-center gap-2 px-3 py-1 text-xs uppercase hover:bg-green-500 hover:text-black hover:cursor-pointer",
        className
      )}
    >
      <span>{">_"}</span>
      <a href={href} className="">
        {prefix && <span className="">{prefix}</span>}
        {name}
        {suffix && <span className="">{suffix}</span>}
      </a>
    </div>
  );
};

export default LinkDos;
