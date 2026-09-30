import { cn } from "@/lib/utils";

interface MenuIconProps {
  open: boolean;
  className?: string;
}

const MenuIcon = ({ open, className }: MenuIconProps) => {
  return (
    <div
      className={cn(
        "w-10 sm:w-10 flex flex-col justify-center items-center gap-1.5",
        className,
      )}
    >
      <div
        className={cn(
          "w-full h-2 sm:h-2 bg-primary rounded-2xl transition-transform duration-300 ease-in-out",
          open && "rotate-45 translate-y-1.75",
        )}
      ></div>
      <div
        className={cn(
          "w-full flex justify-end gap-1 transition-transform duration-300 ease-in-out",
          open && "-rotate-45 -translate-y-1.75",
        )}
      >
        <div className="w-1/3 h-2 sm:h-2  bg-terminal-green rounded-full"></div>
        <div className="w-2/3 h-2 sm:h-2  bg-primary rounded-2xl"></div>
      </div>
    </div>
  );
};

export default MenuIcon;
