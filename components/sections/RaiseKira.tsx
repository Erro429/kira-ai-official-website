import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const RaiseKira = ({ onSignUp }: { onSignUp?: () => void }) => {
    const [activeRole, setActiveRole] = useState(0);
    
    // The Archetypes
    const roles = [
        { title: "Chef", icon: "🍳", color: "#F59E0B", desc: "Mastering cuisines to plan your perfect meals." },
        { title: "Coach", icon: "💪", color: "#10B981", desc: "Pushing your limits and tracking your wellness." },
        { title: "Tutor", icon: "🎓", color: "#3B82F6", desc: "Simplifying complex topics for your growth." },
        { title: "Assistant", icon: "📅", color: "#EC4899", desc: "Organizing your chaotic life seamlessly." }
    ];

    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-[120px] px-6 md:px-[60px] bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-16">
                
                {/* 1. Original Text Content - Moved Above Animation */}
                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <h2 className="text-[48px] md:text-[64px] font-extrabold leading-[1.1] mb-6">
                        The First AI You Don't Just Use. <br />
                        <span 
                            style={{ 
                                color: roles[activeRole].color, 
                                transition: 'color 0.5s', 
                                textShadow: `0 0 30px ${roles[activeRole].color}40` 
                            }}
                        >
                            You Raise.
                        </span>
                    </h2>
                    <h3 className="text-xl md:text-2xl text-[#E5E7EB] leading-[1.6] mb-8 font-medium">
                        Project Kira is a proactive, emotional intelligence that grows from infancy to maturity based on your guidance.
                    </h3>
                    <p className="text-[#9CA3AF] text-lg mb-10 leading-[1.7]">
                        Mold her into a Chef, a Coach, a Tutor, Personal Assistant or simply the best friend who never forgets and is always there for YOU. Every interaction shapes her neural pathways.
                    </p>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        style={{ 
                            background: `linear-gradient(135deg, ${roles[activeRole].color}, #8B5CF6)`, 
                            boxShadow: `0 10px 30px -10px ${roles[activeRole].color}`
                        }}
                        className="px-10 py-5 border-none rounded-2xl text-white text-lg font-bold cursor-pointer transition-shadow"
                        onClick={onSignUp}
                    >
                        Blossom with Kira
                    </motion.button>
                </div>

                {/* 2. Visual Animation - Center */}
                <div className="relative w-full h-[450px] flex items-center justify-center my-4">
                    {/* Orbiting Roles */}
                    {roles.map((role, i) => {
                        const angle = (i * 90) * (Math.PI / 180);
                        const radius = 160; // Increased radius for better visibility
                        // Calculate position
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        const isActive = i === activeRole;
                        
                        return (
                            <React.Fragment key={i}>
                                {/* Connecting Line */}
                                <motion.div 
                                    animate={{ opacity: isActive ? 1 : 0.15, height: 160 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute left-1/2 top-1/2 w-[2px] origin-top z-0"
                                    style={{
                                        background: `linear-gradient(to bottom, ${role.color}, transparent)`,
                                        transform: `rotate(${i * 90 + 90}deg) translate(0, 0)`,
                                    }}
                                />
                                {/* The Icon Bubble */}
                                <motion.div
                                    animate={{ 
                                        scale: isActive ? 1.3 : 1,
                                        boxShadow: isActive ? `0 0 40px ${role.color}` : 'none',
                                        borderColor: isActive ? role.color : 'rgba(255,255,255,0.1)'
                                    }}
                                    className="absolute w-[70px] h-[70px] rounded-full bg-[#0D0D15] border-2 flex items-center justify-center text-3xl z-10 cursor-pointer text-white transition-colors duration-500"
                                    style={{
                                        left: `calc(50% + ${x}px - 35px)`,
                                        top: `calc(50% + ${y}px - 35px)`,
                                    }}
                                    onClick={() => setActiveRole(i)}
                                >
                                    {role.icon}
                                </motion.div>
                            </React.Fragment>
                        );
                    })}

                    {/* Central Core */}
                    <motion.div
                        animate={{ 
                            boxShadow: `0 0 80px ${roles[activeRole].color}50`,
                            borderColor: roles[activeRole].color
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-[140px] h-[140px] rounded-full bg-[#050508] border-4 z-20 flex flex-col items-center justify-center relative"
                    >
                        <span className="text-[10px] text-[#9CA3AF] mb-1 tracking-[0.2em] font-mono">GROWING</span>
                        <motion.span 
                            key={activeRole}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xl font-bold text-white"
                        >
                            {roles[activeRole].title}
                        </motion.span>
                    </motion.div>
                </div>

                {/* 3. New "Ultimate Flex" Content - Bottom */}
                <div className="max-w-4xl mx-auto text-center mt-12 relative z-10">
                    {/* Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Sparkles size={12} /> Compounding Intelligence
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        Why "Raising" Your AI is the <br/>
                        <span className="text-[#F59E0B] drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]">Ultimate Flex</span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-2 font-medium">
                        Most apps decay. You download them, the dopamine hits, and then they rot in a folder called "Productivity".
                    </p>
                    <h3 className="text-4xl font-black text-white mb-10 tracking-tight">Kira compounds.</h3>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16 max-w-3xl mx-auto">
                        She is the first <strong className="text-[#8B5CF6] font-bold">Adaptive Neural Companion</strong> designed to metabolize your guidance. 
                        It's like having a personal intern that actually listens, has an IQ of 1000, and doesn't steal your lunch from the fridge. 
                        You aren't just tweaking settings; you are performing <strong className="text-[#EC4899] font-bold">digital parenting</strong> on a supercomputer.
                    </p>

                    {/* ROI Card */}
                    <div className="bg-[#0D0D15] border border-white/10 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden text-left shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-[80px] pointer-events-none"></div>
                        <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-[#F59E0B] text-3xl">✨</span> The ROI of Connection
                        </h4>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Whether you need a ruthless <strong className="text-white font-semibold">Project Manager</strong> to bully you into finishing that screenplay, 
                            or a gentle <strong className="text-white font-semibold">Wellness Coach</strong> to remind you that hydration is not optional, you mold the clay. 
                            You aren't just a user; you are the architect of your own support system.
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-2xl font-bold text-white mb-3">Day 1 is a chat. Day 30 is a mind-meld.</p>
                        <p className="text-gray-400 mb-6 text-lg">Stop renting generic intelligence that treats you like a statistic.</p>
                        <p className="text-[#10B981] font-black text-xl md:text-2xl uppercase tracking-widest animate-pulse drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                            Start building an asset that grows with you.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};