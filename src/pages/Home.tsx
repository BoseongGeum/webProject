import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import BlobCard from "../components/BlobCard";
import TextCard from "../components/TextCard";

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
            transition: { duration: 0.8, ease: 'easeInOut', delay: delayOrder },
        },
    };
};

const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i: number) => ({
        y: '0%',
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeInOut', delay: 0.4 + i * 0.4 },
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
    const [phase, setPhase] = useState<'loading' | 'black' | 'curtain1' | 'curtain2' | 'intro' | 'content'>('loading');
    const [introGone, setIntroGone] = useState(false);
    const [isStartHovering, setIsStartHovering] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (!loaded) return;
        setPhase('black');
        const t1 = setTimeout(() => setPhase('curtain1'), 200);
        const t2 = setTimeout(() => setPhase('curtain2'), 1200);
        const t3 = setTimeout(() => setPhase('intro'), 2200);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [loaded]);

    useEffect(() => {
        // phase가 'intro' 상태가 아닐 땐 아무것도 안 함
        if (phase !== 'intro') return;

        // START 클릭 시 퇴장 애니메이션
        if (introGone) {
            controls.start({
                x: 0,
                y: '-100%',
                transition: { duration: 0.8, ease: 'easeInOut' },
            });
            return;
        }

        // START 버튼에 hover 중일 때
        if (isStartHovering) {
            controls.start({
                x: 0,
                y: '-10%',              // 원하시는 hover 오프셋으로 조정
                transition: { duration: 0.6, ease: 'easeInOut' },
            });
        } else {
            // hover 해제 시 원위치
            controls.start({
                x: 0,
                y: 0,
                transition: { duration: 0.6, ease: 'easeInOut' },
            });
        }
    }, [phase, isStartHovering, introGone, controls]);

    useEffect(() => {
        if (phase === 'intro') {
            console.log('[Home] phase=intro → entrance animation 시작');
            controls.start({
                x: 0,
                y: 0,
                transition: { duration: 0.8, ease: 'easeInOut' },
            });
        }
    }, [phase, controls]);

    if (!loaded) return <LoadingScreen isWhite={true} />;

    const createSteps = (color: string) =>
        Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 0.5 + 0.05,
            bg: color,
            top: `${(100 / 10) * i}%`,
        }));

    const redSteps = createSteps('#3c0d0d');
    const whiteSteps = createSteps('#F0EEEB');

    const textLines1 = [
        { text: "Welcome to our CBOL corporation", style: "text-2xl sm:text-3xl md:text-4xl font-bold" },
        { text: "다양한 역량을 갖춘 글로벌 기업", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-bold" },
        { text: "항공우주, 방위산업, 우주, 에너지, 산업 및 전자 분야 등", style: "text-base sm:text-lg md:text-xl font-bold" },
        { text: "다양한 산업 분야에 제품을 공급하고 있습니다.", style: "text-base sm:text-lg md:text-xl font-bold" },
    ];

    const textLines2 = [
        { text: "전 세계에 구축된 네트워크", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-bold" },
        { text: "글로벌 공급처로부터 고품질 부품, 조립품, 원자재,", style: "text-base sm:text-lg md:text-xl text-black font-bold mt-4" },
        { text: "화학제품을 비롯해 OEM 및 희귀 부품까지 제공합니다.", style: "text-base sm:text-lg md:text-xl text-black font-bold" },
    ];

    return (
        <main className="snap-y snap-mandatory overflow-y-scroll h-screen bg-[#F0EEEB] text-black">

            {/* Curtains */}
            <div className="fixed inset-0 bg-[#F0EEEB] z-10 pointer-events-none" />
            <div className="fixed top-0 left-0 w-full h-full z-20 pointer-events-none">
                {redSteps.map(step => (
                    <motion.div key={`red-${step.id}`} initial={{ x: '100%' }}
                                animate={(phase === 'curtain1' || phase === 'curtain2') ? { x: 0 } : {}}
                                transition={{ duration: 0.8, delay: step.delay, ease: 'easeInOut' }}
                                className="absolute w-full" style={{ height: '10%', top: step.top, backgroundColor: step.bg }} />
                ))}
            </div>
            <div className="fixed top-0 left-0 w-full h-full z-20 pointer-events-none">
                {whiteSteps.map(step => (
                    <motion.div key={`black-${step.id}`} initial={{ x: '100%' }}
                                animate={(phase === 'curtain2' || phase === 'intro') ? { x: 0 } : {}}
                                transition={{ duration: 0.8, delay: step.delay, ease: 'easeInOut' }}
                                className="absolute w-full" style={{ height: '10%', top: step.top, backgroundColor: step.bg }} />
                ))}
            </div>

            {/* Intro Frame */}
            {phase === 'intro' && (
                <motion.div
                    initial={{ x: '100%', y: 0 }}
                    animate={controls}
                    className="fixed inset-0 z-50 bg-red-900 pt-4 pb-4 flex flex-col"
                >
                <div className="w-full h-10 overflow-hidden relative mb-4">
                        {/* 배경 이미지 A */}
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            style={{
                                backgroundImage: `url("/images/favicon.png")`,
                                backgroundRepeat: 'repeat-x',
                                backgroundSize: '120px auto',
                                backgroundPosition: 'top',
                                animation: 'scrollLoop 10s linear infinite',
                            }}

                        />

                        {/* 배경 이미지 B (연결용) */}
                        <div
                            className="absolute top-0 left-full w-full h-full"
                            style={{
                                backgroundImage: `url("/images/favicon.png")`,
                                backgroundRepeat: 'repeat-x',
                                backgroundSize: '120px auto',
                                backgroundPosition: 'top',
                                animation: 'scrollLoop 10s linear infinite',
                            }}

                        />
                    </div>

                    {/* 흰색 콘텐츠 박스 */}
                    <div className="flex-1 bg-[#F0EEEB] flex flex-col lg:flex-row font-bold overflow-hidden">
                        {/* 좌측 이미지 */}
                        <div
                            className="lg:w-2/3 w-full h-full flex flex-col"
                        >
                            <div className="flex-1 flex items-center justify-center min-h-0 py-4">
                                <img
                                    src="/images/team2/team2main.png"
                                    alt="Team2 Banner"
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* 우측 로고 + 텍스트 */}
                        <div className="lg:w-1/3 w-full h-auto lg:h-full flex flex-col items-center justify-center text-red-950">
                            <motion.img
                                src="/images/logo.png"
                                alt="CBOL Logo"
                                className="w-40 sm:w-60 md:w-80 lg:w-96 h-auto mb-4 lg:mb-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                            />
                            <motion.h1
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug text-center lg:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.5 }}
                            >
                                생각과 제조를<br />연결하다
                            </motion.h1>
                        </div>
                    </div>

                    {/* 하단 바 중앙 START 버튼 */}
                    <div className="w-full flex justify-center mt-4">
                        <motion.button
                            onMouseEnter={() => setIsStartHovering(true)}
                            onMouseLeave={() => setIsStartHovering(false)}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIntroGone(true)}
                            className="text-black text-xl font-bold border-2 border-white px-6 py-2 rounded-full"
                        >
                            START
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {/* Main Content */}
            {(phase === 'intro' || phase === 'content') && (
                <div className="relative z-40">
                    {/* Navbar */}
                    <motion.div
                        className="relative"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Navbar />
                    </motion.div>

                    {/* Section 1 */}
                    <motion.section className="snap-start h-screen flex flex-col md:flex-row items-center justify-center">
                        <motion.div
                            className="w-full md:w-3/5 flex items-center justify-center p-10"
                            variants={dynamicVariants('left', 1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <TextCard
                                className="w-[80%] aspect-[3/2]"
                                maskText="CBOL"
                                fontSize={0.38}
                                fontWeight={900}
                                letterSpacing="-0.05"
                                strokeWidth={0.02}
                                verticalScale={2.2}
                            >
                                <img src="/images/main/top.jpeg" alt="Top Visual" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20" />
                            </TextCard>
                        </motion.div>

                        <motion.div className="w-full md:w-2/5 flex flex-col items-center justify-start p-10 space-y-3">
                            {textLines1.map((line, i) => (
                                <div className="overflow-hidden" key={i}>
                                    <motion.p
                                        className={`text-center ${line.style}`}
                                        initial={{ y: '100%', opacity: 0 }}
                                        animate={{ y: '0%', opacity: 1 }}
                                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 + i * 0.4 }}
                                    >
                                        {line.text}
                                    </motion.p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section className="snap-start h-screen flex flex-col md:flex-row items-center justify-center">
                        <motion.div className="w-full md:w-2/5 flex items-center justify-end flex-col p-10 space-y-3">
                            {textLines2.map((line, i) => (
                                <div className="overflow-hidden" key={i}>
                                    <motion.p
                                        className={`text-center ${line.style}`}
                                        variants={lineVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
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
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <TextCard className="w-[80%] aspect-[3/2]" maskText="CBOL">
                                <img src="/images/main/bottom.jpeg" alt="Bottom Visual" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/10" />
                            </TextCard>
                        </motion.div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section
                        className="snap-start h-screen px-6 py-24 bg-[#F0EEEB] text-black flex flex-col justify-center relative overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dynamicVariants('up', 0)}
                    >
                        {/* 배경 */}
                        <motion.div
                            initial={{ y: 200, scaleY: 0.2 }}
                            whileInView={{
                                y: 0, scaleX: 1, scaleY: 1,
                                borderTopLeftRadius: "100% 100%",
                                borderTopRightRadius: "100% 100%",
                            }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 w-full h-[70vh] bg-black"
                        />

                        {/* 텍스트 */}
                        <motion.div className="text-center mb-16 relative">
                            <h2 className="text-5xl font-bold text-black tracking-tight">CBOL을 만나보세요</h2>
                            <p className="text-lg text-black font-bold mt-4">지도를 클릭하면 자세한 정보를 확인하실 수 있습니다</p>
                        </motion.div>

                        {/* 지도 */}
                        <motion.div className="relative w-full max-w-xl mx-auto aspect-[4/3]" variants={dynamicVariants('up', 1.0)}>
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] h-[100%]">
                                <BlobCard className="w-full h-full" clip maxTilt={0} maxTranslate={5}>
                                    <div className="w-full h-full bg-[#3A5BA0]" />
                                </BlobCard>
                            </div>
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
                </div>
            )}
        </main>
    );
}
