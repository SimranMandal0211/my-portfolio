// ─── Background glows ──────────────────────────────
export const glowStyles = {
  topLeft:   "absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#1dd1a1] opacity-10 blur-[120px] animate-pulse pointer-events-none",
  bottomRight: "absolute -bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#1dd1a1] opacity-10 blur-[180px] animate-pulse delay-700 pointer-events-none",
};

// ─── Desktop timeline ─────────────────────────
export const desktopStyles = {
  wrapper:      "hidden md:block relative max-w-4xl mx-auto",
  lineTrack:    "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 rounded-full",
  lineProgress: { background: "linear-gradient(to bottom, #1dd1a1, #f4c430)" },
  row: (isLeft) => `relative flex w-full items-center justify-between mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`,
  cardWrapper: (isLeft) => `w-[44%] ${isLeft ? "text-right" : "text-left"}`,
  card:         "relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group",
  cardHoverGlow:(isLeft) => ({
    background: `radial-gradient(circle at ${isLeft ? "100% 50%" : "0% 50%"}, rgba(29,209,161,0.15), transparent 70%)`,
  }),
  iconRow: (isLeft) => `flex items-center gap-3 mb-2 ${isLeft ? "justify-end" : "justify-start"}`,
  dot:          "w-5 h-5 rounded-full border-2 border-white/30",
  dotWrapper:   "absolute left-1/2 -translate-x-1/2 z-10",
  spacer:       "w-[44%]",
};

// ─── Mobile timeline ───────────────────────────────
export const mobileStyles = {
  wrapper:    "md:hidden relative max-w-lg mx-auto px-2",
  row:        "relative flex gap-4 mb-8",
  dotCol:     "flex flex-col items-center",
  dot:        "w-4 h-4 rounded-full mt-1 shrink-0",
  line: (color) => ({ background: `${color}44` }),
  card:       "flex-1 pb-2",
  cardInner:  "p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
  iconRow:    "flex items-center gap-2 mb-2",
  title:      "text-base font-bold text-white mb-1",
  desc:       "text-gray-400 text-sm leading-relaxed",
};

// ─── Year Badge ────────────────────────────
export const badgeStyle = (color) => ({
  background: `${color}22`,
  color,
  border: `1px solid ${color}44`,
});

// ─── Shared card text ───────────────────────────────
export const cardTextStyles = {
  title: "text-lg font-bold text-white mb-2",
  desc:  "text-gray-400 text-sm leading-relaxed",
  badge: "text-xs font-bold px-3 py-1 rounded-full",
};

// ─── Framer Motion variants ───────────────────────────
export const motionVariants = {
  desktopCard: (isLeft) => ({
    initial:    { opacity: 0, x: isLeft ? -60 : 60 },
    whileInView:{ opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    viewport:   { once: true, amount: 0.3 },
  }),
  mobileCard: (index) => ({
    initial:    { opacity: 0, x: -30 },
    whileInView:{ opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: index * 0.1 },
    viewport:   { once: true, amount: 0.3 },
  }),
  dot: (index) => ({
    initial:    { scale: 0 },
    whileInView:{ scale: 1 },
    transition: { duration: 0.4, delay: index * 0.1 + 0.2 },
    viewport:   { once: true },
  }),
  heading: {
    initial:    { opacity: 0, y: -30 },
    whileInView:{ opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport:   { once: true },
  },
};