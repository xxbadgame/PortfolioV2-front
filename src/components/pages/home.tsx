import Hero from '../home/Hero.tsx';
import Projects from '../home/Projects.tsx';
import About from '../home/About.tsx';
import Services from '../home/Services.tsx';
import Process from '../home/Process.tsx';
import Ai from '../home/Ai.tsx';
import Contact from '../home/Contact.tsx';
import Navbar from '../my-ui/Navbar.tsx';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Services />
            <Process />
            <Ai />
            <Contact />
        </div>
    );
}

export default Home