import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = -100;
    let y = -100;
    let currentX = x;
    let currentY = y;

    const handleMouse = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      currentX += (x - currentX) * 0.08;
      currentY += (y - currentY) * 0.08;
      el.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouse);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,75,60,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'opacity 0.3s',
      }}
    />
  );
}
