import { Link } from "react-router-dom";
import topImage from "../images/main/top.jpeg"; // 상단 이미지
import bottomImage from "../images/main/bottom.jpeg"; // 하단 이미지
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="h-screen overflow-hidden flex flex-col text-[clamp(14px,1.2vw,18px)] font-bold">
            {/* 상단 (이미지 + 텍스트) */}
            <div className="flex-[1] relative min-h-0">
                <img
                    src={topImage}
                    alt="상단 이미지"
                    className="w-full h-full object-cover"
                />

                {/* 🔥 어두운 오버레이 추가 */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* 텍스트 컨텐츠 */}
                <div className="absolute inset-0 flex flex-col justify-center text-white p-4 sm:p-6 md:p-10">
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

            {/* 가운데 (블록) */}
            <div className="flex-[1] flex min-h-0 text-center">
                <Link
                    to="/team1"
                    className="w-1/2 bg-blue-50 flex justify-center items-center cursor-pointer hover:bg-blue-100 transition px-2"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="text-xl sm:text-2xl text-blue-300 font-bold leading-snug"
                    >
                        Defense Business <br />
                        미국 본사 <br />
                        Exclusive 독점 제품
                    </motion.p>
                </Link>
                <Link
                    to="/team2"
                    className="w-1/2 bg-blue-50 flex justify-center items-center cursor-pointer hover:bg-blue-100 transition px-2"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2.1 }}
                        className="text-xl sm:text-2xl text-blue-300 font-bold leading-snug"
                    >
                        Global Sourcing & <br />
                        Trading Business <br />
                        한국연락사무소
                    </motion.p>
                </Link>
            </div>

            {/* 하단 (이미지 + 텍스트) */}
            <div className="flex-[1] relative min-h-0">
                <img
                    src={bottomImage}
                    alt="하단 이미지"
                    className="w-full h-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* 텍스트 */}
                <div className="absolute inset-0 flex flex-col justify-center items-end text-white p-4 sm:p-6 md:p-10">
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
        </div>
    );
}