import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function MainLayout({ children, onClick }) {
    return (
        <div className="bg-slate-120 flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            <div className="flex justify-between items-center w-full py-6 px-14">
                logo

                <PrimaryButton onClick={onClick}>Criar evento</PrimaryButton>
            </div>

            <div className="flex justify-center items-center flex-col w-full h-screen py-6 px-14">
                {children}
            </div>
        </div>
    );
}
