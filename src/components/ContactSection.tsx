import React, { useState } from "react";
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
            <div className="w-full flex flex-row gap-4 lg:gap-12">
                {/* Left Image */}
                <div className="h-[200px] w-[400px] overflow-hidden">
                    <img
                        src={imageSrc}
                        alt="Section illustration"
                        className="h-full object-cover rounded-sm"
                    />
                </div>

                {/* Contact Info */}
                <div className="w-full">
                    <h3 className="text-red-950 text-2xl sm:text-3xl mb-8" >
                        <span>{name}</span>
                    </h3>

                    <div className="space-y-4 mb-2">
                        {/* Row 1: Mailing Address */}
                        <div className="flex">
                            <div className="w-[5%] flex justify-center items-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-800 text-xl" />
                            </div>
                            <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                MAILING ADDRESS
                            </div>
                            <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">{mailingAddress}</div>
                        </div>

                        {/* Row 2: Phone & Fax */}
                        <div className="flex">
                            <div className="w-[5%] flex justify-center items-center">
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-red-800 text-xl" />
                            </div>
                            <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                PHONE & FAX
                            </div>
                            <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">
                                Tel: {phone} / Fax: {fax}
                            </div>
                        </div>

                        {/* Row 3: Email */}
                        <div className="flex">
                            <div className="w-[5%] flex justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-red-800 text-xl" />
                            </div>
                            <div className="w-[25%] font-semibold text-red-800 text-base sm:text-lg flex items-center">
                                EMAIL ADDRESS
                            </div>
                            <div className="w-[70%] text-gray-600 text-sm sm:text-base font-medium">{email}</div>
                        </div>
                    </div>
                </div>

                {/* Map Toggle Button */}
                <div className="flex items-center justify-center pr-4">
                    <button
                        onClick={() => setShowMap(!showMap)}
                        className="flex p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 duration-200"
                        title="지도 보기/숨기기"
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-gray-700" />
                    </button>
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
