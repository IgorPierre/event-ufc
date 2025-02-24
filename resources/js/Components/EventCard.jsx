import DefaultButtom from "@/Components/DefaultButtom.jsx";
import BackgroundLetter from "@/Components/BackgroundLetter.jsx";

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

            <div className="flex justify-start items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <small>Igor Pierre</small>
            </div>

            <h2 className="text-2xl font-semibold">
                Inteligência artificial no combate a crimes cibernéticos
            </h2>
            <p className="leading-5 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse inventore maiores, molestias, nulla numquam odio officiis quae repellat repudiandae rerum suscipit veritatis.
            </p>

            <div className="flex justify-start items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <small>Local: Auditório, mucambinho</small>
            </div>

            <div className="flex justify-start items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <small>Data: 22/03/2025 - 12:00 -13:30</small>
            </div>
        </div>
    );
}
