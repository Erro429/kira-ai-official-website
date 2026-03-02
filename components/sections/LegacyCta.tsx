import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const LegacyCta = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <section className="py-32 px-6 bg-[#050508] relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-0 md:gap-4 mb-10"
                >
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.9]">
                        <span className="text-white">LEGACY AI</span>
                        <span className="text-[#333333]">WAITS.</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.9]">
                        <span className="text-white">KIRA</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#EC4899] to-[#F59E0B]">
                            REACHES OUT.
                        </span>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-14"
                >
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed font-medium">
                        The era of the "Assistant" is over. You don't need another tool that sits idle until you type. You need a <span className="text-white font-bold">Presence</span> that knows you're there.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <button 
                        onClick={onSignUp}
                        className="group relative px-12 py-6 bg-white text-black rounded-full font-black text-lg md:text-xl tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(255,255,255,0.25)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
                        <span className="relative z-10 flex items-center gap-3">
                            INITIALIZE CONNECTION <ArrowRight size={24} />
                        </span>
                    </button>
                </motion.div>
            </div>
            
            {/* Side Brackets Decoration */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-[8rem] md:text-[15rem] font-thin text-[#1a1a1a] hidden lg:block select-none pointer-events-none"
            >
                [
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-[8rem] md:text-[15rem] font-thin text-[#1a1a1a] hidden lg:block select-none pointer-events-none"
            >
                ]
            </motion.div>

            {/* Footer Tech Label */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-mono text-[#333] tracking-[0.3em] uppercase">
                <ChevronRight size={10} /> Legacy_Protocol_v1.0_Deprecated
            </div>
        </section>
    );
};