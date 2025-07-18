import React from "react";
import { motion } from "framer-motion";
// import { useImagePreloader } from "../hooks/useImagePreloader";

type Props = {
    description: string[][];
    bgImage: string;
};

const lineVariants = {
    hidden: { y: '100%' },
    visible: () => ({
        y: '0%',
        transition: { duration: 0.6, ease: 'easeInOut' },
    }),
};

const ServiceDetailsPage: React.FC<Props> = ({ description, bgImage }) => {
    // const loaded = useImagePreloader(images);

    return (
        <main className="bg-[#F0EEEB]">
            <div className="grid grid-cols-2 px-16 pt-24 pb-8">
                {/* 왼쪽 이미지 */}
                <div className="h-full w-full pr-8 overflow-hidden">
                    <img
                        src={bgImage}
                        alt="Section illustration"
                        className="h-full object-cover object-right-top"
                    />
                </div>

                <div className="w-full h-full pt-24 pl-8">
                    <div className="bg-red-950 w-28 border-2 border-red-950" />
                    {/* 오른쪽 텍스트 */}
                    <div className="pt-12 pb-8 text-2xl leading-relaxed items-start">
                        {description.map((group, gIdx) => (
                            <div
                                key={gIdx}
                                className={`${gIdx > 0 ? "mt-10" : ""} space-y-2`}
                            >
                                {group.map((sentence, sIdx) => (
                                    <div key={sIdx} className="overflow-hidden">
                                        <motion.p
                                            variants={lineVariants}
                                            className={`${gIdx === 0 ? "text-6xl font-bold" : ""}`}
                                        >
                                            {sentence}
                                        </motion.p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceDetailsPage;