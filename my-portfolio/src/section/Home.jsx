import React from "react";
import { useState, useEffect, useMemo } from "react";
import ParticleBackground from '../components/ParticleBackground';
import {motion} from 'framer-motion';
import {FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import avator from "../assets/avatar.png";


const socials = [
  // {Icon: FaXTwitter, label: "X", href: "http://twitter.com"},
  {Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/simran-mandal0211/"},
  {Icon: FaGithub, label: "GitHub", href: "https://github.com/SimranMandal0211"},
]

const glowVariants = { 
  initial: { scale: 1, y:0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"},
  hover: {
      scale: 1.2, y: -3,
      filter: "drop-shadow(0 0 8px rgba(29,209,161, 0.9)) drop-shadow(0 0 18px rgba(244,196,48, 0.8))",
      transition: { type: "spring", stiffness: 300, damping: 15}
  },
  tap: {scale: 0.95, y:0, transition: {duration: 0.08}}
}



export default function Home(){
  const roles = useMemo(() => ["Web Developer", "Software Developer", " Frontend Developer", "Backend Developer", "Full-stack Developer"], []);

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);


  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if(!deleting && subIndex < current.length) setSubIndex (v => v+1);
      else if(!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
      else if(deleting && subIndex >0) setSubIndex(v => v-1);
      else if(deleting && subIndex === 0){
        setDeleting(false);
        setIndex(p => (p+1) % roles.length);
      }
    }, deleting ? 40 : 60)


    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);





  return (
    <section id="home" className="w-full min-h-screen relative overflow-hidden">
    
    <div className='relative z-10 min-h-screen w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col justify-center min-h-screen text-center lg:text-left relative'>
        <div className='w-full lg:pr-16 mx-auto max-w-[38rem] pt-20'>
          <motion.div className='mb-3 text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6rem]'   
            initial ={{opacity:0, y:12}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6}}
          >
            <span>
              {roles[index].substring(0, subIndex)}
            </span>
            <span className='inline-block w-[2px] ml-1 bg-white animate-pulse align-middle'
            style={{height: "1em"}}></span>


          </motion.div>


        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1dd1a1] via-[#f4c430] to-[#f4c430] drop-shadow-lg"
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration: 1}}
        >
          
          Hello, I'm <br/>
          <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl lg:whitespace-nowrap">  
            Simran Mandal
          </span>


        </motion.h1>

        <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:max-0"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y:0}}
          transition={{delay: 0.4, duration: 0.8}}
        >
          I turn complex ideas into{" "}
          <span className="text-[#1dd1a1] font-medium">seamless, high-impact</span>
          {" "}web experiences — building{" "}
          <span className="text-[#f4c430] font-medium">modern, scalable</span>
          {" "}and {" "}
          <span className="text-[#a78bfa] font-medium">lightning-fast</span>
          {" "}applications that make a difference.
        </motion.p>


        <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 0.8,duration:0.8}}
        >
          <a href="#projects"
            className="px-6 py-3 rounded-full font-medium text-lg text-[#1dd1a1] bg-[#1dd1a1]/10 border border-[#1dd1a1] hover:bg-[#1dd1a1] hover:text-[#000712] transition-all duration-300"
            style={{boxShadow: "0 0 14px rgba(29,209,161,0.4)"}}>
              View My Work
          </a>
          <a href="/Simran_Mandal_Resume.pdf" 
            download
            className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
          >
            My Resume
          </a>
        </motion.div>

        <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
          {socials.map(({Icon, label, href}) => (
            <motion.a
              href={href}
              key={label}
              target="_blank"
              aria-label={label}
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300"
            >
              <Icon />
            </motion.a>
          ))}
        </div>


        </div>
      </div>


      
      <div className="relative hidden lg:block">
        <div className="absolute top-[55%] -translate-y-1/2 right-0 object-contain select-none pointer-events-none"
          style={{
            right: "10px", width: "min(22vw, 410px)", height: "min(40vw,760px)", borderRadius: "50%",
            filter: "blur(38px)", opacity: 0.32, background: "conic-gradient(#1dd1a1, #0d1117, #1dd1a1)"
          }} 
        />

        <motion.img src={avator} alt="Simran Mandal"
          className="absolute right-0 object-contain select-none pointer-events-none"
          style={{
            bottom: "40px", width: "min(42vw, 600px)", maxHeight: "85vh"
          }}
          initial={{opacity:0, y:40, scale:0.98}}
          animate={{opacity:1, y:0, scale:1}}
          transition={{delay: 0.2, duration:0.8}}
        />
      </div>


    </div>

    </section>
  )
}
