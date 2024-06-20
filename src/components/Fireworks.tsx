import React, { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const FireworksComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fireworksRef = useRef<Fireworks | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      fireworksRef.current = new Fireworks(containerRef.current, {
        autoresize: true,
        opacity: 0.3,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 40,
        flickering: 50,
        lineStyle: 'round',
        hue: { min: 0, max: 360 },
        delay: { min: 30, max: 60 },
        rocketsPoint: { min: 50, max: 50 },
        lineWidth: {
          explosion: { min: 1, max: 3 },
          trace: { min: 1, max: 2 },
        },
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        mouse: { click: true, move: false, max: 1 },
      });
    }

    return () => {
      fireworksRef.current?.stop();
    };
  }, []);

  useEffect(() => {
    if (fireworksRef.current) {
      fireworksRef.current.start();
    }
    return () => {
      fireworksRef.current?.stop();
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default FireworksComponent;
