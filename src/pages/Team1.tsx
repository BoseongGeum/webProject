import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CommonModal from "../components/CommonModal";
import PICProductInfo from "./PICProductInfo";
import QuanticEvansProductInfo from "./QuanticEvansProductInfo";
import AuraGenProductInfo from "./AuraGenProductInfo";
// import { useImagePreloader } from "../hooks/useImagePreloader";

const blocks = [
    {
        id: 1,
        bgImage: "/images/team1/main/PIC.png",
        mdImage: "/images/team1/main/PIC-md.png",
        smImage: "/images/team1/main/PIC-sm.png",
        logoImage: "/images/team1/main/PICLogo.svg",
        productInfo: PICProductInfo,
        managerInfo: "/team1/picManagerInfo",
        name: "PIC",
        text:
            "MIL Standard, FAA 인증\n" +
            "초경량 고성능 케이블\n" +
            "안정적인 전자기기 RF, 영상, 데이터 및 고주파\n" +
            "항공우주용 프리미엄 인터커넥트 케이블",
    },
    {
        id: 2,
        bgImage: "/images/team1/main/QuanticEvans.png",
        mdImage: "/images/team1/main/QuanticEvans-md.png",
        smImage: "/images/team1/main/QuanticEvans-sm.png",
        logoImage: "/images/team1/main/QuanticEvansLogo.png",
        productInfo: QuanticEvansProductInfo,
        managerInfo: "/team1/quanticEvansManagerInfo",
        name: "Quantic Evans",
        text:
            "미국 EVANS 사의 \n" +
            "독자적인 하이브리드 습식 탄탈럼 기술\n" +
            "C-UAS/드론 방어 무기 시스템을 위한 \n" +
            "고전력 고에너지 밀도 캐패시터",
    },
    {
        id: 3,
        bgImage: "/images/team1/main/AuraGen.png",
        mdImage: "/images/team1/main/AuraGen-md.png",
        smImage: "/images/team1/main/AuraGen-sm.png",
        logoImage: "/images/team1/main/AuraGenLogo-white.png",
        productInfo: AuraGenProductInfo,
        managerInfo: "/team1/auraGenManagerInfo",
        name: "AuraGen",
        text:
            "96파운드의 초경량 설계\n" +
            "컴팩트한 사이즈와 \n" +
            "연료 절감까지 갖춘 완벽한 기동성 \n" +
            "AuraGen®의 혁신적인 전력 솔루션",
    },
];

