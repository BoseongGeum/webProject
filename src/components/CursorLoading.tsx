// CursorLoading.tsx
import { useEffect, useState } from "react";

export default function CursorLoading({ visible }: { visible: boolean }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX + 4, y: e.clientY + 4 });
        };
        if (visible) {
            window.addEventListener("mousemove", move);
        } else {
            window.removeEventListener("mousemove", move);
        }
        return () => window.removeEventListener("mousemove", move);
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            className="fixed z-50 pointer-events-none transition-opacity duration-300"
            style={{
                top: pos.y,
                left: pos.x,
            }}
        >
            {/* 로딩 스피너 아이콘 또는 텍스트 */}
            <div className="w-8 h-8 border-2 border-gray-300 border-t-red-500 rounded-full animate-spin" />
        </div>
    );
}
