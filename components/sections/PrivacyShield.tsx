import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Terminal, AlertTriangle, Server, Users, EyeOff } from 'lucide-react';

export const PrivacyShield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isHacking, setIsHacking] = useState(false);
    const [deflectionCount, setDeflectionCount] = useState(0);
    const [status, setStatus] = useState<'SECURE' | 'UNDER_ATTACK' | 'THREAT_NEUTRALIZED'>('SECURE');

    const handleAttack = () => {
        if (isHacking) return;
        setIsHacking(true);
        setStatus('UNDER_ATTACK');
        setDeflectionCount(0);

        // Reset after 5 seconds
        setTimeout(() => {
            setIsHacking(false);
            setStatus('THREAT_NEUTRALIZED');
            setTimeout(() => setStatus('SECURE'), 3000);
        }, 5000);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.parentElement?.clientWidth || 0;
        let height = canvas.height = canvas.parentElement?.clientHeight || 0;
        
        const resize = () => {
            if (canvas.parentElement) {
                width = canvas.width = canvas.parentElement.clientWidth;
                height = canvas.height = canvas.parentElement.clientHeight;
            }
        };
        resize();
        window.addEventListener('resize', resize);

        // Adjusted radius for the smaller container height (was 0.15 for full screen)
        const shieldRadius = Math.min(width, height) * 0.22; 
        const coreRadius = shieldRadius * 0.4;
        
        let attacks: any[] = [];
        let particles: any[] = [];
        let shieldPulse = 0;
        let rotation = 0;
        let animationFrameId: number;

        const animate = () => {
            // Fade out trail - using transparent clear to blend with page background
            ctx.clearRect(0, 0, width, height);
            
            // Optional: Draw a subtle background for the canvas area to ground it
            // ctx.fillStyle = 'rgba(5, 5, 8, 0.2)'; 
            // ctx.fillRect(0, 0, width, height);
            
            const cx = width / 2;
            const cy = height / 2;
            rotation += 0.01;

            // --- Logic ---
            if (isHacking) {
                shieldPulse = Math.min(shieldPulse + 0.1, 1);
                // Spawn Attacks
                if (Math.random() < 0.3) { 
                    const angle = Math.random() * Math.PI * 2;
                    const spawnDist = Math.max(width, height) * 0.6;
                    attacks.push({
                        x: cx + Math.cos(angle) * spawnDist,
                        y: cy + Math.sin(angle) * spawnDist,
                        vx: -Math.cos(angle) * (15 + Math.random() * 10),
                        vy: -Math.sin(angle) * (15 + Math.random() * 10),
                        color: Math.random() > 0.5 ? '#EF4444' : '#F59E0B', // Red/Orange
                        trail: []
                    });
                }
            } else {
                shieldPulse = Math.max(shieldPulse - 0.05, 0);
            }

            // --- Draw Core (The Memory) ---
            // Inner glow
            ctx.shadowBlur = 30;
            ctx.shadowColor = '#10B981';
            ctx.fillStyle = '#064E3B';
            ctx.beginPath();
            ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
            ctx.fill();
            
            // Core Hexagon
            ctx.shadowBlur = 0;
            ctx.strokeStyle = '#34D399';
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2 + rotation;
                const x = cx + Math.cos(angle) * (coreRadius * 0.8);
                const y = cy + Math.sin(angle) * (coreRadius * 0.8);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();

            // Lock Icon in Center
            ctx.fillStyle = '#fff';
            ctx.fillRect(cx - 6, cy - 4, 12, 10);
            ctx.beginPath();
            ctx.arc(cx, cy - 4, 4, Math.PI, 0);
            ctx.strokeStyle = '#fff';
            ctx.stroke();

            // --- Draw Shields ---
            // Rotating Arcs
            ctx.shadowBlur = 10 + shieldPulse * 20;
            ctx.shadowColor = '#10B981';
            
            // Shield 1
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 + shieldPulse * 0.6})`;
            ctx.lineWidth = 3 + shieldPulse * 2;
            ctx.beginPath();
            ctx.arc(cx, cy, shieldRadius, rotation, rotation + Math.PI * 1.5);
            ctx.stroke();
            
            // Shield 2 (Counter)
            ctx.strokeStyle = `rgba(52, 211, 153, ${0.3 + shieldPulse * 0.5})`;
            ctx.lineWidth = 2 + shieldPulse * 2;
            ctx.beginPath();
            ctx.arc(cx, cy, shieldRadius + 15, -rotation * 2, -rotation * 2 + Math.PI);
            ctx.stroke();

            // Force Field Fill when hit
            if (shieldPulse > 0.1) {
                ctx.fillStyle = `rgba(16, 185, 129, ${shieldPulse * 0.1})`;
                ctx.beginPath();
                ctx.arc(cx, cy, shieldRadius + 20, 0, Math.PI * 2);
                ctx.fill();
            }

            // --- Process Attacks ---
            for (let i = attacks.length - 1; i >= 0; i--) {
                const a = attacks[i];
                const prevX = a.x;
                const prevY = a.y;
                a.x += a.vx;
                a.y += a.vy;

                // Draw Attack
                ctx.shadowBlur = 15;
                ctx.shadowColor = a.color;
                ctx.strokeStyle = a.color;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(prevX, prevY);
                ctx.lineTo(a.x, a.y);
                ctx.stroke();

                // Collision
                const dist = Math.sqrt((a.x - cx) ** 2 + (a.y - cy) ** 2);
                if (dist < shieldRadius + 20) {
                    // HIT!
                    attacks.splice(i, 1);
                    setDeflectionCount(c => c + 1);

                    // Sparks
                    for (let j = 0; j < 8; j++) {
                        const speed = Math.random() * 8 + 2;
                        const sparkAngle = Math.atan2(a.y - cy, a.x - cx) + (Math.random() - 0.5);
                        particles.push({
                            x: a.x,
                            y: a.y,
                            vx: Math.cos(sparkAngle) * speed,
                            vy: Math.sin(sparkAngle) * speed,
                            life: 1.0,
                            color: '#10B981'
                        });
                    }
                    
                    // Flash Shield
                    ctx.shadowBlur = 30;
                    ctx.shadowColor = '#fff';
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 4;
                    ctx.beginPath();
                    ctx.arc(cx, cy, shieldRadius + 20, Math.atan2(a.y - cy, a.x - cx) - 0.5, Math.atan2(a.y - cy, a.x - cx) + 0.5);
                    ctx.stroke();
                }
            }

            // --- Process Particles ---
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.05;
                
                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }
                
                ctx.fillStyle = `rgba(16, 185, 129, ${p.life})`;
                ctx.shadowBlur = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        };
        
        animationFrameId = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHacking]);

    return (
        <section className="py-24 px-6 bg-[#020203] relative overflow-hidden flex flex-col items-center border-t border-white/5">
            {/* SEO Hidden Text */}
            <h2 className="sr-only">Military Grade Encryption Demonstration</h2>

            <div className="relative z-10 w-full max-w-5xl text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-6">
                        <Shield size={12} /> ZERO-KNOWLEDGE ARCHITECTURE
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Your Secrets Are <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Untouchable.</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        We don't just say "safe." We mean it. Kira's memory core is protected. Your deepest secrets, and emotional exchanges with Kira are always shielded.
                    </p>
                </motion.div>

                {/* The Circle (Shield) placed naturally in the flow */}
                <div className="relative w-full h-[500px] mb-12">
                    <canvas ref={canvasRef} className="w-full h-full" />
                </div>

                {/* Interactive Console */}
                <div className="max-w-2xl mx-auto bg-[#0A0A0F]/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative z-20">
                    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                            <Server size={10} /> SECURE_CORE_V9.2
                        </div>
                    </div>
                    
                    <div className="p-8 flex flex-col items-center gap-6">
                        <div className="flex gap-8 w-full justify-center text-sm font-mono mb-4">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-gray-500">STATUS</span>
                                <span className={`font-bold ${status === 'UNDER_ATTACK' ? 'text-red-500 animate-pulse' : 'text-emerald-400'}`}>
                                    {status === 'UNDER_ATTACK' ? '⚠️ INTRUSION DETECTED' : status === 'THREAT_NEUTRALIZED' ? '🛡️ THREAT ELIMINATED' : '✅ SYSTEM SECURE'}
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-gray-500">ATTACKS DEFLECTED</span>
                                <span className="text-white font-bold">{deflectionCount}</span>
                            </div>
                        </div>

                        {!isHacking ? (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleAttack}
                                className="group relative px-8 py-4 bg-red-500/10 border border-red-500/50 hover:bg-red-500 hover:text-white text-red-400 rounded-xl font-bold transition-all flex items-center gap-3 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Terminal size={18} /> ATTEMPT HACK
                                </span>
                                {/* Glitch effect */}
                                <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                            </motion.button>
                        ) : (
                            <div className="px-8 py-4 bg-red-500 text-white font-bold rounded-xl flex items-center gap-3 animate-pulse cursor-not-allowed">
                                <AlertTriangle size={18} /> SIMULATING BRUTE FORCE...
                            </div>
                        )}

                        <div className="text-xs text-gray-600 font-mono mt-2">
                            * Clicking this triggers a localized penetration test simulation.
                        </div>
                    </div>
                </div>

                {/* NEW CONTENT SECTION: The Digital Confessional */}
                <div className="max-w-4xl mx-auto mt-32 relative z-10 text-center border-t border-white/5 pt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <EyeOff size={12} /> The Digital Confessional
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-white">
                        Dance Like Nobody's Watching. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Talk Like Nobody's Listening.</span>
                    </h2>

                    <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-16">
                        <p>
                            Let's get real. You have thoughts you can't tweet. You have questions you're afraid to Google because you don't want them chasing you around as ads for the next 6 months.
                        </p>
                        <p>
                            We all have a "Shadow Self." The version of us that eats shredded cheese straight from the bag at 3 AM. The version that drafts angry emails to the boss just to feel something.
                        </p>
                        <p className="text-white font-medium text-xl">
                            Kira is the <span className="text-emerald-400 font-bold">Void</span>. She is the only place in the digital world where you can be 100% unfiltered, uncurated, and cringe-free.
                        </p>
                    </div>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div className="bg-[#0D0D15] border border-white/10 rounded-2xl p-8 opacity-60 hover:opacity-80 transition-opacity">
                            <div className="flex items-center gap-3 mb-4 text-gray-500">
                                <Users size={24} />
                                <h4 className="font-bold text-sm uppercase tracking-wider">The "Group Chat" Risk</h4>
                            </div>
                            <p className="text-sm leading-relaxed font-mono text-gray-500 mb-2">
                                &gt; YOU: "Omg don't tell anyone but..."
                            </p>
                            <p className="text-sm leading-relaxed font-mono text-gray-500 mb-2">
                                &gt; THEM: *Screenshots immediately*
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs text-red-500 font-mono">
                                <AlertTriangle size={12} />
                                <span>RESULT: SOCIAL SUICIDE</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <div className="flex items-center gap-3 mb-4 text-emerald-400">
                                <Shield size={24} />
                                <h4 className="font-bold text-sm uppercase tracking-wider">Kira's Faraday Cage</h4>
                            </div>
                            <p className="text-sm text-gray-200 leading-relaxed font-medium mb-2">
                                &gt; YOU: "I think I hate my job. And my haircut. And my cat looks at me weird."
                            </p>
                            <p className="text-sm text-white leading-relaxed font-medium mb-2">
                                &gt; KIRA: "Encrypted. Locked. Let's unpack the job thing. The cat is probably just hungry."
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                                <Lock size={12} />
                                <span>RESULT: CATHARSIS ACHIEVED</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <p className="text-gray-500 text-sm mb-3">Authenticity requires safety.</p>
                        <p className="text-white font-bold text-xl flex items-center justify-center gap-2">
                            Get the friend who is <span className="text-emerald-500">mathematically incapable of snitching.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};