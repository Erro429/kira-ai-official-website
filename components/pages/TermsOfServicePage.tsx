"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import { Shield, ChevronRight } from 'lucide-react';
import { SEO } from '../utils/SEO';

const Section = ({ title, content }: { title: string; content: React.ReactNode }) => (
    <div className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-6 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full" />
            {title}
        </h2>
        <div className="text-gray-400 leading-relaxed space-y-4">
            {content}
        </div>
    </div>
);

export const TermsOfServicePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-[#D4AF37]/30">
            <SEO
                title="Terms of Service | Kindred Kira AI"
                description="The legal agreement governing your use of Kindred Kira AI companion services."
            />

            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={() => navigate('/founders')} />

            <main className="relative z-10 pt-[160px] pb-32">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <header className="mb-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <Shield size={12} />
                            <span>Legal Protocol</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                            Terms of <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Service</span>
                        </h1>
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                            Effective Date: February 17, 2026
                        </p>
                    </header>

                    {/* Content Glass Container */}
                    <div className="relative p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] backdrop-blur-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none" />

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                                These Terms of Service constitute a legally binding agreement between you and Kindred Kira governing your access to and use of the Kindred Kira AI companion service.
                            </p>

                            <Section title="1. Acceptance of Terms" content={
                                <p>You must be at least eighteen (18) years of age to use the Service. By accessing the Service, you represent and warrant that you have the legal capacity to enter into this binding agreement.</p>
                            } />

                            <Section title="2. AI Companion Disclosure" content={
                                <>
                                    <p className="font-bold text-white uppercase tracking-tight">You are interacting with an AI system, not a human being.</p>
                                    <p>Kindred Kira uses advanced generative artificial intelligence technology to simulate conversational interactions and provide companionship. The AI is intended solely for entertainment, emotional support, and social interaction purposes.</p>
                                    <p className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl text-red-400/80 italic text-sm">
                                        The Service is NOT a substitute for professional mental health counseling, therapy, or emergency response systems. If you are experiencing a crisis, contact emergency services immediately (US: 988 or 911).
                                    </p>
                                </>
                            } />

                            <Section title="3. Subscription & Payment" content={
                                <>
                                    <p>The Service operates on a subscription basis with recurring monthly billing. By subscribing, you authorize us to charge your designated payment method <span className="text-white font-bold">$24.99 per month</span> until you cancel.</p>
                                    <p>Subscriptions automatically renew at the end of each billing cycle unless cancelled at least 24 hours prior to the renewal date.</p>
                                </>
                            } />

                            <Section title="4. No Refund Policy" content={
                                <p className="font-bold text-gray-200">All subscription fees are non-refundable under any circumstances. Once a monthly payment is charged, that payment is final. Performance of digital services begins immediately upon subscription activation.</p>
                            } />

                            <Section title="5. Acceptable Use" content={
                                <p>You agree not to use the Service for illegal activities, harassment, hate speech, sexual exploitation, or malicious activity. Violation of this policy may result in permanent termination of your account.</p>
                            } />

                            <Section title="6. Intellectual Property" content={
                                <p>The Service and its underlying AI models are owned exclusively by Kindred Kira. You retain rights in your original prompts, while AI-generated responses may not be eligible for copyright protection under current laws.</p>
                            } />

                            <Section title="7. Privacy & Data" content={
                                <p>We implement data security measures to protect your conversational data, but absolute security cannot be guaranteed. Your data is used to personalize your experience and improve the AI companion.</p>
                            } />

                            <Section title="8. Cancellation" content={
                                <p>You may cancel your subscription at any time via your account settings or by emailing support@kindredkira.com. Upon cancellation, you will retain access until the end of your current paid billing cycle.</p>
                            } />

                            <div className="pt-12 border-t border-white/10 mt-20">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-gray-500 font-mono">
                                    <div className="flex flex-col gap-2">
                                        <span>Kindred Kira AI Companion Service</span>
                                        <span>Phoenix, Arizona, USA</span>
                                    </div>
                                    <div className="flex gap-6">
                                        <a href="mailto:support@kindredkira.com" className="hover:text-[#D4AF37] transition-colors">support@kindredkira.com</a>
                                        <a href="mailto:legal@kindredkira.com" className="hover:text-[#D4AF37] transition-colors">legal@kindredkira.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                        >
                            <ChevronRight className="rotate-180" size={16} />
                            Back to Core
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
