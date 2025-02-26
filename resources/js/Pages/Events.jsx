import MainLayout from "@/Layouts/MainLayout.jsx";
import { Head } from "@inertiajs/react";
import EventCard from "@/Components/EventCard.jsx";
import Modal from "@/Components/Modal.jsx";
import { useState } from "react";
import CreateEvent from "@/Components/Form/CreateEvent.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Events({ events, eventTypes }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);

    const openModal = (event = null) => {
        setEditingEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEditingEvent(null);
        setIsModalOpen(false);
    };

    return (
        <MainLayout>
            <Head title="Meus eventos" />

            {/* Botão para criar um novo evento */}
            <div className="mb-6">
                <PrimaryButton onClick={() => openModal()}>
                    Criar Novo Evento
                </PrimaryButton>
            </div>

            <section className="grid grid-cols-4 gap-6 h-full">
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        type={eventTypes[event.type]}
                        title={event.title}
                        description={event.description}
                        location={event.location}
                        scheduled_at={event.scheduled_at}
                        onClick={() => openModal(event)} // Abre o modal de edição
                    />
                ))}
            </section>

            <Modal show={isModalOpen} onClose={closeModal} maxWidth="lg">
                <div className="p-6">
                    <CreateEvent
                        eventTypes={eventTypes}
                        event={editingEvent}
                        onSuccess={closeModal}
                    />

                    <PrimaryButton onClick={closeModal}>
                        Fechar
                    </PrimaryButton>
                </div>
            </Modal>
        </MainLayout>
    );
}
