import { useEffect, useState } from "react";
import { SlideLayout } from "../components/SlideLayout";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

const slides = [
    {
        bgImage: "/images/team2/koreaOffice/koreaOffice1.jpg",
        title: "Your Idea, Made Real\nwith CBOL",
        description:
            "전 세계 고객을 대상으로 맞춤형 공급 솔루션을 제공합니다.\n최적화된 OEM 부품 개발 및 양산 품질 관리 전문\n항상 신뢰할 수 있는 품질과 효율적인 서비스를 통해 \n고객의 성공을 지원합니다.",
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

    const imagePaths = slides.flatMap((slide) => [slide.bgImage, ...slide.rightImages]);
    const loaded = useImagePreloader(imagePaths);

    useEffect(() => {
        if (!loaded) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 50 && activeIndex < slides.length - 1) {
                setActiveIndex((prev) => prev + 1);
            } else if (e.deltaY < -50 && activeIndex > 0) {
                setActiveIndex((prev) => prev - 1);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [activeIndex, loaded]);

    if (!loaded) return <LoadingScreen isWhite={true} />;

    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i === activeIndex ? "bg-white" : "bg-gray-500"
                        }`}
                    />
                ))}
            </div>

            <SlideLayout {...slides[activeIndex]} key={activeIndex} />
        </div>
    );
};