import { motion } from 'framer-motion';

export const NaturalVoiceVisual = () => {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#061820] via-[#0a1a28] to-[#0a0a1a] flex items-center justify-center overflow-hidden">
            {/* Circular sound rings */}
            {[1, 2, 3, 4].map((ring) => (
                <motion.div
                    key={ring}
                    className="absolute rounded-full border"
                    style={{
                        width: `${50 + ring * 35}px`,
                        height: `${50 + ring * 35}px`,
                        borderColor: `rgba(6, 182, 212, ${0.6 - ring * 0.1})`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: ring * 0.3,
                    }}
                />
            ))}

            {/* Voice waveform bars */}
            <div className="absolute flex items-center gap-[2px] h-[100px]">
                {[...Array(32)].map((_, i) => {
                    const isCenter = Math.abs(i - 16) < 8;
                    const baseHeight = isCenter ? 40 + Math.sin(i * 0.5) * 30 : 15 + Math.sin(i * 0.3) * 10;
                    return (
                        <motion.div
                            key={i}
                            className="w-[3px] rounded-full"
                            style={{
                                background: `linear-gradient(180deg, hsl(var(--kira-cyan)), hsl(var(--kira-purple)) 50%, hsl(var(--kira-pink)))`,
                            }}
                            animate={{
                                height: [
                                    `${baseHeight}px`,
                                    `${baseHeight + 30 + Math.sin(i * 0.4) * 20}px`,
                                    `${baseHeight}px`,
                                ],
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 0.8 + Math.random() * 0.4,
                                repeat: Infinity,
                                delay: i * 0.03,
                            }}
                        />
                    );
                })}
            </div>

            {/* Central microphone icon with glow */}
            <motion.div
                className="absolute w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                    border: '2px solid hsl(var(--kira-cyan))',
                    boxShadow: '0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                }}
                animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                        '0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                        '0 0 60px rgba(6, 182, 212, 0.7), inset 0 0 30px rgba(6, 182, 212, 0.3)',
                        '0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                    ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(var(--kira-cyan))"
                    strokeWidth="2"
                >
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
            </motion.div>

            {/* Floating sound particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: i % 3 === 0 ? 'hsl(var(--kira-cyan))' : i % 3 === 1 ? 'hsl(var(--kira-purple))' : 'hsl(var(--kira-pink))',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 10 - 5, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Audio level text */}
            <motion.div
                className="absolute bottom-3 text-[10px] font-mono text-kira-cyan/60"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                ▶ VOICE ACTIVE
            </motion.div>
        </div>
    );
};
