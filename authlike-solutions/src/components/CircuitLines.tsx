import { motion } from "framer-motion";

const CircuitLines = () => {
  const paths = [
    "M0,100 L50,100 L50,50 L150,50 L150,100 L200,100",
    "M200,0 L200,80 L120,80 L120,150 L80,150",
    "M0,200 L100,200 L100,120 L180,120 L180,180 L250,180",
    "M300,50 L250,50 L250,100 L200,100 L200,150 L150,150",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg className="w-full h-full">
        {paths.map((path, index) => (
          <g key={index}>
            <path
              d={path}
              fill="none"
              stroke="hsl(217 91% 60% / 0.3)"
              strokeWidth="1"
              transform={`translate(${index * 100}, ${index * 50})`}
            />
            <motion.circle
              r="3"
              fill="hsl(217 91% 60%)"
              filter="url(#glow)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5,
              }}
              style={{
                offsetPath: `path('${path}')`,
                transform: `translate(${index * 100}px, ${index * 50}px)`,
              }}
            />
          </g>
        ))}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default CircuitLines;
