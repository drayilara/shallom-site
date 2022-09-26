import { Link } from "react-router-dom";
import logo from "../images/logo.png"


const MobileNav = () => {

    return(
        <div className="mobile-nav">
            <ul className="mobile-nav-links">
                <Link to="/" className="mobile-nav-item">Home</Link>
                <Link to="/contact" className="mobile-nav-item">Explore</Link>
                <Link to="/explore" className="mobile-nav-item">Contact Us</Link>
            </ul>
        </div>
    )
}

export default MobileNav;