import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleGoBack}
            className="flex items-center text-black hover:text-red-800 transition-all duration-200"
        >
            <ChevronLeft className="mr-2" /> {/* 화살표 아이콘 추가 */}
            <span className="text-lg font-bold">뒤로 가기</span>
        </button>
    );
};

export default BackButton;
