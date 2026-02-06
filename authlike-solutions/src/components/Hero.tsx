import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Bot, BarChart3, Cpu, Network, Sparkles, Code, Database, Shield } from "lucide-react";
import TypeWriter from "./TypeWriter";
import GlitchText from "./GlitchText";

const floatingIcons = [
  { icon: Zap, x: "12%", y: "18%", size: "w-16 h-16", delay: 0 },
  { icon: Bot, x: "82%", y: "22%", size: "w-14 h-14", delay: 1 },
  { icon: BarChart3, x: "78%", y: "68%", size: "w-12 h-12", delay: 2 },
  { icon: Cpu, x: "8%", y: "62%", size: "w-14 h-14", delay: 1.5 },
  { icon: Network, x: "88%", y: "45%", size: "w-10 h-10", delay: 0.5 },
  { icon: Sparkles, x: "18%", y: "42%", size: "w-10 h-10", delay: 2.5 },
  { icon: Code, x: "5%", y: "35%", size: "w-12 h-12", delay: 3 },
  { icon: Database, x: "92%", y: "58%", size: "w-11 h-11", delay: 1.2 },
  { icon: Shield, x: "15%", y: "75%", size: "w-10 h-10", delay: 2.8 },
];

const typeWriterWords = ["impulsiona", "transforma", "revoluciona", "acelera"];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating tech icons with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.size} rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center backdrop-blur-sm`}
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: item.delay },
              scale: { duration: 0.5, delay: item.delay },
              y: { duration: 5 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            }}
          >
            <item.icon className="w-1/2 h-1/2 text-primary" />
            {/* Multi-layer glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl -z-10" />
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl -z-20 scale-150" />
          </motion.div>
        ))}

        {/* Enhanced connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 60% / 0)" />
              <stop offset="50%" stopColor="hsl(217 91% 60% / 1)" />
              <stop offset="100%" stopColor="hsl(217 91% 60% / 0)" />
            </linearGradient>
          </defs>
          <motion.line
            x1="12%" y1="18%" x2="82%" y2="22%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.line
            x1="82%" y1="22%" x2="78%" y2="68%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <motion.line
            x1="8%" y1="62%" x2="18%" y2="42%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
          <motion.line
            x1="18%" y1="42%" x2="12%" y2="18%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeDasharray="8,4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium backdrop-blur-sm relative overflow-hidden group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="relative z-10">Transformação Digital Inteligente</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </span>
          </motion.div>

          {/* Main heading with TypeWriter effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            <span className="text-foreground">Tecnologia que</span>
            <br />
            <span className="text-gradient glow-text">
              <TypeWriter words={typeWriterWords} />
            </span>
            <br />
            <GlitchText text="seu negócio" className="text-foreground" />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Automações inteligentes, <span className="text-primary">Inteligência Artificial</span> e 
            dashboards personalizados para <span className="text-primary">otimizar processos</span> e 
            multiplicar seus resultados.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="glow-primary text-lg px-10 py-7 rounded-xl group relative overflow-hidden">
              <a href="#contato">
                <span className="relative z-10 flex items-center">
                  Iniciar Projeto
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ opacity: 0.3 }}
                />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-10 py-7 rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
              <a href="#servicos">
                Ver Serviços
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { value: "+500", label: "Projetos" },
              { value: "100%", label: "Satisfação" },
              { value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <span className="text-gradient">{stat.value}</span>
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/30 mx-auto flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
