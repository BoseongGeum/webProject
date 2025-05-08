import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
        if (location.pathname === targetPath) {
            window.location.reload();
        } else {
            navigate(targetPath);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full flex h-16 shadow-md z-50">
            {/* 로고 영역 */}
            <div className="w-48 bg-white flex items-center justify-center">
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

            {/* 메뉴 영역 */}
            <div className="flex flex-1 bg-red-800 text-white font-bold text-xl">
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
        </div>
    );
};

export default MainNavbar;
