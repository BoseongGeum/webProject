import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

const PICProductInfo: React.FC = () => {
    const images = [
        "/images/team1/main/PICLogo.svg",
        "/images/team1/PIC/picProductInfo1.png",
        "/images/team1/PIC/picProductInfo2.png",
        "/images/team1/PIC/picProductInfo3.png",
        "/images/team1/PIC/picProductInfo4.png"
    ];
    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={true} />;

    return (
        <div className="w-full min-h-screen bg-white text-black font-bold py-20 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 로고 */}
                <div className="mb-6">
                    <AnimatePresence>
                        <motion.img
                            src="/images/team1/main/PICLogo.svg"
                            alt={"PICLogo"}
                            className="h-20 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>
                </div>

                {/* 제목 */}
                <div className="text-left mb-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
                        항공우주 및 방위 <span className="text-red-800">인터커넥트 솔루션</span>
                    </h2>
                </div>

                <div className="text-left mb-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-500">
                        고품질 커넥터, 부품, 케이블 및 인터커넥트 솔루션의 주요 공급처
                    </h3>
                </div>

                {/* 설명 */}
                <div className="text-left mb-20 space-y-4 text-base sm:text-lg text-gray-500 leading-relaxed">
                    <p>
                        극한의 환경에서도 탁월한 성능을 발휘하는 항공우주 및 방위 분야의 인터커넥트 솔루션이 필요하시다면, PIC Wire & Cable을 선택해 주세요.
                    </p>
                    <p>
                        PIC Wire & Cable의 제품은 혹독한 항공우주 환경을 고려해 설계되었으며, 철저한 품질 관리를 통해 일관된 성능을 보장합니다.
                    </p>
                    <p>
                        1971년부터 우리는 혁신적인 케이블과 커넥터로 어려운 문제를 해결하며, 고객에게 최적의 솔루션을 제공해 왔습니다.
                    </p>
                    <p>
                        PIC의 기술 영업 팀과 엔지니어들은 항상 고객의 성공적인 프로젝트를 위해 긴밀히 협력하고 있습니다.
                    </p>
                    <p>
                        <em>우리가 하는 일</em> — 바로 고객의 작업을 더 쉽고 효율적으로 만드는 것입니다.
                    </p>
                    <p>
                        PIC를 항공우주 케이블 솔루션의 파트너로 선택하시면, 왜 우리가 항공우주 산업에서 가장 까다로운 작업을 맡길 수 있는지 직접 경험하실 수 있습니다.
                    </p>
                </div>

                {/* 솔루션 그리드 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
                    {[
                        {
                            title: "PICMates 케이블",
                            desc: "전자 RF, 비디오, 데이터 및 고주파 항공우주 애플리케이션에 최적화된 프리미엄 인터커넥트 케이블",
                            img: "picProductInfo1.png",
                            alt: "케이블 이미지"
                        },
                        {
                            title: "커넥터",
                            desc: "항공우주 및 방위 전자 애플리케이션을 위한 고품질 커넥터 제품군",
                            img: "picProductInfo2.png",
                            alt: "커넥터 이미지"
                        },
                        {
                            title: "MACHFORCE 커넥터",
                            desc: "강력한 군사 환경에 적합한 D38999 스타일의 고속 10G 이더넷 커넥터",
                            img: "picProductInfo3.png",
                            alt: "MACHFORCE 커넥터 이미지"
                        },
                        {
                            title: "PICMates 조립품",
                            desc: "전문적인 지식과 완벽한 실행력을 바탕으로 제공되는 케이블 조립 솔루션",
                            img: "picProductInfo4.png",
                            alt: "PIC 조립품 이미지"
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col h-full rounded-lg shadow bg-white overflow-hidden">
                            {/* 상단: 제목 + 설명 */}
                            <div className="flex flex-col justify-start flex-1 bg-gray-100 min-h-[140px]">
                                <div className="relative h-12 bg-gray-900 text-white text-sm sm:text-base font-bold flex items-center justify-center overflow-hidden">
                                    <div className="absolute top-0 left-[-8px] w-12 h-full bg-red-600 transform -skew-x-12 origin-left" />
                                    <span className="relative z-10">{item.title}</span>
                                </div>
                                <p className="text-black text-sm sm:text-base text-center px-3 py-4">
                                    {item.desc}
                                </p>
                            </div>

                            {/* 하단: 이미지 */}
                            <div className="w-full h-full">
                                <img
                                    src={`/images/team1/PIC/${item.img}`}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* 하단 버튼 */}
                <div className="w-full max-w-7xl mx-auto px-4 lg:pl-44 mt-12 flex flex-col sm:flex-row items-center justify-end gap-6">
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
                        <Link to={"/team1/picManagerInfo"} className="w-full h-full flex items-center justify-center">
                            제품문의
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PICProductInfo;