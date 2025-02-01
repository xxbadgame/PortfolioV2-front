import React from "react";
import "../styles/motion-element/horizontal-infinite.css";

const HorizontalInfinite = () => {

    const navItems = ['Backend Development', 'Frontend Development', 'Entrepreneur']

    const navyBigStyle = {
        display:"flex",
        color: "var(--grey)",
        alignItems: "center",
    }

    return (
        <div className="scroll-parent">
            <ul className="dataOnMe">
                {navItems.map((item, index) => (
                    <li 
                        key={index}
                        style={{
                            border: "1px solid white",
                            borderRadius:"50px",
                            padding:"10px",
                            alignItems: "center",
                        }}
                    >
                        {item}
                    </li>
                ))}
                <li style={navyBigStyle}>FULL STACK DEVELOPER</li>
                <li style={{display:"flex", alignItems:"center"}}>AVAILABLE FOR FREELANCE <br/> (WORKING REMOTE)</li>
                <li style={navyBigStyle}>BASED IN FRANCE</li>
                
                {navItems.map((item, index) => (
                    <li 
                        key={"dup-" + index}
                        style={{
                            border: "1px solid white",
                            borderRadius:"50px",
                            padding:"10px",
                        }}
                    >
                        {item}
                    </li>
                ))}
                <li style={navyBigStyle}>FULL STACK DEVELOPER</li>
                <li style={{display:"flex", alignItems:"center"}}>AVAILABLE FOR FREELANCE <br/> (WORKING REMOTE)</li>
                <li style={navyBigStyle}>BASED IN FRANCE</li>
            </ul>
        </div>
    );
};

export default HorizontalInfinite;