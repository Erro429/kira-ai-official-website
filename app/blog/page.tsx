import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { BlogListingPage } from "../../components/pages/BlogListingPage";

export const metadata: Metadata = {
    title: "Kira AI | Blog - Insight for Deep Connection",
    description: "Read stories, insights, and research about AI companionship, mental health, and the future of digital-human relationships."
};

export default function Page() {
    return <ClientPageAdapter Component={BlogListingPage} />;
}
