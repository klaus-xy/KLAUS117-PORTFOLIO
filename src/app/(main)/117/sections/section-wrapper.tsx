import React from "react";
import { cn } from "@/lib/utils";
// import { Separator } from "../ui/separator";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
  hasSeparator?: boolean;
}
const SectionWrapper = ({
  id,
  children,
  wrapperClassName,
  className,
  hasSeparator,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative z-10 min-h-screen bg-background ",
        wrapperClassName,
      )}
    >
      <div className={cn("container mx-auto ", className)}>{children}</div>
      {/* {hasSeparator && (
        <Separator className="absolute bottom-0 -translate-x-1/2 left-1/2 data-horizontal:h-0.5 data-horizontal:w-11/12 bg-red-500" />
      )} */}
    </section>
  );
};

export default SectionWrapper;
