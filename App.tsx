import React, { useState, Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ScrollProgress, MouseGlow, FuturisticBackground, FuturisticCursor } from './components/ui/Effects';
import { NeuralLinkLine } from './components/ui/Decorations';
import { Navbar, Footer } from './components/Layout';
// Eager load critical above-the-fold content
import { Hero } from './components/sections/Hero';

// ... (existing lazy imports)

const Features = lazy(() => import('./components/sections/Features').then(m => ({ default: m.Features })));
const LegacyCta = lazy(() => import('./components/sections/LegacyCta').then(m => ({ default: m.LegacyCta })));
const RaiseKira = lazy(() => import('./components/sections/RaiseKira').then(m => ({ default: m.RaiseKira })));
const MindCore = lazy(() => import('./components/sections/MindCore').then(m => ({ default: m.MindCore })));


const Pricing = lazy(() => import('./components/sections/Pricing').then(m => ({ default: m.Pricing })));

const WaitingRoom = lazy(() => import('./components/sections/WaitingRoom').then(m => ({ default: m.WaitingRoom })));
const TimeCapsule = lazy(() => import('./components/sections/TimeCapsule').then(m => ({ default: m.TimeCapsule })));



const PrivacyShield = lazy(() => import('./components/sections/PrivacyShield').then(m => ({ default: m.PrivacyShield })));


const HomeFoundersSection = lazy(() => import('./components/sections/HomeFoundersSection').then(m => ({ default: m.HomeFoundersSection })));
const HomeComparisonSection = lazy(() => import('./components/sections/HomeComparisonSection').then(m => ({ default: m.HomeComparisonSection })));
const HomePricingSection = lazy(() => import('./components/sections/HomePricingSection').then(m => ({ default: m.HomePricingSection })));
const HomeContestSection = lazy(() => import('./components/sections/HomeContestSection').then(m => ({ default: m.HomeContestSection })));
import { AnimatePresence } from 'framer-motion';

