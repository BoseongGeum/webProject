import React, {useState, useEffect} from "react";
import Stickybar from "../components/Stickybar";
import Footer from "../components/Footer";
import CommonModal from "../components/CommonModal";
import ServiceDetailsPage from "./ServiceDetailsPage";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

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
    "SERVICES",
] as const;

type Title = typeof titles[number];

const subtitles = [
    "글로벌 진출을 위한 파트너쉽",
] as const;

type Subtitle = typeof subtitles[number];

const paragraphs1 = [
    [
        "함께 만들어가는 성장과 신뢰의 파트너십"
    ],
    [
        "CBOL Corporation 한국 연락사무소는",
        "제조사와 고객사 사이의 공백을 메우며,",
        "제품 기획부터 생산, 품질 관리, 납품, 유통까지 전 과정을 함께합니다."
    ],
    [
        "생산 과정에서 발생하는 다양한 문제를 신속하고 책임감 있게 해결하고,",
        "효율적인 물류 및 유통 시스템과 연계해",
        "제품이 고객에게 원활하게 공급되도록 지원합니다."
    ],
    [
        "지금, CBOL Corporation과 함께",
        "귀사의 생산 역량을 글로벌 시장으로 확장해보세요."
    ]
];

const records = [
    {
        count: "27",
        unit: "년 동안",
        description: ["쌓아온 업계 경력과 신뢰"],
    },
    {
        count: "60",
        unit: "여 개",
        description: ["고객사와 함께한 협업 경험"],
    },
    {
        count: "300",
        unit: "여 개",
        description: ["제품 누적 관리 경험", "으로 쌓은 전문성"],
    },
    {
        count: "1000",
        unit: "여 건",
        description: ["누적 프로젝트 실적 보유"],
    },
];

const items = [
    {
        title: "도면 및 요청 사항 분석",
        subtitle: "고객의 도면과 요청사항을 생산 가능한 언어로 정리합니다.",
            description: [
                [
                    "도면 및 요청 사항 분석",
                ],
                [
                    "미국 및 유럽 등 해외 고객사로부터 견적 및 개발 의뢰를 받은",
                    "제품의 도면과 요청 사양을 사전에 면밀히 분석하여 협력사에게 제공하고 있습니다.",
                ],
                [
                    "원자재 수급부터 제조 방식, 후처리 공정까지",
                    "제품의 생산 및 공급에 필요한 모든 요소를 세심하게 검토하여,",
                    "개발 과정에서 발생할 수 있는 위험요소와 불필요한 지연을 최소화하고 있습니다.",
                ]
            ],
        bgImage: "/images/ourServices/serviceDetails1.jpg",
    },
    {
        title: "생산 조건 및 품질 기준 협의",
        subtitle: "고객 요구에 맞춘 생산 조건 조율 및 이슈 대응까지 함께합니다.",
        description: [
            [
                "생산 조건 및 품질 기준 협의"
            ],
            [
                "고객사와 협력사의 사양 협의 및 커뮤니케이션 부담을 최소화하여,",
                "협력사가 생산 및 품질 관리에만 전념할 수 있는 환경을 제공하고 있습니다.",
            ],
            [
                "초기 샘플 제작부터 양산에 이르기까지 전 과정에서",
                "고객사의 요구와 협력사의 생산 방식 사이의 차이를 조율하여,",
                "모두가 만족할 수 있는 현실적인 품질 기준을 함께 만들어 가고 있습니다.",
            ],
        ],
        bgImage: "/images/ourServices/serviceDetails2.jpg",
    },
    {
        title: "수출 서류 대응 전담",
        subtitle: "수출입 서류, 출하부터 통관까지 전 과정을 지원합니다.",
        description: [
            [
                "수출 서류 대응 전담"
            ],
            [
                "수출입 절차에 익숙하지 않은 협력사를 위해",
                "복잡한 수출 과정을 전문적으로 지원하고 있습니다.",
            ],
            [
                "수출에 필요한 각종 서류 준비부터 통관 절차, 해외 운송에 이르기까지",
                "경험이 풍부한 운송업체와 긴밀한 협력을 바탕으로",
                "정확하고 신속하게 수출입 업무를 수행하고 있습니다.",
            ],
        ],
        bgImage: "/images/ourServices/serviceDetails3.jpg",
    },
    {
        title: "지속 가능한 협력 기회",
        subtitle: "1회성 거래가 아닌 장기적 파트너십으로 이어갑니다.",
        description: [
            [
                "지속 가능한 협력 기회"
            ],
            [
                "미국, 유럽 등 다양한 해외 고객사로부터 접수된 요청을 기반으로",
                "지속적으로 신규 프로젝트를 진행하고 있습니다.",
            ],
            [
                "저희는 협력사와의 단발성 거래에 머무르지 않고,",
                "장기적이고 안정적인 협력 관계를 구축하는 데 중점을 두고 있습니다.",
                "상호 신뢰를 바탕으로 함께 성장하고 발전하는 상생의 파트너십을 실현하고자 합니다.",
            ],
        ],
        bgImage: "/images/ourServices/serviceDetails4.png",
    },
];

