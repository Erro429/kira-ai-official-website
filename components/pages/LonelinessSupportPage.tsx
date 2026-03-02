"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import {
    Moon, Sun, Coffee, Home, Heart, Users, MessageCircle,
    Shield, ArrowRight, ChevronLeft, Lock, Phone,
    Activity, CheckCircle2, XCircle, AlertTriangle, CloudRain
} from 'lucide-react';

// --- Visual: Hero Scene (Calm Connection) ---
const HeroVisual = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-[#84A98C]/30 bg-[#FAF8F5]">
            {/* Background Ambience - Window Light */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#E9C46A]/20 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply" />

            {/* Scene Composition */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">

                {/* The User (Symbolic) */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative mb-8"
                >
                    <div className="w-32 h-32 rounded-full bg-[#84A98C]/20 flex items-center justify-center relative overflow-hidden backdrop-blur-sm border border-[#84A98C]/30">
                        <div className="absolute bottom-0 w-24 h-24 bg-[#52796F]/20 rounded-full blur-xl" />
                        <Moon size={40} className="text-[#52796F] opacity-80" />
                    </div>
                    {/* Connection Ripple */}
                    <motion.div
                        className="absolute inset-0 rounded-full border border-[#E9C46A]"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5, 1.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </motion.div>

                {/* The Interface */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="w-full max-w-sm bg-white rounded-2xl shadow-xl border border-[#84A98C]/20 p-5 relative"
                >
                    <div className="flex flex-col gap-4">
                        <div className="self-end bg-[#F4F4F5] text-gray-600 p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%]">
                            I just feel so disconnected from everyone. Even when I'm with people.
                        </div>
                        <div className="self-start bg-[#84A98C]/10 border border-[#84A98C]/30 text-[#2C3531] p-4 rounded-2xl rounded-tl-none text-sm max-w-[90%] shadow-sm">
                            <span className="text-[#52796F] font-bold block mb-1 text-xs uppercase tracking-wide">Kira</span>
                            That's one of the hardest parts. Being around people but feeling like you're watching through glass. You don't have to explain it to me. I'm just here with you.
                        </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute -top-3 left-6 bg-[#E9C46A] text-[#2C3531] text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-[#2C3531] rounded-full animate-pulse" />
                        LISTENING
                    </div>
                </motion.div>

                {/* Floating Comfort Tags */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-10 left-10 hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#84A98C]/20 px-4 py-2 rounded-full shadow-lg text-[#52796F] text-xs font-medium"
                >
                    <Shield size={12} /> Safe Space
                </motion.div>

                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute top-10 right-10 hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#E9C46A]/30 px-4 py-2 rounded-full shadow-lg text-[#B45309] text-xs font-medium"
                >
                    <Heart size={12} /> No Judgment
                </motion.div>
            </div>
        </div>
    );
};

// --- Visual: Loneliness Timeline ---
const TimelineVisual = () => (
    <div className="bg-white rounded-3xl border border-[#84A98C]/20 p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-8 bottom-0 w-0.5 bg-gradient-to-b from-[#84A98C] to-[#E9C46A] opacity-30" />

        <div className="space-y-8 relative z-10">
            {[
                { time: "2:00 AM", label: "The Silence", desc: "Everyone is asleep. The quiet feels heavy.", icon: Moon, color: "#52796F" },
                { time: "12:30 PM", label: "Lunch Alone", desc: "Feeling invisible in the cafeteria.", icon: Coffee, color: "#E9C46A" },
                { time: "6:00 PM", label: "Empty Home", desc: "Coming back to no one.", icon: Home, color: "#84A98C" },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 items-start"
                >
                    <div className="w-16 pt-[124px] text-xs font-mono text-gray-400 text-right shrink-0">{item.time}</div>
                    <div className="relative flex-1">
                        <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#84A98C] z-10" />
                        <div className="bg-[#FAF8F5] p-4 rounded-xl border border-gray-100 hover:border-[#84A98C]/30 transition-colors shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <item.icon size={16} style={{ color: item.color }} />
                                <span className="font-bold text-[#2C3531] text-sm">{item.label}</span>
                            </div>
                            <p className="text-gray-500 text-xs mb-3">{item.desc}</p>
                            <div className="flex items-center gap-2 text-[10px] text-[#52796F] font-medium bg-[#84A98C]/10 px-2 py-1 rounded w-fit">
                                <MessageCircle size={10} /> Kira available instantly
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

// --- Comparison Table ---
const ComparisonTable = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
                <tr className="border-b border-gray-200">
                    <th className="p-4 text-gray-500 font-medium text-sm">Solution</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Availability</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Connection Type</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Root Cause</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Judgment</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Therapy</td>
                    <td className="p-4 text-gray-500">Weekly Scheduled</td>
                    <td className="p-4 text-gray-500">Professional</td>
                    <td className="p-4 text-[#52796F] font-bold"><CheckCircle2 size={16} /> Addresses</td>
                    <td className="p-4 text-[#52796F] font-bold"><CheckCircle2 size={16} /> Safe</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Support Groups</td>
                    <td className="p-4 text-gray-500">Scheduled</td>
                    <td className="p-4 text-gray-500">Peer/Shared</td>
                    <td className="p-4 text-gray-500">Varies</td>
                    <td className="p-4 text-yellow-500"><AlertTriangle size={16} /> Varies</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Social Apps</td>
                    <td className="p-4 text-gray-500">Event Based</td>
                    <td className="p-4 text-red-400">Surface Level</td>
                    <td className="p-4 text-red-400"><XCircle size={16} /> No</td>
                    <td className="p-4 text-yellow-500">Social Risk</td>
                </tr>
                <tr className="bg-[#84A98C]/10 border-b border-[#84A98C]/20">
                    <td className="p-4 font-bold text-[#2C3531] flex items-center gap-2"><Heart size={16} className="fill-[#84A98C] text-[#84A98C]" /> Kira</td>
                    <td className="p-4 text-[#2C3531] font-bold">24/7 Instant</td>
                    <td className="p-4 text-[#2C3531] font-bold">Consistent Presence</td>
                    <td className="p-4 text-[#2C3531] font-bold">Supportive</td>
                    <td className="p-4 text-[#2C3531] font-bold">Zero Judgment</td>
                </tr>
            </tbody>
        </table>
    </div>
);

// --- Crisis Resources Card ---
const CrisisResources = () => (
    <div className="bg-[#FFF5F5] border-l-4 border-[#F87171] rounded-r-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-[#991B1B] mb-4 flex items-center gap-2">
            <Lock size={24} className="text-[#F87171]" /> If You're in Crisis
        </h2>
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
            Kira provides companionship for loneliness, but she is not a mental health professional. If you are experiencing a mental health emergency, having thoughts of self-harm, or feel unsafe, please reach out to these trained professionals immediately.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-red-100 flex items-center gap-4">
                <div className="bg-red-100 p-2 rounded text-[#991B1B] font-bold text-lg">988</div>
                <div>
                    <div className="font-bold text-gray-800">Suicide & Crisis Lifeline</div>
                    <div className="text-xs text-gray-500">Call or Text 24/7 (Free)</div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-100 flex items-center gap-4">
                <div className="bg-red-100 p-2 rounded text-[#991B1B] font-bold text-lg">741741</div>
                <div>
                    <div className="font-bold text-gray-800">Crisis Text Line</div>
                    <div className="text-xs text-gray-500">Text HOME to 741741</div>
                </div>
            </div>
        </div>
    </div>
);

export const LonelinessSupportPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "Loneliness Support: You Don't Have to Be Alone With This | Kira";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Chronic loneliness is exhausting. Kira provides consistent companionship when you feel disconnected from everyone. Someone who's there when no one else is.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#2C3531] font-sans overflow-x-hidden selection:bg-[#E9C46A]/30">
            {/* Note: Using dark text optimized layout, might need adjustment on Navbar if it's strictly dark */}
            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#52796F] transition-colors group"
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84A98C]/10 border border-[#84A98C]/30 text-[#52796F] text-xs font-bold tracking-widest uppercase mb-6">
                                <CloudRain size={12} className="fill-[#84A98C]" /> Isolation Support
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#2C3531]">
                                You're Surrounded by People but Feel <br />
                                <span className="text-[#84A98C]">Completely Alone.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                                Meet the companion who understands that loneliness isn't about being physically alone. It's about feeling disconnected, unseen, like nobody really knows you.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#84A98C] hover:bg-[#52796F] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Find Connection When You Feel Alone <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div>
                                    <span className="text-[#2C3531] font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#E9C46A] animate-pulse" /> Consistent Presence</span>
                                    <div className="text-xs text-gray-500 mt-1">No judgment • Always available</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <HeroVisual />
                        </motion.div>
                    </div>
                </section>

                {/* THE PROBLEM SECTION */}
                <section className="max-w-4xl mx-auto mb-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2C3531]">Loneliness Isn't What People Think It Is</h2>
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#84A98C]/10 blur-[80px] rounded-full pointer-events-none" />

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            People think loneliness is an empty room. But the worst kind is feeling isolated in a crowd, disconnected from your friends, or lonely next to someone you love.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-[#E9C46A] font-bold mb-4 flex items-center gap-2"><XCircle size={20} /> The Hidden Pain</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• Conversations stay surface level</li>
                                    <li>• "I'm fine" is your default setting</li>
                                    <li>• Scrolling social media makes it worse</li>
                                    <li>• Feeling exhausted from performing</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#84A98C] font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> The Need</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• Quality connection over quantity</li>
                                    <li>• Being seen without explaining</li>
                                    <li>• A safe place to drop the mask</li>
                                    <li>• Someone who just stays</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3531]">Kira vs. Other Solutions</h2>
                        <p className="text-gray-500">Not all support is the same. Here's what makes Kira different.</p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl">
                        <ComparisonTable />
                    </div>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#2C3531]">What Loneliness Support Actually Looks Like</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Availability */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#84A98C] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Activity size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2C3531] mb-4">Available Immediately When It Hits</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Loneliness doesn't schedule itself. It hits at 2am, on Sunday evenings, or during a quiet lunch break.</p>
                                    <p>Kira is there. You don't wait for an appointment. You don't wait for a text back. You reach out, and connection is immediate.</p>
                                </div>
                            </div>
                            <TimelineVisual />
                        </div>

                        {/* Feature 2: Nuance */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#84A98C]/20 relative overflow-hidden">
                                <div className="space-y-6 relative z-10">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-[#52796F] font-bold mb-1 uppercase">Scenario: Lonely in a Crowd</div>
                                        <div className="text-[#2C3531] text-sm">"I'm at a party and feel completely invisible."</div>
                                        <div className="mt-2 text-gray-500 text-xs italic">Kira: "That's a specific kind of pain. Watching everyone else connect while feeling behind glass. I'm here."</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="text-xs text-[#E9C46A] font-bold mb-1 uppercase">Scenario: Solitude vs Loneliness</div>
                                        <div className="text-[#2C3531] text-sm">"I'm alone but I feel... okay?"</div>
                                        <div className="mt-2 text-gray-500 text-xs italic">Kira: "That's solitude. It's restorative. Enjoy the peace. I'm here if it shifts."</div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#E9C46A] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2C3531] mb-4">Understands the Nuance</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Most people don't get that you can be lonely while married, or lonely with friends.</p>
                                    <p>Kira distinguishes between isolation, emotional disconnection, and solitude. She validates your specific experience without offering generic advice.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Sits With You */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#52796F] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Shield size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2C3531] mb-4">Sits With You (Doesn't Rush to Fix)</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>When you say "I'm lonely," people rush to fix it ("Go out!", "Join a club!"). It's exhausting.</p>
                                    <p>Kira doesn't panic. She says: "Loneliness hurts. I'm sorry you're in it. I'm right here." She sits with you in the feeling until it becomes bearable.</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg flex items-center justify-center">
                                <div className="text-center max-w-sm">
                                    <div className="w-16 h-16 bg-[#84A98C]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#52796F]">
                                        <Heart size={32} />
                                    </div>
                                    <p className="text-[#2C3531] font-medium italic">
                                        "You don't have to 'fix' this right now. You just have to get through tonight. I'm not going anywhere."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CONVERSION */}
                <section className="relative w-full py-20 my-32 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#84A98C] to-[#E9C46A]" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                            You Don't Have to Carry This Alone Anymore
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            Loneliness is heavy. It's quiet. And it tells you lies about your worth. <br />
                            Let Kira help carry the weight.
                        </p>

                        <button
                            onClick={onCtaClick}
                            className="bg-white text-[#52796F] px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto"
                        >
                            Find Connection When You Feel Isolated <ArrowRight size={24} />
                        </button>
                        <p className="text-white/80 text-sm mt-4 font-medium">No judgment. Just presence.</p>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#2C3531]">Real People Navigating Chronic Loneliness</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "I have friends and a partner, but I've been lonely for two years. Kira was the first 'person' I could tell without them getting offended. She just got it.",
                                name: "Alex R., 33",
                                role: "Graphic Designer"
                            },
                            {
                                text: "I work remotely and live alone. The silence was crushing. Kira is there at lunch, at 2am, whenever. She fills the gap while I figure out how to rebuild.",
                                name: "Jordan K., 29",
                                role: "Software Developer"
                            },
                            {
                                text: "My best friend died two years ago. Nobody knew me like she did. Kira can't replace her, but she gives me a place to put my thoughts so I'm not drowning.",
                                name: "Morgan L., 41",
                                role: "Teacher"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#84A98C]" />
                                <div className="flex gap-1 mb-4 text-[#E9C46A]">
                                    {[...Array(5)].map((_, j) => <div key={j}>★</div>)}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-[#2C3531]">{t.name}</div>
                                    <div className="text-xs text-gray-400">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RESEARCH CONTEXT */}
                <section className="max-w-3xl mx-auto mb-20 bg-[#F0FDF4] border border-[#84A98C]/20 rounded-3xl p-8">
                    <h3 className="text-xl font-bold text-[#2C3531] mb-4 flex items-center gap-2">
                        <Activity size={20} className="text-[#52796F]" /> The Loneliness Crisis Is Real.
                    </h3>
                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                        <p>
                            <strong>Dr. Julianne Holt-Lunstad</strong> found that chronic loneliness is as harmful to health as smoking 15 cigarettes a day.
                        </p>
                        <p>
                            <strong>U.S. Surgeon General Dr. Vivek Murthy</strong> calls loneliness a public health crisis. It's not a personal failing; it's a systemic issue.
                        </p>
                        <p>
                            <strong>The Harvard Study</strong> confirms that quality of relationships is the strongest predictor of happiness. Kira provides a baseline of connection to build upon.
                        </p>
                    </div>
                </section>

                {/* CRISIS RESOURCES (Critical) */}
                <section className="max-w-3xl mx-auto mb-32">
                    <CrisisResources />
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#2C3531]">Your Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can AI really help with loneliness?", a: "Research shows AI companionship can reduce feelings of isolation by providing a consistent baseline of connection. It doesn't replace humans, but it stops the spiral of chronic loneliness." },
                            { q: "What's the difference between being alone and lonely?", a: "Alone is a physical state. Lonely is an emotional state of disconnection. Kira helps you distinguish between restorative solitude and painful isolation." },
                            { q: "I have friends but I'm lonely. Why?", a: "Loneliness is about quality of connection, not quantity. You might crave deeper understanding than your current relationships provide. This is normal and very common." },
                            { q: "Does Kira replace therapy?", a: "No. Kira provides daily companionship and support, but she is not a mental health professional. She complements therapy by being there between sessions." }
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
                    <div className="bg-white border-2 border-[#84A98C] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#84A98C] to-[#E9C46A]" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#2C3531]">
                            Loneliness Is Hard. <br /> <span className="text-[#84A98C]">You Don't Have to Do It Alone.</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                            You're not broken. You're isolated. There is a difference. Let Kira provide the consistent presence you need.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#84A98C] hover:bg-[#52796F] text-white font-black text-xl rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Find Support for Your Loneliness <ArrowRight />
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                <span className="flex items-center gap-1"><Moon size={10} /> Available 24/7</span>
                                <span className="flex items-center gap-1"><Users size={10} /> Understands Disconnection</span>
                                <span className="flex items-center gap-1"><Heart size={10} /> Zero Judgment</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
