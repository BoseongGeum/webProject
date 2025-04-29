import React from "react";
import logo from "../images/favicon.png";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
    name: string;
    path: string;
}

interface MainNavbarProps {
    menus: MenuItem[];
}

const MainNavbar: React.FC<MainNavbarProps> = ({ menus }) => {
    const location = useLocation();

    // team1 페이지인지 team2 페이지인지 path 기준으로 판별
    const isTeam1Page = location.pathname.startsWith("/team1") || location.pathname === "/";
    const logoLink = isTeam1Page ? "/team1" : "/team2";

    return (
        <div className="fixed top-0 left-0 w-full flex h-16 shadow-md z-50">
            {/* 로고 영역 */}
            <div className="w-48 bg-white flex items-center justify-center">
                <Link
                    to={logoLink}
                    className="transition-transform duration-300 hover:scale-105"
                >
                    <img
                        src={logo}
                        alt="CBOL Logo"
                        className="h-8 w-auto sm:h-10"
                    />
                </Link>
            </div>

            {/* 메뉴 영역 */}
            <div className="flex flex-1 bg-red-800 text-white font-bold text-xl">
                {menus.map((menu, index) => {
                    const isActive = location.pathname.includes(menu.path);
                    return (
                        <div
                            key={index}
                            className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
                                isActive ? "bg-white text-red-800" : "hover:bg-red-700"
                            }`}
                        >
                            <Link to={`${menu.path}ProductInfo`} className="w-full h-full flex items-center justify-center">
                                {menu.name}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MainNavbar;
