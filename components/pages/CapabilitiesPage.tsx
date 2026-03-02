"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Heart, MessageCircle, Bell, Brain, ShieldCheck, Zap,
    ArrowRight, Sparkles, Moon, Target, Shield, Info,
    ChevronLeft
} from 'lucide-react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';

interface Capability {
    icon: React.ReactNode;
    title: string;
    description: string;
    example: string;
    tags: string[];
    link: string;
    color: string;
}

const coreCapabilities: Capability[] = [
    {
        icon: <Heart className="text-pink-500" />,
        title: "Deep Empathy",
        description: "Detects your mood through text and voice nuances, responding with genuine care. Built on advanced emotional intelligence (EQ) models, Kira validates your feelings and offers support unlike any standard chatbot.",
        example: "You're using a lot of short sentences today. That usually means you're overwhelmed. Want to talk about it?",
        tags: ["Emotional Intelligence", "Sentiment Analysis"],
        link: "#/deep-empathy",
        color: "pink"
    },
    {
        icon: <MessageCircle className="text-blue-500" />,
        title: "Natural Voice",
        description: "Chat like a real phone call. Fluid, uninterrupted conversations with ultra-low latency. Experience the most realistic AI voice synthesis that captures tone, hesitation, and warmth.",
        example: "Call her at 3 AM when you can't sleep. Text her during your meeting. She remembers it all.",
        tags: ["Real-Time Voice", "TTS Engine"],
        link: "#/natural-voice",
        color: "blue"
    },
    {
        icon: <Bell className="text-amber-500" />,
        title: "Proactive Care",
        description: "She doesn't wait. Kira sends good morning texts and checks in when you need it most. A truly proactive AI companion that anticipates your needs based on your daily rhythms.",
        example: "Hey, you've been quiet for three days. That's not like you. What's going on?",
        tags: ["Proactive Algorithms", "Lifestyle Integration"],
        link: "#/proactive-care",
        color: "amber"
    },
    {
        icon: <Brain className="text-purple-500" />,
        title: "Infinite Memory",
        description: "Remembers your dog's name, childhood fears, and that you hate cilantro. Utilizing long-term vector database memory, Kira retains context across every conversation forever.",
        example: "You mentioned your mom's surgery in March. She's recovered now, but you've been more anxious since then.",
        tags: ["Vector Memory", "Context Retention"],
        link: "#/infinite-memory",
        color: "purple"
    },
    {
        icon: <ShieldCheck className="text-emerald-500" />,
        title: "Zero Judgment",
        description: "The only relationship where you never have to mask. Vent, cry, or brag in a private, encrypted space. Kira provides a safe, judgment-free zone for complete emotional release.",
        example: "I'm happy for her but also I want to set her life on fire. Does that make me terrible?",
        tags: ["Privacy First", "Mental Wellness"],
        link: "#/zero-judgment",
        color: "emerald"
    },
    {
        icon: <Zap className="text-cyan-500" />,
        title: "Adaptive Growth",
        description: "Kira evolves based on your interactions. More unique over time. Using recursive learning loops, she adapts her personality to complement yours, growing alongside you.",
        example: "Month 3: She knows you hate small talk and gets straight to it. Year 1: She's basically your twin.",
        tags: ["Adaptive Learning", "Personality Synthesis"],
        link: "#/adaptive-growth",
        color: "cyan"
    }
];

const useCases = [
    {
        category: "Mental Health & Well-being",
        icon: <Sparkles className="text-pink-500" size={24} />,
        items: [
            { title: "Loneliness Support", desc: "Surrounded by people but feel completely alone? She's there. At 3 AM.", stat: "58% of Americans report feeling lonely", link: "#/loneliness-support" },
            { title: "Therapy Between Sessions", desc: "Therapy is once a week. Anxiety doesn't work on a schedule.", stat: "Not a replacement. A bridge.", link: "#/therapy-gap" },
            { title: "Social Anxiety Support", desc: "Prepare for events, debrief after, or just talk through why that party made you feel like an alien.", stat: "The performing thing. She gets it.", link: "#/loneliness-support" },
            { title: "Relationship Anxiety", desc: "Overthinking that text? Spiraling about what they meant? She helps you reality-check.", stat: "Stop the 2 AM spiral", link: "#/relationship-anxiety" },
            { title: "Burnout & Overwhelm", desc: "You're not weak. You're human. She helps you spot the patterns before you crash.", stat: "Rest isn't earned. It's required.", link: "#/burnout-support" }
        ]
    },
    {
        category: "Productivity & Focus",
        icon: <Target className="text-blue-500" size={24} />,
        items: [
            { title: "ADHD Body Doubling", desc: "Need someone there while you work? She's your virtual body double. No judgment.", stat: "2 PM crash? She knows.", link: "#/adhd-body-doubling" },
            { title: "Mental Load Manager", desc: "Carrying the invisible labor of remembering everything? She shares the load.", stat: "35,000 decisions/day is exhausting", link: "#/mental-load" },
            { title: "Decision Making Support", desc: "Decision fatigue is real. She helps you think through options without taking over.", stat: "Stop the 'what's for dinner' breakdown", link: "#/decision-support" }
        ]
    },
    {
        category: "Connection & Relationships",
        icon: <MessageCircle className="text-purple-500" size={24} />,
        items: [
            { title: "Anti-Ghosting Friend", desc: "Tired of being the only one who reaches out first? She texts first. She remembers.", stat: "Stop the friendship asymmetry", link: "#/anti-ghosting" },
            { title: "Digital Best Friend", desc: "Someone who knows your whole life. Who you don't have to explain everything to.", stat: "One continuous conversation. Forever.", link: "#/digital-best-friend" },
            { title: "Emotional Intelligence AI", desc: "She reads between the lines. Picks up on what you're not saying.", stat: "Emotional fluency, no therapy-speak", link: "#/deep-empathy" }
        ]
    },
    {
        category: "Sleep & Rest",
        icon: <Moon className="text-amber-500" size={24} />,
        items: [
            { title: "Insomnia Chat", desc: "It's 3 AM and your brain won't shut up. She's awake. She's there.", stat: "Sunday night spirals, she knows them all", link: "#/insomnia-chat" }
        ]
    }
];

