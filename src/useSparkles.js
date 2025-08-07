// src/useSparkles.js
import { useState, useCallback } from 'react';

const generateSparkle = (color) => {
  return {
    id: String(Date.now()),
    createdAt: Date.now(),
    color,
    size: Math.floor(Math.random() * 10 + 5),
    style: {
      top: '0px',
      left: '0px',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 9999,
    },
  };
};

export const useSparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  const addSparkle = useCallback((e) => {
    const sparkle = generateSparkle('#64ffda'); // Warna percikan
    
    const newSparkles = [...sparkles, {
      ...sparkle,
      style: {
        ...sparkle.style,
        top: `${e.clientY - sparkle.size / 2}px`,
        left: `${e.clientX - sparkle.size / 2}px`,
      },
    }];
    
    setSparkles(newSparkles);

    // Hapus percikan setelah durasi tertentu
    setTimeout(() => {
        setSparkles(currentSparkles => currentSparkles.filter(s => s.id !== sparkle.id));
    }, 1000);

  }, [sparkles]);

  return { sparkles, addSparkle };
};