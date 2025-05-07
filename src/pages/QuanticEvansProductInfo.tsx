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
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
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
                <div className="text-left mb-20">
                    <h2 className="text-3xl font-bold text-yellow-500">
                        군용 항공우주 및 방위 산업의 신뢰받는 커패시터 공급업체
                    </h2>
                </div>

                <div className="text-left text-lg text-gray-500 mb-20">
                    <p className="mb-2">
                        Quantic™ Evans 커패시터는 최신 드론 대응(C-UAS) 시스템에 최적화된 제품입니다.
                    </p>
                    <p className="mb-2">
                        SWaP(크기, 무게, 전력) 최적화 설계를 통해 업계 최고 수준의 전력 밀도를 제공합니다.
                    </p>
                    <p className="mb-2">
                        또한 소형 설계를 통해 활성 부품 가까이에 직접 배치할 수 있어, 긴 와이어나 트레이스로 인한 전력 손실을 최소화할 수 있습니다.
                    </p>
                    <p className="mb-2">
                        초저 ESR 특성으로 송신 펄스 주기 중 전압 강하를 최소화하며,
                        전류 제한이 없어 데드 쇼트 상태에서도 반복 방전이 가능하고 손상 없이 작동합니다.
                    </p>
                    <br />
                    <p className="mb-2 text-yellow-600">
                        Quantic Evans는 지난 25년 동안 Tier 1 및 Tier 2 방산업체들과 긴밀하게 협력하며,
                        국가 안보를 위한 주요 프로그램과 플랫폼 지원에 기여해 왔습니다.
                    </p>
                </div>

                {/* 본문 내용 */}
                <div className="text-left space-y-10 font-bold leading-relaxed mb-20">
                    <div className="inline-block">
                        <p className="text-blue-900 text-3xl inline-block">
                            C-UAS/드론 방어 무기 시스템용 고전력 밀도 커패시터
                        </p>
                        <div className="flex mt-1 h-[1.5px]">
                            <div className="bg-red-800 w-20 border border-red-800" />
                            <div className="flex-1 bg-gray-200" />
                        </div>
                    </div>

                    <div className="text-left space-y-4 text-yellow-500 text-2xl leading-relaxed">
                        <span className="flex items-center">
                            <ChevronRight className="ml-4" />고에너지 펄스 레이저 (HEL)
                        </span>
                        <span className="flex items-center">
                            <ChevronRight className="ml-4" />고출력 마이크로파 (HPM)
                        </span>
                        <span className="flex items-center">
                            <ChevronRight className="ml-4" />재밍 시스템 (Jamming)
                        </span>
                    </div>
                </div>

                <div className="text-left space-y-10 font-bold leading-relaxed mb-20">
                    <div className="inline-block">
                        <p className="text-blue-900 text-3xl inline-block">주요 특징</p>
                        <div className="flex mt-1 h-[1.5px]">
                            <div className="bg-red-800 w-20 border border-red-800" />
                            <div className="flex-1 bg-gray-200" />
                        </div>
                    </div>
                    <ul className="list-disc list-inside space-y-3 ml-4 text-xl text-gray-500">
                        <li>Quantic Evans만의 독자적인 하이브리드 웻 탄탈럼 기술 적용</li>
                        <li>다양한 구성의 10~125V 제품 제공</li>
                        <li>고전류 펄스를 지원하는 초저 ESR 설계로 전압 강하 최소화</li>
                        <li>전류 제한 없이 데드 쇼트(완전 단락) 상태에서도 반복 방전 가능하며 손상 없음</li>
                        <li>넓은 온도 범위에서도 탁월한 신뢰성 유지</li>
                        <li>고도, 극한 충격, 진동 환경에서도 견딜 수 있도록 견고하게 설계</li>
                        <li>높은 신뢰성과 무제한 저장 수명 제공</li>
                        <li>미국 내 제조</li>
                    </ul>
                </div>

                <div className="text-left space-y-10 font-bold leading-relaxed mb-20">
                    <div className="inline-block">
                        <p className="text-blue-900 text-3xl inline-block">Quantic Evans에 대하여</p>
                        <div className="flex mt-1 h-[1.5px]">
                            <div className="bg-red-800 w-20 border border-red-800" />
                            <div className="flex-1 bg-gray-200" />
                        </div>
                    </div>
                    <div className="mt-8 text-gray-500 text-lg">
                        <p className="mb-2">
                            Quantic Evans는 2020년부터 Quantic® Electronics 그룹의 일원으로 합류했으며,
                            AS9100 및 ISO 9001 인증을 취득한 ITAR 등록 개발 및 제조 기업입니다.
                        </p>
                        <p className="mb-2">
                            고신뢰성·고전력 밀도 커패시터를 전문적으로 개발 및 제조하며, 크기·무게·전력·신뢰성 측면에서 뛰어난 성능을 자랑합니다.
                        </p>
                        <p className="mb-2">
                            이를 통해 고객들이 차세대 항공우주, 방위, 산업용 전자 시스템을 성공적으로 개발할 수 있도록 지원하고 있습니다.
                        </p>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between mt-12">
                    <div className="flex justify-center w-full text-center ml-28">
                        <AnimatePresence>
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                href="https://www.quanticevans.com/categories/square"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="w-full bg-red-700 text-white py-2 px-6 rounded-full text-lg font-bold hover:bg-red-800">
                                    더 보기
                                </button>
                            </motion.a>
                        </AnimatePresence>
                    </div>

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
                                to={"/team1/quanticEvansManagerInfo"}
                                className="w-32 h-full flex items-center justify-center"
                            >
                                제품문의
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default QuanticEvansProductInfo;
