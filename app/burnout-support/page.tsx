import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { BurnoutSupportPage } from "../../components/pages/BurnoutSupportPage";

export const metadata: Metadata = {
    title: "Burnout Support: You're Not Lazy, You're Exhausted | Kira",
    description: "Burnout makes everything feel impossible. You're not failing, you're depleted. Kira helps you process overwhelm and rebuild capacity without toxic positivity."
};

export default function Page() {
    return <ClientPageAdapter Component={BurnoutSupportPage} />;
}
