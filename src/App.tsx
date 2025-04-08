import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team1" element={<Team1 />} />
                <Route path="/team2" element={<Team2 />} />
            </Routes>
        </Router>
    );
}

