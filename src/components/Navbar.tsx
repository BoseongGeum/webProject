import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import logo from "../images/favicon.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-500 ${
                isOpen ? "translate-y-0" : "-translate-y-[80%]"
            }`}
        >
            {/* 네비게이션 바 */}
            <div className="bg-black bg-opacity-70 text-white w-64 px-4 py-3 flex items-center justify-center rounded-b-full shadow-lg">
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="CBOL Logo" className="h-10 w-auto" />
                </Link>
            </div>

            {/* 토글 버튼 (네비게이션 바와 함께 이동) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 text-white p-1 w-6 h-6 flex items-center justify-center rounded-full border border-white shadow hover:bg-opacity-100 transition"
                aria-label="Toggle Navbar"
            >
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
        </div>
    );
}
