import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { TIMELINE } from "../config.js";

export default function StoryTimeline() {
  return;
  // (
  //   <Section id="story">
  //     <Eyebrow>Our Story</Eyebrow>
  //     <Title>
  //       How <Accent>We</Accent> Happened
  //     </Title>
  //     <div className="relative pl-8">
  //       <div className="absolute left-[6px] top-1 bottom-1 w-px bg-gradient-to-b from-gold via-rose to-gold" />
  //       {TIMELINE.map((item, i) => (
  //         <div key={i} className="relative pb-14 last:pb-0">
  //           <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-gold shadow-[0_0_0_4px_#241220,0_0_16px_rgba(212,175,106,0.6)]" />
  //           <div
  //             className={`font-display italic text-lg ${item.final ? "text-rose" : "text-gold"}`}
  //           >
  //             {item.year}
  //           </div>
  //           <h3
  //             className={`font-display font-medium mt-1 mb-1 ${
  //               item.final
  //                 ? "text-3xl sm:text-4xl text-rose"
  //                 : "text-2xl text-cream"
  //             }`}
  //           >
  //             {item.title}
  //           </h3>
  //           <p className="max-w-md text-rose-soft">{item.text}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </Section>
  // );
}
