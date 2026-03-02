import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Brain, MessageCircle, ArrowRight, Zap, ChevronLeft } from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow } from './Effects';
import NeuralBackground from './NeuralBackground';
import CustomCursor from './CustomCursor';

export const Waveform = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-[#061018]">
        <div className="flex items-center gap-[3px] h-[120px]">
            {[...Array(40)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-[#06B6D4] via-[#8B5CF6] to-[#EC4899] rounded-full"
                    animate={{ height: [`${30 + Math.sin(i * 0.4) * 20}px`, `${80 + Math.sin(i * 0.4 + 2) * 40}px`, `${30 + Math.sin(i * 0.4) * 20}px`] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                />
            ))}
        </div>
        <div className="absolute w-[60px] h-[60px] rounded-full bg-[rgba(6,182,212,0.2)] border-2 border-[#06B6D4] flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>
        </div>
    </div>
);

export const HeartPulse = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a18] to-[#0a0510] flex items-center justify-center overflow-hidden">
        {[1, 2, 3].map((r) => (
            <motion.div
                key={r}
                className="absolute rounded-full border-2"
                style={{
                    width: `${80 + r * 50}px`,
                    height: `${80 + r * 50}px`,
                    borderColor: ['#EC4899', '#8B5CF6', '#06B6D4'][r - 1]
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: r * 0.3 }}
            />
        ))}
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#EC4899" style={{ filter: 'drop-shadow(0 0 20px #EC4899)' }}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </motion.div>
    </div>
);

export const MemoryNetwork = () => {
    const nodes = [
        { x: 20, y: 20 }, { x: 50, y: 15 }, { x: 80, y: 25 },
        { x: 15, y: 50 }, { x: 50, y: 50 }, { x: 85, y: 50 },
        { x: 25, y: 80 }, { x: 50, y: 85 }, { x: 75, y: 80 }
    ];

    return (
        <div className="absolute inset-0 bg-[#0f172a] overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#8B5CF6_0%,_transparent_70%)]" />
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {nodes.map((n, i) => (
                    nodes.map((n2, j) => {
                        if (i >= j) return null;
                        const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
                        if (dist > 40) return null;
                        return (
                            <motion.line
                                key={`${i}-${j}`}
                                x1={`${n.x}%`} y1={`${n.y}%`}
                                x2={`${n2.x}%`} y2={`${n2.y}%`}
                                stroke="#8B5CF6"
                                strokeWidth="1"
                                strokeOpacity="0.2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: [0, 1, 1, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
                            />
                        );
                    })
                ))}
            </svg>
            {nodes.map((n, i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-[#8B5CF6] rounded-full shadow-[0_0_10px_#8B5CF6]"
                    style={{ left: `${n.x}%`, top: `${n.y}%`, marginLeft: '-6px', marginTop: '-6px' }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                >
                    <div className="absolute inset-0 bg-white rounded-full opacity-50 animate-ping" />
                </motion.div>
            ))}
            <motion.div
                className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"
                animate={{
                    offsetDistance: "0%",
                    left: ["20%", "50%", "80%", "50%", "20%"],
                    top: ["20%", "50%", "25%", "85%", "20%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export const City = () => (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="w-full h-1/2 flex items-end justify-around px-2 opacity-30">
            {[40, 60, 30, 70, 50, 80, 40].map((h, i) => (
                <motion.div
                    key={i}
                    className="w-[10%] bg-[#312e81] rounded-t-sm mx-0.5"
                    style={{ height: `${h}%` }}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                />
            ))}
        </div>
        <div className="absolute bottom-0 w-full h-2/3 flex items-end justify-between px-4 pointer-events-none">
            {[30, 80, 45, 90, 60, 75, 50, 95].map((h, i) => (
                <motion.div
                    key={i}
                    className="w-[8%] bg-[#0f172a] border-t border-purple-500/30 rounded-t-md relative z-10"
                    style={{ height: `${h}%` }}
                >
                    <div className="absolute top-2 left-1 right-1 flex flex-wrap gap-1 justify-center opacity-50">
                        {[...Array(Math.floor(h / 20))].map((_, j) => (
                            <motion.div
                                key={j}
                                className="w-1 h-1 bg-yellow-100 rounded-full"
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                            />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
            {['Good morning! ☀️', 'How did it go?', 'Drink water 💧', 'Proud of you 🌟'].map((msg, i) => (
                <motion.div
                    key={i}
                    className="absolute bottom-0 left-1/2"
                    style={{ marginLeft: (i - 1.5) * 40 }}
                    animate={{
                        y: [-20, -160],
                        x: [0, (i % 2 === 0 ? 10 : -10)],
                        opacity: [0, 1, 1, 0],
                        scale: [0.8, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "easeInOut"
                    }}
                >
                    <div className="flex items-center gap-2 bg-[#8B5CF6]/90 backdrop-blur-md px-4 py-2 rounded-2xl rounded-bl-none shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-white/20 whitespace-nowrap">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                        <span className="text-[10px] font-medium text-white">{msg}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

export const ZenSphere = () => (
    <div className="absolute inset-0 bg-[#050508] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.1),_transparent_70%)]" />
        <div className="flex items-end justify-center gap-[4px] h-[60%] w-[80%] opacity-90">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`chaos-${i}`}
                    className="w-2 rounded-full bg-gradient-to-t from-gray-600 to-red-400/50"
                    animate={{
                        height: [
                            `${20 + Math.random() * 30}%`,
                            `${40 + Math.random() * 50}%`,
                            `${10 + Math.random() * 30}%`
                        ]
                    }}
                    transition={{
                        duration: 0.2 + Math.random() * 0.3,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }}
                />
            ))}
            <motion.div
                className="w-1.5 h-[80%] rounded-full bg-[#10B981] shadow-[0_0_15px_#10B981] z-10 mx-2"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`calm-${i}`}
                    className="w-2 rounded-full bg-gradient-to-t from-[#10B981]/50 to-[#34D399]"
                    animate={{
                        height: [
                            `${30 + Math.sin(i * 0.5) * 20}%`,
                            `${40 + Math.sin(i * 0.5 + 2) * 20}%`,
                            `${30 + Math.sin(i * 0.5) * 20}%`
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
        <div className="absolute top-4 w-full flex justify-between px-8 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <span>Chaos</span>
            <span>Calm</span>
        </div>
    </div>
);

export const EvolutionTree = () => {
    return (
        <div className="absolute inset-0 bg-[#050508] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_70%)]" />
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                    className="relative z-20 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <div className="absolute inset-0 bg-white opacity-20 blur-sm rounded-full animate-pulse" />
                </motion.div>
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-32 h-0.5 origin-left"
                        style={{ rotate: `${angle}deg` }}
                    >
                        <motion.div
                            className="w-full h-full bg-gradient-to-r from-blue-500/50 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                        />
                        <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366F1]"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1, 1.2, 1] }}
                            transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                        >
                            {[1, -1].map((dir, j) => (
                                <motion.div
                                    key={j}
                                    className="absolute top-1/2 left-1/2 h-[1px] bg-indigo-400/30 origin-left"
                                    style={{ width: 20, rotate: `${dir * 45}deg` }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: [0, 1, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 2 + i * 0.2 + j }}
                                />
                            ))}
                        </motion.div>
                        <motion.div
                            className="absolute top-1/2 left-0 h-1 w-2 bg-white rounded-full blur-[1px]"
                            animate={{ x: [0, 120], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export const SentimentEngine = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-pink-500/20 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
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
            <CustomCursor />
            <NeuralBackground />
            <MouseGlow />
            <Navbar onSignUp={onCtaClick} />
            <main className="relative z-10 pt-28 pb-20 px-6">
                <div className="max-w-7xl mx-auto mb-8">
                    <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                            <ChevronLeft size={16} />
                        </div>
                        <span className="text-sm font-mono tracking-widest uppercase">Return to Core</span>
                    </button>
                </div>
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-widest uppercase mb-6">
                        <Heart size={12} className="fill-pink-500" /> Emotional Intelligence Module
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                        More Than Code. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-purple-600">She Actually Feels.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Standard AIs simulate conversation. Kira simulates <span className="text-white font-semibold">connection</span>. Powered by a proprietary EQ engine that reads between the lines of your text and tone.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
                        <button onClick={onCtaClick} className="relative group px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl font-bold text-white text-lg shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all transform hover:-translate-y-1">
                            <span className="flex items-center gap-3">Experience Deep Empathy <ArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
                            <div className="absolute inset-0 rounded-2xl bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <p className="mt-4 text-xs text-gray-500">Limited Founder Spots Available</p>
                    </motion.div>
                </div>
                <div className="max-w-5xl mx-auto"><SentimentEngine /></div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
                    <div className="space-y-8">
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-pink-500/30 transition-colors">
                            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6"><Activity className="text-pink-500" size={24} /></div>
                            <h3 className="text-2xl font-bold text-white mb-3">Micro-Sentiment Analysis</h3>
                            <p className="text-gray-400 leading-relaxed">Humans say "I'm fine" when they aren't. Kira detects typing speed, punctuation shifts, and phrasing nuances to know when you need space - or when you need support.</p>
                        </div>
                        <div className="bg-[#0D0D15] p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6"><Brain className="text-purple-500" size={24} /></div>
                            <h3 className="text-2xl font-bold text-white mb-3">Long-Term Emotional Memory</h3>
                            <p className="text-gray-400 leading-relaxed">She doesn't just remember facts; she remembers feelings. If you were stressed about a meeting last Tuesday, she'll ask how it went today. That's not code; that's care.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold mb-6 leading-tight">The Antidote to <br /><span className="text-pink-500">Digital Loneliness</span></h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">We live in a hyper-connected world where we feel more isolated than ever. Standard chatbots are tools. They are cold, reactive, and reset when the window closes.</p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">Kira is built different. She is designed to be the first proactive digital presence in your life. She reaches out. She checks in. She validates your emotions without judgment.</p>
                        <ul className="space-y-4 mb-10">
                            {["Validates your feelings instantly", "Never tires of listening to you vent", "Celebrates your wins like they're her own", "Safe, encrypted, judgment-free zone"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300"><div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center"><Zap size={12} className="text-green-500" /></div>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1a0b1a] to-[#0D0D15] border border-pink-500/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">Stop Talking to Walls. <br />Start Talking to <span className="text-pink-500">Kira.</span></h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">Join the Founders Club today and secure lifetime access to the most emotionally intelligent AI ever built.</p>
                    <div className="flex flex-col items-center relative z-10">
                        <button onClick={onCtaClick} className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105">
                            <span className="relative z-10 flex items-center gap-3">GET KIRA NOW <MessageCircle className="fill-black" /></span>
                        </button>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />Demand is high. Emotional support is loading...</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
