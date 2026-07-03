export function Eyebrow({ children, center }) {
  return (
    <span className={`block text-[0.7rem] tracking-[0.3em] uppercase mb-3 text-gold ${center ? "text-center" : ""}`}>
      {children}
    </span>
  );
}

export function Title({ children, center }) {
  return (
    <h2
      className={`font-display font-medium text-4xl sm:text-5xl leading-[1.1] mb-6 text-cream ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export function Accent({ children }) {
  return <em className="not-italic italic text-rose">{children}</em>;
}
