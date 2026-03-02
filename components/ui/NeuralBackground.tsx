import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Track visibility to pause animation when not visible
  const isInView = useInView(canvasRef);

  useEffect(() => {
    if (!isInView) return; // Stop animation loop when component is off-screen

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    // Reduced particle count for mobile performance
    const isMobile = width < 768;
    const particleCount = isMobile ? Math.min(Math.floor(width * 0.05), 40) : Math.min(Math.floor(width * 0.1), 100);
    const connectionDistance = isMobile ? 100 : 150;
    const mouseDistance = 200;

    let mouse = { x: -1000, y: -1000 };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        // Basic movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // --- GRAVITATION LOGIC STARTS HERE ---
        // Mouse interaction (gentle attraction)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          // Apply force to velocity
          p.vx += forceDirectionX * force * 0.05;
          p.vy += forceDirectionY * force * 0.05;
        }
        // --- GRAVITATION LOGIC ENDS HERE ---

        // Friction to prevent infinite acceleration
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.5)'; // Electric Purple
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distDx = p.x - p2.x;
          const distDy = p.y - p2.y;
          const dist = Math.sqrt(distDx * distDx + distDy * distDy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isInView]); // Re-run effect when visibility changes

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default NeuralBackground;