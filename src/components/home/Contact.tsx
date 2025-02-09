import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Globe } from "@/components/ui/globe"

const Contact = () => {
    
    return (
        <div>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Work for the world
                </motion.h1>
            </LampContainer>

            <div className="relative flex size-full items-center justify-center overflow-hidden h-[75vh] -mt-[400px]">
                <Globe className="top-28" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
            
        </div>
    );
};

export default Contact