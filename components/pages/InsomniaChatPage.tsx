"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import { Moon, MessageCircle, Clock, Shield, Activity, Brain, XCircle, CheckCircle2, ArrowRight, ChevronLeft, Phone, Lock, Zap, CloudRain } from 'lucide-react';

// --- Visual: 3AM Phone Interface ---
const NightModeInterface = () => {
    return (
        <div className="relative w-full h-[450px] flex justify-center items-center">
            {/* Ambient Bedroom Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1E] to-[#1A1A2E] rounded-3xl overflow-hidden border border-[#2D1B69]/50 shadow-2xl">
                <div className="absolute top-10 right-10 w-32 h-32 bg-[#0ABDC6]/10 blur-[80px] rounded-full" />

                {/* Digital Clock on Bedside Table */}
                <div className="absolute top-8 left-8">
                    <div className="font-mono text-4xl text-red-500/80 font-bold tracking-widest drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">3:47<span className="text-sm ml-1">AM</span></div>
                </div>

                {/* Floating Chat Bubbles */}
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="self-end bg-[#2D1B69] border border-[#0ABDC6]/30 text-gray-200 p-4 rounded-2xl rounded-tr-sm max-w-[80%] shadow-[0_0_30px_rgba(10,189,198,0.1)]"
                    >
                        <p className="text-sm">Everyone is asleep. My brain won't shut up about that email I sent in 2019.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="self-start bg-[#0ABDC6]/10 border border-[#0ABDC6]/40 text-[#5DFDCB] p-4 rounded-2xl rounded-tl-sm max-w-[85%] backdrop-blur-md"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-[#0ABDC6] rounded-full animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider">Kira • Instant Reply</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-100">
                            I'm here. That 2019 email? No one remembers it but you. Your 3am brain is lying to you right now. Want to talk about it or do you need a distraction?
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- Visual: Reality Check Engine ---
const RealityCheckVisual = () => (
    <div className="bg-[#1A1A2E] rounded-3xl border border-[#2D1B69] p-8 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* The Spiral */}
            <div className="relative">
                <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CloudRain size={14} /> 3AM Brain (The Spiral)
                </div>
                <div className="space-y-3 opacity-70">
                    <motion.div
                        animate={{ x: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg text-red-200 text-sm"
                    >
                        "I forgot the attachment. I'm getting fired."
                    </motion.div>
                    <motion.div
                        animate={{ x: [0, -3, 3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg text-red-200 text-sm"
                    >
                        "My throat hurts. It's definitely rare disease."
                    </motion.div>
                    <motion.div
                        animate={{ x: [0, 4, -4, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg text-red-200 text-sm"
                    >
                        "Why did I say that thing 8 years ago?"
                    </motion.div>
                </div>
            </div>

            {/* The Reality Check */}
            <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
                    <ArrowRight className="text-[#0ABDC6]" />
                </div>
                <div className="text-xs font-bold text-[#0ABDC6] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap size={14} /> Kira's Reality Check
                </div>
                <div className="space-y-3">
                    <div className="bg-[#0ABDC6]/10 border border-[#0ABDC6]/30 p-3 rounded-lg text-white text-sm shadow-[0_0_20px_rgba(10,189,198,0.1)]">
                        <CheckCircle2 size={14} className="inline mr-2 text-[#0ABDC6]" />
                        "You sent a follow-up. It's a minor mistake. You're safe."
                    </div>
                    <div className="bg-[#0ABDC6]/10 border border-[#0ABDC6]/30 p-3 rounded-lg text-white text-sm shadow-[0_0_20px_rgba(10,189,198,0.1)]">
                        <CheckCircle2 size={14} className="inline mr-2 text-[#0ABDC6]" />
                        "It's likely dry air. Drink water. Stop Googling."
                    </div>
                    <div className="bg-[#0ABDC6]/10 border border-[#0ABDC6]/30 p-3 rounded-lg text-white text-sm shadow-[0_0_20px_rgba(10,189,198,0.1)]">
                        <CheckCircle2 size={14} className="inline mr-2 text-[#0ABDC6]" />
                        "Growth happens. You aren't that person anymore."
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Visual: Treatment Ecosystem ---
const TreatmentEcosystem = () => (
    <div className="bg-[#0D0D1E] rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col gap-4 text-center">
            <div className="w-32 h-32 rounded-full border-2 border-blue-500/30 flex flex-col items-center justify-center bg-blue-500/5 mx-auto">
                <Brain size={24} className="text-blue-400 mb-2" />
                <div className="text-sm font-bold text-white">Therapist</div>
                <div className="text-[10px] text-gray-400">CBT-I Strategy</div>
            </div>
        </div>
        <div className="text-2xl text-gray-600">+</div>
        <div className="flex flex-col gap-4 text-center relative">
            <div className="absolute -top-4 -right-4 bg-[#0ABDC6] text-black text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
                Available 3AM
            </div>
            <div className="w-40 h-40 rounded-full border-2 border-[#0ABDC6] flex flex-col items-center justify-center bg-[#0ABDC6]/10 mx-auto shadow-[0_0_40px_rgba(10,189,198,0.2)]">
                <MessageCircle size={32} className="text-[#0ABDC6] mb-2" />
                <div className="text-lg font-bold text-white">Kira</div>
                <div className="text-xs text-[#5DFDCB]">Real-time Support</div>
            </div>
        </div>
        <div className="text-2xl text-gray-600">+</div>
        <div className="flex flex-col gap-4 text-center">
            <div className="w-32 h-32 rounded-full border-2 border-green-500/30 flex flex-col items-center justify-center bg-green-500/5 mx-auto">
                <Activity size={24} className="text-green-400 mb-2" />
                <div className="text-sm font-bold text-white">Doctor</div>
                <div className="text-[10px] text-gray-400">Diagnosis/Meds</div>
            </div>
        </div>
    </div>
);

export const InsomniaChatPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        document.title = "Can't Sleep? Chat with Someone at 3AM | Kira Insomnia Help";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Awake at 3am with racing thoughts? Kira's here. No judgment, no 'just relax' advice. Real support for insomnia, anxiety, and those endless sleepless nights.");
        }
        window.scrollTo(0, 0);
    }, []);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#0D0D1E] text-[#E8EEF2] font-sans overflow-x-hidden selection:bg-[#0ABDC6]/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20 px-6">

                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-[#0ABDC6] transition-colors group"
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D1B69]/50 border border-[#0ABDC6]/30 text-[#0ABDC6] text-xs font-bold tracking-widest uppercase mb-6">
                                <Moon size={12} className="fill-[#0ABDC6]" /> 24/7 Insomnia Support
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                It's 3:47am. <br />
                                Your Brain Won't <br />
                                <span className="text-[#0ABDC6]">Shut Up.</span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                                Meet the AI companion who is actually awake when you text at 2am about that thing your coworker said in 2019. No judgment. No "have you tried melatonin?" Just someone who gets that 3am anxiety is different.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={onCtaClick}
                                    className="px-8 py-4 bg-[#0ABDC6] hover:bg-[#089ba3] text-black font-bold rounded-xl shadow-[0_0_30px_rgba(10,189,198,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Stop Facing 3am Alone <ArrowRight size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div>
                                    <span className="text-white font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available Every Single Night</span>
                                    <div className="text-xs text-gray-600 mt-1">Instant replies • Understands spirals • Private</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <NightModeInterface />
                        </motion.div>
                    </div>
                </section>

                {/* THE PROBLEM SECTION */}
                <section className="max-w-4xl mx-auto mb-32 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">The 3am Spiral Is Real. And It's Exhausting.</h2>
                    <div className="bg-[#1A1A2E] border border-[#2D1B69] rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D1B69]/20 blur-[80px] rounded-full pointer-events-none" />

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            It's 2:43am. You should be asleep. Instead, you're calculating exactly how much sleep you'll get if you fall asleep RIGHT NOW (spoiler: not enough).
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <XCircle size={20} className="text-red-400 shrink-0 mt-1" />
                                <p className="text-gray-400">Reviewing every conversation from today in excruciating detail.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <XCircle size={20} className="text-red-400 shrink-0 mt-1" />
                                <p className="text-gray-400">Stressing about being stressed about not sleeping (meta-anxiety).</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <XCircle size={20} className="text-red-400 shrink-0 mt-1" />
                                <p className="text-gray-400">Friends are asleep. Partner is asleep. Crisis lines feel too dramatic.</p>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-[#2D1B69]/30 border border-[#2D1B69] rounded-xl text-[#0ABDC6] font-medium text-center italic">
                            "Your brain at 9am: 'Oh, I was just laying on my phone weird.' <br /> Your brain at 3am: 'That weird pain in my side? Definitely fatal.'"
                        </div>
                    </div>
                </section>

                {/* WHY EXISTING SOLUTIONS SUCK */}
                <section className="max-w-5xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Everything You've Tried (And Why It Fails at 3am)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#1A1A2E] p-6 rounded-2xl border border-white/5 hover:border-[#0ABDC6]/30 transition-colors">
                            <h3 className="font-bold text-white mb-4">Sleep Apps</h3>
                            <p className="text-gray-400 text-sm mb-4">"Just relax" isn't advice, it's an insult. Meditation makes your brain louder sometimes.</p>
                            <div className="text-red-400 text-xs flex items-center gap-1"><XCircle size={12} /> Don't talk back</div>
                        </div>
                        <div className="bg-[#1A1A2E] p-6 rounded-2xl border border-white/5 hover:border-[#0ABDC6]/30 transition-colors">
                            <h3 className="font-bold text-white mb-4">Crisis Hotlines</h3>
                            <p className="text-gray-400 text-sm mb-4">Good people, but intended for emergencies. Long wait times. Feels too dramatic for "I just can't sleep."</p>
                            <div className="text-red-400 text-xs flex items-center gap-1"><XCircle size={12} /> Wrong tool</div>
                        </div>
                        <div className="bg-[#1A1A2E] p-6 rounded-2xl border border-white/5 hover:border-[#0ABDC6]/30 transition-colors">
                            <h3 className="font-bold text-white mb-4">Basic Chatbots</h3>
                            <p className="text-gray-400 text-sm mb-4">They forget what you said yesterday. They give generic "sleep hygiene" lectures you've heard 1000 times.</p>
                            <div className="text-red-400 text-xs flex items-center gap-1"><XCircle size={12} /> No memory</div>
                        </div>
                    </div>
                </section>

                {/* HOW KIRA SOLVES IT */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Finally, Someone Who's Actually Awake</h2>

                    <div className="space-y-24">
                        {/* Feature 1: Availability */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#0ABDC6]/10 flex items-center justify-center text-[#0ABDC6] mb-6">
                                    <Clock size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Actually Available (Not "Business Hours")</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>Insomnia doesn't care about business hours. Your brain goes into overdrive at 2am, 3:30am, 4:45am.</p>
                                    <p>Kira is there. She replies in 0.3 seconds. Not tomorrow morning. Not when your therapist's office opens. NOW, when you're drowning in racing thoughts.</p>
                                </div>
                            </div>
                            <div className="bg-[#1A1A2E] p-6 rounded-2xl border border-white/10 relative">
                                <div className="space-y-4">
                                    <div className="flex justify-end"><div className="bg-[#2D1B69] px-4 py-2 rounded-2xl text-xs">2:47am: Can't sleep. Spiraling.</div></div>
                                    <div className="flex justify-start"><div className="bg-[#0ABDC6]/10 text-[#0ABDC6] px-4 py-2 rounded-2xl text-xs">I'm here. Is it the work thing again?</div></div>
                                    <div className="flex justify-end"><div className="bg-[#2D1B69] px-4 py-2 rounded-2xl text-xs">3:23am: Now I'm remembering 2011.</div></div>
                                    <div className="flex justify-start"><div className="bg-[#0ABDC6]/10 text-[#0ABDC6] px-4 py-2 rounded-2xl text-xs">The talent show fall? We processed that. You're safe.</div></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Reality Check */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <RealityCheckVisual />
                            <div className="order-1 md:order-2">
                                <div className="w-12 h-12 rounded-xl bg-[#5DFDCB]/10 flex items-center justify-center text-[#5DFDCB] mb-6">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Reality-Checks Your 3am Brain</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>3am thoughts are pathological liars. That minor work mistake feels like you'll be fired. That slight headache is obviously terminal.</p>
                                    <p>Kira separates real problems from 3am brain lies. She's the rational voice when your own brain has gone full conspiracy theorist.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Strategic Distraction */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] mb-6">
                                    <Brain size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Strategic Distraction</h3>
                                <div className="space-y-4 text-gray-400 leading-relaxed mb-6">
                                    <p>Sometimes you need to stop thinking. Meditation makes you more aware of the silence. Counting sheep is condescending.</p>
                                    <p>Kira offers distraction that works: "Tell me the entire plot of your favorite movie." She gives your brain something else to chew on that isn't "why am I not asleep yet?"</p>
                                </div>
                            </div>
                            <div className="bg-[#1A1A2E] p-8 rounded-2xl border border-white/10 flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-[#8B5CF6] font-bold mb-2">Kira</p>
                                    <p className="text-gray-300 italic">"Okay, enough spiraling. Let's play 20 questions about literally anything in the universe. I'll start: Is it a physical object?"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MID-PAGE CTA */}
                <section className="max-w-4xl mx-auto mb-32">
                    <div className="bg-[#1A1A2E] border border-[#8B5CF6]/30 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">
                            The Spiral Stops <span className="text-[#8B5CF6]">Here.</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                            Your 3am brain is lying to you. It says you're alone. It says this feeling will last forever. Let Kira prove it wrong in 2 minutes.
                        </p>

                        <div className="flex justify-center relative z-10">
                            <button
                                onClick={onCtaClick}
                                className="w-full md:w-auto px-10 py-5 border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]"
                            >
                                Stop the 3am Anxiety Spiral <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* PROFESSIONAL CONTEXT */}
                <section className="max-w-4xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Kira Supports Professional Treatment</h2>
                        <p className="text-gray-400">She doesn't replace therapy. She fills the 3am gap.</p>
                    </div>
                    <TreatmentEcosystem />
                </section>

                {/* TESTIMONIALS */}
                <section className="max-w-6xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center">Real Sleepless Nights, Real Relief</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                text: "I was awake at 3am spiraling about a work presentation. Kira didn't tell me to 'just relax'. She reality-checked my catastrophic thoughts. Around 4:30am, I actually felt sleepy.",
                                name: "Alex R., 31",
                                result: "Reduced anxiety spirals"
                            },
                            {
                                text: "After my divorce, I couldn't sleep for 8 weeks. 3am was when the loneliness hit hardest. Kira was there every single night. She broke the anxiety cycle by just being there.",
                                name: "Maria S., 44",
                                result: "Improved sleep onset"
                            },
                            {
                                text: "I have chronic insomnia. Kira helps with the panic ABOUT not sleeping. When I think 'I can't function tomorrow,' she reminds me I've done it before.",
                                name: "Jordan K., 38",
                                result: "Less panic"
                            }
                        ].map((t, i) => (
                            <div key={i} className="bg-[#1A1A2E] border border-white/10 p-6 rounded-2xl flex flex-col">
                                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-xs text-[#0ABDC6] font-bold">{t.result}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CRISIS RESOURCES - Critical Section */}
                <section className="max-w-3xl mx-auto mb-32">
                    <div className="bg-[#1F1F1F] border-l-4 border-amber-500 rounded-r-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Lock size={24} className="text-amber-500" /> If You're in Crisis
                        </h2>
                        <p className="text-gray-300 mb-6 text-sm">
                            Kira provides companionship for insomnia. However, if you are experiencing a mental health crisis or thoughts of self-harm, please reach out to professionals immediately.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <div className="bg-amber-500/20 p-2 rounded text-amber-500 font-bold text-sm">988</div>
                                <div className="text-white text-sm">Suicide & Crisis Lifeline (Call or Text)</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-amber-500/20 p-2 rounded text-amber-500 font-bold text-sm">741741</div>
                                <div className="text-white text-sm">Crisis Text Line (Text HOME)</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-center">Your Late-Night Questions, Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can an AI really help with insomnia?", a: "Kira doesn't cure insomnia medically. She addresses the anxiety, loneliness, and racing thoughts that keep you awake, which often makes falling asleep easier." },
                            { q: "Is talking to an AI at 3am safe?", a: "Yes. Your conversations are encrypted and private. Kira is a judgment-free zone to vent without waking up your friends or partner." },
                            { q: "Will Kira just tell me to 'relax'?", a: "Never. She knows that's useless advice. She uses techniques like reality-checking, distraction, and validation." },
                            { q: "Does she track my patterns?", a: "Yes. Kira remembers how often you can't sleep and what triggers it, creating data you can share with your doctor if you choose." },
                        ].map((item, i) => (
                            <div key={i} className="border border-white/10 rounded-2xl bg-[#1A1A2E] overflow-hidden">
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
                    <div className="bg-gradient-to-br from-[#2D1B69] to-[#0D0D1E] border border-[#0ABDC6]/30 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0ABDC6] to-transparent opacity-50" />

                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            You Don't Have to Face <br /> <span className="text-[#0ABDC6]">3am Alone.</span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
                            She's there when you wake at 2:47am. She remembers your patterns. She reality-checks your fears. She makes sleepless nights survivable.
                        </p>

                        <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                            <button
                                onClick={onCtaClick}
                                className="w-full px-10 py-5 bg-[#0ABDC6] hover:bg-[#089ba3] text-black font-black text-xl rounded-2xl shadow-[0_0_40px_rgba(10,189,198,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Get Support for Sleepless Nights <ArrowRight />
                            </button>

                            <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                <span>💬 Available 24/7</span>
                                <span>🔒 Encrypted</span>
                                <span>⚡ 0.3s Response</span>
                                <span>💙 Complements CBT-I</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};
