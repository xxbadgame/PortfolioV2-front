import React from "react";
import arrowBlack from "/images/arrow/right-black.png"

const ButtonShared = ({children, isMobile}) => {
    return (
        <button
            style={{
                border: "none",
                marginLeft: isMobile ? "0px" : "50px",
                width: isMobile ? "90vw" : "15vw",
                height: "50px",
                backgroundColor: "var(--personal-color)",
                color: "var(--background-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-nav-bar)",
                fontWeight: "500",
            }}
        >
            {children} <img src={arrowBlack} style={{width:"20px", height: "20px", marginLeft: "20px"}} alt="arrow black" />
        </button>
    );
};

export default ButtonShared;