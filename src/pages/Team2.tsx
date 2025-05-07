import { motion } from "framer-motion";
import GoMainButton from "../components/GoMainButton";

export default function Team2() {
    return (
        <div className="flex w-full h-[calc(100vh-96px)] mt-16 overflow-hidden py-8 bg-white text-black font-bold">
            {/* 좌측 2/3: 이미지 + 버튼 */}
            <motion.div className="w-2/3 h-full flex flex-col justify-between"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}>
                <img
                    src="/images/team2/team2main.png"
                    alt="Banner"
                    className="w-full h-full object-contain"

                />
                <div className="flex flex-col w-full pl-8">
                    <GoMainButton />
                </div>
            </motion.div>

            {/* 우측 1/3: 로고 + 텍스트 */}
            <div className="w-1/3 h-full flex flex-col justify-center text-black p-16">
                <motion.img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-96 h-auto mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                />
                <motion.h1
                    className="text-6xl font-bold leading-snug"
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