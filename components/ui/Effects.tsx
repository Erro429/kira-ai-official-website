import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import CustomCursor from './CustomCursor';
import NeuralBackground from './NeuralBackground';

export { CustomCursor as FuturisticCursor };
export { NeuralBackground as FuturisticBackground };

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div 
            style={{ 
                position: 'fixed', top: 0, left: 0, right: 0, height: '3px', 
                background: 'linear-gradient(90deg, #8B5CF6, #EC4899, #06B6D4)', 
                transformOrigin: '0%', scaleX: scrollYProgress, zIndex: 1001 
            }} 
        />
    );
};

export const MouseGlow = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);
    return (
        <div 
            style={{ 
                transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
            }} 
            className="fixed w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] pointer-events-none z-0" 
        />
    );
};

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', style = {} }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            ref={ref} 
            onMouseMove={handleMouse} 
            onMouseLeave={handleLeave} 
            style={{ ...style, rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const TypingText = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[index];
        const timeout = setTimeout(() => {
            if (!deleting) {
                setText(current.substring(0, text.length + 1));
                if (text === current) setTimeout(() => setDeleting(true), 2000);
            } else {
                setText(current.substring(0, text.length - 1));
                if (text === '') {
                    setDeleting(false);
                    setIndex((index + 1) % texts.length);
                }
            }
        }, deleting ? 50 : 100);
        return () => clearTimeout(timeout);
    }, [text, deleting, index, texts]);

    return (
        <span>
            {text}
            <span className="opacity-70">|</span>
        </span>
    );
};

export const NeuralCanvas = ({ color = '#8B5CF6' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current; 
        if (!canvas) return;
        const ctx = canvas.getContext('2d'); 
        if (!ctx) return;
        
        // Dynamic resizing to fit container
        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };
        resize();
        window.addEventListener('resize', resize);
        
        const nodes = [...Array(50)].map(() => ({ 
            x: Math.random() * canvas.width, 
            y: Math.random() * canvas.height, 
            vx: (Math.random() - 0.5) * 0.5, 
            vy: (Math.random() - 0.5) * 0.5, 
            r: Math.random() * 3 + 2 
        }));

        let id: number;
        const animate = () => {
            // Use current dimensions
            const w = canvas.width;
            const h = canvas.height;

            ctx.fillStyle = 'rgba(13, 13, 21, 0.2)'; // Slight trail effect matching dark bg
            ctx.fillRect(0, 0, w, h);
            
            nodes.forEach((n, i) => {
                n.x += n.vx; 
                n.y += n.vy; 
                
                // Bounce logic
                if (n.x < 0 || n.x > w) n.vx *= -1; 
                if (n.y < 0 || n.y > h) n.vy *= -1;
                
                nodes.forEach((o, j) => { 
                    if (i === j) return; 
                    const d = Math.hypot(n.x - o.x, n.y - o.y); 
                    if (d < 80) { 
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(o.x, o.y); 
                        
                        // Use globalAlpha for cleaner opacity handling
                        ctx.globalAlpha = 1 - d / 80;
                        ctx.strokeStyle = color; 
                        ctx.lineWidth = 1;
                        ctx.stroke(); 
                        ctx.globalAlpha = 1;
                    } 
                });
                
                ctx.beginPath(); 
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); 
                ctx.fillStyle = color; 
                ctx.shadowBlur = 15; 
                ctx.shadowColor = color; 
                ctx.fill(); 
                ctx.shadowBlur = 0;
            });
            id = requestAnimationFrame(animate);
        };
        animate(); 
        
        return () => {
            cancelAnimationFrame(id);
            window.removeEventListener('resize', resize);
        };
    }, [color]);

    return <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />;
};