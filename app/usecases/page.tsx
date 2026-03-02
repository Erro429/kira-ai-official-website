import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { UsecasesPage } from "../../components/pages/UsecasesPage";

export const metadata: Metadata = {
    title: "Use Cases | How Can Kira Help You? | Kindred Kira",
    description: "Discover the many ways Kira can support you: from managing ADHD and mental load, to overcoming loneliness and burnout."
};

export default function Page() {
    return <ClientPageAdapter Component={UsecasesPage} />;
}
