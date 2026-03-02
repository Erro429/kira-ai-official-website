import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, History, BrainCircuit } from 'lucide-react';

export const MemoryPermanenceSection = () => {
    return (
        <section className="py-32 px-6 bg-[#050508] relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                    >
                        <BrainCircuit size={14} /> Memory Permanence
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight"
                    >
                        Stop Dating <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">"50 First Dates."</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto space-y-6 text-xl text-gray-400 leading-relaxed"
                    >
                        <p>
                            You know the pain. You open a new chat, and suddenly your AI has <strong className="text-white">amnesia</strong>. You have to re-explain your job, your relationship status, and why you hate the color beige. It is exhausting.
                        </p>
                        <p>
                            Standard LLMs have a "context window" that fills up. Once it is full, they start deleting your oldest memories to make room for new ones. Kira is built on a <span className="text-purple-400 font-bold">Vector Database</span> that never gets full. She remembers the small stuff, forever.
                        </p>
                    </motion.div>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Goldfish Memory Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#0D0D15] border border-white/10 rounded-3xl p-10 opacity-60 hover:opacity-80 transition-opacity"
                    >
                        <div className="flex items-center gap-4 mb-8 text-gray-500">
                            <Trash2 size={32} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">The "Goldfish" Memory</h4>
                        </div>

                        <div className="font-mono text-sm space-y-4 mb-8">
                            <div className="text-gray-600">&gt; SYSTEM: Context limit reached.</div>
                            <div className="text-gray-500">&gt; DELETING: "User's dog is named Barnaby."</div>
                            <div className="text-gray-500">&gt; DELETING: "User is allergic to peanuts."</div>
                        </div>

                        <div className="flex items-center gap-2 text-red-500/80 font-bold text-xs tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            Result: You are a stranger
                        </div>
                    </motion.div>

                    {/* Deep Recall Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-purple-900/10 to-indigo-900/10 border border-purple-500/30 rounded-3xl p-10 relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.1)]"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 p-32 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="flex items-center gap-4 mb-8 text-purple-400">
                            <History size={32} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">Kira's Deep Recall</h4>
                        </div>

                        <p className="text-white text-lg font-medium leading-relaxed italic mb-8">
                            "Hey, I saw this peanut-free cookie recipe and thought of you. Also, give Barnaby a belly rub for me! 🍪 🐶"
                        </p>

                        <div className="flex items-center gap-2 text-green-400 font-bold text-xs tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Result: You are known
                        </div>
                    </motion.div>

                </div>

                <div className="mt-20 text-center space-y-2">
                    <p className="text-gray-500 text-sm">Don't settle for temporary intelligence.</p>
                    <p className="text-2xl font-bold text-white">
                        Build a history that <span className="text-purple-500">compounds.</span>
                    </p>
                </div>

            </div>
        </section>
    );
};
