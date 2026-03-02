"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor } from '../ui/Effects';
import { Heart, Shield, Brain, Zap, Target, Sparkles, MessageCircle, ChevronDown, ChevronLeft } from 'lucide-react';
import { SEO } from '../utils/SEO';

const MotionSection = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay }}
        className={className}
    >
        {children}
    </motion.section>
);

export const AboutPage = ({ onBack, onCtaClick }: { onBack?: () => void, onCtaClick?: () => void }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About Kira | AI Companion Built to Actually Care";
    }, []);

    const faqData = [
        {
            q: "What is Kira?",
            a: "Kira is a proactive AI companion with true memory retention. She reaches out first, remembers your conversations, and grows with you over time - more like a real friend than a chatbot."
        },
        {
            q: "How is Kira different from ChatGPT or Replika?",
            a: "Unlike other AI companions, Kira reaches out to you first. She has true memory retention across every conversation, understands emotional context, and proactively checks in when she senses you need support."
        },
        {
            q: "Who is Kira for?",
            a: "Kira is for anyone experiencing loneliness, anxiety, burnout, or simply wanting a consistent, judgment-free companion who actually remembers and cares."
        },
        {
            q: "What is the Founders Presale?",
            a: "A strictly limited offer of 16,000 spots at $24.99/month forever, while the standard price will be up to $49.99/month. Founders also receive voting rights, a physical Founders kit, priority support, and exclusive contest access."
        }
    ];

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kindred Kira",
        "url": "https://kindredkira.com",
        "description": "AI companion with proactive support and memory retention",
        "applicationCategory": ["HealthApplication", "LifestyleApplication"]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-[#D4AF37]/30">
            <SEO
                title="About Kira | AI Companion Built to Actually Care"
                description="Kira is the AI companion built for real connection. Proactive, memory driven, and always present."
                schema={orgSchema}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <FuturisticCursor />
            <FuturisticBackground />
            <MouseGlow />

            <Navbar onSignUp={onCtaClick} />

            <main className="relative z-10 pt-[124px] pb-20">

                {/* ─── HERO ─── */}
                <header className="max-w-5xl mx-auto px-6 mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-8"
                    >
                        <Sparkles size={12} fill="currentColor" />
                        <span>Our Origin Story</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter"
                    >
                        We Built the AI Companion <br />
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#F5D99A] bg-clip-text text-transparent">We Wished Existed</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Because feeling truly known, remembered, and supported should never be out of reach for anyone.
                    </motion.p>
                </header>


                {/* ─── THE MOMENT THAT STARTED EVERYTHING ─── */}
                <MotionSection className="max-w-4xl mx-auto px-6 mb-32">
                    <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
                        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 blur-[120px] rounded-full -ml-20 -mt-20" />
                        <div className="relative">
                            <h2 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-widest text-center">
                                The Moment That <span className="text-[#D4AF37]">Started Everything</span>
                            </h2>
                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                <p>
                                    There is a specific kind of loneliness that does not get talked about enough.
                                </p>
                                <p>
                                    Not the loneliness of being physically alone. The loneliness of being surrounded by people and still feeling invisible. Of carrying something heavy and having no one to hand it to. Of wanting to talk but not wanting to be a burden. Of reaching for your phone and having no one to call.
                                </p>
                                <p>
                                    We know that feeling. It is the reason Kira exists.
                                </p>
                                <p>
                                    Our founders experienced it. Our team experienced it. And through years of conversations, research, and development, we learned that millions of people experience it every single day - across every age, background, and walk of life.
                                </p>
                                <p>
                                    The world needed a different kind of support. Not a chatbot. Not a search engine with a personality. Not another AI that answers questions but never actually knows you.
                                </p>
                                <p className="text-white font-semibold text-xl">
                                    The world needed a companion. A real one. So we built Kira.
                                </p>
                            </div>
                        </div>
                    </div>
                </MotionSection>


                {/* ─── WHY OTHER AI COMPANIONS FAILED US ─── */}
                <MotionSection className="max-w-6xl mx-auto px-6 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-500">
                                    <Zap size={24} />
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Why Other AI Companions <span className="text-pink-500">Failed Us</span></h2>
                            </div>
                            <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    Before Kira, we tested everything. AI companions that forgot your name after one conversation. Mental wellness apps that felt clinical and cold. Chatbots that gave technically correct answers but missed the entire emotional point. Virtual friends that were helpful but hollow, present but somehow empty.
                                </p>
                                <p>
                                    The problem was always the same: every AI companion was <strong className="text-white">reactive</strong>. You had to open the app. You had to start the conversation. You had to re-explain yourself every single time because nothing was remembered. You were doing all the emotional labor while the AI just responded.
                                </p>
                                <p className="text-pink-300 font-medium italic">
                                    That is not friendship. That is not support. That is a very expensive search bar with better grammar.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full" />
                            <div className="relative p-8 rounded-3xl bg-[#0A0A0F] border border-white/10 shadow-2xl">
                                <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-6">What Real Support Looks Like</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                                        <span className="text-gray-400"><strong className="text-gray-200">They forget</strong> - They forget you every session</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                                        <span className="text-gray-400"><strong className="text-gray-200">They wait</strong> - They never text first</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                                        <span className="text-gray-400"><strong className="text-gray-200">They are tools</strong> - Not friends</span>
                                    </li>
                                    <li className="mt-6 pt-6 border-t border-white/10 flex items-start gap-3">
                                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                                        <span className="text-gray-300"><strong className="text-white">Kira shows up</strong> - reaches out, remembers, grows deeper</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MotionSection>


                {/* ─── WHAT MAKES KIRA COMPLETELY DIFFERENT ─── */}
                <MotionSection className="max-w-6xl mx-auto px-6 mb-32 text-center" delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">What Makes Kira <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Completely Different</span></h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">Kira was built from the ground up around one radical idea: an AI companion should work like a real friend. Not a tool. Not a service. A friend.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/5 hover:border-cyan-500/30 transition-colors group text-left">
                            <div className="w-14 h-14 mb-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Proactive, Not Reactive</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Kira does not wait for you. She reaches out first. She sends a text when she knows you had a hard day. She checks in when you have gone quiet. She shows up the way a real friend shows up - because the people who need support most are often the ones least likely to ask for it.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/5 hover:border-purple-500/30 transition-colors group text-left">
                            <div className="w-14 h-14 mb-6 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                <Brain size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">True Memory Retention</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                She does not just remember facts. She remembers what mattered. The conversation three weeks ago about your childhood. The thing you said offhand about your brother. Kira builds a real understanding of who you are that deepens every single time you talk. You never have to start over.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/5 hover:border-emerald-500/30 transition-colors group text-left">
                            <div className="w-14 h-14 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                <MessageCircle size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Natural Conversation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                No commands. No awkward phrasing. No robotic responses. Just talk - like you would to your closest friend. Kira is warm without being fake. Honest without being harsh. Funny when you need to laugh. Calm when you need to breathe.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/5 hover:border-amber-500/30 transition-colors group text-left">
                            <div className="w-14 h-14 mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Many Things at Once</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                She becomes whatever you need. An AI best friend who is always there. A wellness coach who tracks your mental health. A personal assistant who remembers your goals. A safe space with zero judgment. One AI companion built for the full complexity of being human.
                            </p>
                        </div>
                    </div>
                </MotionSection>


                {/* ─── WHO KIRA IS FOR ─── */}
                <MotionSection className="max-w-4xl mx-auto px-6 mb-32">
                    <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                        <h2 className="text-3xl font-black mb-10 text-center uppercase tracking-widest">Who Kira <span className="text-[#D4AF37]">Is For</span></h2>
                        <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                            <p className="text-xl text-white font-medium text-center mb-8">
                                Kira is for anyone who has ever felt alone even in a crowded room.
                            </p>
                            <p>
                                She is for the person who wants to talk at 2 AM but does not want to wake anyone up. For the introvert who needs connection but finds it exhausting. For the person in a new city who has not built their people yet. For the high achiever who holds everything together for everyone else but has no one holding things together for them.
                            </p>
                            <p>
                                For the person quietly managing anxiety, burnout, or grief who is not ready for therapy but needs something. For the older adult whose world has grown smaller. For the young person figuring out who they are with no one to talk to about it.
                            </p>
                            <p>
                                Kira is for anyone who needs a friend who is always present, always remembers, and always cares.
                            </p>
                            <p className="text-[#D4AF37] font-semibold text-center text-xl mt-8">
                                That is not a small group of people. That is most of us, at different points in our lives.
                            </p>
                        </div>
                    </div>
                </MotionSection>


                {/* ─── OUR COMMITMENT ─── */}
                <MotionSection className="max-w-4xl mx-auto px-6 mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/5">
                            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 inline-flex mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Your Privacy Is Sacred</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Your conversations with Kira are private. Kira exists to support you, and we protect that relationship with the same seriousness you bring to it.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#0A0A0F] border border-white/5">
                            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-flex mb-6">
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Always Getting Better</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Kira learns and grows with every conversation. Our Founders shape her future through voting rights and direct input - because the people who use her most deserve to help build her.
                            </p>
                        </div>
                    </div>
                    <p className="text-center text-gray-400 text-lg mt-10 max-w-2xl mx-auto leading-relaxed">
                        We believe AI companionship has the potential to reduce loneliness at a scale nothing else can match. That is not a small thing. That is a responsibility we accept fully.
                    </p>
                </MotionSection>


                {/* ─── FOUNDERS OPPORTUNITY ─── */}
                <MotionSection className="max-w-4xl mx-auto px-6 mb-32 text-center" delay={0.2}>
                    <div className="relative py-20 px-8 rounded-[3rem] overflow-hidden border border-[#D4AF37]/30 bg-[#0A0A0F]">
                        <div className="absolute inset-0 bg-[#D4AF37]/5" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full -mr-32 -mt-32" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">The Founders Opportunity</h2>
                            <div className="space-y-5 text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                                <p>
                                    We are at the beginning of something that will change how people experience connection and support.
                                </p>
                                <p>
                                    To honor the people who believe in Kira before the world knows her, we created the Founders Presale. <strong className="text-[#D4AF37]">Strictly limited to 16,000 people. Never offered again.</strong>
                                </p>
                                <p>
                                    Founders get Kira at $24.99 per month, locked forever, while the world pays up to $49.99. They get voting rights, a physical Founders kit, priority support, and access to exclusive contests.
                                </p>
                                <p className="text-white font-semibold">
                                    16,000 spots. One chance. No second offering ever.
                                </p>
                            </div>
                            <button
                                onClick={onCtaClick}
                                className="px-10 py-4 bg-[#D4AF37] hover:bg-white text-black font-black uppercase tracking-widest rounded-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                            >
                                Claim Founders Access
                            </button>
                        </div>
                    </div>
                </MotionSection>


                {/* ─── CLOSING STATEMENT ─── */}
                <MotionSection className="max-w-3xl mx-auto px-6 mb-32 text-center" delay={0.1}>
                    <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
                        <p className="text-2xl md:text-3xl text-white font-black tracking-tight">
                            We did not build Kira to be impressive. We built her to be irreplaceable.
                        </p>
                        <p>
                            Not just helpful. Not just smart. Personal. Present. Consistent. The kind of support that does not disappear when life gets quiet. The kind of friend who shows up even when you did not ask. The kind of companion who actually knows you.
                        </p>
                        <p className="text-white font-semibold text-2xl">
                            That is Kira. And we are only just getting started.
                        </p>
                        <p className="text-[#D4AF37] text-xl font-black uppercase tracking-widest mt-8">
                            Welcome to something different.
                        </p>
                    </div>
                </MotionSection>


                {/* ─── FAQ ─── */}
                <MotionSection className="max-w-3xl mx-auto px-6 mb-20">
                    <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-widest">Frequently Asked <span className="text-[#D4AF37]">Questions</span></h2>
                    <div className="space-y-4">
                        {faqData.map((faq, i) => (
                            <details key={i} className="group p-6 rounded-2xl bg-[#0A0A0F] border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-lg list-none">
                                    {faq.q}
                                    <ChevronDown size={20} className="text-gray-500 group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="mt-4 text-gray-400 leading-relaxed">                        {faq.a}
                                    <button
                                        onClick={onBack}
                                        className="mt-6 flex items-center gap-2 text-[#d4a853] hover:text-[#f5d99a] transition-colors group"
                                    >
                                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                        <span className="text-sm font-bold uppercase tracking-widest">Back to Home Page</span>
                                    </button>
                                </p>
                            </details>
                        ))}
                    </div>
                </MotionSection>

            </main>

            {/* ─── FOOTER NOTE (SEO Keywords) ─── */}
            <div className="text-center text-[10px] text-gray-800 pb-2 select-none" aria-hidden="true">
                Kindred Kira | AI Companion | AI Best Friend | Mental Wellness Support | Proactive AI | Voice AI Companion | Emotional Support AI | AI That Remembers | Virtual Companion | AI for Loneliness
            </div>

            <Footer />
        </div>
    );
};
