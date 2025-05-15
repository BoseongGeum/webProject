import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoMainButton from "./GoMainButton";

const Footer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isContactUsPage = location.pathname.startsWith("/team2/contactUs");

    const handleContactClick = () => {
        if (location.pathname === "/team2/contactUs") {
            window.location.reload();
        } else {
            navigate("/team2/contactUs");
        }
    };

    return (
        <footer className="bg-red-800 text-white py-5">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
                {/* 좌측: GoMainButton */}
                <div>
                    <GoMainButton />
                </div>

                {/* 가운데: 로고 + 저작권 */}
                <div className="flex items-center text-base gap-3">
                    <img src="/images/logo-white.png" alt="CBOL Logo" className="h-8 w-auto" />
                    <span>© 2025 CBOL. All Rights Reserved.</span>
                </div>

                {/* 우측: 문의하기 버튼 (ContactUs 페이지에서는 숨김) */}
                {!isContactUsPage && (
                    <div className="flex items-center text-sm text-white gap-3">
                        궁금한 점이 있으신가요?
                        <button
                            onClick={handleContactClick}
                            className="hover:text-red-950 transition"
                        >
                            → 문의하기
                        </button>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;