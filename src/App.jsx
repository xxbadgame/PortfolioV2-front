import React from 'react';
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
  return (
    <div>
      <Navbar />

      {/*
      <Hero />
      
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
