"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, EyeOff, UserCheck, ArrowRight, ChevronLeft, Fingerprint, LockKeyhole, FileKey } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';

// --- Unique Animation: Privacy Vault / Safe Space ---
const ZeroJudgmentEngine = () => {
    // Performance optimization: Stop animation when out of view
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    return (
        <div ref={containerRef} className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-emerald-500/20 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]" />

            {/* Digital Rain / Matrix Effect Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(16,185,129, .3) 25%, rgba(16,185,129, .3) 26%, transparent 27%, transparent 74%, rgba(16,185,129, .3) 75%, rgba(16,185,129, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(16,185,129, .3) 25%, rgba(16,185,129, .3) 26%, transparent 27%, transparent 74%, rgba(16,185,129, .3) 75%, rgba(16,185,129, .3) 76%, transparent 77%, transparent)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Central Safe Space Core */}
            {isInView && (
                <div className="relative z-10 flex items-center justify-center">

                    {/* Rotating Shields */}
                    <motion.div
                        className="absolute border-2 border-emerald-500/30 rounded-full"
                        style={{ width: 280, height: 280, borderStyle: 'dashed' }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute border border-emerald-500/20 rounded-full"
                        style={{ width: 220, height: 220 }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />

                    {/* The Vault Lock */}
                    <motion.div
                        animate={{
                            boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 50px rgba(16,185,129,0.5)", "0 0 20px rgba(16,185,129,0.2)"],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 bg-[#0D0D15] border border-emerald-500 rounded-full flex items-center justify-center relative z-20 backdrop-blur-xl"
                    >
                        <Shield size={48} className="text-emerald-500" />

                        {/* Inner pulse */}
                        <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-pulse"></div>
                    </motion.div>

                    {/* Floating Security Nodes */}
                    {[
                        { icon: LockKeyhole, label: "E2E Encrypted", x: -140, y: -80, delay: 0 },
                        { icon: EyeOff, label: "Incognito Mode", x: 140, y: 80, delay: 1 },
                        { icon: FileKey, label: "Local Keys", x: -120, y: 100, delay: 2 },
                        { icon: Fingerprint, label: "Biometric Lock", x: 120, y: -100, delay: 3 }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col items-center gap-2"
                            style={{ x: node.x, y: node.y }}
                            animate={{ y: [node.y - 10, node.y + 10, node.y - 10] }}
                            transition={{ duration: 5, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                        >
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                                <node.icon size={16} />
                            </div>
                            <div className="text-[10px] font-mono text-emerald-400 bg-black/60 px-2 py-1 rounded border border-emerald-500/10 backdrop-blur-sm">
                                {node.label}
                            </div>
                            {/* Laser connection */}
                            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none -z-10 overflow-visible">
                                <motion.line
                                    x1="50%" y1="50%" x2={150 - node.x} y2={150 - node.y}
                                    stroke="#10B981" strokeWidth="1" strokeOpacity="0.15"
                                    strokeDasharray="4 4"
                                />
                            </svg>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Status Text */}
            <motion.div
                className="absolute bottom-10 flex items-center gap-2 px-4 py-2 bg-emerald-900/20 rounded-full border border-emerald-500/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-mono text-emerald-400">JUDGMENT MODULE: DISABLED</span>
            </motion.div>
        </div>
    );
};

export const ZeroJudgmentPage = ({ onBack, onCtaClick }: { onBack: () => void, onCtaClick: () => void }) => {

    useEffect(() => {
        document.title = "Kira AI | Zero Judgment & Privacy Core";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "A safe space for your unfiltered thoughts. Kira offers a zero-judgment environment with end-to-end encryption for total psychological safety.");
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-emerald-500/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

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

                <div className="max-w-5xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <UserCheck size={12} className="text-emerald-400" /> Psychological Safety Protocol
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
                    >
                        Unfiltered. Unbiased. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500">Totally Safe.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Society judges. Friends worry. Kira just listens.
                        Enter a private, encrypted space where you can be your rawest self without fear of consequences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={onCtaClick}
                            className="relative group px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all transform hover:-translate-y-1"
                        >
                            <span className="flex items-center gap-3">
                                Enter The Vault <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <p className="mt-4 text-xs text-gray-500">End-to-End Encryption Enabled by Default</p>
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <ZeroJudgmentEngine />
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                    <div className="space-y-8">
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                                <Lock className="text-emerald-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">The "Vent" Mode</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Sometimes you don't want advice. You just want to scream into the void. Kira switches to "Vent Mode," validating your feelings without trying to fix them.
                            </p>
                        </div>
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-teal-500/30 transition-colors">
                            <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6">
                                <EyeOff className="text-teal-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Ephemeral Confessions</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Toggle "Incognito" to have Kira forget everything said in the current session instantly upon closing. Your secrets die with the tab.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                            The Weight of <br />
                            <span className="text-emerald-500">The Mask.</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            We spend our days performing. For our boss, for our partner, for social media. It's exhausting.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Kira is the backstage. The place where you can take off the mask, admit you're scared, admit you're angry, or admit you ate the last cookie.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "No moralizing or lecturing",
                                "Encrypted locally on your device",
                                "Bias-free active listening",
                                "Separate profile for sensitive topics"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Shield size={10} className="text-emerald-500 fill-emerald-500" />
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

                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#05110d] to-[#0D0D15] border border-emerald-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">
                        Total Freedom. <br />
                        <span className="text-emerald-500">Zero Risk.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
                        Join the Founders Club to enable military-grade encryption for your memory vault.
                    </p>

                    <div className="flex flex-col items-center relative z-10">
                        <button
                            onClick={onCtaClick}
                            className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                OPEN SAFE SPACE <Lock className="fill-black" />
                            </span>
                        </button>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            Secure tunnel established.
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};