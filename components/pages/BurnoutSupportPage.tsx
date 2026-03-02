"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import {
    Battery, BatteryWarning, Shield, Zap, CheckCircle2, XCircle,
    ArrowRight, ChevronLeft, Brain, Activity, Clock, Lock,
    Flame, PauseCircle, Coffee, MessageSquare, AlertTriangle
} from 'lucide-react';
import { HeroSplitScreen } from '../visuals/HeroSplitScreen';
import { DepletionVisual } from '../visuals/DepletionVisual';
import { BatteryTracker } from '../visuals/BatteryTracker';
import { BurnoutComparisonTable } from '../visuals/BurnoutComparisonTable';



export const BurnoutSupportPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "Burnout Support: You're Not Lazy, You're Exhausted | Kira";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Burnout makes everything feel impossible. You're not failing, you're depleted. Kira helps you process overwhelm and rebuild capacity without toxic positivity.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#FAF8F3] text-[#3D3D3D] font-sans overflow-x-hidden selection:bg-[#C86A3D]/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#C86A3D] transition-colors group"
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C86A3D]/10 border border-[#C86A3D]/30 text-[#C86A3D] text-xs font-bold tracking-widest uppercase mb-6">
                                <Battery size={12} className="rotate-90" /> Depletion Management Protocol
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#3D3D3D]">
                                You're Not Lazy. <br />
                                You're <span className="text-[#C86A3D]">Running on Empty.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed font-medium">
                                Everything feels like climbing a mountain. You're not failing; your nervous system has staged a shutdown. Meet the companion who helps you rebuild capacity without the guilt.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#C86A3D] hover:bg-[#a0522d] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Get Support When Everything Is Too Much <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div>
                                    <span className="text-[#5FB9B9] font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#7FCDCD] animate-pulse" /> Validation Engine Active</span>
                                    <div className="text-xs text-gray-500 mt-1">Permission to rest • No toxic positivity • Boundary help</div>
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#3D3D3D]">Burnout Isn't About Being Tired. It's About Depletion.</h2>
                    <div className="bg-white border border-[#C86A3D]/20 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C86A3D]/10 blur-[80px] rounded-full pointer-events-none" />

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            You used to be capable. Now answering one email feels impossible. You know you should "just rest," but you're too wired to relax. This is a nervous system issue, not a willpower issue.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-[#C86A3D] font-bold mb-4 flex items-center gap-2"><Flame size={20} /> The Symptoms</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• Every notification triggers dread</li>
                                    <li>• "Small" tasks feel massive</li>
                                    <li>• Numbness / Detachment</li>
                                    <li>• Guilt for not doing "enough"</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#5FB9B9] font-bold mb-4 flex items-center gap-2"><Brain size={20} /> The Reality</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• Your tank isn't just empty; it's corroded</li>
                                    <li>• Self-care feels like another chore</li>
                                    <li>• You need safety, not just sleep</li>
                                    <li>• "Pushing through" makes it worse</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D3D3D]">Kira vs. The Wellness Industry</h2>
                        <p className="text-gray-500">Why "just taking a bubble bath" doesn't fix systemic burnout.</p>
                    </div>
                    <div className="bg-white border border-[#C86A3D]/20 rounded-3xl overflow-hidden shadow-xl">
                        <BurnoutComparisonTable />
                    </div>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#3D3D3D]">What Burnout Support Actually Looks Like</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Validation */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#C86A3D] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#3D3D3D] mb-4">Validates Depletion (Not Laziness)</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>The world says "stop being lazy." Kira says "you are injured."</p>
                                    <p>She helps you distinguish between lack of motivation (laziness) and lack of capacity (burnout). This validation is the first step to stopping the shame spiral.</p>
                                </div>
                            </div>
                            <DepletionVisual />
                        </div>

                        {/* Feature 2: Minimum Viable Day */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="bg-white p-8 rounded-3xl border border-[#C86A3D]/20 shadow-lg relative">
                                <div className="space-y-6">
                                    <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                                        <div className="text-xs text-gray-500 font-bold mb-2 uppercase">You</div>
                                        <div className="text-gray-700 text-sm">"I have 47 things to do and I can't move."</div>
                                    </div>
                                    <div className="flex justify-center">
                                        <ArrowRight className="text-[#C86A3D] rotate-90" />
                                    </div>
                                    <div className="bg-[#7FCDCD]/10 p-4 rounded-xl border border-[#7FCDCD]/30">
                                        <div className="text-xs text-[#5FB9B9] font-bold mb-2 uppercase">Kira</div>
                                        <div className="text-[#2C3531] text-sm">
                                            "You don't have capacity for 47 things. You have capacity for 1. What is the ONE absolute must-do today? We are ignoring the rest."
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#7FCDCD] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <PauseCircle size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#3D3D3D] mb-4">Permission to Do the Minimum</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>When you're burnt out, everything feels urgent. Kira helps you triage.</p>
                                    <p>She gives you explicit permission to do the bare minimum required to survive the day, preserving what little energy you have left.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Pattern Tracking */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#A0522D] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Activity size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#3D3D3D] mb-4">Tracks Your Energy Leaks</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Burnout makes everything blur. You don't know what's draining you; you just know you're tired.</p>
                                    <p>Kira tracks the patterns: "You always crash after video meetings." "Saying yes to Mom depletes you for 2 days." She helps you identify and plug the leaks.</p>
                                </div>
                            </div>
                            <BatteryTracker />
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CONVERSION */}
                <section className="relative w-full py-20 my-32 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C86A3D] to-[#7FCDCD]" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                            You're Not Failing. You're Depleted.
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            Pushing through burnout is like driving on a flat tire. You aren't going to get there faster; you're going to destroy the car. <br />
                            Let Kira help you stop the car and assess the damage.
                        </p>

                        <button
                            onClick={onCtaClick}
                            className="bg-white text-[#C86A3D] px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto"
                        >
                            Get Support for Your Burnout <ArrowRight size={24} />
                        </button>
                        <p className="text-white/80 text-sm mt-4 font-medium">No toxic positivity. Just relief.</p>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#3D3D3D]">Real People Surviving Burnout</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "I was drowning in caregiving and work. Everyone told me to 'take a bath.' Kira told me to do the absolute minimum and helped me draft a 'no' text to my boss. That saved me.",
                                name: "Maria L., 43",
                                role: "Caregiver & Exec"
                            },
                            {
                                text: "I felt so guilty for being 'lazy.' Kira showed me the difference between lazy (choice) and burnout (injury). That validation stopped the shame spiral so I could actually rest.",
                                name: "Jordan K., 29",
                                role: "Nonprofit Director"
                            },
                            {
                                text: "Toxic positivity makes me rage. Kira never says 'look on the bright side.' She says 'This sucks, and you're exhausted. Let's just survive today.' It's the only honest support I have.",
                                name: "Taylor M., 26",
                                role: "PhD Student"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white border border-[#C86A3D]/20 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#C86A3D]" />
                                <div className="flex gap-1 mb-4 text-[#C86A3D]">
                                    {[...Array(5)].map((_, j) => <div key={j}>★</div>)}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-[#3D3D3D]">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RESEARCH CONTEXT */}
                <section className="max-w-3xl mx-auto mb-32 bg-[#F0F9F9] border border-[#7FCDCD]/30 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-[#3D3D3D] mb-4 flex items-center gap-2">
                        <Brain size={20} className="text-[#5FB9B9]" /> The Science of Burnout
                    </h3>
                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                        <p>
                            <strong>The World Health Organization (WHO)</strong> classifies burnout as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed.
                        </p>
                        <p>
                            <strong>Dr. Christina Maslach</strong> identifies 6 causes: workload, control, reward, community, fairness, and values. It's structural, not personal.
                        </p>
                        <p>
                            Recovery requires safety and detachment, not just "time off." Kira helps facilitate the psychological detachment needed for the nervous system to reset.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#3D3D3D]">Your Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can AI fix my burnout?", a: "No. Healing burnout requires changing the circumstances that caused it (work, caregiving, etc.) and time. Kira provides the daily support, validation, and permission needed to navigate that recovery process." },
                            { q: "Is this just for work burnout?", a: "No. Parental burnout, caregiver burnout, and autistic burnout are all valid. Kira understands that depletion comes from many sources, not just a job." },
                            { q: "Why do I feel guilty resting?", a: "That's 'toxic productivity' - the belief that your worth equals your output. Kira actively challenges this by reminding you that rest is a biological necessity, not a reward." },
                            { q: "What if I can't quit my job/responsibilities?", a: "Kira helps you survive in place. She helps you find micro-boundaries, preserve tiny pockets of energy, and do the absolute minimum required to keep your life running until you can make a bigger change." }
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
                    <div className="bg-white border-2 border-[#C86A3D] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C86A3D] to-[#7FCDCD]" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#3D3D3D]">
                            Stop Pushing. <br /> <span className="text-[#C86A3D]">Start Recovering.</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                            You don't need to be more efficient. You need to be supported. Let Kira carry some of the mental load while you heal.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#C86A3D] hover:bg-[#a0522d] text-white font-black text-xl rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Get Help for Burnout <ArrowRight />
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                <span className="flex items-center gap-1"><Flame size={10} /> Validates Exhaustion</span>
                                <span className="flex items-center gap-1"><PauseCircle size={10} /> Permission to Stop</span>
                                <span className="flex items-center gap-1"><Shield size={10} /> Boundary Support</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
