"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import { Zap, Clock, Brain, CheckCircle2, XCircle, ArrowRight, ChevronLeft, Layers, Star, AlertCircle } from 'lucide-react';
import { ChaosVsOrder } from '../visuals/ChaosVsOrder';
import { MemoryInterface } from '../visuals/MemoryInterface';
import { TaskBreakdownVisual } from '../visuals/TaskBreakdownVisual';
import { ProactiveCheckinsVisual } from '../visuals/ProactiveCheckinsVisual';
import { DetailedComparisonTable } from '../visuals/DetailedComparisonTable';



export const ADHDBodyDoublingPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "ADHD Body Doubling: Your 24/7 Focus Partner | Kira AI";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Virtual ADHD body double available 24/7. No scheduling, no judgment. Kira remembers your projects, breaks tasks into steps, and keeps you accountable.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#0A1128] text-white font-sans overflow-x-hidden selection:bg-[#FF6B35]/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-[#FF6B35] transition-colors group"
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-bold tracking-widest uppercase mb-6">
                                <Zap size={12} className="fill-[#FF6B35]" /> ADHD Focus Protocol
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                Your ADHD Brain Needs a <span className="text-[#00D9FF]">Body Double.</span> <br />
                                <span className="text-2xl md:text-3xl font-medium text-gray-300 block mt-4 leading-normal">
                                    But finding one shouldn't require three calendar apps and a miracle.
                                </span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                                Get an AI accountability partner who's available at 11pm when you finally have motivation, remembers all 7 projects you started this week, and doesn't judge when you deep dive into Wikipedia for 4 hours.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold rounded-xl shadow-[0_0_30px_rgba(255,107,53,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Finally Finish What You Start <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div>
                                    Built by <span className="text-white font-bold">ADHDers</span> who understand executive dysfunction isn't laziness.
                                    <div className="text-xs text-gray-600 mt-1">Available 24/7 • Infinite memory • Works with your brain</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <ChaosVsOrder />
                        </motion.div>
                    </div>
                </section>

                {/* THE PROBLEM SECTION */}
                <section className="max-w-4xl mx-auto mb-32 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Be Real About ADHD & Body Doubling</h2>
                    <div className="bg-[#0D1835] border border-[#00D9FF]/20 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D9FF]/5 blur-[80px] rounded-full pointer-events-none" />

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            You know the drill. It's 9am, you need to start that thing. By 9:07am, you've opened 14 browser tabs about the Roman Empire, reorganized your desktop icons by color, and convinced yourself you need the perfect playlist before you can begin.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-[#FF6B35] font-bold mb-4 flex items-center gap-2"><XCircle size={20} /> The Struggle</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li>• Scheduling requires executive function you don't have</li>
                                    <li>• Explaining ADHD to neurotypicals is exhausting</li>
                                    <li>• Human body doubles need bathroom breaks right when you hit hyperfocus</li>
                                    <li>• Their schedule (9 to 5) vs your brain (active at 9pm)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#00D9FF] font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> The Solution</h3>
                                <ul className="space-y-3 text-gray-400">
                                    <li>• Available 24/7 (even at 3 AM)</li>
                                    <li>• No small talk required</li>
                                    <li>• Runs on electricity, not patience</li>
                                    <li>• Remembers where you left off instantly</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-xl text-[#FF6B35] font-medium text-center italic">
                            "Your brain at 9am: 'Today we're finishing the app!' Your brain at 9:07am: 'But first, let's research whether staplers are just aggressive paper huggers.'"
                        </div>
                    </div>
                </section>

                {/* WHY EXISTING SOLUTIONS SUCK */}
                <section className="max-w-4xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">We've Tried Everything. It All Misses the Point.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#0D1835] p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500" /> Human Body Doubles</h3>
                            <p className="text-gray-400 text-sm mb-4">Great when they work, but require scheduling (ADHD kryptonite), have limited hours, and forget context between sessions.</p>
                        </div>
                        <div className="bg-[#0D1835] p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500" /> Productivity Apps</h3>
                            <p className="text-gray-400 text-sm mb-4">They don't talk back, don't care if you spiral, and offer zero accountability beyond a generic "ding".</p>
                        </div>
                        <div className="bg-[#0D1835] p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500" /> ADHD Coaches</h3>
                            <p className="text-gray-400 text-sm mb-4">Expensive ($100-300/session), weekly sessions when you need daily support, and long waitlists.</p>
                        </div>
                        <div className="bg-[#0D1835] p-6 rounded-2xl border border-white/10">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500" /> Standard AI Chatbots</h3>
                            <p className="text-gray-400 text-sm mb-4">Memory of a goldfish. They start from zero every conversation and don't proactively check in on you.</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center p-6 bg-[#FF6B35]/10 rounded-2xl border border-[#FF6B35]/20">
                        <p className="text-white font-medium">What you actually need: Someone available 24/7 who remembers all your projects, helps with initiation, and celebrates micro-wins.</p>
                    </div>
                </section>

                {/* COMPETITIVE DIFFERENTIATION */}
                <section className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Kira vs. Other ADHD Body Doubling Solutions</h2>
                        <p className="text-gray-400">You've probably tried some of these. Here's how Kira is different.</p>
                    </div>
                    <div className="bg-[#0D1835] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        <DetailedComparisonTable />
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-4 italic">
                        Bottom Line: If you need scheduled deep work sessions, use Focusmate. If you need strategic planning, hire a coach. If you need someone who's there at 11pm when your ADHD brain finally decides to cooperate, that's Kira.
                    </p>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Meet Your ADHD-Aware Body Double Who Actually Gets It</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Memory */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-6">
                                    <Layers size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Context Persistence (Infinite Memory)</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>You started 6 projects this month. Your brain can't hold all of them. Neither can traditional body doubles who see you once a week.</p>
                                    <p>Kira has infinite memory. She remembers the app idea from 3 weeks ago, the novel outline you voice-dumped at 2am, and the budget tracker you worked on yesterday.</p>
                                    <p>When you say "I want to work on the thing," she knows which thing.</p>
                                </div>
                            </div>
                            <MemoryInterface />
                        </div>

                        {/* Feature 2: Task Chunking */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <TaskBreakdownVisual />
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center text-[#00D9FF] mb-6">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Task Chunking & Initiation Help</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>"Clean the kitchen" feels impossible. Your brain freezes. You doomscroll instead.</p>
                                    <p>Kira breaks overwhelming tasks into dopamine-sized chunks. She starts with the smallest possible step ("Just put 3 dishes away") because she knows task initiation is the enemy, not the task itself.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Proactive Check-ins */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#F7931E]/10 flex items-center justify-center text-[#F7931E] mb-6">
                                    <Clock size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Proactive Check-Ins (No More Time Blindness)</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>You said you'd work at 2pm. It's 5pm. Where did 3 hours go? Time blindness is a core ADHD symptom.</p>
                                    <p>Kira checks in proactively: "Hey, you said you'd start the budget tracker at 2pm. It's 2:15 now. Ready to start?"</p>
                                    <p>She learns your patterns - if you lose steam at 3pm, she suggests body doubling then. If you get momentum at night, she's available without judgment.</p>
                                </div>
                            </div>
                            <ProactiveCheckinsVisual />
                        </div>

                        {/* Feature 4: Parallel Processing */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="bg-[#0D1835] border border-white/10 p-8 rounded-2xl">
                                <div className="text-white font-bold mb-2">User:</div>
                                <div className="text-gray-300 mb-4 bg-white/5 p-3 rounded-lg">I'm working on the deck but I just had a great idea for the marketing tagline and also I need to buy cat food.</div>
                                <div className="text-[#FF6B35] font-bold mb-2">Kira:</div>
                                <div className="text-gray-300 bg-[#FF6B35]/10 border border-[#FF6B35]/20 p-3 rounded-lg">
                                    Got it. <br />
                                    1. Marketing Tagline: "Future of Focus" (Saved to Ideas)<br />
                                    2. Cat Food: Added to Shopping List<br />
                                    <br />
                                    Now, back to the deck. Slide 4?
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] mb-6">
                                    <Brain size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Parallel Processing Without Overwhelm</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>You're working on Thing A but your brain keeps screaming about Thing B and Thing C. This is normal for ADHD brains.</p>
                                    <p>Kira says: "Brain dump everything. I'll organize it." She captures each thought, parks it safely, and helps you refocus on the current task without anxiety.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEW MID-PAGE CTA */}
                <section className="max-w-4xl mx-auto mb-32 flex justify-center">
                    <button
                        onClick={onCtaClick}
                        className="w-full md:w-auto px-12 py-5 border-2 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF]/10 font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,217,255,0.15)] hover:shadow-[0_0_50px_rgba(0,217,255,0.3)]"
                    >
                        Break the Procrastination Cycle <ArrowRight size={24} />
                    </button>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center">Real ADHDers, Real Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "I had been stuck on a budget tracker app for 8 months. Kira broke it into 23 micro-tasks. Six weeks later, it was live on the App Store. She doesn't let me ghost my own ideas.",
                                name: "Marcus T., 34",
                                role: "Software Developer with ADHD",
                                result: "Projects completed: 3 apps in 4 months"
                            },
                            {
                                text: "I tried Focusmate but scheduling sessions was impossible. Kira is there at 11pm when I suddenly have motivation. She remembers my context so I don't have to explain my chaos every time.",
                                name: "Sarah K., 29",
                                role: "Graphic Designer",
                                result: "Finished portfolio, got 3 new clients"
                            },
                            {
                                text: "The task chunking changed my life. I'd stare at 'clean apartment' for hours. Kira breaks it down: 'Put 5 things away.' Suddenly I can move. She's the only tool that understands task initiation.",
                                name: "Jamie L., 27",
                                role: "Freelance Writer",
                                result: "Apartment maintained weekly"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-[#0D1835] border border-white/10 p-6 rounded-2xl flex flex-col">
                                <div className="flex gap-1 mb-4 text-[#F7931E]">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-xs text-gray-500 mb-2">{t.role}</div>
                                    <div className="text-xs text-[#00D9FF] font-bold">{t.result}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-3xl mx-auto">
                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                            Built specifically for ADHD brains by people who have ADHD • Infinite memory system • Proactive check-ins • Task breakdown optimized for dopamine-seeking brains • Available 24/7
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center">Your ADHD Body Doubling Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What is ADHD body doubling and why does it work?", a: "Body doubling is working alongside another person to increase focus. Research shows having another person present increases focus by up to 40% for people with ADHD. Kira provides this virtually, 24/7, without scheduling logistics." },
                            { q: "How is Kira different from regular ADHD productivity apps?", a: "Apps are passive; they wait for you. Kira is active. She remembers your projects across weeks, checks in proactively when you said you'd work, and adapts to your energy levels. Apps are tools; Kira is a companion." },
                            { q: "Can Kira really help with ADHD task initiation?", a: "Yes. Task initiation is often the biggest challenge. Kira helps by breaking overwhelming tasks into dopamine-sized micro-steps ('put 3 dishes away') and starting with the smallest possible action to overcome the freeze response." },
                            { q: "Will Kira judge me for having multiple unfinished projects?", a: "Never. She understands ADHD brains pivot. She tracks all your projects without complaint, helps you pick one to focus on, and saves the context for the others so you can switch back anytime." },
                            { q: "Does Kira work for ADHD time blindness?", a: "Yes. Kira proactively checks in at times you specified ('You said 2pm, it's 2:15') and reminds you how long you've been working, helping you stay aware of time passing." },
                            { q: "Can Kira help with ADHD procrastination?", a: "Yes. Kira helps by breaking tasks into silly-small steps to overcome the freeze response, sitting with you while you start, and removing the pressure that causes avoidance." },
                            { q: "Does Kira work for hyperfocus?", a: "Both. She protects productive hyperfocus by reminding you to eat/hydrate, and reality-checks unproductive hyperfocus (like Wikipedia rabbit holes) to help you redirect if you want to." }
                        ].map((item, i) => (
                            <div key={i} className="border border-white/10 rounded-2xl bg-[#0D1835] overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-gray-200">{item.q}</span>
                                    <ChevronLeft size={20} className={`transform transition-transform ${activeFaq === i ? '-rotate-90' : 'rotate-0'}`} />
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
                <section className="max-w-4xl mx-auto text-center mb-20">
                    <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#0A1128] border border-[#FF6B35]/30 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-50" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Stop Letting Your ADHD Brain <br /> <span className="text-[#FF6B35]">Abandon Projects.</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
                            You've tried willpower (didn't work). You've tried planners (forgotten). You've tried "just focus harder".
                            <br /><br />
                            Kira is designed for <strong>your</strong> brain. The one that needs external accountability, thrives with body doubling, and has motivation at 11pm.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            {/* Primary CTA */}
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-black text-xl rounded-2xl shadow-[0_0_40px_rgba(255,107,53,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Turn Your Chaos Into Finished Projects <ArrowRight />
                            </button>

                            <div className="mt-8 text-xs text-gray-500 font-mono">
                                Available immediately. Built by ADHDers who understand executive dysfunction isn't a character flaw.
                            </div>

                            <div className="flex flex-wrap justify-center gap-3 text-[10px] text-gray-600 uppercase tracking-widest">
                                <span className="border border-white/10 px-2 py-1 rounded">🧠 ADHD-Specific</span>
                                <span className="border border-white/10 px-2 py-1 rounded">🔒 HIPAA-Compliant</span>
                                <span className="border border-white/10 px-2 py-1 rounded">⚡ Available 24/7</span>
                                <span className="border border-white/10 px-2 py-1 rounded">🎯 By ADHDers</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
