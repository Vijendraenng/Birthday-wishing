import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { LOVE_LETTER } from "../config.js";

export default function LoveLetter() {
  return (
    <Section id="letter" center>
      <Eyebrow center>Straight From The Heart</Eyebrow>
      <Title center>
        A  <Accent>Letter</Accent>
      </Title>
      <div className="max-w-lg mx-auto rounded p-10 sm:p-14 text-left font-display bg-gradient-to-b from-[#FBF3E7] to-[#F4E8D6] text-wine-deep shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
        {LOVE_LETTER.map((p, i) => (
          <p key={i} className="text-xl leading-relaxed mb-4">
            {p}
          </p>
        ))}
        <p className="text-right italic text-2xl text-ember">Happy Birthday ❤️</p>
      </div>
    </Section>
  );
}
