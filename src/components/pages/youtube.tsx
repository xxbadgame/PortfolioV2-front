import Contact from "../home/Contact";
import { CardItem, CardBody, CardContainer } from "../ui/3d-card";
import { Link } from "react-router-dom";

const YoutubePage = () => {

    const styleBubble = {
        margin:"10px",
        border: "1px solid grey",
        borderRadius: "50px",
        padding: "10px",
    }

    const projects = {
        name : ["Tiktok Bot", "Winorwin", "Homeserve"],
        image : ["youtube.png", "winorwin.png","homeserve.jpg"],
        date : ["2025", "2024", "2023"],
        description : [
            "Automate content creation and post directly on TikTok.",
            "Develop a web app for business meetings.",
            "Data managment for HomeServe products.",
        ],
        link : ["tiktok", "winorwin", "homeserve"]
    }

    return(
        <div>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="md:sticky top-0 md:h-screen flex flex-col md:justify-between text-left p-12">
                <div className="pb-12">
                    <p>2024</p>
                    <h1>Youtube</h1>
                </div>
                <div className="flex flex-col gap-12">
                    <div>
                        <p className="font-mono text-neutral-500 font-semibold">SERVICES</p>
                        <p>Create Content</p>
                    </div>
                    <div>
                    <p className="font-mono text-neutral-500 font-semibold">CLIENT</p>
                        <p>Personnal</p>
                        </div>
                    <div>
                        <p className="font-mono text-neutral-500 font-semibold">TEAM</p>
                        <p>Solo</p>
                    </div>
                </div>
                </div>

                <div className="w-full md:w-[80vw] h-[80vh] md:h-[150vh]">
                    <img
                        src="/images/projects-image/youtube.png"
                        className="w-full h-full rounded-bl-[100px] object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </div>
            </div>

            <div className="flex md:flex-row flex-col p-8 md:p-12 w-[100%] mt-16 md:mt-24 text-left">
                <div className="md:w-[20%]">
                    <p className="p-[10px] font-mono text-neutral-500 font-semibold">CATEGORIES</p>
                    <div className="flex flex-wrap">
                        <p style={styleBubble}>Sports</p>
                        <p style={styleBubble}>Education</p>
                        <p style={styleBubble}>Social Media</p>
                        <p style={styleBubble}>Arts</p>
                        <p style={styleBubble}>Fintech</p>
                        <p style={styleBubble}>Web 3</p>
                    </div>
                </div>
                <div className="md:w-[80%] flex justify-center">
                    <div className="md:w-[60%] p-[10px]">
                        <p className="font-mono text-neutral-500 font-semibold">OVERVIEW</p>
                        <p className="text-2xl">
                            I have created a YouTube channel called "Le Monde de Yannis," 
                            which showcases various projects and passions I am working on. The channel is designed to connect 
                            with people who share similar interests and to provide content that inspires and informs viewers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-neutral-800 my-32" />

            <div className="text-left flex flex-col gap-32">
                <div>
                    <div className=" sticky top-0 z-0 p-12 lg:w-[40%]">
                        <p className="font-mono text-xl text-neutral-500">KEY MOMENT // 1</p>
                        <h3 className="text-3xl font-bold mb-6">Content and Projects</h3>
                        <p className="text-neutral-400 text-lg">
                            On "Le Monde de Yannis," I feature a range of content that includes personal projects, 
                            hobbies, and experiences. Whether it’s tech, creativity, or lifestyle, 
                            the channel aims to offer diverse and engaging videos that resonate 
                            with a wide audience interested in those topics.
                        </p>
                    </div>
                    <div className="h-[100vh] relative z-10">
                        <img 
                            src="/images/projects-image/youtube.png"
                            className="w-full h-full rounded-bl-[100px] object-cover group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <div className="relative md:flex">
                    <div className="sticky top-0 self-start md:w-[40%] p-12 z-0">
                        <p className="font-mono text-xl text-neutral-500">KEY MOMENT // 2</p>
                        <h3 className="text-3xl font-bold mb-6">Learning and Sharing Knowledge</h3>
                        <p>
                            A key aspect of the channel is learning and sharing knowledge. 
                            I aim to teach, demonstrate, and discuss different skills or concepts 
                            that I’ve encountered in my personal or professional life. 
                            It’s not just about entertainment, but also about helping others grow and explore new things.
                        </p>
                    </div>

                    <div className="h-[100vh] relative z-10">
                        <img 
                            src="/images/projects-image/youtube.png"
                            className="w-full h-full rounded-br-[100px] rounded-tl-[100px] object-cover"
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <div>
                    <div className="sticky top-0 z-0 p-12 lg:w-[40%]">
                        <p className="font-mono text-xl text-neutral-500">KEY MOMENT // 3</p>
                        <h3 className="text-3xl font-bold mb-6">Building a Community</h3>
                        <p>
                            The goal of the channel is not only to share my personal 
                            interests but also to build a community of people who are 
                            passionate about similar things. I encourage interaction, 
                            sharing ideas, and exchanging knowledge, creating a space 
                            where viewers feel connected and inspired.
                        </p>
                    </div>
                    <div className="h-[100vh] relative z-10">
                        <img 
                            src="/images/projects-image/youtube.png"
                            className="w-full h-full rounded-b-[50px] object-cover"
                            alt="thumbnail"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:w-[40%] text-left p-12 mt-24">
                <p className="font-mono text-lg text-neutral-500">RESULTS</p>
                <h2 className="text-4xl md:text-8xl mb-24 font-semibold">YOUTUBE</h2>
                <p className="text-2xl md:text-4xl">
                    "Le Monde de Yannis" is growing as a platform for creativity and shared passion. 
                    By providing engaging content, offering opportunities for learning, and 
                    fostering a community of like-minded individuals, the channel is becoming a space for 
                    inspiration, growth, and connection. It’s a journey that I'm excited to share with 
                    others who are curious and passionate about the same topics.
                </p>
            </div>

            <div className="w-[100%] h-[1px] bg-neutral-800 my-32" />

            <div>
                <p className="font-mono text-lg text-neutral-500">MORE PROJECTS</p>
                <h2 className="text-6xl p-8 md:text-7xl">You might also like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 my-24">
                    {projects.name.map((item, index) => (
                        <div key={index}>
                            <CardContainer className="h-[600px]">
                                <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] md:w-[30vw] h-[100%] rounded-xl p-6 border">
                                    <div>
                                        <CardItem
                                            translateZ="50"
                                            className="font-bold text-neutral-600 dark:text-white text-12 md:text-l lg:text-2xl"
                                        >
                                            {item} - {projects.date[index]}
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left md:text-12 h-10 md:hidden lg:block leading-none"
                                        >
                                            {projects.description[index]}
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={`/images/projects-image/${projects.image[index]}`}
                                        height="1000"
                                        width="1000"
                                        className="h-[350px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Discover →
                                    </CardItem>
                                    <Link to={`/${projects.link[index]}`} className="">
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                                {item}
                                        </CardItem>
                                    </Link>
                                    </div>
                                </CardBody>
                            </CardContainer> 
                        </div>
                    ))}
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default YoutubePage