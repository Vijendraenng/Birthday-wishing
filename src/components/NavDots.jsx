import { NAV_SECTIONS } from "../config.js";

export default function NavDots() {
  return (
    <nav className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {NAV_SECTIONS.map((s) => (
        <a
          key={s}
          href={`#${s}`}
          aria-label={s}
          className="w-2 h-2 rounded-full border border-cream/35 bg-cream/25 transition-transform hover:scale-125 hover:bg-gold hover:border-gold"
        />
      ))}
    </nav>
  );
}
