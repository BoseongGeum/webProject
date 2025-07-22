import { motion } from "framer-motion";

type LoadingScreenProps = {
    isWhite: boolean;
    percent?: number;
};

export default function LoadingScreen({ isWhite, percent = 0 }: LoadingScreenProps) {
    return (
        <div className={`fixed inset-0 z-50 flex flex-col gap-6 items-center justify-center ${isWhite ? "bg-[#F0EEEB]" : "bg-black"}`}>
            <motion.img
                src="/images/logo.png"
                alt="Loading Logo"
                className="h-32 w-32 object-contain"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity }}
            />

            {/* 프로그레스 바 */}
            <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-red-950 origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}
