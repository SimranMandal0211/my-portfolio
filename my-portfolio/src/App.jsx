import React from "react";

import Navbar from './components/Navbar';
import Home from './section/Home';
import About from './section/About';
import Skills from './section/Skills';
import Projects from './section/Projects';
import Contact from './section/Contact';
import Footer from './section/Footer';

import Journey from './section/Journey';
import GitHubStats from './section/Githubstats';

import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import IntroAnimation from './components/IntroAnimation';



export default function App(){
  const [introDone, setIntroDone] = React.useState(false);

  return (
  <>
  {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

    {introDone && (
      <div className='relative text-white bg-[]'>
        <CustomCursor />
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[15%] left-[10%] w-[700px] h-[700px] rounded-full bg-[#1dd1a1] opacity-[0.03] blur-[200px]" />
          <div className="absolute top-[55%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#f4c430] opacity-[0.025] blur-[200px]" />
          <div className="absolute top-[80%] left-[30%] w-[500px] h-[500px] rounded-full bg-[#a78bfa] opacity-[0.02] blur-[180px]" />
        </div>

        <ParticleBackground />




        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Journey/>
        {/* <Testimonials /> */}
        <GitHubStats/>
        <Contact />
        <Footer />
      </div>
    )}
  </>
  )
}