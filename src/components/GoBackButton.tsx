import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface GoBackButtonProps {
    topOffset: number;
}

export default function GoBackButton({topOffset}: GoBackButtonProps) {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <motion.div
            animate={{ y: topOffset }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{
                position: 'fixed',
                top: 0 }}
        >
            <button
                onClick={handleGoBack}
                className="flex items-center text-red-950 hover:text-gray-300 transition-all duration-200"
            >
                <X className="mt-8" size={32} /> {/* x 아이콘 추가 */}
            </button>
        </motion.div>
    );
}
