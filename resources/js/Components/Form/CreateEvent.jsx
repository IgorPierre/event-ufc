import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

export default function CreateEvent({ eventTypes, event, onSuccess }) {
    // Estado para armazenar os valores do formulário
    const [values, setValues] = useState({
        type: "",
        title: "",
        leader: "",
        description: "",
        location: "",
        scheduled_at: "",
    });

    // Estado para armazenar erros de validação
    const [errors, setErrors] = useState({});

    // Preenche o formulário com os dados do evento, se existir
    useEffect(() => {
        if (event) {
            setValues({
                type: event.type,
                title: event.title,
                leader: event.leader,
                description: event.description,
                location: event.location,
                scheduled_at: event.scheduled_at,
            });
        }
    }, [event]);

    // Função para atualizar os valores do formulário
    function handleChange(e) {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    }

    // Função para enviar o formulário
    function handleSubmit(e) {
        e.preventDefault();

        if (event) {
            // Se existir um evento, atualiza (PUT)
            router.put(`/events/${event.id}`, values, {
                onError: (err) => setErrors(err),
                onSuccess: () => {
                    setErrors({});
                    onSuccess(); // Fecha o modal ou executa outra ação
                },
            });
        } else {
            // Se não existir um evento, cria um novo (POST)
            router.post('/events', values, {
                onError: (err) => setErrors(err),
                onSuccess: () => {
                    setErrors({});
                    onSuccess(); // Fecha o modal ou executa outra ação
                },
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipo de Evento:</label>
                <select
                    id="type"
                    value={values.type}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="" disabled>Selecione o tipo de evento</option>
                    {Object.entries(eventTypes).map(([key, label]) => (
                        <option key={key} value={key}>
                            {label}
                        </option>
                    ))}
                </select>
                {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título:</label>
                <input
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="leader" className="block text-sm font-medium text-gray-700">Líder:</label>
                <input
                    id="leader"
                    value={values.leader}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.leader && <p className="text-red-500 text-sm mt-1">{errors.leader}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição:</label>
                <textarea
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Localização:</label>
                <input
                    id="location"
                    value={values.location}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="scheduled_at" className="block text-sm font-medium text-gray-700">Data e Hora:</label>
                <input
                    id="scheduled_at"
                    type="datetime-local"
                    value={values.scheduled_at}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.scheduled_at && <p className="text-red-500 text-sm mt-1">{errors.scheduled_at}</p>}
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                    {event ? 'Atualizar Evento' : 'Criar Evento'}
                </button>
            </div>
        </form>
    );
}
