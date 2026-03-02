import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { CapabilitiesPage } from "../../components/pages/CapabilitiesPage";

export const metadata: Metadata = {
    title: "What Can Kira Actually Do? AI Companion Capabilities | Kira AI",
    description: "Explore all the groundbreaking capabilities of Kindred Kira, from proactive outreach to deep emotional intelligence and seamless app integration."
};

export default function Page() {
    return <ClientPageAdapter Component={CapabilitiesPage} />;
}
