import { useEffect, useRef, useState } from "react";
import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { REASONS } from "../config.js";

export default function Reasons() {
  const refs = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setTimeout(
              () => setVisible((v) => ({ ...v, [idx]: true })),
              idx * 90,
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return;
  // (
  //   <Section id="reasons">
  //     <Eyebrow>Not An Exhaustive List</Eyebrow>
  //     <Title>
  //       Reasons <Accent>Why</Accent> I Love You
  //     </Title>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  //       {REASONS.map((r, i) => (
  //         <div
  //           key={i}
  //           ref={(el) => (refs.current[i] = el)}
  //           data-idx={i}
  //           className={`rounded-2xl p-6 border border-rose/20 bg-gradient-to-br from-wine to-wine-deep transition-all duration-700 ${
  //             visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  //           }`}
  //         >
  //           <div className="font-display italic text-sm text-gold">{String(i + 1).padStart(2, "0")}</div>
  //           <h4 className="font-display text-2xl mt-1 text-cream">{r}</h4>
  //         </div>
  //       ))}
  //     </div>
  //   </Section>
  // );
}
