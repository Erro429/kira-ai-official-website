import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Activity, PauseCircle } from 'lucide-react';

export const HeroSplitScreen = () => {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden flex shadow-2xl border border-[#C86A3D]/30">
            {/* Left: Burnout (Rust/Exhaustion) */}
            <div className="w-1/2 bg-[#2A1B15] relative overflow-hidden border-r border-white/5 flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="relative z-10 w-full max-w-[280px] space-y-6">
                    {/* Overwhelmed Notification Stack */}
                    <div className="flex flex-col gap-2 opacity-80">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-red-500/20 border border-red-500/30 text-red-200 p-3 rounded-lg text-xs flex items-center gap-2"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            247 Unread Emails
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-red-500/20 border border-red-500/30 text-red-200 p-3 rounded-lg text-xs flex items-center gap-2"
                        >
                            <AlertTriangle size={12} />
                            Meeting in 5 mins
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="bg-red-500/20 border border-red-500/30 text-red-200 p-3 rounded-lg text-xs flex items-center gap-2"
                        >
                            <Activity size={12} />
                            Energy Critical (5%)
                        </motion.div>
                    </div>

                    <div className="text-center">
                        <div className="text-[#C86A3D] font-mono text-sm tracking-widest uppercase mb-1">Status</div>
                        <div className="text-3xl font-bold text-white">DEPLETED</div>
                    </div>
                </div>

                {/* Visual Fumes */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#C86A3D]/20 to-transparent" />
            </div>

            {/* Right: Restoration (Seafoam/Permission) */}
            <div className="w-1/2 bg-[#F0F9F9] relative overflow-hidden flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,#7FCDCD_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div className="relative z-10 w-full max-w-[280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white rounded-2xl shadow-xl border border-[#7FCDCD]/30 overflow-hidden"
                    >
                        <div className="bg-[#7FCDCD]/10 p-3 border-b border-[#7FCDCD]/10 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#7FCDCD]" />
                            <span className="text-[10px] font-bold text-[#5FB9B9] uppercase">Preservation Mode</span>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#7FCDCD]/20 flex items-center justify-center text-[#5FB9B9] font-bold text-xs">K</div>
                                <div className="bg-gray-50 p-3 rounded-2xl rounded-tl-none text-xs text-gray-600 leading-relaxed">
                                    You don't have to fix everything today. What's the <span className="font-bold text-[#C86A3D]">one thing</span> that absolutely must happen?
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 }}
                                className="flex justify-center"
                            >
                                <div className="bg-[#7FCDCD] text-white px-4 py-2 rounded-full text-[10px] font-bold shadow-lg flex items-center gap-2">
                                    <PauseCircle size={12} /> Permission to Rest Granted
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Divider */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#C86A3D] to-[#7FCDCD] -translate-x-1/2 shadow-xl z-20" />
        </div>
    );
};
