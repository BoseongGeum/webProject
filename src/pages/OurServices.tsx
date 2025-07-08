import React, { useState, useEffect, useRef } from "react";
import Stickybar from "../components/Stickybar";
import { motion, useTransform, useScroll } from "framer-motion";
import Footer from "../components/Footer";
import CommonModal from "../components/CommonModal";
import ServicePage1 from "./ServicePage1";
import ServicePage2 from "./ServicePage2";
import ServicePage3 from "./ServicePage3";
import ServicePage4 from "./ServicePage4";
import ServicePage5 from "./ServicePage5";

const titles = [
    "PARTNERSHIP",
    "GREETING",
    "KOREA OFFICE",
];

const subtitles = [
    "글로벌 진출을 위한 파트너쉽",
    "인사말",
    "한국연락 사무소",
];

const items = [
    {
        title: "사양 전달",
        description: "고객사의 요구사항을 제조 파트너에게 상세히 전달하고 협력합니다.",
        page: ServicePage1,
    },
    {
        title: "조건 협의 / 생산 대응",
        description: "납기, 수량, 공정 조건 등을 협의하며, 제조사는 생산에 집중할 수 있습니다.",
        page: ServicePage2,
    },
    {
        title: "품질관리 / 납품",
        description: "생산 완료 후 품질 검수 및 납품 절차를 관리합니다.",
        page: ServicePage3,
    },
    {
        title: "서류 관리 / 수출 대응",
        description: "계약, 수출입 관련 서류는 CBOL Korea가 전담합니다.",
        page: ServicePage4,
    },
    {
        title: "지속적인 협업 기회",
        description: "단발성 거래가 아닌, 장기적인 파트너십 기반으로 반복 수주가 가능합니다.",
        page: ServicePage5,
    },
];

const OurServices = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const [openModal, setOpenModal] = useState(false);
    const [SelectedInfo, setSelectedInfo] = useState<React.FC | null>(null);

    // Map scrollY to a 0-1 progress value over the adjusted scroll range
    const progress = useTransform(scrollY, [start, end], [0, 1], { clamp: true });
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        // subscribe to progress changes
        const unsubscribe = progress.onChange((p) => {
            const idx = Math.round(p * (items.length + 1));
            setActiveIndex(idx);
        });
        return () => unsubscribe();
    }, [progress]);

    // Calculate horizontal translation so last item centers in viewport
    const x = useTransform(progress, (p) => {
        const width = window.innerWidth;
        const slideWidth = width * 0.5;                       // 50vw
        const scrollDistance = slideWidth * (items.length + 1.5);
        const adjustedMaxX = scrollDistance - slideWidth / 2;
        const startX = width / 2 - slideWidth / 2;            // 첫 슬라이드 중앙 맞추기
        // p=0 → startX, p=1 → startX - scrollDistance
        return startX - p * adjustedMaxX;
    });

    useEffect(() => {
        const onResize = () => {
            const width = window.innerWidth;
            const slideWidth = width * 0.5;                       // 50vw
            const scrollDistance = slideWidth * (items.length + 1);
            const adjustedMaxX = scrollDistance - slideWidth / 2;
            // Section height = (scrollDistance) + (뷰포트 높이)
            const height = adjustedMaxX + window.innerHeight;
            setContainerHeight(height);

            // Calculate scroll start/end positions for the section
            const rect = sectionRef.current!.getBoundingClientRect();
            const top = window.scrollY + rect.top;
            setStart(top);
            setEnd(top + adjustedMaxX);
        };

        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

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
            {/* SECTION 1: Services Slider */}
            <section ref={sectionRef} style={{ height: containerHeight }}>
                <Stickybar
                    title={titles[0]}
                    subtitle={subtitles[0]}
                    topOffset={showNavbar ? 52 : 0}
                    align="center"
                />

                <div
                    style={{
                        position: "sticky",
                        top: 180,
                        height: "100vh",
                        overflow: "hidden",
                    }}
                >
                    <div className="flex flex-col items-center justify-center space-y-2 text-2xl leading-relaxed pb-32">
                        <p>CBOL Korea는 해외 고객사의 민수 제품 요청에 따라,</p>
                        <p>한국 및 아시아 제조사와 함께 생산을 진행하는 연결자 역할을 합니다.</p>
                        <p>귀사의 생산 역량을 세계 시장으로 확장해 보세요.</p>
                    </div>

                    <motion.div
                        ref={trackRef}
                        style={{
                            display: "flex",
                            width: `${items.length * 50}vw`,
                            x,
                        }}
                    >
                        {items.map((item, i) => (
                            <div
                                key={i}
                                style={{ width: "50vw", flexShrink: 0 }}
                                className="flex justify-center"
                            >
                                <button
                                    onClick={() => { setOpenModal(true); setSelectedInfo(() => item.page); }}
                                    className={`flex flex-col justify-center items-center bg-white rounded-lg 
                                    shadow p-8 max-w-sm h-52 transition-transform duration-500 
                                    ${i === activeIndex ? 'scale-150 ring-2 ring-blue-500' : 'opacity-50'}`}
                                    disabled={i !== activeIndex}
                                >
                                    <h3 className="text-xl font-semibold mb-6">{item.title}</h3>
                                    <p className="text-base leading-relaxed text-center">{item.description}</p>
                                </button>
                            </div>
                        ))}
                        <CommonModal
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}
                        >
                            {SelectedInfo ? <SelectedInfo /> : <p>정보를 불러올 수 없습니다.</p>}
                        </CommonModal>
                    </motion.div>

                    <div className="progress-bar-bg">
                        <motion.div className="progress-bar-active" style={{ scaleX: progress }} />
                    </div>
                </div>
            </section>

            {/* SECTION 2: Greeting */}
            <section className="min-h-screen">
                <Stickybar
                    title={titles[1]}
                    subtitle={subtitles[1]}
                    topOffset={showNavbar ? 52 : 0}
                    align="center"
                />
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

export default OurServices;
