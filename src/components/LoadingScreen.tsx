import { motion } from "framer-motion";

type LoadingScreenProps = {
    isWhite: boolean;
};

export default function LoadingScreen({ isWhite }: LoadingScreenProps) {
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${isWhite ? "bg-white" : "bg-black"}`}>
            <motion.img
                src="/images/logo.png"
                alt="Loading Logo"
                className="h-32 w-32 object-contain"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity }}
            />
        </div>
    );
}
