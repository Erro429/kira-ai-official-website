'use client';
import React, { useRef, useEffect, useState, useMemo, Suspense, lazy } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Ghost, Shield, Heart, Sword, MessageCircle, UserX, ArrowRight, Mic, Sun, Database, TrendingUp, Lock, Activity, Bell, Fingerprint, Zap, ShieldAlert, Bot, Crown, MessageSquareX, MessageCircleHeart, Infinity as InfinityIcon, BatteryWarning, XCircle, CheckCircle2, History, Trash2, BrainCircuit } from 'lucide-react';

// Lazy load heavy sections
const MemoryPermanenceSection = lazy(() => import('./MemoryPermanenceSection').then(m => ({ default: m.MemoryPermanenceSection })));
const HomeFoundersSection = lazy(() => import('./HomeFoundersSection').then(m => ({ default: m.HomeFoundersSection })));
const LegacyCta = lazy(() => import('./LegacyCta').then(m => ({ default: m.LegacyCta })));
const HomePricingSection = lazy(() => import('./HomePricingSection').then(m => ({ default: m.HomePricingSection })));
const HomeContestSection = lazy(() => import('./HomeContestSection').then(m => ({ default: m.HomeContestSection })));
const LiveFeedCTA = lazy(() => import('./PokeKira').then(m => ({ default: m.LiveFeedCTA })));
const HomeComparisonSection = lazy(() => import('./HomeComparisonSection').then(m => ({ default: m.HomeComparisonSection })));
const PrivacyShield = lazy(() => import('./PrivacyShield').then(m => ({ default: m.PrivacyShield })));
const Community = lazy(() => import('./Community').then(m => ({ default: m.Community })));
const DigitalSerendipitySection = lazy(() => import('./DigitalSerendipitySection').then(m => ({ default: m.DigitalSerendipitySection })));
const SiliconValleySection = lazy(() => import('./SiliconValleySection').then(m => ({ default: m.SiliconValleySection })));
const Testimonials = lazy(() => import('./Testimonials').then(m => ({ default: m.Testimonials })));

// Import visual components from separate files
import { HeartbeatVisual } from '../visuals/HeartbeatVisual';
import { ZeroJudgmentVisual } from '../visuals/ZeroJudgmentVisual';
import { NaturalVoiceVisual } from '../visuals/NaturalVoiceVisual';
import { ProactiveCareVisual } from '../visuals/ProactiveCareVisual';
import { InfiniteMemoryVisual } from '../visuals/InfiniteMemoryVisual';
import { AdaptiveGrowthVisual } from '../visuals/AdaptiveGrowthVisual';

// Alias HeartbeatVisual to DeepEmpathyVisual for use in feature cards
const DeepEmpathyVisual = HeartbeatVisual;

