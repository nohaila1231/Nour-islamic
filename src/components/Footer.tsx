import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">☪</span>
              </div>
              <span className="text-xl font-islamic font-bold">
                Islam Guide
              </span>
            </div>
            <p className="text-primary-foreground/80 font-arabic">
              Un guide complet pour découvrir et comprendre les beautés de l'Islam, 
              ses pratiques et ses valeurs universelles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-islamic">Navigation Rapide</h3>
            <div className="space-y-2">
              {[
                { name: "Accueil", href: "#home" },
                { name: "Prière", href: "#prayer" },
                { name: "Ramadan", href: "#ramadan" },
                { name: "Makkah", href: "#makkah" },
                { name: "Coran", href: "#quran" },
                { name: "Hajj", href: "#hajj" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Islamic Quote */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-islamic">Citation</h3>
            <div className="bg-primary-light/20 p-4 rounded-lg">
              <p className="text-primary-foreground/90 italic font-arabic text-center">
                "Et c'est Lui qui, du ciel, a fait descendre de l'eau 
                avec laquelle Nous fîmes germer toute plante"
              </p>
              <p className="text-sm text-primary-foreground/70 text-center mt-2">
                - Coran, Sourate Al-An'am (6:99)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/80 font-arabic">
              © 2024 Islam Guide. Créé avec{" "}
              <Heart className="inline h-4 w-4 text-accent mx-1" />
              pour partager la beauté de l'Islam
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
              "اللَّهُمَّ بَارِكْ لَنَا" - Qu'Allah nous bénisse
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;