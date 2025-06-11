import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImagePreloader } from '../hooks/useImagePreloader';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';

export default function Home() {
    const navigate = useNavigate();

    const images = [
        '/images/main/top.jpeg',
        '/images/main/bottom.jpeg',
        '/images/main/map-usa.png',
        '/images/main/map-kor.png'
    ];

    const loaded = useImagePreloader(images);
    const [phase, setPhase] = useState<'loading' | 'black' | 'curtain1' | 'curtain2' | 'content'>('loading');

    useEffect(() => {
        if (!loaded) return;
        setPhase('black');
        const timer1 = setTimeout(() => setPhase('curtain1'), 400);
        const timer2 = setTimeout(() => setPhase('curtain2'), 1400);
        const timer3 = setTimeout(() => setPhase('content'), 3000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [loaded]);

    if (!loaded) return <LoadingScreen isWhite={false} />;

    const createSteps = (color: string) => {
        return Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            delay: Math.random() * 0.5 + 0.05,
            bg: color,
            top: `${(100 / 10) * i}%`
        }));
    };

    const redSteps = createSteps('#3c0d0d');
    const blackSteps = createSteps('#000000');

    return (
        <main className="bg-black text-white relative overflow-hidden">
            {/* Persistent Black Background */}
            <div className="fixed inset-0 bg-black z-10 pointer-events-none" />

            {/* Red Curtain Always Mounted */}
            <div className="fixed top-0 left-0 w-full h-full z-20 pointer-events-none">
                {redSteps.map(step => (
                    <motion.div
                        key={`red-${step.id}`}
                        initial={{ x: '100%' }}
                        animate={phase !== 'loading' && phase !== 'black' ? { x: 0 } : {}}
                        transition={{ duration: 1, delay: step.delay, ease: 'easeInOut' }}
                        className="absolute w-full"
                        style={{ height: '10%', top: step.top, backgroundColor: step.bg }}
                    />
                ))}
            </div>

            {/* Black Curtain Always Mounted */}
            <div className="fixed top-0 left-0 w-full h-full z-30 pointer-events-none">
                {blackSteps.map(step => (
                    <motion.div
                        key={`black-${step.id}`}
                        initial={{ x: '100%' }}
                        animate={phase === 'curtain2' || phase === 'content' ? { x: 0 } : {}}
                        transition={{ duration: 1, delay: step.delay, ease: 'easeInOut' }}
                        className="absolute w-full"
                        style={{ height: '10%', top: step.top, backgroundColor: step.bg }}
                    />
                ))}
            </div>

            {/* Navbar appears only when content is ready */}
            <div className={phase === 'content' ? 'relative z-50' : 'hidden'}>
                <Navbar />
            </div>

            {/* Content */}
            {phase === 'content' && (
                <div className="relative z-40">
                    <section className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center">
                        <div className="w-full md:w-3/5 flex items-center justify-center p-10">
                            <div className="w-[80%] aspect-[3/2] rounded-xl overflow-hidden shadow-xl border border-gray-800">
                                <img
                                    src="/images/main/top.jpeg"
                                    alt="Top Visual"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/5 flex items-center justify-start p-10 bg-black">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4">Welcome to our CBOL corporation</div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-300 font-bold mb-4">Multi-faceted company</h2>
                                <p className="text-base sm:text-lg md:text-xl">
                                    that supplies products to a wide range of industries including <br />
                                    Aerospace, Defense, Space, Energy, Industrial, and Electronics.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center">
                        <div className="w-full md:w-2/5 flex items-center justify-end p-10 bg-black">
                            <div className="text-center">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-300 font-bold">
                                    Our worldwide network
                                </h2>
                                <p className="mt-4 text-base sm:text-lg md:text-xl">
                                    High quality components, assemblies, raw materials, chemicals,<br />
                                    OEM and hard-to-find parts from global suppliers.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 flex items-center justify-center p-10">
                            <div className="w-[80%] aspect-[3/2] rounded-xl overflow-hidden shadow-xl border border-gray-800">
                                <img
                                    src="/images/main/bottom.jpeg"
                                    alt="Bottom Visual"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="px-6 py-24 bg-black text-white">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-semibold text-white tracking-tight">Explore Our Teams</h2>
                            <p className="text-lg text-white mt-4">Click on a region to learn more</p>
                        </div>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[{
                                title: 'United States HQ',
                                desc: 'Defense Sector | Exclusive Technology Provider',
                                img: '/images/main/map-usa.png',
                                path: '/team1'
                            }, {
                                title: 'Korea Liaison Office',
                                desc: 'Sourcing | Manufacturing | Export Supervision',
                                img: '/images/main/map-kor.png',
                                path: '/team2'
                            }].map((card, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => navigate(card.path)}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                                >
                                    <div className="w-full h-80 overflow-hidden">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                                        />
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
            )}
        </main>
    );
}
