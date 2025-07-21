// src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Home from "./pages/Home";
import PICManagerInfo from "./pages/PICManagerInfo";
import QuanticEvansManagerInfo from "./pages/QuanticEvansManagerInfo";
import AuraGenManagerInfo from "./pages/AuraGenManagerInfo";
import ContactUs from "./pages/ContactUs";
import KoreaOffice from "./pages/KoreaOffice";
import OurServices from "./pages/OurServices";

import Navbar from "./components/Navbar";
import { MENUS } from "./constants/menus";
import ScrollToTop from "./components/ScrollToTop";
import Lenis from "@studio-freight/lenis";

const pageVariants = {
    initial: { y: "100%", rotate: 5 },
    animate: {
        y: "57px",
        rotate: 0,
        transition: { duration: 1.2, ease: [0.36, 1, 0.22, 1] },
    },
    exit: {
        y: "57px",
        opacity: 0.99,
        transition: { duration: 1.2, ease: [0.36, 1, 0.22, 1] },
    },
};

function AppContent() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY.current && currentY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* 홈(/) 아닐 때만 네브바 */}
            {!isHome && (
                <motion.div
                    className="fixed top-0 left-0 w-full z-50"
                    animate={{
                        y: showNavbar ? 0 : -57,
                        opacity: 1,
                        pointerEvents: showNavbar ? 'auto' : 'none', // 클릭 방지
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <Navbar menus={MENUS} />
                </motion.div>
            )}

            <main className="flex-1 relative bg-[#F0EEEB]">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={location.pathname}
                        variants={pageVariants}
                        initial={isHome ? false : "initial"}
                        animate={isHome ? false : "animate"}
                        exit={isHome ? {
                            y: "0%",
                            opacity: 0.99,
                            transition: { duration: 1.2, ease: [0.36, 1, 0.22, 1] },
                        } : "exit"}
                        className="absolute inset-0 flex flex-col"
                    >
                        {/* 스크롤 컨테이너 */}
                        <div className="flex-1">
                            <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home />} />
                                <Route path="/team1/picManagerInfo" element={<PICManagerInfo />} />
                                <Route path="/team1/quanticEvansManagerInfo" element={<QuanticEvansManagerInfo />} />
                                <Route path="/team1/auraGenManagerInfo" element={<AuraGenManagerInfo />} />
                                <Route path="/koreaOffice" element={<KoreaOffice />} />
                                <Route path="/ourServices" element={<OurServices />} />
                                <Route path="/contactUs" element={<ContactUs />} />
                            </Routes>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppContent />
        </Router>
    );
}
