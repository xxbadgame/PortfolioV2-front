import React from "react";

const Navbar = () => {

    const navItems = ['ABOUT', 'PROJECTS', 'SERVICES', 'PROCESS', 'FAQ']

    return (
        <ul style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "5vw",
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
                        marginBlock:"50px",
                    }}
                >
                        {item}
                </li>
            ))}
        </ul>
    );
};

export default Navbar;