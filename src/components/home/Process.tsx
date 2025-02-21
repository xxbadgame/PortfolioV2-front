import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animations/confeti.json";
import { motion, useScroll, useTransform } from "framer-motion";

const Process = () => {
    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const targetRef3 = useRef(null);
    const targetRef4 = useRef(null);

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: targetRef1,
        offset: ["start center", "end center"],
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: targetRef2,
        offset: ["start center", "end center"],
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: targetRef3,
        offset: ["start center", "end center"],
    });
    const { scrollYProgress: scrollYProgress4 } = useScroll({
        target: targetRef4,
        offset: ["center center", "center center"],
    });

    const bgColor1 = useTransform(scrollYProgress1, [0, 1], ["hsl(var(--background))", "#3b82f6"]);
    const bgColor2 = useTransform(scrollYProgress2, [0, 1], ["hsl(var(--background))", "#3b82f6"]);
    const bgColor3 = useTransform(scrollYProgress3, [0, 1], ["hsl(var(--background))", "#3b82f6"]);
    const color4 = useTransform(scrollYProgress4, [0, 1], ["hsl(var(--border))", "#3b82f6"]);

    const height1 = useTransform(scrollYProgress1, [0,1], ["0vh", "40vh"]);
    const height2 = useTransform(scrollYProgress2, [0,1], ["0vh", "40vh"]);
    const height3 = useTransform(scrollYProgress3, [0,1], ["0vh", "40vh"]);

    const [playLottie, setPlayLottie] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress4.on("change", (latest) => {
            if (latest === 1 && !playLottie) {
                setPlayLottie(true); 
            } else if (latest === 0) {
                setPlayLottie(false);
            }
        });
        
        return () => unsubscribe();
    }, [scrollYProgress4]);

    return (
        <div className="flex flex-col gap-16 mt-24">
            <div>
                <p className="font-mono text-gray-400 font-semibold">PROCESS</p>
                <h2 className="text-[9vw] md:text-[5vw] leading-none">3 Steps & <br/> It's Finished</h2>
            </div>
            <div>
                <p className="px-8 text-2xl lg:text-4xl">Quick and efficient, from concept to execution.</p>
                <p className="px-12 mt-4 text-gray-400">The process may vary depending on the project's scope, so if you have questions or need more info, feel free to reach out!</p>
            </div>
            <div className="flex flex-col items-center pt-16 w-[20%] md:w-[100%]">
                <motion.div className="relative w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: bgColor1, transition: "all 0.5s" }}
                >01</motion.div>
                <div className="relative h-[40vh] w-[2px] bg-neutral-800" ref={targetRef1}>
                    <motion.div style={{ height: height1 }} className="absolute w-[2px] bg-blue-500 origin-top" />
                    <div className="absolute top-12 left-12 text-left w-72">
                        <h3>Discovery</h3>
                    </div>
                </div>      

                <motion.div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: bgColor2, transition: "all 0.5s" }}
                >02</motion.div>
                <div className="relative h-[40vh] w-[2px] bg-neutral-800" ref={targetRef2}>
                    <motion.div style={{ height: height2 }} className="absolute w-[2px] bg-blue-500 origin-top" />
                    <div className="absolute top-12 left-12 md:left-auto md:right-12 text-left w-72">
                        <h3>Concept Development</h3>
                    </div>
                </div>

                <motion.div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center"
                    style={{ backgroundColor: bgColor3, transition: "all 0.5s" }}
                >03</motion.div>
                <div className="relative h-[40vh] w-[2px] bg-neutral-800" ref={targetRef3}>
                    <motion.div style={{ height: height3 }} className="absolute w-[2px] bg-blue-500 origin-top" />
                    <div className="absolute top-12 left-12 text-left w-72">
                    <h3>Execution</h3>
                    </div>
                </div>

                <motion.div
                    style={{ borderColor: color4, transition: "all 0.3s" }}
                    className="relative md:w-36 md:h-36 w-72 h-[30vh] border-[2px] md:border-[2px] ml-[286px] top-[-2px] md:ml-0 border-neutral-800 md:rounded-full rounded-bl-2xl rounded-tr-2xl flex justify-center items-center overflow-hidden"
                >
                    <Lottie
                        key={playLottie ? 'play' : 'pause'}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderRadius: 20,
                            visibility: playLottie ? "visible" : "hidden",
                        }}
                        animationData={animationData}
                        loop={false}
                    />
                    <span className="absolute z-10 md:text-[18px] text-4xl" ref={targetRef4}>launch</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Process;