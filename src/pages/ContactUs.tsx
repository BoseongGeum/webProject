import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

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
    return (
        <main className="min-h-screen bg-[#F0EEEB] relative">
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
                            CONTACT <span className="text-red-800">KOREA OFFICE</span>
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

                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                        {/* Google Map */}
                        <motion.div
                            className="w-full lg:w-3/4 h-[300px] lg:h-[450px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.6} }}
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

                        {/* Contact Info */}
                        <motion.div
                            className="w-full lg:w-1/4 flex flex-col justify-center"
                            variants={containerVariants}
                        >
                            <motion.h3
                                className="text-black text-2xl sm:text-3xl mb-6"
                                variants={lineVariants}
                            >
                                <span className="text-yellow-500">Contact</span> Info
                            </motion.h3>

                            <div className="space-y-4 lg:space-y-6 text-sm sm:text-base">
                                <motion.div className="flex items-start" variants={lineVariants}>
                                    <FontAwesomeIcon
                                        icon={faMapMarkerAlt}
                                        className="mt-1 mr-4 text-red-800 text-xl"
                                    />
                                    <div>
                                        <motion.h4
                                            className="text-red-800 text-lg mb-1"
                                            variants={lineVariants}
                                        >
                                            MAILING ADDRESS
                                        </motion.h4>
                                        <motion.p
                                            className="text-gray-500 font-semibold"
                                            variants={lineVariants}
                                        >
                                            서울시 중구 정동길 35, 두비빌딩 403호
                                        </motion.p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start" variants={lineVariants}>
                                    <FontAwesomeIcon
                                        icon={faPhoneAlt}
                                        className="mt-1 mr-4 text-red-800 text-xl"
                                    />
                                    <div>
                                        <motion.h4
                                            className="text-red-800 text-lg mb-1"
                                            variants={lineVariants}
                                        >
                                            PHONE & FAX
                                        </motion.h4>
                                        <motion.p
                                            className="text-gray-500 font-semibold"
                                            variants={lineVariants}
                                        >
                                            Tel: 02-318-5510
                                            <br />
                                            Fax: 02-318-0550
                                        </motion.p>
                                    </div>
                                </motion.div>

                                <motion.div className="flex items-start" variants={lineVariants}>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="mt-1 mr-4 text-red-800 text-xl"
                                    />
                                    <div>
                                        <motion.h4
                                            className="text-red-800 text-lg mb-1"
                                            variants={lineVariants}
                                        >
                                            EMAIL ADDRESS
                                        </motion.h4>
                                        <motion.p
                                            className="text-gray-500 font-semibold"
                                            variants={lineVariants}
                                        >
                                            info@cbol.com
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
};

export default ContactUs;
