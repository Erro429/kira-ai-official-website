import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { WaitingListPage } from "../../components/pages/WaitingListPage";

export const metadata: Metadata = {
    title: "Join the Waiting List | Kindred Kira",
    description: "Reserve your spot on the Kindred Kira waiting list for early access to the next generation of AI companionship."
};

export default function Page() {
    return <ClientPageAdapter Component={WaitingListPage} />;
}
