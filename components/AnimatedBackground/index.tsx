import React from 'react';
import Particles, {IParticlesParams} from 'react-particles-js';

// import { Container } from './styles';

const defaultParams: IParticlesParams = {
  backgroundMask: {
    cover: {
      color: {
        value: '#fff',
      },
      opacity: 1,
    },
    enable: false,
  },
  detectRetina: true,
  emitters: [],
  fpsLimit: 30,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onDiv: {
        elementId: '',
        enable: false,
        mode: [],
      },
      onHover: {
        enable: true,
        mode: 'repulse',
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      absorbers: [],
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5,
        },
        radius: 60,
      },
      emitters: [],
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
    },
  },
  particles: {
    collisions: {
      enable: false,
      mode: 'bounce',
    },
    color: {
      value: ['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921'],
    },
    lineLinked: {
      blink: false,
      color: {
        value: '#ffffff',
      },
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: 'lime',
        },
        enable: false,
      },
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: 'top',
      enable: true,
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outMode: 'out',
      random: false,
      speed: 10,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: '#000000',
        },
      },
      vibrate: false,
    },
    number: {
      density: {
        enable: false,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 20,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.1,
        speed: 1,
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 0.4,
      },
      value: 0.8,
    },
    rotate: {
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      random: false,
      value: 0,
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000000',
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: 'circle',
    },
    size: {
      animation: {
        destroy: 'none',
        enable: true,
        minimumValue: 300,
        speed: 100,
        startValue: 'max',
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 300,
      },
      value: 100,
    },
    stroke: {
      color: {
        value: '#000000',
      },
      width: 0,
      opacity: 1,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: false,
  polygon: {
    draw: {
      enable: false,
      stroke: {
        color: {
          value: '#fff',
        },
        width: 0.5,
        opacity: 1,
      },
    },
    enable: false,
    inline: {
      arrangement: 'one-per-point',
    },
    move: {
      radius: 10,
      type: 'path',
    },
    scale: 1,
    type: undefined,
    url: '',
  },
};

const AnimatedBackground: React.FC = () => {
  return <Particles width="100vw" height="100vh" params={defaultParams} />;
}

export default AnimatedBackground;