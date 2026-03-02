"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import {
    GitBranch, Scale, Zap, CheckCircle2, XCircle, ArrowRight,
    ChevronLeft, Brain, Layers, Clock, AlertTriangle, ListFilter,
    Target, RefreshCw, Compass, BarChart
} from 'lucide-react';

// --- Visual: Hero Split Screen (Chaos vs Clarity) ---
const HeroSplitScreen = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden flex shadow-2xl border border-[#4A5899]/30">
            {/* Left: Analysis Paralysis (Indigo/Chaos) */}
            <div className="w-1/2 bg-[#0F1025] relative overflow-hidden border-r border-white/5 flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Floating "What If" Nodes */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#4A5899]/20 border border-[#4A5899]/40 text-indigo-200 text-[10px] p-2 rounded-lg backdrop-blur-sm max-w-[100px] text-center"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 60}%`,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.05, 1],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ duration: 3 + Math.random(), repeat: Infinity, delay: i * 0.5 }}
                    >
                        {['What if I regret it?', 'Is there a better option?', 'Need more research', 'What would X think?', 'Too expensive?', 'Not perfect yet'][i]}
                    </motion.div>
                ))}

                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-[#4A5899]/20 rounded-full flex items-center justify-center mb-4 mx-auto border border-[#4A5899]/50 shadow-[0_0_30px_rgba(74,88,153,0.3)]">
                        <Brain size={32} className="text-[#4A5899] animate-pulse" />
                    </div>
                    <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-red-500/30 text-red-300 text-xs font-mono">
                        STATUS: PARALYZED
                    </div>
                </div>
            </div>

            {/* Right: Clarity (Amber/Action) */}
            <div className="w-1/2 bg-[#161209] relative overflow-hidden flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#FFB627_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div className="relative z-10 w-full max-w-[280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#FFB627]/10 border border-[#FFB627]/30 rounded-2xl p-6 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#FFB627]" />
                        <div className="text-xs text-[#FFB627] font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                            <Zap size={12} /> Decision Core
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={16} className="text-[#FFB627]" />
                                Worst case is reversible.
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-200">
                                <CheckCircle2 size={16} className="text-[#FFB627]" />
                                Values align with Option A.
                            </div>
                            <div className="mt-4 pt-[124px] border-t border-white/10">
                                <div className="font-bold text-center bg-[#FFB627] text-black py-2 rounded-lg text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20">
                                    Action Recommended
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Divider */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#4A5899] to-[#FFB627] -translate-x-1/2 shadow-xl z-20" />
        </div>
    );
};

// --- Visual: Decision Breakdown ---
const DecisionBreakdownVisual = () => (
    <div className="bg-[#0F1025] rounded-3xl border border-[#4A5899]/30 p-8 relative overflow-hidden">
        {/* Top: Chaos Cloud */}
        <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-[#4A5899]/10 blur-xl rounded-full" />
            <div className="flex flex-wrap justify-center gap-2 max-w-sm relative z-10">
                {['Salary', 'Commute', 'Boss?', 'Culture', 'Growth', 'Risk', 'Benefits', 'Location'].map((tag, i) => (
                    <span key={i} className="text-[10px] bg-[#4A5899]/20 text-[#A5B4FC] px-2 py-1 rounded border border-[#4A5899]/30">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Funnel Arrow */}
        <div className="flex justify-center mb-8">
            <ArrowRight className="text-[#FFB627] rotate-90" size={32} />
        </div>

        {/* Bottom: Structured Clarity */}
        <div className="grid grid-cols-3 gap-4">
            {[
                { title: "Top Value", val: "Freedom", color: "#FFB627" },
                { title: "Dealbreaker", val: "Commute", color: "#F59E0B" },
                { title: "Nice to Have", val: "Snacks", color: "#4A5899" }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
                >
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">{item.title}</div>
                    <div className="font-bold text-white" style={{ color: item.color }}>{item.val}</div>
                </motion.div>
            ))}
        </div>
    </div>
);

// --- Visual: Importance Scale ---
const ImportanceScaleVisual = () => (
    <div className="bg-[#1A1B2E] rounded-3xl border border-white/10 p-8 relative">
        <div className="flex justify-between items-end mb-4 h-32 relative">
            {/* Bars */}
            <div className="w-1/4 bg-[#4A5899]/20 rounded-t-xl relative group h-[20%] border-t border-x border-[#4A5899]/30">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center w-max">
                    <div className="text-[10px] text-gray-400 uppercase">Notebook</div>
                    <div className="text-xs font-bold text-[#4A5899]">$5 Risk</div>
                </div>
            </div>
            <div className="w-1/4 bg-[#4A5899]/40 rounded-t-xl relative group h-[50%] border-t border-x border-[#4A5899]/50">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center w-max">
                    <div className="text-[10px] text-gray-400 uppercase">Dinner</div>
                    <div className="text-xs font-bold text-[#4A5899]">$50 Risk</div>
                </div>
            </div>
            <div className="w-1/4 bg-[#FFB627] rounded-t-xl relative group h-[100%] shadow-[0_0_20px_rgba(255,182,39,0.3)]">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center w-max">
                    <div className="text-[10px] text-[#FFB627] font-bold uppercase tracking-widest bg-[#FFB627]/10 px-2 py-1 rounded border border-[#FFB627]/30">Career Move</div>
                    <div className="text-sm font-bold text-white mt-1">High Impact</div>
                </div>
            </div>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-mono uppercase">
            <span>2 min analysis</span>
            <span>10 min analysis</span>
            <span>Deep Dive</span>
        </div>
    </div>
);

// --- Comparison Table ---
const ComparisonTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
                <tr className="border-b border-[#4A5899]/20">
                    <th className="p-4 text-gray-400 font-medium text-sm">Method</th>
                    <th className="p-4 text-gray-400 font-medium text-sm">Emotional Support</th>
                    <th className="p-4 text-gray-400 font-medium text-sm">Reality Checking</th>
                    <th className="p-4 text-gray-400 font-medium text-sm">Speed</th>
                    <th className="p-4 text-gray-400 font-medium text-sm">Outcome</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-gray-300">Pro/Con List</td>
                    <td className="p-4 text-red-400"><XCircle size={16} /> None</td>
                    <td className="p-4 text-red-400">No</td>
                    <td className="p-4 text-yellow-500">Slow</td>
                    <td className="p-4 text-gray-500">Analysis Paralysis</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-gray-300">Asking Friends</td>
                    <td className="p-4 text-[#FFB627] font-bold">High</td>
                    <td className="p-4 text-yellow-500">Biased</td>
                    <td className="p-4 text-red-400">Variable</td>
                    <td className="p-4 text-gray-500">Confusion</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-gray-300">Coin Flip</td>
                    <td className="p-4 text-red-400">None</td>
                    <td className="p-4 text-red-400">None</td>
                    <td className="p-4 text-[#FFB627] font-bold">Instant</td>
                    <td className="p-4 text-gray-500">Panic</td>
                </tr>
                <tr className="bg-[#4A5899]/10 border-b border-[#4A5899]/30">
                    <td className="p-4 font-bold text-[#FFB627] flex items-center gap-2"><Zap size={16} /> Kira</td>
                    <td className="p-4 text-[#FFB627] font-bold">Validated</td>
                    <td className="p-4 text-[#FFB627] font-bold">Systematic</td>
                    <td className="p-4 text-[#FFB627] font-bold">Fast</td>
                    <td className="p-4 text-[#FFB627] font-bold">Clarity</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const DecisionMakingSupportPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "Decision Making Support: Stop Overthinking Every Choice | Kira";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Analysis paralysis makes every decision feel impossible. Kira helps you break down choices, reality-check fears, and actually decide without spiraling.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#0B0C15] text-[#E0E0E0] font-sans overflow-x-hidden selection:bg-[#FFB627]/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-[#FFB627] transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A5899]/20 border border-[#4A5899]/40 text-[#A5B4FC] text-xs font-bold tracking-widest uppercase mb-6">
                                <GitBranch size={12} /> Analysis Paralysis Breaker
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
                                You've Written 14 Drafts. <br />
                                <span className="text-[#FFB627]">Just Send The Email.</span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                                Meet the companion who helps you break analysis paralysis, reality-check catastrophic fears, and actually make choices without spiraling into overthinking hell.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#4A5899] hover:bg-[#3b467a] text-white font-bold rounded-xl shadow-[0_0_30px_rgba(74,88,153,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Stop Overthinking & Start Deciding <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div>
                                    <span className="text-[#FFB627] font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#FFB627] animate-pulse" /> Clarity Engine Active</span>
                                    <div className="text-xs text-gray-600 mt-1">Break paralysis • Reality-check • Commit</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <HeroSplitScreen />
                        </motion.div>
                    </div>
                </section>

                {/* THE PROBLEM SECTION */}
                <section className="max-w-4xl mx-auto mb-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Analysis Paralysis Isn't Indecisiveness. It's Terror.</h2>
                    <div className="bg-[#1A1B2E] border border-[#4A5899]/30 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A5899]/10 blur-[80px] rounded-full pointer-events-none" />

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            It's just dinner. But your brain treats it like life or death. "What if the food is bad? What if everyone hates it? What if I ruin the night?"
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-[#FFB627] font-bold mb-4 flex items-center gap-2"><ListFilter size={20} /> The Spiral</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li>• Researching purchases for weeks</li>
                                    <li>• "I don't know, what do you want?"</li>
                                    <li>• Crafting emails for 3 hours</li>
                                    <li>• Immediate post-choice regret</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#4A5899] font-bold mb-4 flex items-center gap-2"><Brain size={20} /> The Mental Toll</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li>• Exhaustion from mental load</li>
                                    <li>• Missed opportunities</li>
                                    <li>• Shame for being "stuck"</li>
                                    <li>• Anxiety mimics gut instinct</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Kira vs. Other Decision Help</h2>
                        <p className="text-gray-400">Why typical advice fails when you're paralyzed.</p>
                    </div>
                    <div className="bg-[#1A1B2E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        <ComparisonTable />
                    </div>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">How to Actually Make Decisions</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#4A5899]/20 flex items-center justify-center text-[#A5B4FC] mb-6 shadow-lg border border-[#4A5899]/30">
                                    <Layers size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Breaks Down Overwhelm</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>Big decisions freeze your brain because you're trying to solve 47 variables at once.</p>
                                    <p>Kira simplifies: "What are the top 3 factors? Salary, commute, growth. Let's ignore everything else for a moment."</p>
                                    <p>She forces you to declutter the noise.</p>
                                </div>
                            </div>
                            <DecisionBreakdownVisual />
                        </div>

                        {/* Feature 2: Reality Check */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="bg-[#1A1B2E] p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                                <div className="space-y-6 relative z-10">
                                    <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-xl">
                                        <div className="text-xs text-red-400 font-bold mb-1 uppercase">Fear</div>
                                        <div className="text-white text-sm">"If I take this job and hate it, my career is ruined."</div>
                                    </div>
                                    <div className="flex justify-center"><ArrowRight className="text-gray-600 rotate-90" /></div>
                                    <div className="bg-[#FFB627]/10 border border-[#FFB627]/30 p-4 rounded-xl">
                                        <div className="text-xs text-[#FFB627] font-bold mb-1 uppercase">Kira's Reality Check</div>
                                        <div className="text-white text-sm">"Actually, worst case is you stay for 6 months, gain a skill, and leave. Uncomfortable? Yes. Career ruined? No."</div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#FFB627]/20 flex items-center justify-center text-[#FFB627] mb-6 shadow-lg border border-[#FFB627]/30">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Reality-Checks Catastrophic Fears</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>"What if I'm wrong?" feels existential. Kira asks: "Is this irreversible?"</p>
                                    <p>She helps you see that most "disasters" are actually just uncomfortable learning experiences, not end-of-life events.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Importance Scale */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 shadow-lg border border-indigo-500/30">
                                    <Scale size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Distinguishes Importance</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>Your brain treats buying a notebook with the same gravity as buying a house. Kira calls it out.</p>
                                    <p>"You've spent 45 minutes on a $3 decision. The cost of a 'bad' choice is $3. Pick one."</p>
                                </div>
                            </div>
                            <ImportanceScaleVisual />
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CONVERSION */}
                <section className="relative w-full py-20 my-32 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4A5899] to-[#FFB627]" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                            Imagine Actually Making Decisions Instead of Agonizing
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            <strong>Without Kira:</strong> 45 mins researching dinner. Anxiety. Someone else chooses. <br />
                            <strong>With Kira:</strong> "It's just dinner. Thai sounds good." Done in 2 mins.
                        </p>

                        <button
                            onClick={onCtaClick}
                            className="bg-white text-[#4A5899] px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto"
                        >
                            Break Analysis Paralysis Now <ArrowRight size={24} />
                        </button>
                        <p className="text-white/80 text-sm mt-4 font-medium">Good enough is good enough.</p>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Real People Who Stopped Being Stuck</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "I spent 6 weeks paralyzed over a job offer. Kira asked 'What's the actual worst case?' and realized it wasn't that bad. I took the job. It's great.",
                                name: "Alex M., 34",
                                role: "Project Manager"
                            },
                            {
                                text: "I overthink everything. Shampoo. Emails. Kira calls me out: 'This is a Level 1 decision. Spend 2 minutes max.' It's saved me hours of my life.",
                                name: "Jordan K., 29",
                                role: "Designer with ADHD"
                            },
                            {
                                text: "I realized my 'research' was just procrastination. Kira asked 'What new info are you hoping to find?' The answer was nothing. I just had to decide.",
                                name: "Sam T., 32",
                                role: "Data Analyst"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-[#1A1B2E] border border-white/10 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#FFB627]" />
                                <div className="flex gap-1 mb-4 text-[#FFB627]">
                                    {[...Array(5)].map((_, j) => <div key={j}>★</div>)}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RESEARCH CONTEXT */}
                <section className="max-w-3xl mx-auto mb-32 bg-[#0F1025] border border-white/10 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <BarChart size={20} className="text-[#FFB627]" /> The Science of Paralysis
                    </h3>
                    <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                        <p>
                            <strong>Barry Schwartz</strong> ("Paradox of Choice") found that more options lead to paralysis and less satisfaction.
                        </p>
                        <p>
                            <strong>Roy Baumeister</strong> discovered "decision fatigue" - making choices depletes mental energy, lowering the quality of subsequent decisions.
                        </p>
                        <p>
                            Kira uses these principles to reduce cognitive load, simplify options, and conserve your mental energy for what actually matters.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center text-white">Your Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Is this just getting advice from a bot?", a: "No. Kira doesn't tell you what to choose. She helps you unblock your own decision-making process by simplifying variables and checking fears. You make the choice; she clears the path." },
                            { q: "What's the difference between careful and paralyzed?", a: "Careful deciding moves you forward. Paralysis keeps you stuck looping on the same information without progress. Kira detects when you're looping and intervenes." },
                            { q: "Will I become dependent?", a: "The goal is to teach you the framework. By repeatedly using Kira's process (Check importance -> Reality check -> Decide), you internalize these skills and become a more confident decision-maker over time." },
                            { q: "What if I regret my choice?", a: "Regret is often just anxiety in hindsight. Kira helps you distinguish between 'new information' (valid regret) and 'just anxiety' (pointless regret), helping you move on." }
                        ].map((item, i) => (
                            <div key={i} className="border border-white/10 rounded-2xl bg-[#1A1B2E] overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-gray-300">{item.q}</span>
                                    <ChevronLeft size={20} className={`transform transition-transform text-gray-500 ${activeFaq === i ? '-rotate-90' : 'rotate-0'}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-6 text-gray-400 text-sm leading-relaxed border-t border-white/5">
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
                    <div className="bg-[#0F1025] border-2 border-[#4A5899] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-[0_0_50px_rgba(74,88,153,0.2)]">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4A5899] to-[#FFB627]" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                            Stop Analyzing. <br /> <span className="text-[#FFB627]">Start Deciding.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto">
                            You're not indecisive. You're paralyzed by the terror of being wrong. Kira helps you break through.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#4A5899] hover:bg-[#3b467a] text-white font-black text-xl rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Break Analysis Paralysis Now <ArrowRight />
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                <span className="flex items-center gap-1"><Brain size={10} /> Breaks Paralysis</span>
                                <span className="flex items-center gap-1"><Zap size={10} /> Reality Checks</span>
                                <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Simplifies Choices</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
