"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface ProjectHeroVideoProps {
  src: string;
}

const ProjectHeroVideo = ({ src }: ProjectHeroVideoProps) => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute trailer" : "Mute trailer"}
        className="absolute bottom-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-terminal-green bg-background/60 text-terminal-green backdrop-blur-sm transition-colors hover:bg-terminal-green hover:text-background md:bottom-10 md:right-10"
      >
        {muted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </button>
    </>
  );
};

export default ProjectHeroVideo;
