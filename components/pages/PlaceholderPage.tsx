"use client";
import React from 'react';
import { Navbar, Footer } from '../Layout';
import { FuturisticBackground, FuturisticCursor } from '../ui/Effects';

export const PlaceholderPage = ({ title, onBack, onCtaClick }: any) => (
    <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden">
        <FuturisticCursor />
        <FuturisticBackground />
        <Navbar onSignUp={onCtaClick} />
        <main className="relative z-10 pt-[124px] pb-20 px-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400 mb-8 max-w-lg">This neural pathway is currently being constructed. The capabilities of Kira are vast and expanding.</p>
            <button onClick={onBack} className="text-purple-400 hover:text-purple-300 underline underline-offset-4">Return to Core</button>
        </main>
        <Footer />
    </div>
);

export const NaturalVoicePage = (props: any) => <PlaceholderPage title="Natural Voice" {...props} />;
export const ProactiveCarePage = (props: any) => <PlaceholderPage title="Proactive Care" {...props} />;
export const InfiniteMemoryPage = (props: any) => <PlaceholderPage title="Infinite Memory" {...props} />;
export const ZeroJudgmentPage = (props: any) => <PlaceholderPage title="Zero Judgment" {...props} />;
export const AdaptiveGrowthPage = (props: any) => <PlaceholderPage title="Adaptive Growth" {...props} />;
export const AboutPage = (props: any) => <PlaceholderPage title="About Kira AI" {...props} />;
export const PrivacyPage = (props: any) => <PlaceholderPage title="Privacy Policy" {...props} />;
export const TermsPage = (props: any) => <PlaceholderPage title="Terms of Service" {...props} />;
export const SecurityPage = (props: any) => <PlaceholderPage title="Security" {...props} />;
export const ContactPage = (props: any) => <PlaceholderPage title="Contact Us" {...props} />;