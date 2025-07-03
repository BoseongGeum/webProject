import React, { useState, useEffect } from "react";
import Stickybar from "../components/Stickybar";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i: number) => ({
        y: '0%',
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeInOut', delay: 0.2 + i * 0.3 },
    }),
};

const paragraphs = [
    [
        "CBOL Corporation은 1987년 미국에서 설립된 기업으로,",
        "항공우주, 방산, 자동차, 산업, 환경, 전자 등 다양한 분야의 국내외 고객에게 고품질 제품을 공급하고 있습니다.",
    ],
    [
        "당사는 프로그램, 산업, 경제, 문화 등 각 분야에 대한 깊이 있는 이해를 바탕으로,",
        "전문 엔지니어 및 영업 전문가들로 구성된 팀을 운영하고 있으며,",
        "다국어 사용이 가능한 글로벌 인재들이 함께하고 있습니다.",
    ],
    [
        "미국 및 해외 전역에 걸친 광범위한 제조사 및 공급망 네트워크를 통해,",
        "희귀 부품, 조립품, 원자재, 화학제품, OEM 부품 등을 경제적인 가격에 안정적으로 공급하고 있습니다.",
        "필요 시, 전자 모니터링 장치를 활용한 PPAP 및 공정 제어 문서도 제공 가능합니다.",
    ],
    [
        "또한, CBOL은 해상·항공·육상 운송 전반에 걸친 물류를 효율적으로 관리하며,",
        "위험물 포장 및 선적, 목재 포장재 IPPC/HT 처리, IATA 문서, 키팅, LTA/JIT/AOG,",
        "수출 라이선스 취득 등 다양한 요구 사항에 맞는 수출 포장 서비스를 제공합니다.",
        "당사의 구매력은 운송 컨테이너 통합을 통해 물류비 절감에도 기여합니다.",
    ],
];


const KoreaOffice = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState<'ABOUT HQ' | 'KOREA OFFICE' | 'ABOUT B'>('ABOUT HQ');

    const [ref1, inView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView1) setActiveSection('ABOUT HQ');
        else if (inView2) setActiveSection('KOREA OFFICE');
        else if (inView3) setActiveSection('ABOUT B');
    }, [inView1, inView2, inView3]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <main className="bg-[#F0EEEB] min-h-screen relative">

            {/* Stickybar */}
            <Stickybar title={activeSection} topOffset={showNavbar ? 52 : 0} />

            <div className="pt-24 px-8 pb-32 leading-relaxed space-y-40">
                <section ref={ref1} className="min-h-screen">
                    {paragraphs.map((group, groupIdx) => (
                        <div key={groupIdx} className={groupIdx === 0 ? "" : "mt-10"}>
                            {group.map((line, lineIdx) => (
                                <div key={lineIdx} className="overflow-hidden">
                                    <motion.p
                                        className={lineIdx === 0 ? "" : "mt-2"}
                                        variants={lineVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        custom={groupIdx * 2 + lineIdx}
                                    >
                                        {line}
                                    </motion.p>
                                </div>
                            ))}
                        </div>
                    ))}
                </section>

                {/* Section 2 */}
                <section ref={ref2} className="min-h-screen">
                    <h2 className="text-2xl font-bold mb-4">ABOUT A</h2>
                    <p>내용을 여기에 채워주세요.</p>
                </section>

                {/* Section 3 */}
                <section ref={ref3} className="min-h-screen">
                    <h2 className="text-2xl font-bold mb-4">ABOUT B</h2>
                    <p>내용을 여기에 채워주세요.</p>
                </section>
            </div>
        </main>
    );
};

export default KoreaOffice;
