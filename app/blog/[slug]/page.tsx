import { Metadata } from "next";
import { ClientPageAdapter } from "../../../components/utils/ClientPageAdapter";
import { BlogPostPage } from "../../../components/pages/BlogPostPage";

export const metadata: Metadata = {
    title: "Read Our Blog | Kindred Kira",
    description: "Deep insights into AI, mental health, and the future of digital-human relationships."
};

export default function Page() {
    return <ClientPageAdapter Component={BlogPostPage} />;
}
