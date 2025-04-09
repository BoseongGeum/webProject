import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen"; // 로딩 화면 컴포넌트

function AppContent() {
    const [isLoadingDone, setIsLoadingDone] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoadingDone(false); // 페이지 이동 시 로딩 화면을 다시 보이게 설정
    }, [location]);

    return (
        <>
            {!isLoadingDone && <LoadingScreen onFinish={() => setIsLoadingDone(true)} />}
            {isLoadingDone && (
                <>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team1" element={<Team1 />} />
                        <Route path="/team2" element={<Team2 />} />
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
