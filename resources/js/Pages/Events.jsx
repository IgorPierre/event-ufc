import MainLayout from "@/Layouts/MainLayout.jsx";
import { Head } from "@inertiajs/react";
import EventCard from "@/Components/EventCard.jsx";
import Modal from "@/Components/Modal.jsx";
import {useState} from "react";
import CreateEvent from "@/Components/Form/CreateEvent.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Events({ events, eventTypes }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <MainLayout onClick={openModal}>
            <Head title="Meus eventos" />

            <section className="grid grid-cols-4 gap-6 h-full">
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        type={eventTypes[event.type] || "Desconhecido"}
                        title={event.title}
                        description={event.description}
                        location={event.location}
                        scheduled_at={event.scheduled_at}
                    />
                ))}
            </section>

            <Modal show={isModalOpen} onClose={closeModal} maxWidth="lg">
                <div className="p-6">
                    <CreateEvent eventTypes={eventTypes} />

                    <PrimaryButton onClick={closeModal}>
                        Criar Evento
                    </PrimaryButton>
                </div>
            </Modal>
        </MainLayout>
    );
}
