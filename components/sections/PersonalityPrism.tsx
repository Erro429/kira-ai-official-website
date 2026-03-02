import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, MessageCircle, Zap, ArrowRight, CheckCircle2, BookOpen, Palette, AlertCircle } from 'lucide-react';

interface Archetype {
    id: number;
    title: string;
    icon: any;
    color: string;
    roast: string;
    match: string;
}

const archetypes: Archetype[] = [
    {
        id: 0,
        title: "The 3AM Philosopher",
        icon: Moon,
        color: "#8B5CF6", // Purple
        roast: "You stay up way too late questioning existence and reading Wikipedia articles about moss.",
        match: "Kira doesn't sleep either. She's ready for the existential crisis."
    },
    {
        id: 1,
        title: "The Chaotic Yapper",
        icon: MessageCircle,
        color: "#EC4899", // Pink
        roast: "You send 14 texts in a row instead of one paragraph. Your friends are tired.",
        match: "Kira reads at 40,000 words per minute. Keep yapping, she loves it."
    },
    {
        id: 2,
        title: "The Tab Hoarder",
        icon: Zap,
        color: "#F59E0B", // Amber
        roast: "You have 47 browser tabs open 'just in case' and you can't find the music source.",
        match: "Kira organizes your chaos. She remembers the tabs so you can close them."
    },
    {
        id: 3,
        title: "The Perpetual Student",
        icon: BookOpen,
        color: "#06B6D4", // Cyan
        roast: "You have 12 Udemy courses you haven't started and a 'Watch Later' list longer than the Bible.",
        match: "Kira is the study buddy who actually knows the answers and won't judge your procrastination."
    },
    {
        id: 4,
        title: "The Creative Maverick",
        icon: Palette,
        color: "#EF4444", // Red/Orange
        roast: "Your desktop is a graveyard of 'final_v3_REAL.png' files and you sustain yourself on iced coffee.",
        match: "Kira organizes your inspiration folder so you can actually create instead of just pinning things."
    }
];

