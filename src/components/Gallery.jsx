import { useState } from "react";
import { Image as ImageIcon, X } from "lucide-react";
import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { GALLERY } from "../config.js";

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="gallery">
      <Eyebrow>Frozen in Time</Eyebrow>
      <Title>
        Our <Accent>Memory</Accent> Gallery
      </Title>
      <p className="mb-8 max-w-md text-rose-soft">
        Tap a photo to relive it. Drop real files into <code>/public/images</code>.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {GALLERY.map((photo, i) => (
          <button
            key={i}
            onClick={() => setOpen(photo)}
            aria-label={`Open memory: ${photo.caption}`}
            className="aspect-square rounded-xl border border-gold/25 bg-gradient-to-br from-wine to-ember flex items-center justify-center overflow-hidden transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <GalleryThumb photo={photo} />
          </button>
        ))}
      </div>

      {open && <Lightbox photo={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}

function GalleryThumb({ photo }) {
  const [errored, setErrored] = useState(false);
  if (errored) return <ImageIcon size={22} className="text-cream/50" />;
  return (
    <img
      src={photo.src}
      alt={photo.caption}
      loading="lazy"
      className="w-full h-full object-cover"
      onError={() => setErrored(true)}
    />
  );
}

function Lightbox({ photo, onClose }) {
  const [errored, setErrored] = useState(false);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-gold bg-wine"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-10 text-cream" aria-label="Close">
          <X size={22} />
        </button>
        <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-wine to-ember text-cream/60">
          {errored ? (
            <ImageIcon size={40} />
          ) : (
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover absolute inset-0"
              onError={() => setErrored(true)}
            />
          )}
          <p className="font-display italic text-lg px-6 text-center relative z-10 bg-wine/70 rounded px-3 py-1">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
