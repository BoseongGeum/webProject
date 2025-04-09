import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PICImage from "../images/team1/PIC.png";
import QuanticEvansImage from "../images/team1/QuanticEvans.png";
import AuraGenImage from "../images/team1/AuraGen.png";

const blocks = [
    {
        id: 1,
        bgImage: PICImage,
        productInfo: "https://picwire.com/Interconnect-Solutions",
        managerInfo: "https://cbol.com/contact.html",
        name: "PIC",
        text:
            "MIL Standard, FAA 인증\n" +
            "초경량 고성능 케이블\n" +
            "안정적인 전자기기 RF, 영상, 데이터 및 고주파 항공우주용\n" +
            "프리미엄 인터커넥트 케이블",
    },
    {
        id: 2,
        bgImage: QuanticEvansImage,
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
        productInfo: "https://www.aurasystems.com/auragen.html",
        managerInfo: "https://cbol.com/contact.html",
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

    return (
        <div className="flex flex-col h-screen w-full overflow-hidden relative text-sm md:text-base">
            {/* 어두운 배경 오버레이 */}
            <div className="absolute inset-0 bg-black bg-opacity-75 z-0" />

            {blocks.map((block, index) => (
                <motion.div
                    key={block.id}
                    className="flex-1 font-bold relative group bg-cover sm:bg-contain bg-no-repeat bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${block.bgImage})` }}
                    onMouseEnter={() => setActiveBlock(block.id)}
                    onMouseLeave={() => setActiveBlock(null)}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.4, ease: "linear" }}
                >
                    {/* 어두운 배경 효과 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 z-10" />

                    {/* 컨텐츠 영역 */}
                    <div className="relative z-20 flex flex-col lg:flex-row w-full h-full items-center justify-between px-4 md:px-10 py-4">
                        {/* 텍스트 영역 */}
                        <div className="w-full lg:w-2/3 flex items-center justify-center mb-4 lg:mb-0">
                            <AnimatePresence>
                                {activeBlock === block.id && (
                                    <motion.div
                                        key={`text-${block.id}`}
                                        className="whitespace-pre-line text-yellow-300 text-center text-lg md:text-xl leading-relaxed"
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

                        {/* 버튼 영역 */}
                        <div className="w-full lg:w-1/3 flex justify-center space-x-4">
                            <AnimatePresence>
                                {activeBlock === block.id && (
                                    <>
                                        <motion.a
                                            key={`btn1-${block.id}`}
                                            href={block.productInfo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-32 md:w-40 px-4 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none text-base md:text-xl text-center flex items-center justify-center"
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
                                            className="w-32 md:w-40 px-4 py-1 border-2 border-yellow-300 bg-black bg-opacity-30 text-yellow-300 rounded-none text-base md:text-xl text-center flex items-center justify-center"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            CBOL 담당자
                                        </motion.a>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}