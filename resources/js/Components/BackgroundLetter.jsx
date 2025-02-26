export default function BackgroundLetter({ content }) {
    return (
        <div className="flex flex-col text-nowrap absolute bottom-0">
            <Latter className="ml-6">{content}</Latter>
            <Latter className="ml-[-18px]">{content}</Latter>
        </div>
    );
}

function Latter({ children, className }) {
    return (
        <h1 className={`text-5xl uppercase font-black opacity-15 inline-block ${className}`}>
            {children}
        </h1>
    );
}
