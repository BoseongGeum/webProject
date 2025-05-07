import { SlideLayout } from "../components/SlideLayout";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";

export const OurServices = () => {
    const bgImage = "/images/team2/ourServices/ourServices1.jpg";
    const rightImages = [
        "/images/team2/ourServices/ourServices2.png",
        "/images/team2/ourServices/ourServices3.png",
        "/images/team2/ourServices/ourServices4.png",
        "/images/team2/ourServices/ourServices5.png",
        "/images/team2/ourServices/ourServices6.png",
        "/images/team2/ourServices/ourServices7.jpg",
        "/images/team2/ourServices/ourServices8.png",
    ];

    const images = [bgImage, ...rightImages];
    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={true} />;

    const title = "고객사";
    const description =
        "30년간의 경험으로 구축한 프로세스와 네트워크를 통해\n아래 주요 기업들에 OEM 부품을 공급한 바 있습니다";

    return (
        <SlideLayout
            bgImage={bgImage}
            title={title}
            description={description}
            rightImages={rightImages}
            layout="zigzag"
        />
    );
};
