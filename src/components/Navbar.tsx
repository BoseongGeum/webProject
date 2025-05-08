import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            // 현재 위치가 "/"면 강제로 새로고침
            window.location.reload();
        } else {
            navigate("/");
        }
        setIsOpen(true);
    };

    return (
        <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-500 ${
                isOpen ? "translate-y-0" : "-translate-y-[100%]"
            }`}
        >
            {/* 네비게이션 바 */}
            <div className="bg-black bg-opacity-70 text-white w-44 px-3 py-2 flex items-center justify-center rounded-b-full shadow-lg
                sm:w-64 sm:px-4 sm:py-3"
            >
                <button
                    onClick={handleLogoClick}
                    className="transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src="/images/logo.png"
                        alt="CBOL Logo"
                        className="h-8 w-auto sm:h-10"
                    />
                </button>
            </div>

            {/* 토글 버튼 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-0.5 w-5 h-5 flex items-center justify-center rounded-b-full border border-black hover:border-white shadow transition-all
                sm:p-1 sm:w-6 sm:h-6"
                aria-label="Toggle Navbar"
            >
                {isOpen ? (
                    <ChevronUp size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                    <ChevronDown size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
            </button>
        </div>
    );
}
