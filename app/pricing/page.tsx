import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { PricingPage } from "../../components/pages/PricingPage";

export const metadata: Metadata = {
    title: "Pricing | Kindred Kira",
    description: "Flexible and transparent pricing for your AI companion."
};

export default function Page() {
    return <ClientPageAdapter Component={PricingPage} />;
}
