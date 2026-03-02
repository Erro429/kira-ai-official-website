import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { InsomniaChatPage } from "../../components/pages/InsomniaChatPage";

export const metadata: Metadata = {
    title: "Can't Sleep? Chat with Someone at 3AM | Kira Insomnia Help",
    description: "Awake at 3am with racing thoughts? Kira's here. No judgment, no 'just relax' advice. Real support for insomnia, anxiety, and those endless sleepless nights."
};

export default function Page() {
    return <ClientPageAdapter Component={InsomniaChatPage} />;
}
