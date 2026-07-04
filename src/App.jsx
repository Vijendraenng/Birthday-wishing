import { useRef, useState } from "react";
import EmberCanvas from "./components/EmberCanvas.jsx";
import NavDots from "./components/NavDots.jsx";
import Hero from "./components/Hero.jsx";
import Countdown from "./components/Countdown.jsx";
import About from "./components/About.jsx";
import StoryTimeline from "./components/StoryTimeline.jsx";
import Gallery from "./components/Gallery.jsx";
import Moments from "./components/Moments.jsx";
import LoveLetter from "./components/LoveLetter.jsx";
import Reasons from "./components/Reasons.jsx";
import VideoSection from "./components/VideoSection.jsx";
import Wishes from "./components/Wishes.jsx";
import Surprise from "./components/Surprise.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import { ThreadDivider } from "./components/ui/Section.jsx";

export default function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }

  return (
    <div className="relative min-h-screen w-full">
      <EmberCanvas />
      <NavDots />

      <Hero playing={playing} onToggleMusic={toggleMusic} />
      <Countdown />
      <ThreadDivider />
      <About />
      <ThreadDivider />
      <StoryTimeline />
      {/* <ThreadDivider /> */}
      <Gallery />
      {/* <ThreadDivider /> */}
      <Moments />
      <ThreadDivider />
      <LoveLetter />
      <ThreadDivider />
      <Reasons />
      {/* <ThreadDivider /> */}
      <VideoSection />
      {/* <ThreadDivider /> */}
      <Wishes />
      <Surprise />

      <MusicPlayer
        audioRef={audioRef}
        playing={playing}
        onToggle={toggleMusic}
      />

      <footer className="text-center py-8 text-[0.7rem] tracking-[0.15em] uppercase text-cream/40">
        Made with ❤️ — happy birthday
      </footer>
    </div>
  );
}
