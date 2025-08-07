// src/components/CustomCursor.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', mouseMove);
    const hoverableElements = document.querySelectorAll('a, button, .left-nav a, .card-links a, .timeline-item');
    hoverableElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      hoverableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12.5,
      y: mousePosition.y - 12.5,
      transition: { type: "tween", ease: "backOut", duration: 0.1 },
    },
    hovered: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(45, 212, 191, 0.8)',
      transition: { type: "tween", ease: "backOut", duration: 0.1 },
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovered ? 'hovered' : 'default'}
    />
  );
};

export default CustomCursor;