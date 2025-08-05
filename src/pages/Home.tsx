import { motion } from 'framer-motion';
import {useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import Stickybar from '../components/Stickybar';
import Footer from "../components/Footer";
import {MENUS} from "../constants/menus";

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

// const lineVariants = {
//     hidden: {
//         y: '20%',
//         opacity: 0,
//     },
//     visible: () => ({
//         y: '0%',
//         opacity: 1,
//         transition: { duration: 0.6, ease: 'easeInOut' },
//     }),
// };

const sectionFade = {
    hidden: { opacity: 0 },                         // 보이지 않고 살짝 아래로
    visible: {
        opacity: 1,                                                // 원래 자리로
        transition: { duration: 0.6, ease: 'easeInOut' }
    }
};

export default function Home() {
    // Main preloader and animation phase
    const images = [
        '/images/main/main.png',
        '/images/main/textImage.png',
        '/images/logo.png',
        '/images/logoKorea.png',
        '/images/logo-white.png',
        '/images/koreaOffice/greeting1.jpg',
        '/images/koreaOffice/greeting2.png',
        '/images/koreaOffice/partnerships.png',
        '/images/ourServices/services1.jpg',
        '/images/ourServices/serviceDetails1.jpg',
        '/images/ourServices/serviceDetails2.jpg',
        '/images/ourServices/serviceDetails3.jpg',
        '/images/ourServices/serviceDetails4.png',
    ];
    const { loaded, progress } = useImagePreloader(images);
    const [phase, setPhase] = useState<'loading' | 'black' | 'curtain1' | 'curtain2' | 'content'>('loading');

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState<'GLOBAL'|'NETWORK'|'WELCOME'>('WELCOME');

    const [refIntroSection, inViewIntroSection] = useInView({ threshold: 0.5 });
    const [refSection1, inViewSection1] = useInView({ threshold: 0.5 });
    const [refSection2, inViewSection2] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inViewSection1)  setActiveSection('GLOBAL');
        else if (inViewSection2) setActiveSection('NETWORK');
        else if (inViewIntroSection) setActiveSection('WELCOME');
    }, [inViewSection1, inViewSection2, inViewIntroSection]);

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

    if (!loaded) return <LoadingScreen isWhite={true} progress={progress} />;

    const createSteps = (color: string) =>
        Array.from({ length: 11 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 0.5 + 0.05,
            bg: color,
            top: `${(100 / 11) * i}%`,
        }));

    const redSteps = createSteps('#3c0d0d');
    const whiteSteps = createSteps('#F0EEEB');

    const textLines1 = [
        { text: "Welcome to our CBOL corporation", style: "text-2xl sm:text-3xl md:text-4xl font-bold" },
        { text: "CBOL Corporation은", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-bold mt-4" },
        { text: "다양한 역량을 갖춘 글로벌 기업으로,", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-bold" },
        { text: "항공우주, 방위산업, 우주, 에너지, 산업 및 전자 분야 등", style: "text-base sm:text-lg md:text-xl font-bold mt-4" },
        { text: "여러 분야에 걸쳐 고품질의 제품과 솔루션을 제공합니다.", style: "text-base sm:text-lg md:text-xl font-bold" },
        { text: "저희 한국 사무소는 OEM 제품 핵심 제조 거점으로,", style: "text-base sm:text-lg md:text-xl font-bold mt-4" },
        { text: "글로벌 품질 기준을 충족하는 생산 공정과 첨단 기술력을 통해", style: "text-base sm:text-lg md:text-xl font-bold" },
        { text: "본사의 혁신적 비전을 실현하고", style: "text-base sm:text-lg md:text-xl font-bold" },
        { text: "다양한 산업군의 성장을 함께 이끌겠습니다.", style: "text-base sm:text-lg md:text-xl font-bold" },
    ];

    const textLines2 = [
        { text: "전 세계에 구축된", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-bold" },
        { text: "글로벌 공급 네트워크", style: "text-2xl sm:text-3xl md:text-4xl text-yellow-500 font-bold" },
        { text: "한국과 중국뿐만 아니라", style: "text-base sm:text-lg md:text-xl text-black font-bold mt-4" },
        { text: "글로벌 제조 및 공급 파트너 네트워크를 바탕으로,", style: "text-base sm:text-lg md:text-xl text-black font-bold" },
        { text: "고품질의 부품, 조립품, 원자재, 화학제품 등", style: "text-base sm:text-lg md:text-xl text-black font-bold" },
        { text: "안정적으로 고객에게 one-stop solution을 제안합니다.", style: "text-base sm:text-lg md:text-xl text-black font-bold" },
        { text: "다양한 산업군의 까다로운 요구에도 유연하게 대응하며,", style: "text-base sm:text-lg md:text-xl text-black font-bold mt-4" },
        { text: "전 세계 고객에게 신뢰할 수 있는 공급 솔루션을 제공하겠습니다.", style: "text-base sm:text-lg md:text-xl text-black font-bold" },
    ];

    return (
        <main className="bg-[#F0EEEB] text-black">

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
                        exit={{
                            y: -57,
                            opacity: 0,
                            transition: { duration: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <Navbar menus={MENUS}/>
                    </motion.div>

                    {/* Intro Section */}
                    <section
                        ref={refIntroSection}
                        className="container mx-auto h-screen flex flex-col lg:flex-row items-center justify-center pt-10 text-red-950 font-bold space-x-28"
                    >
                        <motion.div
                            className="lg:w-2/3 w-full h-full flex"
                            variants={dynamicVariants('left', 0.4)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/main/main.png"
                                alt="Team2 Banner"
                                className="max-w-full max-h-full object-contain"
                            />
                        </motion.div>
                        <motion.div
                            className="lg:w-1/3 w-full flex flex-col"
                            variants={dynamicVariants('right', 0.8)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <img
                                src="/images/logoKorea.png"
                                alt="CBOL Logo"
                                className="w-0 sm:w-60 md:w-80 lg:w-96 mb-8"
                            />
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug text-center lg:text-left">
                                기술의 가치를,
                                <br />
                                글로벌 시장으로
                            </h1>
                        </motion.div>
                    </section>

                    <Stickybar title={activeSection} topOffset={showNavbar ? 55 : 0} />

                    {/* Section 1 */}
                    <motion.section
                        ref={refSection1}
                        className="container mx-auto h-screen flex flex-col md:flex-row items-center justify-center space-x-12 pt-28"
                        variants={sectionFade}
                        initial="hidden"
                        animate={inViewSection1 ? 'visible' : 'hidden'}
                    >
                        <div className="w-3/5">
                            <img src="/images/main/text1.png" alt="Top Visual" className="w-full h-full" />
                        </div>

                        <div className="w-2/5 flex flex-col space-y-3">
                            {textLines1.map((line, i) => (
                                <div className="overflow-hidden" key={i}>
                                    <p
                                        className={`text-end ${line.style}`}
                                    >
                                        {line.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section
                        ref={refSection2}
                        className="container mx-auto snap-start h-screen flex flex-col md:flex-row items-center justify-center"
                        variants={sectionFade}
                        initial="hidden"
                        animate={inViewSection2 ? 'visible' : 'hidden'}
                    >
                        <div className="w-full md:w-2/5 flex flex-col text-start space-y-3">
                            {textLines2.map((line, i) => (
                                <div className="overflow-hidden" key={i}>
                                    <p
                                        className={`text-start ${line.style}`}
                                    >
                                        {line.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="w-full md:w-3/5 flex items-center justify-center">
                            <img src="/images/main/text2.png" alt="Bottom Visual" className="w-full h-full" />
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <section className="h-full text-black flex flex-col justify-center relative overflow-hidden pt-28">
                        <Footer />
                    </section>
                </div>
            )}
        </main>
    );
}