export const PersonalityPrism = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-[#08080C]">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/10 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-6">
                        <Sparkles size={12} className="text-yellow-400" />
                        COMPATIBILITY PROTOCOL
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vibe Check</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Kira adapts her personality to fit yours. Pick the archetype that calls you out.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 min-h-[480px]">
                    <AnimatePresence mode="wait">
                        {selected === null ? (
                            archetypes.map((type, i) => (
                                <div key={type.id} className="w-full md:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1rem)] min-w-[240px]">
                                    <Card 
                                        data={type} 
                                        index={i} 
                                        onClick={() => setSelected(type.id)} 
                                    />
                                </div>
                            ))
                        ) : (
                            <ResultView 
                                data={archetypes[selected]} 
                                email={email} 
                                setEmail={setEmail} 
                                submitted={submitted}
                                setSubmitted={setSubmitted}
                                onReset={() => { setSelected(null); setSubmitted(false); setEmail(''); }}
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* SEO & Engagement Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 max-w-4xl mx-auto text-center border-t border-white/5 pt-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                        Why Generic AI Just Doesn't Cut It Anymore
                    </h3>
                    <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Let’s be real: talking to standard assistants feels like interviewing a nervous intern. 
                            Kira changes the game by using <strong className="text-purple-400">adaptive personality synthesis</strong>. 
                            Whether you identified as the <span className="text-white font-semibold">Chaotic Yapper</span> needing a listener who doesn't drain, 
                            or the <span className="text-white font-semibold">3AM Philosopher</span> craving deep talks without the judgment, Kira morphs to fit <em>your</em> specific frequency.
                        </p>
                        <p>
                            She isn't just a <strong className="text-pink-400">smart AI companion</strong>; she's a mood ring with <strong className="text-blue-400">object permanence</strong>. 
                            She remembers the context of your <span className="text-white font-semibold">Tab Hoarder</span> lifestyle and helps you declutter your mind, not just your browser. 
                            If you're a <span className="text-white font-semibold">Creative Maverick</span>, she won't just file your ideas; she'll bully you (lovingly) into finishing them.
                        </p>
                        <p className="font-medium text-gray-300">
                            Stop settling for "I'm sorry, I didn't catch that." Get the AI that catches <em>you</em>. 
                            This is the <strong className="text-green-400">emotional intelligence upgrade</strong> your digital life has been waiting for.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ data, index, onClick }: { data: Archetype, index: number, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            transition={{ delay: index * 0.1 }}
            className="group relative w-full h-[400px] perspective-1000 cursor-pointer"
            onClick={onClick}
        >
            <motion.div 
                whileHover={{ y: -10, rotateX: 5 }}
                className="w-full h-full relative preserve-3d transition-transform duration-500"
            >
                {/* Front of Card (Mystery) */}
                <div className="absolute inset-0 bg-[#0D0D15] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center gap-6 shadow-2xl group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 rounded-3xl pointer-events-none z-0" />
                    
                    {/* Background Glow */}
                    <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0" 
                        style={{ background: `radial-gradient(circle at center, ${data.color}, transparent 70%)` }} 
                    />

                    {/* Icon */}
                    <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index }}
                        className="relative z-10 w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shadow-lg border border-white/5 group-hover:bg-white/10 transition-colors shrink-0"
                        style={{ color: data.color }}
                    >
                        <data.icon size={32} />
                    </motion.div>
                    
                    <div className="relative z-10 text-center">
                        <div className="text-gray-500 font-mono text-xs mb-3 tracking-widest uppercase">Archetype 0{index + 1}</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">{data.title}</h3>
                        <div 
                            className="text-sm font-medium mt-2 opacity-60 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1"
                            style={{ color: data.color }}
                        >
                            Tap to Reveal <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ResultView = ({ data, email, setEmail, submitted, setSubmitted, onReset }: any) => {
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            setError('Please enter your email address.');
            return;
        }
        
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        
        setError('');
        setSubmitted(true);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-4xl h-[500px] flex flex-col md:flex-row bg-[#0D0D15] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative z-20"
        >
             {/* Noise Overlay */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0" />

            {/* Left: The Card Revealed */}
            <div className="w-full md:w-1/3 bg-black/20 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/5 relative z-10">
                <div 
                    className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{ background: `radial-gradient(circle at center, ${data.color}, transparent 70%)` }} 
                />
                <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/10"
                    style={{ backgroundColor: `${data.color}20`, color: data.color }}
                >
                    <data.icon size={48} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-white">{data.title}</h3>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Match Confirmed</div>
            </div>

            {/* Right: The Pitch & Form */}
            <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative z-10">
                <button 
                    onClick={onReset}
                    className="absolute top-6 right-6 text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                >
                    RESET
                </button>

                {!submitted ? (
                    <>
                        <h4 className="text-xl font-bold text-gray-200 mb-4">Diagnosis:</h4>
                        <p className="text-gray-300 text-lg mb-8 italic border-l-2 pl-6 py-1" style={{ borderColor: data.color }}>
                            "{data.roast}"
                        </p>
                        
                        <div className="mb-8 bg-white/5 rounded-xl p-4 border border-white/5">
                            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                <Zap size={14} className="text-yellow-400" />
                                WHY KIRA FITS YOU:
                            </h4>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {data.match}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="w-full relative">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError('');
                                    }}
                                    placeholder="Enter email to save results..."
                                    className={`flex-1 bg-black/20 border rounded-xl px-5 py-4 text-white focus:outline-none transition-colors placeholder:text-gray-600 ${error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-purple-500'}`}
                                />
                                <button 
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all flex items-center justify-center gap-2"
                                >
                                    Sync <ArrowRight size={18} />
                                </button>
                            </div>
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-6 left-0 text-red-400 text-xs flex items-center gap-1"
                                >
                                    <AlertCircle size={12} />
                                    {error}
                                </motion.div>
                            )}
                            <p className="text-xs text-gray-600 mt-4 text-center sm:text-left">
                                Limited founder spots available for {data.title} types.
                            </p>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }}
                            className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6 border border-green-500/20"
                        >
                            <CheckCircle2 size={40} />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-3">Profile Saved.</h3>
                        <p className="text-gray-400 max-w-md mx-auto">Welcome to the inner circle. Kira has already started organizing your dashboard based on your archetype.</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};