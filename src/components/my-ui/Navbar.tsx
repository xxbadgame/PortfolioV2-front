import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "../ui/tubelight-navbar"
import { useState, useEffect } from "react";

const Navbar = () => {

    const navItems = [
        { name: 'HOME', url: '#', icon: Home },
        { name: 'PROJECTS', url: '#', icon: Briefcase },
        { name: 'ABOUT', url: '#', icon: User },
        { name: 'PROCESS', url: '#', icon: FileText },
        { name: 'AI', url: '#', icon: FileText },
        { name: 'CONTACT', url: '#', icon: FileText },
    ]
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
            setLastScrollY(window.scrollY);
            };

            window.addEventListener("scroll", handleScroll);
            
            return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    return (
        <div
            className={`w-full h-24 z-10 transition-opacity duration-300 ${
                showNavbar ? "opacity-1" : "opacity-0"
            }`}
        >
        <NavBar items={navItems} />
        </div>
    );
  };
  
  export default Navbar;