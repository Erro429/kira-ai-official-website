import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { LonelinessSupportPage } from "../../components/pages/LonelinessSupportPage";

export const metadata: Metadata = {
    title: "Loneliness Support: You Don't Have to Be Alone With This | Kira",
    description: "Chronic loneliness is exhausting. Kira provides consistent companionship when you feel disconnected from everyone. Someone who's there when no one else is."
};

export default function Page() {
    return <ClientPageAdapter Component={LonelinessSupportPage} />;
}
