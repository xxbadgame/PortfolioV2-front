import React from "react";
import pp from "/images/ynzue-es.jpeg";
import HorizontalInfinite from "../motion-element/horizontal-infinite";
import ButtonShared from "../shared/ButtonShared";

const Hero = ({isMobile}) => {

    return (
        <div>
            <h1 style={{fontSize:"8em", fontWeight:"500",margin:"0px"}}>YANNIS NZUE ESSONO</h1>
            <div style={{display: "flex"}}>
                <HorizontalInfinite/>
                <ButtonShared>LET'S TALK</ButtonShared>
            </div>
            <div style={{width:"100vw", marginTop: "40px"}}>
                <img style={{width:"100%", borderBottomLeftRadius:"200px"}} src={pp} alt="ynzue-es 42"/>
            </div>
        </div>
    );
};

export default Hero;