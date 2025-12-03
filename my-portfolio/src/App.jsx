import Navbar from './components/Navbar';
import Home from './section/Home';
import About from './section/About';
import Skills from './section/Skills';
import Projects from './section/Projects';
import Experience from './section/Experience';
import Testimonials from './section/Testimonials';
import Contact from './section/Contact';
import Footer from './section/Footer';

import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

export default function App(){
  return (
    <div className='relative gradient text-white'>
      <CustomCursor />

      {/* <ParticleBackground /> */}




      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}