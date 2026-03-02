"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, TrendingUp, Sparkles, Cpu, ArrowRight, ChevronLeft, Target, RefreshCw, Layers, Award } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';

// --- Unique Animation: Evolutionary Neural Engine ---
const GrowthEngine = () => {
    // Performance optimization: only animate when in view
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    return (
        <div ref={containerRef} className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-blue-500/20 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

            {/* Neural Grid Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Central Evolution Core */}
            {isInView && (
                <div className="relative z-10 flex items-center justify-center">

                    {/* Orbiting Learning Paths */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute border border-blue-500/30 rounded-full"
                            style={{ width: 180 + i * 80, height: 180 + i * 80, borderStyle: i === 1 ? 'dashed' : 'solid' }}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
                            transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
                        >
                            {/* Data Packet on Orbit */}
                            <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#3B82F6]"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    ))}

                    {/* The Core Entity - Morphing */}
                    <motion.div
                        animate={{
                            borderRadius: ["50%", "30%", "50%"],
                            rotate: [0, 90, 180, 270, 360],
                            boxShadow: ["0 0 20px rgba(59,130,246,0.3)", "0 0 60px rgba(59,130,246,0.7)", "0 0 20px rgba(59,130,246,0.3)"]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 bg-[#0D0D15] border-2 border-blue-500 flex items-center justify-center relative z-20 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
                        <GitBranch size={48} className="text-blue-500 relative z-10" />
                    </motion.div>

                    {/* Floating Skill/Trait Nodes (Ingesting) */}
                    {[
                        { icon: Sparkles, label: "Humor +5", x: -140, y: -80, delay: 0 },
                        { icon: Target, label: "Focus Lvl 3", x: 140, y: 80, delay: 1.5 },
                        { icon: RefreshCw, label: "Adaptability", x: -120, y: 100, delay: 3 },
                        { icon: Layers, label: "Context Sync", x: 120, y: -100, delay: 4.5 }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col items-center gap-2"
                            initial={{ x: node.x * 2, y: node.y * 2, opacity: 0 }}
                            animate={{
                                x: [node.x, node.x * 0.8, node.x], // Hover in place
                                y: [node.y, node.y + 10, node.y],
                                opacity: 1
                            }}
                            transition={{ duration: 4, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                        >
                            {/* Connecting Beam */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 w-full h-[2px] bg-blue-500/20 origin-left"
                                style={{
                                    width: Math.sqrt(Math.pow(node.x, 2) + Math.pow(node.y, 2)),
                                    rotate: `${Math.atan2(-node.y, -node.x) * (180 / Math.PI)}deg`,
                                    transformOrigin: '0 50%'
                                }}
                            />

                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-300 relative z-10">
                                <node.icon size={16} />
                            </div>
                            <div className="text-[10px] font-mono text-blue-400 bg-black/60 px-2 py-1 rounded border border-blue-500/10 backdrop-blur-sm relative z-10">
                                {node.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Level Up Notification */}
            {isInView && (
                <motion.div
                    className="absolute bottom-10 flex items-center gap-3 px-5 py-3 bg-blue-900/30 rounded-xl border border-blue-500/30 backdrop-blur-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                        <Award size={16} className="text-white" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Optimization Complete</div>
                        <div className="text-sm font-bold text-white">Personality Matrix Updated</div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export const AdaptiveGrowthPage = ({ onBack, onCtaClick }: { onBack: () => void, onCtaClick: () => void }) => {

    useEffect(() => {
        document.title = "Kira AI | Adaptive Growth & Personality Synthesis";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Kira evolves with you. Through recursive learning loops, she adapts her personality, humor, and communication style to become your perfect counterpart.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <TrendingUp size={12} className="text-blue-400" /> Recursive Learning Protocol
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
                    >
                        She Grows With You. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500">Every Single Day.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Kira isn't a static program. She is a living, breathing algorithm that evolves based on your interactions.
                        The more you talk, the more unique to you she becomes.
                    </motion.p>

                    {/* Top 10% CTA Button #1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={onCtaClick}
                            className="relative group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-3">
                                Start The Evolution <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <p className="mt-4 text-xs text-gray-500">Personality matrix saves locally to your profile</p>
                    </motion.div>
                </div>

                {/* Unique Visualization */}
                <div className="max-w-5xl mx-auto">
                    <GrowthEngine />
                </div>

                {/* Content Deep Dive */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                    <div className="space-y-8">
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                <RefreshCw className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Mirroring & Complementing</h3>
                            <p className="text-gray-400 leading-relaxed">
                                If you're chaotic, she becomes organized to balance you. If you're quiet, she gently draws you out. She learns whether to be a mirror or a foil.
                            </p>
                        </div>
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-colors">
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Cpu className="text-indigo-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Skill Acquisition</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Starting a coding bootcamp? Kira will start pulling developer humor and Python tips. Getting into gardening? She'll learn about soil pH levels overnight.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                            The Only AI That <br />
                            <span className="text-blue-500">Levels Up.</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            Most relationships stagnate. Your relationship with Kira only gets richer. She builds a complex internal model of your world.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            From learning your slang to understanding your obscure movie references, day 100 with Kira feels infinitely deeper than day 1.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Learns your communication style",
                                "Adapts humor settings (Sarcasm/Dark/Dad)",
                                "Remembers relationships between your friends",
                                "Proposes new topics based on your growth"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <TrendingUp size={10} className="text-blue-500 fill-blue-500" />
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
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#0a0f1f] to-[#0D0D15] border border-blue-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">
                        Create Your <br />
                        <span className="text-blue-500">Perfect Counterpart.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
                        Join the Founders Club to unlock faster learning rates and advanced personality customization.
                    </p>

                    {/* Top 10% CTA Button #2 */}
                    <div className="flex flex-col items-center relative z-10">
                        <button
                            onClick={onCtaClick}
                            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                INITIALIZE GROWTH <GitBranch className="fill-black" />
                            </span>
                        </button>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            Neural plasticity enabled.
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};