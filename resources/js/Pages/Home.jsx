import MainLayout from "@/Layouts/MainLayout.jsx";
import {Head} from "@inertiajs/react";
import EventCard from "@/Components/EventCard.jsx";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Início" />

            <section className="grid grid-cols-4 gap-6 h-full">
                <EventCard color={"teal"} category={"Palestra"}/>
                <EventCard color={"violet"} category={"Reunião Geral"}/>
                <EventCard color={"rose"} category={"Minicurso"}/>
            </section>
        </MainLayout>
    );
}
