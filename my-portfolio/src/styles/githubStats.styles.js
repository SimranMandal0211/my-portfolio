// ─── Background glows ────────────────────────────────────────────────────────
export const glowStyles = {
  topRight:   "absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full bg-[#1dd1a1] opacity-10 blur-[120px] animate-pulse pointer-events-none",
  bottomLeft: "absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#1dd1a1] opacity-[0.08] blur-[200px] animate-pulse delay-500 pointer-events-none",
};

// ─── Stats grid ───────────────────────────────────────────────────────────────
export const statsStyles = {
  grid:        "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
  card:        "relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center overflow-hidden group",
  hoverGlow:   "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
  hoverGlowBg: { background: "radial-gradient(circle at 50% 0%, rgba(29,209,161,0.15), transparent 70%)" },
  value:       "text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1dd1a1] to-[#f4c430]",
  label:       "text-gray-400 text-sm mt-1",
};

// ─── Main grid ────────────────────────────────────────────────────────────────
export const layoutStyles = {
  outerGrid:   "grid grid-cols-1 lg:grid-cols-2 gap-8",
  leftCol:     "flex flex-col gap-4",
  imageCard:   "p-1 rounded-2xl border border-white/10 bg-white/5 overflow-hidden",
  image:       "w-full rounded-xl",
  rightCol:    "p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
  langTitle:   "text-xl font-bold text-white mb-6 flex items-center gap-2",
  divider:     "mt-6 pt-4 border-t border-white/10",
  githubBtn: "inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-[#1dd1a1] bg-[#1dd1a1]/10 border border-[#1dd1a1] hover:bg-[#1dd1a1] hover:text-[#000712] transition-all duration-300",
};

// ─── Language bar ─────────────────────────────────────────────────────────────
export const langStyles = {
  wrapper:  "mb-4",
  row:      "flex justify-between mb-1",
  name:     "text-sm text-gray-300",
  track:    "h-2 w-full bg-white/10 rounded-full overflow-hidden",
  bar:      "h-full rounded-full",
};

// ─── Framer Motion variants ───────────────────────────────────────────────────
export const motionVariants = {
  heading: {
    initial:    { opacity: 0, y: -30 },
    whileInView:{ opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport:   { once: true },
  },
  statCard: (index) => ({
    initial:    { opacity: 0, y: 30 },
    whileInView:{ opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
    viewport:   { once: true },
  }),
  leftCol: {
    initial:    { opacity: 0, x: -40 },
    whileInView:{ opacity: 1, x: 0 },
    transition: { duration: 0.7 },
    viewport:   { once: true },
  },
  rightCol: {
    initial:    { opacity: 0, x: 40 },
    whileInView:{ opacity: 1, x: 0 },
    transition: { duration: 0.7 },
    viewport:   { once: true },
  },
  langBar: (index) => ({
    initial:    { opacity: 0, x: -20 },
    whileInView:{ opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
    viewport:   { once: true },
  }),
  langBarFill: (index, percent) => ({
    initial:    { width: 0 },
    whileInView:{ width: `${percent}%` },
    transition: { duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" },
    viewport:   { once: true },
  }),
};