import React from "react";

const PICManagerInfo: React.FC = () => {
    return (
        <div className="w-full h-[calc(100vh-96px)] bg-white text-black font-bold py-20 mt-8">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">

                {/* Section Title */}
                <div className="text-left mb-10">
                    <h2 className="text-5xl font-bold">
                        CONTACT <span className="text-red-800">KOREA OFFICE</span>
                    </h2>
                </div>

                {/* 안내 문구 */}
                <div className="text-left mb-6">
                    <p className="text-gray-500 text-lg">
                        궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                    </p>
                </div>

                {/* 지도 + 연락처 */}
                <div className="flex flex-col lg:flex-row w-full h-[600px]">
                    {/* 구글 맵 */}
                    <div className="w-full lg:w-3/4">
                        <iframe
                            src="https://naver.me/xa5zJAh3"
                            className="w-full h-full rounded-md"
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                            title="Google Maps Location"
                        />
                    </div>

                    {/* 연락처 정보 */}
                    <div className="w-full lg:w-1/4 flex flex-col justify-center h-full pl-6 lg:pl-8">
                        <div>
                            <h3 className="text-black text-3xl mb-8">
                                <span className="text-yellow-500">Contact</span> Info
                            </h3>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-red-800 text-xl mb-2">
                                        MAILING ADDRESS
                                    </h4>
                                    <p className="text-gray-500">
                                        서울시 중구 정동길 35, 두비빌딩 403호
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-red-800 text-xl mb-2">
                                        PHONE & FAX
                                    </h4>
                                    <p className="text-gray-500">
                                        Tel: 02-318-5510
                                        <br />
                                        Fax: 02-318-0550
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-red-800 text-xl mb-2">
                                        EMAIL ADDRESS
                                    </h4>
                                    <p className="text-gray-500">
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
