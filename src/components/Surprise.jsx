import { useRef, useState } from "react";
import { Gift, Sparkles } from "lucide-react";
import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import SurpriseCanvas from "./SurpriseCanvas.jsx";

export default function Surprise() {
  const burstRef = useRef(null);
  const [shown, setShown] = useState(false);

  function handleClick() {
    burstRef.current && burstRef.current();
    setTimeout(() => burstRef.current && burstRef.current(), 350);
    setTimeout(() => burstRef.current && burstRef.current(), 700);
    setShown(true);
  }

  return (
    <section
      id="surprise"
      className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center text-center px-6"
    >
      <SurpriseCanvas triggerRef={burstRef} />

      <Eyebrow center>One More Thing…</Eyebrow>
      <Title center>
        A Little <Accent>Surprise</Accent>
      </Title>

      <button
        onClick={handleClick}
        className="font-display italic text-2xl px-12 py-6 rounded-full border border-gold flex items-center gap-3 text-cream shadow-[0_0_50px_rgba(232,160,191,0.35)] animate-glow-pulse transition-transform hover:scale-105 active:scale-95"
        style={{ background: "radial-gradient(circle at 30% 30%, #E8A0BF, #8C2F39)" }}
      >
        <Gift size={22} /> Click for Surprise
      </button>

      <p
        className={`font-display italic mt-10 text-3xl sm:text-5xl text-rose transition-all duration-700 ${
          shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        I Love You Forever <Sparkles className="inline" size={28} />
      </p>
    </section>
  );
}
