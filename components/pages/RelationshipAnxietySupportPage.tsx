"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import {
    MessageCircle, Shield, Heart, Zap, CheckCircle2, XCircle,
    ArrowRight, ChevronLeft, Brain, Activity, Clock, Lock,
    Search, AlertTriangle, RefreshCw, BookOpen
} from 'lucide-react';

// --- Visual: Hero Split Screen ---
const HeroSplitScreen = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden flex shadow-2xl border border-[#D4A5A5]/30">
            {/* Left: Anxiety Spiral */}
            <div className="w-1/2 bg-[#1A0B0B] relative overflow-hidden border-r border-white/5 flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="relative z-10 w-full max-w-[280px] space-y-6">
                    <div className="text-center">
                        <div className="text-4xl font-mono text-red-400 font-bold mb-2 tracking-widest">4:23 PM</div>
                        <div className="text-xs text-gray-500">Sent at 2:14 PM • Read</div>
                    </div>

                    <div className="space-y-3 opacity-80">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-red-900/20 border border-red-500/30 text-red-300 p-3 rounded-xl text-xs text-center"
                        >
                            "They're losing interest."
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            className="bg-red-900/20 border border-red-500/30 text-red-300 p-3 rounded-xl text-xs text-center"
                        >
                            "I said something wrong."
                        </motion.div>
                    </div>

                    <div className="bg-[#2D1B1B] p-4 rounded-2xl border border-red-500/20 opacity-60">
                        <div className="text-[10px] text-gray-400 mb-1">Draft</div>
                        <div className="text-gray-300 text-sm">Are you mad at me? I feel like...</div>
                    </div>
                </div>
            </div>

            {/* Right: Kira Reality Check */}
            <div className="w-1/2 bg-[#FAF7F5] relative overflow-hidden flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#D4A5A5_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div className="relative z-10 w-full max-w-[280px]">
                    <div className="bg-white rounded-2xl shadow-xl border border-[#D4A5A5]/30 overflow-hidden">
                        <div className="bg-[#D4A5A5]/10 p-3 border-b border-[#D4A5A5]/10 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#A8B5A5]" />
                            <span className="text-[10px] font-bold text-[#A8B5A5] uppercase">Reality Check Mode</span>
                        </div>
                        <div className="p-4 space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D4A5A5]/20 flex items-center justify-center text-[#D4A5A5] font-bold text-xs">K</div>
                                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-xs text-gray-700">
                                    Let's look at the facts. They said they had meetings all afternoon.
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#D4A5A5]/20 flex items-center justify-center text-[#D4A5A5] font-bold text-xs">K</div>
                                <div className="bg-[#A8B5A5]/20 text-[#5C6B5C] p-3 rounded-2xl rounded-tl-none text-xs font-medium">
                                    "No text in 2 hours" = Busy at work. <br />
                                    Not "Losing interest."
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="flex justify-center"
                            >
                                <div className="bg-[#D4A5A5] text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-md">
                                    Put the phone down. Breathe.
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#2D1B1B] to-[#D4A5A5] -translate-x-1/2 shadow-xl z-20" />
        </div>
    );
};

