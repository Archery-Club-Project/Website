import React, { useEffect, useRef } from 'react';
import './DynamicBackground.scss';

const DynamicBackground = ({ section = "footer" }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (section !== "footer") return;
    
    const createFloatingElements = () => {
      const container = backgroundRef.current;
      if (!container) return;

      // Create floating stars/particles for footer
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        container.appendChild(particle);
      }

      // Create larger floating orbs for footer
      for (let i = 0; i < 5; i++) {
        const orb = document.createElement('div');
        orb.className = 'floating-orb';
        
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        orb.style.animationDelay = Math.random() * 30 + 's';
        orb.style.animationDuration = (Math.random() * 20 + 25) + 's';
        
        const size = Math.random() * 100 + 50;
        orb.style.width = size + 'px';
        orb.style.height = size + 'px';
        
        container.appendChild(orb);
      }
    };

    createFloatingElements();

    return () => {
      if (backgroundRef.current) {
        backgroundRef.current.innerHTML = '';
      }
    };
  }, [section]);

  const getBackgroundClass = () => {
    switch(section) {
      case "footer": return "dynamic-background-footer";
      default: return "dynamic-background-footer";
    }
  };

  return (
    <div ref={backgroundRef} className={getBackgroundClass()}>
      {section === "footer" && (
        <>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="gradient-overlay"></div>
        </>
      )}
    </div>
  );
};

export default DynamicBackground;
