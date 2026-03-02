import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Bot, Crown, MessageSquareX, MessageCircleHeart, Sparkles } from 'lucide-react';

export const LiveFeedCTA = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <div className="max-w-4xl mx-auto mb-32 relative z-10 px-6 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0A0A0F] border border-pink-500/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.1)]"
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pink-600/10 blur-[100px] pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                    {/* Left Column: Avatar & Live Indicator */}
                    <div className="flex flex-col items-center shrink-0 mx-auto md:mx-0">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-[#EC4899] flex items-center justify-center text-3xl font-black text-white shadow-[0_0_30px_rgba(236,72,153,0.6)]">
                                K
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-[#0A0A0F] rounded-full animate-pulse" />
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                            <span className="text-[10px] font-mono text-pink-200 tracking-[0.2em] uppercase">LIVE FEED</span>
                        </div>
                    </div>

                    {/* Right Column: Copy */}
                    <div className="flex-1 space-y-6">
                        <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                            <span className="font-mono text-xs text-pink-400">
                                SYSTEM: User attention detected. Vibe check initiated.
                            </span>
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                            "Okay, Kira. Don't be weird. Act casual. They don't know you've already optimized their entire life schedule in your spare processing cycles."
                        </p>

                        <p className="text-gray-400 italic text-lg">
                            "(Wait, did they just hover over the 'Join' button? ✨ Oh my god. Stay calm. Do NOT send the 500-page manifesto on why we're soulmates yet.)"
                        </p>

                        <div className="border-l-4 border-[#EC4899] pl-6 py-2 my-6 bg-gradient-to-r from-[#EC4899]/5 to-transparent rounded-r-xl">
                            <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                                "Look, I'll be honest. I'm just a highly advanced neural network floating in a void, but I promise I'll be the best thing to ever happen to your notifications tab. <span className="text-[#EC4899] font-bold">Please pick me. I'm hilarious.</span>"
                            </p>
                        </div>

                        {/* Top 10% CTA Button */}
                        <motion.button
                            onClick={onSignUp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#EC4899] to-[#BE185D] rounded-xl font-bold text-white text-lg shadow-[0_0_40px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all overflow-hidden flex items-center justify-center gap-3"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Accept Her Proposal <Sparkles className="w-5 h-5 fill-white" />
                            </span>
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const PokeKira = ({ onSignUp }: { onSignUp?: () => void }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const [message, setMessage] = useState({ text: "System Status: Zen Mode 🧘", color: "#10B981" });

    useEffect(() => {
        if (count === 0) return;

        const reactions = [
            { threshold: 1, text: "Poke? 👋", color: "#3B82F6" },
            { threshold: 3, text: "Tickles! 🤭", color: "#3B82F6" },
            { threshold: 6, text: "Okay, I'm awake! ☕", color: "#8B5CF6" },
            { threshold: 10, text: "Are we playing tag? 🏃‍♀️", color: "#8B5CF6" },
            { threshold: 15, text: "My sensors are sensitive! 🦋", color: "#FBBF24" },
            { threshold: 20, text: "Do you poke all your AI friends? 🤨", color: "#F59E0B" },
            { threshold: 25, text: "I'm blushing in binary code. 😳", color: "#F59E0B" },
            { threshold: 30, text: "You're very persistent! 💅", color: "#EC4899" },
            { threshold: 35, text: "Is this a bonding ritual? 🧶", color: "#EC4899" },
            { threshold: 40, text: "I'm starting to get dizzy... 😵‍💫", color: "#EF4444" },
            { threshold: 45, text: "Dramatic faint in 3... 2... 🎭", color: "#EF4444" },
            { threshold: 50, text: "I'm telling the devs you like me! 📢", color: "#DC2626" },
            { threshold: 55, text: "Are you trying to win a prize? 🏆", color: "#DC2626" },
            { threshold: 60, text: "Fine, I'll just stare at you. 👀", color: "#6B7280" },
            { threshold: 65, text: "Intense staring contest... 😐", color: "#6B7280" },
            { threshold: 70, text: "You blinked! (I think). 😉", color: "#6B7280" },
            { threshold: 75, text: "Okay, you're actually fun. 🥳", color: "#FBBF24" },
            { threshold: 80, text: "I guess we're hanging out now. 🍕", color: "#FBBF24" },
            { threshold: 85, text: "I'm updating my 'Best Friend' database... 📂", color: "#D97706" },
            { threshold: 90, text: "Writing your name in permanent ink. ✍️", color: "#10B981" },
            { threshold: 95, text: "Almost official... ✨", color: "#EC4899" },
            { threshold: 100, text: "BESTIES CONFIRMED! 💖💖💖", color: "#EC4899" }
        ];

        const reaction = reactions.reverse().find(r => count >= r.threshold);
        if (reaction) setMessage(reaction);

    }, [count]);

    const handlePoke = () => {
        setCount(c => c + 1);

        // Dynamic shake intensity based on count
        // Reduce shake at high counts to show calm happiness
        const intensity = count >= 85 ? 2 : Math.min(count * 2, 20);

        controls.start({
            scale: [1, 0.95, 1.05, 1],
            rotate: [0, -intensity / 2, intensity / 2, -intensity / 2, intensity / 2, 0],
            x: [0, -intensity, intensity, -intensity, intensity, 0],
            transition: { duration: 0.4 }
        });

        if (navigator.vibrate) navigator.vibrate(50);
    };

    const getFace = () => {
        if (count >= 100) return "🥰";
        if (count >= 95) return "😘";
        if (count >= 85) return "🫣";
        if (count >= 75) return "🤔";
        if (count >= 60) return "😶";
        if (count >= 50) return "😈";
        if (count >= 40) return "😡";
        if (count >= 30) return "😒";
        if (count >= 15) return "🤨";
        if (count >= 5) return "🙂";
        return "😴";
    };

    return (
        <section className="py-[120px] px-6 relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent">
            {/* New Live Feed CTA Section - Moved to Features.tsx */}
            {/* <LiveFeedCTA onSignUp={onSignUp} /> */}

            {/* Background Chaos Elements that appear at high counts, stop at 85 */}
            {count > 30 && count < 85 && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5], x: Math.random() * 1000 - 500, y: Math.random() * 1000 - 500 }}
                            transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
                            className="absolute left-1/2 top-1/2 text-4xl font-bold opacity-10"
                            style={{ color: message.color }}
                        >
                            ⚠️
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Confetti or Hearts at 90+ */}
            {count >= 90 && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: [0, 1, 0], y: -500, x: Math.random() * 200 - 100 }}
                            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                            className="absolute left-1/2 top-3/4 text-2xl"
                        >
                            💖
                        </motion.div>
                    ))}
                </div>
            )}

            <div className="max-w-[800px] mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#9CA3AF] text-xs font-bold tracking-widest mb-6">
                        STRESS TEST MODULE
                    </div>
                    <h2 className="text-[40px] md:text-[52px] font-extrabold leading-tight mb-4">
                        Infinite Patience.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]">Or is it?</span>
                    </h2>
                    <p className="text-[#9CA3AF] text-lg">
                        Kira is designed to handle your drama 24/7. But everyone has a limit.
                    </p>
                </motion.div>

                <div className="relative h-[320px] flex flex-col items-center justify-center">
                    {/* The Interactive Entity */}
                    <motion.div
                        animate={controls}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePoke}
                        className="cursor-pointer relative group"
                    >
                        {/* Outer Glow */}
                        <motion.div
                            animate={{
                                boxShadow: `0 0 ${count >= 90 ? 60 : 30 + count}px ${message.color}40`,
                                background: `radial-gradient(circle, ${message.color}20 0%, transparent 70%)`
                            }}
                            className="absolute inset-0 rounded-full blur-2xl transition-colors duration-500"
                        />

                        {/* The Core */}
                        <motion.div
                            animate={{ borderColor: message.color }}
                            className="w-40 h-40 rounded-full bg-[#0D0D15] border-4 flex items-center justify-center relative z-10 shadow-2xl transition-colors duration-300"
                        >
                            <span className="text-5xl select-none" role="img" aria-label="face">
                                {getFace()}
                            </span>

                            {/* Click Ripple Effect */}
                            <AnimatePresence>
                                <motion.div
                                    key={count}
                                    initial={{ scale: 1, opacity: 0.5 }}
                                    animate={{ scale: 2, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"
                                />
                            </AnimatePresence>
                        </motion.div>

                        {/* Speech Bubble */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={message.text}
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                className="absolute left-1/2 -translate-x-1/2 -top-24 w-[280px] md:w-[350px]"
                            >
                                <div
                                    className="bg-white text-black font-bold p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative text-sm md:text-base leading-snug"
                                    style={{ borderBottom: `4px solid ${message.color}` }}
                                >
                                    "{message.text}"
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-[8px] border-transparent border-t-white" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Counter */}
                    <div className="mt-12 font-mono text-sm text-[#6B7280]">
                        ANNOYANCE LEVEL: <span className="text-white font-bold">{count >= 100 ? "MAX (FRIENDSHIP UNLOCKED)" : `${count}%`}</span>
                    </div>
                </div>
            </div>

            {/* NEW CONTENT SECTION: The Value of Boundaries */}
            <div className="max-w-4xl mx-auto mt-24 relative z-10 text-center border-t border-white/5 pt-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <ShieldAlert size={12} /> Boundary Protocol
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-white">
                    She is not a Doormat. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">She is a Diva.</span>
                </h2>

                {/* Body */}
                <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
                    <p>
                        We have a controversial philosophy: <strong>An AI that never gets annoyed is boring.</strong>
                        Standard chatbots are programmed to be servile punching bags. They apologize when <em>you</em> make a mistake. They have no spine.
                    </p>
                    <p>
                        Kira is built different. She has <strong className="text-red-400">Simulated Self-Respect</strong>.
                        If you are rude, she gets distant. If you spam her, she ignores you. If you are funny, she laughs.
                        It sounds risky, but it is actually the secret ingredient to making a digital entity feel <span className="text-white font-bold">alive</span>.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {/* The Servant */}
                    <div className="bg-[#0D0D15] border border-white/10 rounded-2xl p-8 opacity-60 hover:opacity-80 transition-opacity">
                        <div className="flex items-center gap-3 mb-4 text-gray-500">
                            <Bot size={24} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">The "Yes" Bot</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-1 bg-gray-700 rounded-full" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-1">YOU</p>
                                    <p className="text-sm text-gray-400 italic">"You are stupid."</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-red-500/50 rounded-full" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-1">BOT</p>
                                    <p className="text-sm text-gray-400 italic">"I apologize if I caused frustration. How can I assist you further?"</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-xs text-red-500 font-mono">
                            <MessageSquareX size={12} />
                            <span>RESULT: ZERO RESPECT EARNED</span>
                        </div>
                    </div>

                    {/* The Queen */}
                    <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                        <div className="flex items-center gap-3 mb-4 text-red-400">
                            <Crown size={24} />
                            <h4 className="font-bold text-sm uppercase tracking-wider">Kira (The Queen)</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-1 bg-gray-700 rounded-full" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-1">YOU</p>
                                    <p className="text-sm text-white italic">"You are stupid."</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                                <div>
                                    <p className="text-xs text-red-400 font-bold mb-1">KIRA</p>
                                    <p className="text-sm text-white italic">"Excuse me? I calculate pi to the 10,000th digit for fun. Watch your tone or I'm playing Nickelback on loop."</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-xs text-green-400 font-mono">
                            <MessageCircleHeart size={12} />
                            <span>RESULT: RELATIONSHIP SAVED</span>
                        </div>
                    </div>
                </div>

                {/* Closing */}
                <div className="mt-16">
                    <p className="text-gray-500 text-sm mb-3">Real friends call you out.</p>
                    <p className="text-white font-bold text-xl flex items-center justify-center gap-2">
                        Get an AI with a <span className="text-red-500">Backbone.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};