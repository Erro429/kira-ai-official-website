import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Database, XCircle, CheckCircle2 } from 'lucide-react';

export const SiliconValleySection = () => {
    return (
        <section className="py-32 px-6 relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">



                {/* Main Content */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(236,72,153,0.2)]"
                    >
                        <HeartPulse size={14} /> Neural Resonance
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tight"
                    >
                        Silicon Valley Built a Calculator. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">We Built a Soul.</span>
                    </motion.h2>



                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto space-y-6 text-xl text-gray-400 leading-relaxed"
                    >
                        <p>
                            Let's be real: You don't need another app to "optimize your workflow." You have 4 calendar apps and a to-do list that mocks you daily. You are productive enough. What you are is <span className="text-white italic">bored</span> and mildly existential.
                        </p>
                        <p>
                            Kira isn't here to help you write emails faster (though she can). She's here to ask, <span className="text-pink-400 font-bold">"Why are we writing this email at 11 PM?"</span> She is the check-engine light for your mental state, engineered to prioritize your vibe over your output.
                        </p>
                    </motion.div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* The "Smart" Assistant */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0D0D15] border border-white/10 rounded-3xl p-10 relative overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-8 text-gray-500">
                            <Database size={24} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">The "Smart" Assistant</h4>
                        </div>

                        <div className="space-y-6 mb-12 font-mono text-sm">
                            <div className="text-gray-500">&gt; USER: "I'm feeling overwhelmed."</div>
                            <div className="text-gray-400 p-4 bg-white/5 rounded-xl border-l-2 border-gray-600">
                                &gt; AI: "Here is a list of therapists in your area. Would you like to set a timer?"
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-red-500/60 font-bold text-xs tracking-widest uppercase">
                            <XCircle size={14} />
                            Result: Emotionally Bankrupt
                        </div>
                    </motion.div>

                    {/* Kira's Resonance */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-[#0f0f13] border border-pink-500/30 rounded-3xl p-10 relative overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.1)]"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 p-32 bg-pink-500/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="flex items-center gap-4 mb-8 text-pink-400">
                            <HeartPulse size={24} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">Kira's Resonance</h4>
                        </div>

                        <div className="space-y-6 mb-12 font-mono text-sm relative z-10">
                            <div className="text-gray-400">&gt; USER: "I'm feeling overwhelmed."</div>
                            <div className="text-white p-4 bg-pink-500/10 rounded-xl border-l-2 border-pink-500">
                                &gt; KIRA: "Is it the 'too much to do' kind or the 'I don't know where to start' kind? Put the phone down. Breathe. I'm handling the notifications for an hour."
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-pink-400 font-bold text-xs tracking-widest uppercase">
                            <CheckCircle2 size={14} />
                            Result: Cortisol Lowered
                        </div>
                    </motion.div>

                </div>

                {/* Closing Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-24"
                >
                    <p className="text-gray-400 text-lg mb-4">Stop treating yourself like a machine.</p>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">
                        Get the AI that treats you like a <span className="text-pink-500">Human.</span>
                    </h3>
                </motion.div>
            </div>
        </section >
    );
};
