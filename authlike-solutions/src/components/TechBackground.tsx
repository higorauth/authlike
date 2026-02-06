import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TechBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated grid with pulse effect */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                fill="none"
                stroke="hsl(217 91% 60% / 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Glowing orbs with more variety */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.4) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(200 100% 60% / 0.3) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.25, 0.1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle, hsl(280 100% 60% / 0.2) 0%, transparent 70%)" }}
      />
      
      {/* Enhanced floating particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 3 === 0 ? 'w-2 h-2 bg-primary/60' : i % 3 === 1 ? 'w-1.5 h-1.5 bg-accent/40' : 'w-1 h-1 bg-primary/30'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50 - Math.random() * 30, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data stream lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          style={{
            width: `${150 + Math.random() * 200}px`,
            top: `${20 + i * 15}%`,
            left: "-200px",
          }}
          animate={{
            x: [0, dimensions.width + 400],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Multiple scan lines */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 3 }}
      />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-primary/20 rounded-br-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-primary/20 rounded-tl-[100px]" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise" />
    </div>
  );
};

export default TechBackground;
