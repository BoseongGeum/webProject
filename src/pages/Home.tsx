import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';

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
            transition: { duration: 0.8, ease: 'easeOut', delay: delayOrder * 0.25 },
        },
    };
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
    const [phase, setPhase] = useState<'loading' | 'black' | 'curtain1' | 'curtain2' | 'content'>('loading');
    const [refSection2, inViewSection2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [refSection3, inViewSection3] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (!loaded) return;
        setPhase('black');
        const t1 = setTimeout(() => setPhase('curtain1'), 400);
        const t2 = setTimeout(() => setPhase('curtain2'), 1400);
        const t3 = setTimeout(() => setPhase('content'), 3000);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [loaded]);

    if (!loaded) return <LoadingScreen isWhite={false} />;

    const createSteps = (color: string) =>
        Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 0.5 + 0.05,
            bg: color,
            top: `${(100 / 10) * i}%`,
        }));

    const redSteps = createSteps('#3c0d0d');
    const blackSteps = createSteps('#000000');

    const textLines1 = [
        { text: "Welcome to our CBOL corporation", style: "text-2xl sm:text-3xl md:text-4xl font-bold" },
        { text: "Multi-faceted company", style: "text-3xl sm:text-4xl md:text-5xl text-yellow-300 font-bold" },
        { text: "that supplies products to a wide range of industries including", style: "text-base sm:text-lg md:text-xl" },
        { text: "Aerospace, Defense, Space, Energy, Industrial, and Electronics.", style: "text-base sm:text-lg md:text-xl" },
    ];

    const textLines2 = [
        { text: "Our worldwide network", style: "text-3xl sm:text-4xl md:text-5xl text-yellow-300 font-bold" },
        { text: "High quality components, assemblies, raw materials, chemicals,", style: "text-base sm:text-lg md:text-xl text-white mt-4" },
        { text: "OEM and hard-to-find parts from global suppliers.", style: "text-base sm:text-lg md:text-xl text-white" },
    ];

    return (
        <main className="bg-black text-white relative overflow-hidden">
            {/* Loading Curtain Effects */}
            <div className="fixed inset-0 bg-black z-10 pointer-events-none" />
            <div className="fixed top-0 left-0 w-full h-full z-20 pointer-events-none">
                {redSteps.map(step => (
                    <motion.div key={`red-${step.id}`} initial={{ x: '100%' }}
                                animate={phase !== 'loading' && phase !== 'black' ? { x: 0 } : {}}
                                transition={{ duration: 1, delay: step.delay, ease: 'easeInOut' }}
                                className="absolute w-full" style={{ height: '10%', top: step.top, backgroundColor: step.bg }} />
                ))}
            </div>
            <div className="fixed top-0 left-0 w-full h-full z-30 pointer-events-none">
                {blackSteps.map(step => (
                    <motion.div key={`black-${step.id}`} initial={{ x: '100%' }}
                                animate={phase === 'curtain2' || phase === 'content' ? { x: 0 } : {}}
                                transition={{ duration: 1, delay: step.delay, ease: 'easeInOut' }}
                                className="absolute w-full" style={{ height: '10%', top: step.top, backgroundColor: step.bg }} />
                ))}
            </div>

            {phase === 'content' && (
                <>
                    <div className="relative z-50"><Navbar /></div>

                    <div className="relative z-40">
                        {/* Section 1 */}
                        <motion.section
                            className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center"
                            initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                        >
                            <motion.div className="w-full md:w-3/5 flex items-center justify-center p-10" variants={dynamicVariants('left', 0)}>
                                <div className="w-[80%] aspect-[3/2] rounded-xl overflow-hidden shadow-xl border border-gray-800 relative">
                                    <img src="/images/main/top.jpeg" alt="Top Visual" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                            </motion.div>

                            <motion.div className="w-full md:w-2/5 flex flex-col items-center justify-start p-10 space-y-3"
                                        initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                            >
                                {textLines1.map((line, i) => (
                                    <div className="overflow-hidden" key={i}>
                                        <motion.p className={`text-center ${line.style}`}
                                                  variants={{
                                                      hidden: { y: '100%', opacity: 0 },
                                                      visible: { y: '0%', opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: i * 0.2 } },
                                                  }}
                                                  initial="hidden" animate="visible"
                                        >{line.text}</motion.p>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.section>

                        {/* Section 2 */}
                        <section ref={refSection2} className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center">
                            <motion.div className="w-full md:w-2/5 flex items-center justify-end p-10"
                                        initial="hidden" animate={inViewSection2 ? 'visible' : 'hidden'}
                                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                            >
                                <div className="text-center w-full">
                                    {textLines2.map((line, i) => (
                                        <div className="overflow-hidden" key={i}>
                                            <motion.p className={`text-center ${line.style}`}
                                                      variants={{
                                                          hidden: { y: '100%', opacity: 0 },
                                                          visible: {
                                                              y: '0%', opacity: 1,
                                                              transition: { duration: 0.8, ease: 'easeOut', delay: i * 0.2 },
                                                          },
                                                      }}
                                                      initial="hidden" animate={inViewSection2 ? 'visible' : 'hidden'}
                                            >{line.text}</motion.p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div className="w-full md:w-3/5 flex items-center justify-center p-10"
                                        initial="hidden" animate={inViewSection2 ? 'visible' : 'hidden'} variants={dynamicVariants('down', 1)}
                            >
                                <div className="w-[80%] aspect-[3/2] rounded-xl overflow-hidden shadow-xl border border-gray-800 relative">
                                    <img src="/images/main/bottom.jpeg" alt="Bottom Visual" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/10" />
                                </div>
                            </motion.div>
                        </section>

                        {/* Section 3 */}
                        <section ref={refSection3} className="px-6 py-24 bg-black text-white">
                            <motion.div className="text-center mb-16"
                                        initial="hidden" animate={inViewSection3 ? 'visible' : 'hidden'} variants={dynamicVariants('up', 0)}
                            >
                                <h2 className="text-5xl font-semibold text-white tracking-tight">Explore Our Teams</h2>
                                <p className="text-lg text-white mt-4">Click on a region to learn more</p>
                            </motion.div>

                            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                                {[{
                                    title: 'United States HQ',
                                    desc: 'Defense Sector | Exclusive Technology Provider',
                                    img: '/images/main/map-usa.png',
                                    path: '/team1',
                                }, {
                                    title: 'Korea Liaison Office',
                                    desc: 'Sourcing | Manufacturing | Export Supervision',
                                    img: '/images/main/map-kor.png',
                                    path: '/team2',
                                }].map((card, i) => (
                                    <motion.div key={i} onClick={() => navigate(card.path)}
                                                whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.5 }}
                                                initial="hidden" animate={inViewSection3 ? 'visible' : 'hidden'}
                                                variants={dynamicVariants(i % 2 === 0 ? 'left' : 'right', i)}
                                                className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                                    >
                                        <div className="w-full h-80 overflow-hidden">
                                            <img src={card.img} alt={card.title}
                                                 className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="bg-gray-950 border border-gray-700 p-6">
                                            <h3 className="text-2xl font-semibold text-yellow-300 mb-4">{card.title}</h3>
                                            <p className="text-gray-300">{card.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>
                </>
            )}
        </main>
    );
}
