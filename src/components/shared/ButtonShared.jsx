import React from "react";

const ButtonShared = ({children}) => {
    return (
        <button
            style={{
                border: "none",
                marginLeft: "50px",
                backgroundColor: "var(--personal-color)",
            }}
        >
            {children}
        </button>
    );
};

export default ButtonShared;