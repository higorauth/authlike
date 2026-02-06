import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";
import MouseGlow from "@/components/MouseGlow";
import CodeRain from "@/components/CodeRain";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark overflow-x-hidden relative">
      {/* Background layers */}
      <CodeRain />
      <TechBackground />
      <MouseGlow />
      
      {/* Hero gradient overlay */}
      <div className="hero-gradient fixed inset-0 pointer-events-none" />
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
