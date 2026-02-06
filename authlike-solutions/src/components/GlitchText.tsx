import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-primary/50"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        animate={{
          x: [0, -2, 2, -1, 1, 0],
          opacity: [1, 0.8, 1, 0.9, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-accent/50"
        style={{ clipPath: "inset(50% 0 0 0)" }}
        animate={{
          x: [0, 2, -2, 1, -1, 0],
          opacity: [1, 0.9, 1, 0.8, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

export default GlitchText;
