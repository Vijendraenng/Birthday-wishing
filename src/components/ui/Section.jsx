export function Section({ id, children, center }) {
  return (
    <section id={id} className={`relative max-w-3xl mx-auto px-6 py-24 sm:py-28 ${center ? "text-center" : ""}`}>
      {children}
    </section>
  );
}

export function ThreadDivider() {
  return (
    <div className="relative mx-auto w-px h-16 my-2 bg-gradient-to-b from-transparent via-gold to-transparent">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center text-xs bg-night text-gold">
        ♥
      </span>
    </div>
  );
}
