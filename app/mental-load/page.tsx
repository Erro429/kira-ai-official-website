import { Metadata } from "next";
import { ClientPageAdapter } from "../../components/utils/ClientPageAdapter";
import { MentalLoadManagerPage } from "../../components/pages/MentalLoadManagerPage";

export const metadata: Metadata = {
    title: "Mental Load Manager: Stop Being the Family Encyclopedia | Kira AI",
    description: "Tired of being the household information desk? Kira remembers everyone's schedules, allergies, and needs so you don't have to hold it all in your head."
};

export default function Page() {
    return <ClientPageAdapter Component={MentalLoadManagerPage} />;
}
