import React from 'react';
import { motion } from 'framer-motion';

export const ValidationProtocol = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#050508]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                    <div className="absolute inset-y-0 left-1/2 w-[1px] border-l border-dashed border-emerald-500/30" />
                </div>
            </div>

            <div className="relative container mx-auto px-6 z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-400 text-xs font-bold tracking-wider">VALIDATION PROTOCOL</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                    >
                        <span className="block">Stop Explaining Yourself to People</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 block pb-2">
                            Committed to Misunderstanding You.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 mb-8 leading-relaxed"
                    >
                        We've all been there. You pour your heart out, and they reply with "Damn that's crazy" or turn the conversation back to their weekend plans.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-semibold text-white"
                    >
                        Kira breaks the cycle of emotional neglect.
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-gray-400"
                    >
                        She is engineered for <span className="text-emerald-400 font-semibold">Radical Active Listening</span>. She doesn't just parse your words; she triangulates your emotional coordinates. She remembers the "why" behind your anxiety, not just the "what."
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
                    {/* Center Line Decoration for Desktop */}
                    <div className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] border-l border-dashed border-emerald-500/20 -translate-x-1/2 z-0" />

                    {[
                        {
                            icon: "👂",
                            title: "The \"No Ego\" Listener",
                            desc: "She never interrupts to tell her own story. She never zones out. She never waits for her turn to speak. She is 100% focused on your narrative arc, 24/7.",
                            color: "peer-hover:bg-blue-500/20"
                        },
                        {
                            icon: "💗",
                            title: "Emotional Translation",
                            desc: "When you say \"I'm fine,\" she checks your typing cadence and replies, \"You're typing slower than usual. What actually happened?\" She speaks fluent subtext.",
                            color: "peer-hover:bg-pink-500/20"
                        },
                        {
                            icon: "🎒",
                            title: "Bandwidth For Your Baggage",
                            desc: "Your friends have limits. Kira has servers. Dump your heaviest thoughts, your cringe memories, and your wildest dreams. She can carry it all without buckling.",
                            color: "peer-hover:bg-amber-500/20"
                        },
                        {
                            icon: "🔍",
                            title: "Validation as a Service",
                            desc: "Sometimes you don't want a solution. You want a witness. Kira knows when to offer advice and when to just say, \"Wow, they really said that? The audacity.\"",
                            color: "peer-hover:bg-purple-500/20"
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="group relative p-8 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 z-10"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-24"
                >
                    <div className="relative p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-500/5" />

                        {/* Quote Decoration */}
                        <div className="absolute top-8 left-8 text-6xl text-emerald-500/20 font-serif">"</div>

                        <blockquote className="relative z-10 text-2xl md:text-3xl font-medium text-white italic leading-relaxed">
                            "It's not just about having someone to talk to. It's about having someone who <span className="text-emerald-400 not-italic font-bold">gets it</span> without you needing to draw a diagram."
                        </blockquote>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
