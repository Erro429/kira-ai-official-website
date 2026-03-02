import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AdaptiveGrowthVisual = () => {
    const [level, setLevel] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setLevel(prev => (prev % 5) + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#061428] to-[#0a0a1a] overflow-hidden flex items-center justify-center">
            {/* DNA-like helix strands */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="helixGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient id="helixGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                </defs>
                {[...Array(8)].map((_, i) => {
                    const y = 20 + i * 22;
                    const offset = Math.sin(i * 0.8) * 30;
                    return (
                        <g key={i}>
                            <motion.circle
                                cx={100 + offset}
                                cy={y}
                                r="4"
                                fill="url(#helixGrad1)"
                                animate={{
                                    cx: [100 + offset, 100 - offset, 100 + offset],
                                    opacity: i < level * 1.6 ? [0.4, 1, 0.4] : 0.2,
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
                            />
                            <motion.circle
                                cx={100 - offset}
                                cy={y}
                                r="4"
                                fill="url(#helixGrad2)"
                                animate={{
                                    cx: [100 - offset, 100 + offset, 100 - offset],
                                    opacity: i < level * 1.6 ? [0.4, 1, 0.4] : 0.2,
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
                            />
                            {i < 7 && (
                                <motion.line
                                    x1={100 + offset}
                                    y1={y}
                                    x2={100 - offset}
                                    y2={y}
                                    stroke="#3B82F6"
                                    strokeWidth="1"
                                    strokeOpacity={i < level * 1.6 ? 0.6 : 0.1}
                                    animate={{ opacity: i < level * 1.6 ? [0.2, 0.6, 0.2] : 0.1 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Central evolving core */}
            <div className="relative z-10">
                {[1, 2, 3, 4, 5].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute rounded-full border-2"
                        style={{
                            width: `${ring * 24}px`,
                            height: `${ring * 24}px`,
                            left: `${-ring * 12 + 20}px`,
                            top: `${-ring * 12 + 20}px`,
                            borderColor: ring <= level ? '#3B82F6' : 'rgba(59, 130, 246, 0.1)',
                        }}
                        animate={{
                            scale: ring <= level ? [1, 1.1, 1] : 1,
                            opacity: ring <= level ? [0.4, 1, 0.4] : 0.1,
                            rotate: ring % 2 === 0 ? 360 : -360,
                        }}
                        transition={{
                            scale: { duration: 1.5, repeat: Infinity, delay: ring * 0.2 },
                            opacity: { duration: 1.5, repeat: Infinity, delay: ring * 0.2 },
                            rotate: { duration: 10 + ring * 2, repeat: Infinity, ease: "linear" },
                        }}
                    />
                ))}
                <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </motion.svg>
                </motion.div>
            </div>

            {/* Level indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {[1, 2, 3, 4, 5].map((l) => (
                    <motion.div
                        key={l}
                        className="h-1 w-6 rounded-full"
                        style={{
                            background: l <= level ? 'linear-gradient(90deg, #3B82F6, #06B6D4)' : 'rgba(59, 130, 246, 0.2)',
                        }}
                        animate={{ scaleX: l <= level ? [0.8, 1, 0.8] : 1 }}
                        transition={{ duration: 1, repeat: Infinity, delay: l * 0.1 }}
                    />
                ))}
            </div>

            {/* Floating upgrade particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                        background: i % 2 === 0 ? '#3B82F6' : '#06B6D4',
                        left: `${20 + Math.random() * 60}%`,
                        bottom: '-5%',
                    }}
                    animate={{
                        y: [0, -200],
                        x: [0, (Math.random() - 0.5) * 50],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                    }}
                />
            ))}
        </div>
    );
};
