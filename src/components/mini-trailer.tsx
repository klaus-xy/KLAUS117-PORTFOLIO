import { cn } from "@/lib/utils";
import React from "react";

interface MiniTrailerProps {
  src?: string;
  className?: string;
}

const MiniTrailer = ({
  src = "/videos/trailer.mov",
  className,
}: MiniTrailerProps) => {
  return (
    <div
      className={cn(
        `w-32 h-24 mx-2 border-white border-4 bg-muted rounded-3xl overflow-hidden`,
        className,
      )}
    >
      {/* Mini Projects Trailer */}
      <video
        className="w-full h-full object-cover scale-200"
        src="/videos/trailer.mov"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default MiniTrailer;
