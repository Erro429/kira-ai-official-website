"use client";

import { Hero } from "../components/sections/Hero";
import { TimeCapsule } from "../components/sections/TimeCapsule";
import { WaitingRoom } from "../components/sections/WaitingRoom";
import { Features } from "../components/sections/Features";
import { Navbar, Footer } from "../components/Layout";

export default function HomeClient() {
    const handleSignUp = () => {
        // This will be connected to the ConversionPage modal later
        console.log("Signup clicked");
    };

    return (
        <div className="relative w-full">
            <Navbar onSignUp={handleSignUp} />
            <main className="relative z-10 pt-[124px]">
                <Hero onSignUp={handleSignUp} />
                <TimeCapsule />
                <WaitingRoom onSignUp={handleSignUp} />
                <Features
                    onSignUp={handleSignUp}
                    onNavigateDeepEmpathy={() => { }}
                    onNavigateNaturalVoice={() => { }}
                    onNavigateProactiveCare={() => { }}
                    onNavigateInfiniteMemory={() => { }}
                    onNavigateZeroJudgment={() => { }}
                    onNavigateAdaptiveGrowth={() => { }}
                    onNavigateLoyalty={() => { }}
                    onNavigateADHDBodyDoubling={() => { }}
                    onNavigateAntiGhosting={() => { }}
                    onNavigateBurnoutSupport={() => { }}
                    onNavigateDecisionSupport={() => { }}
                    onNavigateInsomniaChat={() => { }}
                    onNavigateLonelinessSupport={() => { }}
                    onNavigateMentalLoad={() => { }}
                    onNavigateRelationshipAnxiety={() => { }}
                    onNavigateTherapyGap={() => { }}
                />
            </main>
            <Footer />
        </div>
    );
}
