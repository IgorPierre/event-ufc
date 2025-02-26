import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import EventCard from "@/Components/EventCard.jsx";
import Modal from "@/Components/Modal.jsx";
import CreateEvent from "@/Components/Form/CreateEvent.jsx";
import { useState } from 'react';

export default function Dashboard({ events, eventTypes }) {
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
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>

                    <PrimaryButton onClick={() => openModal()}>
                        Criar Novo Evento
                    </PrimaryButton>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                </div>
            </div>

            {/* Modal para criação/edição de eventos */}
            <Modal show={isModalOpen} onClose={closeModal} maxWidth="lg">
                <div className="p-6">
                    <CreateEvent
                        eventTypes={eventTypes}
                        event={editingEvent} // Passa null para criação ou o evento para edição
                        onSuccess={closeModal}
                    />

                    <PrimaryButton onClick={closeModal}>
                        Fechar
                    </PrimaryButton>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
