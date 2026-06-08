import { useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FiX, FiExternalLink } from "react-icons/fi";

import { projectsData } from "../data/projectData";
import { iconMap } from '../utils/iconMap';
import {
    sectionStyle,
    glowStyles,
    headingStyles,
    gridStyles,
    cardStyles,
    modalStyles,
    motionVariants,
} from "../styles/projects.styles";

// ─── Section Heading ────────────────
 
function SectionHeading() {
  return (
    <motion.div className={headingStyles.wrapper} {...motionVariants.heading}>
      <h2 className={headingStyles.title}>My Projects</h2>
      <p className={headingStyles.subtitle}>Things I've built with passion</p>
      <div className={headingStyles.divider} />
    </motion.div>
  );
}

// Tag ---------------

function Tag({ tag, small = false }) {
  return (
    <span
      className={small ? cardStyles.tag : modalStyles.tag}
      style={{
        background: `${tag.color}15`,
        color: tag.color,
        border: `1px solid ${tag.color}30`,
      }}
    >
      {tag.name}
    </span>
  );
}


// small card ---------

function ProjectCard({ project, index, onClick }) {
  const IconComponent = iconMap[project.icon];
 
  return (
    <motion.div
      className={cardStyles.wrapper}
      style={{ "--hover-color": project.color }}
      {...motionVariants.card(index)}
      whileHover={{
        y: -6,
        borderColor: `${project.color}50`,
        boxShadow: `0 12px 32px rgba(0,0,0,0.4), 0 0 20px ${project.color}15`,
      }}
      onClick={() => onClick(project)}
    >
      {/* Top accent line on hover */}
      <div
        className={cardStyles.topAccent}
        style={{ background: project.color }}
      />
 
      {/* Icon */}
      <div className={cardStyles.iconWrapper}>
        {IconComponent && (
          <IconComponent style={{ color: project.color, fontSize: "2rem" }} />
        )}
      </div>
 
      {/* Badge */}
      {project.badge && (
        <div
          className={cardStyles.badge}
          style={{
            background: `${project.badgeColor}20`,
            color: project.badgeColor,
            border: `1px solid ${project.badgeColor}30`,
          }}
        >
          {project.badge}
        </div>
      )}
 
      {/* Title */}
      <div className={cardStyles.title}>{project.title}</div>
 
      {/* Short description */}
      <div className={cardStyles.desc}>{project.shortDesc}</div>
 
      {/* Tags */}
      <div className={cardStyles.tagsRow}>
        {project.tags.slice(0, 3).map((tag, i) => (
          <Tag key={i} tag={tag} small />
        ))}
      </div>
    </motion.div>
  );
}



// ─── Preview Modal ──────────────────────

function ProjectModal({ project, onClose }) {
  const IconComponent = iconMap[project.icon];
 
  return (
    <motion.div
      className={modalStyles.overlay}
      {...motionVariants.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className={modalStyles.container}
        {...motionVariants.modal}
      >
        {/* Close button */}
        <button className={modalStyles.closeBtn} onClick={onClose}>
          <FiX size={16} />
        </button>
 
        {/* Image / Icon section */}
        <div
          className={modalStyles.imgSection}
          style={{ background: project.bgColor }}
        >
          {project.image ? (
            <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full block cursor-pointer"
                title="Click to view live demo"
            >
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top hover:opacity-90 transition duration-300"
                />
            </a>
            ) : (
                IconComponent && (
                    <IconComponent
                        style={{ color: project.color, fontSize: "5rem", opacity: 0.8 }}
                    />
                )
            )}
        </div>
 
        {/* Body */}
        <div className={modalStyles.body}>
          {/* Badge */}
          {project.badge && (
            <div
              className={modalStyles.badge}
              style={{
                background: `${project.badgeColor}20`,
                color: project.badgeColor,
                border: `1px solid ${project.badgeColor}30`,
              }}
            >
              {project.badge}
            </div>
          )}
 
          {/* Title */}
          <div className={modalStyles.title}>{project.title}</div>
 
          {/* Description */}
          <div className={modalStyles.desc}>{project.description}</div>
 
          {/* Tags */}
          <div className={modalStyles.tagsRow}>
            {project.tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
 
          {/* Buttons */}
          <div className={modalStyles.btnsRow}>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={modalStyles.liveBtn}
              style={{ boxShadow: "0 0 14px rgba(29,209,161,0.3)" }}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={modalStyles.githubBtn}
              style={{ boxShadow: "0 0 14px rgba(167,139,250,0.2)" }}
            >
              <FaGithub size={14} />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


// ─── Main Section ────────────────────
 
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
 
  return (
    <section id="projects" className={sectionStyle.base}>
 
      {/* Background glows */}
      <div className={glowStyles.topLeft} />
      <div className={glowStyles.bottomRight} />
 
      <SectionHeading />
 
      {/* Projects Grid */}
      <div className={gridStyles.wrapper}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={setSelectedProject}
          />
        ))}
      </div>
 
      {/* Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
 
    </section>
  );
}