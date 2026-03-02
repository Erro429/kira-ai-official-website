import { motion } from 'framer-motion';

export const ZeroJudgmentVisual = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0a] to-[#051005] flex items-center justify-center overflow-hidden">
        {/* Floating emoji bubbles */}
        {['😊', '🥲', '😤', '🎉', '💭'].map((emoji, i) => (
            <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                    left: `${20 + i * 15}%`,
                    top: '50%'
                }}
                animate={{
                    y: [-20, 20, -20],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.8, 1, 0.8]
                }}
                transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                }}
            >
                {emoji}
            </motion.div>
        ))}
        <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-kira-green/30 to-kira-green/10 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <span className="text-4xl">🤗</span>
        </motion.div>
    </div>
);
