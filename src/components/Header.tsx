import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Accueil", href: "/" },
    { name: "Prière", href: "/prayer" },
    { name: "Ramadan", href: "/ramadan" },
    { name: "Makkah", href: "/makkah" },
    { name: "Coran", href: "/quran" },
    { name: "Hajj", href: "/hajj" }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-sacred rounded-xl flex items-center justify-center shadow-sacred relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-xl opacity-20"></div>
              <svg 
                className="w-6 h-6 text-white relative z-10" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 2h2v2h-2V5zm0 4h2v8h-2V9z"/>
                <path d="M7 7h2v2H7V7zm8 0h2v2h-2V7zm-8 4h2v2H7v-2zm8 0h2v2h-2v-2zm-8 4h2v2H7v-2zm8 0h2v2h-2v-2z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-islamic font-bold text-primary leading-tight">
                القرآن الكريم
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Islam Guide
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;