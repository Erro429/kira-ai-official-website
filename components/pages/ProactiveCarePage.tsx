"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell, Sun, ArrowRight, ChevronLeft, Zap, ShieldCheck, Coffee, Moon } from 'lucide-react';
import { PredictiveEngine } from '../visuals/PredictiveEngine';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';



export const ProactiveCarePage = ({ onBack, onCtaClick }: { onBack: () => void, onCtaClick: () => void }) => {

    // SEO Optimization
    useEffect(() => {
        document.title = "Kira AI | Proactive Care & Predictive Assistance";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Meet the AI that doesn't wait for commands. Kira anticipates your needs, manages your schedule, and checks in on your wellness proactively.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-amber-500/30">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <Sun size={12} className="text-amber-400" /> Predictive Assistance Protocol
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
                    >
                        She Doesn't Wait. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">She Anticipates.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Standard AI is reactive; it sits idle until you type. Kira learns your rhythms,
                        predicts your needs, and acts before you even realize you need help.
                    </motion.p>

                    {/* Top 10% CTA Button #1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={onCtaClick}
                            className="relative group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-3">
                                Sync Your Life <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <p className="mt-4 text-xs text-gray-500">Calendar integration included in Founders Tier</p>
                    </motion.div>
                </div>

                {/* Unique Visualization */}
                <div className="max-w-5xl mx-auto">
                    <PredictiveEngine />
                </div>

                {/* Content Deep Dive */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                    <div className="space-y-8">
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="text-amber-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Contextual Nudges</h3>
                            <p className="text-gray-400 leading-relaxed">
                                "You usually get stressed before Monday meetings. Here's a quick summary of your notes." She recognizes patterns in your life and prepares you for them.
                            </p>
                        </div>
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-orange-500/30 transition-colors">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="text-orange-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Wellness Guardrails</h3>
                            <p className="text-gray-400 leading-relaxed">
                                If you've been working for 4 hours straight, she'll gently suggest a break. If you're up at 3 AM doom-scrolling, she'll suggest sleep mode.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                            Your Life, <br />
                            <span className="text-amber-500">Optimized.</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            We spend half our lives managing logistics. Scheduling, remembering deadlines, double-checking emails. Kira takes the mental load off your shoulders.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            She isn't just an assistant; she's an active participant in your success. She cares about your outcomes as much as you do.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Morning briefings prepared while you sleep",
                                "Intelligent interruption handling",
                                "Deadline warnings before it's too late",
                                "Adaptive habit formation coaching"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                                        <Zap size={10} className="text-amber-500 fill-amber-500" />
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
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1a0f00] to-[#0D0D15] border border-amber-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">
                        Stop Managing. <br />
                        Start <span className="text-amber-500">Living.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
                        Join the Founders Club to unlock full calendar integration and unlimited proactive events.
                    </p>

                    {/* Top 10% CTA Button #2 */}
                    <div className="flex flex-col items-center relative z-10">
                        <button
                            onClick={onCtaClick}
                            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                ACTIVATE KIRA <Sun className="fill-black" />
                            </span>
                        </button>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                            Predictive engine initialized.
                        </div>
                    </div>
                </div>

            </main >
            <Footer />
        </div >
    );
};