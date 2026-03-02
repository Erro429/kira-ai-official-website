import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { AboutPage } from "../../components/pages/AboutPage";

export const metadata: Metadata = {
    title: "About Kira | AI Companion Built to Actually Care",
    description: "Learn about the team behind Kindred Kira and our mission to create AI that actually cares, remembers, and grows with you."
};

export default function Page() {
    return <ClientPageAdapter Component={AboutPage} />;
}