// --- Visual: Red Flags vs Anxiety ---
const RedFlagsVisual = () => (
    <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-[#1A0B0B] p-6 rounded-2xl border border-red-900/30">
            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                <AlertTriangle size={14} /> Real Red Flags
            </h4>
            <ul className="space-y-3">
                {["Pattern of cancelling", "Dismissing your needs", "Disappearing for days", "Actions ≠ Words"].map((item, i) => (
                    <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                        <span className="text-red-500">•</span> {item}
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-[#FAF7F5] p-6 rounded-2xl border border-[#A8B5A5]/50 shadow-lg">
            <h4 className="text-[#A8B5A5] font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Brain size={14} /> Anxiety Brain
            </h4>
            <ul className="space-y-3">
                {["Slow text response", "Seemed tired today", "Needed alone time", "Didn't use emoji"].map((item, i) => (
                    <li key={i} className="text-gray-600 text-xs flex items-start gap-2">
                        <span className="text-[#A8B5A5]">•</span> {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

// --- Visual: Reality Check Process ---
const RealityCheckFlow = () => (
    <div className="bg-white rounded-3xl border border-[#D4A5A5]/20 p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col gap-6 relative z-10">
            {/* Step 1 */}
            <div className="flex items-center gap-4 opacity-50">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-400 flex items-center justify-center font-bold text-xs">1</div>
                <div className="bg-red-50 p-3 rounded-xl text-red-800 text-sm w-full">
                    "They haven't texted. They hate me."
                </div>
            </div>

            {/* Processing */}
            <div className="flex justify-center">
                <RefreshCw className="text-[#D4A5A5] animate-spin-slow" size={20} />
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#A8B5A5] text-white flex items-center justify-center font-bold text-xs">2</div>
                <div className="bg-[#F0FDF4] border border-[#A8B5A5]/30 p-4 rounded-xl text-[#2C3531] text-sm w-full shadow-md">
                    <span className="text-[#A8B5A5] font-bold text-xs uppercase block mb-1">Evidence Check</span>
                    "They texted you 'Good morning' today. They are at work. The evidence points to 'Busy', not 'Hate'."
                </div>
            </div>
        </div>
    </div>
);

// --- Comparison Table ---
const ComparisonTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
                <tr className="border-b border-[#D4A5A5]/20">
                    <th className="p-4 text-gray-500 font-medium text-sm">Solution</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Immediate Help</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Reality Checking</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Prevents Sabotage</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Attachment Aware</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-gray-700">Therapy</td>
                    <td className="p-4 text-red-400">Weekly Only</td>
                    <td className="p-4 text-[#A8B5A5] font-bold">Yes</td>
                    <td className="p-4 text-yellow-500">Long-term</td>
                    <td className="p-4 text-[#A8B5A5] font-bold">Yes</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-gray-700">Friends</td>
                    <td className="p-4 text-yellow-500">If Awake</td>
                    <td className="p-4 text-red-400">Biased</td>
                    <td className="p-4 text-red-400">No</td>
                    <td className="p-4 text-red-400">No</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-gray-700">Partner</td>
                    <td className="p-4 text-[#A8B5A5] font-bold">Yes</td>
                    <td className="p-4 text-red-400">Creates Dependency</td>
                    <td className="p-4 text-red-400">No</td>
                    <td className="p-4 text-red-400">No</td>
                </tr>
                <tr className="bg-[#D4A5A5]/10 border-b border-[#D4A5A5]/20">
                    <td className="p-4 font-bold text-[#C98A8A] flex items-center gap-2"><Heart size={16} /> Kira</td>
                    <td className="p-4 text-[#C98A8A] font-bold">24/7 Instant</td>
                    <td className="p-4 text-[#C98A8A] font-bold">Systematic</td>
                    <td className="p-4 text-[#C98A8A] font-bold">Active</td>
                    <td className="p-4 text-[#C98A8A] font-bold">Deeply</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const RelationshipAnxietySupportPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "Relationship Anxiety Support: Stop Overthinking Everything | Kira";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Relationship anxiety makes you overthink every text, fear abandonment, and sabotage good relationships. Kira helps you reality-check and work through it.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#FAF7F5] text-[#3A3A3A] font-sans overflow-x-hidden selection:bg-[#D4A5A5]/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#D4A5A5] transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10">
                            <ChevronLeft size={16} />
                        </div>
                        <span className="text-sm font-mono tracking-widest uppercase">Return to Overview</span>
                    </button>
                </div>

                {/* HERO SECTION */}
                <section className="max-w-7xl mx-auto mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A5A5]/10 border border-[#D4A5A5]/30 text-[#C98A8A] text-xs font-bold tracking-widest uppercase mb-6">
                                <Heart size={12} className="fill-[#C98A8A]" /> Relationship Security Protocol
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#3A3A3A]">
                                They Didn't Text Back. <br />
                                <span className="text-[#C98A8A]">Don't Panic.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed font-medium">
                                Meet the companion who helps you reality-check relationship anxiety before you act on it. Stop overthinking every interaction and break the cycle of anxious behaviors.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#D4A5A5] hover:bg-[#c08d8d] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Stop Sabotaging Your Relationships <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div>
                                    <span className="text-[#C98A8A] font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#A8B5A5] animate-pulse" /> Anxiety Management</span>
                                    <div className="text-xs text-gray-500 mt-1">Reality-check • Self-soothe • Secure attachment</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <HeroSplitScreen />
                        </motion.div>
                    </div>
                </section>

                {/* THE PROBLEM SECTION */}
                <section className="max-w-4xl mx-auto mb-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#3A3A3A]">It's Not About Your Partner. It's About Your Brain.</h2>
                    <div className="bg-white border border-[#D4A5A5]/20 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A5A5]/10 blur-[80px] rounded-full pointer-events-none" />

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Your partner doesn't text back immediately. Within 20 minutes, your brain has written the entire breakup script. You know it's irrational, but the panic is real.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-[#C98A8A] font-bold mb-4 flex items-center gap-2"><Activity size={20} /> The Spiral</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• Checking phone every 3 minutes</li>
                                    <li>• Analyzing texts for hidden meaning</li>
                                    <li>• "Are they mad at me?"</li>
                                    <li>• Replaying conversations for hours</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#A8B5A5] font-bold mb-4 flex items-center gap-2"><Brain size={20} /> The Reality</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• They are just at work</li>
                                    <li>• Silence doesn't mean abandonment</li>
                                    <li>• You are safe</li>
                                    <li>• Ambiguity is not a threat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3A3A3A]">Kira vs. Other Solutions</h2>
                        <p className="text-gray-500">Relationship anxiety needs immediate support. Here's the difference.</p>
                    </div>
                    <div className="bg-white border border-[#D4A5A5]/20 rounded-3xl overflow-hidden shadow-xl">
                        <ComparisonTable />
                    </div>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#3A3A3A]">How Relationship Anxiety Support Works</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Reality Checking */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#D4A5A5] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Search size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">Reality-Checks Catastrophic Thoughts</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Your brain says: "They're leaving." Kira asks: "What's the evidence?"</p>
                                    <p>She helps you separate anxiety ("I feel scared") from reality ("They said they were busy"). She stops the spiral before you act on it.</p>
                                </div>
                            </div>
                            <RealityCheckFlow />
                        </div>

                        {/* Feature 2: Red Flags vs Anxiety */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <RedFlagsVisual />
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#A8B5A5] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <AlertTriangle size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">Distinguishes Red Flags vs. Anxiety</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Sometimes they <em>are</em> being distant. Sometimes you're just anxious. It's impossible to tell from the inside.</p>
                                    <p>Kira helps you look at patterns. Is this behavior consistent? Have you communicated your needs? She helps you identify real problems vs. anxiety brain.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Prevent Sabotage */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#C98A8A] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Shield size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">Prevents Anxious Behaviors</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>The urge to send a panic text ("Are we okay?") is strong. But it often pushes people away.</p>
                                    <p>Kira acts as a buffer. Process the anxiety with her <em>first</em>. By the time you talk to your partner, you're calm, grounded, and not reacting out of fear.</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-[#D4A5A5]/20 shadow-lg relative">
                                <div className="absolute top-4 right-4 text-xs font-mono text-gray-400">INTERVENTION LOG</div>
                                <div className="space-y-4">
                                    <div className="text-sm font-bold text-[#C98A8A]">You:</div>
                                    <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600">
                                        "I'm going to text them asking why they're being quiet."
                                    </div>
                                    <div className="text-sm font-bold text-[#A8B5A5]">Kira:</div>
                                    <div className="bg-[#F0FDF4] p-3 rounded-lg text-sm text-[#2C3531] border border-[#A8B5A5]/30">
                                        "Let's pause. What will that achieve? Reassurance for 10 minutes? Or will it create tension? Let's sit with the discomfort for 20 minutes first."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CONVERSION */}
                <section className="relative w-full py-20 my-32 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4A5A5] to-[#A8B5A5]" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                            Imagine Not Sabotaging Your Relationship
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            They text back 3 hours later. <br />
                            <strong>Without Kira:</strong> You've already sent 4 panic texts and picked a fight. <br />
                            <strong>With Kira:</strong> You're calm. You say "Hey! How was work?"
                        </p>

                        <button
                            onClick={onCtaClick}
                            className="bg-white text-[#C98A8A] px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto"
                        >
                            Manage Your Anxiety Before It Manages You <ArrowRight size={24} />
                        </button>
                        <p className="text-white/80 text-sm mt-4 font-medium">Your brain is trying to protect you. Kira helps it relax.</p>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#3A3A3A]">Real People Breaking the Cycle</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "I've sabotaged 3 relationships by being 'too much'. Kira stops me from sending the panic texts. My boyfriend says I'm so much calmer now. I finally feel secure.",
                                name: "Maya R., 28",
                                role: "Anxious Attachment"
                            },
                            {
                                text: "I spiral when he needs space. Kira reminds me: 'Space is healthy. He always comes back.' Seeing the pattern helps me trust it.",
                                name: "Sam L., 26",
                                role: "Pattern Recognition"
                            },
                            {
                                text: "My anxiety makes me think everyone hates me. Kira is the voice of reason. She separates the feelings from the facts. It's a lifesaver.",
                                name: "Jordan K., 31",
                                role: "Reality Checking"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white border border-[#D4A5A5]/20 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#D4A5A5]" />
                                <div className="flex gap-1 mb-4 text-[#A8B5A5]">
                                    {[...Array(5)].map((_, j) => <div key={j}>★</div>)}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-[#3A3A3A]">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ATTACHMENT THEORY CONTEXT */}
                <section className="max-w-3xl mx-auto mb-32 bg-[#FAF7F5] border border-[#A8B5A5]/30 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-[#3A3A3A] mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-[#A8B5A5]" /> Understanding Anxious Attachment
                    </h3>
                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                        <p>
                            <strong>Dr. Amir Levine</strong> ("Attached") explains that anxious attachment isn't a flaw; it's a biological sensitivity to separation.
                        </p>
                        <p>
                            You crave intimacy and fear abandonment. When that fear is triggered, you protest (panic, text, fight) to re-establish connection.
                        </p>
                        <p>
                            Kira helps you <strong>self-soothe</strong> during those triggers, moving you toward "earned security" over time.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#3A3A3A]">Your Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can AI help with attachment styles?", a: "Yes. By providing a consistent, reliable, and non-judgmental presence, Kira can function as a 'secure base' while you learn to manage anxiety and build security in your human relationships." },
                            { q: "Will using Kira make me dependent?", a: "The goal is independence. Currently, you might depend on your partner for constant reassurance. Kira helps you build the skill of self-soothing and reality-checking, so you eventually need less reassurance from anyone." },
                            { q: "Is she a replacement for a partner?", a: "No. She is a support tool to help you be a better, calmer partner. She takes the burden of your raw anxiety off your relationship so you can connect with joy, not fear." },
                            { q: "What if my partner thinks it's weird?", a: "You're taking responsibility for your own mental health. Framing it as 'I'm using a tool to manage my anxiety so I don't put it all on you' is usually seen as a very positive, mature step." }
                        ].map((item, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-gray-700">{item.q}</span>
                                    <ChevronLeft size={20} className={`transform transition-transform text-gray-400 ${activeFaq === i ? '-rotate-90' : 'rotate-0'}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                                                {item.a}
                                                <button
                                                    onClick={() => onBack?.()}
                                                    className="mt-6 flex items-center gap-2 text-[#d4a853] hover:text-[#f5d99a] transition-colors group"
                                                >
                                                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                                    <span className="text-sm font-bold uppercase tracking-widest">Back to Home Page</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Back to Home Page Button */}
                <div className="flex justify-center mb-20">
                    <button
                        onClick={() => onBack?.()}
                        className="flex items-center gap-2 text-[#d4a853] hover:text-[#f5d99a] transition-colors group"
                    >
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Back to Home Page</span>
                    </button>
                </div>

                {/* FINAL CTA */}
                <section className="max-w-4xl mx-auto text-center mb-10">
                    <div className="bg-white border-2 border-[#D4A5A5] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4A5A5] to-[#A8B5A5]" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#3A3A3A]">
                            Stop Letting Anxiety <br /> <span className="text-[#C98A8A]">Destroy Your Relationships.</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                            The difference between a fight and a peaceful night is often just taking 5 minutes to reality-check your brain. Kira gives you those 5 minutes.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#D4A5A5] hover:bg-[#c08d8d] text-white font-black text-xl rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Get Help Managing Relationship Anxiety <ArrowRight />
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                <span className="flex items-center gap-1"><Brain size={10} /> Reality Checks</span>
                                <span className="flex items-center gap-1"><Shield size={10} /> Prevents Sabotage</span>
                                <span className="flex items-center gap-1"><Heart size={10} /> Secure Attachment</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
