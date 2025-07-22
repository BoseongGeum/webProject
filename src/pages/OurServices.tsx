import React, {useState, useEffect} from "react";
import Stickybar from "../components/Stickybar";
import Footer from "../components/Footer";
import CommonModal from "../components/CommonModal";
import ServiceDetailsPage from "./ServiceDetailsPage";
import {useInView} from "react-intersection-observer";
import Team1 from "./Team1";
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
        "함께 만들어가는",
        "성장과 신뢰의 파트너십"
    ],
    [
        "귀사의 생산 역량을 세계 시장으로 확장해 보세요."
    ]
];

const records = [
    {
        count: "27",
        unit: "년의",
        description: "업계 경력",
    },
    {
        count: "50",
        unit: "억 원",
        description: "모든 협력사 연평균 수출",
    },
    {
        count: "60",
        unit: "여 개",
        description: "다양한 업계의 고객사",
    },
    {
        count: "300",
        unit: "여 개",
        description: "부품 관리",
    },
];

const items = [
    {
        title: "사양 전달",
        description: [
            "정확한 제품 스펙 확인 & 생산 가능성 검토",
            "미국, 유럽 고객사의 2D/3D 도면, 제품 사양을 검토합니다.",
            "원소재 수급, 가공 방식, 후처리 등",
            "현지 제조 가능여부를 검토하여",
            "불필요한 리스크와 시간 낭비를 줄여드립니다."
        ],
        bgImage: "/images/team2/ourServices/serviceDetails1.jpg",
    },
    {
        title: "조건 협의 / 생산 대응",
        description: [
            "조건 협의 및 생산 대응",
            "복잡한 사양 협의나 소통 부담 없이,",
            "제조사는 실제 생산과 품질 대응에만 전념하실 수 있습니다.",
            "초기 샘플 제작과 품질 테스트를 통해",
            "고객사와 제조사가 만족할 수 있는 품질 기준을 조율합니다.",
            "생산 및 납품 일정을 면밀히 조율하여,",
            "생산 조건과 품질 기준을 함께 맞춰갑니다."
        ],
        bgImage: "/images/team2/ourServices/serviceDetails2.jpg",
    },
    {
        title: "서류 관리 / 수출 대응",
        description: [
            "수출 실적 및 서류 절차 지원",
            "복잡한 수출 절차, 저희가 직접 도와드립니다.",
            "통관, 서류 준비, 물류 등 수출에 필요한 모든 과정을",
            "CBOL 전문 협력 포워더와 함께 원활하게 진행하여,",
            "제조사의 부담을 최소화합니다.",
            "수출 경험이 적어도 걱정하지 마세요.",
            "수출이 처음이거나 경험이 부족한 제조사도",
            "불편 없이 실무적인 지원을 약속합니다."
        ],
        bgImage: "/images/team2/ourServices/serviceDetails3.jpg",
    },
    {
        title: "지속적인 협업 기회",
        description: [
            "지속적인 신규 개발 프로젝트 연계",
            "다양한 고객사들의 요청을 기반으로",
            "신규 개발 프로젝트가 꾸준히 진행하고 있습니다.",
            "기존 협력사들에게 우선적으로",
            "함께 성장할 수 있는 다양한 기회를 공유합니다.",
            "CBOL 한국연락사무소는 단발성 거래가 아닌,",
            "장기적이고 지속적인 협력 관계를 통해",
            "협력사와 함께 성장하는 상생 파트너십을 추구합니다."
        ],
        bgImage: "/images/team2/ourServices/serviceDetails4.png",
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
        description: string[];
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
                        topOffset={showNavbar ? -2 : -57}
                        align={"center"}
                    />
                    <div
                        className="w-full min-h-screen flex flex-col bg-cover bg-center mt-[-57px]"
                        style={{backgroundImage: "url('/images/team2/ourServices/services1.jpg')" }}
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="min-h-screen pb-20 flex flex-col text-2xl leading-relaxed justify-center pl-16
                            bg-black bg-opacity-75 text-white"
                        >
                            {paragraphs1.map((group, gIdx) => (
                                <div
                                    key={gIdx}
                                    className={`${gIdx > 0 ? "mt-10" : ""} space-y-2`}
                                >
                                    {group.map((sentence, sIdx) => (
                                        <div key={sIdx} className="overflow-hidden">
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
                    <div className="h-[57px]" />
                </section>

                <section className="h-full mb-52">
                    <div className="container mx-auto flex flex-col text-start gap-8 pt-12">
                        <div className="w-full">
                            <div className="flex flex-col justify-center space-y-2 text-2xl leading-relaxed">
                                <p>1987년 미국 LA 본사 창립, 1998년 한국 연락사무소 설립 이후,</p>
                                <p>미국과 유럽을 포함한 글로벌 시장에</p>
                                <p>우수한 OEM 제품을 안정적으로 공급하고 있습니다.</p>
                            </div>
                        </div>

                        {/* Right: 4x1 Services Grid */}
                        <div className="flex flex-col w-full pt-12">
                            <div className="grid grid-cols-4 grid-rows-1 gap-6">
                                {records.map((item) => (
                                    <div
                                        className="flex flex-col text-start p-6"
                                    >
                                        <div className="flex flex-row text-red-950 mb-2">
                                            <h3 className="text-8xl font-bold">{item.count}</h3>
                                            <p className="flex items-end pb-2 text-xl text-black">{item.unit}</p>
                                        </div>
                                        <p className="text-xl leading-relaxed pl-2 mb-16">{item.description}</p>
                                        <div className="bg-red-950 w-full border-2 border-red-950" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="min-h-screen">
                    <div className="container mx-auto flex flex-col text-center items-center gap-8">
                        {/* Right: 2x3 Services Grid */}
                        <div className="w-full h-full">
                            <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-16">
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
                                            className="w-full h-full relative overflow-hidden rounded-xl shadow group p-32"
                                        >
                                            {/* 배경 이미지 레이어 */}
                                            <div
                                            className="absolute inset-0 bg-center bg-cover transition duration-500
                                            group-hover:scale-110"
                                            style={{ backgroundImage: `url(${item.bgImage})` }}
                                            />
                                            <div className="absolute inset-0 transition duration-500 group-hover:bg-black/30" />
                                        </button>
                                        <h3 className="text-start text-xl font-semibold pt-8 pl-8 mb-28">{item.title}</h3>
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
            <section className="min-h-screen">
                <div className="leading-relaxed">
                    <div className="mt-10">
                        <Team1 showNavBar={showNavbar} showStickyBar={true}/>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
};

export default OurServices;
