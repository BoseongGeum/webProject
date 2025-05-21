import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

const AuraGenProductInfo: React.FC = () => {
    const images = [
        "/images/team1/main/AuraGenLogo-black.svg",
        "/images/team1/AuraGen/size.jpg",
        "/images/team1/AuraGen/cutout.gif",
        "/images/team1/AuraGen/measure5kw.gif",
        "/images/team1/AuraGen/measure8kw.gif",
        "/images/team1/AuraGen/measure15kw.gif",
        "/images/team1/AuraGen/measure20kw.gif",
    ];

    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={true} />;

    return (
        <div className="w-full min-h-screen font-bold py-20 mt-8">
            {/* 로고 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
                <AnimatePresence>
                    <motion.img
                        src="/images/team1/main/AuraGenLogo-black.svg"
                        alt={"AuraGenLogo"}
                        className="h-16 sm:h-20 object-contain"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>
            </div>

            {/* 사이즈 비교 섹션 */}
            <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <img
                        src="/images/team1/AuraGen/size.jpg"
                        alt="size"
                        className="mx-auto w-full sm:w-4/5 h-auto rounded shadow"
                    />

                    <div className="mt-10 text-left max-w-4xl mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-semibold italic text-center mb-6">
                            사이즈가 중요하기 때문입니다!
                        </h3>

                        <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                            기존의 비상 발전기는 무겁고 부피가 큽니다. 대부분의 20kW 발전기는 무게가 350파운드 이상으로,
                            이는 성인 아프리카 수사자의 평균 체중과 비슷하며, 길이만 해도 3~4피트에 달하는 공간을 차지합니다.
                            이동식 버전은 이보다 더 무거워, 일반적으로 무거운 트레일러에 실어 운반해야 합니다. 또한, 이들은 별도의 연료 공급이 필요합니다.
                        </p>

                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            이와 비교해, 동급의 <strong>AuraGen®</strong>은 무게가 <strong>96파운드 이하</strong>이며,
                            직경이 약 <strong>2피트 정도</strong>에 불과합니다. 대부분의 경우 차량 보닛 아래에도 설치가 가능합니다.
                            기존 발전기와 달리, AuraGen®은 차량에 직접 통합되므로 별도의 트레일러가 필요하지 않습니다.
                            또한, 차량의 기존 연료탱크를 사용하기 때문에 별도의 연료 공급도 필요 없습니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 기술 설명 섹션 */}
            <section className="py-16 bg-gray-900 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                    {/* 텍스트 */}
                    <div className="w-full md:w-1/2 text-white text-justify">
                        <h3 className="text-left mb-6 text-2xl sm:text-3xl font-bold">과학이 만드는 힘</h3>
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                            AuraGen은 팬케이크 모양의 축방향 유도 발전기로, 두 개의 대칭적인 고정자 사이에 고체 주조된 회전자가 배치되어 있습니다.
                            독자적인 제어 시스템이 고정자에 전류를 공급하면 회전 자기장이 생성되고, 이는 회전자의 도전성 부분에 유도 전류를 발생시킵니다.
                            회전자가 기계적으로 회전하면 자기장이 다시 고정자에 전류를 유도하며, 이 전류는 AuraGen의 정교한 제어 시스템을 통해 전력을 생성합니다.
                        </p>

                        <div className="flex h-[1.5px] my-8">
                            <div className="bg-red-800 w-28 border border-red-800" />
                            <div className="flex-1 bg-gray-200" />
                        </div>

                        <h3 className="mb-6 text-2xl sm:text-3xl font-bold">주요 사용 분야</h3>
                        <div className="space-y-4 text-base sm:text-lg">
                            {[
                                {
                                    title: "군사",
                                    desc: "육상, 항공, 해상 등 군용 응용 분야에서 검증된 기술입니다.",
                                },
                                {
                                    title: "냉장 운송",
                                    desc: "연료 절감 및 유해 배출물 감소를 가능케 하는 전기 냉장 운송 솔루션을 제공합니다.",
                                },
                                {
                                    title: "응급 대응",
                                    desc: "긴급 구조 및 법 집행 활동 시 필요한 장소에 신속하게 전력을 공급합니다.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center">
                                    <strong className="w-28 shrink-0 text-yellow-500 text-center">
                                        {item.title}
                                    </strong>
                                    <p className="text-gray-400 text-left">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 이미지 */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/images/team1/AuraGen/cutout.gif"
                            alt="AuraGen"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl sm:text-3xl font-semibold">구성 사양</h3>
                    </div>

                    {/* 2x2 고정 그리드 */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { kw: "5", weight: "46 lbs. (20.87 kg)", image: "measure5kw.gif" },
                            { kw: "10", weight: "55 lbs. (24.95 kg)", image: "measure8kw.gif" },
                            { kw: "15", weight: "76.5 lbs. (34.70 kg)", image: "measure15kw.gif" },
                            { kw: "20", weight: "95.25 lbs. (43.21 kg)", image: "measure20kw.gif" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-lg shadow p-6 text-center">
                                <div className="text-4xl font-bold text-red-800 mb-2">
                                    {item.kw}<span className="text-base">kW</span>
                                </div>
                                <div className="text-gray-700 mb-2">{item.weight}</div>
                                <img
                                    src={`/images/team1/AuraGen/${item.image}`}
                                    alt={item.kw}
                                    className="w-full h-auto rounded"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 text-sm text-gray-600">
                        구성과 제조 환경에 따라 무게와 크기는 달라질 수 있습니다.
                    </div>
                </div>
            </section>

            {/* 하단 버튼 */}
            <div className="w-full max-w-7xl mx-auto px-6 lg:pl-52 mt-12 flex flex-col sm:flex-row items-center justify-end gap-6">
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    href="https://www.aurasystems.com/auragen.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto sm:mx-auto"
                >
                    <button className="w-full sm:w-28 bg-red-700 text-white py-2 px-6 rounded-full text-base sm:text-lg font-bold hover:bg-red-800">
                        더 보기
                    </button>
                </motion.a>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full sm:w-32 px-4 py-1.5 border-2 border-red-700 bg-red-700 text-white hover:bg-red-800 text-base sm:text-lg text-center"
                >
                    <Link to={"/team1/auraGenManagerInfo"} className="w-full h-full flex items-center justify-center">
                        제품문의
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default AuraGenProductInfo;
