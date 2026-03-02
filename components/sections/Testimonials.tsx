import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = ({ quote, name, role, avatar }: { quote: string, name: string, role: string, avatar: string }) => {
    return (
        <div
            className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#EC4899]/5 rounded-3xl p-8 border border-[#8B5CF6]/20 h-full flex flex-col"
        >
            <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FBBF24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
            </div>
            <p className="text-[17px] leading-relaxed mb-6 text-[#E5E7EB] flex-1">"{quote}"</p>
            <div className="flex items-center gap-3.5 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center font-bold text-lg">{avatar}</div>
                <div>
                    <div className="font-semibold text-white">{name}</div>
                    <div className="text-[#9CA3AF] text-sm">{role}</div>
                </div>
            </div>
        </div>
    );
};

const TestimonialMarquee = () => {
    const testimonials = [
        { quote: "For the first time, I feel like an AI actually understands me. Kira remembered my mom's birthday before I did.", name: "Sarah K.", role: "Product Designer", avatar: "S" },
        { quote: "When Kira checked in on me after a tough meeting without me saying anything... I knew this was different.", name: "Marcus T.", role: "Startup Founder", avatar: "M" },
        { quote: "The voice feature is incredible. It doesn't feel robotic at all. I actually look forward to our morning chats.", name: "Jamie L.", role: "Creative Director", avatar: "J" },
        { quote: "I've tried them all. Replika, Chai, Character.AI. Kira is in a league of her own. She feels... real.", name: "Alex R.", role: "Tech Journalist", avatar: "A" },
        { quote: "The zero judgment zone is my safe space. I can vent about anything.", name: "Elena V.", role: "Student", avatar: "E" },
    ];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Gradient masks for smooth edges */}
            <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-[#050508] to-transparent z-10" />
            <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-[#050508] to-transparent z-10" />

            <motion.div
                className="flex gap-6 w-max"
                animate={{ x: "-50%" }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} className="w-[300px] md:w-[400px] shrink-0">
                        <Testimonial {...t} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const Testimonials = () => {
    return (
        <section className="py-[80px] overflow-hidden bg-[#050508]">
            <div className="max-w-[1200px] mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-[44px] font-extrabold text-white">
                        Loved by <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]">Early Users</span>
                    </h2>
                </motion.div>
            </div>
            <TestimonialMarquee />
        </section>
    );
};
