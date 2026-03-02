import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { ProactiveCarePage } from "../../components/pages/ProactiveCarePage";

export const metadata: Metadata = {
    title: "Kira AI | Proactive Care & Predictive Assistance",
    description: "Meet the AI that doesn't wait for commands. Kira anticipates your needs, manages your schedule, and checks in on your wellness proactively."
};

export default function Page() {
    return <ClientPageAdapter Component={ProactiveCarePage} />;
}
