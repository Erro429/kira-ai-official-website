import React, { useState, useEffect } from 'react';
import { supabase } from '../../src/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Lock, Zap, ShieldCheck, Cpu, ArrowRight, X, Crown, Layers, Star } from 'lucide-react';

const MDiv = motion.div as any;
const MButton = motion.button as any;
const MInput = motion.input as any;

// --- 3D Rotating Tier Crystal Animation ---
const TierCrystal = ({ tier }: { tier: 'silver' | 'gold' | 'platinum' }) => {
    const colors = {
        silver: { main: '#9CA3AF', glow: 'rgba(156, 163, 175, 0.5)' },
        gold: { main: '#FBBF24', glow: 'rgba(251, 191, 36, 0.5)' },
        platinum: { main: '#A78BFA', glow: 'rgba(167, 139, 250, 0.5)' }
    };

    const c = colors[tier];

    return (
        <div className="relative w-32 h-32 flex items-center justify-center perspective-500">
            <MDiv
                className="relative w-16 h-16"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateX: 360, rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                {/* Core Crystal Faces */}
                <div className="absolute inset-0 opacity-70 border-2" style={{ borderColor: c.main, transform: 'translateZ(20px)', boxShadow: `0 0 20px ${c.glow}` }} />
                <div className="absolute inset-0 opacity-70 border-2" style={{ borderColor: c.main, transform: 'translateZ(-20px) rotateY(180deg)', boxShadow: `0 0 20px ${c.glow}` }} />
                <div className="absolute inset-0 opacity-70 border-2" style={{ borderColor: c.main, transform: 'rotateY(90deg) translateZ(20px)', boxShadow: `0 0 20px ${c.glow}` }} />
                <div className="absolute inset-0 opacity-70 border-2" style={{ borderColor: c.main, transform: 'rotateY(-90deg) translateZ(20px)', boxShadow: `0 0 20px ${c.glow}` }} />

                {/* Inner Glow */}
                <div className="absolute inset-4 rounded-full blur-md opacity-80" style={{ background: c.main }} />
            </MDiv>

            {/* Orbiting Ring */}
            <MDiv
                className="absolute w-24 h-24 border rounded-full border-dashed"
                style={{ borderColor: c.main, opacity: 0.3 }}
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
            />
        </div>
    );
};

