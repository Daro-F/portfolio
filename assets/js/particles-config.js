// Config de base
const particlesConfig = {
  "particles": {
    "number": { "value": 120 },
    "color": { "value": ["#ff1e00", "#ffffff"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { 
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.9,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff1e00",
      "opacity": 0.3,
      "width": 1.5
    },
    "move": { "enable": true, "speed": 1.2 }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  }
};

// Initialisation pour Hero
particlesJS("particles-hero", particlesConfig);
