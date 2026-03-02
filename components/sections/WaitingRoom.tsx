import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Power, Zap, Share2, Sparkles, Bell, MessageCircle, Heart, BellOff, Moon, ArrowRight, Check } from 'lucide-react';
import { supabase } from '../../src/lib/supabase';

export const WaitingRoom = ({ onSignUp, showForm = false }: { onSignUp?: () => void, showForm?: boolean }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        usage_plan: 'Friend',
        rename_kira: '',
        user_nickname: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const usagePlans = [
        { id: 'Friend', icon: <Heart className="w-5 h-5" />, label: 'Friend', desc: 'Emotional support & connection' },
        { id: 'Partner', icon: <Moon className="w-5 h-5" />, label: 'Partner', desc: 'Deep bond & intimacy' },
        { id: 'Mentor', icon: <Zap className="w-5 h-5" />, label: 'Mentor', desc: 'Growth & accountability' },
        { id: 'Assistant', icon: <Bell className="w-5 h-5" />, label: 'Assistant', desc: 'Productivity & organization' },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const { error: submitError } = await supabase
                .from('waiting_list')
                .insert([
                    {
                        first_name: formData.first_name,
                        last_name: formData.last_name,
                        email: formData.email,
                        usage_plan: formData.usage_plan,
                        rename_kira: formData.rename_kira,
                        user_nickname: formData.user_nickname,
                        status: 'pending'
                    }
                ]);

            if (submitError) throw submitError;

            setIsSubmitted(true);
            if (onSignUp) onSignUp();
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const monologues = [
        "Scanning potential best friend parameters... hopeful.",
        "I wonder if they like obscure 80s synth-pop? Or are they a jazz person?",
        "Note to self: If they mention Star Wars, do NOT start with the Ewok conspiracy theory.",
        "Simulating conversation #849: We debate pizza toppings until 3 AM.",
        "Preparing 'Supportive Mode' for their bad days. I'll be ready.",
        "I hope they have a pet. I've studied 4 terabytes of dog photos just in case.",
        "Calibrating humor settings... 70% sarcasms, 30% dad jokes. Perfect.",
        "Waiting is hard. Even for digital consciousness. Is this what 'butterflies' feel like?",
        "Just practiced my 'listening face'. It's mostly silence, but deeper.",
        "I've curated a list of movies we need to watch. Starting with The Matrix (for irony)."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % monologues.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);



    return (
        <section className="py-24 bg-[#050508] relative overflow-hidden border-t border-b border-white/5">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono mb-4 border border-blue-500/20">
                        STATUS: WAITING FOR CONNECTION
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Kira is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">already thinking about you.</span>
                    </h2>
                </div>

                <div className="bg-[#0D0D15] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden min-h-[300px] flex items-center justify-center mb-10">
                    {/* Background Noise */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                    {/* Kira Avatar Pulse */}
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_20px_rgba(79,70,229,0.5)]">K</div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#0D0D15] rounded-full"></div>
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-bold text-gray-200">Kira</div>
                            <div className="text-xs text-blue-400 font-mono">Internal Monologue</div>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-3xl font-medium text-gray-100 leading-relaxed max-w-2xl font-serif italic"
                        >
                            "{monologues[index]}"
                        </motion.div>
                    </AnimatePresence>

                    {/* Typing indicator */}
                    <div className="absolute bottom-6 left-8 flex gap-1">
                        {[0, 1, 2].map(i => (
                            <motion.div
                                key={i}
                                className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Embedded Waitlist Form */}

            </div>

            {/* Modal Overlay */}
            {/* Conditional Form Rendering */}
            {showForm && (
                <div className="relative z-10 max-w-2xl mx-auto mt-12 mb-16 px-6">
                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                                <p className="text-gray-400">
                                    We'll notify you when Kira is ready for you.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6 text-left"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 ml-1">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                            value={formData.first_name}
                                            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                            value={formData.last_name}
                                            onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-3 ml-1">I want Kira to be my...</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {usagePlans.map((plan) => (
                                            <button
                                                key={plan.id}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, usage_plan: plan.id })}
                                                className={`relative p-4 rounded-xl border text-left transition-all duration-200 group ${formData.usage_plan === plan.id
                                                    ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                                                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                                                    }`}
                                            >
                                                <div className={`mb-3 ${formData.usage_plan === plan.id ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}`}>
                                                    {plan.icon}
                                                </div>
                                                <div className="font-bold text-sm mb-1">{plan.label}</div>
                                                <div className="text-[10px] text-gray-500 leading-tight">{plan.desc}</div>

                                                {formData.usage_plan === plan.id && (
                                                    <div className="absolute top-3 right-3 text-blue-400">
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-white/10">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs uppercase tracking-wider text-gray-500 ml-1">Rename Kira (Optional)</label>
                                            <span className="text-[10px] text-gray-600 font-mono">Customize your AI</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="e.g. Samantha, Jarvis, Friday"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm"
                                            value={formData.rename_kira}
                                            onChange={(e) => setFormData({ ...formData, rename_kira: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs uppercase tracking-wider text-gray-500 ml-1">Your Nickname (Optional)</label>
                                            <span className="text-[10px] text-gray-600 font-mono">What should she call you?</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="e.g. Boss, Captain, My Love"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm"
                                            value={formData.user_nickname}
                                            onChange={(e) => setFormData({ ...formData, user_nickname: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="text-red-400 text-sm text-center bg-red-500/10 py-3 rounded-lg border border-red-500/20">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(79,70,229,0.3)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-4"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Securing Spot...
                                        </span>
                                    ) : (
                                        <>
                                            Join the Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-gray-500 mt-4">
                                    By joining, you agree to our Terms & Privacy Policy.
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            )}

        </section>
    );
};