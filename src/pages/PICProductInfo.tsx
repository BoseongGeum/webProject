import React from "react";
import BackButton from "../components/BackButton";

const PICProductInfo: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white font-bold py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="mb-12">
                    <BackButton />
                </div>

                {/* Section Title */}
                <div className="text-left mb-4">
                    <h2 className="text-5xl font-bold">
                        항공우주 및 방위 <span className="text-red-500">인터커넥트 솔루션</span>
                    </h2>
                </div>

                <div className="text-left mb-10">
                    <h3 className="text-3xl font-bold">
                        고품질 커넥터, 부품, 케이블 및 인터커넥트 솔루션의 주요 공급처
                    </h3>
                </div>

                {/* 설명 */}
                <div className="text-left mb-6">
                    <p className="text-gray-200 text-lg">
                        toughest conditions에서 견딜 수 있는 항공우주 및 방위 인터커넥트 솔루션이 필요하시다면 PIC Wire & Cable을 선택해 주세요.
                    </p>
                    <p className="text-gray-200 text-lg">
                        PIC Wire & Cable 제품은 혹독한 항공우주 환경에서 뛰어난 성능을 발휘하도록 설계되었으며, 품질 관리가 철저하게 이루어져 일관된 성능을 보장합니다.
                    </p>
                    <p className="text-gray-200 text-lg">
                        1971년 이래로, 우리의 팀은 혁신적인 케이블과 커넥터를 사용하여 어려운 문제들을 해결하며 솔루션을 제공합니다. 우리의 기술 영업 팀과 엔지니어는 여러분의 성공적인 프로젝트를 위해 협력하고 있습니다.
                    </p>
                    <p className="text-gray-200 text-lg">
                        <em>우리가 하는 일</em>—우리는 고객의 작업을 더 쉽게 만들기 위해 존재합니다.
                    </p>
                    <p className="text-gray-200 text-lg">
                        PIC을 귀하의 항공우주 케이블 솔루션의 파트너로 삼으시면, 우리는 왜 항공우주 산업의 가장 까다로운 작업들을 맡길 수 있는지 알게 되실 겁니다.
                    </p>
                </div>

                {/* 솔루션 그리드 */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* 케이블 */}
                    <div className="flex flex-col items-center">
                        <div className="text-center h-1/3 w-full">
                            <span className="text-yellow-300 text-xl font-semibold">PICMates 케이블</span>
                            <p className="text-gray-200 text-lg mt-4">
                                전자 RF, 비디오, 데이터 및 고주파 항공우주 애플리케이션을 위한 프리미엄 인터커넥트 케이블
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-gray-800 rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo1.png"
                                alt="케이블 이미지"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>
                    </div>

                    {/* 커넥터 */}
                    <div className="flex flex-col items-center">
                        <div className="w-full h-1/3 text-center">
                            <span className="text-yellow-300 text-xl font-semibold">커넥터 & 접점</span>
                            <p className="text-gray-200 text-lg mt-4">
                                항공우주 및 방위 전자 애플리케이션을 위한 고품질 커넥터와 접점 라인업
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-gray-800 rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo2.png"
                                alt="커넥터 이미지"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>
                    </div>

                    {/* MACHFORCE 커넥터 */}
                    <div className="flex flex-col items-center">
                        <div className="text-center h-1/3 w-full">
                            <span className="text-yellow-300 text-xl font-semibold">MACHFORCE 커넥터</span>
                            <p className="text-gray-200 text-lg mt-4">
                                MACHFORCE는 거친 군사 애플리케이션을 위한 D38999 스타일의 고속 10G 이더넷 커넥터입니다.
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-gray-800 rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo3.png"
                                alt="MACHFORCE 커넥터 이미지"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>
                    </div>

                    {/* PIC 조립품 */}
                    <div className="flex flex-col items-center">
                        <div className="text-center h-1/3 w-full">
                            <span className="text-yellow-300 text-xl font-semibold">PICMates 조립품</span>
                            <p className="text-gray-200 text-lg mt-4">
                                PIC 조립품은 전문 지식과 완벽한 실행을 결합하여 케이블 조립 솔루션을 제공합니다.
                            </p>
                        </div>
                        <div className="w-full h-2/3 bg-gray-800 rounded-lg mb-4">
                            <img
                                src="/images/team1/PIC/picProductInfo4.png"
                                alt="PIC 조립품 이미지"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* "More" 버튼 */}
                <div className="text-center mt-12">
                    <a
                        href="https://picwire.com/Interconnect-Solutions" // 여기에 실제 링크를 넣어주세요
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-red-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600">
                            더 보기
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PICProductInfo;
