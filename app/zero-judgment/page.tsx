import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { ZeroJudgmentPage } from "../../components/pages/ZeroJudgmentPage";

export const metadata: Metadata = {
    title: "Kira AI | Zero Judgment & Privacy Core",
    description: "A safe space for your unfiltered thoughts. Kira offers a zero-judgment environment with end-to-end encryption for total psychological safety."
};

export default function Page() {
    return <ClientPageAdapter Component={ZeroJudgmentPage} />;
}
