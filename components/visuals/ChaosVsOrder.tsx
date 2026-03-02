import React from 'react';
import { motion } from 'framer-motion';

export const ChaosVsOrder = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-[#FF6B35]/30 flex shadow-2xl">
            {/* Left: Chaos */}
            <div className="w-1/2 bg-[#1a0b05] relative overflow-hidden border-r border-[#FF6B35]/20 group">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                {/* Simulated Browser Tabs & Sticky Notes */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#FEE2E2] text-black border border-gray-400 p-2 rounded shadow-md text-[8px] md:text-[10px] font-mono whitespace-nowrap overflow-hidden max-w-[100px]"
                        style={{
                            left: `${Math.random() * 80}%`,
                            top: `${Math.random() * 80}%`,
                            rotate: `${Math.random() * 40 - 20}deg`,
                            zIndex: Math.floor(Math.random() * 10),
                        }}
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() }}
                    >
                        {['Lego Star Wars Guide', 'Why am I like this', 'Tax Extension??', 'Wiki: Roman Cement', 'DO NOT FORGET'][i % 5]}
                    </motion.div>
                ))}

                {/* Time overlay */}
                <div className="absolute top-4 left-4 font-mono text-red-400 text-xl font-bold bg-black/50 px-2 rounded">
                    2:47 AM
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                    <div className="text-[#FF6B35] font-bold text-xl mb-2 animate-pulse bg-black/50 inline-block px-2 rounded">OVERWHELM DETECTED</div>
                </div>
            </div>

            {/* Right: Order (Kira) */}
            <div className="w-1/2 bg-[#05111a] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div className="absolute inset-0 flex flex-col justify-center px-6 gap-3">
                    <div className="text-xs text-gray-400 font-mono mb-2 uppercase tracking-widest">Active Focus</div>

                    {/* Active Project Card */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#00D9FF]/10 border border-[#00D9FF]/30 p-4 rounded-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#00D9FF]" />
                        <h4 className="text-white font-bold text-sm mb-1">Budget Tracker App</h4>
                        <div className="flex items-center gap-2 text-[#00D9FF] text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                            Step 18/23: Fix Login Bug
                        </div>
                    </motion.div>

                    {/* Parked Projects */}
                    <div className="space-y-2 opacity-60">
                        <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex justify-between items-center">
                            <span className="text-gray-400 text-xs">Recipe Organizer</span>
                            <span className="text-yellow-500 text-[10px] border border-yellow-500/30 px-1 rounded">PAUSED</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex justify-between items-center">
                            <span className="text-gray-400 text-xs">Plant Reminder</span>
                            <span className="text-blue-400 text-[10px] border border-blue-400/30 px-1 rounded">IDEA</span>
                        </div>
                    </div>

                    {/* Kira Message */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-4 bg-[#FF6B35]/10 border border-[#FF6B35]/30 p-3 rounded-xl rounded-tl-none text-xs text-gray-200"
                    >
                        <span className="text-[#FF6B35] font-bold block mb-1">Kira</span>
                        Ready to tackle the login bug? I remember you got stuck on the login function.
                    </motion.div>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
                    <span className="text-[#00D9FF] text-xs font-bold tracking-widest">CONNECTED</span>
                </div>
            </div>

            {/* Center Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF6B35] to-[#00D9FF] -translate-x-1/2 shadow-[0_0_20px_white]" />
        </div>
    );
};
