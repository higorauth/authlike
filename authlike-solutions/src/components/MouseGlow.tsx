import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] w-[500px] h-[500px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(217 91% 60% / 0.08) 0%, transparent 70%)",
        left: mousePosition.x - 250,
        top: mousePosition.y - 250,
      }}
      animate={{
        left: mousePosition.x - 250,
        top: mousePosition.y - 250,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
};

export default MouseGlow;
