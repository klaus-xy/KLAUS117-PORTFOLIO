import { cn } from "@/lib/utils";

// ---------------- MUSIC PLAYER COMPONENT ----------------------- //

interface MusicPlayerProps {
  className?: string;
}
const MusicPlayer = ({ className }: MusicPlayerProps) => {
  return (
    <div className={cn("fixed", className)}>
      Music Player
      <audio controls loop src="/audio/stranger-things.mp3" preload="auto">
        {/* Fallback */}
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
