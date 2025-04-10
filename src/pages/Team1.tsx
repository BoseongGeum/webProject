import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PICImage from "../images/team1/PIC.png";
import QuanticEvansImage from "../images/team1/QuanticEvans.png";
import AuraGenImage from "../images/team1/AuraGen.png";
import PICMbImage from "../images/team1/PIC-mb.jpg";
import QuanticEvansMbImage from "../images/team1/QuanticEvans-mb.jpg";
import AuraGenMbImage from "../images/team1/AuraGen-mb.jpg";
import PICLogo from "../images/team1/PICLogo.svg";
import QuanticEvansLogo from "../images/team1/QuanticEvansLogo.png";
import AuraGenLogo from "../images/team1/AuraGenLogo.png";

const blocks = [
    {
        id: 1,
        bgImage: PICImage,
        mbImage: PICMbImage,
        productInfo: "https://picwire.com/Interconnect-Solutions",
        managerInfo: "https://cbol.com/contact.html",
        name: "PIC",
        text:
            "MIL Standard, FAA 인증\n" +
            "초경량 고성능 케이블\n" +
            "안정적인 전자기기 RF, 영상, 데이터 및 고주파\n" +
            "항공우주용 프리미엄 인터커넥트 케이블",
    },
    {
        id: 2,
        bgImage: QuanticEvansImage,
        mbImage: QuanticEvansMbImage,
        productInfo:
            "https://d2f6h2rm95zg9t.cloudfront.net/94541529/C_UAS_1_pager_FNL_Feb_12_2024_21226040.pdf",
        managerInfo:
            "https://www.quanticevans.com/distributors?kind=distributor&country=South%20Korea",
        name: "Quantic Evans",
        text:
            "미국 EVANS 사의 \n" +
            "독자적인 하이브리드 습식 탄탈럼 기술\n" +
            "C-UAS/드론 방어 무기 시스템을 위한 \n" +
            "고전력 고에너지 밀도 캐패시터",
    },
    {
        id: 3,
        bgImage: AuraGenImage,
        mbImage: AuraGenMbImage,
        productInfo: "https://www.aurasystems.com/auragen.html",
        managerInfo:
            "https://cbol.com/download/military_underhood_power_fenerator.pdf",
        name: "AuraGen",
        text:
            "96파운드의 초경량 설계\n" +
            "컴팩트한 사이즈와 \n" +
            "연료 절감까지 갖춘 완벽한 기동성 \n" +
            "AuraGen®의 혁신적인 전력 솔루션",
    },
];

export default function App() {
    const [activeBlock, setActiveBlock] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleInteraction = (id: number) => {
        setActiveBlock(id);
    };

    const handleReset = () => {
        setActiveBlock(null);
    };

    return (
        <div className="flex flex-col h-screen w-full overflow-hidden font-bold relative text-sm md:text-base touch-manipulation select-none">
            <div className="absolute inset-0 bg-black bg-opacity-75 z-0" />

            <div className="flex flex-col h-full transition-all ease-in-out">
                {blocks.map((block) => {
                    const isActive = activeBlock === block.id;
                    const bgImage = isMobile ? block.mbImage : block.bgImage;

                    return (
                        <motion.div
                            key={block.id}
                            className="relative group bg-cover bg-no-repeat bg-center cursor-pointer transition-all duration-500 ease-in-out overflow-hidden"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                                flexGrow: isActive ? 1.15 : 1,
                                flexBasis: 0,
                                minHeight: "80px",
                            }}
                            onMouseEnter={() => handleInteraction(block.id)}
                            onMouseLeave={handleReset}
                            onTouchStart={() => handleInteraction(block.id)}
                            onTouchEnd={handleReset}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 z-10" />

                            <div className="relative z-20 flex w-full h-full px-4 md:px-10 py-4 items-center justify-between">
                                {isMobile ? (
                                    // 모바일 레이아웃
                                    <div className="flex flex-row w-full h-full">
                                        {/* 왼쪽 1/3: 로고 */}
                                        <div className="w-1/3 flex items-center justify-center">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.img
                                                        key={`logo-${block.id}`}
                                                        src={
                                                            block.name === "PIC"
                                                                ? PICLogo
                                                                : block.name === "Quantic Evans"
                                                                    ? QuanticEvansLogo
                                                                    : AuraGenLogo
                                                        }
                                                        alt={`${block.name} Logo`}
                                                        className="h-16 object-contain"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ duration: 0.4 }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* 오른쪽 2/3: 텍스트 + 버튼 */}
                                        <div className="w-2/3 flex flex-col h-full">
                                            {/* 상단 3/4 텍스트 */}
                                            <div className="flex-grow-[3] flex items-center justify-center text-center px-2">
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            key={`text-${block.id}`}
                                                            className="whitespace-pre-line text-yellow-300 text-sm leading-relaxed"
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

                                            {/* 하단 1/4 버튼 */}
                                            <div className="flex-grow flex justify-center items-center space-x-2 py-1">
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <>
                                                            <motion.a
                                                                key={`btn1-${block.id}`}
                                                                href={block.productInfo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="w-24 px-2 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none text-sm text-center flex items-center justify-center"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                whileHover={{ scale: 1.05 }}
                                                                transition={{ duration: 0.4 }}
                                                            >
                                                                제품정보
                                                            </motion.a>
                                                            <motion.a
                                                                key={`btn2-${block.id}`}
                                                                href={block.managerInfo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="w-24 px-2 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none text-sm text-center flex items-center justify-center"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                whileHover={{ scale: 1.05 }}
                                                                transition={{ duration: 0.4 }}
                                                            >
                                                                제품문의
                                                            </motion.a>
                                                        </>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // PC 레이아웃
                                    <div className="flex flex-col lg:flex-row w-full h-full items-center justify-between">
                                        {/* 로고 */}
                                        <div className="w-full lg:w-1/4 flex items-center justify-center mb-4 lg:mb-0">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.img
                                                        key={`logo-${block.id}`}
                                                        src={
                                                            block.name === "PIC"
                                                                ? PICLogo
                                                                : block.name === "Quantic Evans"
                                                                    ? QuanticEvansLogo
                                                                    : AuraGenLogo
                                                        }
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

                                        {/* 텍스트 */}
                                        <div className="w-full lg:w-1/2 flex items-center justify-center mb-4 lg:mb-0 px-2 text-center">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        key={`text-${block.id}`}
                                                        className="whitespace-pre-line text-yellow-300 text-sm md:text-lg leading-relaxed"
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

                                        {/* 버튼 */}
                                        <div className="w-full lg:w-1/4 flex justify-center space-x-4">
                                            <AnimatePresence>
                                                {isActive && (
                                                    <>
                                                        <motion.a
                                                            key={`btn1-${block.id}`}
                                                            href={block.productInfo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-28 md:w-36 px-4 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none text-sm md:text-base text-center flex items-center justify-center"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.4 }}
                                                        >
                                                            제품정보
                                                        </motion.a>
                                                        <motion.a
                                                            key={`btn2-${block.id}`}
                                                            href={block.managerInfo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-28 md:w-36 px-4 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none text-sm md:text-base text-center flex items-center justify-center"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            whileHover={{ scale: 1.05 }}
                                                            transition={{ duration: 0.4 }}
                                                        >
                                                            제품문의
                                                        </motion.a>
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
    );
}
