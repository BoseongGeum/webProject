import { motion } from "framer-motion";

type LoadingScreenProps = {
    isWhite: boolean;
    percent?: number; // Optional
};

export default function LoadingScreen({ isWhite, percent }: LoadingScreenProps) {
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
            {percent !== undefined && (
                <div className={`text-xl font-semibold ${isWhite ? "text-black" : "text-white"}`}>
                    {percent.toLocaleString()}%
                </div>
            )}
        </div>
    );
}
