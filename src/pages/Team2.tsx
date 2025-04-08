import { useState } from "react";

const blocks = [
    { id: 1, color: "bg-green-500", link: "https://www.naver.com", name: "Naver" },
    { id: 2, color: "bg-red-500", link: "https://www.cbol.com", name: "CBOL" },
    { id: 3, color: "bg-blue-500", link: "https://www.google.com", name: "Google" },
];

export default function App() {
    const [activeBlock, setActiveBlock] = useState<number | null>(null);

    return (
        <div className="flex flex-col h-screen w-full">
            {blocks.map((block) => (
                <div
                    key={block.id}
                    className={`flex-1 flex items-center justify-center text-white font-bold text-3xl transition-all duration-300 ${block.color}`}
                    onClick={() => setActiveBlock(activeBlock === block.id ? null : block.id)}
                >
                    <a
                        href={block.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Visit {block.name}
                    </a>
                </div>
            ))}
        </div>
    );
}