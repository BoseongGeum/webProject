import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../images/favicon.png"; // 로딩용 로고

type LoadingScreenProps = {
    onFinish: () => void;
    isMainNavbarPage: boolean;
};

export default function LoadingScreen({ onFinish, isMainNavbarPage }: LoadingScreenProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 0.75초 후 로딩 화면을 종료
        const timeoutId = setTimeout(() => {
            setLoading(false);
            onFinish(); // 로딩 종료 후 부모 컴포넌트에 알림
        }, 750); // 0.75초

        return () => clearTimeout(timeoutId); // cleanup
    }, [onFinish]); // 의존성 배열에 onFinish 추가

    if (!loading) return null;

    return (
        <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center ${isMainNavbarPage ? "bg-white" : "bg-black"}`}>
            <motion.img
                src={Logo}
                alt="Loading Logo"
                className="h-32 w-32 object-contain"  // 크기를 더 키움
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity }}
            />
        </div>
    );
}
