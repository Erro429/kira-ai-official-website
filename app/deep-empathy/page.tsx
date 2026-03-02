import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { DeepEmpathyPage } from "../../components/pages/DeepEmpathyPage";

export const metadata: Metadata = {
    title: "Kira AI | Deep Empathy & Emotional Intelligence",
    description: "Experience Kira's Deep Empathy engine. An AI companion with high EQ that detects sentiment, provides emotional support, and truly understands you."
};

export default function Page() {
    return <ClientPageAdapter Component={DeepEmpathyPage} />;
}
