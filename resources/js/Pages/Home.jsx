import MainLayout from "@/Layouts/MainLayout.jsx";
import {Head} from "@inertiajs/react";
import EventCard from "@/Components/EventCard.jsx";
import Modal from "@/Components/Modal.jsx";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Início" />

            <section className="grid grid-cols-4 gap-6 h-full">
                <EventCard
                    color={"sky"}
                    type={"Palestra"}
                    title={"Inteligencia artificial no combate a crimes cibernéticos"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eligendi ex in nesciunt placeat quam quia quidem sit voluptate?"}
                    location={"auditório mucambinho"}
                    scheduled_at={"22/12/22025 - 17:00"}
                />

                <Modal/>
            </section>
        </MainLayout>
    );
}
