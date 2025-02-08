import './App.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import Navbar from './components/my-ui/Navbar.tsx';
import Hero from "./components/home/Hero.tsx";
import Projects from './components/home/Projects.tsx';
import About from './components/home/About.tsx';
import Services from './components/home/Services.tsx';
import Process from './components/home/Process.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Process />
    </ThemeProvider>
  )
}

export default App
