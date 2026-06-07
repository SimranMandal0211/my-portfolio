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


  React.useEffect(() => {
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
    <section id="home" className="w-full h-screen relative bg-[#000712] overflow-hidden">
    
    <ParticleBackground />
    <div>
      <div className="absolute -top-32 -left-32  
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-gradient-to-r from-[#1dd1a1] via-[#0d6e6e] to-[#1dd1a1]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse delay-500
        "></div>


      <div className="absolute bottom-0 right-0 
        w-[70vw] sm:w-[50vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw]
        max-w-[500px] max-h-[500px]
        rounded-full
        bg-gradient-to-r from-[#1dd1a1] via-[#0d6e6e] to-[#1dd1a1]
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse delay-500
      "></div>
    </div>
    
    <div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>
        <div className='w-full lg:pr-24 mx-auto max-w-[48rem]'>
          <motion.div className='mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6rem]'
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


        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1dd1a1] via-[#f4c430] to-[#f4c430] drop-shadow-lg"
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration: 1}}
        >
          
          Hello, I'm <br/>
          <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
            Simran Mandal
          </span>


        </motion.h1>

        <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:max-0"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y:0}}
        transition={{delay: 0.4, duration: 0.8}}
        >
          
          I turn complex ideas into seamless, high-impact web experiences - building modern, scalable, and lightning-fast applications that make a difference.</motion.p>


        <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: 0.8,duration:0.8}}
        >
          <a href="#projects"
          className="px-6 py-3 rounded-full font-medium text-lg text-[#1dd1a1] bg-[#1dd1a1]/10 border border-[#1dd1a1] hover:bg-[#1dd1a1] hover:text-[#000712] transition-all duration-300"
          style={{boxShadow: "0 0 14px rgba(29,209,161,0.4)"}}>View My Work</a>
          <a href="/Simran_Mandal_Resume.pdf" 
          download
          className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
        >My Resume</a>
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
        <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          right: "10px", width: "min(22vw, 410px)", height: "min(40vw,760px)", borderRadius: "50%",
          filter: "blur(38px)", opacity: 0.32, background: "conic-gradient(#1dd1a1, #0d1117, #1dd1a1)"
        }} />

        <motion.img src={avator} alt="Simran Mandal"
        className="absolute top-1 -translate-y-1 object-contain select-none pointer-events-none" //top-1/2
        style={{
          right: "-30px", width: "min(45vw, 780px)", maxHeight: "90vh"
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
