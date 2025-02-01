import React from "react";
import "../styles/motion-element/horizontal-infinite.css";

const HorizontalInfinite = ({isMobile}) => {

    const navItems = ['Backend Development', 'Frontend Development', 'Entrepreneur']

    const navyBigStyle = {
        display:"flex",
        color: "var(--grey)",
        alignItems: "center",
        height: "50px",
        paddingInline: "20px",
        whiteSpace: "nowrap",
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
                            height: "50px",
                            paddingInline: "20px",
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInline:"10px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {item}
                    </li>
                ))}
                <li style={navyBigStyle}>FULL STACK DEVELOPER</li>
                <li style={{display:"flex", alignItems:"center", whiteSpace: "nowrap"}}>AVAILABLE FOR FREELANCE <br/> (WORKING REMOTE)</li>
                <li style={navyBigStyle}>BASED IN FRANCE</li>
                
                {navItems.map((item, index) => (
                    <li 
                        key={"dup-" + index}
                        style={{
                            border: "1px solid white",
                            borderRadius:"50px",
                            height: "50px",
                            paddingInline: "20px",
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInline:"10px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {item}
                    </li>
                ))}
                <li style={navyBigStyle}>FULL STACK DEVELOPER</li>
                <li style={{display:"flex", alignItems:"center", whiteSpace: "nowrap",}}>AVAILABLE FOR FREELANCE <br/> (WORKING REMOTE)</li>
                <li style={navyBigStyle}>BASED IN FRANCE</li>
            </ul>
        </div>
    );
};

export default HorizontalInfinite;