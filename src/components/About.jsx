import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { TRAITS } from "../config.js";

export default function About() {
  return (
    <Section id="about">
      <Eyebrow>In Four Words (Or Five)</Eyebrow>
      <Title>
        Everything <Accent>I Adore</Accent> About You
      </Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {TRAITS.map((t) => (
          <div
            key={t.label}
            className="rounded-2xl p-6 text-center border border-rose/20 bg-gradient-to-br from-wine to-wine-deep transition-transform hover:-translate-y-1"
          >
            <div className="text-2xl mb-2">{t.icon}</div>
            <h3 className="font-display text-xl text-rose-soft">{t.label}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
