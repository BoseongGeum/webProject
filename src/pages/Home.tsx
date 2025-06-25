import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import TiltCard from "../components/TiltCard";

const dynamicVariants = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delayOrder = 0) => {
    const distance = 60;
    const directions = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
    };
    const offset = directions[direction];
    return {
        hidden: { opacity: 0, ...offset },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', delay: delayOrder },
        },
    };
};

const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i: number) => ({
        y: '0%',
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut', delay: 0.8 + i * 0.4 },
    }),
};

export default function Home() {
    const navigate = useNavigate();
    const images = [
        '/images/main/top.jpeg',
        '/images/main/bottom.jpeg',
        '/images/main/map-usa.png',
        '/images/main/map-kor.png',
    ];
    const loaded = useImagePreloader(images);
    const [, setPhase] = useState<'loading' | 'black' | 'curtain1' | 'curtain2' | 'content'>('loading');

    useEffect(() => {
        if (!loaded) return;
        setPhase('black');
        const t1 = setTimeout(() => setPhase('curtain1'), 400);
        const t2 = setTimeout(() => setPhase('curtain2'), 1400);
        const t3 = setTimeout(() => setPhase('content'), 3000);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [loaded]);

    if (!loaded) return <LoadingScreen isWhite={false} />;

    const textLines1 = [
        { text: "Welcome to our CBOL corporation", style: "text-2xl sm:text-3xl md:text-4xl font-bold" },
        { text: "다양한 역량을 갖춘 글로벌 기업", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-300 font-bold" },
        { text: "항공우주, 방위산업, 우주, 에너지, 산업 및 전자 분야 등", style: "text-base sm:text-lg md:text-xl" },
        { text: "다양한 산업 분야에 제품을 공급하고 있습니다.", style: "text-base sm:text-lg md:text-xl" },
    ];

    const textLines2 = [
        { text: "전 세계에 구축된 네트워크", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-300 font-bold" },
        { text: "글로벌 공급처로부터 고품질 부품, 조립품, 원자재,", style: "text-base sm:text-lg md:text-xl text-white mt-4" },
        { text: "화학제품을 비롯해 OEM 및 희귀 부품까지 제공합니다.", style: "text-base sm:text-lg md:text-xl text-white" },
    ];

    return (
        <main
            className="snap-y snap-mandatory overflow-y-scroll h-screen bg-black text-white"
        >
            {/* Navbar */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-50"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <Navbar />
            </motion.div>

            {/* Section 1 */}
            <motion.section
                className="snap-start h-screen flex flex-col md:flex-row items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    className="w-full md:w-3/5 flex items-center justify-center p-10"
                    variants={dynamicVariants('left', 0)}
                >
                    <TiltCard clip className="w-[80%] aspect-[3/2] border border-gray-800 shadow-xl">
                        <img src="/images/main/top.jpeg" alt="Top Visual" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                    </TiltCard>
                </motion.div>

                <motion.div
                    className="w-full md:w-2/5 flex flex-col items-center justify-start p-10 space-y-3"
                >
                    {textLines1.map((line, i) => (
                        <div className="overflow-hidden" key={i}>
                            <motion.p
                                className={`text-center ${line.style}`}
                                initial={{ y: '100%', opacity: 0 }}
                                animate={{ y: '0%', opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 + i * 0.4 }}
                            >
                                {line.text}
                            </motion.p>
                        </div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Section 2 */}
            <motion.section
                className="snap-start h-screen flex flex-col md:flex-row items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.3 } },
                }}
            >
                <motion.div
                    className="w-full md:w-2/5 flex items-center justify-end flex-col p-10 space-y-3"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {textLines2.map((line, i) => (
                        <div className="overflow-hidden" key={i}>
                            <motion.p
                                className={`text-center ${line.style}`}
                                variants={lineVariants}
                                custom={i}
                            >
                                {line.text}
                            </motion.p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="w-full md:w-3/5 flex items-center justify-center p-10"
                    variants={dynamicVariants('right', 0)}
                >
                    <TiltCard className="w-[80%] aspect-[3/2] shadow-xl border border-gray-800 relative bg-black" clip>
                        <img src="/images/main/bottom.jpeg" alt="Bottom Visual" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10" />
                    </TiltCard>
                </motion.div>
            </motion.section>

            {/* Section 3 */}
            <motion.section
                className="snap-start h-screen px-6 py-24 bg-black text-white flex flex-col justify-center relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={dynamicVariants('up', 0)}
            >
                {/* 반원형 흰색 배경 애니메이션 */}
                <motion.div
                    initial={{
                        y: 200,
                        scaleY: 0.2,
                    }}
                    whileInView={{
                        y: 0,
                        scaleX: 1,
                        scaleY: 1,
                        borderTopLeftRadius: "100% 100%",
                        borderTopRightRadius: "100% 100%",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 w-full h-[70vh] bg-[#F0EEEB]"
                />

                {/* 텍스트 콘텐츠 */}
                <motion.div className="text-center mb-16 relative">
                    <h2 className="text-5xl font-semibold text-white tracking-tight">CBOL을 만나보세요</h2>
                    <p className="text-lg text-white mt-4">지도를 클릭하면 자세한 정보를 확인하실 수 있습니다</p>
                </motion.div>

                {/* 지도 콘텐츠 */}
                <motion.div
                    className="relative w-full max-w-xl mx-auto aspect-[4/3]"
                    variants={dynamicVariants('up', 1.0)}
                >
                    {/* 파란 블롭 백그라운드 */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] h-[100%]">
                        <TiltCard
                            className="w-full h-full"
                            clip
                            maxTilt={0}
                            maxTranslate={5}
                        >
                            <div className="w-full h-full bg-[#3A5BA0]" />
                        </TiltCard>
                    </div>

                    {/* 지도 이미지 */}
                    <motion.img
                        src="/images/main/map-kor.png"
                        alt="한국 지도"
                        className="relative w-full h-full object-contain cursor-pointer"
                        onClick={() => navigate('/team2')}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </motion.section>

        </main>
    );
}
