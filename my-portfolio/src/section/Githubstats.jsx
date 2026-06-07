import {motion} from 'framer-motion';
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

import {GITHUB_USERNAME, statsData, languagesData, githubImages } from '../data/githubStatesData';
import {iconMap} from '../utils/iconMap';

import {
    sectionStyle,
    glowStyles,
    headingStyles,
    statsStyles,
    layoutStyles,
    langStyles,
    motionVariants
} from '../styles/githubStats.styles';

//  ------- Heading -------
function SectionHeading(){
    return (
        <motion.div className={headingStyles.wrapper} {...motionVariants.heading}>
            <h2 className={headingStyles.title}>Github Stats</h2>
            <p className={headingStyles.subtitle}>Real numbers, real work</p>
            <div className={headingStyles.divider} />
        </motion.div>
    )
}

// --------- Stat Card -------
function StatCard({ item, index}){
    const IconComponent = iconMap[item.icon];

    return (
        <motion.div className = {statsStyles.card} {...motionVariants.statCard(index)}
            whileHover = {{ scale: 1.05, borderColor: '#1dd1a1'}}
        >
            <div className={statsStyles.hoverGlow} style={statsStyles.hoverGlowBg} />

            <IconComponent className="text-3xl mb-2 mx-auto" style={{ color: "#f4c430", fontSize: "2rem"}} />

            <div className={statsStyles.value}>{item.value}</div>
            <div className={statsStyles.label}>{item.label}</div>
        </motion.div>
    );
}


//  ----- Language bar ----
function LanguageBar({ lang, index}){
    return (
         <motion.div className={langStyles.wrapper} {...motionVariants.langBar(index)}>
            <div className={langStyles.row}>
                <span className={langStyles.name}>{lang.name}</span>
                <span className="text-sm font-semibold" style={{ color: lang.color }}>
                {lang.percent}%
                </span>
            </div>
            <div className={langStyles.track}>
                <motion.div
                className={langStyles.bar}
                style={{ background: lang.color }}
                {...motionVariants.langBarFill(index, lang.percent)}
                />
            </div>
        </motion.div>
    )
}

// ----- Github Image Card -----
function GitHubImageCard({ img }) {
  return (
    <div className={layoutStyles.imageCard}>
      <img
        src={img.src(GITHUB_USERNAME)}
        alt={img.alt}
        className={layoutStyles.image}
        loading="lazy"
      />
    </div>
  );
}




//  ----- Main Component -----
export default function GitHubStats(){
    return (
        <section id="github-stats" className={sectionStyle.base}>
            {/* Background glows */}
            <div className={glowStyles.topRight} />
            <div className={glowStyles.bottomLeft} />

            <SectionHeading />

            <div className="max-w-6xl mx-auto">
                {/* stat cards */}
                <div className={statsStyles.grid}>
                    {statsData.map(( item, index ) => (
                        <StatCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Github Cards + Language */}
                <div className={layoutStyles.outerGrid}>
                    {/* Left - Github image cards */}
                    <motion.div className={layoutStyles.leftCol} {...motionVariants.leftCol}>
                        {githubImages.map((img, i) => (
                            <GitHubImageCard key={i} img={img} />
                        ))}
                    </motion.div>

                    {/* Right - Language bar */}
                    <motion.div className={layoutStyles.rightCol} {...motionVariants.rightCol}>
                        <h3 className={layoutStyles.langTitle}>
                            {/* 💻 Most Used Languages */}
                             <FaLaptopCode style={{ color: "#0d6e6e", fontSize: "1.5rem" }} />
                                Most Used Languages
                        </h3>

                        {languagesData.map((lang, i) => (
                            <LanguageBar key={i} lang={lang} index={i} />
                        ))}

                        <div className={layoutStyles.divider}>
                            <a
                                href={`https://github.com/${GITHUB_USERNAME}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={layoutStyles.githubBtn}
                                style={{boxShadow: "0 0 14px rgba(29,209,161,0.3)"}}
                            >
                                <FaGithub style={{ fontSize: "1rem" }} />
                                View GitHub Profile
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}