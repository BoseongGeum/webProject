import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
    const navigate = useNavigate();

    const images = [
        "/images/main/top.jpeg",
        "/images/main/bottom.jpeg",
        "/images/main/map_usa.png",
        "/images/main/map_kor.png",
    ];

    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={false} />;

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className="relative h-screen overflow-hidden text-[clamp(14px,1.2vw,18px)] font-bold">
            {/* 상단 이미지 */}
            <div className="h-[50vh] relative z-0">
                <img src="/images/main/top.jpeg" alt="상단 이미지" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-start text-white pt-[10vh] p-4 sm:p-6 md:p-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        <div className="text-lg sm:text-xl mb-1 font-bold">
                            Welcome to our CBOL corporation
                        </div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-2xl sm:text-3xl font-bold"
                    >
                        <span className="text-yellow-300">Multi-faceted company</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-2 text-base"
                    >
                        that supplies products to a wide range of industries including <br />
                        Aerospace, Defense, Space, Energy, Industrial, and Electronics.
                    </motion.p>
                </div>
            </div>

            {/* 하단 이미지 */}
            <div className="h-[50vh] relative z-0">
                <img src="/images/main/bottom.jpeg" alt="하단 이미지" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-end text-white pb-[10vh] p-4 sm:p-6 md:p-10">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-2xl sm:text-3xl font-bold"
                    >
                        Our <span className="text-yellow-300">worldwide network</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.3 }}
                        className="mt-2 text-right text-base"
                    >
                        of manufacturers and suppliers enables us to provide high quality <br />
                        components, assemblies, raw materials, chemicals, OEM and <br />
                        hard-to-find parts.
                    </motion.p>
                </div>
            </div>

            {/* 중간 배너 영역 */}
            <div className="absolute top-[30vh] left-0 w-full h-[40vh] z-10 flex">
                <div className="w-full h-full flex items-center justify-center text-center bg-indigo-400 bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black bg-opacity-40" />
                    <div className="flex w-full h-full">
                        {/* 팀1 */}
                        <div
                            onClick={() => handleClick("/team1")}
                            className="flex-1 relative group cursor-pointer overflow-hidden"
                            style={{
                                backgroundImage: 'url("/images/main/map_usa.png")',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0"
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
                        </div>

                        {/* 팀2 */}
                        <div
                            onClick={() => handleClick("/team2")}
                            className="flex-1 relative group cursor-pointer overflow-hidden"
                            style={{
                                backgroundImage: 'url("/images/main/map_kor.png")',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    Global Sourcing &<br />
                                    Trading Business<br />
                                    한국연락사무소
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
