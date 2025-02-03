import React, {useState} from "react";

const Projects = ({isMobile}) => {
    const [hovered, setHovered] = useState(null);

    const imageStyle = (index) => ({
        width: isMobile ? "100vw" : "30vw", 
        height: "300px",
        objectFit: "cover",
        objectPosition: "center",
        transition: "filter 0.5s ease-in-out",
        filter: hovered === index ? "blur(8px)" : "blur(0px)",
    });

    const textStyle = (index) => ({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        opacity: hovered === index ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
    });

    const projects = [
        { src: "image2.avif", name: "Automate Products", categorie : "(pro)", date: "2024", description: "Automating product flow in a large company" },
        { src: "image1.avif", name: "Speed Meeting", categorie : "(pro)",date: "2024", description: "Creating a Speed Meeting web app" },
        { src: "image2.avif", name: "Transcendance 42", date: "SOON", categorie : "(school)", description: "Developing a web app with all necessary functionalities" },
        { src: "image3.avif", name: "Tiktok Bot", date: "2025", description: "Creating a bot to post automatically on TikTok" },
        { src: "image4.avif", name: "Finance Bot", date: "2023", description: "Developing a bot for cryptocurrency trading" },
        { src: "image1.avif", name: "Minishell 42", date: "SOON", categorie : "(school)", description: "Recreating a shell terminal" },
        { src: "image3.avif", name: "Osmoze", date: "2024", description: "Winning project of an entrepreneurial competition, developed over 8 months in Lyon" },
        { src: "image4.avif", name: "Youtube", date: "NOW", description: "My YouTube channel showcasing all my new projects" }
    ];

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
                <h2 style={{margin: "0", fontSize: "5vw", fontWeight: "400", whiteSpace: "nowrap"}}>Selected Projects</h2>
            </div>
            <div
                style={{
                    display: isMobile ? "flex ": "grid",
                    flexDirection: "column",
                    alignItems: "center",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, auto)",
                    gap: "10px",
                    width: "100%",
                }}>
                {projects.map((project, index) => (
                   <div
                        key={index}
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img style={imageStyle(index)} src={`/images/projects-image/${project.src}`} alt="" />
                        <div style={textStyle(index)}>
                            <span>{project.date}</span>
                            <span>{project.name}</span>
                            <span>{project.categorie}</span>
                            <span>{project.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Projects;