import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import Stickybar from '../components/Stickybar';
import BlobCard from "../components/BlobCard";
import TextCard from "../components/TextCard";
import Footer from "../components/Footer";

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
        transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 + i * 0.3 },
    }),
};

const sectionFade = {
    hidden: { opacity: 0 },                         // 보이지 않고 살짝 아래로
    visible: {
        opacity: 1,                                                // 원래 자리로
        transition: { duration: 0.6, ease: 'easeInOut' }
    }
};

const menus = [
    { name: "회사소개", path: "/team2/koreaOffice" },
    { name: "서비스", path: "/team2/ourServices" },
    { name: "Contact", path: "/team2/contactUs" },
];

export default function Home() {
    const navigate = useNavigate();

    // Main preloader and animation phase
    const images = [
        '/images/main/top.jpeg',
        '/images/main/bottom.jpeg',
        '/images/main/map-kor.png',
        '/images/team2/team2main.png',
        '/images/logo.png',
        '/images/logo-white.png',
        '/images/team2/koreaOffice/koreaOffice1.jpg',
        '/images/team2/koreaOffice/koreaOffice2.avif',
        '/images/team2/koreaOffice/koreaOffice3.png',
        '/images/team2/koreaOffice/koreaOffice4.png',
        '/images/team2/koreaOffice/koreaOffice5.png',
        '/images/team2/koreaOffice/koreaOffice6.png',
        '/images/team2/koreaOffice/koreaOffice7.png',
        '/images/team2/koreaOffice/koreaOffice8.png',
        '/images/team2/ourServices/ourServices1.jpg',
        '/images/team2/ourServices/ourServices2.png',
        '/images/team2/ourServices/ourServices3.png',
        '/images/team2/ourServices/ourServices4.png',
        '/images/team2/ourServices/ourServices5.png',
        '/images/team2/ourServices/ourServices6.png',
        '/images/team2/ourServices/ourServices7.jpg',
        '/images/team2/ourServices/ourServices8.png',
        '/masks/blob-mask.svg',
    ];
    const loaded = useImagePreloader(images);
    const [phase, setPhase] = useState<'loading' | 'black' | 'curtain1' | 'curtain2' | 'content'>('loading');

    useEffect(() => {
        if (!loaded) return;

        // Lenis 기본 init: window 스크롤을 JS로 제어
        const lenis = new Lenis({
            duration: 1.2,                                    // 관성 지속시간 (초)
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 자연스러운 감쇠 곡선
            smoothWheel: true,                                // 휠 스크롤 부드럽게
            syncTouch: true,                                  // 터치 관성 적용
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, [loaded]);

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState<'INTRO'|'GLOBAL'|'NETWORK'|'WELCOME'>('INTRO');

    const [refIntroSection, inViewIntroSection] = useInView({ threshold: 0.5 });
    const [refSection1, inViewSection1] = useInView({ threshold: 0.5 });
    const [refSection2, inViewSection2] = useInView({ threshold: 0.5 });
    const [refSection3, inViewSection3] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inViewSection1)  setActiveSection('GLOBAL');
        else if (inViewSection2) setActiveSection('NETWORK');
        else if (inViewSection3) setActiveSection('WELCOME');
        else if (inViewIntroSection) setActiveSection('INTRO');
    }, [inViewSection1, inViewSection2, inViewSection3, inViewIntroSection]);

    useEffect(() => {
        if (!loaded) return;
        setPhase('black');
        const t1 = setTimeout(() => setPhase('curtain1'), 200);
        const t2 = setTimeout(() => setPhase('curtain2'), 1200);
        const t3 = setTimeout(() => setPhase('content'), 2200);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [loaded]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // 아래로 스크롤: 네브바 숨김
                setShowNavbar(false);
            } else {
                // 위로 스크롤: 네브바 보이기
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

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
        <main
            className="bg-[#F0EEEB] text-black">

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
                    <motion.div key={`white-${step.id}`} initial={{ x: '100%' }}
                                animate={(phase === 'curtain2' || phase === 'content') ? { x: 0 } : {}}
                                transition={{ duration: 0.8, delay: step.delay, ease: 'easeInOut' }}
                                className="absolute w-full" style={{ height: '10%', top: step.top, backgroundColor: step.bg }} />
                ))}
            </div>

            {/* Main Content */}
            {phase === 'content' && (
                <div className="relative z-40">
                    {/* Navbar */}
                    <motion.div
                        className="fixed top-0 left-0 w-full z-50"
                        initial={{ y: -57, opacity: 1 }}
                        animate={{
                            y: showNavbar ? 0 : -57,
                            opacity: 1,
                            pointerEvents: showNavbar ? 'auto' : 'none', // 클릭 방지
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Navbar menus={menus}/>
                    </motion.div>

                    {/* Intro Section */}
                    <motion.section
                        ref={refIntroSection}
                        className="h-screen flex flex-col lg:flex-row items-center justify-center pt-10 text-red-950 font-bold"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="lg:w-2/3 w-full h-full flex p-10"
                            variants={dynamicVariants('left', 0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/team2/team2main.png"
                                alt="Team2 Banner"
                                className="max-w-full max-h-full object-contain"
                            />
                        </motion.div>
                        <motion.div
                            className="lg:w-1/3 w-full flex flex-col p-16"
                            variants={dynamicVariants('right', 0.8)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/logo.png"
                                alt="CBOL Logo"
                                className="w-40 sm:w-60 md:w-80 lg:w-96 mb-4"
                            />
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug text-center lg:text-left">
                                생각과 제조를<br />연결하다
                            </h1>
                        </motion.div>
                    </motion.section>

                    <Stickybar title={activeSection} topOffset={showNavbar ? 52 : 0} />

                    {/* Section 1 */}
                    <motion.section
                        ref={refSection1}
                        className="h-screen flex flex-col md:flex-row items-center justify-center pt-28"
                        variants={sectionFade}
                        initial="hidden"
                        animate={inViewSection1 ? 'visible' : 'hidden'}
                    >
                        <motion.div
                            className="w-full md:w-3/5 flex items-center justify-center pt-60"
                            variants={dynamicVariants('left', 0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <TextCard
                                className="w-full aspect-[9/8]"
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

                        <motion.div className="w-full md:w-2/5 flex items-center justify-center flex-col pr-10 space-y-3">
                            {textLines1.map((line, i) => (
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
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section
                        ref={refSection2}
                        className="snap-start h-screen flex flex-col md:flex-row items-center justify-center pt-28"
                        variants={sectionFade}
                        initial="hidden"
                        animate={inViewSection2 ? 'visible' : 'hidden'}
                    >
                        <motion.div className="w-full md:w-2/5 flex items-center justify-center flex-col pl-10 space-y-3">
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
                            className="w-full md:w-3/5 flex pt-60 items-center justify-center"
                            variants={dynamicVariants('right', 0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <TextCard className="w-full aspect-[9/8]" maskText="CBOL">
                                <img src="/images/main/bottom.jpeg" alt="Bottom Visual" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/10" />
                            </TextCard>
                        </motion.div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section
                        ref={refSection3}
                        className="h-screen px-6 py-24 bg-[#F0EEEB] text-black flex flex-col justify-center relative overflow-hidden pt-28"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={dynamicVariants('up', 0)}
                    >
                        {/* 배경 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 w-full h-[70vh] bg-black"
                        />

                        {/* 텍스트 */}
                        <motion.div className="text-center relative">
                            <h2 className="text-5xl font-bold text-black tracking-tight">CBOL을 만나보세요</h2>
                            <p className="text-lg text-black font-bold mt-4">지도를 클릭하면 자세한 정보를 확인하실 수 있습니다</p>
                        </motion.div>

                        {/* 지도 */}
                        <motion.div
                            className="relative w-full max-w-xl mx-auto aspect-[4/3]"
                            variants={dynamicVariants('up', 1.0)}
                        >
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] h-[100%]">
                                <BlobCard className="w-full h-full" clip maxTilt={0} maxTranslate={5}>
                                    <div className="w-full h-full bg-[#3A5BA0]" />
                                </BlobCard>
                            </div>
                            <motion.img
                                src="/images/main/map-kor.png"
                                alt="한국 지도"
                                className="relative w-full h-full object-contain cursor-pointer"
                                onClick={() => navigate('/team2/koreaOffice')}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                        <Footer />
                    </motion.section>
                </div>
            )}
        </main>
    );
}