// Lazy load pages for performance optimization
const ConversionPage = lazy(() => import('./components/sections/ConversionPage').then(module => ({ default: module.ConversionPage })));
const DeepEmpathyPage = lazy(() => import('./components/pages/DeepEmpathyPage').then(module => ({ default: module.DeepEmpathyPage })));
const NaturalVoicePage = lazy(() => import('./components/pages/NaturalVoicePage').then(module => ({ default: module.NaturalVoicePage })));
const ProactiveCarePage = lazy(() => import('./components/pages/ProactiveCarePage').then(module => ({ default: module.ProactiveCarePage })));
const InfiniteMemoryPage = lazy(() => import('./components/pages/InfiniteMemoryPage').then(module => ({ default: module.InfiniteMemoryPage })));
const ZeroJudgmentPage = lazy(() => import('./components/pages/ZeroJudgmentPage').then(module => ({ default: module.ZeroJudgmentPage })));
const AdaptiveGrowthPage = lazy(() => import('./components/pages/AdaptiveGrowthPage').then(module => ({ default: module.AdaptiveGrowthPage })));
const LoyaltyPage = lazy(() => import('./components/pages/LoyaltyPage').then(module => ({ default: module.LoyaltyPage })));
const ADHDBodyDoublingPage = lazy(() => import('./components/pages/ADHDBodyDoublingPage').then(module => ({ default: module.ADHDBodyDoublingPage })));
const AntiGhostingFriendPage = lazy(() => import('./components/pages/AntiGhostingFriendPage').then(module => ({ default: module.AntiGhostingFriendPage })));
const BurnoutSupportPage = lazy(() => import('./components/pages/BurnoutSupportPage').then(module => ({ default: module.BurnoutSupportPage })));
const DecisionMakingSupportPage = lazy(() => import('./components/pages/DecisionMakingSupportPage').then(module => ({ default: module.DecisionMakingSupportPage })));
const InsomniaChatPage = lazy(() => import('./components/pages/InsomniaChatPage').then(module => ({ default: module.InsomniaChatPage })));
const LonelinessSupportPage = lazy(() => import('./components/pages/LonelinessSupportPage').then(module => ({ default: module.LonelinessSupportPage })));
const MentalLoadManagerPage = lazy(() => import('./components/pages/MentalLoadManagerPage').then(module => ({ default: module.MentalLoadManagerPage })));
const RelationshipAnxietySupportPage = lazy(() => import('./components/pages/RelationshipAnxietySupportPage').then(module => ({ default: module.RelationshipAnxietySupportPage })));
const TherapyBetweenSessionsPage = lazy(() => import('./components/pages/TherapyBetweenSessionsPage').then(module => ({ default: module.TherapyBetweenSessionsPage })));
const FoundersPage = lazy(() => import('./components/pages/FoundersPage').then(module => ({ default: module.FoundersPage })));
const PricingPage = lazy(() => import('./components/pages/PricingPage').then(module => ({ default: module.PricingPage })));
const UsecasesPage = lazy(() => import('./components/pages/UsecasesPage').then(module => ({ default: module.UsecasesPage })));
const BlogListingPage = lazy(() => import('./components/pages/BlogListingPage').then(module => ({ default: module.BlogListingPage })));
const BlogPostPage = lazy(() => import('./components/pages/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
// const LonelinessBlogPostPage = lazy(() => import('./components/pages/LonelinessBlogPostPage').then(module => ({ default: module.LonelinessBlogPostPage })));
const CapabilitiesPage = lazy(() => import('./components/pages/CapabilitiesPage').then(module => ({ default: module.CapabilitiesPage })));
const DigitalBestFriendPage = lazy(() => import('./components/pages/DigitalBestFriendPage').then(module => ({ default: module.DigitalBestFriendPage })));
const WaitingListPage = lazy(() => import('./components/pages/WaitingListPage').then(module => ({ default: module.WaitingListPage })));
const ExperienceKiraPage = lazy(() => import('./components/pages/ExperienceKiraPage').then(module => ({ default: module.ExperienceKiraPage })));

// Placeholder pages
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const PrivacyPage = lazy(() => import('./components/pages/PlaceholderPage').then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('./components/pages/TermsOfServicePage').then(module => ({ default: module.TermsOfServicePage })));
const SecurityPage = lazy(() => import('./components/pages/PlaceholderPage').then(module => ({ default: module.SecurityPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(module => ({ default: module.ContactPage })));

import { SEO } from './components/utils/SEO';
// Admin Panel Imports
import { ProtectedRoute } from './admin-v2/ProtectedRoute';
import { LoginPage as AdminLoginPage } from './admin-v2/LoginPage';
import { DashboardLayout } from './admin-v2/DashboardLayout';
import { DashboardPage } from './admin-v2/DashboardPage';
import { BlogPage } from './admin-v2/BlogPage';
import { BlogEditorPage } from './admin-v2/BlogEditorPage';
import { LeadsPage } from './admin-v2/LeadsPage';
import { MessagesPage } from './admin-v2/MessagesPage';
import { RecordingsPage } from './admin-v2/RecordingsPage';


function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function MainLayout({ openConversion }: { openConversion: () => void }) {
    const navigate = useNavigate();

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kira AI",
        "url": "https://kira.ai",
        "logo": "https://kira.ai/logo.png",
        "sameAs": [
            "https://twitter.com/kira_ai",
            "https://instagram.com/kira_ai"
        ]
    };

    return (
        <>
            <SEO
                title="Kira AI - The First AI Companion with Object Permanence"
                description="Experience the next generation of digital connection. Kira remembers you, reaches out first, and grows with you."
                schema={organizationSchema}
            />
            <FuturisticCursor />
            <FuturisticBackground />
            <ScrollProgress />
            <MouseGlow />

            <Navbar onSignUp={openConversion} />

            <main className="relative z-10 pt-[124px]">
                <Hero onSignUp={openConversion} />
                <Suspense fallback={<div className="h-20" />}>
                    <TimeCapsule />
                    <WaitingRoom onSignUp={openConversion} />
                    <Features
                        onSignUp={openConversion}
                        onNavigateDeepEmpathy={() => navigate('/deep-empathy')}
                        onNavigateNaturalVoice={() => navigate('/natural-voice')}
                        onNavigateProactiveCare={() => navigate('/proactive-care')}
                        onNavigateInfiniteMemory={() => navigate('/infinite-memory')}
                        onNavigateZeroJudgment={() => navigate('/zero-judgment')}
                        onNavigateAdaptiveGrowth={() => navigate('/adaptive-growth')}
                        onNavigateLoyalty={() => navigate('/loyalty')}
                        onNavigateADHDBodyDoubling={() => navigate('/adhd-body-doubling')}
                        onNavigateAntiGhosting={() => navigate('/anti-ghosting')}
                        onNavigateBurnoutSupport={() => navigate('/burnout-support')}
                        onNavigateDecisionSupport={() => navigate('/decision-support')}
                        onNavigateInsomniaChat={() => navigate('/insomnia-chat')}
                        onNavigateLonelinessSupport={() => navigate('/loneliness-support')}
                        onNavigateMentalLoad={() => navigate('/mental-load')}
                        onNavigateRelationshipAnxiety={() => navigate('/relationship-anxiety')}
                        onNavigateTherapyGap={() => navigate('/therapy-gap')}
                    />

                </Suspense>
            </main>

            <Footer />
        </>
    );
}

function PageWrapper({ children, openConversion }: { children?: React.ReactNode, openConversion: () => void }) {
    const navigate = useNavigate();

    // Clone children to inject props
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                onBack: () => navigate(-1),
                onCtaClick: openConversion
            } as any);
        }
        return child;
    });

    return <>{childrenWithProps}</>;
}

