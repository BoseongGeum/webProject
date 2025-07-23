import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {

    return (
        <main className="min-h-screen bg-[#F0EEEB] relative">
        <div className="w-full min-h-screen text-black font-bold pt-8 pb-24 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="text-left mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        CONTACT <span className="text-red-800">KOREA OFFICE</span>
                    </h2>
                </div>

                <div className="text-left mb-2 lg:mb-6">
                    <p className="text-gray-500 text-base sm:text-lg">
                        궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                    {/* Google Map iframe */}
                    <div className="w-full lg:w-3/4 h-[300px] lg:h-[450px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.535524122019!2d126.96973547669083!3d37.566005572038826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28c525e6ea7%3A0x9d3bd3623a642835!2z65GQ67mE67mM65Sp!5e0!3m2!1sko!2skr!4v1747612919622!5m2!1sko!2skr"
                            className="w-full h-full rounded-md"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                            title="Google Maps Location"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/4 flex flex-col justify-center">
                        <h3 className="text-black text-2xl sm:text-3xl mb-6">
                            <span className="text-yellow-500">Contact</span> Info
                        </h3>

                        <div className="space-y-4 lg:space-y-6 text-sm sm:text-base">
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-4 text-red-800 text-xl" />
                                <div>
                                    <h4 className="text-red-800 text-lg mb-1">MAILING ADDRESS</h4>
                                    <p className="text-gray-500 font-semibold">서울시 중구 정동길 35, 두비빌딩 403호</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-4 text-red-800 text-xl" />
                                <div>
                                    <h4 className="text-red-800 text-lg mb-1">PHONE & FAX</h4>
                                    <p className="text-gray-500 font-semibold">
                                        Tel: 02-318-5510
                                        <br />
                                        Fax: 02-318-0550
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-4 text-red-800 text-xl" />
                                <div>
                                    <h4 className="text-red-800 text-lg mb-1">EMAIL ADDRESS</h4>
                                    <p className="text-gray-500 font-semibold">info@cbol.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </main>
    );
};

export default ContactUs;
