import React from "react";
import pp from "/images/ynzue-es.jpeg";
import HorizontalInfinite from "../motion-element/horizontal-infinite";
import ButtonShared from "../shared/ButtonShared";

const Hero = ({isMobile}) => {

    return (
        <div>
            <h1 
                style={{
                    fontSize: isMobile ? "13vw" : "8.5vw",
                    fontWeight:"500",
                    margin:"0px",
                    display: isMobile ? "flex" : "block",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                    <span>YANNIS </span>
                    <span>NZUE ESSONO</span> 
            </h1>
            <div
                style={{
                    display: "flex",
                    alignItems: "center", 
                    flexDirection: isMobile ? "column" : "row",
                }}>
                <HorizontalInfinite isMobile={isMobile}/>
                <ButtonShared isMobile={isMobile}>LET'S TALK</ButtonShared>
            </div>
            <div style={{width:"100vw", marginTop: "40px"}}>
                <img 
                    style={{
                        width:"100%",
                        height: isMobile ? "80vh" : "auto",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderBottomLeftRadius: isMobile ? "70px" : "200px"
                    }} 
                    src={pp} 
                    alt="ynzue-es 42"
                />
            </div>
        </div>
    );
};

export default Hero;