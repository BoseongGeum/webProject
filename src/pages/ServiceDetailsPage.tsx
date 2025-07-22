import React from "react";
import { motion } from "framer-motion";
// import { useImagePreloader } from "../hooks/useImagePreloader";

type Props = {
    description: string[];
    bgImage: string;
};

const lineVariants = {
    hidden: {
        y: '20%',
        opacity: 0,
    },
    visible: () => ({
        y: '0%',
        opacity: 1,
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

                <div className="w-full h-full pt-12 pl-8">
                    <div className="bg-red-950 w-32 border-2 border-red-950" />
                    {/* 오른쪽 텍스트 */}
                    <div className="py-8 text-2xl leading-relaxed items-start">
                        {description.map((sentence, idx) => (
                            <div key={idx} className="overflow-hidden">
                                <motion.p
                                    variants={lineVariants}
                                    className={`${idx === 0 ? "text-6xl font-bold mb-8" : ""}`}
                                >
                                    {sentence}
                                </motion.p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceDetailsPage;