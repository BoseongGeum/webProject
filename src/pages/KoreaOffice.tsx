import React, { useState, useEffect } from "react";
import Stickybar from "../components/Stickybar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            when: "beforeChildren",  // children 애니 시작 전
            staggerChildren: 0.2,    // 0.2s 간격으로
        },
    },
};

const lineVariants = {
    hidden: { y: '100%' },
    visible: () => ({
        y: '0%',
        transition: { duration: 0.6, ease: 'easeInOut' },
    }),
};

const titles = [
    "ABOUT HQ",
    "GREETING",
    "KOREA OFFICE",
];

const subtitles = [
    "CBOL Corporation 미국 본사",
    "인사말",
    "한국연락 사무소",
];

const paragraphs1 = [
    [
        "CBOL Corporation은 1987년 미국에서 설립된 기업으로,",
        "항공우주, 방산, 자동차, 산업, 환경, 전자 등 다양한 분야의 국내외 고객에게 고품질 제품을 공급하고 있습니다.",
    ],
    [
        "당사는 프로그램, 산업, 경제, 문화 등 각 분야에 대한 깊이 있는 이해를 바탕으로,",
        "전문 엔지니어 및 영업 전문가들로 구성된 팀을 운영하고 있으며,",
        "다국어 사용이 가능한 글로벌 인재들이 함께하고 있습니다.",
    ],
    [
        "미국 및 해외 전역에 걸친 광범위한 제조사 및 공급망 네트워크를 통해,",
        "희귀 부품, 조립품, 원자재, 화학제품, OEM 부품 등을 경제적인 가격에 안정적으로 공급하고 있습니다.",
        "필요 시, 전자 모니터링 장치를 활용한 PPAP 및 공정 제어 문서도 제공 가능합니다.",
    ],
    [
        "또한, CBOL은 해상·항공·육상 운송 전반에 걸친 물류를 효율적으로 관리하며,",
        "위험물 포장 및 선적, 목재 포장재 IPPC/HT 처리, IATA 문서, 키팅, LTA/JIT/AOG,",
        "수출 라이선스 취득 등 다양한 요구 사항에 맞는 수출 포장 서비스를 제공합니다.",
        "당사의 구매력은 운송 컨테이너 통합을 통해 물류비 절감에도 기여합니다.",
    ],
];

const paragraphs2 = [
    [
        "안녕하십니까,",
    ],
    [
        "1998년 한국사무소 설립 이래,",
        "미국과 유럽을 포함한 글로벌 시장에 우수한 OEM 제품을 안정적으로 공급해오고 있습니다.",
    ],
    [
        "제조사에게는 새로운 수출 기회와 지속 가능한 파트너십을,",
        "고객사에게는 검증된 생산 네트워크와 품질 신뢰를 제공하며,",
        "20여 년간 믿음 속에 함께 성장해 왔습니다.",
    ],
    [
        "단순한 중개를 넘어,",
        "제품 이해, 품질 기준 충족, 납기 조율, 엔드 고객과의 소통까지",
        "제조사가 제조에만 집중할 수 있는 환경을 약속합니다.",
    ],
    [
        "앞으로도 더 많은 잠재력있는 제조사들이",
        "글로벌 시장에서 실질적인 기회를 얻을 수 있도록",
        "신뢰를 바탕으로 함께하겠습니다.",
    ],
    [
        "감사합니다.",
    ],
    [
        "CBOL 한국사무소 일동 올림",
    ],
];

const KoreaOffice = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <main className="bg-[#F0EEEB] min-h-screen relative">
                {/* SECTION 1 */}
                <section className="min-h-screen">
                    <Stickybar title={titles[0]} subtitle={subtitles[0]} topOffset={showNavbar ? 52 : 0} align={"center"} />
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="pt-24 pb-32 text-2xl leading-relaxed"
                        >
                            {paragraphs1.map((group, gIdx) => (
                                <div
                                    key={gIdx}
                                    className={`${gIdx > 0 ? "mt-10" : ""} space-y-2`}
                                >
                                    {group.map((sentence, sIdx) => (
                                        <div key={sIdx} className="overflow-hidden">
                                            <motion.p variants={lineVariants}>
                                                {sentence}
                                            </motion.p>
                                        </div>

                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 2 */}
                <section className="min-h-screen">
                    <Stickybar title={titles[1]} subtitle={subtitles[1]} topOffset={showNavbar ? 52 : 0} align={"center"} />
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="pt-24 pb-32 text-2xl leading-relaxed"
                        >
                            {paragraphs2.map((group, gIdx) => (
                                <div
                                    key={gIdx}
                                    className={`${gIdx > 0 ? "mt-10" : ""} space-y-2`}
                                >
                                    {group.map((sentence, sIdx) => (
                                        <div key={sIdx} className="overflow-hidden">
                                            <motion.p variants={lineVariants}>
                                                {sentence}
                                            </motion.p>
                                        </div>

                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* SECTION 3 */}
                <section className="min-h-screen">
                    <Stickybar title={titles[2]} topOffset={showNavbar ? 52 : 0} align={"center"} />
                    <div className="pt-24 pb-32 leading-relaxed">
                    <div className="mt-10">
                        <p>내 용 추 가</p>
                    </div>
                    </div>
                </section>

            <Footer />
        </main>
    );
};

export default KoreaOffice;
