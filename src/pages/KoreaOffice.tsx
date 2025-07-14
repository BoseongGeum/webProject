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
    "GREETING",
    "PARTNERSHIPS",
];

const subtitles = [
    "인사말",
    "고객사",
];

const paragraphs1 = [
    [
        "CBOL Corporation는 ‘신뢰’를 가장 오래가는 경쟁력이라 믿습니다."
    ],
    [
        "1987년 미국 LA 본사 창립,",
        "1998년 한국 연락사무소 설립 이후,",
        "미국과 유럽을 포함한 글로벌 시장에",
        "우수한 OEM 제품을 안정적으로 공급하고 있습니다."
    ],
    [
        "제조사에게는 새로운 수출 기회와 지속 가능한 파트너십을,",
        "고객사에게는 검증된 생산 네트워크와 품질 신뢰를 제공하며,",
        "20여 년간 믿음 속에 함께 성장했습니다."
    ],
    [
        "쌓아온 신뢰와 경험을 바탕으로,",
        "단순한 상품 중개를 넘어 제품 이해, 품질 기준 충족, 납기 조율, 고객과의 소통까지—",
        "제조사가 핵심 역량에 집중하고,",
        "그 가치를 제대로 인정받을 수 있는 환경을 약속합니다."
    ],
    [
        "더 넓은 기회는 견고한 파트너십에서 시작됩니다.",
        "국경을 허물고 가능성을 넓히며,",
        "더 많은 제조사들이 글로벌 무대에서 ‘경쟁력’으로 이야기될 수 있도록",
        "CBOL Corporation 한국 연락사무소는 신뢰를 바탕으로 늘 함께하겠습니다."
    ],
    [
        "감사합니다."
    ],
    [
        "CBOL Corporation 한국사무소 일동 올림"
    ]
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
                            <iframe
                                src="https://www.cbol.com"
                                title="CBOL 고객사 소개"
                                className="w-[1600px] h-[600px] border-none"
                            />
                        </motion.div>
                    </div>
                </section>

            <Footer />
        </main>
    );
};

export default KoreaOffice;
