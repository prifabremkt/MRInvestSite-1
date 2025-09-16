import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/YLrPJJW.png" 
            alt="MRInvest Logo" 
            className="h-7 w-auto brightness-0 invert"
            data-testid="logo-mrinvest"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#sobre" 
            className="text-sm font-medium text-foreground/70 hover:text-foreground relative group transition-all duration-200"
            data-testid="link-sobre"
          >
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-destructive transition-all duration-200 group-hover:w-full" />
          </a>
          <a 
            href="#projetos" 
            className="text-sm font-medium text-foreground/70 hover:text-foreground relative group transition-all duration-200"
            data-testid="link-projetos"
          >
            Projetos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-destructive transition-all duration-200 group-hover:w-full" />
          </a>
          <a 
            href="#como-funciona" 
            className="text-sm font-medium text-foreground/70 hover:text-foreground relative group transition-all duration-200"
            data-testid="link-como-funciona"
          >
            Como Funciona
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-destructive transition-all duration-200 group-hover:w-full" />
          </a>
          <a 
            href="#insights" 
            className="text-sm font-medium text-foreground/70 hover:text-foreground relative group transition-all duration-200"
            data-testid="link-insights"
          >
            Insights
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-destructive transition-all duration-200 group-hover:w-full" />
          </a>
        </nav>
        
        <Button 
          size="sm"
          className="bg-gradient-to-r from-primary to-destructive text-white font-medium"
          data-testid="button-cta-header"
        >
          Quero Investir
        </Button>
      </div>
    </header>
  );
}