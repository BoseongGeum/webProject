import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Stickybar from "../components/Stickybar";

// 각 줄 애니메이션
const lineVariants = {
    hidden: {
        y: "20%",
        opacity: 0,
    },
    visible: {
        y: "0%",
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

// 전체 컨테이너에서 순차 재생
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const ContactUs: React.FC = () => {
    const [showMap, setShowMap] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <main className="min-h-screen bg-[#F0EEEB] relative">
            <Stickybar title={"CONTACT"} subtitle={"문의하기"} topOffset={showNavbar ? 55 : 0} align={"center"} />
            <div className="w-full min-h-screen text-black font-bold pt-24 pb-24 px-16">
                <motion.div
                    className="w-full mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="text-left mb-8">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                            variants={lineVariants}
                        >
                            CONTACT <span className="text-red-800">US</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div className="text-left mb-2 lg:mb-6">
                        <motion.p
                            className="text-gray-500 text-base sm:text-lg"
                            variants={lineVariants}
                        >
                            궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                        </motion.p>
                    </motion.div>

                    <div className="w-full flex flex-row gap-4 lg:gap-12">
                        <div className="h-full w-1/4 pr-8 overflow-hidden">
                            <img
                                src=""
                                alt="Section illustration"
                                className="h-full object-cover object-right-top rounded-sm"
                            />
                        </div>
                        {/* Contact Info 3x3 Grid */}
                        <motion.div
                            className="w-full"
                            variants={containerVariants}
                        >
                            <motion.h3
                                className="text-black text-2xl sm:text-3xl mb-8"
                                variants={lineVariants}
                            >
                                <span className="text-yellow-500">한국</span> 연락사무소
                            </motion.h3>

                            <div className="space-y-4">
                                {/* Row 1 */}
                                <motion.div className="flex" variants={lineVariants}>
                                    <div className="w-[5%] flex justify-center items-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-800 text-xl mt-1" />
                                    </div>
                                    <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                        MAILING ADDRESS
                                    </div>
                                    <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">
                                        서울시 중구 정동길 35, 두비빌딩 403호
                                    </div>
                                </motion.div>

                                {/* Row 2 */}
                                <motion.div className="flex" variants={lineVariants}>
                                    <div className="w-[5%] flex justify-center items-center">
                                        <FontAwesomeIcon icon={faPhoneAlt} className="text-red-800 text-xl mt-1" />
                                    </div>
                                    <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                        PHONE & FAX
                                    </div>
                                    <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">
                                        Tel: 02-318-5510<br />
                                        Fax: 02-318-0550
                                    </div>
                                </motion.div>

                                {/* Row 3 */}
                                <motion.div className="flex" variants={lineVariants}>
                                    <div className="w-[5%] flex justify-center items-center">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-red-800 text-xl mt-1" />
                                    </div>
                                    <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                        EMAIL ADDRESS
                                    </div>
                                    <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">
                                        info@cbol.com
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div className="flex items-center justify-center">
                            {/* 지도 아이콘 버튼 */}
                            <motion.button
                                onClick={() => setShowMap(!showMap)}
                                className="flex p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
                                title="지도 보기/숨기기"
                                variants={lineVariants}
                            >
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-gray-700" />
                            </motion.button>
                        </div>
                    </div>
                    <div className="bg-red-950 w-full my-4 border border-red-950" />
                    {/* Google Map */}
                    {showMap && (
                        <div className="relative w-full h-[300px] lg:h-[450px] overflow-hidden">
                            <motion.div
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                exit={{ y: 0 }}
                                className="w-full h-full"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.535524122019!2d126.96973547669083!3d37.566005572038826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28c525e6ea7%3A0x9d3bd3623a642835!2z65GQ67mE67mM65Sp!5e0!3m2!1sko!2skr!4v1747612919622!5m2!1sko!2skr"
                                    className="w-full h-full rounded-md"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}
                                    title="Google Maps Location"
                                />
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
            <Footer />
        </main>
    );
};

export default ContactUs;
