import { useEffect, useRef } from "react";

const COLORS = ["#E8A0BF", "#D4AF6A", "#F7ECE1", "#8C2F39", "#F2C8D9"];

export default function SurpriseCanvas({ triggerRef }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function makeConfetti(x, y) {
      return {
        type: "c",
        x,
        y,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 10 - 4,
        size: Math.random() * 6 + 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
        spin: (Math.random() - 0.5) * 10,
        life: 0,
      };
    }
    function makeHeart(x, y) {
      return {
        type: "h",
        x,
        y,
        vx: (Math.random() - 0.5) * 5,
        vy: -Math.random() * 7 - 3,
        size: Math.random() * 10 + 10,
        color: COLORS[Math.floor(Math.random() * 2)],
        life: 0,
      };
    }
    function drawHeart(p) {
      const s = p.size / 10;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(s, s);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, 3);
      ctx.bezierCurveTo(-6, -4, -14, 2, 0, 12);
      ctx.bezierCurveTo(14, 2, 6, -4, 0, 3);
      ctx.fill();
      ctx.restore();
    }
    function drawConfetti(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.18;
        p.life += 1;
        if (p.type === "c") {
          p.rotation += p.spin;
          drawConfetti(p);
        } else {
          drawHeart(p);
        }
      });
      particlesRef.current = particlesRef.current.filter((p) => p.life < 180 && p.y < canvas.height + 40);
      if (particlesRef.current.length > 0) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    }

    function burst() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      for (let i = 0; i < 60; i++) particlesRef.current.push(makeConfetti(cx, cy));
      for (let i = 0; i < 24; i++) particlesRef.current.push(makeHeart(cx, cy));
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    }

    if (triggerRef) triggerRef.current = burst;

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[60]" />;
}
