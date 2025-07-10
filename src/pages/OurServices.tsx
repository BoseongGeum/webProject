import React, {useState, useEffect, useRef, useCallback, useLayoutEffect} from "react";
import Stickybar from "../components/Stickybar";
import { motion, useTransform, useScroll } from "framer-motion";
import Footer from "../components/Footer";
import CommonModal from "../components/CommonModal";
import ServicePage1 from "./ServicePage1";
import ServicePage2 from "./ServicePage2";
import ServicePage3 from "./ServicePage3";
import ServicePage4 from "./ServicePage4";
import ServicePage5 from "./ServicePage5";
import {useInView} from "react-intersection-observer";
import Team1 from "./Team1";

const titles = [
    "PARTNERSHIP",
    "TEAM1",
    "KOREA OFFICE",
] as const;

type Title = typeof titles[number];

const subtitles = [
    "글로벌 진출을 위한 파트너쉽",
    "팀1(임시)",
    "한국연락 사무소",
] as const;

type Subtitle = typeof subtitles[number];

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

const inViewOpts = {
    threshold:   0,
    rootMargin:  "-50% 0px -50% 0px",
    triggerOnce: false,    // 명시적이지만, 기본값이 false이므로 생략 가능
};

const OurServices = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const sliderRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const [openModal, setOpenModal] = useState(false);
    const [SelectedInfo, setSelectedInfo] = useState<React.FC | null>(null);

    const [activeSectionTitle, setActiveSectionTitle] = useState<Title>(titles[0]);
    const [activeSectionSubtitle, setActiveSectionSubtitle] = useState<Subtitle>(subtitles[0]);

    const [inViewSection1Ref, inViewSection1] = useInView(inViewOpts);
    const [section2Ref, inViewSection2] = useInView(inViewOpts);
    const [, inViewSection3] = useInView(inViewOpts);

    const section1Ref = useCallback(
        (node: HTMLElement | null) => {
            // a) slider 측정용 ref 에도 붙이고
            sliderRef.current = node;
            // b) intersection observer ref 콜백에도 node 전달
            inViewSection1Ref(node);
        },
        [inViewSection1Ref]
    );

    const measure = useCallback(() => {
        if (!sliderRef.current || !trackRef.current) return;
        const slideWidth = window.innerWidth * 0.5;
        const trackWidth = trackRef.current.scrollWidth;

        const baseDistance = trackWidth - slideWidth;

        // containerHeight spans baseDistance scroll + viewport + extraOffset
        setContainerHeight(trackWidth + window.innerHeight);

        const { top } = sliderRef.current.getBoundingClientRect();
        const startY = window.scrollY + top;
        setStart(startY);
        // end at start + baseDistance (transform uses baseDistance)
        setEnd(startY + baseDistance);
    }, []);

    useLayoutEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        const ro = new ResizeObserver(measure);
        if (trackRef.current) ro.observe(trackRef.current);
        return () => {
            window.removeEventListener("resize", measure);
            ro.disconnect();
        };
    }, [measure]);

    useEffect(() => {
        if (inViewSection1)  {
            setActiveSectionTitle(titles[0]);
            setActiveSectionSubtitle(subtitles[0]);
        }
        else if (inViewSection2) {
            setActiveSectionTitle(titles[1]);
            setActiveSectionSubtitle(subtitles[1]);
        }
        else if (inViewSection3) {
            setActiveSectionTitle(titles[2]);
            setActiveSectionSubtitle(subtitles[2]);
        }
    }, [inViewSection1, inViewSection2, inViewSection3]);

    // Map scrollY to a 0-1 progress value over the adjusted scroll range
    const progress = useTransform(scrollY, [start, end], [0, 1], { clamp: true });
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        // subscribe to progress changes
        const unsubscribe = progress.onChange((p) => {
            const idx = Math.round(p * (items.length - 1));
            setActiveIndex(idx);
        });
        return () => unsubscribe();
    }, [progress]);

    // Calculate horizontal translation so last item centers in viewport
    const x = useTransform(progress, (p) => {
        const width = window.innerWidth;
        const slideWidth = width * 0.5;
        const trackWidth = trackRef.current?.scrollWidth ?? items.length * slideWidth;
        const baseDistance = trackWidth - slideWidth;
        const startX = width / 2 - slideWidth / 2;
        return startX - p * baseDistance;
    });

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
            <Stickybar
                title={activeSectionTitle}
                subtitle={activeSectionSubtitle}
                topOffset={showNavbar ? 52 : 0}
            />

            {/* SECTION 1: Services Slider */}
            <section ref={section1Ref} style={{ height: containerHeight }}>
                <div
                    style={{
                        position: "sticky",
                        top: 180,
                        height: "80vh",
                        overflow: "hidden",
                    }}
                >
                    <div className="flex flex-col items-center justify-center space-y-2 text-2xl leading-relaxed pb-32">
                        <p>CBOL Korea는 해외 고객사의 민수 제품 요청에 따라,</p>
                        <p>한국 및 아시아 제조사와 함께 생산을 진행하는 연결자 역할을 합니다.</p>
                        <p>귀사의 생산 역량을 세계 시장으로 확장해 보세요.</p>
                    </div>

                    <div className="progress-bar-bg">
                        <motion.div className="progress-bar-active" style={{ scaleX: progress }} />
                    </div>
                    <motion.div
                        ref={trackRef}
                        style={{
                            display: "flex",
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
                                    className={`flex flex-col justify-center gray-200items-center bg-white rounded-lg 
                                    shadow p-8 max-w-sm h-52 transition-transform duration-500
                                    ${i === activeIndex ? 'scale-150 border-2 border-red-900' : 'opacity-70'}`}
                                    disabled={i !== activeIndex}
                                >
                                    <h3 className="text-xl font-semibold mb-6">{item.title}</h3>
                                    <p className="text-base leading-relaxed text-center">{item.description}</p>
                                </button>
                            </div>
                        ))}
                        <CommonModal
                            isOpen={openModal}
                            showStickyBar={true}
                            showNavBar={showNavbar}
                            onClose={() => setOpenModal(false)}
                        >
                            {SelectedInfo ? <SelectedInfo /> : <p>정보를 불러올 수 없습니다.</p>}
                        </CommonModal>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: Greeting */}
            <section
                ref={section2Ref}
                className="min-h-screen">
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
