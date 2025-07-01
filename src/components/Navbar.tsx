import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Menu as MenuIcon, X as CloseIcon} from "lucide-react";

interface MenuItem {
    name: string;
    path: string;
}

interface MainNavbarProps {
    menus: MenuItem[];
}

export default function Navbar( {menus}: MainNavbarProps ) {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isTeam1Page = location.pathname.startsWith("/team1") || location.pathname === "/";

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            // 현재 위치가 "/"면 강제로 새로고침
            window.location.reload();
        } else {
            navigate("/");
        }
        setIsOpen(true);
    };

    const handleMenuClick = (targetPath: string) => {
        setMobileOpen(false);
        if (location.pathname === targetPath) {
            window.location.reload();
        } else {
            navigate(targetPath);
        }
    };

    return (
        <div
            className={`fixed flex top-0 left-0 right-0 w-full transform z-50 transition-transform duration-500 ${
                isOpen ? "translate-y-0" : "-translate-y-[100%]"
            }`}
        >
            {/* 네비게이션 바 */}
            <div className="relative bg-[#F0EEEB] text-black w-full px-6 py-2 flex items-center sm:px-10 sm:py-3"
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
                        className="h-6 w-auto sm:h-8"
                    />
                </button>

                {/* 데스크탑 메뉴 */}
                <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 h-full whitespace-nowrap items-center justify-center space-x-8 font-extrabold text-l">
                    {menus.map((menu, index) => {
                        const targetPath = menu.path;
                        const isActive = location.pathname === targetPath;

                        return (
                            <div
                                key={index}
                                className={`flex-1 flex items-center justify-center transition-colors duration-200`}
                            >
                                <button
                                    key={index}
                                    onClick={() => handleMenuClick(targetPath)}
                                    className={`relative transition-colors duration-200 group`}
                                >
                                    {menu.name}
                                    {/* underline */}
                                    <span
                                        className={`absolute left-0 bottom-0 w-full h-0.5 bg-current transform 
                                        scale-x-0 origin-right transition-transform duration-300 
                                        group-hover:scale-x-100 group-hover:origin-left
                                        ${isActive ? 'scale-x-100 origin-left' : ''}`}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* 모바일 메뉴 버튼 */}
                <div className="flex sm:hidden flex-1 justify-end pr-4">
                    <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴 열기/닫기">
                        {mobileOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>

                {/* 모바일 드롭다운 메뉴 */}
                {mobileOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 sm:hidden z-40">
                        {menus.map((menu, index) => {
                            const targetPath = isTeam1Page ? `${menu.path}ProductInfo` : menu.path;
                            const isActive = location.pathname === targetPath || location.pathname === `${menu.path}ManagerInfo`;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleMenuClick(targetPath)}
                                    className={`w-full px-6 py-3.5 text-left font-bold text-base border-b ${
                                        isActive
                                            ? "bg-white text-red-800"
                                            : "bg-red-800 text-white hover:bg-red-700"
                                    }`}
                                >
                                    {menu.name}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
