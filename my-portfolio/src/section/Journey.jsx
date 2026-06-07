import { iconMap } from '../utils/iconMap';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { journeyData } from '../data/journeyData';  
import { sectionStyle, glowStyles, headingStyles, desktopStyles, mobileStyles, badgeStyle, cardTextStyles, motionVariants,} from '../styles/journey.styles';

// shared function
// function SectionHeading(){
//     return (
//         <motion.div
//             className={headingStyles.wrapper}
//             {...motionVariants.heading}
//         >
//             <h2 className={headingStyles.title}>My Journey</h2>
//             <p className={headingStyles.subtitle}>From curiosity to craft -- every step shaped who I am</p>
//             <div className={headingStyles.divider}></div>
//         </motion.div>
//     )
// }

function YearBadge({ year, color}){
    return (
        <span className={cardTextStyles.badge} style={badgeStyle(color)}>
            {year}
        </span>
    );
}


// --------------- Desktop Card ---------------

function DesktopCard({ item, index }){
    const isLeft = index % 2 === 0;
    const IconComponent = iconMap[item.icon];

    return(
        <motion.div
            className = {desktopStyles.row(isLeft)} 
            {...motionVariants.desktopCard(isLeft)}
            transition={{ ...motionVariants.desktopCard(isLeft).transition, delay: index * 0.1}}
        >
            {/* Card */}
            <div className ={desktopStyles.cardWrapper(isLeft)}>
                <motion.div
                    className={desktopStyles.card}
                    whileHover={{ scale: 1.03, borderColor: item.color}}
                    transition={{ type: "spring", stiffness: 300, damping: 20}}
                >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={ desktopStyles.cardHoverGlow(isLeft) }
                    />

                    <div className={desktopStyles.iconRow(isLeft)}>
                        <IconComponent style={{ color: item.color, fontSize: "1.5rem " }} />
                        <YearBadge year={item.year} color={item.color} />
                    </div>

                    <h3 className={cardTextStyles.title}>{item.title}</h3>
                    <p className={cardTextStyles.desc}>{item.description}</p>

                </motion.div>
            </div>


            {/* center dot */}
            <div className={desktopStyles.dotWrapper}>
                <motion.div
                    className={desktopStyles.dot}
                    style = {{ backgroundColor: item.color , boxShadow: `0 0 16px ${item.color}88`}}
                    {...motionVariants.dot(index)}
                />
            </div>

            <div className={desktopStyles.spacer} />
        </motion.div>
    );
}


// --------------- Mobile Card ---------------

function MobileCard({ item, index, isLast}){
    const IconComponent = iconMap[item.icon];
    return (
        <motion.div 
            className={mobileStyles.row}
            {...motionVariants.mobileCard(index)}
        >
            {/* Dot + line */}
            <div className={mobileStyles.dotCol}>
                <motion.div
                className={mobileStyles.dot}
                style = {{ background: item.color, boxShadow: `0 0 12px ${item.color}88`}}
                {...motionVariants.dot(index)}
                />
                {!isLast && (
                    <div className="w-[2px] flex-1 mt-2"
                    style={mobileStyles.line(item.color)} />
                )}
            </div>


            {/* Card */}
            <div className={mobileStyles.card}>
                <div className={mobileStyles.cardInner}>
                <div className={mobileStyles.iconRow}>
                    <IconComponent style={{ color: item.color, fontSize: "1.25rem" }} />
                    <YearBadge year={item.year} color={item.color} />
                </div>
                <h3 className={mobileStyles.title}>{item.title}</h3>
                <p className={mobileStyles.desc}>{item.description}</p>
                </div>
            </div>

        </motion.div>
    )
}



// --------------- Main Jouney Component ---------------

export default function Journey(){
    const sectionRef = useRef(null);

    const { scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0.1,0.9], ["0%", "100%"]);

    return(
        <section
            ref={sectionRef}
            id="journey"
            className = {sectionStyle.base}
        >
            {/* Background Glow */}
            <div className={glowStyles.topLeft} />
            <div className={glowStyles.bottomRight} />

            {/* <SectionHeading /> */}
            {/* section heading */}
            <motion.div
                className={headingStyles.wrapper}
                {...motionVariants.heading}
            >
                <h2 className={headingStyles.title}>My Journey</h2>
                <p className={headingStyles.subtitle}>From curiosity to craft -- every step shaped who I am</p>
                <div className={headingStyles.divider}></div>
            </motion.div>


            {/* Desktop timeline */}
            <div className={desktopStyles.wrapper}>
                <div className={desktopStyles.lineTrack}>
                    <motion.div
                        className="w-full h-full rounded-full origin-top"
                        style = {{ height: lineHeight, ...desktopStyles.lineProgress }}
                    />
                </div>

                {journeyData.map((item, index) => (
                    <DesktopCard key={index} item={item} index={index} />
                ))}
            </div>

            {/* Mobile Timeline */}
            <div className={mobileStyles.wrapper}>
                {journeyData.map((item, index) => (
                    <MobileCard 
                        key={index}
                        item={item}
                        index={index}
                        isLast = { index === journeyData.length - 1 }
                    />
                ))}
            </div>


        </section>
    )
}