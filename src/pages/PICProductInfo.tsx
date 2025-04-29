import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import PICLogo from "../images/team1/PICLogo.svg";
import QuanticEvansLogo from "../images/team1/QuanticEvansLogo.png";
import AuraGenLogo from "../images/team1/AuraGenLogo.png";

const PICProductInfo: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black font-bold py-20 mt-8">

            <div className="max-w-7xl mx-auto px-4 lg:px-0">

                <div className="mb-4">
                    <AnimatePresence>
                        <motion.img
                            src={ PICLogo }
                            alt={ "PICLogo" }
                            className="h-20 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Section Title */}
                <div className="text-left mb-4">
                    <h2 className="text-5xl font-bold">
                        항공우주 및 방위 <span className="text-red-800">인터커넥트 솔루션</span>
                    </h2>
                </div>

                <div className="text-left mb-20">
                    <h3 className="text-3xl font-bold text-yellow-500">
                        고품질 커넥터, 부품, 케이블 및 인터커넥트 솔루션의 주요 공급처
                    </h3>
                </div>

                {/* 설명 */}
                <div className="text-left mb-32">
                    <p className="text-gray-500 text-lg mb-2">
                        극한의 환경에서도 탁월한 성능을 발휘하는 항공우주 및 방위 분야의 인터커넥트 솔루션이 필요하시다면, PIC Wire & Cable을 선택해 주세요.
                    </p>
                    <p className="text-gray-500 text-lg mb-2">
                        PIC Wire & Cable의 제품은 혹독한 항공우주 환경을 고려해 설계되었으며, 철저한 품질 관리를 통해 일관된 성능을 보장합니다.
                    </p>
                    <p className="text-gray-500 text-lg mb-2">
                        1971년부터 우리는 혁신적인 케이블과 커넥터로 어려운 문제를 해결하며, 고객에게 최적의 솔루션을 제공해 왔습니다.
                    </p>
                    <p className="text-gray-500 text-lg mb-2">
                        PIC의 기술 영업 팀과 엔지니어들은 항상 고객의 성공적인 프로젝트를 위해 긴밀히 협력하고 있습니다.
                    </p>
                    <br/>
                    <p className="text-gray-500 text-lg mb-2">
                        <em>우리가 하는 일</em> — 바로 고객의 작업을 더 쉽고 효율적으로 만드는 것입니다.
                    </p>
                    <p className="text-gray-500 text-lg">
                        PIC를 항공우주 케이블 솔루션의 파트너로 선택하시면, 왜 우리가 항공우주 산업에서 가장 까다로운 작업을 맡길 수 있는지 직접 경험하실 수 있습니다.
                    </p>
                </div>

                {/* 솔루션 그리드 */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
                    {/* 케이블 */}
                    <div className="flex flex-col items-center">
                        <div className="text-center h-1/3 w-full bg-gray-100">
                            <div className="relative h-12 bg-gray-900 text-white text-xl font-bold flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 left-[-8px] w-12 h-full bg-red-600 transform -skew-x-12 origin-left"></div>
                                <span className="relative z-10">PICMates 케이블</span>
                            </div>

                            <p className="text-black text-lg mt-4">
                                전자 RF, 비디오, 데이터 및 고주파 항공우주 애플리케이션에 최적화된 프리미엄 인터커넥트 케이블
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-white rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo1.png"
                                alt="케이블 이미지"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* 커넥터 */}
                    <div className="flex flex-col items-center">
                        <div className="text-center h-1/3 w-full bg-gray-100">
                            <div className="relative h-12 bg-gray-900 text-white text-xl font-bold flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 left-[-8px] w-12 h-full bg-red-600 transform -skew-x-12 origin-left"></div>
                                <span className="relative z-10">커넥터</span>
                            </div>
                            <p className="text-black text-lg mt-4">
                                항공우주 및 방위 전자 애플리케이션을 위한 고품질 커넥터 제품군
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-white rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo2.png"
                                alt="커넥터 이미지"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* MACHFORCE 커넥터 */}
                    <div className="flex flex-col items-center">
                        <div className="text-center h-1/3 w-full bg-gray-100">
                            <div className="relative h-12 bg-gray-900 text-white text-xl font-bold flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 left-[-8px] w-12 h-full bg-red-600 transform -skew-x-12 origin-left"></div>
                                <span className="relative z-10">MACHFORCE 커넥터</span>
                            </div>
                            <p className="text-black text-lg mt-4">
                                강력한 군사 환경에 적합한 D38999 스타일의 고속 10G 이더넷 커넥터
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-white rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo3.png"
                                alt="MACHFORCE 커넥터 이미지"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* PIC 조립품 */}
                    <div className="flex flex-col items-center">
                        <div className="text-center h-1/3 w-full bg-gray-100">
                            <div className="relative h-12 bg-gray-900 text-white text-xl font-bold flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 left-[-8px] w-12 h-full bg-red-600 transform -skew-x-12 origin-left"></div>
                                <span className="relative z-10">PICMates 조립품</span>
                            </div>
                            <p className="text-black text-lg mt-4">
                                전문적인 지식과 완벽한 실행력을 바탕으로 제공되는 케이블 조립 솔루션
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-white rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo4.png"
                                alt="PIC 조립품 이미지"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between mt-12">
                    {/* "더 보기" 버튼 (가운데) */}
                    <div className="flex justify-center w-full text-center ml-28">
                        <AnimatePresence>
                            <motion.a
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                href="https://picwire.com/Interconnect-Solutions"
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
                                to={"/team1/picManagerInfo"}
                                className="w-full h-full flex items-center justify-center"
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

export default PICProductInfo;
