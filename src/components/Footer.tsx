import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isContactUsPage = location.pathname.startsWith("/contactUs");

    const handleContactClick = () => {
        if (location.pathname === "/contactUs") {
            window.location.reload();
        } else {
            navigate("/contactUs");
        }
    };

    const handleCreditsClick = () => {
        if (location.pathname === "/credits") {
            window.location.reload();
        } else {
            navigate("/credits");
        }
    };

    return (
        <footer className="bg-black text-white py-5 z-30 absolute bottom-0 left-0 w-full">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center font-bold gap-6">

                {/* 가운데: 로고 + 저작권 */}
                <div className="flex items-center text-sm gap-3">
                    <img src="/images/logo-white.png" alt="CBOL Logo" className="h-8 w-auto" />
                    <span>© 2025 CBOL. All Rights Reserved.</span>
                </div>

                {/* 우측: 문의하기 버튼 (ContactUs 페이지에서는 숨김) */}
                {!isContactUsPage && (
                    <div className="flex items-center text-sm gap-24">
                        <button
                            onClick={handleCreditsClick}
                            className={`relative text-xs transition-colors duration-200 group`}
                        >
                            Resources & Credits
                        </button>
                        <div className="flex items-center text-sm text-white gap-3">
                            궁금한 점이 있으신가요?
                            <button
                                onClick={handleContactClick}
                                className={`relative transition-colors duration-200 group`}
                            >
                                → 문의하기
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-current transform 
                                        scale-x-0 origin-right transition-transform duration-300 
                                        group-hover:scale-x-100 group-hover:origin-left`}
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;