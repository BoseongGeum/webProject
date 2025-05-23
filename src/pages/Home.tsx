import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useImagePreloader } from "../hooks/useImagePreloader";
import LoadingScreen from "../components/LoadingScreen";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import {Suspense, useRef, useMemo } from "react";

function RadiatingParticles() {
    const meshRef = useRef<THREE.Points>(null!);
    const count = 1000;
    const speeds = useMemo(() => new Float32Array(count).map(() => 0.5 + Math.random() * 1.5), []);
    const geometry = new THREE.BufferGeometry();
    const basePositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);

        basePositions[i3] = x;
        basePositions[i3 + 1] = y;
        basePositions[i3 + 2] = z;

        colors[i3] = 0.5 + Math.random() * 0.5;
        colors[i3 + 1] = 0.5 + Math.random() * 0.5;
        colors[i3 + 2] = 1;
    }

    const positions = basePositions.slice();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.04,
        transparent: true,
        opacity: 0.4,
        vertexColors: true,
        depthWrite: false,
        sizeAttenuation: true
    });

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const speed = speeds[i];
            const minScale = 0.3; // 퍼지는 전 최소 거리
            const scale = minScale + ((time * speed) % 4.7);

            posAttr.array[i3] = basePositions[i3] * scale;
            posAttr.array[i3 + 1] = basePositions[i3 + 1] * scale;
            posAttr.array[i3 + 2] = basePositions[i3 + 2] * scale;
        }

        posAttr.needsUpdate = true;
    });

    return <points ref={meshRef} geometry={geometry} material={material} />;
}

export default function Home() {
    const navigate = useNavigate();

    const [section1Ref, section1InView] = useInView({ threshold: 0.9 });
    const [section2Ref, section2InView] = useInView({ threshold: 0.7 });
    const [section3Ref, section3InView] = useInView({ threshold: 0.7 });

    const images = [
        "/images/main/top.jpeg",
        "/images/main/bottom.png",
        "/images/main/map-usa.png",
        "/images/main/map-kor.png"
    ];

    const loaded = useImagePreloader(images);
    if (!loaded) return <LoadingScreen isWhite={false} />;

    const handleClick = (path: string) => navigate(path);

    const getSectionClass = (inView: boolean) =>
        `h-screen relative overflow-hidden transition-all duration-[1200ms] ease-in-out ${
            inView
                ? 'opacity-100 rounded-none translate-y-0'
                : 'opacity-0 rounded-b-[180px] pointer-events-none -translate-y-[100vh]'
        }`;

    return (
        <div className="w-full min-h-screen scroll-smooth bg-black text-white font-bold">
            <motion.section
                id="section-1"
                ref={section1Ref}
                className={`${getSectionClass(section1InView)} z-[15]`}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <img src="/images/main/top.jpeg" alt="top" className="w-full h-full object-cover absolute inset-0 z-0 transition-opacity duration-[1200ms]" />
                <div className="absolute inset-0 bg-black bg-opacity-55 z-10 transition-all duration-[1200ms]" />
                <motion.div
                    className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-8 sm:px-12 md:px-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
                >
                    <div className="text-2xl sm:text-3xl md:text-4xl text-white mb-2">Welcome to our CBOL corporation</div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-300 mb-2">Multi-faceted company</h2>
                    <p className="text-base sm:text-lg md:text-xl">
                        that supplies products to a wide range of industries including <br />
                        Aerospace, Defense, Space, Energy, Industrial, and Electronics.
                    </p>
                </motion.div>
            </motion.section>

            <motion.section
                id="section-2"
                ref={section2Ref}
                className={`${getSectionClass(section2InView)} -mt-1 sm:-mt-16 md:-mt-[180px] z-[10] min-h-[120vh]`}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/main/bottom.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        backgroundRepeat: "no-repeat"
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
                <motion.div
                    className="relative z-20 h-full flex flex-col justify-end items-end px-8 sm:px-12 md:px-20 pb-52 text-right"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-300">
                        Our worldwide network
                    </h2>
                    <p className="mt-4 text-base sm:text-lg md:text-xl">
                        High quality components, assemblies, raw materials, chemicals,<br />
                        OEM and hard-to-find parts from global suppliers.
                    </p>
                </motion.div>
            </motion.section>

            <motion.section
                id="section-3"
                ref={section3Ref}
                className={`${getSectionClass(section3InView)} -mt-1 sm:-mt-16 md:-mt-[180px] z-[5] min-h-[120vh] flex flex-col justify-center items-center text-center px-8 sm:px-12 md:px-20`}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="absolute inset-0 z-0">
                    <Canvas>
                        <Suspense fallback={null}>
                            <RadiatingParticles />
                            <Preload all />
                        </Suspense>
                    </Canvas>

                    <div className="absolute inset-0 bg-black bg-opacity-60" />
                </div>

                <motion.div
                    className="relative z-10 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2">Explore Our Teams</h2>
                    <p className="text-base sm:text-lg">Click on a region to learn more</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
                    className="relative z-10 flex flex-col md:flex-row w-full justify-center items-center gap-32">
                    {[{
                        bg: '/images/main/map-usa.png',
                        title: 'Defence Business\n미국 본사\nExclusive 독점 제품',
                        path: '/team1'
                    }, {
                        bg: '/images/main/map-kor.png',
                        title: 'Global Sourcing &\nTrading Business\n한국연락사무소',
                        path: '/team2'
                    }].map((card, idx) => (
                        <motion.div
                            key={idx}
                            onClick={() => handleClick(card.path)}
                            whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 20px 40px rgba(255,255,255,0.25)" }}
                            transition={{ duration: 0.8 }}
                            className="card w-[280px] h-[400px] bg-gray-800 border border-white rounded-xl shadow-lg cursor-pointer"
                        >
                            <div className="card-inner">
                                <div
                                    className="card-face bg-center bg-no-repeat bg-contain rounded-xl"
                                    style={{ backgroundImage: `url(${card.bg})` }}
                                />
                                <div className="card-face card-back text-white flex items-center justify-center text-center rounded-xl">
                                    <p className="whitespace-pre-line text-lg sm:text-xl md:text-2xl px-4">
                                        {card.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}
