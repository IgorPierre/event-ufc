import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
    return (
        <div className="bg-slate-100 flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            <div className="flex justify-center items-center flex-col w-full h-screen p-14">
                {children}
            </div>
        </div>
    );
}
