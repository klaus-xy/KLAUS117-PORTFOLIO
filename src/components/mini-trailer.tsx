import { cn } from "@/lib/utils";
import React from "react";

interface MiniTrailerProps {
  url?: string;
  className?: string;
}

const MiniTrailer = ({
  url = "/videos/trailer.mov",
  className,
}: MiniTrailerProps) => {
  return (
    <div
      className={cn(
        `w-32 h-24 mx-2 border-white border-5 bg-muted rounded-3xl overflow-hidden`,
        className,
      )}
    >
      {/* Mini Projects Trailer */}
      <video
        className="w-full h-full object-cover scale-200"
        src={url}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default MiniTrailer;
