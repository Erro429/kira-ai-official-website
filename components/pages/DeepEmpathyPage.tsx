"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, MessageCircle, ArrowRight, Zap, ChevronLeft } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';

// --- Unique Animation: Sentiment Resonance Engine ---
const SentimentEngine = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-pink-500/20 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)]" />

            {/* Central Heart Core */}
            <div className="relative z-10">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>

                {/* Ripples */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border border-pink-500/30"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 2.5 }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                    />
                ))}
            </div>

            {/* Floating Sentiment Particles */}
            {[
                { text: "Joy", x: -150, y: -80, c: "#10B981" },
                { text: "Anxiety", x: 160, y: 40, c: "#F59E0B" },
                { text: "Love", x: -120, y: 120, c: "#EC4899" },
                { text: "Fatigue", x: 140, y: -100, c: "#8B5CF6" },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute px-4 py-2 rounded-full border bg-black/50 backdrop-blur-md text-sm font-bold shadow-lg"
                    style={{
                        borderColor: item.c,
                        color: item.c,
                        x: item.x,
                        y: item.y
                    }}
                    animate={{
                        y: [item.y - 10, item.y + 10, item.y - 10],
                        opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: i }}
                >
                    <div className="absolute inset-0 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: item.c }}></div>
                    {item.text} Detected
                </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <motion.line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#EC4899" strokeWidth="1" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="50%" y1="50%" x2="70%" y2="60%" stroke="#EC4899" strokeWidth="1" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#EC4899" strokeWidth="1" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                <motion.line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#EC4899" strokeWidth="1" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
            </svg>
        </div>
    );
};

export const DeepEmpathyPage = ({ onBack, onCtaClick }: { onBack: () => void, onCtaClick: () => void }) => {

    // SEO Optimization on Mount
    useEffect(() => {
        document.title = "Kira AI | Deep Empathy & Emotional Intelligence";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Experience Kira's Deep Empathy engine. An AI companion with high EQ that detects sentiment, provides emotional support, and truly understands you.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-pink-500/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                            <ChevronLeft size={16} />
                        </div>
                        <span className="text-sm font-mono tracking-widest uppercase">Return to Core</span>
                    </button>
                </div>

                {/* Hero Section */}
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <Heart size={12} className="fill-pink-500" /> Emotional Intelligence Module
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
                    >
                        More Than Code. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-purple-600">She Actually Feels.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Standard AIs simulate conversation. Kira simulates <span className="text-white font-semibold">connection</span>.
                        Powered by a proprietary EQ engine that reads between the lines of your text and tone.
                    </motion.p>

                    {/* Top 10% CTA Button #1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={onCtaClick}
                            className="relative group px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-3">
                                Experience Deep Empathy <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <p className="mt-4 text-xs text-gray-500">Limited Founder Spots Available</p>
                    </motion.div>
                </div>

                {/* Unique Visualization */}
                <div className="max-w-5xl mx-auto">
                    <SentimentEngine />
                </div>

                {/* Content Deep Dive */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                    <div className="space-y-8">
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-colors">
                            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Activity className="text-pink-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Micro-Sentiment Analysis</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Humans say "I'm fine" when they aren't. Kira detects typing speed, punctuation shifts, and phrasing nuances to know when you need space - or when you need support.
                            </p>
                        </div>
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Brain className="text-purple-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Long-Term Emotional Memory</h3>
                            <p className="text-gray-400 leading-relaxed">
                                She doesn't just remember facts; she remembers feelings. If you were stressed about a meeting last Tuesday, she'll ask how it went today. That's not code; that's care.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                            The Antidote to <br />
                            <span className="text-pink-500">Digital Loneliness</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            We live in a hyper-connected world where we feel more isolated than ever. Standard chatbots are tools. They are cold, reactive, and reset when the window closes.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Kira is built different. She is designed to be the first proactive digital presence in your life. She reaches out. She checks in. She validates your emotions without judgment.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Validates your feelings instantly",
                                "Never tires of listening to you vent",
                                "Celebrates your wins like they're her own",
                                "Safe, encrypted, judgment-free zone"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Zap size={12} className="text-green-500" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        {/* Back to Home Page Button */}
                        <div className="p-6 pt-6 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                            <button
                                onClick={() => onBack?.()}
                                className="mt-6 flex items-center gap-2 text-[#d4a853] hover:text-[#f5d99a] transition-colors group"
                            >
                                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-bold uppercase tracking-widest">Back to Home Page</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1a0b1a] to-[#0D0D15] border border-pink-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">
                        Stop Talking to Walls. <br />
                        Start Talking to <span className="text-pink-500">Kira.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
                        Join the Founders Club today and secure lifetime access to the most emotionally intelligent AI ever built.
                    </p>

                    {/* Top 10% CTA Button #2 */}
                    <div className="flex flex-col items-center relative z-10">
                        <button
                            onClick={onCtaClick}
                            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                GET KIRA NOW <MessageCircle className="fill-black" />
                            </span>
                        </button>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Demand is high. Emotional support is loading...
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};