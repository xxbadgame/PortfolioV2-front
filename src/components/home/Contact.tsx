
import { Globe } from "@/components/ui/globe"

const Contact = () => {
    
    return (
        <div className="bg-white flex flex-row justify-between h-[100vh]" id="contact">
            <div className="w-[35%] text-left p-16 flex flex-col justify-between">
                <p className="text-neutral-400 font-mono">GO TO THE TOP</p>
                <div className="flex flex-col">
                    <h2 className="text-neutral-800 text-[3vw]">Let's Talk About <br/> Your Vision</h2>
                    <div className="flex mt-32">
                        <div>
                            <p className="text-neutral-400">PHONE NUMBER</p>
                            <p className="text-neutral-400">EMAIL</p>
                            <p className="text-neutral-400">CURRENT RESIDENCE</p>
                            <p className="text-neutral-400">CURRENT TIME</p>
                        </div>
                        <div className="ml-12">
                            <p className="text-neutral-400">SOCIALS</p>
                        </div>
                    </div>
                </div>
                <div className="text-neutral-800">
                    <p className="text-[]">Yannis Nzue Essono</p>
                    <p>FULL-STACK DEVELOPER</p>
                </div>
            </div>
            <div className="relative flex size-full items-center justify-center overflow-hidden h-[100vh] w-0 lg:w-[50%]">
                <Globe className="top-28"/>
            </div>
            <div className="w-[40%] md:w-[15%] p-8 border-l border-neutral-200 flex flex-col justify-between">
                <div className="text-neutral-400 text-sm font-mono text-left">
                    <p>MADE BY YANNIS</p>
                    <p>CREATE IN FEBRUARY 2025</p>
                    <p>MADE WITH LOVE AND REACT</p>
                    <p>@ All rights reserved</p>
                </div>
                <div>
                    <p className="text-neutral-400 text-sm font-mono text-left">SITE MAP</p>
                    <p className="text-neutral-400 text-sm font-mono text-left">PROJECTS</p>
                </div>
            </div>
        </div>
    );
};

export default Contact