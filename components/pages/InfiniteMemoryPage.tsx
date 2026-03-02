"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Brain, Archive, ArrowRight, ChevronLeft, FileText, Layers, Hash, Bookmark, Zap } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';

// --- Unique Animation: Vector Archive Engine ---
const MemoryEngine = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-violet-500/20 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />

            {/* Hexagonal Grid Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.2) 2px, transparent 0.5px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Central Memory Core */}
            <div className="relative z-10 flex items-center justify-center">
                {/* Rotating Rings */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute border border-violet-500/30 rounded-full"
                        style={{ width: 200 + i * 80, height: 200 + i * 80, borderStyle: i === 1 ? 'dashed' : 'solid' }}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                    />
                ))}

                {/* Core Crystal */}
                <motion.div
                    animate={{
                        boxShadow: ["0 0 20px rgba(139,92,246,0.3)", "0 0 60px rgba(139,92,246,0.7)", "0 0 20px rgba(139,92,246,0.3)"],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 bg-[#0D0D15] border border-violet-500 rounded-2xl flex items-center justify-center relative z-20 backdrop-blur-xl rotate-45"
                >
                    <div className="-rotate-45">
                        <Brain size={40} className="text-violet-500" />
                    </div>
                </motion.div>

                {/* Floating Data Nodes (Memories) */}
                {[
                    { icon: FileText, label: "Project Notes", x: -140, y: -100, delay: 0 },
                    { icon: Hash, label: "Wifi Pass", x: 150, y: -80, delay: 1 },
                    { icon: Bookmark, label: "Book Recs", x: -120, y: 120, delay: 2 },
                    { icon: Layers, label: "Context V4", x: 140, y: 90, delay: 3 }
                ].map((node, i) => (
                    <motion.div
                        key={i}
                        className="absolute flex flex-col items-center gap-2"
                        style={{ x: node.x, y: node.y }}
                        animate={{ y: [node.y - 10, node.y + 10, node.y - 10] }}
                        transition={{ duration: 4, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                    >
                        <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-300">
                            <node.icon size={16} />
                        </div>
                        <div className="text-[10px] font-mono text-violet-400 bg-black/50 px-2 py-0.5 rounded border border-violet-500/10">
                            {node.label}
                        </div>
                        {/* Connecting Line */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none -z-10 overflow-visible">
                            <motion.line
                                x1="50%" y1="50%" x2={150 - node.x} y2={150 - node.y}
                                stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.2"
                            />
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* Scanning Effect */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-violet-500/50 shadow-[0_0_20px_#8B5CF6]"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Retrieval Popup */}
            <motion.div
                className="absolute bottom-10 left-10 bg-violet-900/30 border border-violet-500/30 backdrop-blur-md px-4 py-3 rounded-lg flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, 20] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
                <Search size={16} className="text-violet-400" />
                <div>
                    <div className="text-xs text-gray-400">Querying Vector DB...</div>
                    <div className="text-xs font-bold text-violet-300">"Retrieved: User hates cilantro"</div>
                </div>
            </motion.div>
        </div>
    );
};

export const InfiniteMemoryPage = ({ onBack, onCtaClick }: { onBack: () => void, onCtaClick: () => void }) => {

    // SEO Optimization
    useEffect(() => {
        document.title = "Kira AI | Infinite Memory & Context Retention";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Kira remembers everything so you don't have to. Experience infinite context retention, perfect recall of past conversations, and a personalized knowledge base.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-violet-500/30">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <Database size={12} className="text-violet-400" /> Vector Database Integration
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
                    >
                        She Never Forgets. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500">Not Even The Small Stuff.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Other AIs have a "context window" that wipes clean every few messages.
                        Kira uses a permanent vector archive to retain every detail, joke, and preference forever.
                    </motion.p>

                    {/* Top 10% CTA Button #1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={onCtaClick}
                            className="relative group px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-3">
                                Build Your Legacy <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <p className="mt-4 text-xs text-gray-500">Data is encrypted and locally keyed to your user ID</p>
                    </motion.div>
                </div>

                {/* Unique Visualization */}
                <div className="max-w-5xl mx-auto">
                    <MemoryEngine />
                </div>

                {/* Content Deep Dive */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                    <div className="space-y-8">
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-violet-500/30 transition-colors">
                            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Archive className="text-violet-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Total Context Recall</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Mentioned your dog's name three months ago? She remembers. Told her you're allergic to peanuts? She'll remind you when suggesting recipes.
                            </p>
                        </div>
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Layers className="text-purple-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Adaptive Knowledge Base</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Kira builds a custom wiki of YOU. She learns your communication style, your values, and your history, becoming a sharper mirror of your mind every day.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                            Stop Repeating <br />
                            <span className="text-violet-500">Yourself.</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            The most frustrating part of legacy AI is the amnesia. You build a rapport, close the window, and it's gone.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Kira treats your entire history as a single, continuous conversation. She picks up exactly where you left off, whether it was 5 minutes or 5 weeks ago.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Remembers preferences implicitly",
                                "Tracks long-term goals and progress",
                                "References past conversations naturally",
                                "Zero-knowledge encryption privacy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center">
                                        <Zap size={10} className="text-violet-500 fill-violet-500" />
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
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#120a1f] to-[#0D0D15] border border-violet-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">
                        An AI That Knows <br />
                        <span className="text-violet-500">The Real You.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
                        Join the Founders Club to secure unlimited memory storage slots for your Kira instance.
                    </p>

                    {/* Top 10% CTA Button #2 */}
                    <div className="flex flex-col items-center relative z-10">
                        <button
                            onClick={onCtaClick}
                            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                START MEMORY SYNC <Database className="fill-black" />
                            </span>
                        </button>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                            Database ready for ingestion.
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};
