import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";
import Navbar from "./components/Navbar";
import PICManagerInfo from "./pages/PICManagerInfo";
import PICProductInfo from "./pages/PICProductInfo";
import QuanticEvansManagerInfo from "./pages/QuanticEvansManagerInfo";
import QuanticEvansProductInfo from "./pages/QuanticEvansProductInfo";
import AuraGenManagerInfo from "./pages/AuraGenManagerInfo";
import AuraGenProductInfo from "./pages/AuraGenProductInfo";
import ContactUs from "./pages/ContactUs";
import { KoreaOffice } from "./pages/KoreaOffice";
import { OurServices } from "./pages/OurServices";

const pageVariants = {
    initial: { y: "100%", rotate: 5, opacity: 0.8 },
    animate: {
        y: "0%",
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
        y: "0%",
        opacity: 0.8,
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};

function AppContent() {
    const location = useLocation();

    const team1Menus = [
        { name: "PIC", path: "/team1/pic" },
        { name: "Quantic Evans", path: "/team1/quanticEvans" },
        { name: "Aura Gen", path: "/team1/auraGen" },
    ];

    const team2Menus = [
        { name: "회사소개", path: "/team2/koreaOffice" },
        { name: "서비스", path: "/team2/ourServices" },
        { name: "Contact", path: "/team2/contactUs" },
    ];

    const isTeam1Page = location.pathname.startsWith("/team1/");

    return (
        <div className="flex flex-col min-h-screen">
            {location.pathname !== "/" && (
                <Navbar menus={isTeam1Page ? team1Menus : team2Menus} />
            )}

                <main className="flex-1 relative bg-[#F0EEEB]">
                    {location.pathname !== "/" && (
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
                    )}
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
