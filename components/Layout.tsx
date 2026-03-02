import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';



export const Navbar = ({ onSignUp }: { onSignUp?: () => void }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const isInternalPage = location.pathname !== '/';

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);

            if (isInternalPage) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isInternalPage]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
            style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
        >

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="py-4 px-6 md:px-10 backdrop-blur-xl bg-[#050508]/85 border-b border-white/5"
            >
                <div className="max-w-[1400px] mx-auto flex justify-between items-center">
                    <a href="/" className="flex items-center gap-3">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="/logo.webp"
                                alt="Kira AI"
                                className="h-[55px] md:h-[65px] w-auto drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                            />
                        </motion.div>
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        <div className="relative group/main">
                            <button className="flex items-center gap-1 text-[#9CA3AF] group-hover/main:text-white transition-colors text-sm font-medium bg-transparent border-none cursor-pointer p-0">
                                Capabilities
                                <ChevronDown size={14} className="group-hover/main:rotate-180 transition-transform duration-300" />
                            </button>

                            <div className="absolute top-full left-0 mt-4 w-72 bg-[#0A0A0F]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-200 transform translate-y-2 group-hover/main:translate-y-0 shadow-2xl">
                                <div className="flex flex-col gap-2">

                                    {/* Nested Group 1 */}
                                    <div className="group/item relative">
                                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center justify-between group-hover/item:text-purple-400 group-hover/item:bg-white/5">
                                            <span className="font-bold">The Six Core Capabilities</span>
                                            <ChevronRight size={14} className="text-gray-500 group-hover/item:text-purple-400" />
                                        </button>

                                        {/* Child Dropdown */}
                                        <div className="absolute left-full top-0 ml-2 w-64 bg-[#0A0A0F]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform translate-x-[-10px] group-hover/item:translate-x-0 shadow-2xl">
                                            {[
                                                { name: "Deep Empathy", path: "/deep-empathy", icon: "🫂" },
                                                { name: "Natural Voice", path: "/natural-voice", icon: "🎙️" },
                                                { name: "Proactive Care", path: "/proactive-care", icon: "🔔" },
                                                { name: "Infinite Memory", path: "/infinite-memory", icon: "🧠" },
                                                { name: "Zero Judgment", path: "/zero-judgment", icon: "🛡️" },
                                                { name: "Adaptive Growth", path: "/adaptive-growth", icon: "⚡" }
                                            ].map(item => (
                                                <a key={item.path} href={`#${item.path}`} className="px-3 py-2 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-3 no-underline">
                                                    <span>{item.icon}</span> {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Nested Group 2 */}
                                    <div className="group/item relative">
                                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center justify-between group-hover/item:text-blue-400 group-hover/item:bg-white/5">
                                            <span className="font-bold">Productivity & Focus</span>
                                            <ChevronRight size={14} className="text-gray-500 group-hover/item:text-blue-400" />
                                        </button>

                                        <div className="absolute left-full top-0 ml-2 w-64 bg-[#0A0A0F]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform translate-x-[-10px] group-hover/item:translate-x-0 shadow-2xl">
                                            {[
                                                { name: "ADHD Body Doubling", path: "/adhd-body-doubling", icon: "⚡" },
                                                { name: "Mental Load Manager", path: "/mental-load", icon: "🧠" },
                                                { name: "Decision Support", path: "/decision-support", icon: "⚖️" }
                                            ].map(item => (
                                                <a key={item.path} href={`#${item.path}`} className="px-3 py-2 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-3 no-underline">
                                                    <span>{item.icon}</span> {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Nested Group 3 */}
                                    <div className="group/item relative">
                                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center justify-between group-hover/item:text-pink-400 group-hover/item:bg-white/5">
                                            <span className="font-bold">Connection & Relationships</span>
                                            <ChevronRight size={14} className="text-gray-500 group-hover/item:text-pink-400" />
                                        </button>

                                        <div className="absolute left-full top-0 ml-2 w-64 bg-[#0A0A0F]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform translate-x-[-10px] group-hover/item:translate-x-0 shadow-2xl">
                                            {[
                                                { name: "Anti-Ghosting Friend", path: "/anti-ghosting", icon: "👻" },
                                                { name: "Digital Best Friend", path: "/digital-best-friend", icon: "👯" },
                                                { name: "Emotional Intelligence", path: "/deep-empathy", icon: "❤️" }
                                            ].map(item => (
                                                <a key={item.path} href={`#${item.path}`} className="px-3 py-2 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-3 no-underline">
                                                    <span>{item.icon}</span> {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Nested Group 4 */}
                                    <div className="group/item relative">
                                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center justify-between group-hover/item:text-amber-400 group-hover/item:bg-white/5">
                                            <span className="font-bold">Sleep & Rest</span>
                                            <ChevronRight size={14} className="text-gray-500 group-hover/item:text-amber-400" />
                                        </button>

                                        <div className="absolute left-full top-0 ml-2 w-64 bg-[#0A0A0F]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform translate-x-[-10px] group-hover/item:translate-x-0 shadow-2xl">
                                            {[
                                                { name: "Insomnia Chat", path: "/insomnia-chat", icon: "🌙" }
                                            ].map(item => (
                                                <a key={item.path} href={`#${item.path}`} className="px-3 py-2 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-3 no-underline">
                                                    <span>{item.icon}</span> {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-2 pt-2 border-t border-white/5">
                                    <a href="#/capabilities" className="flex items-center justify-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors w-full py-2 rounded-xl hover:bg-white/5 no-underline">
                                        <span>✨</span> View All Capabilities
                                    </a>
                                </div>
                            </div>
                        </div>

                        <motion.a
                            href="#/experience"
                            whileHover={{ color: '#fff' }}
                            className="text-[#9CA3AF] no-underline text-sm font-medium transition-colors"
                        >
                            Experience Kira
                        </motion.a>
                        <motion.a
                            href="#/pricing"
                            whileHover={{ color: '#fff' }}
                            className="text-[#9CA3AF] no-underline text-sm font-medium transition-colors"
                        >
                            Pricing
                        </motion.a>
                        <motion.a
                            href="#/blog"
                            whileHover={{ color: '#fff' }}
                            className="text-[#9CA3AF] no-underline text-sm font-medium transition-colors"
                        >
                            Blog
                        </motion.a>
                        <motion.a
                            href="#/waiting-list"
                            whileHover={{ color: '#fff' }}
                            className="text-[#9CA3AF] no-underline text-sm font-medium transition-colors"
                        >
                            Waiting List
                        </motion.a>
                        <motion.a
                            href="#faq"
                            whileHover={{ color: '#fff' }}
                            className="text-[#9CA3AF] no-underline text-sm font-medium transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                const faqSection = document.getElementById('faq');
                                if (faqSection) {
                                    faqSection.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    window.location.hash = '/main#faq';
                                }
                            }}
                        >
                            FAQ
                        </motion.a>
                        <motion.a
                            href="#/founders"
                            whileHover={{ color: '#FBBF24' }}
                            className="text-[#FBBF24] no-underline text-sm font-semibold flex items-center gap-1.5"
                        >
                            <span>🎖️</span> Founder Club
                        </motion.a>
                    </div>
                    <motion.button
                        onClick={onSignUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="py-3 px-7 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] border-none rounded-xl text-white text-sm font-semibold cursor-pointer"
                    >
                        Secure Spot
                    </motion.button>
                </div>
            </motion.nav>
        </header>
    );
};

export const Footer = () => (
    <footer className="py-[50px] px-[60px] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-[50px]">
            <div>
                <div className="flex items-center gap-3 mb-[18px]">
                    <img
                        src="/logo.webp"
                        alt="Kira AI"
                        className="h-[60px] w-auto opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
                <p className="text-[#6B7280] leading-[1.7] mb-[18px] text-[14px]">The world's first AI companion with object permanence. Built for deep emotional connection.</p>
                <div className="flex gap-[10px]">
                    {['T', 'D', 'I'].map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(139,92,246,0.2)' }}
                            className="w-[36px] h-[36px] rounded-[8px] bg-white/5 flex items-center justify-center cursor-pointer text-[#9CA3AF] text-[14px]"
                        >
                            {s}
                        </motion.div>
                    ))}
                </div>
            </div>
            {[{ t: 'Product', i: ['Features', 'Pricing', 'Founders Club', 'Waiting List'] }, { t: 'Company', i: ['Contact us', 'YouTube', 'About', 'Blog'] }].map((col, ci) => (
                <div key={ci}>
                    <h4 className="font-semibold mb-[18px] text-[15px]">{col.t}</h4>
                    {col.i.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ color: '#fff', x: 4 }}
                            onClick={() => {
                                if (item === 'Blog') window.location.hash = '/blog';
                                else if (item === 'Pricing') window.location.hash = '/pricing';
                                else if (item === 'Founders Club') window.location.hash = '/founders';
                                else if (item === 'Features') window.location.hash = '/capabilities';
                                else if (item === 'About') window.location.hash = '/about';
                                else if (item === 'Privacy') window.location.hash = '/privacy';
                                else if (item === 'Terms') window.location.hash = '/terms';
                                else if (item === 'Security') window.location.hash = '/security';
                                else if (item === 'Contact us') window.location.hash = '/contact';
                                else if (item === 'Waiting List') window.location.hash = '/waiting-list';
                                else if (item === 'YouTube') window.open('https://www.youtube.com/@AmazingKira', '_blank');
                            }}
                            className="text-[#6B7280] mb-[10px] cursor-pointer text-[14px] transition-colors"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
        <div className="max-w-[1400px] mx-auto mt-[50px] pt-[25px] border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[#4B5563] text-[13px]">© 2026 Kira AI. All rights reserved.</span>
            <a href="https://UnleeshAI.com" target="_blank" rel="noopener noreferrer" className="text-[#4B5563] text-[13px] hover:text-[#8B5CF6] transition-colors font-medium">Designed & Built by UnleeshAI.com</a>
            <span className="text-[#4B5563] text-[13px]">Made with 💜 for genuine connection</span>
        </div>
    </footer>
);