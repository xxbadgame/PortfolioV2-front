import Lottie from "lottie-react";
import logoIcon from "../../assets/animations/logo-icon.json";
import { ModeToggle } from '../ui/mode-toggle.tsx'

const Navbar = () => {

    const navItems = ['ABOUT', 'PROJECTS', 'SERVICES', 'PROCESS', 'FAQ']

    return (
        <div className="flex justify-between items-center h-20 px-8">
            <div className="flex size-12">
                <Lottie animationData={logoIcon} loop={true} />
            </div>
            <div className="hidden md:flex items-center justify-between w-96 h-[100%] font-mono pt-[10px]">
                {navItems.map((item, index) => (
                    <p key={index} className="flex ">{item}</p>
                ))}
            </div>
            <div className="hidden md:flex">
                <ModeToggle />
            </div>
        </div>
    );
  };
  
  export default Navbar;