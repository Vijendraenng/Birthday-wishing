import { useEffect, useState } from "react";
import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { BIRTHDAY_DATE } from "../config.js";

export default function Countdown() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const isToday = now.toDateString() === BIRTHDAY_DATE.toDateString();
  const diff = BIRTHDAY_DATE - now;

  return (
    <Section id="countdown" center>
      <Eyebrow center>The Big Day</Eyebrow>
      <Title center>
        Counting Down <Accent>To You</Accent>
      </Title>

      {isToday || diff <= 0 ? (
        <p className="font-display italic text-3xl sm:text-4xl text-rose">
          Today's the Special Day 🎉
        </p>
      ) : (
        <CountdownGrid diff={diff} />
      )}
    </Section>
  );
}

function CountdownGrid({ diff }) {
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const cells = [
    { n: days, l: "Days" },
    { n: hours, l: "Hours" },
    { n: minutes, l: "Minutes" },
    { n: seconds, l: "Seconds" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
      {cells.map((c) => (
        <div key={c.l} className="rounded-2xl px-6 py-5 min-w-[90px] border border-gold/30 bg-wine">
          <div className="font-display font-semibold text-4xl text-gold-soft">{c.n}</div>
          <div className="text-[0.65rem] tracking-[0.2em] uppercase mt-1 text-rose-soft">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
