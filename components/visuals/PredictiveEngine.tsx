import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Zap, Coffee, Moon, Bell } from 'lucide-react';

export const PredictiveEngine = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-black/40 rounded-3xl border border-amber-500/20 mb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1),transparent_70%)]" />

            {/* Horizontal Timeline Grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(245,158,11,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.2) 1px, transparent 1px)',
                    backgroundSize: '100px 100%'
                }}
            />

            {/* Moving Time Stream */}
            <div className="absolute inset-0 flex items-center">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent relative">
                    {/* Future Events Moving Left */}
                    {[
                        { icon: Coffee, color: "#FBBF24", label: "Morning Routine", delay: 0 },
                        { icon: Zap, color: "#EF4444", label: "Stress Spike", delay: 2 },
                        { icon: Calendar, color: "#3B82F6", label: "Meeting Prep", delay: 4 },
                        { icon: Moon, color: "#8B5CF6", label: "Wind Down", delay: 6 }
                    ].map((event, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                            initial={{ left: "120%", opacity: 0 }}
                            animate={{ left: "-20%", opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 8, repeat: Infinity, delay: event.delay, ease: "linear" }}
                        >
                            <div className="w-3 h-3 rounded-full bg-amber-500 mb-2" />
                            <div className="bg-[#0D0D15] border border-white/10 p-2 rounded-lg flex items-center gap-2 shadow-lg whitespace-nowrap">
                                <event.icon size={14} style={{ color: event.color }} />
                                <span className="text-xs font-bold text-gray-300">{event.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Central "Now" Cursor - Anticipating */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="text-amber-500 text-xs font-mono font-bold tracking-widest mb-2">NOW</div>
                <div className="w-[2px] h-32 bg-amber-500/50 absolute -top-12"></div>

                <motion.div
                    animate={{ boxShadow: ["0 0 20px rgba(245,158,11,0.2)", "0 0 50px rgba(245,158,11,0.6)", "0 0 20px rgba(245,158,11,0.2)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-xl bg-[#0D0D15] border border-amber-500 flex items-center justify-center relative z-20"
                >
                    <Bell size={32} className="text-amber-500" />
                    {/* Radar Sweep */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ borderRadius: 'inherit' }}
                    />
                </motion.div>

                {/* Proactive Intervention Popup */}
                <motion.div
                    className="absolute top-24 bg-amber-500/10 border border-amber-500/30 backdrop-blur-md px-4 py-2 rounded-lg text-amber-300 text-xs font-bold"
                    animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                >
                    INTERVENTION: PREPARING BRIEF
                </motion.div>
            </div>

            {/* Floating Status */}
            <motion.div
                className="absolute top-10 right-10 flex items-center gap-2"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-gray-500">CALENDAR SYNCED</span>
            </motion.div>
        </div>
    );
};
