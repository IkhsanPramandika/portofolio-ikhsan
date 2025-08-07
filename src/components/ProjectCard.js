// src/components/ProjectCard.js
import React, { useRef, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLink, FaCode } from "react-icons/fa";
import { techIcons } from "../data";

const ProjectCard = memo(({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <motion.div
      className="project-card-new"
      ref={ref}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="project-image-container">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          style={{ y }}
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="project-tech-icons">
          {project.tech.map((techName, i) => (
            <span key={i} title={techName}>
              {techIcons[techName]}
            </span>
          ))}
        </div>
        <div className="card-links">
          <a
            href={project.link.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Demo for ${project.title}`}
          >
            <FaLink /> Demo
          </a>
          <a
            href={project.link.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Code for ${project.title}`}
          >
            <FaCode /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectCard;
