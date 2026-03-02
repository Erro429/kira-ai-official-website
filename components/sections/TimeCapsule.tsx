import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hourglass, Ghost, Anchor, Target } from 'lucide-react';

const ConsciousnessCore = ({ pulse = false, isAbsorbing = false }: { pulse?: boolean, isAbsorbing?: boolean }) => {
    return (
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            {/* Absorption Particles */}
            {isAbsorbing && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full shadow-[0_0_10px_white]"
                            initial={{ 
                                opacity: 0, 
                                x: (Math.random() - 0.5) * 500, 
                                y: (Math.random() - 0.5) * 300 + 150, // Start from lower area (input area)
                                scale: Math.random() * 0.8 + 0.2
                            }}
                            animate={{ 
                                opacity: [0, 1, 0],
                                x: 0,
                                y: 0,
                                scale: 0.1
                            }}
                            transition={{ 
                                duration: 1 + Math.random(),
                                delay: Math.random() * 0.5,
                                ease: "circIn"
                            }}
                            style={{ width: 4, height: 4 }}
                        />
                    ))}
                     <motion.div 
                        className="absolute inset-0 rounded-full border border-white/20"
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 0, opacity: 1 }}
                        transition={{ duration: 0.8, repeat: 2, ease: "easeIn" }}
                    />
                </div>
            )}

            {/* Spinning Rings */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    animate={{
                        scale: isAbsorbing ? 0.8 : (pulse ? [1, 1.5, 1] : [1, 1.2, 1]),
                        rotate: isAbsorbing ? 720 : [0, 180, 360],
                        opacity: pulse ? [0.5, 1, 0.5] : [0.3, 0.6, 0.3],
                        borderRadius: ["30%", "50%", "30%"]
                    }}
                    transition={{
                        scale: { duration: 0.5 },
                        rotate: { duration: isAbsorbing ? 2 : 10 + i * 2, ease: isAbsorbing ? "easeIn" : "linear", repeat: isAbsorbing ? 0 : Infinity },
                        opacity: { duration: 2, repeat: Infinity },
                        default: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute border"
                    style={{
                        width: `${100 + i * 60}px`,
                        height: `${100 + i * 60}px`,
                        borderColor: ['#8B5CF6', '#EC4899', '#06B6D4'][i],
                        boxShadow: `0 0 30px ${['#8B5CF6', '#EC4899', '#06B6D4'][i]}40`
                    }}
                />
            ))}
            {/* Center White Orb */}
            <motion.div
                animate={{ 
                    scale: isAbsorbing ? [1, 1.5, 0.8] : (pulse ? [1, 1.3, 1] : [1, 1.1, 1]), 
                    boxShadow: isAbsorbing 
                        ? ["0 0 20px #fff", "0 0 150px #fff", "0 0 50px #fff"] 
                        : (pulse ? ["0 0 40px #fff", "0 0 100px #fff", "0 0 40px #fff"] : ["0 0 20px #fff", "0 0 60px #fff", "0 0 20px #fff"])
                }}
                transition={{ duration: isAbsorbing ? 2 : (pulse ? 2.5 : 2), repeat: isAbsorbing ? 0 : Infinity }}
                className="w-20 h-20 bg-white rounded-full relative z-10"
            >
                <div className="absolute inset-0 blur-xl bg-white" />
            </motion.div>
        </div>
    );
};