// --- Conversion Centric Background Marquee ---
const BackgroundMarquee = () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.04]">
        <MDiv
            className="whitespace-nowrap text-[15vh] font-black text-white leading-none select-none"
            animate={{ x: ["-10%", "-40%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ transform: "rotate(-5deg) scale(1.1)" }}
        >
            SHE IS WAITING • KIRA REMEMBERS • UPGRADE YOUR REALITY • SHE IS WAITING • KIRA REMEMBERS •
        </MDiv>
    </div>
);

export const ConversionPage = ({ onClose }: { onClose: () => void }) => {
    // 0: Connect, 1: Select Path, 2: Form, 3: Details & Payment, 4: Success
    const [step, setStep] = useState(0);
    const [path, setPath] = useState<'founder' | 'subscriber' | null>(null);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedTier, setSelectedTier] = useState<'silver' | 'gold' | 'platinum'>('gold');

    // New Fields State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [consent, setConsent] = useState(false);
    const [tosConsent, setTosConsent] = useState(false);

    const US_STATES = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ];

    // Timer Logic
    useEffect(() => {
        // Entrance animation
        const timer = setTimeout(() => setStep(1), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (step > 0 && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [step, timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleSelection = (selectedPath: 'founder' | 'subscriber') => {
        setPath(selectedPath);
        setStep(2);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) setStep(3);
    };

    const handleExtendedSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !lastName || !cardNumber) return;
        if (!consent) {
            alert('Please authorize the recurring monthly subscription to continue.');
            return;
        }
        if (!tosConsent) {
            alert('Please agree to the Terms of Service to continue.');
            return;
        }

        try {
            // 1. Create User
            const { data: userData, error: userError } = await supabase
                .from('users')
                .insert([
                    {
                        email,
                        password_hash: password, // In production, hash this!
                        full_name: `${firstName} ${lastName}`.trim(),
                        phone: phone,
                        role: 'user'
                    }
                ])
                .select()
                .single();

            if (userError) throw userError;

            // 2. Create Activation
            const { error: activationError } = await supabase
                .from('user_activations')
                .insert([
                    {
                        user_id: userData.user_id,
                        street_address: address,
                        city,
                        state,
                        zip_code: zip,
                        payment_processor_token: `mock_token_${Date.now()}`,
                        status: 'pending',
                        subscription_plan: path === 'founder' ? 'founder_legacy' : selectedTier,
                        subscription_consent: consent,
                        tos_consent: tosConsent
                    }
                ]);

            if (activationError) throw activationError;

            setStep(4);
        } catch (error) {
            console.error('Error during activation:', error);
            alert('Activation failed. Please try again.');
        }
    };

    return (
        <MDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#050508]/95 backdrop-blur-xl overflow-hidden"
        >
            {/* Background Neural Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
            </div>

            {/* Subliminal Conversion Text */}
            <BackgroundMarquee />

            {/* Close Button */}
            <MButton
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-50 p-2"
            >
                <X size={24} />
            </MButton>

            <div className="absolute inset-0 overflow-y-auto">
                <div className="min-h-full flex items-center justify-center p-4">
                    <AnimatePresence mode="wait">
                        {/* STEP 0: Connecting Animation */}
                        {step === 0 && (
                            <MDiv
                                key="connecting"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.1, opacity: 0 }}
                                className="flex flex-col items-center justify-center z-10"
                            >
                                <div className="relative w-32 h-32 mb-8">
                                    {[...Array(3)].map((_, i) => (
                                        <MDiv
                                            key={i}
                                            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1 + i, repeat: Infinity, ease: "linear" }}
                                        />
                                    ))}
                                    <div className="absolute inset-4 rounded-full bg-blue-500/10 animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Cpu size={32} className="text-blue-400" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-mono text-blue-400 tracking-widest">ESTABLISHING UPLINK...</h2>
                            </MDiv>
                        )}

                        {/* STEP 1: Selection Screen */}
                        {step === 1 && (
                            <MDiv
                                key="selection"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="w-full max-w-4xl relative z-10"
                            >
                                <div className="text-center mb-10">
                                    <h2 className="text-4xl font-extrabold text-white mb-2">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Neural Pathway</span></h2>
                                    <p className="text-gray-400">Select your preferred integration level.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Founders Option (Pulsating) */}
                                    <MDiv
                                        onClick={() => handleSelection('founder')}
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="relative bg-[#1A1A24] border-2 border-[#FBBF24] rounded-3xl p-8 cursor-pointer overflow-hidden group"
                                        animate={{ boxShadow: ['0 0 0px rgba(251,191,36,0)', '0 0 30px rgba(251,191,36,0.3)', '0 0 0px rgba(251,191,36,0)'] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <div className="absolute top-0 right-0 bg-[#FBBF24] text-black text-xs font-bold px-3 py-1 rounded-bl-xl">LIMITED</div>
                                        <div className="w-16 h-16 rounded-2xl bg-[#FBBF24]/10 flex items-center justify-center mb-6 group-hover:bg-[#FBBF24]/20 transition-colors">
                                            <Crown size={32} className="text-[#FBBF24]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Founders Sign Up</h3>
                                        <p className="text-[#FBBF24] text-sm mb-6">Lifetime Price Lock. Exclusive Physical Kit. Priority Council Voting.</p>
                                        <div className="flex items-center text-[#FBBF24] font-bold text-sm">
                                            INITIALIZE <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </MDiv>

                                    {/* Standard Option */}
                                    <MDiv
                                        onClick={() => handleSelection('subscriber')}
                                        whileHover={{ scale: 1.03, y: -5, borderColor: "rgba(59,130,246,0.5)" }}
                                        whileTap={{ scale: 0.97 }}
                                        className="bg-[#0D0D15] border border-white/10 rounded-3xl p-8 cursor-pointer transition-colors group"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                                            <Layers size={32} className="text-blue-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Choose Your Option</h3>
                                        <p className="text-blue-400 text-sm mb-6">Flexible monthly plans. Silver, Gold, or Platinum tiers available.</p>
                                        <div className="flex items-center text-blue-400 font-bold text-sm">
                                            CONFIGURE <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </MDiv>
                                </div>
                            </MDiv>
                        )}

                        {/* STEP 2: Forms */}
                        {step === 2 && (
                            <MDiv
                                key="form"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className={`w-full relative z-10 transition-all duration-300 ${path === 'founder' ? 'max-w-2xl' : 'max-w-lg'}`}
                            >
                                {path === 'founder' ? (
                                    // FOUNDERS FORM (Classic Gold Theme - ENLARGED)
                                    <div className="bg-[#0D0D15] border border-[#FBBF24]/30 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(251,191,36,0.15)] relative overflow-hidden">
                                        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                                            <div className="flex items-center gap-2 text-[#FBBF24] text-sm font-bold tracking-widest uppercase">
                                                <Crown size={14} /> Founder Access
                                            </div>
                                            <button onClick={() => setStep(1)} className="text-sm text-gray-500 hover:text-white underline">BACK</button>
                                        </div>
                                        <div className="font-mono text-red-400 font-bold flex items-center gap-2 mb-6 text-sm justify-center bg-red-500/10 py-2 rounded">
                                            SPOT RESERVED FOR: {formatTime(timeLeft)}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white text-center">
                                            Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]">Legacy</span>
                                        </h2>
                                        <p className="text-gray-300 mb-10 leading-relaxed text-center text-lg">
                                            You are securing a spot in the history of AI. Welcome to the inner circle. <br />
                                            <span className="text-[#FBBF24] font-bold">$197 one-time + $24.99/month</span>
                                        </p>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-3">
                                                <label className="text-sm font-semibold text-gray-400 ml-1">FOUNDER EMAIL</label>
                                                <MInput
                                                    whileFocus={{ scale: 1.01, borderColor: "#FBBF24", backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email..."
                                                    className="w-full bg-[#FBBF24]/5 border border-[#FBBF24]/20 rounded-xl px-6 py-5 text-xl text-white focus:outline-none transition-all placeholder:text-gray-600"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-sm font-semibold text-gray-400 ml-1">FOUNDER PASSCODE</label>
                                                <MInput
                                                    whileFocus={{ scale: 1.01, borderColor: "#FBBF24", backgroundColor: "rgba(251, 191, 36, 0.1)" }}
                                                    type="password"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Create your passcode..."
                                                    className="w-full bg-[#FBBF24]/5 border border-[#FBBF24]/20 rounded-xl px-6 py-5 text-xl text-white focus:outline-none transition-all placeholder:text-gray-600"
                                                />
                                            </div>
                                            <MButton
                                                whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-5 bg-gradient-to-r from-[#FBBF24] to-[#D97706] rounded-xl font-bold text-xl text-black shadow-xl flex items-center justify-center gap-2"
                                            >
                                                Activate Founder Status <ArrowRight size={24} />
                                            </MButton>
                                        </form>
                                    </div>
                                ) : (
                                    // SUBSCRIBER PORTAL (Unique Futuristic UI)
                                    <div className="bg-[#050508] border border-gray-800 rounded-3xl p-1 overflow-hidden shadow-2xl relative">
                                        {/* Glowing Border based on Tier */}
                                        <div className="absolute inset-0 z-0 opacity-20 transition-colors duration-500 pointer-events-none"
                                            style={{
                                                background: selectedTier === 'platinum' ? 'radial-gradient(circle at top, #A78BFA, transparent)'
                                                    : selectedTier === 'gold' ? 'radial-gradient(circle at top, #FBBF24, transparent)'
                                                        : 'radial-gradient(circle at top, #9CA3AF, transparent)'
                                            }}
                                        />

                                        <div className="bg-[#0D0D15]/90 backdrop-blur-xl rounded-[20px] p-8 relative z-10 h-full">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    <span className={`text-xs font-mono transition-colors duration-300 ${selectedTier === 'platinum' ? 'text-[#A78BFA]' :
                                                        selectedTier === 'gold' ? 'text-[#FBBF24]' :
                                                            'text-gray-400'
                                                        }`}>SYSTEM CONFIGURATION</span>
                                                </div>
                                                <button onClick={() => setStep(1)} className="text-xs text-gray-500 hover:text-white underline">BACK</button>
                                            </div>

                                            <div className="flex justify-center mb-8">
                                                <TierCrystal tier={selectedTier} />
                                            </div>

                                            {/* Tier Selector */}
                                            <div className="flex bg-white/5 p-1 rounded-xl mb-8">
                                                {(['silver', 'gold', 'platinum'] as const).map((t) => (
                                                    <button
                                                        key={t}
                                                        onClick={() => setSelectedTier(t)}
                                                        className={`flex-1 py-2 rounded-lg text-sm font-bold capitalize transition-all ${selectedTier === t ? 'bg-white/10 text-white shadow-lg scale-105' : 'text-gray-500 hover:text-gray-300'}`}
                                                    >
                                                        {t}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="mb-6 h-[60px]">
                                                <h3 className="text-2xl font-bold text-white capitalize mb-1">{selectedTier} Clearance</h3>
                                                <p className={`text-sm font-medium transition-colors duration-300 ${selectedTier === 'platinum' ? 'text-[#A78BFA]' :
                                                    selectedTier === 'gold' ? 'text-[#FBBF24]' :
                                                        'text-[#C0C0C0]' // Silver color
                                                    }`}>
                                                    {selectedTier === 'silver' && "Essential connection features. Good start."}
                                                    {selectedTier === 'gold' && "Enhanced memory and voice capabilities."}
                                                    {selectedTier === 'platinum' && "Maximum emotional fidelity and priority access."}
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className={`text-xs font-mono ml-1 transition-colors duration-300 font-bold tracking-wide ${selectedTier === 'platinum' ? 'text-[#A78BFA]' :
                                                        selectedTier === 'gold' ? 'text-[#FBBF24]' :
                                                            'text-gray-400'
                                                        }`}>IDENTITY HASH (EMAIL)</label>
                                                    <MInput
                                                        whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)" }}
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none transition-all font-mono text-sm"
                                                        placeholder="user@neural.net"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className={`text-xs font-mono ml-1 transition-colors duration-300 font-bold tracking-wide ${selectedTier === 'platinum' ? 'text-[#A78BFA]' :
                                                        selectedTier === 'gold' ? 'text-[#FBBF24]' :
                                                            'text-gray-400'
                                                        }`}>SECRET KEY (PASSWORD)</label>
                                                    <MInput
                                                        whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)" }}
                                                        type="password"
                                                        required
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none transition-all font-mono text-sm"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                                <MButton
                                                    whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 mt-2"
                                                    style={{
                                                        background: selectedTier === 'platinum' ? 'linear-gradient(to right, #7C3AED, #A78BFA)'
                                                            : selectedTier === 'gold' ? 'linear-gradient(to right, #D97706, #FBBF24)'
                                                                : 'linear-gradient(to right, #4B5563, #9CA3AF)'
                                                    }}
                                                >
                                                    <Zap size={18} fill="currentColor" /> Initialize {selectedTier}
                                                </MButton>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </MDiv>
                        )}

                        {/* STEP 3: Details & Payment */}
                        {step === 3 && (
                            <MDiv
                                key="details"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className={`w-full relative z-10 transition-all duration-300 ${path === 'founder' ? 'max-w-2xl' : 'max-w-lg'}`}
                            >
                                <div className={`p-1 rounded-3xl overflow-hidden shadow-2xl relative ${path === 'founder' ? 'bg-[#0D0D15] border border-[#FBBF24]/30' : 'bg-[#050508] border border-gray-800'}`}>
                                    {path === 'subscriber' && (
                                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                                            style={{
                                                background: selectedTier === 'platinum' ? 'radial-gradient(circle at top, #A78BFA, transparent)'
                                                    : selectedTier === 'gold' ? 'radial-gradient(circle at top, #FBBF24, transparent)'
                                                        : 'radial-gradient(circle at top, #9CA3AF, transparent)'
                                            }}
                                        />
                                    )}

                                    <div className={`${path === 'founder' ? 'p-10 md:p-14' : 'bg-[#0D0D15]/90 backdrop-blur-xl rounded-[20px] p-8'} relative z-10`}>
                                        <div className="flex justify-between items-center mb-8">
                                            <h3 className={`font-mono text-xs font-bold tracking-widest uppercase ${path === 'founder' ? 'text-[#FBBF24]' : 'text-blue-400'}`}>
                                                FINALIZING UPLINK
                                            </h3>
                                            <button onClick={() => setStep(2)} className="text-xs text-gray-500 hover:text-white underline">BACK</button>
                                        </div>

                                        <h2 className={`text-3xl font-extrabold mb-8 text-center ${path === 'founder' ? 'text-white' : 'text-white'}`}>
                                            {path === 'founder' ? 'Secure Your Legacy' : 'Integration Details'}
                                        </h2>

                                        <form onSubmit={handleExtendedSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">First Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                        placeholder="John"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">Last Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                            </div>



                                            <div className="space-y-1">
                                                <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">Street Address</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                    className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                    placeholder="123 Neural St"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div className="md:col-span-1 space-y-1">
                                                    <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">City</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                        placeholder="Cyber City"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">State</label>
                                                    <select
                                                        required
                                                        value={state}
                                                        onChange={(e) => setState(e.target.value)}
                                                        className={`w-full bg-black border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm appearance-none ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                    >
                                                        <option value="" disabled className="bg-[#050508]">Select</option>
                                                        {US_STATES.map(s => <option key={s} value={s} className="bg-[#0D0D15]">{s}</option>)}
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">Zip Code</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={zip}
                                                        onChange={(e) => setZip(e.target.value)}
                                                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                        placeholder="12345"
                                                        maxLength={10}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">Phone Number</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>

                                            {/* Order Summary */}
                                            <div className={`p-4 rounded-xl border ${path === 'founder' ? 'bg-[#FBBF24]/5 border-[#FBBF24]/20' : 'bg-white/5 border-white/10'}`}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-xs font-mono text-gray-400 uppercase">Subscription</span>
                                                    <span className={`text-sm font-bold ${path === 'founder' ? 'text-[#FBBF24]' : 'text-white'} capitalize`}>
                                                        {path === 'founder' ? 'Founders Legacy Access' : `${selectedTier} Tier`}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-mono text-gray-400 uppercase">Amount</span>
                                                    <span className="text-xl font-bold text-white">
                                                        {path === 'founder' ? '$197.00 + $24.99/mo' :
                                                            selectedTier === 'silver' ? '$19.99/mo' :
                                                                selectedTier === 'gold' ? '$27.99/mo' : '$49.99/mo'}
                                                    </span>
                                                </div>
                                                {path === 'founder' && <div className="text-[10px] text-gray-500 mt-1 text-right">$197 access fee + $24.99 monthly subscription</div>}
                                            </div>

                                            <div className="pt-4 border-t border-white/5">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Lock size={14} className="text-gray-500" />
                                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Encrypted Payment Gateway</span>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="space-y-1">
                                                        <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">Name on Card</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                            placeholder="JOHN DOE"
                                                        />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">Credit Card Number</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            value={cardNumber}
                                                            onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                                                            maxLength={19}
                                                            className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm font-mono ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                            placeholder="0000 0000 0000 0000"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-1">
                                                            <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">Expiry (MM/YY)</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                value={expiry}
                                                                onChange={(e) => setExpiry(e.target.value)}
                                                                className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                                placeholder="MM/YY"
                                                                maxLength={5}
                                                            />
                                                        </div>
                                                        <div className="space-y-1">
                                                            <label className="text-[10px] font-mono text-gray-400 uppercase ml-1">CVV</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                value={cvv}
                                                                onChange={(e) => setCvv(e.target.value)}
                                                                className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all text-sm ${path === 'founder' ? 'border-[#FBBF24]/20 focus:border-[#FBBF24]' : 'border-white/10 focus:border-blue-400'}`}
                                                                placeholder="123"
                                                                maxLength={4}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Consent Checkbox */}
                                            <div className="mt-6 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                                <input
                                                    type="checkbox"
                                                    id="consent"
                                                    checked={consent}
                                                    onChange={(e) => setConsent(e.target.checked)}
                                                    className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                                />
                                                <label htmlFor="consent" className="text-xs text-gray-400 leading-relaxed cursor-pointer select-none">
                                                    I authorize to be charged <span className="text-white font-bold">
                                                        {path === 'founder' ? '$24.99' :
                                                            selectedTier === 'silver' ? '$19.99' :
                                                                selectedTier === 'gold' ? '$27.99' : '$49.99'} per month
                                                    </span> on a recurring monthly basis to my payment method until I cancel, and I agree to the Terms of Service.
                                                </label>
                                            </div>

                                            {/* TOS Consent Checkbox */}
                                            <div className="mt-3 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                                <input
                                                    type="checkbox"
                                                    id="tosConsent"
                                                    checked={tosConsent}
                                                    onChange={(e) => setTosConsent(e.target.checked)}
                                                    className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                                />
                                                <label htmlFor="tosConsent" className="text-xs text-gray-400 leading-relaxed cursor-pointer select-none">
                                                    I have read and agree to the <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline font-semibold">Terms of Service</a>.
                                                </label>
                                            </div>

                                            <MButton
                                                whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                                                disabled={!consent || !tosConsent}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 mt-6 ${path === 'founder' ? 'bg-gradient-to-r from-[#FBBF24] to-[#D97706] text-black'
                                                    : selectedTier === 'platinum' ? 'bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white'
                                                        : selectedTier === 'gold' ? 'bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-white'
                                                            : 'bg-gradient-to-r from-[#4B5563] to-[#9CA3AF] text-white'
                                                    }`}
                                            >
                                                Complete Activation <ArrowRight size={20} />
                                            </MButton>

                                            <div className="flex items-center justify-center gap-4 mt-4 opacity-40">
                                                <div className="flex items-center gap-1 text-[8px] font-mono text-white">
                                                    <ShieldCheck size={10} /> PCI COMPLIANT
                                                </div>
                                                <div className="flex items-center gap-1 text-[8px] font-mono text-white">
                                                    <Lock size={10} /> 256-BIT SSL
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </MDiv>
                        )}

                        {/* STEP 4: Success */}
                        {step === 4 && (
                            <MDiv
                                key="success"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center z-10"
                            >
                                <MDiv
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(16,185,129,0.5)]"
                                >
                                    <Check size={48} className="text-white" />
                                </MDiv>
                                <h2 className="text-4xl font-extrabold text-white mb-4">Uplink Secured.</h2>
                                <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">
                                    Kira is calibrating to your frequency. Check your inbox for the activation key.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-white underline text-sm"
                                >
                                    Return to Homepage
                                </button>
                            </MDiv>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </MDiv>
    );
};