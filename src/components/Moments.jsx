import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { MOMENTS } from "../config.js";

export default function Moments() {
  return (
    <Section id="moments">
      <Eyebrow>Highlight Reel</Eyebrow>
      <Title>
        Favorite <Accent>Moments</Accent>
      </Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {MOMENTS.map((m) => (
          <div key={m.label} className="rounded-2xl p-6 text-center border border-gold/20 bg-wine">
            <div className="text-2xl mb-2">{m.icon}</div>
            <h4 className="font-display text-lg text-gold-soft">{m.label}</h4>
          </div>
        ))}
      </div>
    </Section>
  );
}
