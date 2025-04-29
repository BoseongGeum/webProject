import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";
import Navbar from "./components/Navbar";
import MainNavbar from "./components/MainNavbar";
import LoadingScreen from "./components/LoadingScreen";
import PICManagerInfo from "./pages/PICManagerInfo";
import PICProductInfo from "./pages/PICProductInfo";
import QuanticEvansManagerInfo from "./pages/QuanticEvansManagerInfo";
import QuanticEvansProductInfo from "./pages/QuanticEvansProductInfo";
import AuraGenManagerInfo from "./pages/AuraGenManagerInfo";
import AuraGenProductInfo from "./pages/AuraGenProductInfo";

function AppContent() {
    const [isLoadingDone, setIsLoadingDone] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoadingDone(false);
    }, [location]);

    const team1Menus = [
        { name: "PIC", path: "/team1/pic"},
        { name: "QuanticEvans", path: "/team1/quanticEvans" },
        { name: "AuraGen", path: "/team1/auraGen" },
    ];

    const team2Menus = [
        { name: "Dashboard", path: "/team2/dashboard" },
        { name: "Settings", path: "/team2/settings" },
        { name: "Contact", path: "/team2/contact" },
    ];

    // URL을 보고 '팀1' 소속인지, '팀2' 소속인지 판별
    const isTeam1Page = location.pathname.startsWith("/team1/");
    const isTeam2Page = location.pathname.startsWith("/team2/");

    const isMainNavbarPage = isTeam1Page || isTeam2Page;

    return (
        <>
            {!isLoadingDone && (
                <LoadingScreen
                    onFinish={() => setIsLoadingDone(true)}
                    isMainNavbarPage={isMainNavbarPage}
                />
            )}
            {isLoadingDone && (
                <>
                    {/* 네브바 분기 */}
                    {isMainNavbarPage ? (
                        <MainNavbar menus={isTeam1Page ? team1Menus : team2Menus} />
                    ) : (
                        <Navbar />
                    )}

                    {/* 라우트들 */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            {/* team1 영역 */}
                            <Route path="/team1" element={<Team1 />} />
                            <Route path="/team1/picProductInfo" element={<PICProductInfo />} />
                            <Route path="/team1/picManagerInfo" element={<PICManagerInfo />} />
                            <Route path="/team1/quanticEvansProductInfo" element={<QuanticEvansProductInfo />} />
                            <Route path="/team1/quanticEvansManagerInfo" element={<QuanticEvansManagerInfo />} />
                            <Route path="/team1/auraGenProductInfo" element={<AuraGenProductInfo />} />
                            <Route path="/team1/auraGenManagerInfo" element={<AuraGenManagerInfo />} />

                            {/* team2 영역 */}
                            <Route path="/team2" element={<Team2 />} />
                            <Route path="/team2/dashboard" element={<QuanticEvansManagerInfo />} />
                            <Route path="/team2/settings" element={<AuraGenManagerInfo />} />
                            <Route path="/team2/logout" element={<AuraGenProductInfo />} />
                        </Routes>

                </>
            )}
        </>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
