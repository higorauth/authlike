import { motion } from "framer-motion";
import { Check, TrendingUp, Clock, Shield, Zap, Users, ArrowRight, Binary } from "lucide-react";
import HolographicCard from "./HolographicCard";
import { useIsMobile } from "@/hooks/use-mobile";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumento de Produtividade",
    description: "Automatize tarefas e libere sua equipe para atividades estratégicas.",
    stat: "+300%",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Processos que levavam horas são executados em minutos.",
    stat: "-80%",
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Proteção e conformidade com as melhores práticas de mercado.",
    stat: "100%",
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Atendimento 24/7 sem espera para seus clientes.",
    stat: "<1s",
  },
  {
    icon: Users,
    title: "Escalabilidade",
    description: "Soluções que crescem junto com o seu negócio.",
    stat: "∞",
  },
];

const checkItems = [
  "Implementação rápida",
  "Suporte dedicado",
  "ROI comprovado",
  "Tecnologia de ponta",
];

const Benefits = () => {
  const isMobile = useIsMobile();

  return (
    <section id="beneficios" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px]" />

        {/* Animated binary background - desktop only */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden opacity-5">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary font-mono text-xs whitespace-nowrap"
                style={{ left: `${i * 10}%`, top: "-20px" }}
                animate={{ y: ["0%", "100vh"] }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              >
                {[...Array(50)].map((_, j) => (
                  <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
                ))}
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              🚀 Por que escolher a AuthLike
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Resultados que{" "}
              <span className="text-gradient glow-text">transformam</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Nossa expertise em tecnologia garante soluções robustas, 
              escaláveis e personalizadas para as necessidades do seu negócio.
            </p>

            {/* Check list with animated icons */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {checkItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <motion.div 
                    className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contato"
              className="inline-flex items-center gap-2 text-primary font-semibold group"
              whileHover={{ x: 5 }}
            >
              Começar agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right column - Benefits cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="glass-card glass-card-hover rounded-xl p-5 flex items-center gap-5 cursor-pointer group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>

                {/* Stat badge */}
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-gradient">{benefit.stat}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
