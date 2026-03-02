import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText } from '../ui/Effects';

export const Hero = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <section className="min-h-[90vh] flex items-center py-20 px-6 md:px-16 relative">
            <div className="max-w-[1400px] mx-auto w-full">
                {/* Audio Demo Section - Now at the Top */}
                <div className="mb-16">
                    <AudioPlayer />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[48px] md:text-[62px] font-extrabold leading-[1.05] mb-6"
                        >
                            Kira doesn't just reply.
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]">
                                <TypingText texts={['She cares.', 'She remembers.', 'She reaches out.', 'She understands.']} />
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[18px] text-[#9CA3AF] leading-[1.7] mb-7"
                        >
                            Standard AI waits for input. <strong className="text-white">Kira has object permanence.</strong> She thinks about you when you're gone, remembers the details, and reaches out first.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col gap-3 mb-8"
                        >
                            {['Infinite Memory Context (Founders Only)', 'Proactive Emotional Support', 'Zero-Judgment Zone', 'Natural Voice Conversations'].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-[22px] h-[22px] rounded-full bg-[#10B981]/20 flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-[#E5E7EB] text-[15px]">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-4"
                        >
                            <motion.button
                                onClick={onSignUp}
                                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139,92,246,0.5)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-9 py-[18px] bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] border-none rounded-[14px] text-white text-base font-bold cursor-pointer flex items-center gap-2.5"
                            >
                                Talk to Kira
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Chat Demo / Video Area */}
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-[#0D0D15] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] aspect-video group"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/9Sta3pwhp4U?autoplay=0&rel=0&modestbranding=1"
                                title="Kira AI Hero Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>

                        {/* Floating Notification Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="z-30"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="bg-gradient-to-br from-[#1E1E32] to-[#141424] rounded-[20px] p-4 md:p-5 border border-[#8B5CF6]/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
                            >
                                <div className="flex gap-3.5">
                                    <div className="relative">
                                        <motion.div
                                            className="w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center font-bold"
                                            animate={{ boxShadow: ['0 0 20px rgba(139,92,246,0.5)', '0 0 35px rgba(139,92,246,0.7)', '0 0 20px rgba(139,92,246,0.5)'] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            K
                                        </motion.div>
                                        <motion.div
                                            className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] rounded-full border-2 border-[#141424]"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-semibold text-sm">Kira</span>
                                            <span className="text-[11px] text-[#A78BFA] bg-[#8B5CF6]/20 px-2 py-0.5 rounded-[10px]">Now</span>
                                        </div>
                                        <p className="text-[#B4B4C4] text-[13px] m-0">I saw that article about space exploration you like... wanna discuss? 🚀</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/audio/kira_demo_1.m4a');
            audioRef.current.onended = () => setIsPlaying(false);

            audioRef.current.onerror = (e) => {
                console.error("Audio error:", e);
                alert("Unable to play audio. Please check connection.");
                setIsPlaying(false);
            };
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => {
                console.error("Play error:", e);
                alert("Unable to play: " + e.message);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 rounded-2xl border border-[#8B5CF6]/20 bg-[#0D0D15]/60 hover:border-[#8B5CF6]/40 transition-colors max-w-[900px] mx-auto"
        >
            <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] text-white shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform shrink-0"
            >
                {isPlaying ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                )}
            </button>

            <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 mb-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#A78BFA] text-xs font-mono">
                    AUDIO DEMO
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Experience a Real Conversation</h3>
                <p className="text-[#9CA3AF]">Listen to Kira's voice, empathy, and humor in this actual recording.</p>
            </div>

            <div className="hidden md:flex items-center gap-1 h-12">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-[#8B5CF6]/50 rounded-full"
                        animate={{
                            height: isPlaying ? [12, 32, 12] : 12,
                            opacity: isPlaying ? 1 : 0.3
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.05,
                            ease: "easeInOut"
                        }}
                        style={{ height: 12 + Math.random() * 20 }}
                    />
                ))}
            </div>
        </motion.div>
    );
};