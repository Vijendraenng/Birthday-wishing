import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Eyebrow, Title, Accent } from "./ui/Typography.jsx";
import { Section } from "./ui/Section.jsx";
import { VIDEO_SRC } from "../config.js";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }

  return;
  // (
  //   <Section id="video">
  //     <Eyebrow>Watch This</Eyebrow>
  //     <Title>
  //       Our Beautiful <Accent>Memories</Accent>
  //     </Title>
  //     <p className="mb-6 max-w-md text-rose-soft">
  //       Drop your video into <code>/public/videos/memories.mp4</code> — it'll
  //       play right here.
  //     </p>
  //     <div className="relative aspect-video rounded-2xl border border-gold/30 bg-gradient-to-br from-wine to-ember overflow-hidden flex items-center justify-center">
  //       <video
  //         ref={videoRef}
  //         controls
  //         preload="none"
  //         className="w-full h-full object-cover"
  //         onPlay={() => setPlaying(true)}
  //         onPause={() => setPlaying(false)}
  //       >
  //         <source src={VIDEO_SRC} type="video/mp4" />
  //       </video>
  //       {!playing && (
  //         <button
  //           onClick={handlePlay}
  //           aria-label="Play video"
  //           className="absolute w-16 h-16 rounded-full border border-gold flex items-center justify-center bg-cream/10 backdrop-blur text-gold-soft"
  //         >
  //           <Play size={26} />
  //         </button>
  //       )}
  //     </div>
  //   </Section>
  // );
}
