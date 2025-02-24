export default function DefaultButton({children}) {
    return (
        <a className="bg-slate-100 flex justify-center items-center px-4 rounded-xl">
            {children}
        </a>
    );
}
