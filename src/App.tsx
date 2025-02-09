import './App.css'
import { useEffect, useState } from 'react';
import { ThemeProvider } from './components/theme-provider.tsx'
import Navbar from './components/my-ui/Navbar.tsx';
import Hero from "./components/home/Hero.tsx";
import Projects from './components/home/Projects.tsx';
import About from './components/home/About.tsx';
import Services from './components/home/Services.tsx';
import Process from './components/home/Process.tsx';
import Ai from './components/home/Ai.tsx';
import Contact from './components/home/Contact.tsx';

function App() {

  const [isMobile, setIsMobile] = useState<boolean>(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }
  
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar isMobile={isMobile}/>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Process />
      <Ai />
      <Contact />
    </ThemeProvider>
  )
}

export default App
