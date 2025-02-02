import React from "react";

const Projects = ({isMobile}) => {

    const imageStyle = {
        width: "500px", 
        height: "500px",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "10px"
    }

    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    padding: "96px"
                }}
            >
                <p style={{margin: "0", fontFamily: "var(--font-nav-bar)", color: "var(--light-grey)"}}>Projects 2022 - 2025</p>
                <h2 style={{margin: "0", fontSize: "68px", fontWeight: "400"}}>Selected Projects</h2>
            </div>
            <div 
                style={{
                    display: isMobile ? "flex ": "grid",
                    flexDirection: "column",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    gap: "10px",
                    width: "100%",
                }}
            >
                <a href=""><img style={imageStyle} src="/images/projects-image/image1.avif" alt="" /></a>
                <a href=""><img style={imageStyle} src="/images/projects-image/image2.avif" alt="" /></a>
                <a href=""><img style={imageStyle} src="/images/projects-image/image3.avif" alt="" /></a>
                <a href=""><img style={imageStyle} src="/images/projects-image/image4.avif" alt="" /></a>
            </div>
        </div>

    );
};

export default Projects;