import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team1" element={<Team1 />} />
                <Route path="/team2" element={<Team2 />} />
            </Routes>
        </Router>
    );
}

