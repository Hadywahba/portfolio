import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  useEffect(() => {
    let animId;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  // hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* main dot */}
      <div
        className="fixed z-[9998] pointer-events-none rounded-full bg-text-dark-color dark:bg-text-color"
        style={{
          width: clicking ? 8 : 12,
          height: clicking ? 8 : 12,
          left: pos.x - (clicking ? 4 : 6),
          top: pos.y - (clicking ? 4 : 6),
          transition: 'width 0.1s, height 0.1s',
        }}
      />
      {/* trailing ring */}
      <div
        className="fixed z-[9997] pointer-events-none rounded-full border-2 border-text-dark-color dark:border-text-color"
        style={{
          width: clicking ? 24 : 36,
          height: clicking ? 24 : 36,
          left: trail.x - (clicking ? 12 : 18),
          top: trail.y - (clicking ? 12 : 18),
          opacity: 0.6,
          transition: 'width 0.15s, height 0.15s',
        }}
      />
    </>
  );
}
