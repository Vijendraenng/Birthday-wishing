import { Heart } from "lucide-react";

export default function Hero({ playing, onToggleMusic }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10"
      style={{
        background:
          "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(232,160,191,0.16), transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,175,106,0.10), transparent 70%), linear-gradient(180deg, #241220 0%, #190B15 100%)",
      }}
    >
      <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 border border-gold/50 bg-gradient-to-br from-wine to-ember shadow-[0_0_60px_rgba(232,160,191,0.25)] animate-float-slow">
        <Heart size={40} className="text-gold-soft" fill="currentColor" />
      </div>

      <p className="text-[0.7rem] tracking-[0.4em] uppercase mb-3 text-gold">
        A little something, made just for you
      </p>

      <h1 className="font-display font-semibold text-5xl sm:text-7xl leading-[1.04] max-w-xl">
        Happy Birthday <em className="not-italic italic text-rose">Mansi</em>
      </h1>

      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <a
          href="#countdown"
          className="text-xs tracking-wider uppercase px-8 py-4 rounded-full border border-rose bg-rose text-wine-deep transition-all hover:-translate-y-0.5 hover:bg-gold hover:border-gold"
        >
          Begin Journey
        </a>
        <button
          onClick={onToggleMusic}
          className="text-xs tracking-wider uppercase px-8 py-4 rounded-full border border-gold text-cream transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-wine-deep"
        >
          {playing ? "Pause Music" : "Play Music"}
        </button>
      </div>

      <p className="absolute bottom-8 text-[0.65rem] tracking-[0.3em] uppercase text-cream/50">
        Scroll to unwrap ↓
      </p>
    </section>
  );
}
