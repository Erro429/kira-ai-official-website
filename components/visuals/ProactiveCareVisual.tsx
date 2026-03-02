import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const notifications = [
    { emoji: "☀️", text: "Good morning!", delay: 0 },
    { emoji: "💭", text: "Thinking of you", delay: 1.5 },
    { emoji: "❤️", text: "How are you?", delay: 3 },
];

export const ProactiveCareVisual = () => {
    const [activeNotif, setActiveNotif] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveNotif(prev => (prev + 1) % notifications.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005] via-[#0f0a15] to-[#0a0a1a] overflow-hidden">
            {/* City skyline */}
            <svg className="absolute bottom-0 w-full h-[65%]" viewBox="0 0 400 150" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2D1B4E" />
                        <stop offset="100%" stopColor="#0a0a1a" />
                    </linearGradient>
                </defs>
                {[
                    { x: 5, y: 60, w: 25, h: 90 },
                    { x: 35, y: 40, w: 30, h: 110 },
                    { x: 70, y: 70, w: 20, h: 80 },
                    { x: 95, y: 30, w: 35, h: 120 },
                    { x: 135, y: 55, w: 25, h: 95 },
                    { x: 165, y: 20, w: 40, h: 130 },
                    { x: 210, y: 45, w: 30, h: 105 },
                    { x: 245, y: 65, w: 25, h: 85 },
                    { x: 275, y: 35, w: 35, h: 115 },
                    { x: 315, y: 50, w: 28, h: 100 },
                    { x: 348, y: 25, w: 35, h: 125 },
                    { x: 388, y: 55, w: 20, h: 95 },
                ].map((b, i) => (
                    <g key={i}>
                        <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="url(#buildingGrad)" />
                        {/* Windows */}
                        {[...Array(Math.floor(b.h / 12))].map((_, wi) => (
                            [...Array(Math.floor(b.w / 8))].map((_, wj) => (
                                <motion.rect
                                    key={`${wi}-${wj}`}
                                    x={b.x + 3 + wj * 8}
                                    y={b.y + 5 + wi * 12}
                                    width="4"
                                    height="6"
                                    fill="#F59E0B"
                                    animate={{
                                        opacity: Math.random() > 0.3 ? [0.2, 0.8, 0.2] : 0.1,
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))
                        ))}
                    </g>
                ))}
            </svg>

            {/* Stars */}
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 rounded-full bg-white"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 40}%`,
                    }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                    }}
                />
            ))}

            {/* Moon */}
            <motion.div
                className="absolute top-4 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-amber-300"
                style={{ boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Phone notification popup */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeNotif}
                        initial={{ y: -20, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="px-3 py-1.5 rounded-xl flex items-center gap-2"
                        style={{
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.9))',
                            boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
                        }}
                    >
                        <span className="text-sm">{notifications[activeNotif].emoji}</span>
                        <span className="text-white text-[11px] font-medium">{notifications[activeNotif].text}</span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Kira avatar sending notifications */}
            <motion.div
                className="absolute top-16 left-1/2 -translate-x-1/2"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-kira-purple to-kira-pink flex items-center justify-center text-white text-xs font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                    K
                </div>
                {/* Pulse rings */}
                {[1, 2].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full border border-amber-400"
                        animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: ring * 0.5 }}
                    />
                ))}
            </motion.div>

            {/* Floating notification particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-sm"
                    style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${30 + Math.random() * 30}%`,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                >
                    {['💬', '💝', '🌟', '✨', '💭', '🔔', '💫', '🌙'][i]}
                </motion.div>
            ))}
        </div>
    );
};