export default function App() {
    const [showConversion, setShowConversion] = useState(false);
    const openConversion = () => setShowConversion(true);
    const closeConversion = () => setShowConversion(false);

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* ----------------------------------------------------------------------- */}
                {/* ADMIN PANEL APPLICATION (Isolated from Main Site Styling)               */}
                {/* ----------------------------------------------------------------------- */}
                <Route path="/admin/login" element={<AdminLoginPage />} />

                <Route path="/admin" element={<ProtectedRoute />}>
                    <Route element={<DashboardLayout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path="blog/new" element={<BlogEditorPage />} />
                        <Route path="blog/edit/:id" element={<BlogEditorPage />} />
                        <Route path="leads" element={<LeadsPage />} />
                        <Route path="messages" element={<MessagesPage />} />
                        <Route path="recordings" element={<RecordingsPage />} />
                        <Route path="settings" element={
                            <div style={{ padding: 32, color: '#71717a', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '0.1em', fontSize: 11, fontStyle: 'italic' }}>
                                Core configuration matrix coming soon...
                            </div>
                        } />
                    </Route>
                </Route>


                {/* ----------------------------------------------------------------------- */}
                {/* PUBLIC WEBSITE APPLICATION (Futuristic Theme)                           */}
                {/* ----------------------------------------------------------------------- */}
                <Route path="*" element={
                    <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden relative selection:bg-purple-500/30">
                        <AnimatePresence>
                            {showConversion && (
                                <Suspense fallback={null}>
                                    <ConversionPage onClose={closeConversion} />
                                </Suspense>
                            )}
                        </AnimatePresence>

                        <Routes>
                            <Route path="/" element={<MainLayout openConversion={openConversion} />} />

                            <Route path="/deep-empathy" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-pink-500">Initializing Empathy Core...</div>}>
                                    <PageWrapper openConversion={openConversion}><DeepEmpathyPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/natural-voice" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-cyan-500">Calibrating Audio Engine...</div>}>
                                    <PageWrapper openConversion={openConversion}><NaturalVoicePage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/proactive-care" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-amber-500">Syncing Calendars...</div>}>
                                    <PageWrapper openConversion={openConversion}><ProactiveCarePage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/infinite-memory" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-violet-500">Accessing Vector Archives...</div>}>
                                    <PageWrapper openConversion={openConversion}><InfiniteMemoryPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/zero-judgment" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-emerald-500">Encrypting Connection...</div>}>
                                    <PageWrapper openConversion={openConversion}><ZeroJudgmentPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/adaptive-growth" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-blue-500">Synthesizing Personality...</div>}>
                                    <PageWrapper openConversion={openConversion}><AdaptiveGrowthPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/loyalty" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-pink-500">Establishing Bond...</div>}>
                                    <PageWrapper openConversion={openConversion}><LoyaltyPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/adhd-body-doubling" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-orange-500">Activating Focus Protocol...</div>}>
                                    <PageWrapper openConversion={openConversion}><ADHDBodyDoublingPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/anti-ghosting" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#00F5FF]">Activating Anti-Ghosting Protocol...</div>}>
                                    <PageWrapper openConversion={openConversion}><AntiGhostingFriendPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/burnout-support" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#C86A3D]">Tuning Empathy Core...</div>}>
                                    <PageWrapper openConversion={openConversion}><BurnoutSupportPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/decision-support" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#FFB627]">Initializing Clarity Engine...</div>}>
                                    <PageWrapper openConversion={openConversion}><DecisionMakingSupportPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/insomnia-chat" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#0ABDC6]">Calming Racing Thoughts...</div>}>
                                    <PageWrapper openConversion={openConversion}><InsomniaChatPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/loneliness-support" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#84A98C]">Connecting empathy core...</div>}>
                                    <PageWrapper openConversion={openConversion}><LonelinessSupportPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/mental-load" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#FF6B6B]">Unloading cognitive burden...</div>}>
                                    <PageWrapper openConversion={openConversion}><MentalLoadManagerPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/relationship-anxiety" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#D4A5A5]">Stabilizing emotional core...</div>}>
                                    <PageWrapper openConversion={openConversion}><RelationshipAnxietySupportPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/therapy-gap" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#2D5F4C]">Bridging session gaps...</div>}>
                                    <PageWrapper openConversion={openConversion}><TherapyBetweenSessionsPage {...({} as any)} /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/founders" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#d4a853]">Loading Founders Access...</div>}>
                                    <FoundersPage onSignUp={openConversion} />
                                </Suspense>
                            } />
                            <Route path="/pricing" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#d4a853]">Loading Plans...</div>}>
                                    <PageWrapper openConversion={openConversion}>
                                        <PricingPage onSignUp={openConversion} />
                                    </PageWrapper>
                                </Suspense>
                            } />
                            <Route path="/usecases" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#f472b6]">Loading Usecases...</div>}>
                                    <UsecasesPage onSignUp={openConversion} />
                                </Suspense>
                            } />
                            <Route path="/blog" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#8B5CF6]">Loading Stories...</div>}>
                                    <BlogListingPage onSignUp={openConversion} />
                                </Suspense>
                            } />
                            <Route path="/waiting-list" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#8B5CF6]">Loading Waiting List...</div>}>
                                    <PageWrapper openConversion={openConversion}>
                                        <WaitingListPage onSignUp={openConversion} />
                                    </PageWrapper>
                                </Suspense>
                            } />
                            <Route path="/blog/:slug" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#EC4899]">Opening Archives...</div>}>
                                    <PageWrapper openConversion={openConversion}>
                                        <BlogPostPage onCtaClick={openConversion} />
                                    </PageWrapper>
                                </Suspense>
                            } />
                            <Route path="/digital-best-friend" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-purple-500">Initializing Best Friend Protocol...</div>}>
                                    <PageWrapper openConversion={openConversion}>
                                        <DigitalBestFriendPage />
                                    </PageWrapper>
                                </Suspense>
                            } />
                            <Route path="/capabilities" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-[#8B5CF6]">Accessing Capabilities...</div>}>
                                    <PageWrapper openConversion={openConversion}><CapabilitiesPage onSignUp={openConversion} /></PageWrapper>
                                </Suspense>
                            } />
                            <Route path="/about" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-purple-500">Loading About...</div>}>
                                    <PageWrapper openConversion={openConversion}><AboutPage /></PageWrapper>
                                </Suspense>
                            } />
                            <Route path="/privacy" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-purple-500">Loading Privacy Policy...</div>}>
                                    <PageWrapper openConversion={openConversion}><PrivacyPage /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/terms" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-purple-500">Loading Terms...</div>}>
                                    <PageWrapper openConversion={openConversion}><TermsPage /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/security" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-purple-500">Loading Security...</div>}>
                                    <PageWrapper openConversion={openConversion}><SecurityPage /></PageWrapper>
                                </Suspense>
                            } />

                            <Route path="/contact" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-purple-500">Establishing Connection...</div>}>
                                    <ContactPage onSignUp={openConversion} />
                                </Suspense>
                            } />

                            <Route path="/experience" element={
                                <Suspense fallback={<div className="min-h-screen bg-[#050508] flex items-center justify-center text-purple-500">Loading Archives...</div>}>
                                    <PageWrapper openConversion={openConversion}>
                                        <ExperienceKiraPage />
                                    </PageWrapper>
                                </Suspense>
                            } />




                        </Routes>
                    </div>
                } />
            </Routes>
        </Router>
    );
}