import MainLayout from "@/Layouts/MainLayout.jsx";
import {Head} from "@inertiajs/react";
import EventCard from "@/Components/EventCard.jsx";
import Modal from "@/Components/Modal.jsx";

export default function Home({ events, eventTypes }) {
    return (
        <MainLayout>
            <Head title="Início" />

            <section className="grid grid-cols-4 gap-6 h-full">
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        type={eventTypes[event.type]}
                        title={event.title}
                        description={event.description}
                        location={event.location}
                        scheduled_at={event.scheduled_at}
                    />
                ))}

                <Modal/>
            </section>
        </MainLayout>
    );
}
