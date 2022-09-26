import { Link } from "react-router-dom";
import React from "react";

const MobileNav = ({mobile}) => {

    React.useEffect(
        () => {
            mobile.current.classList.add("show-mobile-menu");
        }
    , [mobile])

    return(
        <div className="mobile-nav" ref={mobile}>
            <ul className="mobile-nav-links">
                <Link to="/" className="mobile-nav-item">Home</Link>
                <Link to="/explore" className="mobile-nav-item">Explore</Link>
                <Link to="/contact" className="mobile-nav-item">Contact Us</Link>
            </ul>
        </div>
    )
}

export default MobileNav;