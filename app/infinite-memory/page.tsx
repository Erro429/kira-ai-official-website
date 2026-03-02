import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { InfiniteMemoryPage } from "../../components/pages/InfiniteMemoryPage";

export const metadata: Metadata = {
    title: "Kira AI | Infinite Memory & Context Retention",
    description: "Kira remembers everything so you don't have to. Experience infinite context retention, perfect recall of past conversations, and a personalized knowledge base."
};

export default function Page() {
    return <ClientPageAdapter Component={InfiniteMemoryPage} />;
}
