import {FaJava, FaReact} from 'react-icons/fa';
import {SiTypescript, SiTailwindcss, SiFastapi, SiMongodb} from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import {motion,useMotionValue} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Skills(){

  const skills =[
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },

  ];

  const repeated = [...skills, ...skills];
  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);  //this provide smoth motion

  useEffect(() =>{
    const e1 = sectionRef.current;
    if(!e1) return;

    const io = new IntersectionObserver((
      [entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio >= 0.1);
        //isInersecting = is visible on viewport
        // intersectionRation >= 0.1 if its visible on viewport 10% 
    },
  { threshold : [0.1] }
  )
  io.observe(e1);
  return () => io.disconnect();


  }, []);



  useEffect(() => {
    if(!active) return;
    
    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
    //-1 means right to left move icons
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) =>{
      if(touchY.current == null) return; 
      const delta = e.touches[0].clentY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener('wheel', onWheel, {passive: true});
    window.addEventListener('touchstart', onTouchStart, {passive : true}),
    window.addEventListener('touchmove', onTouchMove);
  }, [active]);



  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    //now - coming from browser - which gives current frame
    const tick = (now) => {
      const dt = (now - last)/1000; //divided by 1000 to get time in per sec otherwise it wll give in ms
      last = now; //latetst postion updated
      let next = x.get() + SPEED*dir*dt;
      const loop = trackRef.current?.scrollWidth/2 || 0;

      if(loop){
        if(next <= -loop) next += loop;
        if(next >= 0) next -= loop;
      }
      x.set(next);
    id= requestAnimationFrame(tick)
    }
    
    id= requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id);
  }, [dir, x]);




  return(
    <section id="skills" 
    ref = {sectionRef}
    className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">

      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#9c29c1] via-[#b036d8] to-[#d05af6] opacity-20 blur-[120px] animate-pulse' />


        <div className='absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#9c29c1] via-[#b036d8] to-[#d05af6] opacity-20 blur-[120px] animate-pulse delay-500'/>

      </div>

      <motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9c29c1] via-[#b036d8] to-[#d05af6] z-10'
      initial={{opacity: 0, y: -30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.5, delay:0.1 }}
      >
        My Skills
      </motion.h2>

      <motion.p className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
      initial={{opacity:0, y:-10}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.1}}
      >
        Modern Application | Modern Technology
      </motion.p>


      <div className='relative w-full overflow-hidden'>
        <motion.div ref={trackRef}
        className='flex gap-10 text-6xl text-[#b036d8]'
        style={{x, whiteSpace: "nowrap", willChange: "transform"}}
        >
          {repeated.map((s, i) => (
            <div key={i} className='flex flex-col items-center gap-2 min-w-[120px]'
            aria-label = {s.name}
            title={s.name}
            > 
              <span className='hover:scale-125 transition-transform duration-300'>
                {s.icon}
              </span>
              <p className='text-sm'>
                {s.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}