import React from "react";

const ButtonShared = ({children, isMobile}) => {
    return (
        <button
            style={{
                border: "none",
                marginLeft: isMobile ? "0px" : "50px",
                width: isMobile ? "90vw" : "10vw",
                height: "50px",
                backgroundColor: "var(--personal-color)",
                color: "var(--background-color)"
            }}
        >
            {children}
        </button>
    );
};

export default ButtonShared;