import React from "react";
import "../styles/motion-element/horizontal-infinite.css";
import leftArrow from "/images/arrow/left-break.png"

const HorizontalInfinite = ({isMobile}) => {

    const navItems = ['Backend Development', 'Frontend Development', 'Entrepreneur']

    const navyBigStyle = {
        display:"flex",
        color: "var(--grey)",
        fontSize: "25px",
        fontFamily: "var(--font-nav-bar)",
        alignItems: "center",
        height: "50px",
        marginInline: "20px",
        whiteSpace: "nowrap",
    }

    return (
        <div className="scroll-parent">
            <ul className="dataOnMe">
                {navItems.map((item, index) => (
                    <li 
                        key={index}
                        style={{
                            border: "1px solid var(--light-grey)",
                            color: "var(--light-grey)",
                            borderRadius:"50px",
                            height: "50px",
                            paddingInline: "20px",
                            display:"flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                            marginLeft: "5px",
                        }}
                    >
                        {item}
                    </li>
                ))}
                <li style={navyBigStyle}>FULL-STACK DEVELOPER</li>
                <li 
                    style={{
                        display:"flex", 
                        flexDirection: "column",
                        alignItems:"start",
                        fontFamily: "var(--font-nav-bar)",
                        color: "var(--light-grey)",
                        marginInline: "20px",
                    }}>
                            <span style={{whiteSpace: "nowrap"}}>AVAILABLE FOR FREELANCE</span>
                            <span style={{display: "flex", alignItems: "center"}}>(WORKING REMOTE)<img src={leftArrow} style={{width: "25px", height: "25px"}} alt="left arrow" /></span>
                </li>
                <li style={navyBigStyle}>BASED IN FRANCE</li>
                
                {navItems.map((item, index) => (
                    <li 
                        key={"dup-" + index}
                        style={{
                            border: "1px solid var(--light-grey)",
                            color: "var(--light-grey)",
                            borderRadius:"50px",
                            height: "50px",
                            paddingInline: "20px",
                            display:"flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                            marginLeft: "5px",
                        }}
                    >
                        {item}
                    </li>
                ))}
                <li style={navyBigStyle}>FULL-STACK DEVELOPER</li>
                <li 
                    style={{
                        display:"flex", 
                        flexDirection: "column",
                        alignItems:"start",
                        fontFamily: "var(--font-nav-bar)",
                        color: "var(--light-grey)",
                        marginInline: "20px",
                    }}>
                            <span style={{whiteSpace: "nowrap"}}>AVAILABLE FOR FREELANCE</span>
                            <span style={{display: "flex", alignItems: "center"}}>(WORKING REMOTE)<img src={leftArrow} style={{width: "25px", height: "25px"}} alt="left arrow" /></span>
                </li>
                <li style={navyBigStyle}>BASED IN FRANCE</li>
            </ul>
        </div>
    );
};

export default HorizontalInfinite;