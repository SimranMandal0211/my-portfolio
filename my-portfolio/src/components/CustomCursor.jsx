import {useState, useEffect} from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState(null);

  useEffect(() =>{
    const moveHandler = (e) => {
      setPosition({x: e.clientX, y: e.clientY})
    };

    window.addEventListener('mousemove', moveHandler);

    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  if (!position) return null;

  return(
    <div className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{transform: `translate(${position.x - 40}px, ${position.y -40}px)`}} // - 40 is for glow is in center of cursor
    >

      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#1dd1a1] to-[#f4c430] blur-3xl opacity-80"/>

    </div>
  )
}
