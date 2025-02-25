import { AcademicCapIcon, CalendarDaysIcon, MapPinIcon } from "@heroicons/react/16/solid/index.js";
import DefaultButton from "@/Components/DefaultButton.jsx";
import BackgroundLetter from "@/Components/BackgroundLetter.jsx";

const colorVariants = {
    teal: {
        bg: "bg-teal-300",
        text: "text-teal-800",
        label: "text-teal-600"
    },
    violet: {
        bg: "bg-violet-300",
        text: "text-violet-800",
        label: "text-violet-600"
    },
    sky: {
        bg: "bg-sky-300",
        text: "text-sky-800",
        label: "text-sky-600"
    }
};

const getColorByType = (type) => {
    switch (type) {
        case "Palestra":
            return colorVariants.teal;
        case "Encontro estudantil":
            return colorVariants.violet;
        case "Minicurso":
            return colorVariants.sky;
        default:
            return colorVariants.teal;
    }
};

const EventDetail = ({ icon: Icon, text }) => (
    <div className="flex justify-start items-center gap-2">
        <Icon className="size-4" />
        <small>{text}</small>
    </div>
);

export default function EventCard({ type, title, description, location, scheduled_at }) {
    const colors = getColorByType(type);

    return (
        <div className={`flex flex-col justify-start gap-2 p-6 w-80 h-full rounded-2xl overflow-hidden relative ${colors.bg} ${colors.text}`}>
            <BackgroundLetter content={type} />
            <div className="flex justify-between w-full mb-12">
                <span className={`text-xl font-semibold underline ${colors.label}`}>
                    {type}
                </span>
                <DefaultButton>Inscreva-se</DefaultButton>
            </div>

            <EventDetail icon={AcademicCapIcon} text={"Igor Pierre"} />

            <h2 className="text-2xl leading-6 font-bold">
                {title}
            </h2>

            <p className="leading-5 mb-8">
                {description}
            </p>

            <EventDetail icon={MapPinIcon} text={location} />

            <EventDetail icon={CalendarDaysIcon} text={scheduled_at} />
        </div>
    );
}