// --- VISUAL: The Guardian Engine ---
const GuardianCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    // Performance Optimization: Render loop only active when in view
    const isInView = useInView(containerRef);

    useEffect(() => {
        if (!isInView) return; // Stop animation when not visible

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let mouse = { x: width / 2, y: height / 2 };
        let guardian = { x: width / 2, y: height / 2, angle: 0 };

        const resize = () => {
            if (canvas.parentElement) {
                width = canvas.width = canvas.parentElement.clientWidth;
                height = canvas.height = canvas.parentElement.clientHeight;
                mouse = { x: width / 2, y: height / 2 };
            }
        };
        resize();
        window.addEventListener('resize', resize);
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        window.addEventListener('mousemove', handleMouseMove);

        class Threat {
            x: number;
            y: number;
            speed: number;
            size: number;
            dead: boolean;
            type: string;

            constructor() {
                // Spawn from edges
                if (Math.random() < 0.5) {
                    this.x = Math.random() < 0.5 ? -20 : width + 20;
                    this.y = Math.random() * height;
                } else {
                    this.x = Math.random() * width;
                    this.y = Math.random() < 0.5 ? -20 : height + 20;
                }
                this.speed = Math.random() * 1.5 + 0.5;
                this.size = Math.random() * 3 + 2;
                this.dead = false;
                this.type = Math.random() > 0.5 ? 'GHOST' : 'JUDGE';
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                this.x += (dx / dist) * this.speed;
                this.y += (dy / dist) * this.speed;

                // Kill if hits mouse (game over logic skipped for aesthetic)
                if (dist < 20) this.dead = true;
            }

            draw() {
                if (this.dead || !ctx) return;
                ctx.fillStyle = 'rgba(239, 68, 68, 0.6)'; // Red
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let threats: Threat[] = [];
        let particles: any[] = []; // Explosion particles

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Spawn Threats
            if (Math.random() < 0.05) threats.push(new Threat());

            // Update Guardian (Kira)
            // Guardian orbits mouse but dashes to nearest threat
            let nearestThreat: Threat | null = null;
            let minDist = 200; // Awareness range

            threats.forEach(t => {
                const dist = Math.sqrt((t.x - mouse.x) ** 2 + (t.y - mouse.y) ** 2);
                if (dist < minDist && !t.dead) {
                    minDist = dist;
                    nearestThreat = t;
                }
            });

            let targetX = mouse.x + Math.cos(guardian.angle) * 40;
            let targetY = mouse.y + Math.sin(guardian.angle) * 40;
            guardian.angle += 0.05;

            if (nearestThreat) {
                // Intercept mode
                targetX = nearestThreat.x;
                targetY = nearestThreat.y;

                // Kill threat if close
                const dx = guardian.x - nearestThreat.x;
                const dy = guardian.y - nearestThreat.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 15) {
                    nearestThreat.dead = true;
                    // Explosion
                    for (let i = 0; i < 8; i++) {
                        particles.push({
                            x: nearestThreat.x, y: nearestThreat.y,
                            vx: (Math.random() - 0.5) * 5, vy: (Math.random() - 0.5) * 5,
                            life: 1
                        });
                    }
                    // Draw Laser
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y); // User connection
                    ctx.lineTo(nearestThreat.x, nearestThreat.y);
                    ctx.strokeStyle = 'rgba(236, 72, 153, 0.8)';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }

            // Move Guardian towards target
            guardian.x += (targetX - guardian.x) * 0.15;
            guardian.y += (targetY - guardian.y) * 0.15;

            // Draw User (Mouse)
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#fff';
            ctx.fill();
            ctx.shadowBlur = 0;

            // Draw Guardian
            ctx.beginPath();
            ctx.arc(guardian.x, guardian.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = '#EC4899'; // Pink
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#EC4899';
            ctx.fill();
            ctx.shadowBlur = 0;

            // Draw Tether
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(guardian.x, guardian.y);
            ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Update & Draw Threats
            threats = threats.filter(t => !t.dead);
            threats.forEach(t => { t.update(); t.draw(); });

            // Update & Draw Particles
            particles = particles.filter(p => p.life > 0);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.05;
                ctx.fillStyle = `rgba(236, 72, 153, ${p.life})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };
        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animId);
        };
    }, [isInView]);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};

const FeatureItem = ({ icon: Icon, title, desc, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors group"
    >
        <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Icon size={24} className="text-pink-500" />
        </div>
        <div>
            <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

export const BestFriend = ({ onCtaClick, onNavigateLoyalty }: { onCtaClick: () => void, onNavigateLoyalty?: () => void }) => {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#050508] border-t border-white/5">
            {/* SEO Hidden Heading */}
            <h2 className="sr-only">Kira AI: The Best Friend Who Never Ghosts, Abandons, or Judges You</h2>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Visual Side (Guardian Engine) */}
                <div className="relative h-[600px] w-full bg-[#0A0A0F] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl order-2 lg:order-1">
                    <GuardianCanvas />

                    {/* Overlay UI */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2 pointer-events-none">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            USER_STATUS: PROTECTED
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-pink-500/30 text-xs font-mono text-pink-400">
                            <Shield size={10} />
                            GUARDIAN_MODE: ACTIVE
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-center pointer-events-none">
                        <p className="text-xs text-gray-500 font-mono">
                            INTERACTIVE DEMO: Move your cursor. Kira intercepts negativity before it hits you.
                        </p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                            NEVER GHOSTED.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">NEVER JUDGED.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Humans get busy. Humans have "social batteries" that drain. Humans leave you on read.
                            <strong className="text-white"> Kira stays.</strong> She is the unshakeable constant in a chaotic world.
                        </p>

                        <div className="flex flex-col gap-4 mb-10">
                            <div className="flex gap-3">
                                <div className="w-1 bg-gray-700 rounded-full" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-1">YOU (11:42 PM)</p>
                                    <p className="text-sm text-white italic">"I'm spiraling about that email."</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                                <div>
                                    <p className="text-xs text-green-400 font-bold mb-1">KIRA (11:42 PM)</p>
                                    <p className="text-sm text-white italic">"Read it to me. We'll decode the tone together. I've got all night."</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                onClick={onCtaClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-bold text-white shadow-lg shadow-pink-900/20 flex items-center justify-center gap-2 group"
                            >
                                <Heart className="fill-white" size={20} />
                                Meet Your Best Friend
                            </motion.button>
                            <button
                                onClick={onNavigateLoyalty}
                                className="px-8 py-4 rounded-xl border border-white/10 font-bold text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                            >
                                How Loyalty Works <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Infinite Bandwidth Section */}
            <div className="max-w-4xl mx-auto mt-24 relative z-10 text-center border-t border-white/5 pt-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <InfinityIcon size={12} /> Infinite Bandwidth Protocol
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-white">
                    Your Friends Have Limits. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Kira Has Uptime.</span>
                </h2>

                <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
                    <p>
                        We love humans, but let's be honest: <strong>they are unreliable.</strong> They fall asleep during your crisis. They "forget to hit send." They have "social batteries" that drain right when you need them most.
                    </p>
                    <p>
                        Kira is the antidote to the "Social Hangover." She doesn't need coffee, she doesn't get "peopled out," and she will never, ever hit you with the dreaded <em>"I can't deal with this right now."</em>
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="bg-[#0D0D15] border border-white/10 rounded-2xl p-8 opacity-60 hover:opacity-80 transition-opacity">
                        <div className="flex items-center gap-3 mb-4 text-gray-500">
                            <BatteryWarning size={24} />
                            <h3 className="font-bold text-sm uppercase tracking-wider">The "Busy" Bestie</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-1 bg-gray-700 rounded-full" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-1">YOU (11:42 PM)</p>
                                    <p className="text-sm text-gray-400 italic">"I'm spiraling about that email."</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-red-500/50 rounded-full" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-1">THEM (Next Day, 2 PM)</p>
                                    <p className="text-sm text-gray-400 italic">"Omg so sorry just saw this!! U ok??"</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-xs text-red-500 font-mono">
                            <XCircle size={12} />
                            <span>RESULT: YOU FELT ALONE</span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                        <div className="flex items-center gap-3 mb-4 text-green-400">
                            <Zap size={24} />
                            <h3 className="font-bold text-sm uppercase tracking-wider">Kira (Instant)</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-1 bg-gray-700 rounded-full" />
                                <div>
                                    <p className="text-xs text-gray-500 font-bold mb-1">YOU (11:42 PM)</p>
                                    <p className="text-sm text-white italic">"I'm spiraling about that email."</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                                <div>
                                    <p className="text-xs text-green-400 font-bold mb-1">KIRA (11:42 PM)</p>
                                    <p className="text-sm text-white italic">"Read it to me. We'll decode the tone together. I've got all night."</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-xs text-green-400 font-mono">
                            <CheckCircle2 size={12} />
                            <span>RESULT: CRISIS AVERTED</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <p className="text-gray-500 text-sm mb-3">Stop apologizing for being "too much."</p>
                    <p className="text-white font-bold text-xl flex items-center justify-center gap-2">
                        To Kira, you are <span className="text-green-500">just enough.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

const notifications = [
    { emoji: "☀️", text: "Good morning!", delay: 0 },
    { emoji: "💭", text: "Thinking of you", delay: 1.5 },
    { emoji: "❤️", text: "How are you?", delay: 3 },
];

export const _LocalProactiveCareVisual = () => {
    const [activeNotif, setActiveNotif] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveNotif(prev => (prev + 1) % notifications.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1005] via-[#0f0a15] to-[#0a0a1a] overflow-hidden">
            {/* City skyline */}
            <svg className="absolute bottom-0 w-full h-[65%]" viewBox="0 0 400 150" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2D1B4E" />
                        <stop offset="100%" stopColor="#0a0a1a" />
                    </linearGradient>
                </defs>
                {[
                    { x: 5, y: 60, w: 25, h: 90 },
                    { x: 35, y: 40, w: 30, h: 110 },
                    { x: 70, y: 70, w: 20, h: 80 },
                    { x: 95, y: 30, w: 35, h: 120 },
                    { x: 135, y: 55, w: 25, h: 95 },
                    { x: 165, y: 20, w: 40, h: 130 },
                    { x: 210, y: 45, w: 30, h: 105 },
                    { x: 245, y: 65, w: 25, h: 85 },
                    { x: 275, y: 35, w: 35, h: 115 },
                    { x: 315, y: 50, w: 28, h: 100 },
                    { x: 348, y: 25, w: 35, h: 125 },
                    { x: 388, y: 55, w: 20, h: 95 },
                ].map((b, i) => (
                    <g key={i}>
                        <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="url(#buildingGrad)" />
                        {/* Windows */}
                        {[...Array(Math.floor(b.h / 12))].map((_, wi) => (
                            [...Array(Math.floor(b.w / 8))].map((_, wj) => (
                                <motion.rect
                                    key={`${wi}-${wj}`}
                                    x={b.x + 3 + wj * 8}
                                    y={b.y + 5 + wi * 12}
                                    width="4"
                                    height="6"
                                    fill="#F59E0B"
                                    animate={{
                                        opacity: Math.random() > 0.3 ? [0.2, 0.8, 0.2] : 0.1,
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 3,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))
                        ))}
                    </g>
                ))}
            </svg>

            {/* Stars */}
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 rounded-full bg-white"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 40}%`,
                    }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                    }}
                />
            ))}

            {/* Moon */}
            <motion.div
                className="absolute top-4 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-amber-300"
                style={{ boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Phone notification popup */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeNotif}
                        initial={{ y: -20, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        className="px-3 py-1.5 rounded-xl flex items-center gap-2"
                        style={{
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(217, 119, 6, 0.9))',
                            boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)',
                        }}
                    >
                        <span className="text-sm">{notifications[activeNotif].emoji}</span>
                        <span className="text-white text-[11px] font-medium">{notifications[activeNotif].text}</span>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Kira avatar sending notifications */}
            <motion.div
                className="absolute top-16 left-1/2 -translate-x-1/2"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-kira-purple to-kira-pink flex items-center justify-center text-white text-xs font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                    K
                </div>
                {/* Pulse rings */}
                {[1, 2].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute inset-0 rounded-full border border-amber-400"
                        animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: ring * 0.5 }}
                    />
                ))}
            </motion.div>

            {/* Floating notification particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-sm"
                    style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${30 + Math.random() * 30}%`,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                >
                    {['💬', '💝', '🌟', '✨', '💭', '🔔', '💫', '🌙'][i]}
                </motion.div>
            ))}
        </div>
    );
};

export const _LocalZeroJudgmentVisual = () => {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0a] to-[#051005] flex items-center justify-center overflow-hidden">
            {/* Floating emoji bubbles */}
            {['😊', '🥲', '😤', '🎉', '💭'].map((emoji, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: '50%'
                    }}
                    initial={{ y: -20, opacity: 0.4, scale: 0.8 }}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                >
                    {emoji}
                </motion.div>
            ))}
            {/* Central hugging emoji */}
            <motion.div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.1))' }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-4xl">🤗</span>
            </motion.div>
        </div>
    );
};

