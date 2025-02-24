import DefaultButtom from "@/Components/DefaultButtom.jsx";
import BackgroundLetter from "@/Components/BackgroundLetter.jsx";
import {AcademicCapIcon, CalendarDaysIcon, MapPinIcon} from "@heroicons/react/16/solid/index.js";

const colorVariants = {
    teal: {
        bg: "bg-teal-300",
        text: "text-teal-800",
        label: "text-teal-500"
    },
    rose: {
        bg: "bg-rose-300",
        text: "text-rose-800",
        label: "text-rose-500"
    },
    violet: {
        bg: "bg-violet-300",
        text: "text-violet-800",
        label: "text-violet-500"
    }
};

export default function EventCard({ color = "teal", category }) {
    const colors = colorVariants[color] || colorVariants.teal;

    return (
        <div className={`flex flex-col justify-start gap-2 p-6 w-80 h-full rounded-2xl overflow-hidden relative ${colors.bg} ${colors.text}`}>
           <BackgroundLetter content={category}/>

            <div className="flex justify-between w-full mb-12">
                <span className={`text-xl font-semibold ${colors.label}`}>
                    {category}
                </span>
                <DefaultButtom>Inscreva-se</DefaultButtom>
            </div>

            <div className="flex justify-start items-center gap-2 text-slate-100">
                <AcademicCapIcon className="size-4"/>
                <small className="font-semibold">Igor Pierre</small>
            </div>

            <h2 className="text-2xl font-semibold">
                Inteligência artificial no combate a crimes cibernéticos
            </h2>
            <p className="leading-5 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse inventore maiores, molestias, nulla numquam odio officiis quae repellat repudiandae rerum suscipit veritatis.
            </p>

            <div className="flex justify-start items-center gap-2">
                <MapPinIcon className="size-4"/>
                <small>Local: Auditório, mucambinho</small>
            </div>

            <div className="flex justify-start items-center gap-2">
                <CalendarDaysIcon className="size-4"/>
                <small>Data: 22/03/2025 - 12:00 -13:30</small>
            </div>
        </div>
    );
}
