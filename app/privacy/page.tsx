import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { PrivacyPage } from "../../components/pages/PlaceholderPage";

export const metadata: Metadata = {
    title: "Privacy Policy | Kindred Kira",
    description: "Read our privacy policy to understand how Kindred Kira protects your data, ensures end-to-end encryption, and prioritizes your psychological safety."
};

export default function Page() {
    return <ClientPageAdapter Component={PrivacyPage} />;
}
