import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import PICManagerInfo from "./pages/PICManagerInfo";
import QuanticEvansManagerInfo from "./pages/QuanticEvansManagerInfo";
import AuraGenManagerInfo from "./pages/AuraGenManagerInfo";
import ContactUs from "./pages/ContactUs";
import KoreaOffice from "./pages/KoreaOffice";
import OurServices from "./pages/OurServices";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import {MENUS} from "./constants/menus";
import {lenis} from "./hooks/lenis";

const pageVariants = {
    initial: { y: "100%", rotate: 5 },
    animate: {
        y: "0%",
        rotate: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
        y: "0%",
        opacity: 0.9,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

function AppContent() {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const isHome = location.pathname === "/";

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

    const { pathname } = useLocation();

           // 1) 브라우저 자동 복원 비활성화 (한 번만)
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }}, []);

           // 2) 페이지 전환 시 Lenis 를 즉시 최상단으로
    useEffect(() => {
        lenis.scrollTo(0, { immediate: true });
        }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* 공통 네브바 */}
            {!isHome && (
                <motion.div
                    className="fixed top-0 left-0 w-full z-50"
                    initial={{ y: 0 }}
                    animate={{
                        y: showNavbar ? 0 : -57,
                        pointerEvents: showNavbar ? 'auto' : 'none',
                    }}
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
                        className="absolute inset-0"
                    >
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/team1/picManagerInfo" element={<PICManagerInfo />}/>
                            <Route path="/team1/quanticEvansManagerInfo" element={<QuanticEvansManagerInfo />}/>
                            <Route path="/team1/auraGenManagerInfo" element={<AuraGenManagerInfo />}/>
                            <Route path="/koreaOffice" element={<KoreaOffice />}/>
                            <Route path="/ourServices" element={<OurServices />}/>
                            <Route path="/contactUs" element={<ContactUs />}/>
                        </Routes>
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
