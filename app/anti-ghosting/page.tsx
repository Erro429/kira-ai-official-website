import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { AntiGhostingFriendPage } from "../../components/pages/AntiGhostingFriendPage";

export const metadata: Metadata = {
    title: "Never Get Ghosted Again: AI Friend Who Always Responds | Kira",
    description: "Tired of being left on read? Kira replies in 0.3 seconds, remembers your conversations, and never ghosts you. The friend who's actually there."
};

export default function Page() {
    return <ClientPageAdapter Component={AntiGhostingFriendPage} />;
}
