import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";

export default function Wishes() {
  return (
    <Section id="wishes" center>
      <Eyebrow center>One Last Thing</Eyebrow>
      <Title center>
        Happy Birthday <Accent>My Princess</Accent> ❤️
      </Title>
      <p className="mb-2 text-rose-soft">May all your dreams come true.</p>
      <p className="mb-2 text-rose-soft">I promise to always stand beside you.</p>
      <p className="text-rose-soft">You deserve every happiness in this world.</p>
    </Section>
  );
}
