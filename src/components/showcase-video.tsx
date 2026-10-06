"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface ShowcaseVideoProps {
  src: string;
}

const ShowcaseVideo = ({ src }: ShowcaseVideoProps) => {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
      <video
        src={src}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="metadata"
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={muted ? "Unmute video" : "Mute video"}
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-3 right-3 rounded-full bg-background/70 backdrop-blur-sm"
      >
        {muted ? <VolumeX /> : <Volume2 />}
      </Button>
    </div>
  );
};

export default ShowcaseVideo;
