const ButtonHero = () => {

    return (
        <a href="#contact" className="group flex items-center justify-center bg-blue-500 hover:bg-gray-100 text-black hover:text-blue-500 font-regular justify-center h-[100%] w-[90%] transition duration-300 ease-in-out">
            <p className="text-[14px]">
                LET'S TALK
            </p>
            <img 
                className="w-[12px] ml-3 group-hover:hidden" 
                src="/images/arrow/right-black.png" 
                alt="right arrow" 
            />
            <img 
                className="w-[12px] ml-3 hidden group-hover:block" 
                src="/images/arrow/right-blue.png" 
                alt="right arrow hover" 
            />
        </a>    
    );
};

export default ButtonHero