const inViewOpts = {
    threshold:   0,
    rootMargin:  "-50% 0px -50% 0px",
    triggerOnce: false,    // 명시적이지만, 기본값이 false이므로 생략 가능
};

const OurServices = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [openModal, setOpenModal] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState<{
        description: string[][];
        bgImage: string;
    } | null>(null);

    const [activeSectionTitle, setActiveSectionTitle] = useState<Title>(titles[0]);
    const [activeSectionSubtitle, setActiveSectionSubtitle] = useState<Subtitle>(subtitles[0]);

    const [section1Ref, inViewSection1] = useInView(inViewOpts);

    useEffect(() => {
        if (inViewSection1)  {
            setActiveSectionTitle(titles[0]);
            setActiveSectionSubtitle(subtitles[0]);
        }
    }, [inViewSection1]);

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

                {/* SECTION 1: Overview & Services Grid */}
                <section ref={section1Ref} className="min-h-screen">
                    <Stickybar
                        title={activeSectionTitle}
                        subtitle={activeSectionSubtitle}
                        topOffset={showNavbar ? 55 : 0}
                        align={"center"}
                    />
                    <div
                        className="w-full min-h-screen flex flex-col bg-cover bg-fixed"
                        style={{backgroundImage: "url('/images/ourServices/services1.jpg')" }}
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="min-h-screen pt-24 pb-20 flex flex-col text-2xl leading-relaxed justify-center
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
                </section>

                <section className="h-full mb-52">
                    <div className="container mx-auto flex flex-col text-start gap-8 pt-12">
                        <div className="w-full">
                            <div className="flex flex-col space-y-2 text-2xl leading-relaxed">
                                <p>1987년 미국 캘리포니아 본사 창립, 1998년 한국 연락사무소 설립 이후,</p>
                                <p>미국과 유럽을 포함한 글로벌 시장에</p>
                                <p>우수한 OEM 제품을 안정적으로 공급하고 있습니다.</p>
                            </div>
                        </div>

                        {/* Right: 4x1 Services Grid */}
                        <div className="flex flex-col w-full pt-12">
                            <div className="grid grid-cols-4 grid-rows-1 gap-10">
                                {records.map((item) => (
                                    <div
                                        className="flex flex-col text-start"
                                    >
                                        <div className="h-[96px] flex flex-row text-red-950 mb-2">
                                            <h3 className="text-8xl font-bold">{item.count}</h3>
                                            <p className="flex items-end pb-2 text-2xl text-black">{item.unit}</p>
                                        </div>
                                        <div className="h-[80px] text-2xl leading-relaxed pl-2 mb-12">
                                            {item.description.map((sentence) => (
                                                <p>{sentence}</p>
                                            ))}
                                        </div>
                                        <div className="bg-red-950 w-full border-2 border-red-950" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="min-h-screen">
                    <div className="container mx-auto flex flex-col text-center items-center gap-8">
                        {/* Right: 2x2 Services Grid */}
                        <div className="w-full h-full">
                            <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-16">
                                {items.map((item, idx) => (
                                    <div className="w-full h-full flex flex-col">
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                setOpenModal(true);
                                                setSelectedInfo({
                                                description: item.description,
                                                bgImage: item.bgImage,
                                            });}}
                                            className="w-full h-[350px] relative overflow-hidden rounded-xl shadow group p-32"
                                        >
                                            {/* 배경 이미지 레이어 */}
                                            <div
                                            className="absolute inset-0 bg-center bg-cover transition duration-500
                                            group-hover:scale-110"
                                            style={{ backgroundImage: `url(${item.bgImage})` }}
                                            />
                                            <div className="absolute inset-0 transition duration-500 group-hover:bg-black/30" />
                                        </button>
                                        <h3 className="text-start text-2xl font-bold pt-8 pl-4">{item.title}</h3>
                                        <p className="text-start text-2xl pt-2 pl-4 pr-4 mb-16">{item.subtitle}</p>
                                        <div className="bg-red-950 w-full border-2 border-red-950" />
                                    </div>
                                ))}
                                {/* Common Modal for Details */}
                                <CommonModal
                                    isOpen={openModal}
                                    showStickyBar={false}
                                    showNavBar={showNavbar}
                                    onClose={() => setOpenModal(false)}
                                >
                                    {selectedInfo ? (
                                        <ServiceDetailsPage
                                            description={selectedInfo.description}
                                            bgImage={selectedInfo.bgImage}
                                        />
                                    ) : (
                                        <p>정보를 불러올 수 없습니다.</p>
                                    )}
                                </CommonModal>
                            </div>
                        </div>
                    </div>
                </section>

            {/* SECTION 2: Greeting */}
            {/*<section className="min-h-screen">*/}
            {/*    <div className="leading-relaxed">*/}
            {/*        <div className="mt-10">*/}
            {/*            <Team1 showNavBar={showNavbar} showStickyBar={false}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* Section 3 */}
            <section
                className="h-full px-6 py-24 bg-[#F0EEEB] text-black flex flex-col justify-center relative overflow-hidden pt-28"
            >
                <Footer />
            </section>
        </main>
    );
};

export default OurServices;
