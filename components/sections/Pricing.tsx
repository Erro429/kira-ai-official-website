import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PricingTier = ({ name, price, period, color, features, cta, popular, delay, onSignUp }: any) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Using inline styles for colors for precise mapping
    const colorMap: Record<string, string> = { silver: '#9CA3AF', gold: '#FBBF24', platinum: '#A78BFA', founders: '#FBBF24' };
    const tierColor = colorMap[color] || '#8B5CF6';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8 }}
            className={`rounded-[24px] p-9 relative flex flex-col h-full ${popular ? 'bg-gradient-to-br from-[#FBBF24]/10 to-[#FBBF24]/5 border-2 border-[#FBBF24]/50' : 'bg-[#0D0D15] border border-white/10'}`}
        >
            {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] py-1.5 px-5 rounded-full text-xs font-bold text-black">
                    POPULAR
                </div>
            )}
            <h3 style={{ color: tierColor }} className="text-2xl font-bold mb-2">{name}</h3>
            <div className="mb-6">
                <span className="text-[42px] font-extrabold">${price}</span>
                <span className="text-[#9CA3AF]">/{period}</span>
            </div>
            <ul className="list-none p-0 m-0 mb-7 flex-1">
                {features.map((f: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 mb-3 text-sm">
                        {f.icon === 'check' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" /></svg> :
                            f.icon === 'trophy' ? <span className="text-base">🏆</span> :
                                f.icon === 'dollar' ? <span className="text-base">💵</span> :
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" /></svg>}
                        <span className="text-[#E5E7EB]">{f.text}</span>
                    </li>
                ))}
            </ul>
            <motion.button
                onClick={onSignUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                    background: popular ? 'linear-gradient(135deg, #FBBF24, #F59E0B)' : 'rgba(255,255,255,0.1)',
                    color: popular ? '#000' : 'white'
                }}
                className="w-full py-3.5 border-none rounded-xl text-[15px] font-semibold cursor-pointer"
            >
                {cta}
            </motion.button>
        </motion.div>
    );
};





export const Pricing = ({ onSignUp }: { onSignUp?: () => void }) => {
    return (
        <>
            {/* Tiers Section */}
            <section id="tiers" className="py-[100px] px-6 md:px-[60px] bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-[60px]"
                    >
                        <h2 className="text-[44px] font-extrabold">
                            Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]">Experience</span>
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <PricingTier
                            onSignUp={onSignUp}
                            name="Silver Tier" price="19.99" period="mo" color="silver" cta="Select Silver"
                            features={[
                                { icon: 'check', text: 'Unlimited Text 24/7' },
                                { icon: 'check', text: '45 min Voice Time' },
                                { icon: 'check', text: '1 Free Upgrade (Can use on Tutor)' },
                                { icon: 'trophy', text: 'Access to $500 Contest' },
                                { icon: 'dollar', text: '$10 per referral' }
                            ]} delay={0}
                        />
                        <PricingTier
                            onSignUp={onSignUp}
                            name="Gold Tier" price="27.99" period="mo" color="gold" popular cta="Select Gold"
                            features={[
                                { icon: 'check', text: 'Unlimited Text 24/7' },
                                { icon: 'check', text: '100 min Voice (Rollover)' },
                                { icon: 'check', text: 'Tutor Included FREE ($20 value)' },
                                { icon: 'check', text: '2 Free Upgrades' },
                                { icon: 'trophy', text: 'Access to $1,500 Contest' },
                                { icon: 'dollar', text: '$10 per referral' }
                            ]} delay={0.1}
                        />
                        <PricingTier
                            onSignUp={onSignUp}
                            name="Platinum Tier" price="49.99" period="mo" color="platinum" cta="Select Platinum"
                            features={[
                                { icon: 'check', text: 'Unlimited Text 24/7' },
                                { icon: 'check', text: '180 min Voice (Rollover)' },
                                { icon: 'check', text: 'Tutor & Wellness FREE ($50 value)' },
                                { icon: 'check', text: '3 Free Upgrades' },
                                { icon: 'trophy', text: 'Access to $5,000 Contest' },
                                { icon: 'check', text: 'Beta Access to ALL features' },
                                { icon: 'dollar', text: '$10 per referral' }
                            ]} delay={0.2}
                        />
                    </div>
                </div>
            </section>


        </>
    );
};