import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const WHATSAPP_URL = "https://wa.me/5527998210071?text=Ol%C3%A1%2C%20vim%20do%20site.%20Gostaria%20de%20saber%20mais!";

const CTA = () => {
  const isMobile = useIsMobile();
  return (
    <section id="contato" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
            <motion.div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(217 91% 60% / 0.2) 0%, transparent 50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 tech-grid opacity-30" />
          </div>
          
          <div className="glass-card rounded-[2rem]" />

          <div className="relative p-12 md:p-24 text-center">
            {/* Floating sparkles - desktop only */}
            {!isMobile && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-primary/50" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="relative w-24 h-24 mx-auto mb-10"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-12 h-12 text-primary" />
              </div>
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-2xl border border-primary/30 pulse-ring" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Pronto para{" "}
              <span className="text-gradient glow-text">transformar</span>
              <br />
              seu negócio?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
            >
              Entre em contato agora e descubra como podemos ajudar sua empresa 
              a crescer com soluções tecnológicas personalizadas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                asChild 
                className="glow-primary text-lg px-12 py-8 rounded-xl group relative overflow-hidden"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center font-semibold">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Falar no WhatsApp
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ opacity: 0.3 }}
                  />
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-muted-foreground mt-8"
            >
              ⚡ Resposta em até 24 horas úteis
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
