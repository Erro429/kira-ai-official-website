import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { ADHDBodyDoublingPage } from "../../components/pages/ADHDBodyDoublingPage";

export const metadata: Metadata = {
    title: "ADHD Body Doubling: Your 24/7 Focus Partner | Kira AI",
    description: "Virtual ADHD body double available 24/7. No scheduling, no judgment. Kira remembers your projects, breaks tasks into steps, and keeps you accountable."
};

export default function Page() {
    return <ClientPageAdapter Component={ADHDBodyDoublingPage} />;
}
