import Marquee from "react-fast-marquee"

const About = () => {
    
    return (
        <div>
            <div className="font-mono border-t py-6">
                <Marquee autoFill={true}>
                    <p className="text-3xl text-gray-500">FREELANCE DEVELOPER 👨🏾‍💻</p>
                    <p className="mx-16 text-3xl text-gray-500">ENTREPRENEUR & COMPETITION WINNER 2024 🏆</p>
                    <p className="mr-16 text-3xl text-gray-500">YANNIS'S WORLD CHANNEL 🎥</p>
                </Marquee>
            </div>
            <div className="flex md:flex-row flex-col justify-between">
                <div className="hidden md:block sticky top-0 w-[30%] h-[100vh]">
                    <img 
                        className="w-[100%] h-[100%] object-cover object-center rounded-tl-[150px] rounded-br-[150px]" 
                        src="/images/ynzue-es.jpeg" 
                        alt="ynzue-es" />
                </div>
                <div className="border-t md:w-[50%] flex flex-col p-12 md:p-16 lg:p-32 gap-24 text-left">
                    <div>
                        <p className="font-mono text-gray-400 font-semibold">ABOUT ME</p>
                        <h2 className="text-[7vw] md:text-[5vw] leading-none">Developer <br/> Experience <br/> & Interactions</h2>
                    </div>
                    <p className="text-[5vw] md:text-[2vw]">
                        I build solutions that not only strengthen 
                        the product but also align with business goals. I seamlessly navigate between 
                        frontend, backend, and architecture—structuring code in a way that enhances 
                        scalability, performance, and maintainability.
                    </p>
                    <div>
                        <p className="font-mono text-gray-400 font-semibold">PAST EXPERIENCE</p>
                        <div className="mt-8 flex">
                            <div className="flex flex-col items-center w-[1%] pt-1">
                                <div className="rounded-full w-2 h-4 bg-gray-700"></div>
                                <div className="w-[1px] h-52 bg-gray-700"></div>
                                <div className="rounded-full w-2 h-4 bg-gray-700"></div>
                                <div className="w-[1px] h-52 bg-gray-700"></div>
                                <div className="rounded-full w-2 h-4 bg-gray-700"></div>
                                <div className="w-[1px] h-52 bg-gray-700"></div>
                            </div>
                            <div className="w-[99%]">
                                <div className="flex md:flex-row flex-col md:justify-between w-[100%] ml-4 h-56">
                                    <p className="md:w-[30%] w-[100%]">2025 - Current</p>
                                    <div className="w-[70%]">
                                        <h4>Freelance Developer</h4>
                                        <p>Work for companies</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col md:justify-between w-[100%] ml-4 h-56">
                                    <p className="md:w-[30%] w-[100%]">2025 - Current</p>
                                    <div className="w-[70%]">
                                        <h4>Freelance Developer</h4>
                                        <p>Work for companies</p>
                                    </div>
                                </div>
                                <div className="flex md:flex-row flex-col md:justify-between w-[100%] ml-4 h-56">
                                    <p className="md:w-[30%] w-[100%]">2025 - Current</p>
                                    <div className="w-[70%]">
                                        <h4>Freelance Developer</h4>
                                        <p>Work for companies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky top-0 md:border-l md:border-t h-[50vh] md:h-[100vh] w-[30%] md:w-[20%]">
                    <div className="text-left p-4 md:p-16">
                       <p className="font-mono">PHONE NUMBER</p>
                       <p className="font-mono">EMAIL</p> 
                       <p className="font-mono">PARIS</p> 
                       <p className="font-mono">CURRENT TIME</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About