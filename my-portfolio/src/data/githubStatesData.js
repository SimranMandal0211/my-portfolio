export const GITHUB_USERNAME = "SimranMandal0211";

export const statsData = [
  { label: "Projects Built", value: "10+",   icon: "FaTools"  },
  { label: "Technologies",   value: "15+",   icon: "FaBolt"   },
  { label: "Hours Coded",    value: "1000+", icon: "FaClock"  },
  { label: "Cups of Coffee", value: "∞",     icon: "FaCoffee" },
];

export const languagesData = [
  { name: "JavaScript",  percent: 40, color: "#f7df1e" },
  { name: "React / JSX", percent: 25, color: "#61dafb" },
  { name: "Java",        percent: 15, color: "#b07219" },
  { name: "CSS",         percent: 12, color: "#563d7c" },
  { name: "Others",      percent: 8,  color: "#9c29c1" },
];

export const githubImages = [
  { 
    alt: "GitHub Stats",  
    src: (u) => `https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d0d0d&title_color=0d9e9e&icon_color=6b0f6b&text_color=ffffff` 
  },
  { 
    alt: "GitHub Streak", 
    src: (u) => `https://streak-stats.demolab.com/?user=${u}&theme=tokyonight&hide_border=true&background=0d0d0d&ring=0d6e6e&fire=6b0f6b&currStreakLabel=ffffff` 
  },
];