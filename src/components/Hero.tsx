import heroMakkah from "@/assets/hero-makkah.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroMakkah} 
          alt="Kaaba in Makkah" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-islamic font-bold mb-6 animate-fade-in">
          بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
          Découvrez l'Islam
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in font-arabic">
          Un guide complet pour comprendre les principes, les pratiques et la beauté de l'Islam
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:bg-accent-dark text-accent-foreground font-semibold px-8 py-4 text-lg shadow-golden"
          >
            Commencer l'exploration
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg backdrop-blur-sm"
          >
            En savoir plus
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;