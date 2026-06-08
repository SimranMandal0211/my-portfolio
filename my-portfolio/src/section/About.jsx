import {motion} from "framer-motion";
import profile from '../assets/profile.jpg';

import { MdOutlineTimer, MdOutlineRocketLaunch } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";


export default function About(){

  
const stats = [
  { label: "Experience", value: "1+ years",        icon: <MdOutlineTimer />,         color: "#1dd1a1", bg: "#0a1f1a", border: "#1dd1a130" },
  { label: "Speciality", value: "Full Stack",       icon: <BsLightningChargeFill />,  color: "#a78bfa", bg: "#110d1f", border: "#a78bfa30" },
  { label: "Focus",      value: "Performance & UX", icon: <MdOutlineRocketLaunch />,  color: "#f4c430", bg: "#1a1500", border: "#f4c43030" },
];




  return(
    <section id="about"
      className="min-h-screen w-full flex items-center justify-center relative text-white overflow-hidden"
    >
      
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 md:px-10 lg:px-12 pt-10 pb-20 flex flex-col gap-12">
        <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{opacity:0, y:24}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.6}}
          viewport={{once:false, amount:0.4}}
        >
          <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1dd1a1]/20 to-[#0d1117]/20 border border-[#1dd1a1]/25"
            whileHover={{scale:1.02}}
            transition={{type:"spring", stiffness:200, damping:10}}
          >
            <img src={profile} alt="profile" className="absolute inset-0" />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2  className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1dd1a1] via-[#f4c430] to-[#f4c430]"
            >
              Simran Mandal
            </h2>

            <motion.p
              className="mt-2 text-lg sm:text-xl font-semibold text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
            >
              I build{" "}
              <span className="text-[#1dd1a1] font-medium">scalable, modern applications</span>
              {" "}with a strong focus on{" "}
              <span className="text-[#f4c430] font-medium">clear architecture, delightful UX</span>
              {" "}and performance. My toolkit spans{" "}
              <span className="text-[#a78bfa] font-medium">React, Next.js, TypeScript</span>
              ,{" "}
              <span className="text-[#1dd1a1] font-medium">Tailwind CSS</span>
              {" "}and{" "}
              <span className="text-[#f4c430] font-medium">RESTful APIs</span>
              {" "}— bringing ideas to life from concept to production with robust APIs and smooth interfaces.
            </motion.p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    boxShadow: `0 0 16px ${item.color}55`,
                    borderColor: item.color,
                  }}
                >
                  <div className="text-2xl shrink-0" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                    <div className="text-sm font-semibold" style={{ color: item.color }}>
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="#projects"
                className="inline-flex items-center justify-center rounded-lg text-[#1dd1a1] bg-[#1dd1a1]/10 border border-[#1dd1a1] px-5 py-3 font-semibold transition-all duration-300 hover:bg-[#1dd1a1] hover:text-[#000712]"
                style={{boxShadow: "0 0 14px rgba(29,209,161,0.3)"}}
              >
                View Projects
              </a>
              <a href="#contact"
                className="inline-flex items-center justify-center rounded-lg text-[#a78bfa] bg-[#a78bfa]/10 border border-[#a78bfa] px-5 py-3 font-semibold transition-all duration-300 hover:bg-[#a78bfa] hover:text-[#000712]"
                style={{boxShadow: "0 0 14px rgba(167,139,250,0.3)"}}
              >
                Get In Touch
              </a>
            </div>


          </div>
        </motion.div>


        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
          >
            About <span className="text-[#1dd1a1]">Me</span>
          </motion.h3>

          {/* First paragraph */}
          <motion.p
            className="text-gray-400 leading-relaxed text-base sm:text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            I'm a{" "}
            <span className="text-[#1dd1a1] font-medium">Software Developer</span>
            {" "}and{" "}
            <span className="text-[#1dd1a1] font-medium">Web Developer</span>
            {" "}— passionate about building{" "}
            <span className="text-[#a78bfa] font-medium">fast, resilient applications</span>
            . I build scalable, modern applications with a strong focus on{" "}
            <span className="text-[#f4c430] font-medium">clear architecture, delightful UX</span>
            {" "}and performance.
          </motion.p>

          {/* Second paragraph */}
          <motion.p
            className="text-gray-400 leading-relaxed text-base sm:text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            My toolkit spans{" "}
            <span className="text-[#1dd1a1] font-medium">React, Next.js, TypeScript</span>
            ,{" "}
            <span className="text-[#a78bfa] font-medium">Tailwind CSS</span>
            {" "}and{" "}
            <span className="text-[#f4c430] font-medium">RESTful APIs</span>
            {" "}— bringing ideas to life from concept to production with robust APIs and smooth interfaces.
          </motion.p>

          {/* Third paragraph */}
          <motion.p
            className="text-gray-400 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            I love turning ideas into{" "}
            <span className="text-[#f4c430] font-medium">scalable, user-friendly products</span>
            {" "}that make an impact.
          </motion.p>

        </motion.div>

      </div>
    </section>
  )
}