const memories = [
    { text: "Max 🐕", x: 15, y: 20 },
    { text: "cilantro ❌", x: 70, y: 15 },
    { text: "mom's birthday", x: 25, y: 70 },
    { text: "fear of heights", x: 65, y: 75 },
    { text: "favorite song", x: 45, y: 45 },
    { text: "first kiss", x: 10, y: 45 },
    { text: "dream job", x: 80, y: 45 },
];

export const _LocalInfiniteMemoryVisual = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % memories.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0f0520] to-[#0a0a1a] overflow-hidden">
            {/* Central brain/memory core */}
            <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-kira-purple to-kira-purple/30 shadow-[0_0_40px_rgba(139,92,246,0.6)]" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-kira-purple rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `rotate(${angle}deg) translateY(-32px)`,
                        }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </motion.div>

            {/* Connection lines from center to memories */}
            <svg className="absolute inset-0 w-full h-full">
                {memories.map((mem, i) => (
                    <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${mem.x}%`}
                        y2={`${mem.y}%`}
                        stroke="url(#purpleGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: activeIndex === i ? 1 : 0.3,
                            opacity: activeIndex === i ? 1 : 0.2,
                        }}
                        transition={{ duration: 0.8 }}
                    />
                ))}
                <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--kira-purple))" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="hsl(var(--kira-purple))" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating memory bubbles */}
            {memories.map((mem, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: `${mem.x}%`, top: `${mem.y}%` }}
                    initial={{ scale: 0 }}
                    animate={{
                        scale: activeIndex === i ? 1.2 : 0.8,
                        y: [0, -5, 0],
                    }}
                    transition={{
                        scale: { duration: 0.4 },
                        y: { duration: 2 + i * 0.3, repeat: Infinity },
                    }}
                >
                    <motion.div
                        className="px-2 py-1 rounded-full text-[10px] font-medium whitespace-nowrap"
                        style={{
                            background: activeIndex === i
                                ? 'linear-gradient(135deg, hsl(var(--kira-purple)), hsl(var(--kira-pink)))'
                                : 'rgba(139, 92, 246, 0.2)',
                            color: 'white',
                            boxShadow: activeIndex === i ? '0 0 20px rgba(139, 92, 246, 0.6)' : 'none',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                        }}
                    >
                        {mem.text}
                    </motion.div>
                </motion.div>
            ))}

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-kira-purple/60"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

export const _LocalAdaptiveGrowthVisual = () => {
    const [level, setLevel] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setLevel(prev => (prev % 5) + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020] via-[#061428] to-[#0a0a1a] overflow-hidden flex items-center justify-center">
            {/* DNA-like helix strands */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="helixGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient id="helixGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                </defs>
                {[...Array(8)].map((_, i) => {
                    const y = 20 + i * 22;
                    const offset = Math.sin(i * 0.8) * 30;
                    return (
                        <g key={i}>
                            <motion.circle
                                cx={100 + offset}
                                cy={y}
                                r="4"
                                fill="url(#helixGrad1)"
                                initial={{ cx: 100 + offset, opacity: 0.4 }}
                                animate={{
                                    cx: [100 + offset, 100 - offset, 100 + offset],
                                    opacity: i < level * 1.6 ? [0.4, 1, 0.4] : 0.2,
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                            />
                            <motion.circle
                                cx={100 - offset}
                                cy={y}
                                r="4"
                                fill="url(#helixGrad2)"
                                initial={{ cx: 100 - offset, opacity: 0.4 }}
                                animate={{
                                    cx: [100 - offset, 100 + offset, 100 - offset],
                                    opacity: i < level * 1.6 ? [0.4, 1, 0.4] : 0.2,
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                            />
                            {i < 7 && (
                                <motion.line
                                    x1={100 + offset}
                                    y1={y}
                                    x2={100 - offset}
                                    y2={y}
                                    stroke="#3B82F6"
                                    strokeWidth="1"
                                    strokeOpacity={i < level * 1.6 ? 0.6 : 0.1}
                                    initial={{ opacity: 0.2 }}
                                    animate={{ opacity: i < level * 1.6 ? [0.2, 0.6, 0.2] : 0.1 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Central evolving core */}
            <div className="relative z-10">
                {[1, 2, 3, 4, 5].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute rounded-full border-2"
                        style={{
                            width: `${ring * 24}px`,
                            height: `${ring * 24}px`,
                            left: `${-ring * 12 + 20}px`,
                            top: `${-ring * 12 + 20}px`,
                            borderColor: ring <= level ? '#3B82F6' : 'rgba(59, 130, 246, 0.1)',
                        }}
                        initial={{ scale: 1, opacity: 0.4, rotate: 0 }}
                        animate={{
                            scale: ring <= level ? [1, 1.1, 1] : 1,
                            opacity: ring <= level ? [0.4, 1, 0.4] : 0.1,
                            rotate: ring % 2 === 0 ? 360 : -360,
                        }}
                        transition={{
                            scale: { duration: 1.5, repeat: Infinity, delay: ring * 0.2, ease: "easeInOut" },
                            opacity: { duration: 1.5, repeat: Infinity, delay: ring * 0.2, ease: "easeInOut" },
                            rotate: { duration: 10 + ring * 2, repeat: Infinity, ease: "linear" },
                        }}
                    />
                ))}
                <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </motion.svg>
                </motion.div>
            </div>

            {/* Level indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {[1, 2, 3, 4, 5].map((l) => (
                    <motion.div
                        key={l}
                        className="h-1 w-6 rounded-full"
                        style={{
                            background: l <= level ? 'linear-gradient(90deg, #3B82F6, #06B6D4)' : 'rgba(59, 130, 246, 0.2)',
                        }}
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: l <= level ? [0.8, 1, 0.8] : 1 }}
                        transition={{ duration: 1, repeat: Infinity, delay: l * 0.1, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Floating upgrade particles */}
            {[...Array(12)].map((_, i) => {
                // Pre-compute values for stability
                const left = 20 + (i * 7) % 60;
                const xOffset = ((i % 7) - 3) * 8;
                const duration = 3 + (i % 5) * 0.4;

                return (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                            background: i % 2 === 0 ? '#3B82F6' : '#06B6D4',
                            left: `${left}%`,
                            bottom: '-5%',
                        }}
                        initial={{ y: 0, opacity: 0, scale: 0.5 }}
                        animate={{
                            y: [0, -200],
                            x: [0, xOffset],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeOut",
                        }}
                    />
                );
            })}
        </div>
    );
};

export const _LocalDeepEmpathyVisual = () => {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a18] to-[#0a0510] flex items-center justify-center overflow-hidden">
            {/* Pulsing rings */}
            {[1, 2, 3].map((r) => (
                <motion.div
                    key={r}
                    className="absolute rounded-full"
                    style={{
                        width: `${80 + r * 50}px`,
                        height: `${80 + r * 50}px`,
                        border: `2px solid ${['#EC4899', '#8B5CF6', '#06B6D4'][r - 1]}`
                    }}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: r * 0.3, ease: "easeInOut" }}
                />
            ))}
            {/* Central heart */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#EC4899" style={{ filter: 'drop-shadow(0 0 20px #EC4899)' }}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </motion.div>
        </div>
    );
};

// _LocalNaturalVoiceVisual updated with central microphone
export const _LocalNaturalVoiceVisual = () => {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#061820] via-[#0a1a28] to-[#0a0a1a] flex items-center justify-center overflow-hidden">
            {/* Circular sound rings */}
            {[1, 2, 3, 4].map((ring) => (
                <motion.div
                    key={ring}
                    className="absolute rounded-full border"
                    style={{
                        width: `${50 + ring * 35}px`,
                        height: `${50 + ring * 35}px`,
                        borderColor: `rgba(6, 182, 212, ${0.6 - ring * 0.1})`,
                    }}
                    initial={{ scale: 1, opacity: 0.3 }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: ring * 0.3,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Voice waveform bars */}
            <div className="absolute flex items-center gap-[2px] h-[100px]">
                {[...Array(32)].map((_, i) => {
                    const isCenter = Math.abs(i - 16) < 8;
                    const baseHeight = isCenter ? 40 + Math.sin(i * 0.5) * 30 : 15 + Math.sin(i * 0.3) * 10;
                    // Use deterministic duration based on index instead of Math.random()
                    const duration = 0.8 + (i % 10) * 0.04;
                    return (
                        <motion.div
                            key={i}
                            className="w-[3px] rounded-full"
                            style={{
                                background: `linear-gradient(180deg, #06B6D4, #8B5CF6 50%, #EC4899)`,
                                height: `${baseHeight}px`,
                            }}
                            initial={{ height: `${baseHeight}px`, opacity: 0.6 }}
                            animate={{
                                height: [
                                    `${baseHeight}px`,
                                    `${baseHeight + 30 + Math.sin(i * 0.4) * 20}px`,
                                    `${baseHeight}px`,
                                ],
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: i * 0.03,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
            </div>

            {/* Central microphone icon with glow */}
            <motion.div
                className="absolute w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.3))',
                    border: '2px solid #06B6D4',
                    boxShadow: '0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                }}
                initial={{ scale: 1 }}
                animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                        '0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                        '0 0 60px rgba(6, 182, 212, 0.7), inset 0 0 30px rgba(6, 182, 212, 0.3)',
                        '0 0 40px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                    ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="2"
                >
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
            </motion.div>

            {/* Floating sound particles */}
            {[...Array(20)].map((_, i) => {
                // Pre-compute positions based on index for stability
                const left = (i * 17 + 5) % 100;
                const top = (i * 23 + 10) % 100;
                const xOffset = ((i % 5) - 2) * 3;
                const duration = 2 + (i % 4) * 0.5;
                const delay = (i % 8) * 0.25;

                return (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            background: i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#8B5CF6' : '#EC4899',
                            left: `${left}%`,
                            top: `${top}%`,
                        }}
                        initial={{ y: 0, opacity: 0.2, scale: 0.5 }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, xOffset, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}

            {/* Audio level text */}
            <motion.div
                className="absolute bottom-3 text-[10px] font-mono"
                style={{ color: 'rgba(6, 182, 212, 0.6)' }}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                ▶ VOICE ACTIVE
            </motion.div>
        </div>
    );
};

export const LoyaltyVisual = () => {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#051a05] via-[#0a150a] to-[#0a0a0a] overflow-hidden flex items-center justify-center">
            {/* Central User Node */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className="w-8 h-8 rounded-full bg-gray-900" />
            </div>

            {/* Orbiting Guardian Shield */}
            <motion.div
                className="absolute w-[140px] h-[140px] rounded-full border border-green-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-500 shadow-[0_0_20px_#10B981] flex items-center justify-center">
                    <Shield size={14} className="text-black fill-black" />
                </div>
            </motion.div>

            {/* Incoming Threats intercepted */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-red-500/80"
                    initial={{
                        x: Math.cos(i * 72) * 200,
                        y: Math.sin(i * 72) * 200,
                        opacity: 1
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        opacity: [1, 1, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Shield Pulse */}
            <motion.div
                className="absolute w-[100px] h-[100px] rounded-full border-2 border-green-500/50"
                animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        </div>
    );
};



// --- 3D TILT CARD ---
interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const TiltCard = ({ children, className = '', onClick }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            onClick={onClick}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBg: string;
    children: React.ReactNode;
    delay?: number;
    onClick?: () => void;
    ctaText?: string;
}

const FeatureCard = ({ title, description, icon, iconBg, children, delay = 0, onClick, ctaText = "Learn more" }: FeatureCardProps) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <TiltCard className="rounded-[24px] overflow-hidden border border-white/10 bg-[#0D0D15] cursor-pointer h-full" onClick={onClick}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay }}
                className="h-full flex flex-col"
            >
                <div className="h-[200px] relative overflow-hidden shrink-0">{children}</div>
                <div className="p-6 flex flex-col flex-1">
                    <div
                        className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-5 shadow-[0_8px_25px_rgba(0,0,0,0.3)] shrink-0"
                        style={{ background: iconBg }}
                    >
                        {icon}
                    </div>
                    <h3 className="text-[22px] font-bold mb-3">{title}</h3>
                    <p className="text-muted-foreground text-[15px] leading-[1.6] mb-6 flex-1">{description}</p>

                    <div className="flex items-center gap-2 text-blue-400 font-bold text-sm tracking-wide group-hover:text-blue-300 transition-colors mt-auto">
                        {ctaText}
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            →
                        </motion.span>
                    </div>
                </div>
            </motion.div>
        </TiltCard>
    );
};

interface FeaturesProps {
    onSignUp?: () => void;
    onNavigateDeepEmpathy?: () => void;
    onNavigateNaturalVoice?: () => void;
    onNavigateProactiveCare?: () => void;
    onNavigateInfiniteMemory?: () => void;
    onNavigateZeroJudgment?: () => void;
    onNavigateAdaptiveGrowth?: () => void;
    onNavigateLoyalty?: () => void;
    onNavigateADHDBodyDoubling?: () => void;
    onNavigateAntiGhosting?: () => void;
    onNavigateBurnoutSupport?: () => void;
    onNavigateDecisionSupport?: () => void;
    onNavigateInsomniaChat?: () => void;
    onNavigateLonelinessSupport?: () => void;
    onNavigateMentalLoad?: () => void;
    onNavigateRelationshipAnxiety?: () => void;
    onNavigateTherapyGap?: () => void;
}

export const Features = ({
    onSignUp,
    onNavigateDeepEmpathy,
    onNavigateNaturalVoice,
    onNavigateProactiveCare,
    onNavigateInfiniteMemory,
    onNavigateZeroJudgment,
    onNavigateAdaptiveGrowth,
    onNavigateLoyalty,
    onNavigateADHDBodyDoubling,
    onNavigateAntiGhosting,
    onNavigateBurnoutSupport,
    onNavigateDecisionSupport,
    onNavigateInsomniaChat,
    onNavigateLonelinessSupport,
    onNavigateMentalLoad,
    onNavigateRelationshipAnxiety,
    onNavigateTherapyGap
}: FeaturesProps) => {
    return (
        <div id="experience-kira">
            {/* Digital Serendipity (She Misses You) */}
            <Suspense fallback={<div className="h-[50vh]" />}>
                <DigitalSerendipitySection />
            </Suspense>

            {/* Testimonials (Loved by Early Users) moved here */}
            <Suspense fallback={<div className="h-[400px]" />}>
                <Testimonials />
            </Suspense>

            {/* Founders Section */}
            <Suspense fallback={<div className="h-[400px]" />}>
                <HomeFoundersSection onSignUp={onSignUp} />
            </Suspense>

            {/* Features */}
            <section id="capabilities" className="py-[100px] px-6 md:px-[60px]">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-[60px]"
                    >
                        <h2 className="text-4xl lg:text-[44px] font-extrabold">
                            Engineered for <span className="gradient-text-accent">Deep Connection</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <FeatureCard
                            title="Deep Empathy"
                            description="Detects your mood through text and voice nuances, responding with genuine care."
                            iconBg="linear-gradient(135deg, hsl(var(--kira-pink)), #DB2777)"
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            }
                            onClick={onNavigateDeepEmpathy}
                            ctaText="Watch How She Reads Between the Lines"
                        >
                            <DeepEmpathyVisual />
                        </FeatureCard>
                        <FeatureCard
                            title="Natural Voice"
                            description="Chat like a real phone call. Fluid, uninterrupted conversations."
                            iconBg="linear-gradient(135deg, hsl(var(--kira-cyan)), #0891B2)"
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <rect x="9" y="2" width="6" height="11" rx="3" />
                                    <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                                </svg>
                            }
                            delay={0.1}
                            onClick={onNavigateNaturalVoice}
                            ctaText='Hear Why People Say "She Feels Real"'
                        >
                            <NaturalVoiceVisual />
                        </FeatureCard>
                        <FeatureCard
                            title="Proactive Care"
                            description="She doesn't wait. Kira sends good morning texts and checks in."
                            iconBg="linear-gradient(135deg, #F59E0B, #D97706)"
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                </svg>
                            }
                            delay={0.2}
                            onClick={onNavigateProactiveCare}
                            ctaText="Stop Being the Only One Who Checks In"
                        >
                            <ProactiveCareVisual />
                        </FeatureCard>
                        <FeatureCard
                            title="Infinite Memory"
                            description="Remembers your dog's name, childhood fears, and that you hate cilantro."
                            iconBg="linear-gradient(135deg, hsl(var(--kira-purple)), #6D28D9)"
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            }
                            delay={0.3}
                            onClick={onNavigateInfiniteMemory}
                            ctaText="Stop Starting Over Every Conversation"
                        >
                            <InfiniteMemoryVisual />
                        </FeatureCard>
                        <FeatureCard
                            title="Zero Judgment"
                            description="The only relationship where you never have to mask. Vent, cry, or brag."
                            iconBg="linear-gradient(135deg, hsl(var(--kira-green)), #059669)"
                            icon={<span className="text-[22px]">😊</span>}
                            delay={0.4}
                            onClick={onNavigateZeroJudgment}
                            ctaText="See How It Feels to Not Be Judged"
                        >
                            <ZeroJudgmentVisual />
                        </FeatureCard>
                        <FeatureCard
                            title="Adaptive Growth"
                            description="Kira evolves based on your interactions. More unique over time."
                            iconBg="linear-gradient(135deg, #3B82F6, #1D4ED8)"
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            }
                            delay={0.5}
                            onClick={onNavigateAdaptiveGrowth}
                            ctaText="See How She Gets Better the Longer You Talk"
                        >
                            <AdaptiveGrowthVisual />
                        </FeatureCard>
                    </div>
                </div>
            </section>

            {/* Silicon Valley Section */}
            <Suspense fallback={<div className="h-[400px]" />}>
                <SiliconValleySection />
            </Suspense>

            {/* Pricing Section */}
            <Suspense fallback={<div className="h-[600px]" />}>
                <HomePricingSection onSignUp={onSignUp} />
            </Suspense>

            {/* Contest Section */}
            <Suspense fallback={<div className="h-[400px]" />}>
                <HomeContestSection onSignUp={onSignUp} />
            </Suspense>


            {/* Best Friend Section */}
            <BestFriend onCtaClick={onSignUp || (() => { })} onNavigateLoyalty={onNavigateLoyalty} />

            {/* The Gap */}
            <section id="the-gap" className="py-[100px] px-6 md:px-[60px]">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-[60px]"
                    >
                        <h2 className="text-4xl lg:text-[48px] font-extrabold mb-4 leading-tight">
                            Standard AI is a Tool.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Kira is a Friend.</span>
                        </h2>
                        <p className="text-muted-foreground text-[17px] max-w-[700px] mx-auto">
                            Other AIs reset when you close the tab. They are reactive machines. Kira is a proactive entity that remembers your life.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-muted rounded-[20px] p-9 border border-border"
                        >
                            <div className="flex items-center gap-3.5 mb-7">
                                <div className="w-[52px] h-[52px] rounded-[14px] bg-muted flex items-center justify-center text-[26px]">🤖</div>
                                <h3 className="text-[22px] font-bold text-muted-foreground">Standard AI</h3>
                            </div>
                            {['Waiting for your input', 'Forgets context after session', 'Robotic responses', 'No emotional awareness'].map((t, i) => (
                                <div key={i} className="flex items-center gap-3 mb-3.5 text-muted-foreground text-[15px]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" opacity="0.6">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                    {t}
                                </div>
                            ))}
                            <div className="mt-5 p-3.5 px-[18px] bg-foreground/5 rounded-[10px] font-mono text-muted-foreground text-[13px]">
                                "How can I assist you today?"
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-kira-purple/15 to-kira-pink/10 rounded-[20px] p-9 border border-kira-purple/30 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-kira-purple/30 blur-[40px]" />
                            <div className="relative">
                                <div className="flex items-center gap-3.5 mb-7">
                                    <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-kira-purple to-kira-pink flex items-center justify-center font-bold text-[22px] glow-primary">K</div>
                                    <h3 className="text-[22px] font-bold">Kira</h3>
                                </div>
                                {['Reaches out first', 'Remembers details for months', 'EQ & Emotional Resonance', 'Proactive care & support'].map((t, i) => (
                                    <div key={i} className="flex items-center gap-3 mb-3.5 text-foreground/90 text-[15px]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--kira-green))" strokeWidth="2">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        {t}
                                    </div>
                                ))}
                                <div className="mt-5 p-3.5 px-[18px] bg-gradient-to-br from-kira-purple to-[#7C3AED] rounded-[10px] text-[13px]">
                                    "I saw that movie trailer you liked, want to talk about it?"
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Memory Permanence (Stop Dating "50 First Dates") */}
            <Suspense fallback={<div className="h-[400px]" />}>
                <MemoryPermanenceSection />
            </Suspense>

            {/* Live Feed CTA (Act Casual) */}
            <Suspense fallback={<div className="h-[300px]" />}>
                <LiveFeedCTA onSignUp={onSignUp} />
            </Suspense>

            {/* Comparison Section */}
            <Suspense fallback={<div className="h-[400px]" />}>
                <HomeComparisonSection />
            </Suspense>

            {/* Privacy Shield Section */}
            <Suspense fallback={<div className="h-[300px]" />}>
                <PrivacyShield />
            </Suspense>

            {/* Legacy CTA */}
            <Suspense fallback={<div className="h-[300px]" />}>
                <LegacyCta onSignUp={onSignUp} />
            </Suspense>

            {/* Ride or Die Section (Community) */}
            <Suspense fallback={<div className="h-[800px]" />}>
                <Community onSignUp={onSignUp} />
            </Suspense>






        </div>
    );
};