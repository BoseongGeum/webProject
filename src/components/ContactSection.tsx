import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ContactSectionProps {
    imageSrc: string;
    name: string;
    mailingAddress: string;
    phone: string;
    fax: string;
    email: string;
    mapSrc: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const lineVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

export const ContactSection: React.FC<ContactSectionProps> = ({
                                                                  imageSrc,
                                                                  name,
                                                                  mailingAddress,
                                                                  phone,
                                                                  fax,
                                                                  email,
                                                                  mapSrc,
                                                              }) => {
    const [showMap, setShowMap] = useState(false);

    return (
        <>
            <div className="w-full flex flex-row gap-4 lg:gap-12 mt-6">
                {/* Left Image */}
                <div className="h-[185px] w-[370px] overflow-hidden">
                    <img
                        src={imageSrc}
                        alt="Section illustration"
                        className="h-full object-cover rounded-sm"
                    />
                </div>

                {/* Contact Info */}
                <motion.div className="w-full" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h3 className="text-red-950 text-2xl sm:text-3xl mb-8" variants={lineVariants}>
                        <span>{name}</span>
                    </motion.h3>

                    <div className="space-y-4 mb-2">
                        {/* Row 1: Mailing Address */}
                        <motion.div className="flex" variants={lineVariants}>
                            <div className="w-[5%] flex justify-center items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-800 text-xl" />
                            </div>
                            <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                MAILING ADDRESS
                            </div>
                            <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">{mailingAddress}</div>
                        </motion.div>

                        {/* Row 2: Phone & Fax */}
                        <motion.div className="flex" variants={lineVariants}>
                            <div className="w-[5%] flex justify-center items-center">
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-red-800 text-xl" />
                            </div>
                            <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                PHONE & FAX
                            </div>
                            <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">
                                Tel: {phone} / Fax: {fax}
                            </div>
                        </motion.div>

                        {/* Row 3: Email */}
                        <motion.div className="flex" variants={lineVariants}>
                            <div className="w-[5%] flex justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-red-800 text-xl" />
                            </div>
                            <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                EMAIL ADDRESS
                            </div>
                            <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">{email}</div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Map Toggle Button */}
                <div className="flex items-center justify-center pr-4">
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

            {/* Divider */}
            <div className="bg-red-950 w-full my-4 border border-red-950" />

            {/* Google Map */}
            {showMap && (
                <div
                    className="relative w-full h-[300px] mb-12"
                >
                    <iframe
                        src={mapSrc}
                        className="w-full h-full rounded-md"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                        title="Google Maps Location"
                    />
                    <div className="bg-red-950 w-full my-4 border border-red-950" />
                </div>
            )}
        </>
    );
};
