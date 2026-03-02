import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const memories = [
    { text: "Max 🐕", x: 15, y: 20 },
    { text: "cilantro ❌", x: 70, y: 15 },
    { text: "mom's birthday", x: 25, y: 70 },
    { text: "fear of heights", x: 65, y: 75 },
    { text: "favorite song", x: 45, y: 45 },
    { text: "first kiss", x: 10, y: 45 },
    { text: "dream job", x: 80, y: 45 },
];

export const InfiniteMemoryVisual = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % memories.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0f0520] to-[#0a0a1a] overflow-hidden">
            {/* Central brain/memory core */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kira-purple to-kira-purple/30 shadow-[0_0_40px_rgba(139,92,246,0.6)]" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-kira-purple rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `rotate(${angle}deg) translateY(-32px)`,
                        }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </motion.div>

            {/* Connection lines from center to memories */}
            <svg className="absolute inset-0 w-full h-full">
                {memories.map((mem, i) => (
                    <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${mem.x}%`}
                        y2={`${mem.y}%`}
                        stroke="url(#purpleGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: activeIndex === i ? 1 : 0.3,
                            opacity: activeIndex === i ? 1 : 0.2,
                        }}
                        transition={{ duration: 0.8 }}
                    />
                ))}
                <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--kira-purple))" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="hsl(var(--kira-purple))" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating memory bubbles */}
            {memories.map((mem, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: `${mem.x}%`, top: `${mem.y}%` }}
                    initial={{ scale: 0 }}
                    animate={{
                        scale: activeIndex === i ? 1.2 : 0.8,
                        y: [0, -5, 0],
                    }}
                    transition={{
                        scale: { duration: 0.4 },
                        y: { duration: 2 + i * 0.3, repeat: Infinity },
                    }}
                >
                    <motion.div
                        className="px-2 py-1 rounded-full text-[10px] font-medium whitespace-nowrap"
                        style={{
                            background: activeIndex === i
                                ? 'linear-gradient(135deg, hsl(var(--kira-purple)), hsl(var(--kira-pink)))'
                                : 'rgba(139, 92, 246, 0.2)',
                            color: 'white',
                            boxShadow: activeIndex === i ? '0 0 20px rgba(139, 92, 246, 0.6)' : 'none',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                        }}
                    >
                        {mem.text}
                    </motion.div>
                </motion.div>
            ))}

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-kira-purple/60"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};
