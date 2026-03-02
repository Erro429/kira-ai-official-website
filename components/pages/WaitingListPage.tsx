"use client";
import React, { Suspense } from 'react';
import { Navbar, Footer } from '../Layout';
import { MouseGlow, FuturisticBackground, FuturisticCursor, ScrollProgress } from '../ui/Effects';
import { } from '../ui/Decorations';
import { WaitingRoom } from '../sections/WaitingRoom';
import { SEO } from '../utils/SEO';

export const WaitingListPage = ({ onSignUp, onBack }: { onSignUp?: () => void, onBack?: () => void }) => {
    return (
        <div className="min-h-screen bg-[#050508] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
            <SEO
                title="Kira AI - Join the Waiting List"
                description="Secure your spot for the first AI companion with object permanence."
            />
            <FuturisticCursor />
            <FuturisticBackground />
            <ScrollProgress />
            <MouseGlow />


            <Navbar onSignUp={onSignUp} />

            <main className="relative z-10 pt-[124px] pb-20">
                {/* Back Button */}
                {onBack && (
                    <div className="max-w-7xl mx-auto px-6 mb-8 pt-6">
                        <button
                            onClick={onBack}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer bg-transparent border-none text-base"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:-translate-x-1 transition-transform"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            Back
                        </button>
                    </div>
                )}
                <WaitingRoom onSignUp={onSignUp} showForm={true} />
            </main>

            <Footer />
        </div>
    );
};
