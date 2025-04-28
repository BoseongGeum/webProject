import React from "react";
import BackButton from "../components/BackButton";

const PICManagerInfo: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white font-bold py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="mb-12">
                    <BackButton />
                </div>

                {/* Section Title */}
                <div className="text-left mb-10">
                    <h2 className="text-5xl font-bold">
                        CONTACT <span className="text-red-500">US</span>
                    </h2>
                </div>

                {/* 안내 문구 */}
                <div className="text-left mb-6">
                    <p className="text-gray-200 text-lg">
                        궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                    </p>
                </div>

                {/* 지도 + 연락처 */}
                <div className="flex flex-col lg:flex-row w-full h-[400px]">
                    {/* 구글 맵 */}
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

                    {/* 연락처 정보 */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-between h-full pl-6 lg:pl-8">
                        <div>
                            <h3 className="text-yellow-300 text-3xl mb-8">
                                Contact Info
                            </h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-red-400 text-xl mb-2">
                                        MAILING ADDRESS
                                    </h4>
                                    <p className="text-gray-200">
                                        19850 Plummer St. Chatsworth, CA 91311
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-red-400 text-xl mb-2">
                                        PHONE & FAX
                                    </h4>
                                    <p className="text-gray-200">
                                        Tel: 818-704-8200
                                        <br />
                                        Fax: 818-704-4336
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-red-400 text-xl mb-2">
                                        EMAIL ADDRESS
                                    </h4>
                                    <p className="text-gray-200">
                                        info@cbol.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PICManagerInfo;
