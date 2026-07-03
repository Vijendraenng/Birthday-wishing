# Birthday Website — React + Tailwind

A full Vite + React + Tailwind project (verified: `npm install && npm run build` passes clean).

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → /dist
```

## Project structure

```
index.html                  Vite entry, loads Google Fonts
tailwind.config.js          custom "candlelight" palette + fonts + keyframes
postcss.config.js
vite.config.js
src/
  main.jsx                  React root
  App.jsx                   assembles every section, owns the audio element
  index.css                 Tailwind directives + small globals
  config.js                 ALL editable content lives here (see below)
  components/
    EmberCanvas.jsx          ambient floating background particles
    NavDots.jsx               fixed right-side section nav
    Hero.jsx
    Countdown.jsx
    About.jsx
    StoryTimeline.jsx
    Gallery.jsx                grid + lightbox, graceful image fallback
    Moments.jsx
    LoveLetter.jsx
    Reasons.jsx                scroll-reveal cards
    VideoSection.jsx
    Surprise.jsx               confetti/heart burst on click
    SurpriseCanvas.jsx         the canvas particle engine
    MusicPlayer.jsx            floating bottom player
    ui/
      Typography.jsx           Eyebrow, Title, Accent
      Section.jsx               Section wrapper, ThreadDivider
public/
  images/    music/    videos/    ← put your real files here
```

## Make it hers

Almost everything you'd want to change lives in **`src/config.js`**:

- `BIRTHDAY_DATE` — set her real birthday, e.g. `new Date('2026-09-14T00:00:00')`
- `TRAITS`, `TIMELINE`, `MOMENTS`, `REASONS`, `GALLERY`, `LOVE_LETTER` — all the copy
- `AUDIO_SRC` / `VIDEO_SRC` — paths to your music/video files

Media:
1. Drop photos into `public/images/` using the filenames referenced in `GALLERY` (or edit the paths in `config.js`). Missing images fall back to a soft icon automatically — nothing breaks.
2. Drop `public/music/romantic-song.mp3` for the music player.
3. Drop `public/videos/memories.mp4` for the video section.

The hero title ("My Love"), letter closing, and wishes copy live directly in their component files (`Hero.jsx`, `LoveLetter.jsx`, `Wishes.jsx`) since they're one-off lines rather than repeated data.

## Deploy

`npm run build` outputs a static `/dist` folder — drag it into Netlify/Vercel/GitHub Pages or any static host.