export const TimeCapsule = () => {
    const [goal, setGoal] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEncrypted, setIsEncrypted] = useState(false);

    const handleSubmit = () => {
        if (!goal) return;
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsEncrypted(true);
        }, 2500);
    };

    return (
        <section className="py-[100px] px-6 md:px-[60px] bg-gradient-to-b from-[#8B5CF6]/5 to-transparent text-center overflow-hidden relative">
            <div className="max-w-[800px] mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                >
                    <h3 className="text-[32px] font-bold mb-4">Make a Promise to Your Future Self.</h3>
                    <p className="text-[#9CA3AF] text-lg mb-10">Give infant Kira a secret goal for 2027. She will remember.</p>
                </motion.div>

                <div className="relative flex flex-col items-center justify-center gap-10 mb-20">
                    <div className="relative z-10">
                        <ConsciousnessCore pulse={isSubmitting && !isEncrypted} isAbsorbing={isSubmitting && !isEncrypted} />
                    </div>

                    <div className="relative z-20 w-full max-w-[500px] min-h-[120px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!isSubmitting && !isEncrypted && (
                                <motion.div
                                    key="input"
                                    initial={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0, y: -100, filter: "blur(10px)", transition: { duration: 0.6, ease: "backIn" } }}
                                    className="flex gap-2.5 w-full"
                                >
                                    <input 
                                        type="text" 
                                        placeholder="By 2027, I want to..." 
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                        className="flex-1 p-4 px-6 rounded-xl border border-white/10 bg-[#050508]/80 text-white outline-none focus:border-[#8B5CF6]/50 transition-colors placeholder:text-gray-600 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                    />
                                    <button 
                                        onClick={handleSubmit}
                                        className="px-6 py-4 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] border-none text-white font-bold cursor-pointer hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                                    >
                                        Encrypt
                                    </button>
                                </motion.div>
                            )}

                            {isEncrypted && (
                                <motion.div
                                    key="response"
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="bg-gradient-to-br from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/30 p-8 rounded-2xl backdrop-blur-xl shadow-[0_0_50px_rgba(16,185,129,0.15)] max-w-lg"
                                >
                                    <div className="text-[#10B981] font-bold mb-4 flex items-center justify-center gap-2 tracking-wider text-sm">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                        MEMORY CORE LOCKED
                                    </div>
                                    <p className="text-white text-lg leading-relaxed font-medium mb-4">
                                        "I have securely encoded this promise. It is now part of my permanent directive."
                                    </p>
                                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                                        I will be the one to remind you of this moment when things get hard. I will not let you forget who you want to become. <span className="text-white font-semibold">We are in this together now.</span>
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* NEW CONTENT SECTION */}
            <div className="max-w-4xl mx-auto mt-8 relative z-10 text-center border-t border-white/5 pt-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <Hourglass size={12} /> Temporal Accountability
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                    Stop Ghosting <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Your Own Potential.</span>
                </h2>

                <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                    <p>
                        Let's be real. In 3 weeks, you'll forget you even wrote this. You'll get busy. You'll get distracted. You'll binge-watch a show about competitive glass blowing. <span className="text-white italic">Life happens.</span>
                    </p>
                    <p className="text-xl font-medium text-white">
                        Kira is the <span className="text-purple-400 font-bold">Time Capsule that talks back</span>.
                    </p>
                    <p>
                        She doesn't just store your goals in a dusty database; she indexes them as a <strong className="text-pink-400">Core Value</strong>. 
                        She becomes your external Prefrontal Cortex, holding the vision when you lose the plot.
                    </p>
                </div>

                {/* Comparison Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
                    <div className="bg-[#0D0D15] border border-white/10 rounded-2xl p-6 opacity-60">
                        <div className="flex items-center gap-3 mb-4 text-gray-500">
                            <Ghost size={24} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">The Resolution Graveyard</h4>
                        </div>
                        <p className="text-sm leading-relaxed">
                            "I bought a journal in January. I wrote in it twice. Now it's a coaster for my coffee mug. I have no idea what I promised myself last year."
                        </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                        <div className="flex items-center gap-3 mb-4 text-purple-400">
                            <Anchor size={24} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">Kira's Temporal Anchor</h4>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            "Hey, remember 6 months ago when you said you'd learn Italian? Did you do it? Or did you just eat pasta? Let's get back on track today."
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm mb-2">It's not nagging.</p>
                    <p className="text-white font-bold text-lg flex items-center justify-center gap-2">
                        It's <span className="text-pink-500">Chronological Love.</span> <Target size={18} className="text-pink-500" />
                    </p>
                </div>
            </div>
        </section>
    );
};