export default function Team1() {
    const [activeBlock, setActiveBlock] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [SelectedInfo, setSelectedInfo] = useState<React.FC | null>(null);

    // const imagePaths = blocks.flatMap(b => [b.bgImage, b.mdImage, b.logoImage]);
    //const loaded = useImagePreloader(imagePaths);

    useEffect(() => {
        const updateDeviceSize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 640);
            setIsTablet(width > 640 && width <= 1024);
        };

        updateDeviceSize();
        window.addEventListener("resize", updateDeviceSize);
        return () => window.removeEventListener("resize", updateDeviceSize);
    }, []);

    const handleInteraction = (id: number) => {
        setActiveBlock(id);
    };

    const handleReset = () => {
        setActiveBlock(null);
    };

    return (
        <main className="bg-[#F0EEEB]">
        <div className="px-24 pt-24 flex flex-col h-screen w-full overflow-hidden font-bold relative text-[clamp(14px,1.2vw,18px)] select-none">
            <div className="absolute inset-0 z-0" />

            <div className="flex flex-col h-full transition-all ease-in-out">
                {blocks.map((block) => {
                    const isActive = activeBlock === block.id;
                    const bgImage = isMobile
                        ? block.smImage
                        : isTablet
                            ? block.mdImage
                            : block.bgImage;

                    return (
                        <motion.div
                            key={block.id}
                            className="mb-10 rounded-2xl relative group bg-cover bg-no-repeat bg-center cursor-pointer transition-all duration-500 ease-in-out overflow-hidden"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                                flexGrow: isActive ? 1.15 : 1,
                                flexBasis: 0,
                            }}
                            onMouseEnter={() => handleInteraction(block.id)}
                            onMouseLeave={handleReset}
                            onTouchStart={() => handleInteraction(block.id)}
                            onTouchEnd={handleReset}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-500 z-10" />
                            <div className="relative z-20 flex w-full h-full px-2 sm:px-6 md:px-10 py-4 items-center justify-between">
                                {isTablet || isMobile ? (
                                    <div className="flex flex-row w-full h-full">
                                        <div className="w-1/3 flex items-center justify-center">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.img
                                                        key={`logo-${block.id}`}
                                                        src={block.logoImage}
                                                        alt={`${block.name} Logo`}
                                                        className="h-16 object-contain pl-2"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ duration: 0.4 }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div className="w-2/3 flex flex-col h-full">
                                            <div className="flex-grow-[3] flex items-center justify-center text-center px-2">
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            key={`text-${block.id}`}
                                                            className="whitespace-pre-line text-yellow-300 text-[clamp(12px,2vw,16px)] leading-relaxed"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            {block.text.split("\n").map((line, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: 10 }}
                                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                                >
                                                                    {line}
                                                                </motion.div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            <div className="flex-grow flex justify-center items-center space-x-2 py-1">
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <>
                                                            <motion.div
                                                                key={`btn1-${block.id}`}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                whileHover={{ scale: 1.05 }}
                                                                transition={{ duration: 0.4 }}
                                                                className="w-24 md:w-28 px-2 py-1 border-2 border-amber-300 bg-black bg-opacity-30 text-yellow-300 hover:text-white hover:bg-yellow-300 rounded-none text-[clamp(13px,1vw,17px)] text-center flex items-center justify-center"
                                                            >
                                                                <button className="w-full h-full flex items-center justify-center">
                                                                    제품정보
                                                                </button>
                                                            </motion.div>

                                                            <motion.div
                                                                key={`btn2-${block.id}`}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                whileHover={{ scale: 1.05 }}
                                                                transition={{ duration: 0.4 }}
                                                                className="w-24 md:w-28 px-2 py-1 border-2 border-amber-300 bg-black bg-opacity-30 text-yellow-300 hover:text-white hover:bg-yellow-300 rounded-none text-[clamp(13px,1vw,17px)] text-center flex items-center justify-center"
                                                            >
                                                                <Link to={block.managerInfo} className="w-full h-full flex items-center justify-center">
                                                                    제품문의
                                                                </Link>
                                                            </motion.div>
                                                        </>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between">
                                        <div className="w-full lg:w-1/4 flex items-center justify-center mb-4 lg:mb-0">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.img
                                                        key={`logo-${block.id}`}
                                                        src={block.logoImage}
                                                        alt={`${block.name} Logo`}
                                                        className="h-16 md:h-20 object-contain"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ duration: 0.4 }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div className="w-full lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0 px-2 text-center">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        key={`text-${block.id}`}
                                                        className="whitespace-pre-line text-yellow-300 text-[clamp(14px,1.2vw,18px)] leading-relaxed"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {block.text.split("\n").map((line, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                                            >
                                                                {line}
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div className="w-full lg:w-1/4 flex justify-center space-x-4">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <>
                                                        <motion.div
                                                            key={`btn1-${block.id}`}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.4 }}
                                                        >
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedInfo(() => block.productInfo);
                                                                    setOpenModal(true)
                                                                }}
                                                                className="w-28 md:w-36 px-4 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 hover:text-black hover:bg-yellow-300 rounded-none text-[clamp(14px,1vw,18px)] text-center flex items-center justify-center"
                                                            >
                                                                제품정보
                                                            </button>
                                                            <CommonModal
                                                                isOpen={openModal}
                                                                onClose={() => setOpenModal(false)}
                                                            >
                                                                {SelectedInfo
                                                                ? <SelectedInfo />
                                                                : <p>정보를 불러올 수 없습니다.</p>}
                                                            </CommonModal>
                                                        </motion.div>

                                                        <motion.div
                                                            key={`btn2-${block.id}`}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.4 }}
                                                        >
                                                            <Link
                                                                to={block.managerInfo}
                                                                className="w-28 md:w-36 px-4 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 hover:text-black hover:bg-yellow-300 rounded-none text-[clamp(14px,1vw,18px)] text-center flex items-center justify-center"
                                                            >
                                                                제품문의
                                                            </Link>
                                                        </motion.div>
                                                    </>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
        </main>
    );
}
