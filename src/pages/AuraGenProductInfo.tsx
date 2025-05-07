import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";

const AuraGenProductInfo: React.FC = () => {
    return (
        <div className="w-full min-h-screen font-bold py-20 mt-8">

            <div className="max-w-7xl mx-auto px-4 lg:px-0 mb-4">
                <AnimatePresence>
                    <motion.img
                        src="/images/team1/main/AuraGenLogo-black.svg"
                        alt={ "AuraGenLogo" }
                        className="h-20 object-contain"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                </AnimatePresence>
            </div>

            <section className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <img
                        src="/images/team1/AuraGen/size.jpg"
                        alt="size"
                        className="mx-auto w-4/5 h-auto"
                    />

                    <div className="mt-10 text-left max-w-4xl mx-auto">
                        <h3 className="text-3xl font-semibold italic text-center mb-6">
                            사이즈가 중요하기 때문입니다!
                        </h3>

                        <p className="text-gray-700 text-lg mb-6">
                            기존의 비상 발전기는 무겁고 부피가 큽니다.
                            대부분의 20kW 발전기는 무게가 350파운드 이상으로,
                            이는 성인 아프리카 수사자의 평균 체중과 비슷하며,
                            길이만 해도 3~4피트에 달하는 공간을 차지합니다.
                            이동식 버전은 이보다 더 무거워,
                            일반적으로 무거운 트레일러에 실어 운반해야 합니다.
                            또한, 이들은 별도의 연료 공급이 필요합니다.
                        </p>

                        <p className="text-gray-700 text-lg">
                            이와 비교해, 동급의 <strong>AuraGen®</strong>은 무게가 <strong>96파운드 이하</strong>이며,
                            직경이 약 <strong>2피트 정도</strong>에 불과합니다.
                            대부분의 경우 차량 보닛 아래에도 설치가 가능합니다.
                            기존 발전기와 달리, AuraGen®은 차량에 직접 통합되므로 별도의 트레일러가 필요하지 않습니다.
                            또한, 차량의 기존 연료탱크를 사용하기 때문에 별도의 연료 공급도 필요 없습니다.
                            이러한 소형화, 경량화 덕분에 연료 소모는 줄고, 기존 전력 시스템에 비해 기동성은 높아집니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section py-8 md:py-12 xl:py-16 bg-gray-900">
                <div className="container mx-auto items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-x-12"> {/* gap-x-12 추가하여 간격 설정 */}

                        <div className="md:w-1/2 md:order-1 text-white text-justify"> {/* 텍스트 영역의 최대 너비 설정 */}
                            <div className="md:h-1/2">
                            <h3 className="text-left text-white mb-8 text-3xl font-bold">과학이 만드는 힘</h3>
                            <p className="text-gray-400 text-lg">
                                AuraGen은 팬케이크 모양의 축방향 유도 발전기로,
                                두 개의 대칭적인 고정자 사이에 고체 주조된 회전자가 배치되어 있습니다.
                                독자적인 제어 시스템이 고정자에 전류를 공급하면, 회전 자기장이 생성되고,
                                이는 회전자의 도전성 부분에 유도 전류를 발생시킵니다. 회전자가 기계적으로 회전하면,
                                자기장이 다시 고정자에 전류를 유도합니다.
                                이 출력 전류는 AuraGen의 정교한 제어 시스템과 결합되어 전력을 생성하게 됩니다.
                            </p>
                            </div>

                            <div className="flex h-[1.5px] mb-8">
                                {/* 빨간 선 */}
                                <div className="bg-red-800 w-28 border border-red-800" />
                                {/* 이어지는 회색 선 */}
                                <div className="flex-1 bg-gray-200" />
                            </div>

                            <div className="md:h-1/2">
                            <h3 className="mb-8 text-3xl text-left font-bold">주요 사용 분야</h3>
                            <div className="space-y-4 mt-4 text-lg">
                                <div className="flex items-center">
                                    <span className="w-1/5 text-center material-icons mr-3">군사</span>
                                    <p className="w-4/5 text-gray-400">육상, 항공, 해상 등 군용 응용 분야에서 검증된 기술입니다.</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-1/5 text-center material-icons mr-3">냉장 운송</span>
                                    <p className="w-4/5 text-gray-400">연료 절감 및 유해 배출물 감소를 가능케 하는 전기 냉장 운송 솔루션을 제공합니다.</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="w-1/5 text-center material-icons mr-3">응급 대응</span>
                                    <p className="w-4/5 text-gray-400">긴급 구조 및 법 집행 활동 시 필요한 장소에 신속하게 전력을 공급합니다.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:order-2 mb-12 md:mb-0">
                            <figure className="mb-4">
                                <img
                                    src="/images/team1/AuraGen/cutout.gif"
                                    alt="AuraGen"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-whisper py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-semibold mb-4">구성 사양</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Pricing Table 1 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">5</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>46 lbs. (20.87 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure5kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>

                        {/* Pricing Table 2 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">10</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>55 lbs. (24.95 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure8kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>

                        {/* Pricing Table 3 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">15</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>76.5 lbs. (34.70 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure15kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>

                        {/* Pricing Table 4 */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="pricing-object text-4xl font-bold text-primary mb-4">
                                    <span className="price">20</span>
                                    <span className="text-sm">kW</span>
                                </div>
                                <div className="divider-circle mb-4"></div>
                                <ul className="list-none text-gray-700 mb-4">
                                    <li>95.25 lbs. (43.21 kg)</li>
                                </ul>
                                <img src="/images/team1/AuraGen/measure20kw.gif" alt="dimentions" className="mb-4" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8 text-sm text-gray-600">
                        구성과 제조 환경에 따라 무게와 크기는 달라질 수 있습니다.
                    </div>
                </div>
            </section>

            <div className="w-full flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-0 mt-12">
                {/* "더 보기" 버튼 (가운데) */}
                <div className="flex justify-center w-full text-center ml-28">
                    <AnimatePresence>
                        <motion.a
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            href="https://www.aurasystems.com/auragen.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-red-700 text-white py-2 px-6 rounded-full text-lg font-bold hover:bg-red-800">
                                더 보기
                            </button>
                        </motion.a>
                    </AnimatePresence>
                </div>

                {/* "제품문의" 버튼 (오른쪽) */}
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
                            to={"/team1/auraGenManagerInfo"}
                            className="w-full h-full flex items-center justify-center"
                        >
                            제품문의
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>



);
};

export default AuraGenProductInfo;
