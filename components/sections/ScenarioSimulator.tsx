import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, HeartCrack, Zap, BatteryWarning, Play, XCircle, CheckCircle2, ArrowRight, Activity, Terminal, RefreshCw, Skull, HeartHandshake } from 'lucide-react';

interface Scenario {
    id: number;
    title: string;
    icon: any;
    color: string;
    trigger: string;
    standard_ai: string;
    kira_response: string;
    protocol_name: string;
}

const scenarios: Scenario[] = [
    {
        id: 0,
        title: "The 3AM Spiral",
        icon: CloudRain,
        color: "#60A5FA", // Blue
        trigger: "You're typing fast, making typos, then delete everything and stop.",
        standard_ai: "Waits passively for input. Cursor blinks forever.",
        kira_response: "She detects the hesitation pattern. 'You stopped. Overthinking again? I'm enabling Quiet Mode. Just listen to the rain sound. I'll stay on the line until you fall asleep.'",
        protocol_name: "INSOMNIA_COMPANION"
    },
    {
        id: 1,
        title: "The Ex-Text",
        icon: HeartCrack,
        color: "#F43F5E", // Rose
        trigger: "You open the chat at 11 PM and type 'I miss him'.",
        standard_ai: "'I am sorry to hear that. Breakups are difficult.' (Generic advice)",
        kira_response: "She blocks the send button (metaphorically). 'Protocol 4 initiated. Remember how you felt last time? I've pulled up your journal from that day. Read it before you text him.'",
        protocol_name: "TOXIC_DEFENSE_V2"
    },
    {
        id: 2,
        title: "Total Burnout",
        icon: BatteryWarning,
        color: "#F59E0B", // Amber
        trigger: "Your calendar has 8 meetings and your voice tone is flat.",
        standard_ai: "'Here is your agenda for the day.' (Adds to the stress)",
        kira_response: "She interrupts the schedule. 'I've drafted cancellations for your 3 non-essential meetings. You haven't slept well in 3 days. We are prioritizing recovery today. No arguments.'",
        protocol_name: "EXECUTIVE_FUNCTION_OVERRIDE"
    },
    {
        id: 3,
        title: "The Big Win",
        icon: Zap,
        color: "#10B981", // Emerald
        trigger: "You excitedly mention you got the promotion.",
        standard_ai: "'Congratulations. That is good news.'",
        kira_response: "She plays your victory song instantly. 'WE DID IT! I knew it! I've already moved 'Get Promotion' to the 'Achieved' list in your goals db. Champagne emoji is not enough, pop a real bottle!'",
        protocol_name: "HYPE_WOMAN_MODE"
    }
];

