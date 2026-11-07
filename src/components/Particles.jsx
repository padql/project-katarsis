import { useEffect, useRef, useState } from "react";

const randomIn = ([min, max]) => min + Math.random() * (max - min);

/**
 * Fixed full-page canvas with slow falling/drifting dots.
 * Used for snow and summer pollen; leaves use the falling-leaves package.
 */
export default function Particles({
  count = 70,
  size = [1.5, 3],
  speed = [0.5, 1.2],
  drift = [0.2, 0.6],
  sway = [0.2, 0.8],
  color = "148,163,184",
  outline = null,
  opacity = [0.35, 0.8],
}) {
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let frame;
    let particles = [];
    let width = 0;
    let height = 0;

    const respawn = (particle, initial) => {
      particle.x = Math.random() * width;
      particle.y = initial ? Math.random() * height : -randomIn(size) - 4;
      particle.radius = randomIn(size);
      particle.vy = randomIn(speed);
      particle.vx = randomIn(drift) * (Math.random() < 0.5 ? -1 : 1);
      particle.sway = randomIn(sway);
      particle.swaySpeed = 0.4 + Math.random() * 0.8;
      particle.phase = Math.random() * Math.PI * 2;
      particle.alpha = randomIn(opacity);
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const total = width < 640 ? Math.round(count * 0.6) : count;
      particles = Array.from({ length: total }, () => {
        const particle = {};
        respawn(particle, true);
        return particle;
      });
    };

    let lastTime = performance.now();

    const tick = (time) => {
      const delta = Math.min((time - lastTime) / 16.667, 3);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.phase += 0.012 * delta * particle.swaySpeed;
        particle.y += particle.vy * delta;
        particle.x += (particle.vx + Math.sin(particle.phase) * particle.sway) * delta;

        if (particle.y - particle.radius > height) respawn(particle, false);
        if (particle.x < -particle.radius * 2) particle.x = width + particle.radius * 2;
        if (particle.x > width + particle.radius * 2) particle.x = -particle.radius * 2;

        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${color})`;
        ctx.fill();

        if (outline) {
          ctx.strokeStyle = `rgba(${outline})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(tick);
    };

    resize();
    frame = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion, count, size, speed, drift, sway, color, outline, opacity]);

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
