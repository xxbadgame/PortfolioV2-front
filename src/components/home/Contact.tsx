
import { Globe } from "@/components/ui/globe"
import Clock from "../my-ui/clock";

const Contact = () => {   
    return (
        <div className="bg-white flex flex-row justify-between h-[100vh] pb-16 md:pb-0" id="contact">
            <div className="md:w-[35%] w-[60%] text-left p-12 md:p-16 flex flex-col justify-between">
                <p className="text-neutral-400 font-mono">GO TO THE TOP</p>
                <div className="flex flex-col">
                    <h2 className="text-neutral-800 text-3xl md:text-[3vw] leading-none">Let's Talk About <br/> Your Vision</h2>
                    <div className="flex md:flex-row flex-col mt-32">
                        <div>
                            <p className="text-neutral-400">PHONE NUMBER</p>
                            <p className="text-neutral-800 font-bold">06 09 63 05 23</p>
                            <p className="text-neutral-400">EMAIL</p>
                            <p className="text-neutral-800 font-bold">yannis.nzuepro@gmail.com</p>
                            <p className="text-neutral-400">CURRENT RESIDENCE</p>
                            <p className="text-neutral-800 font-bold">Lyon</p>
                            <p className="text-neutral-400">CURRENT TIME</p>
                            <p className="text-neutral-800 font-bold"><Clock/></p>
                        </div>
                        <div className="md:ml-12">
                            <p className="text-neutral-400">SOCIALS</p>
                            <div className="flex flex-col">
                                <a className="font-mono text-neutral-800" href="https://www.linkedin.com/in/yannis-nzue-essono-0089571a6/">Linkedin</a>
                                <a className="font-mono text-neutral-800" href="https://www.youtube.com/@LeMondeDeYannis42">Youtube</a>
                                <a className="font-mono text-neutral-800" href="https://github.com/xxbadgame">Github</a>
                            </div>
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
            <div className="w-[40%] lg:w-[15%] p-8 md:border-l border-neutral-200 flex flex-col justify-between">
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