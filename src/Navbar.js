import { useRef } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import "./App.css";

function Navbar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3></h3>
            <nav ref={navRef}>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#events">Events</a>
                <a href="#contact">Contact Us</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}> 
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        
    );
}
export default Navbar;