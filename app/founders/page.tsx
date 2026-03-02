import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { FoundersPage } from "../../components/pages/FoundersPage";

export const metadata: Metadata = {
    title: "Founders Presale | Kindred Kira",
    description: "Join the exclusive Founders tier of Kindred Kira for lifetime early access."
};

export default function Page() {
    return <ClientPageAdapter Component={FoundersPage} />;
}
