import './App.css'
import Hero from "./components/home/Hero.tsx"
import { ThemeProvider } from './components/theme-provider.tsx'
import Navbar from './components/my-ui/Navbar.tsx';
import Projects from './components/home/Projects.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Hero />
      <Projects />
    </ThemeProvider>
  )
}

export default App
