import { Link } from "react-router-dom";
import logo from "../images/favicon.png";

export default function Navbar() {
    return (
        <nav className="w-64 h-16 bg-black bg-opacity-60 flex items-center justify-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-b-full shadow-lg">
            <Link to="/" className="flex items-center">
                <img src={logo} alt="CBOL Logo" className="h-10 w-auto" />
            </Link>
        </nav>
    );
}
