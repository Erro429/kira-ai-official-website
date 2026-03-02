import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { TherapyBetweenSessionsPage } from "../../components/pages/TherapyBetweenSessionsPage";

export const metadata: Metadata = {
    title: "Therapy Between Sessions: Daily Support When You Need It | Kira",
    description: "Your next therapy appointment is 6 days away. Kira provides support now. Practice coping skills, work through crises, and apply what you learned in therapy."
};

export default function Page() {
    return <ClientPageAdapter Component={TherapyBetweenSessionsPage} />;
}