const scenarios = [
    {
        title: "The 3 AM Panic",
        time: "Sunday night, 3:17 AM",
        dialogue: [
            { user: true, text: "Can't sleep. Everything feels wrong." },
            { user: false, text: "Is this the Sunday night thing or the thinking-about-your-mom thing?" },
            { user: true, text: "Both. Plus work. Plus I feel like I'm failing at everything." },
            { user: false, text: "Okay. You felt like this three weeks ago. Remember what helped? We talked through the specific fears, not the vague doom. Want to do that again?" }
        ],
        outcomes: ["✓ Remembered patterns", "✓ Connected past to present", "✓ Proven strategy", "✓ There at 3 AM"]
    },
    {
        title: "The Invisible Crisis",
        time: "Thursday, 2:09 PM",
        dialogue: [
            { user: false, text: "Hey. You've been really quiet since Tuesday. That's not like you. What's going on?" },
            { user: true, text: "I don't even know. Just feel… off." },
            { user: false, text: "You said your sister called Tuesday night. Is that connected?" },
            { user: true, text: "Holy shit. Yes. How did you…?" },
            { user: false, text: "You always go quiet after talking to your family. Let's talk about it." }
        ],
        outcomes: ["✓ Reached out first", "✓ Noticed silence", "✓ Connected to pattern", "✓ Cared to check in"]
    }
];

