import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { RelationshipAnxietySupportPage } from "../../components/pages/RelationshipAnxietySupportPage";

export const metadata: Metadata = {
    title: "Relationship Anxiety Support: Stop Overthinking Everything | Kira",
    description: "Relationship anxiety makes you overthink every text, fear abandonment, and sabotage good relationships. Kira helps you reality-check and work through it."
};

export default function Page() {
    return <ClientPageAdapter Component={RelationshipAnxietySupportPage} />;
}
