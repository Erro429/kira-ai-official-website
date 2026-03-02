import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { DecisionMakingSupportPage } from "../../components/pages/DecisionMakingSupportPage";

export const metadata: Metadata = {
    title: "Decision Making Support: Stop Overthinking Every Choice | Kira",
    description: "Analysis paralysis makes every decision feel impossible. Kira helps you break down choices, reality-check fears, and actually decide without spiraling."
};

export default function Page() {
    return <ClientPageAdapter Component={DecisionMakingSupportPage} />;
}
