import MainLayout from "@/Layouts/MainLayout.jsx";
import { Head } from "@inertiajs/react";
import EventCard from "@/Components/EventCard.jsx";
import { useState } from "react";

export default function Home({ events: initialEvents, eventTypes }) {
    const [filterType, setFilterType] = useState('');
    const [filterName, setFilterName] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const filteredEvents = initialEvents.filter((event) => {
        const matchesType = filterType ? event.type === filterType : true;
        const matchesName = filterName
            ? event.title.toLowerCase().includes(filterName.toLowerCase())
            : true;
        const matchesDate = filterDate
            ? new Date(event.scheduled_at).toISOString().split('T')[0] === filterDate
            : true;

        return matchesType && matchesName && matchesDate;
    });

    return (
        <MainLayout>
            <Head title="Início" />

            <div className="mb-6 space-y-4">
                <div>
                    <label htmlFor="filterName" className="block text-sm font-medium text-gray-700">
                        Filtrar por nome:
                    </label>
                    <input
                        type="text"
                        id="filterName"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                        placeholder="Digite o nome do evento"
                        className="mt-1 block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="filterType" className="block text-sm font-medium text-gray-700">
                        Filtrar por tipo de evento:
                    </label>
                    <select
                        id="filterType"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="mt-1 block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Todos</option>
                        {Object.entries(eventTypes).map(([key, label]) => (
                            <option key={key} value={key}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="filterDate" className="block text-sm font-medium text-gray-700">
                        Filtrar por data:
                    </label>
                    <input
                        type="date"
                        id="filterDate"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                        className="mt-1 block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
            </div>

            <section className="grid grid-cols-4 gap-6 w-full h-full">
                {filteredEvents.map((event) => (
                    <EventCard
                        key={event.id}
                        type={eventTypes[event.type]}
                        title={event.title}
                        description={event.description}
                        location={event.location}
                        scheduled_at={event.scheduled_at}
                    />
                ))}
            </section>
        </MainLayout>
    );
}
