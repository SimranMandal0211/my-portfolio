// ─── Background glows ────────────────────────────────────────────────────────
export const glowStyles = {
  topLeft:    "absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#1dd1a1] opacity-5 blur-[120px] animate-pulse pointer-events-none",
  bottomRight:"absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#a78bfa] opacity-5 blur-[120px] animate-pulse delay-700 pointer-events-none",
};

// ─── Grid ─────────────────────────────────────────────────────────────────────
export const gridStyles = {
  wrapper: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
};

// ─── Small Card ───────────────────────────────────────────────────────────────
export const cardStyles = {
  wrapper:     "relative bg-[#050d1a] rounded-2xl p-5 border border-white/10 cursor-pointer transition-all duration-300 overflow-hidden group",
  topAccent:   "absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  iconWrapper: "text-3xl mb-3",
  badge:       "text-[10px] font-semibold px-3 py-1 rounded-full inline-block mb-2",
  title:       "text-base font-semibold text-white mb-2",
  desc:        "text-xs text-gray-500 leading-relaxed mb-3",
  tagsRow:     "flex flex-wrap gap-2",
  tag:         "text-[10px] px-2 py-1 rounded-full",
};

// ─── Preview Modal ────────────────────────────────────────────────────────────
export const modalStyles = {
  overlay:     "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4",
  container:   "relative bg-[#050d1a] rounded-2xl border border-white/10 w-full max-w-2xl overflow-hidden shadow-2xl",
  imgSection: "w-full h-64 sm:h-72 flex items-center justify-center overflow-hidden",
  closeBtn:    "absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-10",
  body:        "p-6",
  badge:       "text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3",
  title:       "text-2xl font-bold text-white mb-3",
  desc:        "text-gray-400 text-sm leading-relaxed mb-4",
  tagsRow:     "flex flex-wrap gap-2 mb-6",
  tag:         "text-xs px-3 py-1.5 rounded-full",
  btnsRow:     "flex gap-3",
  liveBtn:     "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[#000712] bg-[#1dd1a1] font-semibold text-sm hover:bg-[#0fb386] transition-all duration-300",
  githubBtn:   "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[#a78bfa] bg-[#a78bfa]/10 border border-[#a78bfa] font-semibold text-sm hover:bg-[#a78bfa] hover:text-[#000712] transition-all duration-300",
};

// ─── Framer Motion variants ───────────────────────────────────────────────────
export const motionVariants = {
  heading: {
    initial:    { opacity: 0, y: -30 },
    whileInView:{ opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport:   { once: false },
  },
  card: (index) => ({
    initial:    { opacity: 0, y: 40 },
    whileInView:{ opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
    viewport:   { once: false, amount: 0.2 },
  }),
  overlay: {
    initial:  { opacity: 0 },
    animate:  { opacity: 1 },
    exit:     { opacity: 0 },
    transition:{ duration: 0.2 },
  },
  modal: {
    initial:  { opacity: 0, scale: 0.9, y: 20 },
    animate:  { opacity: 1, scale: 1,   y: 0  },
    exit:     { opacity: 0, scale: 0.9, y: 20 },
    transition:{ duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};