"use client";
import React, { useState } from 'react';
import { supabase } from '../../src/lib/supabase';
import { motion } from 'framer-motion';
import { Navbar, Footer } from '../Layout';
import { FuturisticBackground, FuturisticCursor, MouseGlow } from '../ui/Effects';

export const ContactPage = ({ onSignUp }: { onSignUp?: () => void }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const { error } = await supabase
                .from('contact_messages')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        message_body: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden relative selection:bg-purple-500/30">
            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />
            <Navbar onSignUp={onSignUp} />

            <main className="relative z-10 pt-[150px] pb-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Have questions about the Founders Club? Want to know more about Kira? We're here to listen.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="text-5xl mb-4">✨</div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-purple-400 hover:text-purple-300 underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="Tell us what's on your mind..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};
