import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

const QuanticEvansManagerInfo: React.FC = () => {
    const images = ["/images/team1/main/QuanticEvansLogo.png"];
    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={true} />;

    return (
        <div className="w-full min-h-screen bg-white text-black font-bold py-20 mt-8">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="mb-4">
                    <AnimatePresence>
                        <motion.img
                            src="/images/team1/main/QuanticEvansLogo.png"
                            alt={"QuanticEvansLogo"}
                            className="h-20 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Section Title */}
                <div className="text-left mb-10">
                    <h2 className="text-5xl font-bold">
                        CONTACT <span className="text-red-800">US</span>
                    </h2>
                </div>

                {/* 안내 문구 */}
                <div className="text-left mb-6">
                    <p className="text-gray-500 text-lg">
                        궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                    </p>
                </div>

                {/* 지도 + 연락처 */}
                <div className="flex flex-col lg:flex-row w-full h-[400px]">
                    <div className="w-full lg:w-2/3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.2598745885157!2d-118.56752208477998!3d34.24191188055478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29b7033afd367%3A0xa8be6d728e186243!2s19850%20Plummer%20St%2C%20Chatsworth%2C%20CA%2091311!5e0!3m2!1sen!2sus!4v1603896825281!5m2!1sen!2sus"
                            className="w-full h-full rounded-md"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                            title="Google Maps Location"
                        />
                    </div>

                    <div className="w-full lg:w-1/3 flex flex-col justify-between h-full pl-6 lg:pl-8">
                        <div>
                            <h3 className="text-black text-3xl mb-8">
                                <span className="text-yellow-500">Contact</span> Info
                            </h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-red-800 text-xl mb-2">MAILING ADDRESS</h4>
                                    <p className="text-gray-500">
                                        19850 Plummer St. Chatsworth, CA 91311
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-red-800 text-xl mb-2">PHONE & FAX</h4>
                                    <p className="text-gray-500">
                                        Tel: 818-704-8200
                                        <br />
                                        Fax: 818-704-4336
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-red-800 text-xl mb-2">EMAIL ADDRESS</h4>
                                    <p className="text-gray-500">info@cbol.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-end mt-12">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="w-32 px-2 py-1 border-2 border-red-700 bg-red-700 text-white hover:bg-red-800 rounded-none text-lg text-center flex items-center justify-center"
                        >
                            <Link
                                to={"/team1/picProductInfo"}
                                className="w-full h-full flex items-center justify-center"
                            >
                                제품정보
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default QuanticEvansManagerInfo;