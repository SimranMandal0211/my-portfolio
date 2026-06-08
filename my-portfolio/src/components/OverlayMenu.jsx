import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { FiX } from "react-icons/fi";

const menuItems = [
  { label: "Home",         id: "home"         },
  { label: "About",        id: "about"        },
  { label: "Skills",       id: "skills"       },
  { label: "Projects",     id: "projects"     },
  { label: "Journey",      id: "journey"      },
  { label: "GitHub Stats", id: "github-stats" },
  { label: "Contact",      id: "contact"      },
];

export default function OverlayMenu({isOpen, onClose}){
  const [origin, setOrigin] = useState("95% 8%");

  useEffect(() => {
    const update = () => setOrigin(window.innerWidth < 1024 ? "95% 8%" : "50% 8%");
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return(
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})`}}
          animate={{ clipPath: `circle(150% at ${origin})`}}
          exit={{ clipPath: `circle(0% at ${origin})`}}
          transition={{duration: 0.7, ease: [0.4,0,0.2,1]}}
          style={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}
        >
          <button onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {menuItems.map((item, index) => (
              <motion.li key={item.id}
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{delay: 0.3 + index*0.1}}
              >
                <a href={`#${item.id}`}
                  onClick={onClose}
                  className="text-4xl text-white font-semibold hover:text-[#1dd1a1] transition-colors duration-300"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}