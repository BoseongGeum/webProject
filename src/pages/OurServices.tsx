import { useEffect, useState } from "react";
import { SlideLayout } from "../components/SlideLayout";
import { useImagePreloader } from "../hooks/useImagePreloader";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";
import { Factory, Handshake, PackageSearch, BadgeCheck, ShieldCheck, Mail } from "lucide-react";

const cardItems = [
    {
        icon: <PackageSearch className="h-8 w-8 text-red-700" />,
        title: "사양 전달",
        description: "고객사의 요구사항을 제조 파트너에게 상세히 전달하고 협력합니다."
    },
    {
        icon: <Handshake className="h-8 w-8 text-red-700" />,
        title: "조건 협의 / 생산 대응",
        description: "납기, 수량, 공정 조건 등을 협의하며, 제조사는 생산에 집중할 수 있습니다."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-red-700" />,
        title: "품질관리 / 납품",
        description: "생산 완료 후 품질 검수 및 납품 절차를 관리합니다."
    },
    {
        icon: <BadgeCheck className="h-8 w-8 text-red-700" />,
        title: "서류 관리 / 수출 대응",
        description: "계약, 수출입 관련 서류는 CBOL Korea가 전담합니다."
    },
    {
        icon: <Factory className="h-8 w-8 text-red-700" />,
        title: "지속적인 협업 기회",
        description: "단발성 거래가 아닌, 장기적인 파트너십 기반으로 반복 수주가 가능합니다."
    },
    {
        icon: <Mail className="h-8 w-8 text-red-700" />,
        title: "간편한 소통 / 정산",
        description: "국내 통화로 정산이 가능하며, 빠르고 간결한 커뮤니케이션을 보장합니다."
    },
];

const slides = [
    {
        bgImage: "/images/team2/ourServices/ourServices1.jpg",
        title: "글로벌 진출을 위한 파트너십",
        description:
            "CBOL Korea는 해외 고객사의 민수 제품 요청에 따라,\n한국 및 아시아 제조사와 함께 생산을 진행하는 연결자 역할을 합니다.\n귀사의 생산 역량을 세계 시장으로 확장해 보세요.",
        rightContents: cardItems,
        rightImages: []
    },
    {
        bgImage: "/images/team2/ourServices/ourServices1.jpg",
        title: "주요 고객사",
        description:
            "30년간의 경험으로 구축한 프로세스와 네트워크를 통해\n여러 주요 기업들에 OEM 부품을 공급한 바 있습니다.",
        rightImages: [
            "/images/team2/ourServices/ourServices2.png",
            "/images/team2/ourServices/ourServices3.png",
            "/images/team2/ourServices/ourServices4.png",
            "/images/team2/ourServices/ourServices5.png",
            "/images/team2/ourServices/ourServices6.png",
            "/images/team2/ourServices/ourServices7.jpg",
            "/images/team2/ourServices/ourServices8.png",
        ],
        layout: "zigzag" as const,
    },
];

export const OurServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const imagePaths = slides.flatMap((slide) => [slide.bgImage, ...(slide.rightImages || [])]);
    const loaded = useImagePreloader(imagePaths);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (isMobile && !isAnimating) {
                setDirection(1);
                setActiveIndex((prev) => (prev + 1) % slides.length);
            }
        },
        onSwipedRight: () => {
            if (isMobile && !isAnimating) {
                setDirection(-1);
                setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
            }
        },
        trackTouch: true,
        preventScrollOnSwipe: true,
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (!loaded || isMobile) return;

        const handleWheel = (e: WheelEvent) => {
            if (isAnimating) return;
            setIsAnimating(true);
            if (e.deltaY > 50) {
                setDirection(1);
                setActiveIndex((prev) => (prev + 1) % slides.length);
            } else if (e.deltaY < -50) {
                setDirection(-1);
                setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
            }
            setTimeout(() => setIsAnimating(false), 600);
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [activeIndex, loaded, isMobile, isAnimating]);

    const indicatorButtons = (
        <div
            className={`flex gap-2 ${
                isMobile
                    ? "justify-center mt-4"
                    : "absolute left-6 top-1/2 transform -translate-y-1/2 flex-col z-50"
            }`}
        >
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => {
                        setDirection(i > activeIndex ? 1 : -1);
                        setActiveIndex(i);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === activeIndex ? "bg-[#F0EEEB]" : "bg-gray-500"
                    }`}
                />
            ))}
        </div>
    );

    const variants = {
        enter: (direction: number) =>
            isMobile
                ? {
                    x: direction === 0 ? 0 : direction > 0 ? 150 : -150,
                    y: 0,
                    opacity: 0,
                    position: "absolute" as const,
                }
                : {
                    y: direction === 0 ? 40 : direction > 0 ? 150 : -150,
                    x: 0,
                    opacity: 0,
                    position: "absolute" as const,
                },

        center: {
            x: 0,
            y: 0,
            opacity: 1,
            position: "relative" as const,
        },

        exit: (direction: number) =>
            isMobile
                ? {
                    x: direction === 0 ? 0 : direction > 0 ? -150 : 150,
                    y: 0,
                    opacity: 0,
                    position: "absolute" as const,
                }
                : {
                    y: direction === 0 ? -40 : direction > 0 ? -150 : 150,
                    x: 0,
                    opacity: 0,
                    position: "absolute" as const,
                },
    };


    return (
        <main className="bg-[#F0EEEB]">
        <div className="w-screen h-screen overflow-hidden relative" {...handlers}>
            {!isMobile && indicatorButtons}

            <AnimatePresence custom={direction} initial={true}>
                {slides.map((slide, index) =>
                    index === activeIndex ? (
                        <motion.div
                            key={index}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            custom={direction}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full h-full top-0 left-0"
                        >
                            <SlideLayout
                                {...slide}
                                activeIndex={activeIndex}
                                totalSlides={slides.length}
                                setActiveIndex={setActiveIndex}
                                isMobile={isMobile}
                                indicatorButtons={isMobile ? indicatorButtons : null}
                            />
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>
        </div>
        </main>
    );
};
