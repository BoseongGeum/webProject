import React, {useState, useEffect} from "react";
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
    hidden: {
        y: '20%',
        opacity: 0,
    },
    visible: () => ({
        y: '0%',
        opacity: 1,
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
        "CBOL은 ‘신뢰’를",
        "가장 오래가는 경쟁력이라 믿습니다."
    ],
    [
        "1998년 한국 연락사무소 설립 이래,",
        "미국과 유럽을 포함한 글로벌 시장에",
        "우수한 OEM 제품을 안정적으로 공급해오고 있습니다."
    ],
    [
        "제조협력사와의 튼튼한 파트너십을 기반으로",
        "새로운 수출 기회를 만들고,",
        "고객에게 검증된 생산 네트워크와 품질을 보장하며",
        "20여 년간 믿음 속에 함께 성장해 왔습니다."
    ]
];

const paragraphs2 = [
    [
        "제조의 가치를",
        "세계로 연결합니다."
    ],
    [
        "단순한 상품 중개를 넘어 제품 이해, 품질 기준 충족, 납기 조율,",
        "고객과의 소통까지—",
        "제조사가 핵심 역량에 집중하고,",
        "그 가치를 제대로 인정받을 수 있는 환경을 약속합니다."
    ],
    [
        "더 넓은 기회는 견고한 파트너십에서 시작됩니다."
    ],
    [
        "국경을 허물고 가능성을 넓히며,",
        "더 많은 제조사들이 글로벌 무대에서 ‘경쟁력’으로 이야기될 수 있도록",
        "CBOL Corporation 한국 연락사무소는 신뢰를 바탕으로 늘 함께하겠습니다."
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
                    <div
                        className="w-full min-h-screen flex flex-col bg-cover bg-fixed"
                        style={{ backgroundImage: "url('/images/koreaOffice/greeting1.jpg')" }}
                    >
                        <Stickybar title={titles[0]} subtitle={subtitles[0]} topOffset={showNavbar ? 55 : 0} align={"center"} />
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="min-h-screen pt-24 pb-20 text-2xl flex flex-col justify-center leading-relaxed
                            bg-black bg-opacity-75 text-white"
                        >
                            {paragraphs1.map((group, gIdx) => (
                                <div
                                    key={gIdx}
                                    className={`container mx-auto ${gIdx > 0 ? "mt-10" : ""} space-y-2`}
                                >
                                    {group.map((sentence, sIdx) => (
                                        <div key={sIdx}>
                                            <motion.p
                                                variants={lineVariants}
                                                className={`${gIdx === 0 ? "text-6xl font-bold" : ""}`}
                                            >
                                                {sentence}
                                            </motion.p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="container mx-auto grid grid-cols-2 pt-24 pb-32">
                        {/* 왼쪽 이미지 */}
                        <div className="h-full w-full pr-8 overflow-hidden">
                            <img
                                src="/images/koreaOffice/greeting2.png"
                                alt="Section illustration"
                                className="h-full object-cover object-right-top"
                            />
                        </div>

                        <div className="w-full h-full pt-20 pl-8">
                            <div className="bg-red-950 w-28 border-2 border-red-950" />
                            {/* 오른쪽 텍스트 */}
                            <div
                                className="pt-12 pb-12 text-2xl leading-relaxed items-start"
                            >
                                {paragraphs2.map((group, gIdx) => (
                                    <div
                                        key={gIdx}
                                        className={`${gIdx > 0 ? "mt-10" : ""} space-y-2`}
                                    >
                                        {group.map((sentence, sIdx) => (
                                            <div key={sIdx} className="overflow-hidden">
                                                <p
                                                    // variants={lineVariants}
                                                    className={`${gIdx === 0 ? "text-6xl font-bold" : ""}`}
                                                >
                                                    {sentence}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            {/* SECTION 2 */}
            {/*    <section className="min-h-screen">*/}
            {/*        <Stickybar title={titles[1]} subtitle={subtitles[1]} topOffset={showNavbar ? 55 : 0} align={"center"} />*/}
            {/*            <motion.div*/}
            {/*                initial="hidden"*/}
            {/*                whileInView="visible"*/}
            {/*                viewport={{ once: true }}*/}
            {/*                variants={containerVariants}*/}
            {/*                className="pt-24 text-2xl leading-relaxed pb-36 px-12"*/}
            {/*            >*/}
            {/*                <div className="container mx-auto relative group w-full h-[60vh]">*/}
            {/*                    /!* 흐린 배경 이미지 레이어 *!/*/}
            {/*                    <div*/}
            {/*                        className="absolute inset-0 bg-cover bg-top bg-no-repeat filter blur-xl"*/}
            {/*                        style={{ backgroundImage: "url(/images/koreaOffice/partnerships.png)" }}*/}
            {/*                    >*/}
            {/*                        /!* 어두운 반투명 오버레이 (호버 시에만 보임) *!/*/}
            {/*                        <div className="absolute inset-0 transition duration-500 bg-transparent*/}
            {/*                           group-hover:bg-black/40" />*/}
            {/*                    </div>*/}

            {/*                    /!* 선명한 콘텐츠 레이어 *!/*/}
            {/*                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100*/}
            {/*                       transition-opacity duration-500 flex items-center justify-center z-10">*/}
            {/*                        <div className="bg-white px-6 py-4 rounded-xl text-center shadow-lg">*/}
            {/*                            <p className="text-lg font-semibold mb-2 text-black"><strong>CBOL</strong>과 함께했던 고객사, 지금 확인해보세요</p>*/}
            {/*                            <a*/}
            {/*                                href="https://www.cbol.com/aboutus.html#:~:text=Partnerships"*/}
            {/*                                target="_blank"*/}
            {/*                                rel="noopener noreferrer"*/}
            {/*                                className="inline-block px-4 py-2 rounded-md bg-red-950 text-white*/}
            {/*                                   text-lg font-semibold hover:bg-red-900 transition mb-2"*/}
            {/*                            >*/}
            {/*                                고객사 리스트 보기 →*/}
            {/*                            </a>*/}
            {/*                            <p className="text-sm font-semibold text-gray-500">* 일부 고객사는 과거 협업 사례입니다.</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </motion.div>*/}
            {/*    </section>*/}

            <Footer />
        </main>
    );
};

export default KoreaOffice;
