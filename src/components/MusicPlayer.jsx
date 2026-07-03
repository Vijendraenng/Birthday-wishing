import { Pause, Play, SkipForward } from "lucide-react";
import { AUDIO_SRC } from "../config.js";

export default function MusicPlayer({ audioRef, playing, onToggle }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 rounded-full px-4 py-2 border border-gold/35 bg-wine/85 backdrop-blur">
      <button
        onClick={onToggle}
        aria-label={playing ? "Pause" : "Play"}
        className="w-8 h-8 rounded-full flex items-center justify-center text-cream hover:bg-gold/20"
      >
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </button>

      <div className="flex items-end gap-[2px] h-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-[2px] rounded-full bg-gold transition-[height]"
            style={{
              height: playing ? "12px" : "4px",
              animation: playing ? `eq 1s ${i * 0.2}s infinite ease-in-out` : "none",
            }}
          />
        ))}
      </div>

      <span className="text-[0.7rem] max-w-[110px] truncate text-rose-soft">romantic-song.mp3</span>
      <SkipForward size={15} className="text-cream/50" />
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />
    </div>
  );
}
