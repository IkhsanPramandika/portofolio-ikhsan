// src/particlesOptions.js

export const options = {
  background: {
    color: {
      value: "#0a192f", // Sesuaikan dengan warna background utama Anda
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1,
        },
      },
    },
  },
  particles: {
    color: {
      value: "#8892b0", // Warna titik-titik partikel
    },
    links: {
      color: "#8892b0", // Warna garis penghubung
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
