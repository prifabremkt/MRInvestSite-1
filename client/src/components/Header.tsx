import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/YLrPJJW.png" 
            alt="MRInvest Logo" 
            className="h-8 w-auto"
            data-testid="logo-mrinvest"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#sobre" 
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            data-testid="link-sobre"
          >
            Sobre
          </a>
          <a 
            href="#projetos" 
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            data-testid="link-projetos"
          >
            Projetos
          </a>
          <a 
            href="#como-funciona" 
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            data-testid="link-como-funciona"
          >
            Como Funciona
          </a>
          <a 
            href="#insights" 
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            data-testid="link-insights"
          >
            Insights
          </a>
        </nav>
        
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          data-testid="button-cta-header"
        >
          Quero Investir
        </Button>
      </div>
    </header>
  );
}