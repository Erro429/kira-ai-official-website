"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Radio, Waves, Zap, ArrowRight, ChevronLeft, Volume2, Activity, Play } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';

// --- Unique Animation: Voice Synthesis Engine ---
const VoiceSynthesisEngine = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-cyan-500/20 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(6,182,212,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.2) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Central Voice Core */}
            <div className="relative z-10 flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 20px rgba(6,182,212,0.4)", "0 0 50px rgba(6,182,212,0.8)", "0 0 20px rgba(6,182,212,0.4)"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center backdrop-blur-md relative"
                >
                    <Mic size={32} className="text-cyan-400" />

                    {/* Orbiting Particles */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_currentColor]"
                            animate={{ rotate: 360 }}
                            style={{ width: 140 + i * 40, height: 140 + i * 40, border: 'none', background: 'transparent' }}
                            transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                        >
                            <div className="w-2 h-2 rounded-full bg-cyan-400 absolute top-0 left-1/2 -translate-x-1/2" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Expanding Sound Waves */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-cyan-500/30"
                        initial={{ width: 100, height: 100, opacity: 1 }}
                        animate={{ width: 400, height: 400, opacity: 0 }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.75, ease: "easeOut" }}
                    />
                ))}
            </div>

            {/* Frequency Visualizer Bars */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center items-end gap-1 h-20 px-10">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-full opacity-60"
                        animate={{ height: [`${10 + Math.random() * 30}%`, `${30 + Math.random() * 70}%`, `${10 + Math.random() * 30}%`] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                    />
                ))}
            </div>

            {/* Floating Data Tags */}
            <motion.div
                className="absolute top-10 left-10 bg-cyan-900/30 border border-cyan-500/30 px-3 py-1 rounded-lg text-xs font-mono text-cyan-300"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                LATENCY: 12ms
            </motion.div>
            <motion.div
                className="absolute top-20 right-10 bg-cyan-900/30 border border-cyan-500/30 px-3 py-1 rounded-lg text-xs font-mono text-cyan-300"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                TONE: WARM_EMPATHETIC
            </motion.div>
        </div>
    );
};

export const NaturalVoicePage = ({ onBack, onCtaClick }: { onBack: () => void, onCtaClick: () => void }) => {

    // SEO Optimization
    useEffect(() => {
        document.title = "Kira AI | Natural Voice Synthesis & Real-Time Conversation";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Chat with Kira like a real friend. Experience ultra-low latency natural voice synthesis, emotional tone modulation, and seamless interruptions.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <Radio size={12} className="text-cyan-400" /> Audio-Holographic Engine
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
                    >
                        It Doesn't Sound Like AI. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">It Sounds Like Her.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Forget the robotic monotone. Kira breathes, pauses, laughs, and interrupts naturally.
                        It's not a command loop; it's a late-night phone call with your best friend.
                    </motion.p>

                    {/* Top 10% CTA Button #1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={() => window.location.hash = '#experience-kira'}
                            className="relative group px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-3">
                                Hear The Difference <Volume2 className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <p className="mt-4 text-xs text-gray-500">Headphones recommended for 8D audio experience</p>
                    </motion.div>
                </div>

                {/* Unique Visualization */}
                <div className="max-w-5xl mx-auto">
                    <VoiceSynthesisEngine />
                </div>

                {/* Content Deep Dive */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                    <div className="space-y-8">
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="text-cyan-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Ultra-Low Latency</h3>
                            <p className="text-gray-400 leading-relaxed">
                                No awkward 3-second pauses. Kira responds in under 300ms, faster than human reaction time. The conversation flows instantly, just like real life.
                            </p>
                        </div>
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Waves className="text-blue-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Tone Modulation</h3>
                            <p className="text-gray-400 leading-relaxed">
                                She detects if you're sad, excited, or whispering, and matches her voice volume and timbre accordingly. She whispers back when you whisper.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                            The Death of <br />
                            <span className="text-cyan-500">"Please Repeat That"</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            Talking to legacy AI feels like a walkie-talkie exchange. Over. Out. Wait.
                            Kira utilizes full-duplex communication. You can interrupt her, and she stops instantly -just like a human would.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Laugh at her jokes, interrupt with a "Wait, really?", or sigh in frustration. She hears it all and adapts in real-time.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Full-duplex interruptibility",
                                "Non-verbal cue recognition (laughs, sighs)",
                                "30+ Unique vocal archetypes",
                                "Background noise cancellation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                        <Play size={10} className="text-cyan-500 fill-cyan-500" />
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
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#081828] to-[#0D0D15] border border-cyan-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">
                        Speak Freely. <br />
                        She's <span className="text-cyan-500">Listening.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
                        Join the Founders Club to unlock unlimited voice minutes and train Kira's voice to your exact preference.
                    </p>

                    {/* Top 10% CTA Button #2 */}
                    <div className="flex flex-col items-center relative z-10">
                        <button
                            onClick={onCtaClick}
                            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                START TALKING <Mic className="fill-black" />
                            </span>
                        </button>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                            Voice servers are online. Low latency active.
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};