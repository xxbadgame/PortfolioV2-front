import React, { useState, useEffect } from "react";
import Lottie from 'lottie-react';
import logoIcon from '../../assets/animations/logo-icon.json';
import menuIcon from '../../assets/animations/menu-icon.json';
import aiImage from '/images/ai.png';


const Navbar = () => {

    const navItems = ['ABOUT', 'PROJECTS', 'SERVICES', 'PROCESS', 'FAQ']
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth <= 810;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav
            style={{
                display:"flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: "center",
                justifyContent:"space-between",
                height: isMobile ? "72px" : "100vh",
                width: isMobile ? "100vw" : "50px",
            }}
        >
            <Lottie 
                animationData={logoIcon}
                loop={true}
                autoplay={true}
                style={{ width: 50, height: 50 }}
            />
            <ul style={{
                display: isMobile ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
                margin: "0",
                listStyle: "none",
            }}>
                {navItems.map((item, index) => (
                    <li 
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "rotate(-90deg)",
                            transformOrigin: "center",
                            cursor: "pointer",
                            marginBlock:"35px",
                            fontFamily: "var(--font-nav-bar)",
                            fontWeight: 500,
                            fontSize: "var(--font-size-sm)",
                            color: "var(--light-grey)",
                        }}
                    >
                            {item}
                    </li>
                ))}
            </ul>
            <div
                style={{
                    display: isMobile ? "none" : "flex",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"50px",
                    height: "50px",
                }}
            >
                <img 
                    src={aiImage} 
                    alt="ai"
                    style={{ width: '50%', height: '50%', objectFit: 'cover' }}
                />
            </div>
            
        </nav>
    );
};

export default Navbar;