import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";
import PICManagerInfo from "./pages/PICManagerInfo";
import PICProductInfo from "./pages/PICProductInfo";
import QuanticEvansManagerInfo from "./pages/QuanticEvansManagerInfo";
import QuanticEvansProductInfo from "./pages/QuanticEvansProductInfo";
import AuraGenManagerInfo from "./pages/AuraGenManagerInfo";
import AuraGenProductInfo from "./pages/AuraGenProductInfo";
import ContactUs from "./pages/ContactUs";
import KoreaOffice from "./pages/KoreaOffice";
import { OurServices } from "./pages/OurServices";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Lenis from "@studio-freight/lenis";

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

const menus = [
    { name: "회사소개", path: "/team2/koreaOffice" },
    { name: "서비스", path: "/team2/ourServices" },
    { name: "Contact", path: "/team2/contactUs" },
];

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

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* 공통 네브바 */}
            {!isHome && (
                <motion.div
                    className="fixed top-0 left-0 w-full z-50"
                    initial={{ y: -57, opacity: 1 }}
                    animate={{
                        y: showNavbar ? 0 : -57,
                        opacity: 1,
                        pointerEvents: showNavbar ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <Navbar menus={menus} />
                </motion.div>
            )}

                <main className="flex-1 relative bg-[#F0EEEB]">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={location.pathname}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0"
                    >
                        <Routes location={location} key={location.pathname}>
                            <Route path="/team1" element={<Team1 />} />
                            <Route
                                path="/team1/picProductInfo"
                                element={<PICProductInfo />}
                            />
                            <Route
                                path="/team1/picManagerInfo"
                                element={<PICManagerInfo />}
                            />
                            <Route
                                path="/team1/quanticEvansProductInfo"
                                element={<QuanticEvansProductInfo />}
                            />
                            <Route
                                path="/team1/quanticEvansManagerInfo"
                                element={<QuanticEvansManagerInfo />}
                            />
                            <Route
                                path="/team1/auraGenProductInfo"
                                element={<AuraGenProductInfo />}
                            />
                            <Route
                                path="/team1/auraGenManagerInfo"
                                element={<AuraGenManagerInfo />}
                            />
                            <Route path="/team2" element={<Team2 />} />
                            <Route
                                path="/team2/koreaOffice"
                                element={<KoreaOffice />}
                            />
                            <Route
                                path="/team2/ourServices"
                                element={<OurServices />}
                            />
                            <Route
                                path="/team2/contactUs"
                                element={<ContactUs />}
                            />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                    </Routes>
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
