import React, { useEffect, useRef } from "react";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

declare global {
    interface Window {
        naver: any;
    }
}

const ContactUs: React.FC = () => {
    const loaded = useImagePreloader([]);
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scriptId = "naver-map-script";

        const initMap = () => {
            if (window.naver?.maps && mapRef.current) {
                new window.naver.maps.Map(mapRef.current, {
                    center: new window.naver.maps.LatLng(37.56739, 126.97095),
                    zoom: 16,
                });
            } else {
                setTimeout(initMap, 500);
            }
        };

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5yak13i14x`;
            script.async = true;
            script.onload = () => {
                initMap();
            };
            document.body.appendChild(script);
        } else {
            initMap();
        }
    }, []);

    if (!loaded) return <LoadingScreen isWhite={true} />;

    return (
        <div className="w-full h-full bg-white text-black font-bold pt-24 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-left mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        CONTACT <span className="text-red-800">KOREA OFFICE</span>
                    </h2>
                </div>

                {/* 안내 문구 */}
                <div className="text-left mb-2 lg:mb-6">
                    <p className="text-gray-500 text-base sm:text-lg">
                        궁금한 사항이나 문의가 있으시면 언제든지 연락주세요.
                    </p>
                </div>

                {/* 지도 + 연락처 */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                    {/* 네이버 지도 */}
                    <div className="w-full lg:w-3/4 h-[300px] lg:h-[450px]">
                        <div
                            ref={mapRef}
                            id="naver-map"
                            className="w-full h-full rounded-md border border-gray-300"
                        />
                    </div>

                    {/* 연락처 */}
                    <div className="w-full lg:w-1/4 flex flex-col justify-center">
                        <h3 className="text-black text-2xl sm:text-3xl mb-6">
                            <span className="text-yellow-500">Contact</span> Info
                        </h3>

                        <div className="space-y-4 lg:space-y-6 text-sm sm:text-base">
                            {/* 주소 */}
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-4 text-red-800 text-xl" />
                                <div>
                                    <h4 className="text-red-800 text-lg font-semibold mb-1">MAILING ADDRESS</h4>
                                    <p className="text-gray-500">서울시 중구 정동길 35, 두비빌딩 403호</p>
                                </div>
                            </div>

                            {/* 전화 & 팩스 */}
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-4 text-red-800 text-xl" />
                                <div>
                                    <h4 className="text-red-800 text-lg font-semibold mb-1">PHONE & FAX</h4>
                                    <p className="text-gray-500">
                                        Tel: 02-318-5510
                                        <br />
                                        Fax: 02-318-0550
                                    </p>
                                </div>
                            </div>

                            {/* 이메일 */}
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-4 text-red-800 text-xl" />
                                <div>
                                    <h4 className="text-red-800 text-lg font-semibold mb-1">EMAIL ADDRESS</h4>
                                    <p className="text-gray-500">info@cbol.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
