import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, Headphones, ShoppingCart, Settings, Terminal } from "lucide-react";
import HolographicCard from "./HolographicCard";

const services = [
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description: "Chatbots inteligentes, assistentes virtuais e soluções de IA para atendimento, vendas e suporte automatizado.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    code: "ai.process()",
  },
  {
    icon: Workflow,
    title: "Automações e Software",
    description: "Automatize processos repetitivos, integre sistemas e elimine tarefas manuais para ganhar eficiência.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    code: "automate()",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Painéis interativos e relatórios personalizados para visualização e análise de dados em tempo real.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    code: "analytics()",
  },
  {
    icon: Headphones,
    title: "Suporte Automatizado",
    description: "Atendimento 24/7 com IA, respostas instantâneas e escalabilidade para sua operação.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    code: "support.run()",
  },
  {
    icon: ShoppingCart,
    title: "Vendas com IA",
    description: "Qualificação de leads, follow-ups automáticos e funis de vendas inteligentes.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    code: "sales.boost()",
  },
  {
    icon: Settings,
    title: "Processos Otimizados",
    description: "Reengenharia de processos com tecnologia para máxima produtividade e redução de custos.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    code: "optimize()",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ⚡ O que fazemos
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções tecnológicas completas para transformar sua empresa e 
            acelerar seus resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full transition-all duration-500 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with terminal code */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                    
                    {/* Code badge */}
                    <motion.div 
                      className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: 10 }}
                      whileInView={{ x: 0 }}
                    >
                      <span className="text-accent/60">$</span> {service.code}
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div 
                    className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <Terminal className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Saiba mais</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
