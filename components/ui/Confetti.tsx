import React, { useEffect, useRef } from 'react';

interface ConfettiProps {
  isActive: boolean;
}

export const Confetti: React.FC<ConfettiProps> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const colors = ['#FF6D5A', '#0EA5E9', '#F59E0B', '#10B981', '#6366F1'];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      rotationSpeed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // Shoot outwards from center-ish
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 15 + 10; 
        this.vx = Math.cos(angle) * velocity * (Math.random() > 0.5 ? 1 : -1);
        this.vy = Math.sin(angle) * velocity - 10; // Upward bias
        this.size = Math.random() * 10 + 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 10;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.5; // Gravity
        this.vx *= 0.95; // Air resistance
        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    // Spawn particles from both sides
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(0, window.innerHeight)); // Left corner
      particles.push(new Particle(window.innerWidth, window.innerHeight)); // Right corner
    }

    let animationId: number;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Remove particles off screen
        if (particles[i].y > canvas.height + 100) {
          particles.splice(i, 1);
          i--;
        }
      }

      if (particles.length > 0) {
        animationId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[100] ${isActive ? 'block' : 'hidden'}`}
    />
  );
};
