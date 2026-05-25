import { useEffect, useRef } from 'react';

const SAKURA_COUNT = 40;
const SAKURA_COLORS = ['#f4c2c2', '#f0b0b0', '#f8d0d0', '#e8a0a0', '#fad4d4'];

class Petal {
  constructor(w, h) {
    this.reset(w, h, true);
  }

  reset(w, h, init = false) {
    this.x = Math.random() * w;
    this.y = init ? Math.random() * h : -20;
    this.size = Math.random() * 8 + 4;
    this.speedY = Math.random() * 1.2 + 0.4;
    this.speedX = Math.random() * 0.8 - 0.4;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.03;
    this.opacity = Math.random() * 0.4 + 0.15;
    this.color = SAKURA_COLORS[Math.floor(Math.random() * SAKURA_COLORS.length)];
    this.swing = Math.random() * 40 + 20;
    this.swingSpeed = Math.random() * 0.01 + 0.005;
    this.startX = this.x;
  }

  update(w, h, mouseX, mouseY, time) {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin(time * this.swingSpeed + this.y * 0.01) * 0.3;
    this.rotation += this.rotSpeed;

    // Subtle mouse repulsion
    if (mouseX !== null && mouseY !== null) {
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120 * 0.5;
        this.x += (dx / dist) * force;
        this.y += (dy / dist) * force;
      }
    }

    if (this.y > h + 20) this.reset(w, h);
    if (this.x < -20 || this.x > w + 20) this.reset(w, h);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    // Draw a simple petal shape
    ctx.ellipse(0, 0, this.size, this.size * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function Sakura() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;
    let animId;

    canvas.width = width;
    canvas.height = height;

    const petals = Array.from({ length: SAKURA_COUNT }, () => new Petal(width, height));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouse = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);
      for (const p of petals) {
        p.update(width, height, mouseRef.current.x, mouseRef.current.y, time);
        p.draw(ctx);
      }
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
