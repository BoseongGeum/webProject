import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import logo from "../images/favicon.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-500 ${
                isOpen ? "translate-y-0" : "-translate-y-[100%]"
            }`}
        >
            {/* 네비게이션 바 */}
            <div className="bg-black bg-opacity-70 w-64 px-4 py-3 flex items-center justify-center rounded-b-full shadow-lg
                sm:w-44 sm:px-3 sm:py-2">
                <Link
                    to="/"
                    onClick={() => setIsOpen(true)}
                    className="transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src={logo}
                        alt="CBOL Logo"
                        className="h-10 w-auto sm:h-8"
                    />
                </Link>
            </div>

            {/* 토글 버튼 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-1 w-6 h-6 flex items-center justify-center rounded-b-full border border-black hover:border-white shadow transition-all
                sm:p-0.5 sm:w-5 sm:h-5"
                aria-label="Toggle Navbar"
            >
                {isOpen ? (
                    <ChevronUp size={14} className="sm:w-3 sm:h-3" />
                ) : (
                    <ChevronDown size={14} className="sm:w-3 sm:h-3" />
                )}
            </button>
        </div>
    );
}
