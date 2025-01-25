import React from "react";

const Navbar = () => {

    const sections = ['ABOUT', 'PROJECTS', 'SERVICES', 'PROCESS', 'FAQ']

    return (
        <ul>
            {sections.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default Navbar;