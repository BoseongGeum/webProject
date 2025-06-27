import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
            className={`fixed top-0 left-0 right-0 w-full transform z-50 transition-transform duration-500 ${
                isOpen ? "translate-y-0" : "-translate-y-[100%]"
            }`}
        >
            {/* 네비게이션 바 */}
            <div className="bg-[#F0EEEB] text-white w-full px-6 py-2 flex items-center sm:w-full sm:px-10 sm:py-3"
                 style={{
                     // 기본 투명 2px border-bottom
                     borderBottom: '1px solid transparent',
                     borderImageSource: 'repeating-linear-gradient(to right, #000 0 4px, transparent 0px 16px)',
                     borderImageSlice: 1,  // 반드시 1 이어야 합니다
                 }}
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
        </div>
    );
}
