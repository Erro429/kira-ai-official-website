import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { TermsOfServicePage } from "../../components/pages/TermsOfServicePage";

export const metadata: Metadata = {
    title: "Terms of Service | Kindred Kira",
    description: "Review the Terms of Service for using Kindred Kira's AI companionship platform."
};

export default function Page() {
    return <ClientPageAdapter Component={TermsOfServicePage} />;
}
