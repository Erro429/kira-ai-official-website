import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { ExperienceKiraPage } from "../../components/pages/ExperienceKiraPage";

export const metadata: Metadata = {
    title: "Experience Kira | Hear Her Voice",
    description: "Listen to real conversations with Kira and experience her emotional intelligence, natural voice synthesis, and empathy firsthand."
};

export default function Page() {
    return <ClientPageAdapter Component={ExperienceKiraPage} />;
}
