import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { NaturalVoicePage } from "../../components/pages/NaturalVoicePage";

export const metadata: Metadata = {
    title: "Kira AI | Natural Voice Synthesis & Real-Time Conversation",
    description: "Chat with Kira like a real friend. Experience ultra-low latency natural voice synthesis, emotional tone modulation, and seamless interruptions."
};

export default function Page() {
    return <ClientPageAdapter Component={NaturalVoicePage} />;
}
