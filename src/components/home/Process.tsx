import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";

const Process = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end center"],
    });

    const height = useTransform(scrollYProgress, [0,1], ["0vh", "140vh"]);

    return (
        <div
            className="flex flex-col gap-16 mt-24"
        >
            <div>
                <p className="font-mono text-gray-400 font-semibold">PROCESS</p>
                <h2 className="text-[9vw] md:text-[5vw] leading-none">3 Steps & <br/> It's Finished</h2>
            </div>
            <div>
                <p className="px-8 text-2xl lg:text-4xl">Quick and efficient, from concept to execution.</p>
                <p className="px-12 mt-4 text-gray-400">The process may vary depending on the project's scope, so if you have questions or need more info, feel free to reach out!</p>
            </div>
            <div
                className="flex flex-col items-center pt-16"
                ref={targetRef}
            >
                <div className="relative w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">01</div>
                <motion.div 
                    style={{ height }} 
                    className="absolute mt-12 w-[2px] bg-blue-800 origin-top"
                />
                <div className="h-[40vh] w-[2px] bg-neutral-800"></div>
                <div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">02</div>
                <div className="h-[40vh] w-[2px] bg-neutral-800"></div>
                <div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">03</div>
                <div className="h-[40vh] w-[2px] bg-neutral-800"></div>
                <div className="w-28 h-28 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">launch</div>
            </div>
        </div>
    );
};

export default Process