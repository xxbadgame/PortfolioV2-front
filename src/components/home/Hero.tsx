import Marquee from "react-fast-marquee";
import leftArrow from "/images/arrow/left-break.png"
import ynzue from "/images/ynzue-es.jpeg"
import ButtonHero from "../my-ui/button-hero";

const Hero = () => {

  const jobs = ['Backend Development', 'Frontend Development', 'Entrepreneur']

  return (
    <div className="flex flex-col gap-8" id="home">
      <h1 className="text-[14vw] md:text-[9vw] md:mt-0 mt-8">YANNIS <br className="block md:hidden"/> NZUE ESSONO</h1>
      <div className="flex flex-col md:flex-row justify-between items-center h-[15vh] md:h-12 w-[100%] md:px-8">
        <div className="w-[100%] md:w-[80%] ">
          <Marquee autoFill={true} gradient={true} gradientColor="hsl(var(--background))">
            <ul className="flex items-center">
              {jobs.map((item, index) => (
                  <li className="border border-gray-500 rounded-full p-2 ml-1" key={index}>
                      {item}
                  </li>
              ))}
              <li className="mx-8 text-3xl text-gray-500">FULL-STACK DEVELOPER</li>
              <li className="flex flex-col font-mono">
                    <span>AVAILABLE FOR FREELANCE</span>
                    <span className="flex">(WORKING REMOTE)<img src={leftArrow} className="size-5" alt="left arrow" /></span>
              </li>
              <li className="mx-8 text-3xl text-gray-500">BASED IN FRANCE</li>
            </ul>
          </Marquee>
        </div>
        <div className="w-[100%] h-[100%] flex justify-center mt-[20px] md:pt-0">
          <ButtonHero />
        </div>
      </div>
      <img className="rounded-bl-[20vw] md:h-auto h-[60vh] object-cover" src={ynzue} alt="42 image" />
    </div>
  );
};

export default Hero;
