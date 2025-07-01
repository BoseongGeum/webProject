import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import Footer from "./components/Footer";

function AppContent() {
    const location = useLocation();

    const team1Menus = [
        { name: "PIC", path: "/team1/pic" },
        { name: "Quantic Evans", path: "/team1/quanticEvans" },
        { name: "Aura Gen", path: "/team1/auraGen" },
    ];

    const team2Menus = [
        { name: "CBOL Korea Office", path: "/team2/koreaOffice" },
        { name: "Our Services", path: "/team2/ourServices" },
        { name: "Contact Us", path: "/team2/contactUs" },
    ];

    const isTeam1Page = location.pathname.startsWith("/team1/");
    const isTeam2Page = location.pathname.startsWith("/team2/");
    const isNotFooterPage = location.pathname.startsWith("/team2/koreaOffice") || location.pathname.startsWith("/team2/ourServices");
    const isMainNavbarPage = isTeam1Page || isTeam2Page || location.pathname.startsWith("/team2");

    return (
        <div className="flex flex-col min-h-screen">
            {/* 네브바 분기 */}
            {location.pathname !== '/' && (
                <Navbar menus={isTeam1Page ? team1Menus : team2Menus} />
            )}

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team1" element={<Team1 />} />
                    <Route path="/team1/picProductInfo" element={<PICProductInfo />} />
                    <Route path="/team1/picManagerInfo" element={<PICManagerInfo />} />
                    <Route path="/team1/quanticEvansProductInfo" element={<QuanticEvansProductInfo />} />
                    <Route path="/team1/quanticEvansManagerInfo" element={<QuanticEvansManagerInfo />} />
                    <Route path="/team1/auraGenProductInfo" element={<AuraGenProductInfo />} />
                    <Route path="/team1/auraGenManagerInfo" element={<AuraGenManagerInfo />} />
                    <Route path="/team2" element={<Team2 />} />
                    <Route path="/team2/koreaOffice" element={<KoreaOffice />} />
                    <Route path="/team2/ourServices" element={<OurServices />} />
                    <Route path="/team2/contactUs" element={<ContactUs />} />
                </Routes>
            </main>

            {isMainNavbarPage && !isNotFooterPage && <Footer />}
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
