import { useEffect, useRef } from "react";

export default function EmberCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let embers = [];
    let raf;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function spawn() {
      embers.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        r: Math.random() * 2.2 + 0.8,
        speed: Math.random() * 0.5 + 0.2,
        drift: Math.random() * 0.6 - 0.3,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }
    for (let i = 0; i < 34; i++) {
      embers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.2 + 0.8,
        speed: Math.random() * 0.5 + 0.2,
        drift: Math.random() * 0.6 - 0.3,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      embers.forEach((e) => {
        e.y -= e.speed;
        e.x += e.drift;
        ctx.beginPath();
        ctx.fillStyle = `rgba(232,160,191,${e.alpha})`;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      });
      embers = embers.filter((e) => e.y > -20);
      while (embers.length < 34) spawn();
      raf = requestAnimationFrame(loop);
    }
    if (!reduceMotion) raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70" />;
}
