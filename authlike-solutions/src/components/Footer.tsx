import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5527998210071?text=Ol%C3%A1%2C%20vim%20do%20site.%20Gostaria%20de%20saber%20mais!";
const INSTAGRAM_URL = "https://www.instagram.com/authlike.co/";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src="/logo-authlike.png" 
                alt="AuthLike Tecnologia" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Transformando empresas através da tecnologia com soluções inteligentes, 
              automações e inteligência artificial.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ y: -3 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3 text-muted-foreground">
              {["Inteligência Artificial", "Automações", "Dashboards", "Suporte Automatizado"].map((item) => (
                <li key={item}>
                  <a href="#servicos" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                contato@authlike.com.br
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Brasil
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AuthLike Tecnologia. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              CNPJ: 46.367.335/0001-43
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
