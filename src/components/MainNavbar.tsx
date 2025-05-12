import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

interface MenuItem {
    name: string;
    path: string;
}

interface MainNavbarProps {
    menus: MenuItem[];
}

const MainNavbar: React.FC<MainNavbarProps> = ({ menus }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isTeam1Page = location.pathname.startsWith("/team1") || location.pathname === "/";
    const logoLink = isTeam1Page ? "/team1" : "/team2";

    const handleLogoClick = () => {
        if (location.pathname === logoLink) {
            window.location.reload();
        } else {
            navigate(logoLink);
        }
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
        <div className="fixed top-0 left-0 w-full h-16 z-50 flex items-center bg-white shadow-md">
            {/* 로고 영역 */}
            <div className="w-48 flex items-center justify-center">
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

            {/* 데스크탑 메뉴 (원본 유지) */}
            <div className="hidden sm:flex flex-1 h-full bg-red-800 text-white font-bold text-xl">
                {menus.map((menu, index) => {
                    const targetPath = isTeam1Page ? `${menu.path}ProductInfo` : menu.path;
                    const isActive = location.pathname === targetPath;

                    return (
                        <div
                            key={index}
                            className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
                                isActive ? "bg-white text-red-800" : "hover:bg-red-700"
                            }`}
                        >
                            <button
                                onClick={() => handleMenuClick(targetPath)}
                                className="w-full h-full flex items-center justify-center"
                            >
                                {menu.name}
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
                        const isActive = location.pathname === targetPath;

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
    );
};

export default MainNavbar;
