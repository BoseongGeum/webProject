import { useEffect, useState } from "react";
import { SlideLayout } from "../components/SlideLayout";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
    {
        bgImage: "/images/team2/koreaOffice/koreaOffice1.jpg",
        title: "Your Idea, Made Real\nwith CBOL",
        description:
            "전 세계 고객을 대상으로 맞춤형 공급 솔루션을 제공합니다.\n최적화된 OEM 부품 개발 및 양산 품질 관리 전문이며,\n항상 신뢰할 수 있는 품질과 효율적인 서비스를 통해 \n고객의 성공을 지원합니다.",
        rightImages: ["/images/team2/koreaOffice/koreaOffice2.avif"],
    },
    {
        bgImage: "/images/team2/koreaOffice/koreaOffice1.jpg",
        title: "Contract Manufacturing\n OEM 부품 제조와 공급 서비스",
        description:
            "한국 및 아시아 전역의 우수 파트너사와 함께\n각 공정을 면밀히 검토하고,\n최상의 품질을 완성합니다.",
        rightImages: [
            "/images/team2/koreaOffice/koreaOffice3.png",
            "/images/team2/koreaOffice/koreaOffice4.png",
            "/images/team2/koreaOffice/koreaOffice5.png",
            "/images/team2/koreaOffice/koreaOffice6.png",
            "/images/team2/koreaOffice/koreaOffice7.png",
            "/images/team2/koreaOffice/koreaOffice8.png",
        ],
    },
];

export const KoreaOffice = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const imagePaths = slides.flatMap((slide) => [slide.bgImage, ...slide.rightImages]);
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

    if (!loaded) return <LoadingScreen isWhite={true} />;

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
                    className={`w-3 h-3 rounded-full transition-all duration-150 ${
                        i === activeIndex ? "bg-white" : "bg-gray-500"
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
    );
};
