"use client";
import { Fragment, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const dialogVideoVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const dialogWordsVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.15 } },
};

const dialogWordVariants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

interface ShowcaseVideoProps {
  src: string;
  description?: string;
  alt: string;
}

const ShowcaseVideo = ({ src, description, alt }: ShowcaseVideoProps) => {
  const [muted, setMuted] = useState(true);
  const [dialogMuted, setDialogMuted] = useState(true);
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(description);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        role={hasDetails ? "button" : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        data-cursor-text={hasDetails ? "View Details" : undefined}
        onClick={() => hasDetails && setOpen(true)}
        onKeyDown={(e) => {
          if (hasDetails && e.key === "Enter") setOpen(true);
        }}
        className="relative aspect-video overflow-hidden rounded-2xl bg-muted"
      >
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
          onClick={(e) => {
            e.stopPropagation();
            setMuted((m) => !m);
          }}
          className="absolute bottom-3 right-3 rounded-full bg-background/70 backdrop-blur-sm"
        >
          {muted ? <VolumeX /> : <Volume2 />}
        </Button>
        {hasDetails && (
          <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1 border rounded-full bg-background/30 px-2.5 py-1 text-[0.55rem] text-muted-foreground backdrop-blur-sm sm:hidden">
            <Info className="size-3" />
            View details
          </span>
        )}
      </div>

      {hasDetails && (
        <DialogContent className="content-start duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-h-[60vh] sm:h-[90vh] w-[90%] overflow-y-auto border-terminal-green bg-background/80 p-5 backdrop-blur-md sm:max-w-6xl sm:p-8">
          <DialogTitle className="font-eurostile">{alt}</DialogTitle>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: { staggerChildren: 0.25, delayChildren: 0.1 },
              },
            }}
            className="flex flex-col gap-4"
          >
            <motion.div
              variants={dialogVideoVariants}
              className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-xl"
            >
              <video
                src={src}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted={dialogMuted}
                playsInline
                preload="metadata"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={dialogMuted ? "Unmute video" : "Mute video"}
                onClick={() => setDialogMuted((m) => !m)}
                className="absolute bottom-3 right-3 rounded-full bg-background/70 backdrop-blur-sm"
              >
                {dialogMuted ? <VolumeX /> : <Volume2 />}
              </Button>
            </motion.div>
            <DialogDescription className="font-helvetica-neue font-normal tracking-wider text-[0.7rem] text-muted-foreground sm:text-sm">
              <motion.span variants={dialogWordsVariants} className="block">
                {description?.split(" ").map((word, i) => (
                  <Fragment key={i}>
                    <motion.span
                      variants={dialogWordVariants}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>{" "}
                  </Fragment>
                ))}
              </motion.span>
            </DialogDescription>
          </motion.div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ShowcaseVideo;
