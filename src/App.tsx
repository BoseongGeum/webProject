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

const pageVariants = {
    initial: { y: "100%", rotate: 5 },
    animate: {
        y: "0%",
        rotate: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
        y: "0%",
        opacity: 0.99,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

function AppContent() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [showNavbar, setShowNavbar] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const currentY = container.scrollTop;
            // 100px 이상 아래로 내리면 숨기고, 그 외엔 보이기
            if (currentY > lastScrollY.current && currentY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            lastScrollY.current = currentY;
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* 홈(/) 아닐 때만 네브바 */}
            {!isHome && (
                <motion.div
                    className="fixed top-0 left-0 w-full z-50"
                    initial={{ y: 0 }}
                    animate={{ y: showNavbar ? "0%" : "-100%", pointerEvents: showNavbar ? "auto" : "none" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
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
                        exit="exit"
                        className="absolute inset-0 flex flex-col"
                    >
                        {/* 스크롤 컨테이너 */}
                        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
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
            <AppContent />
        </Router>
    );
}
