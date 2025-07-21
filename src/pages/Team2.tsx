import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

export default function Team2() {
    const imagePaths = ["/images/team2/main.png", "/images/logo.png"];
    const imagesLoaded = useImagePreloader(imagePaths);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (imagesLoaded) {
            timeout = setTimeout(() => {
                setShowContent(true);
            }, 700);
        }

        return () => clearTimeout(timeout);
    }, [imagesLoaded]);

    if (!showContent) {
        return <LoadingScreen isWhite={true} />;
    }

    return (
        <div className="flex flex-col lg:flex-row w-full lg:h-[calc(100vh-96px)] overflow-hidden bg-white text-red-950 font-bold">
            {/* 좌측(데스크탑) or 상단(모바일): 이미지 */}
            <motion.div
                className="lg:w-2/3 w-full h-full flex flex-col"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="flex-1 flex items-center justify-center min-h-0 order-2 mt-16 py-4">
                    <img
                        src="/images/main/main.png"
                        alt="Team2 Banner"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            </motion.div>

            {/* 우측(데스크탑) or 하단(모바일): 로고 + 텍스트 */}
            <div className="lg:w-1/3 w-full h-auto lg:h-full flex flex-col items-center justify-center p-16 order-3">
                <motion.img
                    src="/images/logo.png"
                    alt="CBOL Logo"
                    className="w-40 sm:w-60 md:w-80 lg:w-96 h-auto mb-4 lg:mb-6 order-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                />
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug text-center lg:text-left order-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    생각과 제조를<br />연결하다
                </motion.h1>
            </div>
        </div>
    );
}
