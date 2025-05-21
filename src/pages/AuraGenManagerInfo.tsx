import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const AuraGenManagerInfo: React.FC = () => {
    const images = ["/images/team1/main/AuraGenLogo-black.svg"];
    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={true} />;

    return (
        <div className="w-full bg-white text-black font-bold pt-20 sm:pt-20 px-3 sm:px-6 lg:px-0 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-2 sm:mb-4">
                    <AnimatePresence>
                        <motion.img
                            src="/images/team1/main/AuraGenLogo-black.svg"
                            alt="AuraGenLogo"
                            className="h-14 sm:h-20 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>
                </div>

                <div className="text-left mb-4 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                        CONTACT <span className="text-red-800">US</span>
                    </h2>
                </div>

                <div className="text-left mb-2 sm:mb-6">
                    <p className="text-gray-500 text-sm sm:text-base">
                        궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-1.5 sm:gap-6">
                    <div className="w-full h-[240px] sm:h-[270px] lg:h-[400px] lg:w-3/4">
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

                    <div className="w-full lg:w-1/4 flex flex-col justify-center">
                        <div>
                            <h3 className="text-black text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-6">
                                <span className="text-yellow-500">Contact</span> Info
                            </h3>

                            <div className="space-y-4 lg:space-y-6 text-sm sm:text-base">
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-4 text-red-800 text-base sm:text-lg" />
                                    <div>
                                        <h4 className="text-red-800 text-base sm:text-lg mb-1 sm:mb-2">MAILING ADDRESS</h4>
                                        <p className="text-gray-500">19850 Plummer St. Chatsworth, CA 91311</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-4 text-red-800 text-base sm:text-lg" />
                                    <div>
                                        <h4 className="text-red-800 text-base sm:text-lg mb-1 sm:mb-2">PHONE & FAX</h4>
                                        <p className="text-gray-500">
                                            Tel: 818-704-8200
                                            <br />
                                            Fax: 818-704-4336
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-4 text-red-800 text-base sm:text-lg" />
                                    <div>
                                        <h4 className="text-red-800 text-base sm:text-lg mb-1 sm:mb-2">EMAIL ADDRESS</h4>
                                        <p className="text-gray-500">Gino.Ofria@cbol.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-end mt-4 sm:mt-10">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="w-full sm:w-32 mx-4 px-4 py-1.5 border-2 border-red-700 bg-red-700 text-white hover:bg-red-800 text-sm sm:text-base text-center"
                        >
                            <Link
                                to="/team1/auraGenProductInfo"
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

export default AuraGenManagerInfo;
