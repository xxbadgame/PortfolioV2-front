import React, {useEffect, useState} from 'react';
import "./theme.css"
import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import About from './components/home/About';
import Process from './components/home/Process';
import Services from './components/home/Services';
import Faq from './components/home/Faq';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 810;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflow:"hidden",
      }}
    >
      <Navbar isMobile={isMobile}/>

      <div 
        style={{
          marginLeft: isMobile ? "0px" : "50px",
        }}
      >
        <Hero isMobile={isMobile}/>
      </div>
      

      {/*
      <Projects />
      <About />
      <Services />
      <Process />
      <Faq />

      <Footer />
      */}
    </div>
  )
}

export default App
