// src/components/BottomBar.js
import React, { memo } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUserTie, FaLaptopCode, FaStar, FaAward } from 'react-icons/fa';

const BottomBar = memo(() => (
  <nav className="bottom-bar">
    <Link to="home" smooth={true} duration={500} spy={true} aria-label="Go to Home section"><FaHome /><span>Home</span></Link>
    <Link to="experience" smooth={true} duration={500} spy={true} aria-label="Go to Experience section"><FaUserTie /><span>Exp</span></Link>
    <Link to="projects" smooth={true} duration={500} spy={true} aria-label="Go to Projects section"><FaLaptopCode /><span>Proj</span></Link>
    <Link to="skills" smooth={true} duration={500} spy={true} aria-label="Go to Skills section"><FaStar /><span>Skills</span></Link>
    <Link to="awards" smooth={true} duration={500} spy={true} aria-label="Go to Awards section"><FaAward /><span>Awards</span></Link>
  </nav>
));

export default BottomBar;