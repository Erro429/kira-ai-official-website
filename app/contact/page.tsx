import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { ContactPage } from "../../components/pages/ContactPage";

export const metadata: Metadata = {
    title: "Contact Us | Kindred Kira",
    description: "Get in touch with the Kindred Kira team for support, press inquiries, or partnerships."
};

export default function Page() {
    return <ClientPageAdapter Component={ContactPage} />;
}
