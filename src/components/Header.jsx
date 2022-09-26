import React, { useRef } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import  MobileNav  from "./MobileNav";

const Header = () => {

    let mobile = useRef(null);

    const showMenu = () => {
        mobile.current.classList.toggle("show-mobile-menu");
    }

    return (
        <>
             <article className="nav">
            <Link to="/"><img className="logo-header" src={logo} alt="Logo" /></Link>
            <FiMenu 
            onClick={showMenu}
            className="hamburger" />
            <nav className="heading-links">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </article>
        <MobileNav mobile={mobile}/>
        </>
    )
}

export default Header;