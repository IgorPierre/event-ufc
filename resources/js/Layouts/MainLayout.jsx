import PrimaryButton from "@/Components/PrimaryButton.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import {Link} from "@inertiajs/react";

export default function MainLayout({ children }) {
    return (
        <div className="bg-slate-100 flex flex-col w-screen min-h-screen">
            <div className="flex justify-between items-center w-full py-4 px-14">
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>

                <PrimaryButton>
                    <Link href="/dashboard">
                        Meus eventos
                    </Link>
                </PrimaryButton>
            </div>

            <div className="flex justify-center items-center flex-col w-full h-full py-6 px-14">
                {children}
            </div>
        </div>
    );
}
