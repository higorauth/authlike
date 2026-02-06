import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5527998210071?text=Ol%C3%A1%2C%20vim%20do%20site.%20Gostaria%20de%20saber%20mais!";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <div className="glass-card rounded-2xl">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/logo-authlike.png" 
                alt="AuthLike Tecnologia" 
                className="h-10 w-auto brightness-0 invert"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Benefícios", href: "#beneficios" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-muted-foreground hover:text-foreground transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild className="glow-primary rounded-xl">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale Conosco
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/50"
            >
              <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {[
                  { label: "Serviços", href: "#servicos" },
                  { label: "Benefícios", href: "#beneficios" },
                  { label: "Contato", href: "#contato" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="glow-primary rounded-xl w-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </a>
                </Button>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
