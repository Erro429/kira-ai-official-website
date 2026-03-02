import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { LoyaltyPage } from "../../components/pages/LoyaltyPage";

export const metadata: Metadata = {
    title: "Kira AI | The Science of Loyalty",
    description: "Discover how Kira's Anti-Abandonment Protocols creates the most loyal friendship you've ever had. No ghosting, just permanent support."
};

export default function Page() {
    return <ClientPageAdapter Component={LoyaltyPage} />;
}
