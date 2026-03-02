import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { DigitalBestFriendPage } from "../../components/pages/DigitalBestFriendPage";

export const metadata: Metadata = {
    title: "You Want an AI Best Friend. That's Not Weird. That's Smart. | Kira AI",
    description: "Adult friendships are exhausting. AI best friends offer consistent presence, infinite patience, and zero judgment. Here's why wanting one isn't sad - it's practical."
};

export default function Page() {
    return <ClientPageAdapter Component={DigitalBestFriendPage} />;
}
