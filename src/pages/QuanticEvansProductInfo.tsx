import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

const QuanticEvansProductInfo: React.FC = () => {
    const images = ["/images/team1/main/QuanticEvansLogo.png"];
    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={true} />;

    return (
        <div className="w-full min-h-screen bg-white text-black font-bold py-20 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 로고 */}
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

                {/* 제목 */}
                <div className="text-left mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500">
                        군용 항공우주 및 방위 산업의 신뢰받는 커패시터 공급업체
                    </h2>
                </div>

                {/* 서문 설명 */}
                <div className="text-left text-base sm:text-lg text-gray-500 mb-20 space-y-4 leading-relaxed">
                    <p>Quantic™ Evans 커패시터는 최신 드론 대응(C-UAS) 시스템에 최적화된 제품입니다.</p>
                    <p>SWaP(크기, 무게, 전력) 최적화 설계를 통해 업계 최고 수준의 전력 밀도를 제공합니다.</p>
                    <p>또한 소형 설계를 통해 활성 부품 가까이에 직접 배치할 수 있어, 긴 와이어나 트레이스로 인한 전력 손실을 최소화할 수 있습니다.</p>
                    <p>초저 ESR 특성으로 송신 펄스 주기 중 전압 강하를 최소화하며, 전류 제한이 없어 데드 쇼트 상태에서도 반복 방전이 가능하고 손상 없이 작동합니다.</p>
                    <p className="text-yellow-600">
                        Quantic Evans는 지난 25년 동안 Tier 1 및 Tier 2 방산업체들과 긴밀하게 협력하며,
                        국가 안보를 위한 주요 프로그램과 플랫폼 지원에 기여해 왔습니다.
                    </p>
                </div>

                {/* C-UAS 용도 */}
                <section className="mb-20">
                    <h3 className="text-2xl sm:text-3xl text-blue-900 font-bold mb-4">C-UAS/드론 방어 무기 시스템용 고전력 밀도 커패시터</h3>
                    <div className="flex h-[1.5px] mb-6">
                        <div className="bg-red-800 w-20 border border-red-800" />
                        <div className="flex-1 bg-gray-200" />
                    </div>
                    <div className="flex flex-col gap-4 text-yellow-500 text-lg sm:text-xl">
                        {[
                            "고에너지 펄스 레이저 (HEL)",
                            "고출력 마이크로파 (HPM)",
                            "재밍 시스템 (Jamming)",
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <ChevronRight className="mt-1" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 주요 특징 */}
                <section className="mb-20">
                    <h3 className="text-2xl sm:text-3xl text-blue-900 font-bold mb-4">주요 특징</h3>
                    <div className="flex h-[1.5px] mb-6">
                        <div className="bg-red-800 w-20 border border-red-800" />
                        <div className="flex-1 bg-gray-200" />
                    </div>
                    <ul className="list-disc list-inside space-y-3 ml-2 text-base sm:text-lg text-gray-500 leading-relaxed">
                        <li>Quantic Evans만의 독자적인 하이브리드 웻 탄탈럼 기술 적용</li>
                        <li>다양한 구성의 10~125V 제품 제공</li>
                        <li>고전류 펄스를 지원하는 초저 ESR 설계로 전압 강하 최소화</li>
                        <li>전류 제한 없이 데드 쇼트(완전 단락) 상태에서도 반복 방전 가능하며 손상 없음</li>
                        <li>넓은 온도 범위에서도 탁월한 신뢰성 유지</li>
                        <li>고도, 극한 충격, 진동 환경에서도 견딜 수 있도록 견고하게 설계</li>
                        <li>높은 신뢰성과 무제한 저장 수명 제공</li>
                        <li>미국 내 제조</li>
                    </ul>
                </section>

                {/* Quantic 소개 */}
                <section className="mb-20">
                    <h3 className="text-2xl sm:text-3xl text-blue-900 font-bold mb-4">Quantic Evans에 대하여</h3>
                    <div className="flex h-[1.5px] mb-6">
                        <div className="bg-red-800 w-20 border border-red-800" />
                        <div className="flex-1 bg-gray-200" />
                    </div>
                    <div className="space-y-4 text-base sm:text-lg text-gray-500 leading-relaxed">
                        <p>Quantic Evans는 2020년부터 Quantic® Electronics 그룹의 일원으로 합류했으며, AS9100 및 ISO 9001 인증을 취득한 ITAR 등록 개발 및 제조 기업입니다.</p>
                        <p>고신뢰성·고전력 밀도 커패시터를 전문적으로 개발 및 제조하며, 크기·무게·전력·신뢰성 측면에서 뛰어난 성능을 자랑합니다.</p>
                        <p>이를 통해 고객들이 차세대 항공우주, 방위, 산업용 전자 시스템을 성공적으로 개발할 수 있도록 지원하고 있습니다.</p>
                    </div>
                </section>

                {/* 하단 버튼 */}
                <div className="w-full max-w-7xl mx-auto px-4 lg:pl-52 mt-12 flex flex-col sm:flex-row items-center justify-end gap-6">
                    <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        href="https://picwire.com/Interconnect-Solutions"
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
                        <Link to={"/team1/quanticEvansManagerInfo"} className="w-full h-full flex items-center justify-center">
                            제품문의
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default QuanticEvansProductInfo;
