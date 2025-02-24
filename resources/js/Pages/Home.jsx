import MainLayout from "@/Layouts/MainLayout.jsx";
import {Head} from "@inertiajs/react";
import EventCard from "@/Components/EventCard.jsx";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Início" />

            <EventCard />
        </MainLayout>
    );
}
