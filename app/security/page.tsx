import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { SecurityPage } from "../../components/pages/PlaceholderPage";

export const metadata: Metadata = {
    title: "Security | Kindred Kira",
    description: "Learn about our enterprise-grade security architecture, zero-knowledge encryption, and commitment to your data privacy."
};

export default function Page() {
    return <ClientPageAdapter Component={SecurityPage} />;
}
