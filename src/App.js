// src/App.js
import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaBehance, FaGithub, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

// --- IMPOR LIBRARY PARTICLES ---
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

// --- IMPOR KOMPONEN DARI FILE TERPISAH ---
// Pastikan Anda sudah membuat folder 'components' di dalam 'src'
import ProjectCard from "./components/ProjectCard";
import AwardsCarousel from "./components/AwardsCarousel";
import BottomBar from "./components/BottomBar";
import CustomCursor from "./components/CustomCursor";
import AnimatedText from "./components/AnimatedText";

// --- DATA
import {
  profile,
  experiences,
  projects,
  awards,
  skills,
  techIcons,
} from "./data";
import "./App.css";

// Komponen untuk bagian Navigasi Samping (Left Pane)
const SideNavigation = memo(() => (
  <nav className="left-nav">
    <Link
      to="home"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      aria-label="Go to Home section"
    >
      <span className="nav-indicator"></span>
      <span className="nav-text">Home</span>
    </Link>
    <Link
      to="experience"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      aria-label="Go to Experience section"
    >
      <span className="nav-indicator"></span>
      <span className="nav-text">Experience</span>
    </Link>
    <Link
      to="projects"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      aria-label="Go to Projects section"
    >
      <span className="nav-indicator"></span>
      <span className="nav-text">Projects</span>
    </Link>
    <Link
      to="skills"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      aria-label="Go to Skills section"
    >
      <span className="nav-indicator"></span>
      <span className="nav-text">Skills</span>
    </Link>
    <Link
      to="awards"
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      aria-label="Go to Awards section"
    >
      <span className="nav-indicator"></span>
      <span className="nav-text">Awards</span>
    </Link>
  </nav>
));

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  // Inisialisasi library partikel
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  // Konfigurasi partikel
  const particlesConfig = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  // Efek untuk mengunci scroll saat navigasi mobile terbuka
  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileNavOpen]);

  return (
    <>
      <CustomCursor />
      <BottomBar />

      {/* Komponen Latar Belakang Partikel */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />

      {/* Tombol menu mobile */}
      <motion.button
        className="mobile-menu-toggle"
        onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        aria-expanded={isMobileNavOpen}
        aria-controls="mobile-nav"
        whileTap={{ scale: 0.9 }}
      >
        <FaBars />
      </motion.button>

      {/* Navigasi Mobile Fullscreen */}
      <motion.nav
        id="mobile-nav"
        className="mobile-fullscreen-nav"
        initial={{ x: "100%" }}
        animate={{ x: isMobileNavOpen ? "0%" : "100%" }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setMobileNavOpen(false)}
        >
          Home
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setMobileNavOpen(false)}
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setMobileNavOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setMobileNavOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="awards"
          smooth={true}
          duration={500}
          spy={true}
          onClick={() => setMobileNavOpen(false)}
        >
          Awards
        </Link>
      </motion.nav>

      {/* Konten Utama */}
      <div className="layout-wrapper">
        <header className="left-pane" id="home">
          <div className="left-header">
            <TypeAnimation
              sequence={[profile.name, 1000]}
              wrapper="h1"
              speed={50}
              repeat={0}
              cursor={false}
            />
            <TypeAnimation
              sequence={[2500, profile.role]}
              wrapper="h2"
              speed={50}
              repeat={0}
              cursor={false}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              {profile.summary}
            </motion.p>
          </div>

          <SideNavigation />

          <motion.div
            className="left-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance profile"
            >
              <FaBehance />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
          </motion.div>
        </header>

        <main className="right-pane">
          <section id="experience" className="section-spacing">
            <AnimatedText
              text="Professional Experiences"
              className="h3-style"
            />
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="timeline-logo-container">
                    <img
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      className="timeline-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="timeline-content">
                    <h5>
                      {exp.role} @ {exp.company}
                    </h5>
                    <span>{exp.period}</span>
                    <ul>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" className="section-spacing">
            <AnimatedText text="Projects" className="h3-style" />
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </section>

          <section id="skills" className="section-spacing">
            <AnimatedText text="Skills" className="h3-style" />
            <div className="skills-grid">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
              >
                <h4>Design</h4>
                <p>{skills.design.join(", ")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 }}
              >
                <h4>Quality Assurance</h4>
                <p>{skills.qa.join(", ")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4 }}
              >
                <h4>Languages & Frameworks</h4>
                <p>{skills.languages.join(", ")}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5 }}
              >
                <h4>Tools & Platforms</h4>
                <p>{skills.tools.join(", ")}</p>
              </motion.div>
            </div>
          </section>

          <section id="awards" className="section-spacing">
            <AnimatedText text="Certificates & Awards" className="h3-style" />
            <AwardsCarousel />
          </section>

          <footer className="footer">
            <p>Designed & Built by {profile.name} - 2025</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
