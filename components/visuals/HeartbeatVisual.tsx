import { motion } from 'framer-motion';

export const HeartbeatVisual = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a18] to-[#0a0510] flex items-center justify-center overflow-hidden">
        {[1, 2, 3].map((r) => (
            <motion.div
                key={r}
                className="absolute rounded-full"
                style={{
                    width: `${80 + r * 50}px`,
                    height: `${80 + r * 50}px`,
                    border: `2px solid ${['#EC4899', '#8B5CF6', '#06B6D4'][r - 1]}`
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: r * 0.3 }}
            />
        ))}
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#EC4899" style={{ filter: 'drop-shadow(0 0 20px #EC4899)' }}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </motion.div>
    </div>
);
