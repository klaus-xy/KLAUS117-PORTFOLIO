"use client";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";
import LoadingDots from "@/components/ui/loading-dots";

interface ProjectHeroVideoProps {
  src: string;
}

const ProjectHeroVideo = ({ src }: ProjectHeroVideoProps) => {
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const setRefs = (el: HTMLVideoElement | null) => {
    videoRef.current = el;
    // On fast connections the video can finish loading before this
    // effect/listener attaches, so check the current state directly too.
    if (el && el.readyState >= 3) setReady(true);
  };

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    setReady(false);
  }, [src]);

  return (
    <>
      <video
        ref={setRefs}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setReady(true)}
        onCanPlay={() => setReady(true)}
      />
      {!ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="absolute inset-0 flex items-center justify-center text-terminal-green"
        >
          <LoadingDots />
        </motion.div>
      )}
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute trailer" : "Mute trailer"}
        className={`absolute bottom-4 sm:bottom-6 right-3 sm:right-6 z-20 flex size-9 sm:size-10 items-center justify-center rounded-full border sm:border-2 ${muted ? "" : "border-terminal-green"} bg-background/40 text-terminal-green backdrop-blur-sm transition-colors hover:bg-terminal-green hover:text-background md:bottom-10 md:right-10`}
      >
        {muted ? (
          <VolumeX className="h-4 w-4 text-muted-foreground" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </button>
    </>
  );
};

export default ProjectHeroVideo;
