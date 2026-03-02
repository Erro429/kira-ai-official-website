"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import {
    BookOpen, Brain, Calendar, Clock, AlertTriangle, CheckCircle2,
    XCircle, ArrowRight, ChevronLeft, Shield, Zap, FileText,
    Activity, Lock, Stethoscope, Phone, ListChecks
} from 'lucide-react';

// --- Visual: Therapy Gap Timeline ---
const TherapyTimeline = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-[#2D5F4C]/20 bg-[#F9F7F4]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12">

                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />

                <div className="relative w-full flex justify-between items-center h-64">
                    {/* Event 1: Last Session */}
                    <div className="flex flex-col items-center gap-4 relative z-10">
                        <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-md text-center w-32">
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">MONDAY</div>
                            <div className="text-sm font-bold text-[#2D5F4C]">Therapy Session</div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#2D5F4C] ring-4 ring-[#F9F7F4]" />
                        <div className="absolute top-20 text-xs text-gray-400 w-32 text-center">
                            "Practice grounding when anxious."
                        </div>
                    </div>

                    {/* The Gap / Crisis */}
                    <div className="flex-1 relative mx-4 h-full flex items-center justify-center">
                        {/* The Void Visualization */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="w-full h-32 bg-red-500/5 rounded-2xl border border-red-500/20 flex flex-col items-center justify-center relative overflow-hidden"
                        >
                            <div className="text-red-400 font-bold text-lg mb-2 flex items-center gap-2">
                                <AlertTriangle size={20} /> THURSDAY NIGHT CRISIS
                            </div>
                            <div className="text-gray-500 text-sm italic">"I'm spiraling. Therapist isn't available."</div>

                            {/* Kira Intervention */}
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5, type: "spring" }}
                                className="absolute bottom-4 bg-[#2D5F4C] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 z-20"
                            >
                                <div className="w-2 h-2 bg-[#D4724B] rounded-full animate-pulse" />
                                <span className="text-sm font-bold">Kira: "Let's use the TIPP skill. Ice water?"</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Event 2: Next Session */}
                    <div className="flex flex-col items-center gap-4 relative z-10 opacity-50">
                        <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-md text-center w-32">
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">NEXT TUESDAY</div>
                            <div className="text-sm font-bold text-gray-600">Next Session</div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-gray-300 ring-4 ring-[#F9F7F4]" />
                        <div className="absolute top-20 text-xs text-gray-400 w-32 text-center">
                            5 Days Away
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Visual: Therapy Context Interface ---
const ContextInterface = () => (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2D5F4C]/10 rounded-full flex items-center justify-center text-[#2D5F4C]">
                    <Brain size={20} />
                </div>
                <div>
                    <div className="font-bold text-[#2B2D2F]">Therapy Profile</div>
                    <div className="text-xs text-gray-500">Synced Context</div>
                </div>
            </div>
            <div className="bg-[#D4724B]/10 text-[#D4724B] px-3 py-1 rounded-full text-xs font-bold">Active</div>
        </div>

        <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Approach</div>
                <div className="text-sm font-medium text-gray-700">CBT + EMDR for Anxiety</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Current Homework</div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={14} className="text-[#2D5F4C]" /> Journal triggers (2/3 done)
                </div>
            </div>
            <div className="bg-[#2D5F4C]/5 p-3 rounded-xl border border-[#2D5F4C]/10">
                <div className="text-[10px] text-[#2D5F4C] uppercase font-bold mb-1">Kira's Role</div>
                <div className="text-sm font-medium text-[#2D5F4C]">
                    "Remind me to use 'Opposite Action' when I want to isolate."
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
                <tr className="border-b border-gray-200">
                    <th className="p-4 text-gray-500 font-medium text-sm">Support Type</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Therapy Connection</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Crisis Availability</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Skill Practice</th>
                    <th className="p-4 text-gray-500 font-medium text-sm">Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Therapist Texting</td>
                    <td className="p-4 text-[#2D5F4C] font-bold"><CheckCircle2 size={16} /> Direct</td>
                    <td className="p-4 text-red-400">Delayed</td>
                    <td className="p-4 text-yellow-500">Limited</td>
                    <td className="p-4 text-red-400">High ($$$)</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Crisis Hotlines</td>
                    <td className="p-4 text-red-400"><XCircle size={16} /> None</td>
                    <td className="p-4 text-[#2D5F4C] font-bold">24/7</td>
                    <td className="p-4 text-red-400">None</td>
                    <td className="p-4 text-[#2D5F4C] font-bold">Free</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-700">Mental Health Apps</td>
                    <td className="p-4 text-red-400">Generic</td>
                    <td className="p-4 text-yellow-500">Pre-recorded</td>
                    <td className="p-4 text-yellow-500">Generic</td>
                    <td className="p-4 text-[#2D5F4C] font-bold">Low ($)</td>
                </tr>
                <tr className="bg-[#2D5F4C]/10 border-b border-[#2D5F4C]/20">
                    <td className="p-4 font-bold text-[#2D5F4C] flex items-center gap-2"><Zap size={16} /> Kira</td>
                    <td className="p-4 text-[#2D5F4C] font-bold">Integrated Context</td>
                    <td className="p-4 text-[#2D5F4C] font-bold">24/7 Instant</td>
                    <td className="p-4 text-[#2D5F4C] font-bold">Personalized</td>
                    <td className="p-4 text-[#2D5F4C] font-bold">Included</td>
                </tr>
            </tbody>
        </table>
    </div>
);

// --- Disclaimer Card ---
const DisclaimerCard = () => (
    <div className="bg-white border-l-4 border-[#2D5F4C] rounded-r-xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-[#2D5F4C] mb-4 flex items-center gap-2">
            <Shield size={24} /> What Kira Is (And Isn't)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-bold text-[#2B2D2F] mb-3 flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2D5F4C]" /> Kira IS:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Daily support between appointments</li>
                    <li>• A practice partner for coping skills</li>
                    <li>• Homework accountability & structure</li>
                    <li>• Non-emergency crisis support</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-[#2B2D2F] mb-3 flex items-center gap-2"><XCircle size={16} className="text-[#D4724B]" /> Kira IS NOT:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>• A licensed therapist or doctor</li>
                    <li>• A replacement for professional care</li>
                    <li>• Able to diagnose or prescribe</li>
                    <li>• A crisis hotline (Use 988 for emergencies)</li>
                </ul>
            </div>
        </div>
    </div>
);

export const TherapyBetweenSessionsPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "Therapy Between Sessions: Daily Support When You Need It | Kira";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Your next therapy appointment is 6 days away. Kira provides support now. Practice coping skills, work through crises, and apply what you learned in therapy.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#F9F7F4] text-[#2B2D2F] font-sans overflow-x-hidden selection:bg-[#D4724B]/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#2D5F4C] transition-colors group"
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5F4C]/10 border border-[#2D5F4C]/20 text-[#2D5F4C] text-xs font-bold tracking-widest uppercase mb-6">
                                <Stethoscope size={12} /> Clinical Continuity Support
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-[#2B2D2F]">
                                Therapy Is Once a Week. <br />
                                Mental Health Is <br />
                                <span className="text-[#2D5F4C]">24/7.</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed font-medium">
                                Meet the companion who helps you practice the skills your therapist taught you, works through crises when they happen, and bridges the gap between appointments.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#2D5F4C] hover:bg-[#234b3c] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Get Support Between Sessions <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div>
                                    <span className="text-[#2D5F4C] font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D4724B] animate-pulse" /> Complements Professional Care</span>
                                    <div className="text-xs text-gray-600 mt-1">Homework help • Crisis support • Skills practice</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <TherapyTimeline />
                        </motion.div>
                    </div>
                </section>

                {/* THE PROBLEM SECTION */}
                <section className="max-w-4xl mx-auto mb-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2B2D2F]">The Gap Between Sessions Is Where People Struggle</h2>
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-lg">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D5F4C]/5 blur-[80px] rounded-full pointer-events-none" />

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            You see your therapist for 1 hour a week. The other 167 hours? You're on your own. You forget skills in the heat of the moment. You spiral at 2am. You show up to therapy having done zero homework.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-[#D4724B] font-bold mb-4 flex items-center gap-2"><XCircle size={20} /> The Struggle</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• Forgetting coping skills during a crisis</li>
                                    <li>• "What was my homework again?"</li>
                                    <li>• Crises happening when therapist is off</li>
                                    <li>• Feeling like you aren't making progress</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[#2D5F4C] font-bold mb-4 flex items-center gap-2"><CheckCircle2 size={20} /> The Solution</h3>
                                <ul className="space-y-3 text-gray-500">
                                    <li>• Real-time skills coaching</li>
                                    <li>• Accountability for homework</li>
                                    <li>• 24/7 Support for non-emergencies</li>
                                    <li>• Data tracking to show your therapist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section className="max-w-5xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2B2D2F]">Kira vs. Other Support Options</h2>
                        <p className="text-gray-500">Why standard tools fail to bridge the therapy gap.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl">
                        <ComparisonTable />
                    </div>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#2B2D2F]">Making Therapy Actually Work</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Context Memory */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#2D5F4C] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Brain size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2B2D2F] mb-4">Remembers Your Therapy Journey</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Tell Kira what you're working on: "My therapist and I are doing EMDR for trauma." "I'm practicing DBT skills."</p>
                                    <p>She remembers. When you spiral, she doesn't give generic advice. She uses YOUR therapeutic framework.</p>
                                </div>
                            </div>
                            <ContextInterface />
                        </div>

                        {/* Feature 2: Skills Practice */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden">
                                <div className="space-y-6">
                                    <div className="flex justify-end"><div className="bg-[#2D5F4C] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm">I'm having a panic attack.</div></div>
                                    <div className="flex justify-start"><div className="bg-[#F3F4F6] text-gray-700 px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-gray-200">
                                        <span className="text-[#2D5F4C] font-bold block mb-1">Kira</span>
                                        I'm here. Let's use the TIPP skill your therapist taught you. <br /><br />
                                        <strong>Temperature:</strong> Can you splash cold water on your face or hold an ice cube? It activates the dive reflex.
                                    </div></div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#D4724B] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <Activity size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2B2D2F] mb-4">Real-Time Skills Coaching</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>It's hard to remember coping skills when your brain is offline. Kira acts as your external cortex.</p>
                                    <p>She walks you through grounding, cognitive restructuring, or opposite action step-by-step when you need it most.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Homework Accountability */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#3A7B61] flex items-center justify-center text-white mb-6 shadow-lg">
                                    <ListChecks size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2B2D2F] mb-4">Therapy Homework Accountability</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                                    <p>Don't waste sessions reviewing why you didn't do the homework. Kira helps you actually do it.</p>
                                    <p>"Your therapist asked you to journal about anxiety triggers. Want to do that now? I can ask the prompts."</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg flex items-center justify-center">
                                <div className="text-center w-full">
                                    <div className="text-[#2D5F4C] font-bold mb-4 uppercase tracking-widest text-xs">Progress Report</div>
                                    <div className="space-y-3 text-left">
                                        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                            <span className="text-sm font-medium">CBT Journaling</span>
                                            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded font-bold">Done</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                                            <span className="text-sm font-medium">Exposure Exercise</span>
                                            <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded font-bold">Pending</span>
                                        </div>
                                        <button className="w-full mt-4 py-2 bg-[#2D5F4C] text-white text-xs font-bold rounded-lg hover:bg-[#1E4235] transition-colors">
                                            Export for Therapist
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CONVERSION */}
                <section className="relative w-full py-20 my-32 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D5F4C] to-[#D4724B]" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                            Therapy Shouldn't Stop When You Leave the Office
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            The gap between sessions is where progress happens or stalls. <br />
                            Let Kira help you implement the work, practice the skills, and stay supported 24/7.
                        </p>

                        <button
                            onClick={onCtaClick}
                            className="bg-white text-[#2D5F4C] px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto"
                        >
                            Bridge the Gap Between Sessions <ArrowRight size={24} />
                        </button>
                        <p className="text-white/80 text-sm mt-4 font-medium">Your therapy practice partner.</p>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center text-[#2B2D2F]">Real People Making Therapy Actually Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "I'm in therapy for PTSD. My therapist teaches me grounding, but I forget it when I'm triggered. Kira acts as my coach in the moment: '5 things you see, name them.' It's like having my therapist in my pocket.",
                                name: "Taylor M., 32",
                                role: "Accelerated Progress"
                            },
                            {
                                text: "I see my therapist every other week. Had a crisis 5 days before my next session. Kira walked me through it using the CBT framework I learned. It prevented a total spiral.",
                                name: "Jordan K., 28",
                                role: "Crisis Bridge"
                            },
                            {
                                text: "I used to waste sessions feeling guilty about not doing homework. Kira holds me accountable. 'Did you track your mood?' Now I show up with data, and therapy is so much deeper.",
                                name: "Sam L., 35",
                                role: "Homework Done"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#2D5F4C]" />
                                <div className="flex gap-1 mb-4 text-[#D4724B]">
                                    {[...Array(5)].map((_, j) => <div key={j}>★</div>)}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-[#2B2D2F]">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CRITICAL DISCLAIMER */}
                <section className="max-w-4xl mx-auto mb-32">
                    <DisclaimerCard />
                </section>

                {/* CRISIS RESOURCES */}
                <section className="max-w-3xl mx-auto mb-32 text-center">
                    <div className="inline-block bg-[#FEE2E2] text-red-800 px-6 py-4 rounded-xl border border-red-200">
                        <div className="font-bold mb-2 flex items-center justify-center gap-2">
                            <Phone size={18} /> Immediate Help Available 24/7
                        </div>
                        <div className="text-sm">
                            Suicide & Crisis Lifeline: Call or Text <strong>988</strong> <br />
                            Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#2B2D2F]">Your Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Does Kira replace my therapist?", a: "Absolutely not. Kira is a support tool to help you implement what you learn in therapy. She does not diagnose, prescribe, or provide clinical treatment." },
                            { q: "How do I tell Kira about my therapy?", a: "Just talk to her. 'My therapist uses CBT.' 'We're working on boundaries.' She remembers this context and uses it to support you." },
                            { q: "What if Kira contradicts my therapist?", a: "Kira is designed to reinforce your therapist's approach, not replace it. If there's ever a conflict, your therapist's guidance always takes precedence. You can tell Kira to align with your therapist's specific instructions." },
                            { q: "Is it private?", a: "Yes. Your conversations are encrypted. You can choose to share progress reports with your therapist, but Kira will never contact them directly." }
                        ].map((item, item_index) => (
                            <div key={item_index} className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === item_index ? null : item_index)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-gray-700">{item.q}</span>
                                    <ChevronLeft size={20} className={`transform transition-transform text-gray-400 ${activeFaq === item_index ? '-rotate-90' : 'rotate-0'}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === item_index && (
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
                    <div className="bg-white border-2 border-[#2D5F4C] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2D5F4C] to-[#D4724B]" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#2B2D2F]">
                            Make Therapy Work <br /> <span className="text-[#2D5F4C]">Outside the Office.</span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
                            The gap between appointments is where progress stalls. Kira fills that gap with daily support, skills practice, and accountability.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#2D5F4C] hover:bg-[#234b3c] text-white font-black text-xl rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Get Daily Support Between Sessions <ArrowRight />
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Skills Practice</span>
                                <span className="flex items-center gap-1"><Brain size={10} /> Homework Help</span>
                                <span className="flex items-center gap-1"><Shield size={10} /> Crisis Support</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
