import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Dispatch, ReactNode, SetStateAction } from "react";

// Props 타입 정의
export type CardItem = {
    icon: ReactNode;
    title: string;
    description: string;
};

type SlideLayoutProps = {
    bgImage: string;
    title: string;
    description: string;
    rightImages: string[];
    rightContents?: CardItem[];
    layout?: "default" | "zigzag";
    activeIndex?: number;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
    totalSlides?: number;
    isMobile?: boolean;
    indicatorButtons?: ReactNode;
};

export const SlideLayout = ({
                                bgImage,
                                title,
                                description,
                                rightImages,
                                rightContents,
                                layout = "default",
                                isMobile,
                                indicatorButtons,
                            }: SlideLayoutProps) => {
    const isGridLayout = !!rightContents || rightImages.length > 1;
    const isMobileView = useMediaQuery({ maxWidth: 640 });

    const renderCards = (cards: CardItem[]) => (
        cards.map((item, i) => (
            <motion.div
                key={i}
                className="flex w-full h-full bg-white rounded-lg shadow-red-950 shadow-sm p-6 flex-col justify-center"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex h-[30px] items-center justify-center gap-4 mb-6">
                    <div>{item.icon}</div>
                    <h3 className="sm:text-xl font-semibold text-red-800">{item.title}</h3>
                </div>
                <p className="flex text-gray-600 justify-center text-center text-sm sm:text-base leading-relaxed">
                    {item.description}
                </p>
            </motion.div>
        ))
    );

    const renderImageGridItems = () => (
        rightImages.map((src, i) => (
            <motion.img
                key={i}
                src={src}
                alt={`img${i}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            />
        ))
    );

    if (isMobileView || isMobile) {
        return (
            <div className="w-screen h-screen flex flex-col overflow-hidden pt-16 relative">
                {indicatorButtons && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50">
                        {indicatorButtons}
                    </div>
                )}

                {/* 텍스트 + 배경 */}
                <div
                    className="w-full h-[40%] relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center px-6 py-8">
                        <motion.div
                            className="text-white text-center max-w-[90%]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-2 mb-6">
                                {title
                                    .split("\n")
                                    .filter(line => line.trim() !== "")
                                    .map((line, i) => (
                                        <h1
                                            key={i}
                                            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${i === 1 ? "pl-2" : ""}`}
                                        >
                                            {line}
                                        </h1>
                                    ))}
                            </div>
                            <div className="space-y-1">
                                {description
                                    .split("\n")
                                    .filter(line => line.trim() !== "")
                                    .map((line, i) => (
                                        <motion.p
                                            key={i}
                                            className="text-xs sm:text-sm leading-snug"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                                        >
                                            {line}
                                        </motion.p>
                                    ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 이미지/콘텐츠 영역 */}
                <div className="w-full h-[60%] flex items-center justify-center bg-white overflow-y-auto">
                    {layout === "zigzag" ? (
                        <motion.div
                            className="flex flex-col justify-between w-full h-full p-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {rightImages.map((src, index) => (
                                <motion.div
                                    key={index}
                                    className={`w-[48%] h-[calc(100%/7-4px)] ${
                                        index % 2 === 0 ? "self-start" : "self-end"
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                >
                                    <img src={src} alt={`zigzag${index}`} className="w-full h-full object-contain" />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : isGridLayout ? (
                        <div
                            className="grid grid-cols-2 grid-rows-3 gap-2 p-4 w-full h-full overflow-y-auto items-center justify-center"
                        >
                            {rightContents ? renderCards(rightContents) : renderImageGridItems()}
                        </div>
                    ) : (
                        <motion.img
                            src={rightImages[0]}
                            alt="single"
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                    )}
                </div>
            </div>
        );
    }

    // 데스크탑 뷰는 변경 없이 유지
    return (
        <div className="w-screen h-screen flex overflow-hidden">
            {/* Left */}
            <div
                className="w-1/2 h-full relative bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black/80 flex items-center px-12">
                    <motion.div
                        className="text-white text-left max-w-[80%] ml-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-2">
                            {title
                                .split("\n")
                                .filter(line => line.trim() !== "")
                                .map((line, i) => (
                                    <h1
                                        key={i}
                                        className={`text-5xl font-extrabold tracking-tight ${i === 1 ? "pl-4" : ""}`}
                                    >
                                        {line}
                                    </h1>
                                ))}
                        </div>
                        <div className="mt-20 space-y-2 pl-4">
                            {description
                                .split("\n")
                                .filter(line => line.trim() !== "")
                                .map((line, i) => (
                                    <motion.p
                                        key={i}
                                        className="text-lg leading-snug"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.3, duration: 0.6 }}
                                    >
                                        {line}
                                    </motion.p>
                                ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right */}
            <div className="w-1/2 h-full overflow-hidden">
                {layout === "zigzag" ? (
                    <motion.div
                        className="flex flex-col justify-between w-full h-full p-8 pt-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {rightImages.map((src, index) => (
                            <motion.div
                                key={index}
                                className={`w-[48%] h-[calc(100%/7-4px)] ${
                                    index % 2 === 0 ? "self-start" : "self-end"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                            >
                                <img src={src} alt={`zigzag${index}`} className="w-full h-full object-contain" />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : isGridLayout ? (
                    <div
                        className="grid grid-cols-2 grid-rows-3 gap-6 w-full h-full items-center justify-center p-4 pt-20 overflow-y-auto"
                    >
                        {rightContents ? renderCards(rightContents) : renderImageGridItems()}
                    </div>
                ) : (
                    <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${rightImages[0]})` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                )}
            </div>
        </div>
    );
};
