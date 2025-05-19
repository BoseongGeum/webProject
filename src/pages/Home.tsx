import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
    const navigate = useNavigate();

    const images = [
        "/images/main/top.jpeg",
        "/images/main/bottom.jpeg",
        "/images/main/map-usa.png",
        "/images/main/map-kor.png",
    ];

    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={false} />;

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className="relative min-h-screen overflow-hidden font-bold text-[clamp(14px,1.2vw,18px)]">
            {/* 상단 이미지 */}
            <div className="relative h-[50vh] z-0">
                <img src="/images/main/top.jpeg" alt="상단 이미지" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="absolute inset-0 flex flex-col justify-start text-white pt-[10vh] px-4 sm:px-6 md:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <div className="text-base sm:text-lg md:text-xl mb-1">Welcome to our CBOL corporation</div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-xl sm:text-2xl md:text-3xl"
                    >
                        <span className="text-yellow-300">Multi-faceted company</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-2 text-sm sm:text-base"
                    >
                        that supplies products to a wide range of industries including <br />
                        Aerospace, Defense, Space, Energy, Industrial, and Electronics.
                    </motion.p>
                </div>
            </div>

            {/* 하단 이미지 */}
            <div className="relative h-[50vh] z-0">
                <img src="/images/main/bottom.jpeg" alt="하단 이미지" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="absolute inset-0 flex flex-col justify-end items-end text-white pb-[10vh] px-4 sm:px-6 md:px-10">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-xl sm:text-2xl md:text-3xl"
                    >
                        Our <span className="text-yellow-300">worldwide network</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="mt-2 text-right text-sm sm:text-base"
                    >
                        of manufacturers and suppliers enables us to provide high quality <br />
                        components, assemblies, raw materials, chemicals, OEM and <br />
                        hard-to-find parts.
                    </motion.p>
                </div>
            </div>

            {/* 중간 배너 영역 */}
            <motion.div
                className="absolute top-[33vh] left-0 w-full h-[34vh] z-10 flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <div className="w-full h-full flex items-center justify-center text-center bg-indigo-400 bg-cover bg-center bg-opacity-90 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <div className="flex flex-row w-full h-full min-w-0">
                        {/* 팀1 */}
                        <motion.div
                            onClick={() => handleClick("/team1")}
                            className="flex-1 min-w-0 relative group cursor-pointer overflow-hidden shadow-gray-700 shadow-sm"
                            style={{
                                backgroundImage: 'url("/images/main/map-usa.png")',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-[clamp(14px,1.2vw,20px)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    Defence Business<br />
                                    미국 본사<br />
                                    Exclusive 독점 제품
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* 팀2 */}
                        <motion.div
                            onClick={() => handleClick("/team2")}
                            className="flex-1 min-w-0 relative group cursor-pointer overflow-hidden shadow-gray-700 shadow-sm"
                            style={{
                                backgroundImage: 'url("/images/main/map-kor.png")',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-[clamp(14px,1.2vw,20px)] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, ease: "easeOut"}}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    Global Sourcing &<br />
                                    Trading Business<br />
                                    한국연락사무소
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}