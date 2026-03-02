import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { AdaptiveGrowthPage } from "../../components/pages/AdaptiveGrowthPage";

export const metadata: Metadata = {
    title: "Kira AI | Adaptive Growth & Personality Synthesis",
    description: "Kira evolves with you. Through recursive learning loops, she adapts her personality, humor, and communication style to become your perfect counterpart."
};

export default function Page() {
    return <ClientPageAdapter Component={AdaptiveGrowthPage} />;
}