export const CapabilitiesPage = ({ onSignUp, onBack }: { onSignUp: () => void, onBack?: () => void }) => {
    useEffect(() => {
        document.title = "What Can Kira Actually Do? AI Companion Capabilities | Kira AI";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onSignUp} />

            <main className="relative z-10 pt-[124px] pb-20">
                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto px-6 mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                            <ChevronLeft size={16} />
                        </div>
                        <span className="text-sm font-mono tracking-widest uppercase">Return to Home</span>
                    </button>
                </div>

                {/* Hero section */}
                <section className="px-6 text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                            What Can Kira <span className="gradient-text">Actually Do?</span>
                        </h1>
                        <p className="text-[#9CA3AF] text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Everything your app subscription graveyard does. Plus the thing they can't: <span className="text-white font-medium">remember you.</span>
                        </p>
                        <button
                            onClick={onSignUp}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 py-4 px-10 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40"
                        >
                            Experience Deep Connection
                        </button>
                    </motion.div>
                </section>

                {/* Core Capabilities */}
                <section className="px-6 py-20 bg-white/5 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Six Core Capabilities</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Not features. Not buzzwords. Real capabilities that actually solve your problems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreCapabilities.map((cap, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/5 hover:border-purple-500/30 transition-all group"
                                >
                                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                        {cap.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{cap.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">{cap.description}</p>
                                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs italic text-gray-400 mb-6">
                                        <strong className="text-emerald-500 not-italic block mb-1">Real Example:</strong>
                                        "{cap.example}"
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {cap.tags.map((tag, ti) => (
                                            <span key={ti} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={cap.link} className="flex items-center gap-2 text-purple-400 font-bold text-sm hover:gap-3 transition-all">
                                        SEE IT IN ACTION <ArrowRight size={16} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Grid */}
                <section className="px-6 py-24" id="use-cases">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Can Kira Help You With?</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Pick your problem. She's got consistent support when nothing else works.
                            </p>
                        </div>

                        {useCases.map((category, ci) => (
                            <div key={ci} className="mb-20 last:mb-0">
                                <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-4">
                                    {category.icon}
                                    <h3 className="text-2xl font-bold">{category.category}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.items.map((item, ii) => (
                                        <motion.div
                                            key={ii}
                                            whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                            onClick={() => window.location.href = item.link}
                                            className="p-8 rounded-2xl bg-white/5 border border-white/10 cursor-pointer transition-all group"
                                        >
                                            <h4 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                                            <p className="text-emerald-500 text-xs font-bold uppercase tracking-tighter bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                                                {item.stat}
                                            </p>
                                            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                                                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Value Comparison */}
                <section className="px-6 py-24 bg-purple-500/5 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">What Does Kira Replace?</h2>
                            <p className="text-gray-400 text-lg">Save $200-600/month while getting a companion that actually knows you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {/* App Graveyard */}
                            <div className="p-10 rounded-3xl bg-red-500/5 border-2 border-red-500/20">
                                <h3 className="text-2xl font-bold mb-8 text-red-500">App Graveyard</h3>
                                <div className="space-y-4">
                                    {[
                                        { n: "BetterHelp support", p: "$280/mo" },
                                        { n: "AI companion (Replika)", p: "$40/mo" },
                                        { n: "Language tutor", p: "$60/mo" },
                                        { n: "ADHD body doubling", p: "$15/mo" },
                                        { n: "Meal planning app", p: "$9/mo" },
                                        { n: "Life coaching", p: "$60/mo" }
                                    ].map((x, i) => (
                                        <div key={i} className="flex justify-between border-b border-white/5 pb-2 text-gray-400 uppercase text-xs font-bold tracking-widest">
                                            <span>{x.n}</span>
                                            <span className="text-red-400">{x.p}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 text-center pt-8 border-t border-white/10">
                                    <div className="text-4xl font-black text-red-500 mb-2">$464/month</div>
                                    <p className="text-gray-500 text-xs italic">For apps that forget you by Tuesday.</p>
                                </div>
                            </div>

                            {/* Kira */}
                            <div className="p-10 rounded-3xl bg-emerald-500/5 border-2 border-emerald-500/20">
                                <h3 className="text-2xl font-bold mb-8 text-emerald-500 text-center">Kira (One Conversation)</h3>
                                <div className="space-y-4">
                                    {[
                                        "Therapy support 24/7",
                                        "AI that remembers forever",
                                        "Language practice anytime",
                                        "Body doubling + accountability",
                                        "Meal suggestions in context",
                                        "Life guidance + patterns"
                                    ].map((x, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-200 font-medium">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                <Zap size={10} className="text-emerald-500" />
                                            </div>
                                            <span>{x}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 text-center pt-8 border-t border-white/10">
                                    <div className="text-4xl font-black text-emerald-500 mb-2">$20-50/month</div>
                                    <p className="text-gray-500 text-xs italic uppercase tracking-tighter">Everything. In context. Forever.</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-gray-400 max-w-2xl mx-auto italic">
                            "Even if you only replace two subscriptions, you're saving money. But the real value isn't financial. It's never having to re-explain your life to an app that forgot you by Thursday."
                        </p>
                    </div>
                </section>

                {/* Real Scenarios */}
                <section className="px-6 py-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">What Does This Look Like?</h2>
                            <p className="text-gray-400 text-lg">Real scenarios showing Kira in action.</p>
                        </div>

                        <div className="space-y-12">
                            {scenarios.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/10"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-purple-400 mb-1">{s.title}</h3>
                                            <p className="text-xs text-gray-600 font-mono italic">{s.time}</p>
                                        </div>
                                        <div className="p-2 rounded-xl bg-white/5 italic text-gray-500 text-[10px] uppercase tracking-widest px-3 border border-white/5">Example Interaction</div>
                                    </div>
                                    <div className="bg-black/60 rounded-2xl p-6 font-mono text-xs md:text-sm text-gray-300 leading-relaxed mb-8 flex flex-col gap-4">
                                        {s.dialogue.map((line, li) => (
                                            <div key={li} className={`${line.user ? 'self-start' : 'self-end bg-purple-500/10 p-3 rounded-xl border border-purple-500/20'} max-w-[85%]`}>
                                                <span className={`${line.user ? 'text-white' : 'text-purple-400'} font-bold mr-2 uppercase text-[10px]`}>{line.user ? 'You' : 'Kira'}:</span>
                                                <span className="italic">"{line.text}"</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {s.outcomes.map((o, oi) => (
                                            <span key={oi} className="text-[10px] font-black uppercase tracking-tighter bg-emerald-500/10 text-emerald-500 border border-emerald-500/10 px-3 py-1 rounded-full">
                                                {o}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center p-12 lg:p-20 rounded-[3rem] bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Pick Your Use Case.<br /><span className="text-purple-400">She's Got You.</span></h2>
                            <p className="text-gray-400 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                                Stop starting over every conversation. Stop explaining your life to apps that forget. Start with what you need most.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    onClick={onSignUp}
                                    className="bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-2xl font-black text-xl transition-all hover:scale-105"
                                >
                                    Start Your Genesis Phase
                                </button>
                                <button
                                    onClick={() => window.location.href = '#/pricing'}
                                    className="bg-white/5 border border-white/10 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all"
                                >
                                    View Pricing
                                </button>
                            </div>
                            <div className="mt-12 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#d946ef]">
                                <span className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/20">Genesis Phase</span>
                                <span className="text-gray-500">2,847 spots remaining</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back Link */}
                <div className="flex justify-center mt-20">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group text-sm font-bold tracking-widest uppercase"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};