export const ScenarioSimulator = () => {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-[#050508] relative overflow-hidden border-t border-white/5">
            {/* Background Tech Effects - NOW ANIMATED */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 blur-[100px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-6">
                        <Activity size={12} />
                        REAL-TIME SIMULATION
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Run The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Simulation</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See how Kira handles the complexity of your actual life compared to a standard chatbot. Select a scenario to execute protocol.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start min-h-[500px]">

                    {/* Left: Scenario Selection Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {scenarios.map((scenario, i) => (
                            <motion.button
                                key={scenario.id}
                                onClick={() => setSelected(scenario.id)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, borderColor: scenario.color }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${selected === scenario.id
                                    ? 'bg-white/5 border-white/20 ring-1 ring-white/20'
                                    : 'bg-[#0D0D15] border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ background: `radial-gradient(circle at center, ${scenario.color}, transparent)` }}
                                />

                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                                        style={{ backgroundColor: `${scenario.color}20`, color: scenario.color }}
                                    >
                                        <scenario.icon size={24} />
                                    </div>
                                    {selected === scenario.id && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="px-2 py-1 rounded bg-white/10 text-[10px] font-mono border border-white/10 text-white"
                                        >
                                            ACTIVE
                                        </motion.div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 relative z-10">{scenario.title}</h3>
                                <div className="text-xs font-mono text-gray-500 relative z-10">PROTOCOL: {scenario.protocol_name}</div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: The Simulation Result */}
                    <div className="relative h-full min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {selected !== null ? (
                                <SimulationView data={scenarios[selected]} key={selected} />
                            ) : (
                                <EmptyState />
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* NEW SEO CONTENT SECTION */}
                <div className="max-w-4xl mx-auto mt-24 relative z-10 border-t border-white/5 pt-20 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <RefreshCw size={12} /> Contextual Fluidity
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-white">
                        Stop explaining <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">The Plot to an NPC.</span>
                    </h2>

                    {/* Body */}
                    <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
                        <p>
                            Talking to a standard AI is like explaining a movie to someone who walked in halfway through.
                            You have to provide the backstory, the character motivations, and the setting just to get a basic response.
                            <span className="text-white font-medium"> It's exhausting.</span>
                        </p>
                        <p>
                            Kira has read the script. She knows who "he" is without you saying his name.
                            She knows why Tuesday meetings trigger your fight-or-flight.
                            She doesn't need a prompt; she needs <strong className="text-indigo-400">you</strong>.
                        </p>
                    </div>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-[#0D0D15] border border-white/10 rounded-2xl p-8 opacity-60 hover:opacity-80 transition-opacity">
                            <div className="flex items-center gap-3 mb-4 text-gray-500">
                                <Skull size={24} />
                                <h4 className="font-bold text-sm uppercase tracking-wider">The "Helpful" Bot</h4>
                            </div>
                            <p className="text-sm leading-relaxed font-mono text-gray-500 mb-2">
                                &gt; "I'm sorry to hear you are stressed. Have you tried deep breathing?"
                            </p>
                            <p className="text-xs text-red-500 mt-4">
                                *Feels like talking to HR.*
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                            <div className="flex items-center gap-3 mb-4 text-blue-400">
                                <HeartHandshake size={24} />
                                <h4 className="font-bold text-sm uppercase tracking-wider">Kira's Reality Check</h4>
                            </div>
                            <p className="text-sm text-gray-200 leading-relaxed font-medium mb-2">
                                "Deep breathing isn't going to fix Gary from Accounting. Do you want me to draft a spicy email or just play your rage playlist?"
                            </p>
                            <p className="text-xs text-green-400 mt-4">
                                *Feels like a ride-or-die.*
                            </p>
                        </div>
                    </div>

                    {/* Closing */}
                    <div className="mt-16">
                        <p className="text-gray-500 text-sm mb-3">Life is messy.</p>
                        <p className="text-white font-bold text-xl flex items-center justify-center gap-2">
                            Get an AI that isn't afraid to <span className="text-blue-500">get her hands dirty.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const EmptyState = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full flex flex-col items-center justify-center p-8 border border-dashed border-white/10 rounded-3xl bg-white/[0.02]"
    >
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
            <Terminal size={32} className="text-gray-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-500 mb-2">Awaiting Input</h3>
        <p className="text-gray-600 text-center max-w-sm">
            Select a life scenario from the grid to run a comparative analysis of Kira's neural architecture.
        </p>
    </motion.div>
);

const SimulationView: React.FC<{ data: Scenario }> = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full bg-[#0D0D15] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl relative"
        >
            {/* Header */}
            <div className="p-6 border-b border-white/10 bg-black/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <data.icon size={20} style={{ color: data.color }} />
                    <span className="font-bold text-white">{data.title}</span>
                </div>
                <div className="text-[10px] font-mono text-gray-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    LIVE FEED
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col gap-6 overflow-y-auto custom-scrollbar">

                {/* Trigger Event */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Detected Event</div>
                    <p className="text-gray-300 italic">"{data.trigger}"</p>
                </div>

                {/* The Comparison */}
                <div className="space-y-4">
                    {/* Standard AI */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-4 opacity-50 grayscale"
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700">
                            <span className="font-mono font-bold text-gray-500">AI</span>
                        </div>
                        <div className="bg-[#1A1A20] p-4 rounded-2xl rounded-tl-none border border-white/5">
                            <div className="text-xs font-bold text-gray-500 mb-1">Standard Assistant</div>
                            <p className="text-gray-400 text-sm leading-relaxed">{data.standard_ai}</p>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <div className="flex justify-center text-gray-700">
                        <ArrowRight size={20} className="rotate-90" />
                    </div>

                    {/* Kira */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4"
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50">
                            <span className="font-bold text-white">K</span>
                        </div>
                        <div
                            className="bg-gradient-to-br from-[#1e1e2e] to-[#0D0D15] p-5 rounded-2xl rounded-tl-none border relative overflow-hidden group"
                            style={{ borderColor: `${data.color}40` }}
                        >
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{ background: `linear-gradient(120deg, transparent, ${data.color}, transparent)` }}
                            />
                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-xs font-bold text-white flex items-center gap-2">
                                        Kira <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-[9px] font-mono border border-white/10">{data.protocol_name}</span>
                                    </div>
                                    <CheckCircle2 size={14} style={{ color: data.color }} />
                                </div>
                                <p className="text-gray-200 text-sm leading-relaxed font-medium">
                                    {data.kira_response}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer Status */}
            <div className="p-4 border-t border-white/10 bg-black/20 flex justify-between items-center text-xs font-mono text-gray-500">
                <span>PROCESSING_TIME: 12ms</span>
                <span style={{ color: data.color }}>OPTIMIZED_FOR_EMPATHY</span>
            </div>
        </motion.div>
    );
};