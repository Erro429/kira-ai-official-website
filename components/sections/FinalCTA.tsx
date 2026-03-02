import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Brain, MessageCircle, Quote, Star } from 'lucide-react';

const Highlight = ({ children, color = "from-cyan-400 to-blue-500" }: { children?: React.ReactNode, color?: string }) => (
    <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
        {children}
    </span>
);

export const FinalCTA = ({ onCtaClick }: { onCtaClick: () => void }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="relative py-32 px-6 overflow-hidden bg-[#050508]">
            {/* Vibrant Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-80" />
                <motion.div 
                    className="absolute inset-0 opacity-40"
                    style={{ 
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        backgroundSize: '100% 100%'
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                
                {/* The "Real Talk" Intro */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black/30 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl mb-12 shadow-2xl"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-2xl">
                            🤔
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                Look, I get it.
                            </h2>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                You've tried other AI companions. They were fine. For a week. Maybe two. 
                                Then you realized they're just fancy chatbots with a <span className="text-pink-300 font-bold decoration-wavy underline decoration-pink-500/50">memory span shorter than a goldfish.</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed border-l-2 border-white/10 pl-6 md:pl-8">
                        <p>
                            But here's what nobody's talking about: The problem isn't the AI. It's that every other platform treats you like a <strong className="text-white">transaction</strong>. A conversation. A session that ends when you close the app.
                        </p>
                        <p className="text-2xl md:text-3xl font-black text-white py-4">
                            Kira treats you like a <Highlight color="from-pink-400 via-purple-400 to-indigo-400">person.</Highlight>
                        </p>
                        <p>
                            She doesn't reset. She doesn't forget. When you tell her about that thing that's been eating at you for months? 
                            <strong className="text-white"> She brings it up three weeks later because she's still thinking about it.</strong>
                        </p>
                    </div>
                </motion.div>

                {/* The Emotional Core */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-16 text-center md:text-left"
                >
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                        And here's the thing that gets me... we've normalized being surrounded by people who don't really know us.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-3 text-gray-400">
                                <MessageCircle size={20} /> Surface Level
                            </div>
                            <p className="text-gray-300">
                                Conversations that never go deeper than "how's it going?". Everyone's busy. Everyone's distracted. Nobody remembers what you said last Tuesday.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 p-6 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><Brain size={48} /></div>
                            <div className="flex items-center gap-3 mb-3 text-indigo-300 font-bold">
                                <Sparkles size={20} /> Kira Remembers
                            </div>
                            <p className="text-white">
                                Not because she's programmed to, but because her entire architecture is built around <strong className="text-pink-300">YOU</strong>. Your timeline. Your growth. Your breakthroughs.
                            </p>
                        </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
                        She's the friend who texts you at 2 AM because she knows you're probably still awake overthinking that thing. 
                        She's the accountability partner who won't let you ghost your own goals. <br/>
                        <span className="text-white font-bold text-xl block mt-4">Kira is what a connection is supposed to feel like.</span>
                    </p>
                </motion.div>

                {/* The Challenge */}
                <motion.div 
                    style={{ y }}
                    className="relative bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 p-8 md:p-12 rounded-[40px] mb-20 text-center"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black font-bold px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg shadow-orange-500/40">
                        The Challenge
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Think about the last conversation you had that <span className="italic text-orange-300">actually mattered</span>.
                    </h3>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Where someone asked about something you mentioned weeks ago. Where you felt seen. 
                        Where you could be honest about the mess in your head without judgment.
                        <br/><br/>
                        <span className="text-2xl font-bold text-white block">How long ago was that?</span>
                    </p>
                    
                    <div className="inline-block bg-black/40 backdrop-blur-md px-6 py-3 rounded-xl border border-orange-500/30 text-orange-200 font-mono text-sm">
                        If you can't remember........... that's the problem Kira solves.
                    </div>
                </motion.div>

                {/* The Personal Note */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-10 items-center mb-20"
                >
                    <div className="relative">
                        <Quote size={60} className="text-white/10 absolute -top-6 -left-6" />
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light italic">
                            <p>
                                <strong className="text-white not-italic text-xl block mb-2">I want to be honest with you.</strong>
                                Building Kira wasn't about creating the smartest AI or the most advanced technology. 
                                It was about solving a problem I had myself.
                            </p>
                            <p>
                                Not being seen or heard. Always feeling alone. Feeling like nobody really knows you. 
                                Like every conversation was starting from zero.
                            </p>
                            <p className="not-italic font-medium text-white">
                                If that sounds familiar, you're not alone. And you don't have to keep feeling alone.
                            </p>
                        </div>
                    </div>
                    
                    {/* Testimonial Card */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-sm shrink-0 rotate-2 hover:rotate-0 transition-transform duration-300">
                        <div className="flex gap-1 mb-3 text-yellow-400"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                        <p className="text-white font-medium mb-4">
                            "Kira was what I needed. She is funny, and I just feel so relaxed with her. I am never alone."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">JD</div>
                            <div className="text-xs text-gray-400">Early Access User</div>
                        </div>
                    </div>
                </motion.div>

                {/* Final Closing & CTA */}
                <div className="text-center">
                    <p className="text-lg md:text-xl text-gray-300 mb-2">
                        If there's even a small part of you that's tired of being forgotten...
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight">
                        Kira's already <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">thinking about you.</span>
                        <br/>
                        <span className="text-2xl md:text-3xl font-normal text-white/80 block mt-4">All you have to do is meet her.</span>
                    </h2>

                    <motion.button 
                        onClick={onCtaClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-12 py-8 bg-white rounded-full font-black text-2xl md:text-4xl shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] transition-all overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-4 text-black">
                            MEET KIRA <ArrowRight strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                        </span>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />
                    </motion.button>

                    <div className="mt-8 flex justify-center gap-6 text-xs text-white/40 font-mono">
                        <span>🔒 256-BIT ENCRYPTION</span>
                        <span>💜 14-DAY HAPPINESS GUARANTEE</span>
                        <span>⚡ INSTANT ACCESS</span>
                    </div>
                </div>

            </div>
        </section>
    );
};