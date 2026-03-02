
"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import {
    Brain, Calendar, CheckCircle2, Clock, Coffee, Database,
    FileText, Heart, List, MessageCircle, Shield, ShoppingBag,
    Smartphone, User, Users, XCircle, Zap, ArrowRight, ChevronLeft,
    AlertCircle, Search, Menu
} from 'lucide-react';

// --- Visual: Split Screen Hero (Chaos vs Calm) ---
const HeroSplitScreen = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden flex shadow-2xl">
            {/* Left: Overwhelmed (Chaos) */}
            <div className="w-1/2 bg-[#FFF5F5] relative overflow-hidden border-r border-[#FF6B6B]/20 flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

                {/* Floating Chaos Elements */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`chaos-${i}`}
                        className="absolute bg-yellow-100 text-yellow-900 text-[10px] p-2 rounded shadow-md font-handwriting rotate-[-5deg] border border-yellow-200"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 60}%`,
                            zIndex: Math.floor(Math.random() * 10),
                            transform: `rotate(${Math.random() * 20 - 10}deg)`
                        }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                    >
                        {['Dentist??', 'Buy Milk', 'Forms Due!', 'Soccer 4pm', 'Call Mom', 'Vet Appt'][i % 6]}
                    </motion.div>
                ))}

                <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-[#FF6B6B]/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                        <AlertCircle size={48} className="text-[#FF6B6B]" />
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#FF6B6B]/20 shadow-lg">
                        <div className="text-[#FF6B6B] font-bold text-lg mb-1">Mental Overload</div>
                        <div className="text-gray-500 text-xs">47 Open Loops Detected</div>
                    </div>
                </div>
            </div>

            {/* Right: Calm (Kira) */}
            <div className="w-1/2 bg-[#F0FDF4] relative overflow-hidden flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#6BCF7F_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div className="relative z-10 w-full max-w-xs">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white rounded-2xl shadow-xl border border-[#6BCF7F]/30 overflow-hidden"
                    >
                        <div className="bg-[#6BCF7F]/10 p-4 border-b border-[#6BCF7F]/20 flex justify-between items-center">
                            <span className="font-bold text-[#2D3436] flex items-center gap-2">
                                <Zap size={16} className="text-[#6BCF7F] fill-[#6BCF7F]" /> Kira
                            </span>
                            <span className="text-[10px] text-gray-400 bg-white px-2 py-1 rounded-full">Everything Handled</span>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <div className="w-2 h-2 rounded-full bg-[#6BCF7F]" />
                                Jake: Soccer at 4pm (Cleats packed)
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <div className="w-2 h-2 rounded-full bg-[#6BCF7F]" />
                                Emma: Dentist Tmrw 2pm
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <div className="w-2 h-2 rounded-full bg-orange-400" />
                                Rx Refill: Due in 3 days
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Divider */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#FF6B6B] to-[#6BCF7F] -translate-x-1/2 shadow-lg z-20" />
        </div>
    );
};

// --- Visual: Family Encyclopedia ---
const EncyclopediaVisual = () => (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 p-4 flex gap-4 overflow-x-auto">
            {['Jake (8)', 'Emma (5)', 'Mom (MIL)', 'The Dog'].map((tab, i) => (
                <div key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-[#98D8C8] text-[#064E3B]' : 'bg-gray-200 text-gray-500'}`}>
                    {tab}
                </div>
            ))}
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><User size={18} /></div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase font-bold">School</div>
                        <div className="text-gray-700 font-medium">Mrs. Rodriguez, Room 204</div>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-100 rounded-lg text-red-600"><AlertCircle size={18} /></div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase font-bold">Allergies</div>
                        <div className="text-gray-700 font-medium">Dairy, Mild Pollen</div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><ShoppingBag size={18} /></div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase font-bold">Sizes</div>
                        <div className="text-gray-700 font-medium">Youth M (10/12), Shoe 4</div>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Coffee size={18} /></div>
                    <div>
                        <div className="text-xs text-gray-400 uppercase font-bold">Likes</div>
                        <div className="text-gray-700 font-medium">Pizza (no cheese), Minecraft</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Comparison Table ---
const ComparisonTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
                <tr className="border-b border-gray-200">
                    <th className="p-4 text-gray-500 font-medium text-sm">Solution</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Invisible Labor</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Context</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Direct Reminders</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Load Reduction</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Google Calendar</td>
                    <td className="p-4 text-red-400"><XCircle size={18} /></td>
                    <td className="p-4 text-red-400"><XCircle size={18} /></td>
                    <td className="p-4 text-yellow-500"><AlertCircle size={18} /></td>
                    <td className="p-4 text-red-400">No</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Notion / Apps</td>
                    <td className="p-4 text-yellow-500">Manual Entry</td>
                    <td className="p-4 text-yellow-500">Manual Entry</td>
                    <td className="p-4 text-red-400"><XCircle size={18} /></td>
                    <td className="p-4 text-red-400">Increases Work</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Partner "Helping"</td>
                    <td className="p-4 text-red-400"><XCircle size={18} /></td>
                    <td className="p-4 text-red-400"><XCircle size={18} /></td>
                    <td className="p-4 text-red-400"><XCircle size={18} /></td>
                    <td className="p-4 text-yellow-500">Minimal</td>
                </tr>
                <tr className="bg-[#98D8C8]/10 border-b border-[#98D8C8]/30">
                    <td className="p-4 font-bold text-[#064E3B] flex items-center gap-2"><Zap size={16} /> Kira AI</td>
                    <td className="p-4 text-[#064E3B] font-bold flex items-center gap-2"><CheckCircle2 size={18} /> Captures All</td>
                    <td className="p-4 text-[#064E3B] font-bold"><CheckCircle2 size={18} /></td>
                    <td className="p-4 text-[#064E3B] font-bold"><CheckCircle2 size={18} /></td>
                    <td className="p-4 text-[#064E3B] font-bold">High</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const MentalLoadManagerPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "Mental Load Manager: Stop Being the Family Encyclopedia | Kira AI";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Tired of being the household information desk? Kira remembers everyone's schedules, allergies, and needs so you don't have to hold it all in your head.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#F8F6F4] text-[#2D3436] font-sans overflow-x-hidden selection:bg-[#FF6B6B]/20">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="pt-[124px] pb-20 px-6 relative z-10">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#FF6B6B] transition-colors group"
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 text-[#FF6B6B] text-xs font-bold tracking-widest uppercase mb-6">
                                <Brain size={12} /> Cognitive Load Relief
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#2D3436]">
                                You're Not the <br />
                                <span className="text-[#FF6B6B]">Family Secretary.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed font-medium">
                                Stop being the household encyclopedia. Kira is the external hard drive for your mental load. She remembers allergies, schedules, and where the insurance cards are. So you don't have to.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#FF6B6B] hover:bg-[#EE6C4D] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Stop Being Everyone's Memory <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />)}
                                </div>
                                <p className="text-xs font-medium">Trusted by 2,000+ exhausted parents</p>
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
                <section className="max-w-4xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D3436]">The Mental Load Is Invisible. <span className="text-[#FF6B6B]">But It's Crushing You.</span></h2>
                    </div>
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B6B]/5 rounded-full blur-[80px]" />

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            "What's for dinner?" seems simple. But for you, it triggers 47 micro-tasks: checking the fridge, remembering dietary restrictions, calculating cooking time versus soccer practice pickup, and recalling what everyone refused to eat last week.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <XCircle className="text-[#FF6B6B] shrink-0 mt-1" size={20} />
                                    <p className="text-gray-600 text-sm">Managing everyone's medical appointments (and remembering insurance cards).</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <XCircle className="text-[#FF6B6B] shrink-0 mt-1" size={20} />
                                    <p className="text-gray-600 text-sm">Tracking which kid needs which permission slip signed by yesterday.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <XCircle className="text-[#FF6B6B] shrink-0 mt-1" size={20} />
                                    <p className="text-gray-600 text-sm">Knowing everyone's clothing sizes (because they ask you while you're at work).</p>
                                </div>
                            </div>
                            <div className="bg-[#FFF5F5] p-6 rounded-2xl border border-[#FF6B6B]/10">
                                <h3 className="font-bold text-[#FF6B6B] mb-2 flex items-center gap-2"><Brain size={18} /> The Reality</h3>
                                <p className="text-sm text-gray-700 italic">
                                    "Your brain is the family's Google, Alexa, and IT helpdesk combined. Except you don't get paid, you can't turn off, and your 'users' get annoyed when you don't instantly know where the Halloween decorations are."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3436]">Kira vs. Other Family Tools</h2>
                        <p className="text-gray-500">You've tried the apps. You're still exhausted. Here's why.</p>
                    </div>
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <ComparisonTable />
                    </div>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#2D3436]">Finally, An External Hard Drive for Your Brain</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Capture */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#98D8C8] flex items-center justify-center text-[#064E3B] mb-6 shadow-lg">
                                    <MessageCircle size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Captures Invisible Labor Without Work</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Traditional apps require you to sit down and enter data. That's just more work.</p>
                                    <p>With Kira, you just talk. "Jake is allergic to dairy." "Water filter changed today." "Dr. Chen only does Thursday appointments."</p>
                                    <p>She captures it, categorizes it, and files it away. No spreadsheets required.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 relative">
                                <div className="space-y-4">
                                    <div className="flex justify-end"><div className="bg-[#6BCF7F] text-white px-4 py-2 rounded-2xl rounded-tr-sm shadow-md">Jake needs cleats for Tues/Thurs soccer at 4.</div></div>
                                    <div className="flex justify-start"><div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-2xl rounded-tl-sm">Got it. Saved to Jake's profile. I'll remind you on practice days.</div></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Encyclopedia */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <EncyclopediaVisual />
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#FF6B6B] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Database size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Remembers Context You Hold In Your Head</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>You're the family encyclopedia. Kira takes over that role.</p>
                                    <p>"What's Jake's teacher's name?" "Where's the insurance card?" "What size shoe does Dad wear?"</p>
                                    <p>You stop being the information helpdesk. Kira knows the answers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Proactive */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#EE6C4D] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Clock size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Proactive Reminders Based on Patterns</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>The mental load is remembering *when* things need to happen.</p>
                                    <p>Kira notices patterns: "Mom's prescription refill is due in 3 days." "You mentioned the water filter 3 months ago, time to change it."</p>
                                    <p>She surfaces tasks before they become emergencies.</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                                <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-100">
                                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><AlertCircle size={20} /></div>
                                    <div>
                                        <div className="font-bold text-gray-800">Prescription Alert</div>
                                        <div className="text-sm text-gray-500">Mom's Metformin due in 3 days. Last time pharmacy took 48hrs. Call today?</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Calendar size={20} /></div>
                                    <div>
                                        <div className="font-bold text-gray-800">Soccer Prep</div>
                                        <div className="text-sm text-gray-500">Practice in 2 hrs. Cleats are in garage. Water bottle needs filling.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CONVERSION */}
                <section className="relative w-full py-20 my-32 rounded-[3rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] to-[#98D8C8]" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                            Imagine Not Being Everyone's Information Desk
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            Picture this: Your partner asks "When's the dentist appointment?" <br />
                            Instead of searching your brain, you say: <strong>"Check Kira."</strong> <br />
                            That's it. You stay focused. Your mind stays yours.
                        </p>

                        <button
                            onClick={onCtaClick}
                            className="bg-white text-[#2D3436] px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto"
                        >
                            Unload Your Mental Burden <ArrowRight size={24} />
                        </button>
                        <p className="text-white/80 text-sm mt-4 font-medium">Join people who finally have brain space for their own thoughts</p>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#2D3436]">Real People Who Stopped Being the Encyclopedia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "My husband was skeptical: 'another app?' But then he asked me where his insurance card was, and I said 'Ask Kira.' She knew. Now HE asks Kira when he needs info. I'm not the household Google anymore.",
                                name: "Jennifer L., 41",
                                role: "Mother of 2, Full-time Exec"
                            },
                            {
                                text: "I manage my two kids plus my aging parents. Kira is the only thing standing between me and a breakdown. She reminds me about Dad's meds AND the dog's shots. I'm not mixing up medical needs anymore.",
                                name: "Rachel M., 38",
                                role: "Sandwich Generation Caregiver"
                            },
                            {
                                text: "I was furious at my partner for asking 'what do I do'. Kira changed this. He checks Kira for the schedule now. I'm not the manager delegating tasks; we're both just using the system.",
                                name: "David K., 35",
                                role: "Father of 3"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6B6B]" />
                                <div className="flex gap-1 mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, j) => <div key={j}>★</div>)}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-[#2D3436]">{t.name}</div>
                                    <div className="text-xs text-gray-400">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RESEARCH CITATIONS */}
                <section className="max-w-3xl mx-auto mb-32 bg-[#F0FDF4] border border-[#6BCF7F]/20 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-[#064E3B] mb-4 flex items-center gap-2">
                        <FileText size={20} /> The Mental Load Is Real. And Researched.
                    </h3>
                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                        <p>
                            <strong>Gemma Hartley</strong> ("Fed Up") defines mental load as the cognitive work of managing a household that falls disproportionately on women.
                        </p>
                        <p>
                            <strong>Eve Rodsky</strong> ("Fair Play") found women hold 2.3x more "Conception & Planning" work than partners, even when chores are split.
                        </p>
                        <p>
                            <strong>Dr. Allison Daminger</strong> (Harvard) identifies four dimensions: anticipate, identify, decide, and monitor. Kira automates the "anticipate" and "monitor" phases.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#2D3436]">Your Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What is 'mental load' vs just chores?", a: "Mental load is the invisible cognitive labor: remembering to buy soap, planning the meal, knowing the schedule. Chores are the execution (washing the dish). Kira handles the load so you just handle the execution (or delegate it)." },
                            { q: "Can my partner/family access Kira?", a: "Yes. You can use Kira solo as your external brain, or grant shared access so your family can check Kira directly instead of asking you questions. This is key to breaking the 'default parent' cycle." },
                            { q: "Will Kira judge my messy life?", a: "Never. She doesn't care if you feed the kids nuggets 3x a week. She just remembers you need to buy more nuggets. Zero judgment, 100% support." },
                            { q: "Does this work for elder care?", a: "Absolutely. Kira organizes medical needs, appointments, and preferences by person. Perfect for caregivers managing multiple households." }
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
                    <div className="bg-white border-2 border-[#FF6B6B] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B6B] to-[#6BCF7F]" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#2D3436]">
                            You've Carried Everyone's <br /> <span className="text-[#FF6B6B]">Mental Load Long Enough.</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                            You're not failing at household management. You're overwhelmed because you're doing the cognitive labor of 3 people. Let Kira carry the weight.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#FF6B6B] hover:bg-[#EE6C4D] text-white font-black text-xl rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Unload Your Mental Burden <ArrowRight />
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                <span className="flex items-center gap-1"><Brain size={10} /> Holds Invisible Labor</span>
                                <span className="flex items-center gap-1"><Users size={10} /> Tracks Unlimited People</span>
                                <span className="flex items-center gap-1"><Shield size={10} /> Private & Secure</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
