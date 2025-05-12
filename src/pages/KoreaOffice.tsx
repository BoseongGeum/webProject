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
            "\uC804 \uC138\uACC4 \uACE0\uAC1D\uC744 \uB300\uC0C1\uC73C\uB85C \uB9DE\uCDA4\uD615 \uACF5\uAE09 \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.\n\uCD5C\uC801\uD654\uB41C OEM \uBD80\uD488 \uAC1C\uBC1C \uBC0F \uC591\uC0B0 \uD488\uC9C8 \uAD00\uB9AC \uC804\uBB38\n\uD56D\uC0C1 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uD488\uC9C8\uACFC \uD6A8\uC728\uC801\uC778 \uC11C\uBE44\uC2A4\uB97C \uD1B5\uD574 \n\uACE0\uAC1D\uC758 \uC131\uACF5\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.",
        rightImages: ["/images/team2/koreaOffice/koreaOffice2.avif"],
    },
    {
        bgImage: "/images/team2/koreaOffice/koreaOffice1.jpg",
        title: "Contract Manufacturing\n OEM \uBD80\uD488 \uC81C\uC870\uC640 \uACF5\uAE09 \uC11C\uBE44\uC2A4",
        description:
            "\uD55C\uAD6D \uBC0F \uC544\uC2DC\uC544 \uC804\uC5ED\uC758 \uC6B0\uC218 \uD30C\uD2B8\uB108\uC0AC\uC640 \uD568\uAED8\n\uAC01 \uACF5\uC815\uC744 \uBA74\uBCBD\uD788 \uAC80\uD1A0\uD558\uACE0,\n\uCD5C\uC0C1\uC758 \uD488\uC9C8\uC744 \uC644\uC131\uD569\uB2C8\uB2E4.",
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
            setTimeout(() => setIsAnimating(false), 800);
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === activeIndex ? "bg-white" : "bg-gray-500"
                    }`}
                />
            ))}
        </div>
    );

    const variants = {
        enter: (direction: number) =>
            isMobile
                ? { x: direction > 0 ? 300 : -300, opacity: 0 }
                : { y: direction > 0 ? 300 : -300, opacity: 0 },
        center: { x: 0, y: 0, opacity: 1 },
        exit: (direction: number) =>
            isMobile
                ? { x: direction > 0 ? -300 : 300, opacity: 0 }
                : { y: direction > 0 ? -300 : 300, opacity: 0 },
    };

    return (
        <div className="w-screen h-screen overflow-hidden relative" {...handlers}>
            {!isMobile && indicatorButtons}

            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={activeIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={direction}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="w-full h-full"
                >
                    <SlideLayout
                        {...slides[activeIndex]}
                        activeIndex={activeIndex}
                        totalSlides={slides.length}
                        setActiveIndex={setActiveIndex}
                        isMobile={isMobile}
                        indicatorButtons={isMobile ? indicatorButtons : null}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
