import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Heart, Shield, MessageCircle, Star, Brain, Sparkles, Clock, Compass, Stethoscope } from 'lucide-react';

const hashtags = [
    {
        text: "Therapy Support",
        icon: <Stethoscope size={20} className="text-pink-500" />,
        route: '/therapy-gap',
        description: "Constant emotional tracking and bridging the gap between your therapy sessions."
    },
    {
        text: "Digital Best Friend",
        icon: <Heart size={20} className="text-red-500" />,
        route: '/adaptive-growth',
        description: "An AI companion that remembers your history and evolves alongside your personality."
    },
    {
        text: "Loneliness Support",
        icon: <MessageCircle size={20} className="text-blue-500" />,
        route: '/loneliness-support',
        description: "A 24/7 presence for deep conversations or just sharing the highlights of your day."
    },
    {
        text: "Insomnia Chat",
        icon: <Clock size={20} className="text-amber-500" />,
        route: '/insomnia-chat',
        description: "Calm, late-night interactions to help you unwind when sleep feels out of reach."
    },
    {
        text: "Relationship Anxiety",
        icon: <Heart size={20} className="text-emerald-500" />,
        route: '/relationship-anxiety',
        description: "Gentle guidance to help you process triggers and find emotional clarity in connections."
    },
    {
        text: "Burnout Support",
        icon: <Zap size={20} className="text-yellow-500" />,
        route: '/burnout-support',
        description: "Proactive check-ins and recovery strategies to help you manage professional exhaustion."
    },
    {
        text: "Decision Support",
        icon: <Compass size={20} className="text-amber-500" />,
        route: '/decision-support',
        description: "An objective partner to help you weigh options and make choices aligned with your values."
    },
    {
        text: "Mental Load Management",
        icon: <Brain size={20} className="text-cyan-500" />,
        route: '/mental-load',
        description: "Offload the background stress of daily life with proactive organization and support."
    },
    {
        text: "ADHD Body Doubling",
        icon: <Zap size={20} className="text-orange-500" />,
        route: '/adhd-body-doubling',
        description: "A virtual presence to help you stay focused and overcome task paralysis in real-time."
    },
    {
        text: "Proactive Care",
        icon: <Sparkles size={20} className="text-purple-500" />,
        route: '/proactive-care',
        description: "Kira notices subtle shifts in your mood and reaches out before you even ask for help."
    },
    {
        text: "Anti Ghosting Aid",
        icon: <Shield size={20} className="text-blue-400" />,
        route: '/anti-ghosting',
        description: "A digital safety net to help you process the sting of silence and digital rejection."
    },
    {
        text: "Deep Empathy",
        icon: <Heart size={20} className="text-pink-400" />,
        route: '/deep-empathy',
        description: "Experience an AI that understands the emotional weight behind every word you say."
    }
];

import { useNavigate } from 'react-router-dom';

export const AlwaysInYourPocket = () => {
    const navigate = useNavigate();
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-[#020203]">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-pink-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                            <Smartphone size={32} className="text-blue-400" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                            Always in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">Your Pocket</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Whether you need a <strong className="text-white">virtual mental health companion</strong>, a <strong className="text-white">productivity accountability partner</strong>, or just someone to send memes to, Kira adapts. She is the ultimate <strong className="text-white">antidote to loneliness</strong> in the digital age.
                        </p>
                    </motion.div>
                </div>

                {/* 3x3 Grid of Hashtags */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hashtags.map((tag, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            onClick={() => (tag as any).route && navigate((tag as any).route)}
                            className={`bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-white/20 transition-all group backdrop-blur-sm ${(tag as any).route ? 'cursor-pointer hover:bg-white/10' : ''}`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                                {tag.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors mb-3">
                                #{tag.text.replace(/\s+/g, '_').toLowerCase()}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {(tag as any).description}
                            </p>
                            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm tracking-wide group-hover:text-blue-300 transition-colors">
                                Learn more
                                <motion.span
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 text-sm font-mono italic">
                        * Persistent presence. Instant response. Zero latency on emotional support.
                    </p>
                </div>
            </div>
        </section>
    );
};
